import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import isBetween from "dayjs/plugin/isBetween";
import duration from "dayjs/plugin/duration";
import debounce from "lodash.debounce";
import { Coords, ZoomLevel, allZoomLevel } from "@/types/global";
import { isAvailableZoom } from "@/types/guards";
import { getDatesRange, getParsedDatesRange } from "@/utils/getDatesRange";
import { parseDay } from "@/utils/dates";
import { getCols, getVisibleCols } from "@/utils/getCols";
import {
  buttonWeeksJump,
  hoursInDay,
  outsideWrapperId,
  screenWidthMultiplier,
  zoom2ButtonJump
} from "@/constants";
import { getCanvasWidth } from "@/utils/getCanvasWidth";
import { calendarContext } from "./calendarContext";
import { CalendarProviderProps } from "./types";
dayjs.extend(weekOfYear);
dayjs.extend(dayOfYear);
dayjs.extend(isoWeek);
dayjs.extend(isBetween);
dayjs.extend(duration);

type Direction = "back" | "forward" | "middle";

const CalendarProvider = ({
  data,
  children,
  isLoading,
  config,
  defaultStartDate = dayjs(),
  onRangeChange,
  handleToggleDisplayActiveUnits,
  onClearFilterData
}: CalendarProviderProps) => {
  const { zoom: configZoom, maxRecordsPerPage = 50 } = config;
  const [zoom, setZoom] = useState<ZoomLevel>(configZoom);
  const [date, setDate] = useState(dayjs());
  const [isInitialized, setIsInitialized] = useState(false);
  const [cols, setCols] = useState(getCols(zoom));
  const isNextZoom = allZoomLevel[zoom] !== allZoomLevel[allZoomLevel.length - 1];
  const isPrevZoom = zoom !== 0;
  const range = useMemo(() => getParsedDatesRange(date, zoom), [date, zoom]);
  const startDate = getDatesRange(date, zoom).startDate;
  const dayOfYear = dayjs(startDate).dayOfYear();
  const parsedStartDate = parseDay(startDate);
  const outsideWrapper = useRef<HTMLElement | null>(null);
  // Set true for the one date change caused by a scroll-boundary loadMore, so the grid's directional slide skips it
  // (boundary loads should be a seamless continuation of the scroll, not an animated jump). Explicit nav leaves it false.
  const suppressNextSlideRef = useRef(false);
  // Direction of a pending scroll reposition to apply once the canvas has redrawn for the new date (see the effect).
  const pendingRepositionRef = useRef<Direction | null>(null);
  const [tilesCoords, setTilesCoords] = useState<Coords[]>([{ x: 0, y: 0 }]);

  const moveHorizontalScroll = useCallback(
    (direction: Direction, behavior: ScrollBehavior = "auto") => {
      const canvasWidth = getCanvasWidth();
      switch (direction) {
        case "back":
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 3
          });

        case "forward":
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 3
          });

        case "middle": {
          const leftOffset = canvasWidth / screenWidthMultiplier / 4; // 1/4 of component's width
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 2 - leftOffset
          });
        }

        default:
          return outsideWrapper.current?.scrollTo({
            behavior,
            left: canvasWidth / 2
          });
      }
    },
    []
  );

  const updateTilesCoords = (coords: Coords[]) => {
    setTilesCoords(coords);
  };

  const loadMore = useCallback(
    (direction: Direction) => {
      const cols = getVisibleCols(zoom);
      let offset: number;
      switch (zoom) {
        case 0:
          offset = cols * 7;
          break;
        case 1:
          offset = cols;
          break;
        case 2:
          offset = Math.ceil(cols / hoursInDay);
          break;
      }
      const load = debounce(() => {
        // Boundary loads (forward/back from a scroll edge) reposition to keep content in place and must NOT play the
        // directional slide — they're a continuation of the scroll, not a jump. Both flags are read on the resulting
        // date-change render (slide skip in Grid, reposition in the effect below), so set them right before setDate.
        if (direction === "forward" || direction === "back") suppressNextSlideRef.current = true;
        pendingRepositionRef.current = direction;
        switch (direction) {
          case "back":
            setDate((prev) => prev.subtract(offset, "days"));
            break;
          case "forward":
            setDate((prev) => prev.add(offset, "days"));
            break;
          case "middle":
            setDate(dayjs());
            break;
        }
        onRangeChange?.(range);
      }, 300);
      load();
    },
    [onRangeChange, range, zoom]
  );

  // Reposition the horizontal scroll AFTER the grid canvas has redrawn for the new date. This runs in the parent
  // (after the child Grid's redraw effect), so the scroll snap and the new content land in the same frame — no more
  // "date shifts, then 200ms later the scroll jumps back" two-step that read as scrolling to the end and back.
  useEffect(() => {
    if (!pendingRepositionRef.current) return;
    moveHorizontalScroll(pendingRepositionRef.current);
    pendingRepositionRef.current = null;
  }, [date, moveHorizontalScroll]);

  useEffect(() => {
    outsideWrapper.current = document.getElementById(outsideWrapperId);
    setCols(getCols(zoom));
  }, [zoom]);

  useEffect(() => {
    const handleResize = () => setCols(getCols(zoom));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [zoom]);

  useEffect(() => {
    onRangeChange?.(range);
  }, [onRangeChange, range]);

  useEffect(() => {
    // when defaultStartDate changes repaint grid
    setIsInitialized(false);
  }, [defaultStartDate]);

  useEffect(() => {
    if (isInitialized) return;

    moveHorizontalScroll("middle");
    setIsInitialized(true);
    setDate(defaultStartDate);
  }, [defaultStartDate, isInitialized, moveHorizontalScroll]);

  const handleGoNext = () => {
    if (isLoading) return;

    setDate((prev) =>
      zoom === 2 ? prev.add(zoom2ButtonJump, "hours") : prev.add(buttonWeeksJump, "weeks")
    );
    onRangeChange?.(range);
  };

  const handleScrollNext = useCallback(() => {
    if (isLoading) return;
    // loadMore marks the reposition pending; the [date] effect applies it right after the redraw (no separate timer).
    loadMore("forward");
  }, [isLoading, loadMore]);

  const handleGoPrev = () => {
    if (isLoading) return;

    setDate((prev) =>
      zoom === 2 ? prev.subtract(zoom2ButtonJump, "hours") : prev.subtract(buttonWeeksJump, "weeks")
    );
    onRangeChange?.(range);
  };

  const handleScrollPrev = useCallback(() => {
    if (!isInitialized || isLoading) return;
    loadMore("back");
  }, [isInitialized, isLoading, loadMore]);

  const handleGoToday = useCallback(() => {
    if (isLoading) return;
    // loadMore("middle") sets the date to today AND marks a center reposition; the [date] effect applies it after the
    // redraw. Not a boundary direction, so the directional slide still plays.
    loadMore("middle");
  }, [isLoading, loadMore]);

  const goToDate = useCallback(
    (targetDate: Date | string | number) => {
      if (isLoading) return;

      // Handle various input types and normalize to start of day
      // This ensures consistent behavior regardless of input format
      const newDate = dayjs(targetDate).startOf("day");
      if (!newDate.isValid()) return;

      // Mark a center reposition; the [date] effect applies it after the redraw. Explicit nav ⇒ the slide plays.
      pendingRepositionRef.current = "middle";
      setDate(newDate);
      onRangeChange?.(range);
    },
    [isLoading, onRangeChange, range]
  );

  const zoomIn = () => changeZoom(zoom + 1);

  const zoomOut = () => changeZoom(zoom - 1);

  const changeZoom = (zoomLevel: number) => {
    if (!isAvailableZoom(zoomLevel)) return;
    setZoom(zoomLevel);
    setCols(getCols(zoomLevel));
    onRangeChange?.(range);
  };

  const toggleDisplayActiveUnits = () => handleToggleDisplayActiveUnits?.();

  const { Provider } = calendarContext;

  return (
    <Provider
      value={{
        data,
        config,
        handleGoNext,
        handleScrollNext,
        handleGoPrev,
        handleScrollPrev,
        handleGoToday,
        goToDate,
        zoomIn,
        zoomOut,
        setZoom: changeZoom,
        zoom,
        isNextZoom,
        isPrevZoom,
        date,
        isLoading,
        cols,
        startDate: parsedStartDate,
        dayOfYear,
        toggleDisplayActiveUnits,
        tilesCoords,
        updateTilesCoords,
        recordsThreshold: maxRecordsPerPage,
        onClearFilterData,
        suppressNextSlideRef
      }}>
      {children}
    </Provider>
  );
};

const useCalendar = () => useContext(calendarContext);

export default CalendarProvider;
export { useCalendar };

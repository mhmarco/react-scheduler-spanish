import { ThemeProvider } from "styled-components";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  MutableRefObject
} from "react";
import dayjs from "dayjs";
import { Calendar } from "@/components";
import CalendarProvider, { useCalendar } from "@/context/CalendarProvider";
import LocaleProvider from "@/context/LocaleProvider";
import { darkTheme, GlobalStyle, theme } from "@/styles";
import { Config, SchedulerCategory, SchedulerData, ZoomLevel } from "@/types/global";
import { outsideWrapperId } from "@/constants";
import { isAvailableZoom } from "@/types/guards";
import { EventDropData, EventDragData, DraggableConfig } from "@/hooks/types";
import { SchedulerProps, SchedulerRef } from "./types";
import { StyledInnerWrapper, StyledOutsideWrapper } from "./styles";

type SchedulerContentProps = {
  data: SchedulerData;
  baseData?: SchedulerData;
  categories?: SchedulerCategory[];
  onTileClick?: SchedulerProps["onTileClick"];
  topBarWidth: number;
  onItemClick?: SchedulerProps["onItemClick"];
  toggleTheme: () => void;
  onEventDrop?: (dropData: EventDropData) => Promise<boolean> | boolean;
  onEventDrag?: (dragData: EventDragData) => void;
  draggableConfig?: DraggableConfig;
  schedulerRef: MutableRefObject<SchedulerRef | null>;
  onTimeRangeSelect?: SchedulerProps["onTimeRangeSelect"];
  onMultiTimeRangeSelect?: SchedulerProps["onMultiTimeRangeSelect"];
  clickToAddConfig?: SchedulerProps["clickToAddConfig"];
};

const SchedulerContent = ({
  data,
  baseData,
  categories,
  onTileClick,
  topBarWidth,
  onItemClick,
  toggleTheme,
  onEventDrop,
  onEventDrag,
  draggableConfig,
  schedulerRef,
  onTimeRangeSelect,
  onMultiTimeRangeSelect,
  clickToAddConfig
}: SchedulerContentProps) => {
  const { goToDate, handleGoToday, zoomIn, zoomOut, zoom } = useCalendar();

  useImperativeHandle(
    schedulerRef,
    () => ({
      goToDate,
      goToToday: handleGoToday,
      setZoom: (newZoom: ZoomLevel) => {
        if (!isAvailableZoom(newZoom)) return;
        const diff = newZoom - zoom;
        if (diff > 0) {
          for (let i = 0; i < diff; i++) zoomIn();
        } else {
          for (let i = 0; i < Math.abs(diff); i++) zoomOut();
        }
      }
    }),
    [goToDate, handleGoToday, zoom, zoomIn, zoomOut]
  );

  return (
    <Calendar
      data={data}
      baseData={baseData}
      categories={categories}
      onTileClick={onTileClick}
      topBarWidth={topBarWidth}
      onItemClick={onItemClick}
      toggleTheme={toggleTheme}
      onEventDrop={onEventDrop}
      onEventDrag={onEventDrag}
      draggableConfig={draggableConfig}
      onTimeRangeSelect={onTimeRangeSelect}
      onMultiTimeRangeSelect={onMultiTimeRangeSelect}
      clickToAddConfig={clickToAddConfig}
    />
  );
};

const Scheduler = forwardRef<SchedulerRef, SchedulerProps>(function Scheduler(
  {
    data,
    categories,
    baseData,
    config,
    startDate,
    onRangeChange,
    onTileClick,
    handleToggleDisplayActiveUnits,
    onClearFilterData,
    onItemClick,
    isLoading,
    onEventDrop,
    onEventDrag,
    draggableConfig,
    onTimeRangeSelect,
    onMultiTimeRangeSelect,
    clickToAddConfig
  },
  ref
) {
  const appConfig: Config = useMemo(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: false,
      showTooltip: true,
      translations: undefined,
      ...config
    }),
    [config]
  );

  const outsideWrapperRef = useRef<HTMLDivElement>(null);
  const schedulerRef = useRef<SchedulerRef | null>(null);
  const [topBarWidth, setTopBarWidth] = useState(outsideWrapperRef.current?.clientWidth);
  const defaultStartDate = useMemo(() => dayjs(startDate), [startDate]);
  const [themeMode, setThemeMode] = useState<"light" | "dark">(appConfig.defaultTheme ?? "light");
  const toggleTheme = () => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  const currentTheme = themeMode === "light" ? theme : darkTheme;
  const customColors = appConfig.theme ? appConfig.theme[currentTheme.mode] : {};
  const mergedTheme = {
    ...currentTheme,
    colors: {
      ...currentTheme.colors,
      ...customColors
    }
  };

  // Forward the internal ref to the external ref
  useImperativeHandle(
    ref,
    () => ({
      goToDate: (date: Date | string | number) => schedulerRef.current?.goToDate(date),
      goToToday: () => schedulerRef.current?.goToToday(),
      setZoom: (zoom: ZoomLevel) => schedulerRef.current?.setZoom(zoom)
    }),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (outsideWrapperRef.current) {
        setTopBarWidth(outsideWrapperRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!outsideWrapperRef.current) null;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mergedTheme}>
        <LocaleProvider lang={appConfig.lang} translations={appConfig.translations}>
          <CalendarProvider
            data={data}
            isLoading={!!isLoading}
            config={appConfig}
            onRangeChange={onRangeChange}
            defaultStartDate={defaultStartDate}
            handleToggleDisplayActiveUnits={handleToggleDisplayActiveUnits}
            onClearFilterData={onClearFilterData}>
            <StyledOutsideWrapper
              showScroll={!!data.length}
              id={outsideWrapperId}
              ref={outsideWrapperRef}>
              <StyledInnerWrapper>
                <SchedulerContent
                  data={data}
                  baseData={baseData}
                  categories={categories}
                  onTileClick={onTileClick}
                  topBarWidth={topBarWidth ?? 0}
                  onItemClick={onItemClick}
                  toggleTheme={toggleTheme}
                  onEventDrop={onEventDrop}
                  onEventDrag={onEventDrag}
                  draggableConfig={draggableConfig}
                  schedulerRef={schedulerRef}
                  onTimeRangeSelect={onTimeRangeSelect}
                  onMultiTimeRangeSelect={onMultiTimeRangeSelect}
                  clickToAddConfig={clickToAddConfig}
                />
              </StyledInnerWrapper>
            </StyledOutsideWrapper>
          </CalendarProvider>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
});

export default Scheduler;

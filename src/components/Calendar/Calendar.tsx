import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useCalendar } from "@/context/CalendarProvider";
import { Day, SchedulerData, SchedulerProjectData, TooltipData, ZoomLevel } from "@/types/global";
import { getTooltipData } from "@/utils/getTooltipData";
import { getDatesRange } from "@/utils/getDatesRange";
import { usePagination } from "@/hooks/usePagination";
import EmptyBox from "../EmptyBox";
import { Grid, Header, LeftColumn, Tooltip } from "..";
import { CalendarProps } from "./types";
import { StyledOuterWrapper, StyledInnerWrapper } from "./styles";

const initialTooltipData: TooltipData = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  },
  reservationData: { startTime: "", client: "", eventName: "" }
};

export const Calendar: FC<CalendarProps> = ({ data, onTileClick, onItemClick, topBarWidth }) => {
  const [tooltipData, setTooltipData] = useState<TooltipData>(initialTooltipData);
  const [filteredData, setFilteredData] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const {
    zoom,
    startDate,
    date,
    config: { includeTakenHoursOnWeekendsInDayView }
  } = useCalendar();
  const gridRef = useRef<HTMLDivElement>(null);

  const datesRange = useMemo(() => getDatesRange(date, zoom), [date, zoom]);
  const {
    page,
    projectsPerPerson,
    totalRowsPerPage,
    rowsPerItem,
    currentPageNum,
    pagesAmount,
    next,
    previous,
    reset
  } = usePagination(filteredData, datesRange);
  const debouncedHandleMouseOver = useRef(
    debounce(
      (
        e: MouseEvent,
        schedulerData: SchedulerData,
        startDate: Day,
        rowsPerItem: number[],
        projectsPerPerson: SchedulerProjectData[][][],
        zoom: ZoomLevel
      ) => {
        if (!gridRef.current) return;
        const bookingNumber = getBookingNumber(e);
        if (!bookingNumber) {
          setIsVisible(false);
          setTooltipData(initialTooltipData);
          return;
        }
        const reservation = getReservation(bookingNumber, schedulerData);
        const { left, top } = gridRef.current.getBoundingClientRect();
        const tooltipCoords = { x: e.clientX - left, y: e.clientY - top };
        const {
          coords: { x, y },
          resourceIndex,
          disposition,
          reservationData: { startTime, client, eventName }
        } = getTooltipData(
          reservation!,
          startDate,
          tooltipCoords,
          rowsPerItem,
          projectsPerPerson,
          zoom,
          includeTakenHoursOnWeekendsInDayView
        );
        setTooltipData({
          coords: { x, y },
          resourceIndex,
          disposition,
          reservationData: { startTime, client, eventName }
        });
        setIsVisible(true);
      },
      300
    )
  );
  const debouncedFilterData = useRef(
    debounce((dataToFilter: SchedulerData, enteredSearchPhrase: string) => {
      reset();
      setFilteredData(
        dataToFilter.filter((item) =>
          item.label.title.toLowerCase().includes(enteredSearchPhrase.toLowerCase())
        )
      );
    }, 500)
  );

  const getReservation = (bookingNumber: string, schedulerData: SchedulerData) => {
    if (!bookingNumber) return;
    let reservation: SchedulerProjectData;
    return schedulerData
      .flatMap((item) => item.data)
      .find((row) => {
        if (row.description) {
          return row.description.includes(bookingNumber);
        }
        return false;
      });
  };

  const getBookingNumber = (event: MouseEvent) => {
    if (!event.target) return;
    const button = (event.target as HTMLElement).closest("button");
    if (!button) return;

    const paragraphs = button.querySelectorAll("p");
    if (paragraphs.length < 3) return;

    const thirdParagraphText = paragraphs[2].textContent;
    if (!thirdParagraphText) return;
    return extractBookingNumber(thirdParagraphText);
  };

  const extractBookingNumber = (str: string): string | null => {
    //return str;
    const match = str.match(/Booking:\s*(.+)/);
    return match ? match[1] : null;
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    setSearchPhrase(phrase);
    debouncedFilterData.current.cancel();
    debouncedFilterData.current(data, phrase);
  };

  const handleMouseLeave = useCallback(() => {
    debouncedHandleMouseOver.current.cancel();
    setIsVisible(false);
    setTooltipData(initialTooltipData);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) =>
      debouncedHandleMouseOver.current(e, data, startDate, rowsPerItem, projectsPerPerson, zoom);
    const gridArea = gridRef.current;

    if (!gridArea) return;

    gridArea.addEventListener("mousemove", handleMouseOver);
    gridArea.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      gridArea.removeEventListener("mousemove", handleMouseOver);
      gridArea.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    debouncedHandleMouseOver,
    handleMouseLeave,
    projectsPerPerson,
    rowsPerItem,
    startDate,
    zoom,
    data
  ]);

  useEffect(() => {
    if (searchPhrase) return;

    setFilteredData(data);
  }, [data, searchPhrase]);

  return (
    <StyledOuterWrapper>
      <LeftColumn
        data={page}
        pageNum={currentPageNum}
        pagesAmount={pagesAmount}
        rows={rowsPerItem}
        onLoadNext={next}
        onLoadPrevious={previous}
        searchInputValue={searchPhrase}
        onSearchInputChange={handleSearch}
        onItemClick={onItemClick}
      />
      <StyledInnerWrapper>
        <Header zoom={zoom} topBarWidth={topBarWidth} />
        {data.length ? (
          <Grid
            data={page}
            zoom={zoom}
            rows={totalRowsPerPage}
            ref={gridRef}
            onTileClick={onTileClick}
          />
        ) : (
          <EmptyBox />
        )}
        {isVisible && tooltipData?.resourceIndex > -1 && (
          <Tooltip tooltipData={tooltipData} zoom={zoom} />
        )}
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  );
};

export default Calendar;

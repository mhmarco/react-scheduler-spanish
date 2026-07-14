import { FC, useMemo } from "react";
import dayjs from "dayjs";
import { Day, ZoomLevel } from "@/types/global";
import { dayWidth, singleDayWidth } from "@/constants";
import { useCalendar } from "@/context/CalendarProvider";
import { StyledTodayColumn } from "./styles";

type TodayColumnProps = {
  zoom: ZoomLevel;
  startDate: Day;
};

// Full-height framed HOY column drawn over the canvas, behind the tiles (plan §22.3). Mirrors the
// PendingSelections geometry (x = cellsFromStart * cellWidth) so it lines up with the grid cells, and takes its
// teal from theme.colors.today. Hidden in the hourly view (the header/canvas tint marks today there).
const TodayColumn: FC<TodayColumnProps> = ({ zoom, startDate }) => {
  const { cols } = useCalendar();

  const geometry = useMemo(() => {
    if (zoom === 2) return null;
    const cellWidth = zoom === 0 ? singleDayWidth * 7 : dayWidth;
    const baseDate = dayjs()
      .year(startDate.year)
      .month(startDate.month)
      .date(startDate.dayOfMonth)
      .startOf("day");
    const today = dayjs().startOf("day");
    // zoom 0 columns are whole weeks: align to the ISO-week boundary the header highlights (isSame(_,"week")),
    // not a raw 7-day count from an unaligned range start — otherwise the frame can land one week off the header.
    const cellsFromStart =
      zoom === 0
        ? today.startOf("week").diff(baseDate.startOf("week"), "week")
        : today.diff(baseDate, "days");
    if (cellsFromStart < 0 || cellsFromStart >= cols) return null;
    return { x: cellsFromStart * cellWidth, width: cellWidth };
  }, [zoom, startDate, cols]);

  if (!geometry) return null;

  return <StyledTodayColumn style={{ left: `${geometry.x}px`, width: `${geometry.width}px` }} aria-hidden />;
};

export default TodayColumn;

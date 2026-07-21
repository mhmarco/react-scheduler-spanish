import dayjs from "dayjs";
import { Day, ZoomLevel } from "@/types/global";
import { dayWidth, singleDayWidth } from "@/constants";

// x/width of the grid column that contains `target`, or null when it isn't drawable (hourly view, or outside the
// rendered range). Mirrors the PendingSelections/HOY geometry (x = cellsFromStart * cellWidth) so overlays line up
// with the cells. Week columns align to the ISO-week boundary the header highlights, not a raw 7-day count.
export const getColumnGeometry = (
  target: dayjs.Dayjs,
  zoom: ZoomLevel,
  startDate: Day,
  cols: number
): { x: number; width: number } | null => {
  if (zoom === 2) return null;
  const cellWidth = zoom === 0 ? singleDayWidth * 7 : dayWidth;
  const baseDate = dayjs()
    .year(startDate.year)
    .month(startDate.month)
    .date(startDate.dayOfMonth)
    .startOf("day");
  const t = target.startOf("day");
  const cellsFromStart =
    zoom === 0
      ? t.startOf("week").diff(baseDate.startOf("week"), "week")
      : t.diff(baseDate, "days");
  if (cellsFromStart < 0 || cellsFromStart >= cols) return null;
  return { x: cellsFromStart * cellWidth, width: cellWidth };
};

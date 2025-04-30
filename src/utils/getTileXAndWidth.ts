import { dayWidth, minutesInHour, singleDayWidth, zoom2ColumnWidth } from "@/constants";
import { DatesRange } from "./getDatesRange";

export const getTileXAndWidth = (item: DatesRange, range: DatesRange, zoom: number) => {
  let cellWidth: number;
  const MIN_WIDTH = 50; // Define a minimum width

  switch (zoom) {
    case 0:
      cellWidth = singleDayWidth;
      break;
    case 2:
      cellWidth = zoom2ColumnWidth;
      break;
    default:
      cellWidth = dayWidth;
  }

  const getX = () => {
    let position;
    switch (zoom) {
      case 2:
        position =
          (item.startDate.diff(range.startDate, "minute") / minutesInHour + 1) * cellWidth -
          cellWidth / 2;
        break;
      default: {
        position = (item.startDate.diff(range.startDate, "day") + 1) * cellWidth;
      }
    }
    return Math.max(0, position);
  };

  if (item.startDate.isAfter(range.startDate) && item.endDate.isBefore(range.endDate)) {
    let width;
    switch (zoom) {
      case 2:
        width = Math.max(
          (item.endDate.diff(item.startDate, "minute") / minutesInHour) * cellWidth,
          MIN_WIDTH
        );
        break;
      default:
        width = Math.max(
          item.endDate.diff(item.startDate, "day") * cellWidth + cellWidth,
          MIN_WIDTH
        );
    }

    return { x: getX(), width };
  }

  if (item.startDate.isBefore(range.startDate) && item.endDate.isBefore(range.endDate)) {
    let width;
    switch (zoom) {
      case 2:
        width = Math.max(
          (item.endDate.diff(range.startDate, "minute") / minutesInHour) * cellWidth +
            0.5 * cellWidth,
          MIN_WIDTH
        );
        break;
      default:
        width = Math.max(
          item.endDate.diff(range.startDate, "day") * cellWidth + cellWidth,
          MIN_WIDTH
        );
    }

    return { x: getX(), width };
  }

  if (item.startDate.isAfter(range.startDate) && item.endDate.isAfter(range.endDate)) {
    let width;
    switch (zoom) {
      case 2:
        width = Math.max(
          (range.endDate.diff(item.startDate, "minute") / minutesInHour) * cellWidth,
          MIN_WIDTH
        );
        break;
      default:
        width = Math.max(
          range.endDate.diff(item.startDate, "day") * cellWidth + cellWidth,
          MIN_WIDTH
        );
    }

    return { x: getX(), width };
  }

  if (item.startDate.isBefore(range.startDate) && item.endDate.isAfter(range.endDate)) {
    let width;
    switch (zoom) {
      case 2:
        width = Math.max(
          (range.endDate.diff(range.startDate, "minute") / minutesInHour) * cellWidth,
          MIN_WIDTH
        );
        break;
      default:
        width = Math.max(
          range.endDate.diff(range.startDate, "day") * cellWidth + cellWidth,
          MIN_WIDTH
        );
    }

    return { x: getX(), width };
  }

  return { x: getX(), width: MIN_WIDTH }; // Ensure a minimum width
};


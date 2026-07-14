import dayjs from "dayjs";
import { Day } from "@/types/global";
import { Theme } from "@/styles";
import { boxHeight, zoom2ColumnWidth } from "@/constants";
import { getIsBusinessDay } from "../dates";
import { drawCell } from "./drawCell";
import { getSeparatorOffset } from "./getSeparatorOffset";

export const drawHourlyView = (
  ctx: CanvasRenderingContext2D,
  rows: number,
  cols: number,
  startDate: Day,
  theme: Theme,
  separatorRowIndices: number[] = []
) => {
  const date = dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth + 1}`);
  for (let i = 0; i < rows; i++) {
    const yOffset = getSeparatorOffset(i, separatorRowIndices);

    for (let j = 0; j <= cols; j++) {
      let hour;
      if (j === Math.floor(cols / 2)) {
        hour = dayjs();
      } else if (j > Math.floor(cols / 2)) {
        hour = dayjs().add(j - Math.floor(cols / 2), "hours");
      } else {
        hour = dayjs().subtract(Math.floor(cols / 2) - i, "hours");
      }
      const isCurrentHour = date.isSame(dayjs(), "day") && hour.isSame(dayjs(), "hour");
      drawCell(
        ctx,
        j * zoom2ColumnWidth + zoom2ColumnWidth / 2 - 0.5,
        i * boxHeight + yOffset,
        zoom2ColumnWidth,
        getIsBusinessDay(hour),
        isCurrentHour,
        theme
      );
    }
  }
};

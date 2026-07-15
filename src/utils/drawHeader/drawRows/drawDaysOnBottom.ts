import dayjs from "dayjs";
import { Day } from "@/types/global";
import {
  dayNameYoffset,
  dayNumYOffset,
  dayWidth,
  fonts,
  headerDayHeight,
  headerHeight,
  headerMonthHeight,
  headerWeekHeight
} from "@/constants";
import { parseDay } from "@/utils/dates";
import { Theme } from "@/styles";
import { drawRow } from "../../drawRow";
import { getBoxFillStyle } from "../../getBoxFillStyle";
import { getTextStyle } from "../../getTextStyle";

export const drawDaysOnBottom = (
  ctx: CanvasRenderingContext2D,
  cols: number,
  startDate: Day,
  theme: Theme
) => {
  const dayNameYPos = headerHeight - headerDayHeight / dayNameYoffset;
  const dayNumYPos = headerHeight - headerDayHeight / dayNumYOffset;
  const yPos = headerMonthHeight + headerWeekHeight;
  let xPos = 0;

  for (let i = 0; i < cols; i++) {
    const day = parseDay(
      dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`).add(i, "days")
    );
    // HOY marker in the primary (monthly) view (§22.3): the current-day header cell reads "HOY" in bold teal over
    // a teal wash, distinct from the generic current-day tint — so today is unmistakable.
    const isToday = day.isCurrentDay;
    drawRow(
      {
        ctx,
        x: xPos,
        y: yPos,
        width: dayWidth,
        height: headerDayHeight,
        isBottomRow: true,
        fillStyle: isToday
          ? theme.colors.today + "26"
          : getBoxFillStyle({ isCurrent: false, isBusinessDay: day.isBusinessDay }, theme),
        topText: {
          y: dayNameYPos,
          label: isToday ? "HOY" : day.dayName.toUpperCase(),
          font: isToday ? "700 14px Inter" : fonts.bottomRow.name,
          color: isToday
            ? theme.colors.today
            : getTextStyle({ isCurrent: false, isBusinessDay: day.isBusinessDay }, theme)
        },
        bottomText: {
          y: dayNumYPos,
          label: `${day.dayOfMonth}`,
          font: isToday ? "700 10px Inter" : fonts.bottomRow.number,
          color: isToday
            ? theme.colors.today
            : getTextStyle(
                { isCurrent: false, isBusinessDay: day.isBusinessDay, variant: "bottomRow" },
                theme
              )
        }
      },
      theme
    );

    xPos += dayWidth;
  }
};

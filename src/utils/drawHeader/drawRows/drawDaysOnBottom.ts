import dayjs from "dayjs";
import { Day } from "@/types/global";
import {
  dayNameYoffset,
  dayNumYOffset,
  dayWidth,
  fontFamily,
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
    // HOY marker in the primary (monthly) view (§22.3): a filled teal "HOY" pill replaces the day name over a teal
    // wash, with the day number teal-bold — so today is unmistakable.
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
          : day.isBusinessDay
          ? theme.colors.gridBackground
          : theme.colors.primary,
        topText: {
          y: dayNameYPos,
          label: isToday ? "" : day.dayName.toUpperCase(),
          font: fonts.bottomRow.name,
          color: getTextStyle({ isCurrent: false, isBusinessDay: day.isBusinessDay }, theme)
        },
        bottomText: {
          y: dayNumYPos,
          label: `${day.dayOfMonth}`,
          font: isToday ? `700 10px ${fontFamily}` : fonts.bottomRow.number,
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

    if (isToday) {
      const pillW = 30;
      const pillH = 13;
      const cx = xPos + dayWidth / 2;
      const py = dayNameYPos - pillH / 2;
      ctx.save();
      ctx.fillStyle = theme.colors.today;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(cx - pillW / 2, py, pillW, pillH, 5);
      else ctx.rect(cx - pillW / 2, py, pillW, pillH);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = `800 8.5px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("HOY", cx, py + pillH / 2 + 0.5);
      ctx.restore();
    }

    xPos += dayWidth;
  }
};

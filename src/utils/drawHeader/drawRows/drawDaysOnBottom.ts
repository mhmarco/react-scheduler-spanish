import dayjs from "dayjs";
import { Day } from "@/types/global";
import {
  dayWidth,
  fontFamily,
  headerDayHeight,
  headerMonthHeight,
  headerWeekHeight
} from "@/constants";
import { parseDay } from "@/utils/dates";
import { Theme } from "@/styles";
import { drawRow } from "../../drawRow";

export const drawDaysOnBottom = (
  ctx: CanvasRenderingContext2D,
  cols: number,
  startDate: Day,
  theme: Theme,
  // Height reserved for the week row above the days (0 hides it — the day row moves up and the header shrinks).
  weekHeight: number = headerWeekHeight
) => {
  const yPos = headerMonthHeight + weekHeight;
  // Stack the weekday name over the date number with a slight bottom margin before the grid (artifact breathing room).
  const dayNameYPos = yPos + 13;
  const dayNumYPos = yPos + 27;
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
        // Day headers stay UNIFORM across the week — weekends get no header tint (artifact: only the grid BODY washes
        // weekends, the header row never does). Today keeps its opaque currentDay fill so scrolling events don't bleed
        // through the HOY cell.
        fillStyle: isToday ? theme.colors.currentDay : theme.colors.gridBackground,
        // Reimagined hierarchy (artifact): the weekday name is the small muted label, the date number is the large
        // bold teal figure — the inverse of the old 14px-name / 10px-number. The trailing locale period is stripped.
        topText: {
          y: dayNameYPos,
          label: isToday ? "" : day.dayName.replace(/\./g, "").toUpperCase(),
          font: `600 10px ${fontFamily}`,
          color: theme.mode === "dark" ? theme.colors.placeholder : "#74897F"
        },
        bottomText: {
          y: dayNumYPos,
          label: `${day.dayOfMonth}`,
          font: isToday ? `700 12px ${fontFamily}` : `700 13px ${fontFamily}`,
          color: isToday
            ? theme.colors.today
            : theme.mode === "dark"
            ? theme.colors.textPrimary
            : "#183D3D"
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

    // Month boundary: continue the body's green month separator up through the header so it reads as one line.
    if (day.dayOfMonth === 1) {
      ctx.save();
      ctx.strokeStyle = theme.mode === "dark" ? theme.colors.today : "#5C8374";
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(xPos + 0.5, 0);
      ctx.lineTo(xPos + 0.5, yPos + headerDayHeight);
      ctx.stroke();
      ctx.restore();
    }

    xPos += dayWidth;
  }
};

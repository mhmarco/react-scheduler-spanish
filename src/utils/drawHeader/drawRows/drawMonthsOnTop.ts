import dayjs from "dayjs";
import { dayWidth, fontFamily, headerMonthHeight, monthsInYear, topRowTextYPos } from "@/constants";
import { Day } from "@/types/global";
import { Theme } from "@/styles";
import { drawRow } from "../../drawRow";

// The label is repeated inside the month block so one copy stays on screen while the block scrolls past the viewport.
const labelGap = " ".repeat(98);

export const drawMonthsOnTop = (ctx: CanvasRenderingContext2D, startDate: Day, theme: Theme) => {
  const yPos = 0;
  const anchor = dayjs(`${startDate.year}-${startDate.month + 1}-${startDate.dayOfMonth}`);
  let xPos = -startDate.dayOfMonth * dayWidth + dayWidth;

  for (let i = 0; i < monthsInYear; i++) {
    const month = anchor.add(i, "months");
    const width = month.daysInMonth() * dayWidth;
    const label = month.format("MMMM YYYY").toUpperCase();

    drawRow(
      {
        ctx,
        x: xPos,
        y: yPos,
        width,
        height: headerMonthHeight,
        textYPos: topRowTextYPos,
        label: `${label}${labelGap}${label}`,
        font: `800 12px ${fontFamily}`
      },
      theme
    );

    xPos += width;
  }
};

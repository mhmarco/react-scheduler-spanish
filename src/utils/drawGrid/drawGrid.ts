import dayjs from "dayjs";
import { Day } from "@/types/global";
import { boxHeight, canvasWrapperId, dayWidth, subcontractSeparatorHeight } from "@/constants";
import { Theme } from "@/styles";
import { drawMonthlyView } from "./drawMonthlyView";
import { drawYearlyView } from "./drawYearlyView";
import { drawHourlyView } from "./drawHourlyView";
import { drawSeparator } from "./drawSeparator";

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  zoom: number,
  rows: number,
  cols: number,
  parsedStartDate: Day,
  theme: Theme,
  separatorRowIndices: number[] = [],
  subcontractSeparatorRow = -1
) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const canvasWrapper = document.getElementById(canvasWrapperId);
  if (!canvasWrapper) return;

  switch (zoom) {
    case 0:
      drawYearlyView(ctx, rows, cols, parsedStartDate, theme, separatorRowIndices);
      break;
    case 1:
      drawMonthlyView(ctx, rows, cols, parsedStartDate, theme, separatorRowIndices);
      break;
    case 2:
      drawHourlyView(ctx, rows, cols, parsedStartDate, theme, separatorRowIndices);
      break;
  }

  // Draw all separators; only the subcontract one gets the amber line.
  for (let i = 0; i < separatorRowIndices.length; i++) {
    drawSeparator(ctx, i, separatorRowIndices[i], theme, separatorRowIndices[i] === subcontractSeparatorRow);
  }

  // Month-boundary verticals drawn LAST so the line runs continuously OVER the group/separator bands (drawCell paints
  // a per-cell segment first, but the band would otherwise break the line at each group row). Still on the canvas, so
  // it stays UNDER the DOM event tiles. Monthly view only. Height = the exact grid content (rows + separator offsets).
  if (zoom === 1) {
    const base = dayjs(`${parsedStartDate.year}-${parsedStartDate.month + 1}-${parsedStartDate.dayOfMonth}`);
    const contentHeight = rows * boxHeight + separatorRowIndices.length * subcontractSeparatorHeight;
    ctx.strokeStyle = theme.mode === "dark" ? theme.colors.today : "#5C8374";
    ctx.setLineDash([]);
    for (let c = 0; c <= cols; c++) {
      if (base.add(c, "days").date() === 1) {
        const x = c * dayWidth + 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, contentHeight);
        ctx.stroke();
      }
    }
  }
};

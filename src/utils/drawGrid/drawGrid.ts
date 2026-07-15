import { Day } from "@/types/global";
import { boxHeight, canvasWrapperId, subcontractSeparatorHeight } from "@/constants";
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
};

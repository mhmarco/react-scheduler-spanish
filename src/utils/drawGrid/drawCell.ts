import { boxHeight } from "@/constants";
import { Theme } from "@/styles";

// A -45° diagonal hatch tile, built once and cached, used to grey out past days (mockup .colguide.past).
let hatchPattern: CanvasPattern | null = null;
const getHatchPattern = (ctx: CanvasRenderingContext2D): CanvasPattern | null => {
  if (hatchPattern) return hatchPattern;
  const tile = document.createElement("canvas");
  tile.width = 12;
  tile.height = 12;
  const tctx = tile.getContext("2d");
  if (!tctx) return null;
  tctx.strokeStyle = "rgba(120, 137, 127, 0.11)";
  tctx.lineWidth = 6;
  tctx.beginPath();
  tctx.moveTo(-3, 15);
  tctx.lineTo(15, -3);
  tctx.stroke();
  hatchPattern = ctx.createPattern(tile, "repeat");
  return hatchPattern;
};

export const drawCell = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  isBusinessDay: boolean,
  isCurrentDay: boolean,
  theme: Theme,
  isPast = false
) => {
  ctx.strokeStyle = theme.colors.border;
  if (isCurrentDay) {
    ctx.fillStyle = theme.colors.currentDay;
  } else if (isBusinessDay) {
    ctx.fillStyle = "transparent";
  } else {
    ctx.fillStyle = theme.colors.primary;
  }
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.fillRect(x, y, width, boxHeight);
  if (isPast && !isCurrentDay) {
    const pattern = getHatchPattern(ctx);
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fillRect(x, y, width, boxHeight);
    }
  }
  ctx.strokeRect(x + 0.5, y + 0.5, width, boxHeight);
};

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
  tctx.strokeStyle = "rgba(120, 137, 127, 0.045)";
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
  isPast = false,
  isMonthStart = false
) => {
  if (isCurrentDay) {
    ctx.fillStyle = theme.colors.currentDay;
  } else if (isBusinessDay) {
    ctx.fillStyle = "transparent";
  } else {
    // Weekend tint: the SHARED muted green (#E1ECE6) — same colour as the group bands + toolbar header so weekends
    // read as part of the same green language, not a separate paler wash.
    ctx.fillStyle = theme.mode === "dark" ? theme.colors.primary : "#E1ECE6";
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
  const isDark = theme.mode === "dark";
  // Very subtle vertical day divider (right edge) — separates days without the old heavy box.
  ctx.strokeStyle = isDark ? theme.colors.border : "#EEF3F0";
  ctx.beginPath();
  ctx.moveTo(x + width - 0.5, y);
  ctx.lineTo(x + width - 0.5, y + boxHeight);
  ctx.stroke();
  // Subtle horizontal row divider at the TOP of each cell — the left column draws each unit row's divider as a
  // border-TOP, so a bottom line here sat a full row off from those borders (the reported misalignment).
  ctx.strokeStyle = isDark ? theme.colors.border : "#E4EAE7";
  ctx.beginPath();
  ctx.moveTo(x, y + 0.5);
  ctx.lineTo(x + width, y + 0.5);
  ctx.stroke();
  // Month boundary: a green (sage) vertical at the first day of a month, so month changes read clearly.
  if (isMonthStart) {
    ctx.strokeStyle = isDark ? theme.colors.today : "#5C8374";
    ctx.beginPath();
    ctx.moveTo(x + 0.5, y);
    ctx.lineTo(x + 0.5, y + boxHeight);
    ctx.stroke();
  }
};

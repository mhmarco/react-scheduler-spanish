import { boxHeight } from "@/constants";
import { Theme } from "@/styles";

export const drawCell = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  isBusinessDay: boolean,
  isCurrentDay: boolean,
  theme: Theme,
  isMonthStart = false
) => {
  if (isCurrentDay) {
    ctx.fillStyle = theme.colors.currentDay;
  } else if (isBusinessDay) {
    ctx.fillStyle = "transparent";
  } else {
    // Weekend tint: a barely-there sage wash — present enough to read as the weekend, faint enough not to
    // compete with the events on top.
    ctx.fillStyle = theme.mode === "dark" ? theme.colors.primary : "#F2F6F4";
  }
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.fillRect(x, y, width, boxHeight);
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

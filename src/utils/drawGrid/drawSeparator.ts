import { boxHeight, subcontractSeparatorHeight } from "@/constants";
import { Theme } from "@/styles";

export const drawSeparator = (
  ctx: CanvasRenderingContext2D,
  separatorIndex: number,
  separatorRowIndex: number,
  theme: Theme
) => {
  // Y = row offset + all preceding separators' height
  const y = separatorRowIndex * boxHeight + separatorIndex * subcontractSeparatorHeight;
  const width = ctx.canvas.width;
  const midY = y + subcontractSeparatorHeight / 2;

  ctx.fillStyle = theme.mode === "dark" ? theme.colors.primary + "80" : "#F6F7F9";
  ctx.fillRect(0, y, width, subcontractSeparatorHeight);

  ctx.strokeStyle = theme.mode === "dark" ? theme.colors.border : "#DDE0E4";
  ctx.lineWidth = 1;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(0, midY + 0.5);
  ctx.lineTo(width, midY + 0.5);
  ctx.stroke();
};

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

  ctx.fillStyle = theme.mode === "dark" ? theme.colors.primary + "80" : theme.colors.primary;
  ctx.fillRect(0, y, width, subcontractSeparatorHeight);

  // Amber line so the subcontract boundary reads as the subcontract lane (matches the group divider + rows + pills).
  ctx.strokeStyle = theme.colors.subcontractBorder;
  ctx.lineWidth = 2;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(0, midY + 0.5);
  ctx.lineTo(width, midY + 0.5);
  ctx.stroke();
};

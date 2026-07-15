import { boxHeight, subcontractSeparatorHeight } from "@/constants";
import { Theme } from "@/styles";

export const drawSeparator = (
  ctx: CanvasRenderingContext2D,
  separatorIndex: number,
  separatorRowIndex: number,
  theme: Theme,
  isSubcontract = false
) => {
  // Y = row offset + all preceding separators' height
  const y = separatorRowIndex * boxHeight + separatorIndex * subcontractSeparatorHeight;
  const width = ctx.canvas.width;
  const midY = y + subcontractSeparatorHeight / 2;

  ctx.fillStyle = theme.mode === "dark" ? theme.colors.primary + "80" : theme.colors.primary;
  ctx.fillRect(0, y, width, subcontractSeparatorHeight);

  // Only the subcontract boundary gets the amber line (matches the group divider + rows + pills); category-group
  // separators keep the neutral border colour.
  ctx.strokeStyle = isSubcontract ? theme.colors.subcontractBorder : theme.colors.border;
  ctx.lineWidth = isSubcontract ? 2 : 1;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(0, midY + 0.5);
  ctx.lineTo(width, midY + 0.5);
  ctx.stroke();
};

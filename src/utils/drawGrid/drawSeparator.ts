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

  // Just the background band — no centre line. The subcontract band keeps its SUBTLE amber wash; category/group bands
  // get the shared muted GREEN (#E1ECE6) so the group divider reads as a soft grey-green across the grid, matching the
  // left-column label chip, the toolbar header and the weekend columns (one subtle green language across the board).
  ctx.fillStyle = isSubcontract
    ? theme.colors.subcontractBorder + "40"
    : theme.mode === "dark"
    ? theme.colors.primary + "80"
    : "#E1ECE6";
  ctx.fillRect(0, y, width, subcontractSeparatorHeight);
};

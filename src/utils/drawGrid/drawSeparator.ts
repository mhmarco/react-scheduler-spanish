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

  // Just the background band — no centre line. The subcontract band is a SUBTLE amber wash (border colour at low
  // alpha, not the solid saturated token); category bands stay neutral.
  ctx.fillStyle = isSubcontract
    ? theme.colors.subcontractBorder + "40"
    : theme.mode === "dark"
    ? theme.colors.primary + "80"
    : theme.colors.primary;
  ctx.fillRect(0, y, width, subcontractSeparatorHeight);
};

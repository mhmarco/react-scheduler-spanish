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
  // get a faint sage wash so the group divider reads as a soft separator without a heavy coloured stripe.
  ctx.fillStyle = isSubcontract
    ? theme.colors.subcontractBorder + "40"
    : theme.mode === "dark"
    ? theme.colors.primary + "80"
    : "#E9EFEC";
  ctx.fillRect(0, y, width, subcontractSeparatorHeight);
};

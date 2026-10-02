import { boxHeight, subcontractSeparatorHeight } from "@/constants";
import { Theme } from "@/styles";

export type SeparatorVariant = "group" | "subcontract" | "warning";

export const drawSeparator = (
  ctx: CanvasRenderingContext2D,
  separatorIndex: number,
  separatorRowIndex: number,
  theme: Theme,
  variant: SeparatorVariant = "group"
) => {
  // Y = row offset + all preceding separators' height
  const y = separatorRowIndex * boxHeight + separatorIndex * subcontractSeparatorHeight;
  const width = ctx.canvas.width;

  // Just the background band — no centre line. The subcontract band keeps its SUBTLE amber wash, a group that needs
  // attention a faint red one; category/group bands get a faint sage wash so the group divider reads as a soft
  // separator without a heavy coloured stripe.
  ctx.fillStyle =
    variant === "subcontract"
      ? theme.colors.subcontractBorder + "40"
      : variant === "warning"
      ? theme.colors.warning + "26"
      : theme.mode === "dark"
      ? theme.colors.primary + "80"
      : "#E9EFEC";
  ctx.fillRect(0, y, width, subcontractSeparatorHeight);
};

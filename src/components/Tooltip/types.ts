import { TooltipData } from "@/types/global";

export type TooltipProps = {
  tooltipData: TooltipData;
  /** Drives the fade in/out. The tooltip stays mounted so the transition plays both directions. */
  visible?: boolean;
};

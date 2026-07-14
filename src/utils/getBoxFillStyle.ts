import { Theme } from "@/styles";
import { TextAndBoxStyleConfig } from "@/types/global";

export const getBoxFillStyle = (config: TextAndBoxStyleConfig, theme: Theme) => {
  const { isCurrent, isBusinessDay, variant } = config;
  if (variant === "yearView")
    return isCurrent ? theme.colors.tertiary : theme.colors.gridBackground;
  if (isCurrent) return theme.colors.currentDay;
  if (!isBusinessDay) return theme.colors.secondary;

  return theme.colors.primary;
};

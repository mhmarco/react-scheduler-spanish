import { outsideWrapperId, leftColumnWidth, screenWidthMultiplier } from "@/constants";

export const getCanvasWidth = () => {
  const wrapperWidth = document.getElementById(outsideWrapperId)?.clientWidth || 0;
  const width = Math.max(0, wrapperWidth - leftColumnWidth) * screenWidthMultiplier;
  return width;
};

import { Coords } from "@/types/global";

const DRAG_THRESHOLD = 5; // pixels

/**
 * Detects if user intends to drag based on mouse movement distance
 * @param startPos Initial mouse position
 * @param currentPos Current mouse position
 * @returns true if movement exceeds threshold (drag), false otherwise (click)
 */
export const detectDragIntent = (startPos: Coords, currentPos: Coords): boolean => {
  const deltaX = Math.abs(currentPos.x - startPos.x);
  const deltaY = Math.abs(currentPos.y - startPos.y);
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  return distance > DRAG_THRESHOLD;
};

/**
 * Converts client coordinates (from mouse event) to grid coordinates
 * @param clientX Mouse X position relative to viewport
 * @param clientY Mouse Y position relative to viewport
 * @param gridElement Grid HTML element reference
 * @returns Grid coordinates accounting for scroll position
 */
export const clientToGridCoords = (
  clientX: number,
  clientY: number,
  gridElement: HTMLElement
): Coords => {
  const rect = gridElement.getBoundingClientRect();
  return {
    x: clientX - rect.left + gridElement.scrollLeft,
    y: clientY - rect.top + gridElement.scrollTop
  };
};

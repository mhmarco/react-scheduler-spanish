import { boxHeight, subcontractSeparatorHeight } from "@/constants";

/**
 * Adjusts a mouse Y coordinate by subtracting separator offsets,
 * so that Math.floor(adjustedY / boxHeight) gives the correct row index.
 *
 * Iteratively determines how many separators are above the given Y position.
 */
export const adjustYForSeparators = (
  mouseY: number,
  separatorRowIndices: number[]
): number => {
  if (separatorRowIndices.length === 0) return mouseY;

  let adjustedY = mouseY;
  let separatorsAbove = 0;

  for (const sepRow of separatorRowIndices) {
    const sepY = sepRow * boxHeight + separatorsAbove * subcontractSeparatorHeight;
    if (mouseY >= sepY + subcontractSeparatorHeight) {
      separatorsAbove++;
    } else if (mouseY >= sepY) {
      // Mouse is inside a separator — clamp to the row just below it
      return sepRow * boxHeight + separatorsAbove * subcontractSeparatorHeight - separatorsAbove * subcontractSeparatorHeight;
    }
  }

  return adjustedY - separatorsAbove * subcontractSeparatorHeight;
};

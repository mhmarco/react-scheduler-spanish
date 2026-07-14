import { subcontractSeparatorHeight } from "@/constants";

/** Returns the total pixel offset for a given row, accounting for all separators at or before it */
export const getSeparatorOffset = (
  rowIndex: number,
  separatorRowIndices: number[]
): number => {
  let count = 0;
  for (const sepRow of separatorRowIndices) {
    if (sepRow <= rowIndex) count++;
  }
  return count * subcontractSeparatorHeight;
};

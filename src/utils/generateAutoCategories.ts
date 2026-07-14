import { SchedulerCategory, PaginatedSchedulerData } from "@/types/global";

type AutoCategoryResult = {
  categories: SchedulerCategory[];
  capacityToCategoryId: Map<number, string>;
};

function findNaturalBreaks(sorted: number[], maxGroups: number): number[] {
  if (sorted.length <= 1) return [];
  if (sorted.length <= maxGroups) {
    const breaks: number[] = [];
    for (let i = 1; i < sorted.length; i++) {
      breaks.push(i);
    }
    return breaks;
  }
  const gaps: { index: number; gap: number }[] = [];
  for (let i = 1; i < sorted.length; i++) {
    gaps.push({ index: i, gap: sorted[i] - sorted[i - 1] });
  }
  gaps.sort((a, b) => b.gap - a.gap);
  const breakCount = Math.min(maxGroups - 1, gaps.length);
  return gaps
    .slice(0, breakCount)
    .map((g) => g.index)
    .sort((a, b) => a - b);
}

export function generateAutoCategories(data: PaginatedSchedulerData): AutoCategoryResult {
  const empty: AutoCategoryResult = { categories: [], capacityToCategoryId: new Map() };
  const capacities = new Set<number>();
  for (const item of data) {
    if (!item.isSubcontract && item.capacity != null) {
      capacities.add(item.capacity);
    }
  }
  const sorted = [...capacities].sort((a, b) => a - b);
  if (sorted.length < 2) return empty;
  const maxGroups = Math.min(5, sorted.length);
  const breakIndices = findNaturalBreaks(sorted, maxGroups);
  const groups: { min: number; max: number; values: number[] }[] = [];
  let start = 0;
  for (const breakIdx of breakIndices) {
    groups.push({
      min: sorted[start],
      max: sorted[breakIdx - 1],
      values: sorted.slice(start, breakIdx)
    });
    start = breakIdx;
  }
  groups.push({
    min: sorted[start],
    max: sorted[sorted.length - 1],
    values: sorted.slice(start)
  });
  const categories: SchedulerCategory[] = [];
  const capacityToCategoryId = new Map<number, string>();
  groups.forEach((group, i) => {
    const id = "__auto_cat_" + i;
    const name = group.min === group.max
      ? group.min + " pax"
      : group.min + "-" + group.max + " pax";
    categories.push({ id, name, minPassengers: group.min, maxPassengers: group.max });
    for (const val of group.values) {
      capacityToCategoryId.set(val, id);
    }
  });
  return { categories, capacityToCategoryId };
}

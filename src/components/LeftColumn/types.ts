import { PaginatedSchedulerData, SchedulerCategory, SchedulerItemClickData } from "@/types/global";

export type LeftColumnProps = {
  data: PaginatedSchedulerData;
  categories?: SchedulerCategory[];
  headerHeight: number;
  rows: number[];
  pageNum: number;
  pagesAmount: number;
  onLoadNext: () => void;
  onLoadPrevious: () => void;
  searchInputValue: string;
  onSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onItemClick?: (data: SchedulerItemClickData) => void;
  collapsedGroups: Set<string>;
  onToggleGroup: (groupId: string) => void;
  allGroupIds: string[];
  onExpandAll: () => void;
  onCollapseAll: () => void;
};

export type StyledInputWrapperProps = {
  isFocused: boolean;
};

export type StyledLeftColumnHeaderProps = {
  $height: number;
};

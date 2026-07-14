import { SchedulerCategory, SchedulerData, SchedulerItemClickData, SchedulerProjectData } from "@/types/global";
import {
  EventDropData,
  EventDragData,
  DraggableConfig,
  TimeRangeSelectionData,
  TimeRangeSelectResponse,
  MultiTimeRangeSelectResponse,
  ClickToAddConfig
} from "@/hooks/types";

export type CalendarProps = {
  data: SchedulerData;
  baseData?: SchedulerData;
  categories?: SchedulerCategory[];
  topBarWidth: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  toggleTheme?: () => void;
  onEventDrop?: (dropData: EventDropData) => Promise<boolean> | boolean;
  onEventDrag?: (dragData: EventDragData) => void;
  draggableConfig?: DraggableConfig;
  /** Callback invoked when user selects a time range. Return { continueMultiSelect: true } to enable multi-select mode. */
  onTimeRangeSelect?: (
    selectionData: TimeRangeSelectionData
  ) => TimeRangeSelectResponse | Promise<TimeRangeSelectResponse> | void;
  /** Callback invoked when user confirms multiple selections in multi-select mode */
  onMultiTimeRangeSelect?: (
    selections: TimeRangeSelectionData[]
  ) => MultiTimeRangeSelectResponse | Promise<MultiTimeRangeSelectResponse> | void;
  /** Configuration for click-to-add behavior */
  clickToAddConfig?: ClickToAddConfig;
};

export type StyledSpanProps = {
  position: "left" | "right";
};

export type ProjectsData = [projectsPerPerson: SchedulerProjectData[][][], rowsPerPerson: number[]];

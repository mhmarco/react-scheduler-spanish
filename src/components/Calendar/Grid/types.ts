import { PaginatedSchedulerData, SchedulerProjectData, SchedulerData } from "@/types/global";
import {
  EventDropData,
  EventDragData,
  DraggableConfig,
  TimeRangeSelectionData,
  TimeRangeSelectResponse,
  MultiTimeRangeSelectResponse,
  ClickToAddConfig
} from "@/hooks/types";

export type GridProps = {
  zoom: number;
  rows: number;
  data: PaginatedSchedulerData;
  baseData?: SchedulerData; // Unfiltered original data for conflict detection
  onTileClick?: (data: SchedulerProjectData) => void;
  onEventDrop?: (dropData: EventDropData) => Promise<boolean> | boolean;
  onEventDrag?: (dragData: EventDragData) => void;
  draggableConfig?: DraggableConfig;
  onDragStateChange?: (isDragging: boolean) => void;
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
  /** Row indices where group separators should be drawn */
  separatorRowIndices?: number[];
};

export type StyledSpanProps = {
  position: "left" | "right";
};

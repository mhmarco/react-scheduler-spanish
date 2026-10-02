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
  /** Right-click on a tile; the browser's own menu is suppressed when this is set. */
  onTileContextMenu?: (data: SchedulerProjectData, position: { x: number; y: number }) => void;
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
  /**
   * Position in separatorRowIndices of the subcontract group's band (drawn amber), -1 when there is none. A position,
   * not a row: a collapsed group's band shares its row with the next one.
   */
  subcontractSeparatorIndex?: number;
  /** Position in separatorRowIndices of the band of a group that needs attention (unassigned colour), -1 when none does. */
  warningSeparatorIndex?: number;
  /** Positions in separatorRowIndices of the provider sub-group bands inside the subcontract group. */
  providerSeparatorIndices?: number[];
  /** Units whose group is mid fade-out (collapse) — their tiles render as exiting so they fade before the snap. */
  fadingUnitIds?: Set<string>;
};

export type StyledSpanProps = {
  position: "left" | "right";
};

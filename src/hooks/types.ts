import { PaginatedSchedulerData, SchedulerProjectData, Day, ZoomLevel, Coords } from "@/types/global";

export type UsePaginationData = {
  /**
   * Represents paginated data on current page
   */
  page: PaginatedSchedulerData;
  /**
   * Current page number
   */
  currentPageNum: number;
  /**
   * Total amount of pages
   */
  pagesAmount: number;
  /**
   * Sorted resources per item.
   */
  projectsPerPerson: SchedulerProjectData[][][];
  /**
   * Amount of rows per item
   */
  rowsPerItem: number[];
  /**
   * Total amount of rows displayed on current page
   */
  totalRowsPerPage: number;
  /**
   * Callback function to load next page
   */
  next: () => void;
  /**
   * Callback function to load previous page
   */
  previous: () => void;

  /**
   * Jumps to first page
   */
  reset: () => void;
};

/**
 * Drag state machine states
 */
export type DragState = "idle" | "potential" | "dragging" | "animating";

/**
 * Details about a conflicting event
 */
export type ConflictDetails = {
  /** The conflicting event */
  event: SchedulerProjectData;
  /** Start date of the conflict */
  conflictStart: Date;
  /** End date of the conflict */
  conflictEnd: Date;
  /** Duration of overlap in milliseconds */
  overlapDuration: number;
};

/**
 * Details about a nearby event (same day, no overlap)
 */
export type NearbyEventDetails = {
  /** The nearby event */
  event: SchedulerProjectData;
  /** Time gap in milliseconds (positive = after, negative = before) */
  timeGap: number;
  /** Whether this event is before or after the dragged event */
  position: "before" | "after";
};

/**
 * Drop target information
 */
export type DropTarget = {
  startDate: Date;
  endDate: Date;
  resourceId: string;
  resourceIndex: number;
  /** Capacity of the target resource (if available) */
  resourceCapacity?: number;
  /** Whether this drop target has sufficient capacity for the event */
  hasCapacity?: boolean;
  /** Whether there's a conflict at this position (warning, but drop is still allowed) */
  hasConflict?: boolean;
  /** Detailed information about conflicting events */
  conflicts?: ConflictDetails[];
  /** Nearby events on the same day (no overlap, but close in time) */
  nearbyEvents?: NearbyEventDetails[];
};

/**
 * Data provided to consumer when an event is dropped.
 * 
 * The consumer should validate the drop (check for conflicts, overlaps, etc.)
 * and persist the changes if valid. Return true to accept the drop, or false
 * to reject it and animate the event back to its original position.
 * 
 * @example
 * ```tsx
 * const handleEventDrop = async (dropData: EventDropData) => {
 *   // Check for conflicts with details
 *   if (dropData.hasConflict && dropData.conflicts) {
 *     console.log(`Found ${dropData.conflicts.length} conflicts:`);
 *     dropData.conflicts.forEach(conflict => {
 *       console.log(`- ${conflict.event.title}: overlaps by ${conflict.overlapDuration}ms`);
 *     });
 *     
 *     // Decide if conflicts are acceptable
 *     const totalOverlap = dropData.conflicts.reduce((sum, c) => sum + c.overlapDuration, 0);
 *     if (totalOverlap > 3600000) { // More than 1 hour
 *       return false; // Reject
 *     }
 *   }
 *   
 *   // Save to backend
 *   try {
 *     await updateEvent(dropData.event.id, {
 *       startDate: dropData.newStartDate,
 *       endDate: dropData.newEndDate,
 *       resourceId: dropData.newResourceId
 *     });
 *     return true; // Accept drop
 *   } catch (error) {
 *     return false; // Reject on error
 *   }
 * };
 * ```
 */
export type EventDropData = {
  /** The complete event object being dropped */
  event: SchedulerProjectData;
  /** Original start date before the drag operation */
  originalStartDate: Date;
  /** Original end date before the drag operation */
  originalEndDate: Date;
  /** Original resource ID before the drag operation */
  originalResourceId: string;
  /** New start date where the event is being dropped */
  newStartDate: Date;
  /** New end date where the event is being dropped (duration is preserved) */
  newEndDate: Date;
  /** New resource ID where the event is being dropped */
  newResourceId: string;
  /** Whether there's a time conflict at the drop position (warning) */
  hasConflict?: boolean;
  /** Detailed information about conflicting events */
  conflicts?: ConflictDetails[];
};

/**
 * Data provided to consumer during drag progress (while dragging).
 * 
 * This callback is throttled to fire at most every 100ms during the drag operation.
 * Use this for real-time validation feedback or to show potential conflicts.
 * 
 * @example
 * ```tsx
 * const handleEventDrag = (dragData: EventDragData) => {
 *   // Show real-time validation feedback with conflict details
 *   if (dragData.conflicts && dragData.conflicts.length > 0) {
 *     const messages = dragData.conflicts.map(c => 
 *       `Conflicts with ${c.event.title} (${formatDuration(c.overlapDuration)})`
 *     );
 *     setWarning(messages.join(', '));
 *   } else {
 *     setWarning(null);
 *   }
 * };
 * ```
 */
export type EventDragData = {
  /** The event being dragged */
  event: SchedulerProjectData;
  /** Current start date as the user drags (snapped to grid) */
  currentStartDate: Date;
  /** Current end date as the user drags (duration is preserved) */
  currentEndDate: Date;
  /** Current resource ID as the user drags */
  currentResourceId: string;
  /** Detailed information about conflicting events */
  conflicts?: ConflictDetails[];
};

/**
 * Configuration for drag-and-drop behavior.
 * 
 * @example
 * ```tsx
 * const draggableConfig = {
 *   enabled: true,
 *   isDraggable: (event) => {
 *     // Only allow dragging events that are not locked
 *     return !event.locked && event.status !== 'completed';
 *   },
 *   resourceOnly: true, // Only allow changing resource, not dates
 *   isValidDrop: (dragData) => {
 *     // Check for conflicts
 *     return !hasTimeConflict(dragData);
 *   }
 * };
 * ```
 */
export type DraggableConfig = {
  /** Enable or disable drag-and-drop globally. Default: true */
  enabled?: boolean;
  /** Custom function to determine if a specific event is draggable */
  isDraggable?: (event: SchedulerProjectData) => boolean;
  /** If true, dragging only changes the resource/unit, not the dates. Default: false */
  resourceOnly?: boolean;
  /** Custom function to validate if a drop position is valid (e.g., check for conflicts). Return true for valid, false for invalid. */
  isValidDrop?: (dragData: EventDragData) => boolean;
  /** Reserved for future use - grid snapping is always enabled */
  snapToGrid?: boolean;
  /** Reserved for future use - animation duration configuration */
  animationDuration?: number;
};

/**
 * Parameters for useDragAndDrop hook
 */
export type UseDragAndDropParams = {
  data: PaginatedSchedulerData;
  baseData?: PaginatedSchedulerData | import("@/types/global").SchedulerData; // Unfiltered data for conflict detection
  zoom: ZoomLevel;
  startDate: Day;
  onEventDrop?: (dropData: EventDropData) => Promise<boolean> | boolean;
  onEventDrag?: (dragData: EventDragData) => void;
  draggableConfig?: DraggableConfig;
  gridRef: React.RefObject<HTMLElement>;
  /** Row indices where group separators are drawn (for Y offset correction) */
  separatorRowIndices?: number[];
};

/**
 * Return value from useDragAndDrop hook
 */
export type UseDragAndDropReturn = {
  dragState: DragState;
  draggedEvent: SchedulerProjectData | null;
  ghostPosition: Coords;
  ghostDimensions: { width: number; height: number };
  dropTarget: DropTarget | null;
  isValidDrop: boolean;
  handleDragStart: (event: SchedulerProjectData, mouseEvent: React.MouseEvent) => void;
  isDraggable: (event: SchedulerProjectData) => boolean;
  draggingEventId: string | null;
  resourceOnly: boolean;
};

/**
 * Selection state machine states for click-to-add
 */
export type SelectionState = "idle" | "selecting" | "selected";

/**
 * Data provided to consumer when a time range is selected on the calendar.
 *
 * This is triggered when a user clicks on a day or drags across multiple days
 * within the same resource row to select a time range for creating a new event.
 *
 * **Date Range:** Dates are snapped to the grid based on zoom level.
 * Selecting Dec 26 to Dec 30 visually will return those exact dates.
 *
 * **Resource ID:** The resourceId matches the `id` field from your SchedulerRow data.
 *
 * **Conflict Detection:** If the selected range overlaps with existing events,
 * `hasConflict` will be true and `conflicts` will contain details about each
 * overlapping event. Consumer can decide how to handle conflicts.
 *
 * @example
 * ```tsx
 * const handleTimeRangeSelect = (selectionData: TimeRangeSelectionData) => {
 *   // Check for conflicts
 *   if (selectionData.hasConflict && selectionData.conflicts) {
 *     const proceed = window.confirm(
 *       `This selection overlaps with ${selectionData.conflicts.length} event(s). Continue?`
 *     );
 *     if (!proceed) return { continueMultiSelect: false };
 *   }
 *
 *   // Create event for the selected resource
 *   createEvent({
 *     resourceId: selectionData.resourceId,
 *     startDate: selectionData.startDate,
 *     endDate: selectionData.endDate
 *   });
 *   return { continueMultiSelect: false };
 * };
 *
 * <Scheduler
 *   onTimeRangeSelect={handleTimeRangeSelect}
 *   clickToAddConfig={{ enabled: true }}
 * />
 * ```
 */
export type TimeRangeSelectionData = {
  /** Start date of the selected range (snapped to grid based on zoom level) */
  startDate: Date;
  /** End date of the selected range (snapped to grid based on zoom level) */
  endDate: Date;
  /** ID of the resource where the selection was made. This is the `id` field from your SchedulerRow data. */
  resourceId: string;
  /** Label information of the resource (title, subtitle, icon from your SchedulerRow.label) */
  resourceLabel: {
    icon: string;
    title: string;
    subtitle: string;
  };
  /** The zoom level at which the selection was made (0=weeks, 1=days, 2=hours) */
  zoomLevel: ZoomLevel;
  /** Whether the selected range overlaps with existing events */
  hasConflict?: boolean;
  /** Detailed information about conflicting events (if any) */
  conflicts?: ConflictDetails[];
};

/**
 * Response from onTimeRangeSelect callback that controls multi-select behavior.
 *
 * **Simplified Flow:**
 * 1. User clicks/drags to select a time range → `onTimeRangeSelect` fires immediately
 * 2. Consumer returns response indicating whether to enable multi-select mode
 * 3. If `continueMultiSelect: true`, user can select more ranges while seeing the initial selection
 * 4. When done, user clicks confirm in the header toolbar
 * 5. `onMultiTimeRangeSelect` fires with all accumulated selections (including the initial one)
 * 6. Consumer can return `{ continueMultiSelect: true }` to keep adding more, or `false` to finalize
 *
 * @example
 * ```tsx
 * const handleTimeRangeSelect = (selection: TimeRangeSelectionData): TimeRangeSelectResponse => {
 *   // Option 1: Just create the single event immediately
 *   createEvent(selection);
 *   return { continueMultiSelect: false };
 *
 *   // Option 2: Enable multi-select mode for batch creation
 *   return { continueMultiSelect: true };
 * };
 * ```
 */
export type TimeRangeSelectResponse = {
  /** If true, enables multi-select mode allowing user to select additional ranges */
  continueMultiSelect: boolean;
};

/**
 * Response from onMultiTimeRangeSelect callback that controls whether to continue or finalize.
 *
 * **Loop Flow:**
 * 1. User confirms selections → `onMultiTimeRangeSelect` fires
 * 2. Consumer processes selections and decides:
 *    - Return `{ continueMultiSelect: true }` to keep multi-select mode active (add more)
 *    - Return `{ continueMultiSelect: false }` or nothing to finalize and clear
 *
 * @example
 * ```tsx
 * const handleMultiTimeRangeSelect = (selections): MultiTimeRangeSelectResponse => {
 *   // Process selections
 *   console.log(`Processing ${selections.length} selections`);
 *
 *   // Ask user if they want to add more
 *   const addMore = window.confirm('Add more events?');
 *   return { continueMultiSelect: addMore };
 * };
 * ```
 */
export type MultiTimeRangeSelectResponse = {
  /** If true, keeps multi-select mode active allowing user to add more selections */
  continueMultiSelect: boolean;
};

/**
 * Configuration for click-to-add behavior.
 *
 * **Important:** This feature is disabled by default. You must set `enabled: true` to activate it.
 *
 * **Simplified Flow:**
 * 1. User clicks/drags to select a time range
 * 2. `onTimeRangeSelect` fires immediately with the selection
 * 3. Consumer decides: create single event OR enable multi-select
 * 4. If multi-select enabled, user can select more ranges
 * 5. User confirms via toolbar → `onMultiTimeRangeSelect` fires with all selections
 *
 * @example
 * ```tsx
 * // Basic usage - single event creation
 * <Scheduler
 *   onTimeRangeSelect={(selection) => {
 *     createEvent(selection);
 *     return { continueMultiSelect: false };
 *   }}
 *   clickToAddConfig={{ enabled: true }}
 * />
 *
 * // With multi-select option
 * <Scheduler
 *   onTimeRangeSelect={(selection) => {
 *     // Let user decide via UI
 *     if (userWantsMultiSelect) {
 *       return { continueMultiSelect: true };
 *     }
 *     createEvent(selection);
 *     return { continueMultiSelect: false };
 *   }}
 *   onMultiTimeRangeSelect={(selections) => {
 *     // Create all events at once
 *     selections.forEach(sel => createEvent(sel));
 *   }}
 *   clickToAddConfig={{ enabled: true }}
 * />
 *
 * // With custom validation
 * <Scheduler
 *   onTimeRangeSelect={handleSelect}
 *   clickToAddConfig={{
 *     enabled: true,
 *     isSelectable: (resourceId, startDate, endDate) => {
 *       // Only allow selection on weekdays
 *       const day = startDate.getDay();
 *       return day !== 0 && day !== 6;
 *     }
 *   }}
 * />
 * ```
 */
export type ClickToAddConfig = {
  /** Enable or disable click-to-add globally. Default: false - must be explicitly set to true to activate the feature. */
  enabled?: boolean;
  /** Custom function to determine if a specific time slot is selectable. Return false to prevent selection. */
  isSelectable?: (resourceId: string, startDate: Date, endDate: Date) => boolean;
};

/**
 * Parameters for useClickToAdd hook
 */
export type UseClickToAddParams = {
  data: PaginatedSchedulerData;
  /** Optional unfiltered data for accurate conflict detection */
  baseData?: PaginatedSchedulerData | import("@/types/global").SchedulerData;
  zoom: ZoomLevel;
  startDate: Day;
  /** Called when user makes a selection. Can return sync or async (Promise) response. */
  onTimeRangeSelect?: (
    selectionData: TimeRangeSelectionData
  ) => TimeRangeSelectResponse | Promise<TimeRangeSelectResponse> | void;
  /** Called when user confirms selections. Can return sync or async (Promise) response. */
  onMultiTimeRangeSelect?: (
    selections: TimeRangeSelectionData[]
  ) => MultiTimeRangeSelectResponse | Promise<MultiTimeRangeSelectResponse> | void;
  clickToAddConfig?: ClickToAddConfig;
  gridRef: React.RefObject<HTMLElement>;
  isDragging: boolean;
  /** Row indices where group separators are drawn (for Y offset correction) */
  separatorRowIndices?: number[];
};

/**
 * Return value from useClickToAdd hook
 */
export type UseClickToAddReturn = {
  selectionState: SelectionState;
  selectionStart: Coords | null;
  selectionEnd: Coords | null;
  selectionBox: { x: number; y: number; width: number; height: number } | null;
  handleGridMouseDown: (e: React.MouseEvent) => void;
  isEnabled: boolean;
  /** Array of accumulated selections (populated when in multi-select mode) */
  pendingSelections: TimeRangeSelectionData[];
  /** Confirm all pending selections and trigger onMultiTimeRangeSelect callback */
  confirmSelections: () => void;
  /** Clear all pending selections without triggering callback */
  clearSelections: () => void;
  /** Remove a specific selection by index */
  removeSelection: (index: number) => void;
  /** Update a specific selection by index (used for drag repositioning) */
  updateSelection: (index: number, updates: Partial<TimeRangeSelectionData>) => void;
  /** Whether we're currently in multi-select mode (consumer enabled it) */
  isMultiSelectActive: boolean;
  /** Whether there are unconfirmed selections (controls toolbar visibility) */
  hasUnconfirmedSelections: boolean;
};

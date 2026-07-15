import { ReactNode } from "react";
import {
  Config,
  SchedulerCategory,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData,
  ZoomLevel
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";
import {
  EventDropData,
  EventDragData,
  DraggableConfig,
  TimeRangeSelectionData,
  TimeRangeSelectResponse,
  MultiTimeRangeSelectResponse,
  ClickToAddConfig
} from "@/hooks/types";

/**
 * Ref handle for programmatic control of the Scheduler.
 * 
 * @example
 * ```tsx
 * const schedulerRef = useRef<SchedulerRef>(null);
 * 
 * // Jump to a specific date
 * schedulerRef.current?.goToDate(new Date('2025-06-15'));
 * schedulerRef.current?.goToDate('2025-06-15');
 * 
 * <Scheduler ref={schedulerRef} data={data} />
 * ```
 */
export type SchedulerRef = {
  /**
   * Navigate the scheduler to a specific date.
   * Accepts a Date object, ISO date string, or timestamp.
   */
  goToDate: (date: Date | string | number) => void;
  /**
   * Navigate to today's date.
   */
  goToToday: () => void;
  /**
   * Change the zoom level programmatically.
   * 0 = weeks, 1 = days, 2 = hours
   */
  setZoom: (zoom: ZoomLevel) => void;
};

export type SchedulerProps = {
  data: SchedulerData;
  /** Optional categories for grouping resources into collapsible sections */
  categories?: SchedulerCategory[];
  /**
   * Optional unfiltered data for accurate conflict detection.
   * 
   * If you apply custom filters to the `data` prop before passing it to the Scheduler,
   * provide the original unfiltered data here to ensure conflicts are detected against
   * ALL events, not just the visible filtered ones.
   * 
   * If not provided, conflict detection will use the `data` prop (filtered data).
   * 
   * @example
   * ```tsx
   * const [filteredData, setFilteredData] = useState(allData);
   * 
   * // User applies a filter
   * const handleFilter = (searchTerm) => {
   *   const filtered = allData.filter(resource => 
   *     resource.label.title.includes(searchTerm)
   *   );
   *   setFilteredData(filtered);
   * };
   * 
   * <Scheduler
   *   data={filteredData}
   *   baseData={allData}  // Pass unfiltered data for conflict detection
   * />
   * ```
   */
  baseData?: SchedulerData;
  isLoading?: boolean;
  config?: Config;
  startDate?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  handleToggleDisplayActiveUnits?: () => void;
  onClearFilterData?: () => void;
  /** Host controls rendered in the component toolbar's right zone (app's Ir a fecha / Filtros / Pantalla completa). */
  toolbarActions?: ReactNode;
  onItemClick?: (data: SchedulerItemClickData) => void;
  /**
   * Callback invoked when an event is dropped after dragging.
   * 
   * Return `true` to accept the drop (event stays in new position).
   * Return `false` to reject the drop (event animates back to original position).
   * 
   * Can be synchronous or asynchronous (return a Promise).
   * 
   * @param dropData - Contains event, original position, and new position
   * @returns boolean or Promise<boolean> - true to accept, false to reject
   * 
   * @example
   * ```tsx
   * const handleDrop = async (dropData) => {
   *   // Validate and save
   *   const isValid = await validateAndSave(dropData);
   *   return isValid; // true = accept, false = reject
   * };
   * 
   * <Scheduler onEventDrop={handleDrop} />
   * ```
   */
  onEventDrop?: (dropData: EventDropData) => Promise<boolean> | boolean;
  /**
   * Callback invoked during drag operation (throttled to 100ms).
   * 
   * Use this for real-time validation feedback while the user is dragging.
   * 
   * @param dragData - Contains event and current position during drag
   * 
   * @example
   * ```tsx
   * const handleDrag = (dragData) => {
   *   // Show real-time feedback
   *   const hasConflict = checkConflict(dragData);
   *   setWarning(hasConflict ? "Conflict!" : null);
   * };
   * 
   * <Scheduler onEventDrag={handleDrag} />
   * ```
   */
  onEventDrag?: (dragData: EventDragData) => void;
  /**
   * Configuration for drag-and-drop behavior.
   * 
   * @example
   * ```tsx
   * <Scheduler
   *   draggableConfig={{
   *     enabled: true,
   *     isDraggable: (event) => !event.locked
   *   }}
   * />
   * ```
   */
  draggableConfig?: DraggableConfig;
  /**
   * Callback invoked when user selects a time range on the calendar.
   *
   * This is triggered when a user clicks on a day or drags across multiple days
   * within the same resource row to select a time range for creating a new event.
   *
   * **Important:** Requires `clickToAddConfig={{ enabled: true }}` to activate.
   *
   * **Simplified Flow:**
   * 1. User clicks/drags to select a time range → this callback fires immediately
   * 2. Return `{ continueMultiSelect: false }` (or void) to handle single event creation
   * 3. Return `{ continueMultiSelect: true }` to enable multi-select mode
   * 4. In multi-select mode, user can select more ranges, then confirm via toolbar
   * 5. When confirmed, `onMultiTimeRangeSelect` fires with all accumulated selections
   *
   * Can return sync or async (Promise) response for dialog-based flows.
   *
   * @param selectionData - Contains the selected date range and resource information
   * @returns Optional response to control multi-select behavior (sync or Promise)
   *
   * @example
   * ```tsx
   * // Simple single-event creation
   * const handleTimeRangeSelect = (selectionData: TimeRangeSelectionData) => {
   *   createEvent({
   *     resourceId: selectionData.resourceId,
   *     startDate: selectionData.startDate,
   *     endDate: selectionData.endDate
   *   });
   *   return { continueMultiSelect: false };
   * };
   *
   * // With async dialog
   * const handleTimeRangeSelect = async (selectionData: TimeRangeSelectionData) => {
   *   const addMore = await showDialog("Add more events?");
   *   return { continueMultiSelect: addMore };
   * };
   *
   * <Scheduler
   *   onTimeRangeSelect={handleTimeRangeSelect}
   *   onMultiTimeRangeSelect={handleBatchCreate}
   *   clickToAddConfig={{ enabled: true }}
   * />
   * ```
   */
  onTimeRangeSelect?: (
    selectionData: TimeRangeSelectionData
  ) => TimeRangeSelectResponse | Promise<TimeRangeSelectResponse> | void;
  /**
   * Configuration for click-to-add behavior.
   *
   * **Important:** Feature is disabled by default. Set `enabled: true` to activate.
   *
   * **Simplified Flow:**
   * 1. User clicks/drags to select → `onTimeRangeSelect` fires immediately
   * 2. Consumer returns `{ continueMultiSelect: true }` to enable multi-select
   * 3. User can select more ranges, then confirm via toolbar
   * 4. `onMultiTimeRangeSelect` fires with all selections
   *
   * @example
   * ```tsx
   * // Basic - enable click-to-add
   * <Scheduler
   *   onTimeRangeSelect={(sel) => {
   *     createEvent(sel);
   *     return { continueMultiSelect: false };
   *   }}
   *   clickToAddConfig={{ enabled: true }}
   * />
   *
   * // With validation - control who can create events
   * <Scheduler
   *   onTimeRangeSelect={handleSelect}
   *   clickToAddConfig={{
   *     enabled: userHasCreatePermission,
   *     isSelectable: (resourceId, startDate, endDate) => {
   *       // Only allow selection on weekdays
   *       const day = startDate.getDay();
   *       return day !== 0 && day !== 6;
   *     }
   *   }}
   * />
   * ```
   */
  clickToAddConfig?: ClickToAddConfig;
  /**
   * Callback invoked when user confirms multiple time range selections (multi mode).
   *
   * Use with `clickToAddConfig={{ enabled: true }}` and return `{ continueMultiSelect: true }`
   * from `onTimeRangeSelect` to enable multi-select mode.
   *
   * Can return sync or async (Promise) response for dialog-based flows.
   * Return `{ continueMultiSelect: true }` to keep adding more events.
   * Return `{ continueMultiSelect: false }` or void to finalize.
   *
   * @param selections - Array of all selected time ranges
   * @returns Optional response to continue or finalize (sync or Promise)
   *
   * @example
   * ```tsx
   * // Simple batch creation
   * const handleBatchSelect = (selections: TimeRangeSelectionData[]) => {
   *   selections.forEach(sel => createEvent(sel));
   *   return { continueMultiSelect: false };
   * };
   *
   * // With async dialog
   * const handleBatchSelect = async (selections: TimeRangeSelectionData[]) => {
   *   const addMore = await showDialog(`${selections.length} events. Add more?`);
   *   if (!addMore) {
   *     selections.forEach(sel => createEvent(sel));
   *   }
   *   return { continueMultiSelect: addMore };
   * };
   *
   * <Scheduler
   *   onTimeRangeSelect={handleSelect}
   *   onMultiTimeRangeSelect={handleBatchSelect}
   *   clickToAddConfig={{ enabled: true }}
   * />
   * ```
   */
  onMultiTimeRangeSelect?: (
    selections: TimeRangeSelectionData[]
  ) => MultiTimeRangeSelectResponse | Promise<MultiTimeRangeSelectResponse> | void;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
  $footer?: boolean;
};

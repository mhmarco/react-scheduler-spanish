import type { ForwardRefExoticComponent } from 'react';
import { ReactNode } from 'react';
import type { RefAttributes } from 'react';

declare const allZoomLevel: readonly [0, 1, 2];

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
export declare type ClickToAddConfig = {
    /** Enable or disable click-to-add globally. Default: false - must be explicitly set to true to activate the feature. */
    enabled?: boolean;
    /** Custom function to determine if a specific time slot is selectable. Return false to prevent selection. */
    isSelectable?: (resourceId: string, startDate: Date, endDate: Date) => boolean;
};

declare type ColorType = "background" | "gridBackground" | "primary" | "secondary" | "tertiary" | "textPrimary" | "textSecondary" | "accent" | "disabled" | "border" | "placeholder" | "warning" | "button" | "tooltip" | "defaultTile" | "hover" | "currentDay" | "today" | "subcontractBg" | "subcontractBorder" | "subcontractText";

export declare type Config = {
    zoom: ZoomLevel;
    /**
     * Dictates filter button behavior
     * - `< 0` - filter button is hidden
     * - `0` - filter button is visible, no filter had been applied
     * - `> 0` - filter button visible - filters had been applied
     */
    filterButtonState?: number;
    /**
     * Language code: "en" | "pl" | "de" | "es"
     */
    lang?: LangCodes | string;
    isFiltersButtonVisible?: boolean;
    maxRecordsPerPage?: number;
    /**
     * property for changing behavior of showing tooltip hours
     * true - will show taken hours same as business days
     * false - will always show 0 taken hours on weekends in day view
     * @default false
     */
    includeTakenHoursOnWeekendsInDayView?: boolean;
    /**
     * show tooltip when hovering over tiles items
     * @default true
     */
    showTooltip?: boolean;
    translations?: LocaleType[];
    /**
     * show toggle button for changing theme (light/dark)
     */
    showThemeToggle?: boolean;
    /**
     * default theme (light/dark)
     * when theme toggle is displayed - this is a default value of the toggle
     * @default "light"
     */
    defaultTheme?: "light" | "dark";
    /**
     * show the internal top bar (nav/zoom/filter/multi-select controls)
     * @default true
     */
    showTopbar?: boolean;
    /**
     * show the icon + status legend strip above the board
     * @default true
     */
    showLegend?: boolean;
    /**
     * show the full-year navigator ribbon (density bars + HOY + viewport window + click-to-jump) below the legend
     * @default true
     */
    showOverview?: boolean;
    /**
     * show the toolbar's built-in "Ir a fecha" button. Set false when the host app owns date-jump.
     * @default true
     */
    showJumpToDate?: boolean;
    /**
     * show the toolbar's built-in "Filtros" button. Set false when the host app renders its own (richer) filter panel.
     * @default true
     */
    showFilterButton?: boolean;
    /**
     * show the toolbar's built-in "Pantalla completa" button. Set false when the host app owns fullscreen.
     * @default true
     */
    showFullscreenButton?: boolean;
    /**
     * show the Día│Semana│Mes zoom switcher. Set false to lock the view to a single zoom (host omits the control).
     * @default true
     */
    showViewSwitcher?: boolean;
    /**
     * show the week-number ("SEMANA n") row in the month-view header. Set false to hide it — the header compacts to
     * month + days and shrinks by one row.
     * @default true
     */
    showWeekRow?: boolean;
    theme?: Theme;
    /**
     * Whole-year event volume for the Overview ribbon, independent of the loaded board window. Each point is a day and
     * its event count; the ribbon buckets them into weeks for the bar heights. When omitted, the ribbon falls back to
     * counting the currently-loaded data. Readiness colour is always overlaid from the loaded data (this carries no
     * readiness), so distant weeks show volume in a neutral tone and loaded weeks show their worst-readiness colour.
     */
    yearCounts?: OverviewDensityPoint[];
};

/**
 * Details about a conflicting event
 */
export declare type ConflictDetails = {
    /** The conflicting event */
    event: SchedulerProjectData;
    /** Start date of the conflict */
    conflictStart: Date;
    /** End date of the conflict */
    conflictEnd: Date;
    /** Duration of overlap in milliseconds */
    overlapDuration: number;
};

declare type Conflicts = {
    detected: string;
    detectedPlural: string;
    detectedSuffix: string;
    conflictsWith: string;
    movingTo: string;
    currentlyAt: string;
    conflictTime: string;
    to: string;
    nearbyEvent: string;
    nearbyEvents: string;
    before: string;
    after: string;
    gap: string;
    yourEvent: string;
    sameDay: string;
    changeStart: string;
    changeEnd: string;
    changeBoth: string;
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
export declare type DraggableConfig = {
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
 * Drag state machine states
 */
export declare type DragState = "idle" | "potential" | "dragging" | "animating";

/**
 * Drop target information
 */
export declare type DropTarget = {
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
export declare type EventDragData = {
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
export declare type EventDropData = {
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

declare type LangCodes = "en" | "pl" | "de" | "lt" | "es";

declare type LocaleType = {
    id: string;
    lang: Translation;
    translateCode: string;
    dayjsTranslations: string | ILocale | undefined;
};

declare type MultiSelect = {
    selectionsPending: string;
    selectionPending: string;
    clickToRemove: string;
    pressEscToClear: string;
    clearAll: string;
    confirmSelection: string;
    confirmSelections: string;
    conflictWarning: string;
    conflictsWarning: string;
    confirmWithConflict: string;
    confirmWithConflicts: string;
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
declare type MultiTimeRangeSelectResponse = {
    /** If true, keeps multi-select mode active allowing user to add more selections */
    continueMultiSelect: boolean;
};

/**
 * Details about a nearby event (same day, no overlap)
 */
declare type NearbyEventDetails = {
    /** The nearby event */
    event: SchedulerProjectData;
    /** Time gap in milliseconds (positive = after, negative = before) */
    timeGap: number;
    /** Whether this event is before or after the dragged event */
    position: "before" | "after";
};

declare type OverviewDensityPoint = {
    /** ISO date (any parseable by dayjs); only the day is used. */
    date: string;
    count: number;
};

declare type ParsedDatesRange = {
    startDate: Date;
    endDate: Date;
};

/**
 * Event type classification for scheduler items.
 * Affects both tile display and tooltip presentation.
 *
 * @example
 * // Multi-day tour (2+ days)
 * { eventType: ReservationType.Tour, startDate: new Date('2026-01-15'), endDate: new Date('2026-01-18') }
 *
 * // One-day tour (same date, different times) - shows "1-DAY" badge
 * { eventType: ReservationType.Tour, startDate: new Date('2026-01-15T09:00'), endDate: new Date('2026-01-15T17:00') }
 *
 * // Transfer (single point in time) - shows "TRF" badge
 * { eventType: ReservationType.Transfer, startDate: new Date('2026-01-15T14:00'), endDate: new Date('2026-01-15T14:00') }
 */
declare enum ReservationType {
    /** Tour event - can be multi-day or one-day. Tooltip shows both start and end dates. */
    Tour = 0,
    /** Transfer event - typically single point in time. Tooltip shows only start date. */
    Transfer = 1
}

export declare const Scheduler: ForwardRefExoticComponent<SchedulerProps & RefAttributes<SchedulerRef>>;

/**
 * Category for grouping scheduler resources.
 * Categories create collapsible sections in the left column, ordered by maxPassengers.
 */
export declare type SchedulerCategory = {
    /** Unique identifier for this category */
    id: string;
    /** Display name for the category group header */
    name: string;
    /** Minimum passenger capacity for this category */
    minPassengers: number;
    /** Maximum passenger capacity for this category */
    maxPassengers: number;
};

export declare type SchedulerData = SchedulerRow[];

declare type SchedulerItemClickData = Omit<SchedulerRow, "data">;

/**
 * Represents a single event/reservation displayed on the scheduler timeline.
 *
 * ## Tile Display
 * - Multi-day events show: title | subtitle | description
 * - Single-day events (transfers or one-day tours) show a compact badge: "TRF" or "1-DAY"
 *
 * ## Tooltip Display (on hover)
 * The tooltip displays event details in a card format:
 * - Header: bookingNumber, eventType badge, title, subtitle (as client)
 * - Time block: startDate/startTime, endDate/endTime (tours only)
 * - Details grid: driver, flightNumber, groupName (if provided)
 * - Notes section: serviceNotes, reservationNotes (if provided)
 */
export declare type SchedulerProjectData = {
    /**
     * Unique identifier for this segment/tile. Used internally to identify the tile in the Scheduler.
     * @required
     */
    segmentId: string;
    /**
     * Unique identifier for the parent reservation. Multiple segments can share the same reservationId.
     * @required
     */
    reservationId: string;
    /**
     * Start date and time of the event. Determines where the tile begins on the timeline.
     * @required
     * @tooltip Displayed as formatted date and time in the tooltip time block
     */
    startDate: Date;
    /**
     * End date and time of the event. Determines where the tile ends on the timeline.
     * For transfers, set equal to startDate for single-point events.
     * For one-day tours, set to same date with different time.
     * @required
     * @tooltip Displayed for tours only (not shown for transfers)
     */
    endDate: Date;
    /**
     * Time spent per day in seconds. Converted by Scheduler to hours/minutes for occupancy display.
     * @required
     */
    occupancy: number;
    /**
     * Primary title of the event. Displayed prominently on multi-day tiles and in tooltip header.
     * @required
     * @tile Shown on multi-day event tiles
     * @tooltip Displayed as main event name in header
     */
    title: string;
    /**
     * Secondary text for the event. Typically used for client/customer name.
     * @optional
     * @tile Shown on multi-day event tiles after title
     * @tooltip Displayed as client name below the title
     */
    subtitle?: string;
    /**
     * Brief description of the event. Only shown on multi-day event tiles.
     * @optional
     * @tile Shown on multi-day event tiles
     */
    description?: string;
    /**
     * Background color of the tile in RGB format (e.g., "rgb(114, 141, 226)").
     * If not provided, uses the theme's default tile color.
     * @optional
     * @default "rgb(114, 141, 226)"
     */
    bgColor?: string;
    /**
     * Type of event - Tour or Transfer. Affects tooltip display and tile styling.
     * - Tour: Shows start and end dates in tooltip. Multi-day tours show full tile content.
     * - Transfer: Shows only start date in tooltip. Single-day transfers show "TRF" badge.
     * - One-day tours (same start/end date): Show "1-DAY" badge on tile.
     * @optional
     * @tooltip Displayed as colored badge: "Tour", "One-day", or "Transfer"
     */
    eventType?: ReservationType;
    /**
     * Unique booking/reservation reference number. Displayed prominently in tooltip header.
     * @required
     * @tooltip Displayed in header as accent-colored identifier
     */
    bookingNumber: string;
    /**
     * Name of the group associated with this event (e.g., tour group, corporate booking).
     * @optional
     * @tooltip Displayed in details grid if provided
     */
    groupName?: string;
    /**
     * Name of the driver/operator assigned to this event.
     * @optional
     * @tooltip Displayed in details grid if provided
     */
    driver?: string;
    /**
     * Flight number associated with this event. Commonly used for airport transfers.
     * @optional
     * @tooltip Displayed in details grid if provided
     */
    flightNumber?: string;
    /**
     * Internal service notes for staff. Only displayed if provided.
     * @optional
     * @tooltip Displayed in notes section with styled background
     */
    serviceNotes?: string;
    /**
     * Customer-facing reservation notes. Only displayed if provided.
     * @optional
     * @tooltip Displayed in notes section with styled background
     */
    reservationNotes?: string;
    /** Departure / pickup (salida). Free text, may be multi-sentence. Only shown in the tooltip if set. @optional */
    departureAddress?: string;
    /** Destination (destino). Free text, may be multi-sentence. Only shown in the tooltip if set. @optional */
    destinationAddress?: string;
    /** Return (regreso). Free text, may be multi-sentence. Only shown in the tooltip if set. @optional */
    returnAddress?: string;
    /**
     * Controls whether this event can be dragged. If false, drag operations will not be initiated.
     * @optional
     * @default true (if drag-and-drop is enabled globally)
     */
    draggable?: boolean;
    /**
     * Total number of passengers/occupants for capacity validation during drag-and-drop.
     * Events can only be dropped on resources with sufficient capacity.
     * @optional - if not provided, capacity validation is skipped
     */
    totalPassengers?: number;
    /**
     * Driver-readiness of an in-house event — drives the 3px left stripe + top-right status dot.
     * The consumer maps its own driver/notify/ack state onto these four; the acknowledged tier is only meaningful
     * when a driver-app feature is enabled (otherwise use up to `notificado`).
     * @optional
     */
    readiness?: TileReadiness;
    /**
     * For subcontract-row events: whether the subcontract is confirmed. Unconfirmed renders grey + dashed.
     * @optional
     */
    subcontractConfirmed?: boolean;
};

export declare type SchedulerProps = {
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
    onTimeRangeSelect?: (selectionData: TimeRangeSelectionData) => TimeRangeSelectResponse | Promise<TimeRangeSelectResponse> | void;
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
    onMultiTimeRangeSelect?: (selections: TimeRangeSelectionData[]) => MultiTimeRangeSelectResponse | Promise<MultiTimeRangeSelectResponse> | void;
};

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
export declare type SchedulerRef = {
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

export declare type SchedulerRow = {
    id: string;
    label: SchedulerRowLabel;
    data: SchedulerProjectData[];
    capacity?: number;
    isSubcontract?: boolean;
    /** Category ID to group this resource under. Must match a SchedulerCategory.id */
    categoryId?: string;
};

declare type SchedulerRowLabel = {
    /** Optional image URL. When absent, the left column renders a default bus-front (or provider) glyph. */
    icon?: string;
    title: string;
    subtitle: string;
};

declare type Theme = {
    light?: Partial<Record<ColorType, string>>;
    dark?: Partial<Record<ColorType, string>>;
};

/** In-house driver readiness, worst → best. */
export declare type TileReadiness = "sin_chofer" | "sin_avisar" | "notificado" | "confirmado";

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
export declare type TimeRangeSelectionData = {
    /** Start date of the selected range (snapped to grid based on zoom level) */
    startDate: Date;
    /** End date of the selected range (snapped to grid based on zoom level) */
    endDate: Date;
    /** ID of the resource where the selection was made. This is the `id` field from your SchedulerRow data. */
    resourceId: string;
    /** Label information of the resource (title, subtitle, icon from your SchedulerRow.label) */
    resourceLabel: {
        icon?: string;
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
export declare type TimeRangeSelectResponse = {
    /** If true, enables multi-select mode allowing user to select additional ranges */
    continueMultiSelect: boolean;
};

declare type Tooltip = {
    client: string;
    schedule: string;
    startDate: string;
    endDate: string;
    groupName: string;
    driver: string;
    flightNumber: string;
    serviceNotes: string;
    reservationNotes: string;
    tour: string;
    transfer: string;
};

declare type Topbar = {
    filters: string;
    next: string;
    prev: string;
    today: string;
    view: string;
};

declare type Translation = {
    feelingEmpty: string;
    free: string;
    loadNext: string;
    loadPrevious: string;
    over: string;
    taken: string;
    topbar: Topbar;
    search: string;
    week: string;
    conflicts: Conflicts;
    multiSelect?: MultiSelect;
    tooltip?: Tooltip;
    subcontract?: string;
};

export declare type ZoomLevel = ZoomLevelTuple[number];

declare type ZoomLevelTuple = typeof allZoomLevel;

export { }

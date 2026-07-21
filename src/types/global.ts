import { LocaleType } from "@/context/LocaleProvider/types";
import { ColorType } from "@/styles";

export const allZoomLevel = [0, 1, 2] as const;

export type FilterButtonState = -1 | 0 | 1;

type ZoomLevelTuple = typeof allZoomLevel;

export type ZoomLevel = ZoomLevelTuple[number];

export type LangCodes = "en" | "pl" | "de" | "lt" | "es";

export type Config = {
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

export type OverviewDensityPoint = {
  /** ISO date (any parseable by dayjs); only the day is used. */
  date: string;
  count: number;
};

export type Theme = {
  light?: Partial<Record<ColorType, string>>;
  dark?: Partial<Record<ColorType, string>>;
};

export type SchedulerData = SchedulerRow[];

/**
 * Category for grouping scheduler resources.
 * Categories create collapsible sections in the left column, ordered by maxPassengers.
 */
export type SchedulerCategory = {
  /** Unique identifier for this category */
  id: string;
  /** Display name for the category group header */
  name: string;
  /** Minimum passenger capacity for this category */
  minPassengers: number;
  /** Maximum passenger capacity for this category */
  maxPassengers: number;
};

export type SchedulerRow = {
  id: string;
  label: SchedulerRowLabel;
  data: SchedulerProjectData[];
  capacity?: number;
  isSubcontract?: boolean;
  /** Category ID to group this resource under. Must match a SchedulerCategory.id */
  categoryId?: string;
};

export type SchedulerItemClickData = Omit<SchedulerRow, "data">;

export type PaginatedSchedulerData = PaginatedSchedulerRow[];

export type PaginatedSchedulerRow = {
  id: string;
  label: SchedulerRowLabel;
  data: SchedulerProjectData[][];
  capacity?: number;
  isSubcontract?: boolean;
  categoryId?: string;
};

export type SchedulerRowLabel = {
  /** Optional image URL. When absent, the left column renders a default bus-front (or provider) glyph. */
  icon?: string;
  title: string;
  subtitle: string;
};
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
export type SchedulerProjectData = {
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

/** In-house driver readiness, worst → best. */
export type TileReadiness = "sin_chofer" | "sin_avisar" | "notificado" | "confirmado";

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
export enum ReservationType {
  /** Tour event - can be multi-day or one-day. Tooltip shows both start and end dates. */
  Tour,
  /** Transfer event - typically single point in time. Tooltip shows only start date. */
  Transfer
}

export type Day = {
  hour: number;
  dayName: string;
  dayOfMonth: number;
  weekOfYear: number;
  month: number;
  monthName: string;
  isBusinessDay: boolean;
  isCurrentDay: boolean;
  year: number;
};

export type TextAndBoxStyleConfig = {
  isCurrent: boolean;
  isBusinessDay?: boolean;
  variant?: "yearView" | "bottomRow";
};

type BottomRowText = {
  y: number;
  label: string;
  font: string;
  color: string;
};

export type DrawRowConfig = {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  textYPos?: number;
  label?: string;
  font?: string;
  isBottomRow?: boolean;
  fillStyle?: string;
  topText?: BottomRowText;
  bottomText?: BottomRowText;
  strokeStyle?: string;
  labelBetweenCells?: boolean;
};

export type TileProperties = {
  x: number;
  y: number;
  width: number;
};

export type ConfigFormValues = {
  peopleCount: number;
  projectsPerYear: number;
  yearsCovered: number;
  maxRecordsPerPage: number;
  isFullscreen: boolean;
  startDate?: string;
};

export type Coords = {
  x: number;
  y: number;
};

export type TimeUnits = {
  hours: number;
  minutes: number;
};

export type OccupancyData = {
  taken: TimeUnits;
  free: TimeUnits;
  overtime: TimeUnits;
};

export type TooltipData = {
  coords: Coords;
  mouseCoords: Coords;
  resourceIndex: number;
  disposition: OccupancyData;
  reservationData: ReservationData;
  tileBounds?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

export type ReservationData = {
  startTime: string;
  startDate: string;
  endTime?: string;
  endDate?: string;
  client: string;
  eventName: string;
  reservationType: ReservationType;
  bookingNumber: string;
  groupName?: string;
  driver?: string;
  flightNumber?: string;
  serviceNotes?: string;
  reservationNotes?: string;
  departureAddress?: string;
  destinationAddress?: string;
  returnAddress?: string;
  isOneDayEvent?: boolean;
  passengers?: number;
};

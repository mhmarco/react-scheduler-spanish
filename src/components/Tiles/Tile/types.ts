import { SchedulerProjectData } from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: number;
  /** True when this tile's row is a subcontract lane (SUB pill + confirmed/unconfirmed styling, no ack dot). */
  isSubcontract?: boolean;
  onTileClick?: (data: SchedulerProjectData) => void;
  onDragStart?: (event: SchedulerProjectData, mouseEvent: React.MouseEvent) => void;
  isDragging?: boolean;
  isDraggable?: boolean;
  /** Extra Y offset in pixels (for subcontract separator) */
  yOffset?: number;
  /** True while this tile is animating out after its data was removed (fade + scale, then unmount). */
  exiting?: boolean;
  /** True when this event is the persistently-highlighted one (green hue), e.g. focused from a warning / swap source. */
  highlighted?: boolean;
  /** Focus-mode: this tile is not in the focused set → render greyed/faded. */
  dimmed?: boolean;
  /** Focus-mode: this blocking service will vacate the target unit → amber/dashed with a "Sub" leave-tag. */
  leaving?: boolean;
  /** Render as a translucent-green GHOST preview tile (non-interactive) instead of a normal tile. */
  ghost?: boolean;
  /** Ghost only: the badge under the tile, e.g. "entra a Bus 12". */
  ghostBadge?: string;
};

export type StyledTextProps = {
  bold?: boolean;
};

export type StyledTileWrapperProps = {
  isDraggable?: boolean;
  isDragging?: boolean;
  $unconfirmed?: boolean;
  $exiting?: boolean;
  $highlighted?: boolean;
  $dimmed?: boolean;
  $leaving?: boolean;
  $ghost?: boolean;
};

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
};

export type StyledTextProps = {
  bold?: boolean;
};

export type StyledTileWrapperProps = {
  isDraggable?: boolean;
  isDragging?: boolean;
  $unconfirmed?: boolean;
  $exiting?: boolean;
};

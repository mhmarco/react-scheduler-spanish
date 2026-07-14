import { SchedulerProjectData } from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: number;
  onTileClick?: (data: SchedulerProjectData) => void;
  onDragStart?: (event: SchedulerProjectData, mouseEvent: React.MouseEvent) => void;
  isDragging?: boolean;
  isDraggable?: boolean;
  /** Extra Y offset in pixels (for subcontract separator) */
  yOffset?: number;
};

export type StyledTextProps = {
  bold?: boolean;
};

export type StyledTileWrapperProps = {
  isDraggable?: boolean;
  isDragging?: boolean;
};

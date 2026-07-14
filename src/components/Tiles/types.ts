import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type TilesProps = {
  zoom: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  onDragStart?: (event: SchedulerProjectData, mouseEvent: React.MouseEvent) => void;
  isDraggable?: (event: SchedulerProjectData) => boolean;
  draggingEventId?: string | null;
  /** Row indices where group separators are drawn */
  separatorRowIndices?: number[];
};

export type PlacedTiles = JSX.Element[];

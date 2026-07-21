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
  /** Units whose group is mid fade-out (collapse) — their (still-live) tiles render as exiting so they fade first. */
  fadingUnitIds?: Set<string>;
  /** segmentId to persistently highlight (green hue), e.g. focused from a warning. */
  highlightedSegmentId?: string | null;
};

export type PlacedTiles = JSX.Element[];

import { GhostProjectData, PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

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
  /** segmentId to persistently highlight (green hue), e.g. focused from a warning. Also the swap-focus "source" gira. */
  highlightedSegmentId?: string | null;
  /** Focus-mode: row ids to keep visible; every other row dims. Null/empty = no focus mode. */
  focusedUnitIds?: string[] | null;
  /** Focus-mode: segmentIds of the blocking services that vacate — rendered amber/dashed with a "Sub" leave-tag. */
  leavingSegmentIds?: string[] | null;
  /** Focus-mode: a translucent-green ghost tile injected on its targetUnitId row. */
  ghostProject?: GhostProjectData | null;
};

export type PlacedTiles = JSX.Element[];

import { SchedulerProjectData, ZoomLevel, PaginatedSchedulerData } from "@/types/global";
import { DropTarget, DragState, ConflictDetails, NearbyEventDetails } from "@/hooks/types";

export type DragOverlayProps = {
  draggedEvent: SchedulerProjectData | null;
  ghostPosition: { x: number; y: number };
  ghostDimensions: { width: number; height: number };
  dropTarget: DropTarget | null;
  isValidDrop: boolean;
  zoom: ZoomLevel;
  dragState: DragState;
  data: PaginatedSchedulerData;
  resourceOnly: boolean;
  separatorRowIndices?: number[];
};

// Re-export for convenience
export type { DropTarget, DragState, ConflictDetails, NearbyEventDetails };

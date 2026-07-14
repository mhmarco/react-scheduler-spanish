import { FC, useMemo, useState, useCallback, useRef, useEffect } from "react";
import dayjs from "dayjs";
import { TimeRangeSelectionData } from "@/hooks/types";
import { PaginatedSchedulerData, ZoomLevel, Day } from "@/types/global";
import { boxHeight, dayWidth, singleDayWidth, subcontractSeparatorHeight, zoom2ColumnWidth } from "@/constants";
import {
  StyledPendingSelection,
  StyledSelectionLabel,
  StyledRemoveButton,
  StyledConflictIcon
} from "./styles";

export type PendingSelectionsProps = {
  selections: TimeRangeSelectionData[];
  data: PaginatedSchedulerData;
  zoom: ZoomLevel;
  startDate: Day;
  onRemove: (index: number) => void;
  onUpdate?: (index: number, updates: Partial<TimeRangeSelectionData>) => void;
  separatorRowIndices?: number[];
};

const PendingSelections: FC<PendingSelectionsProps> = ({
  selections,
  data,
  zoom,
  startDate,
  onRemove,
  onUpdate,
  separatorRowIndices = []
}) => {
  // Drag state
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);

  // Calculate cell width based on zoom level
  const cellWidth = useMemo(() => {
    switch (zoom) {
      case 0:
        return singleDayWidth * 7;
      case 1:
        return dayWidth;
      case 2:
        return zoom2ColumnWidth;
      default:
        return dayWidth;
    }
  }, [zoom]);

  // Get base date from startDate
  const baseDate = useMemo(() => {
    return dayjs()
      .year(startDate.year)
      .month(startDate.month)
      .date(startDate.dayOfMonth)
      .hour(startDate.hour)
      .minute(0)
      .second(0)
      .millisecond(0);
  }, [startDate]);

  // Calculate position for each selection
  const selectionPositions = useMemo(() => {
    return selections.map((selection, index) => {
      // Find resource row index
      let rowIndex = 0;
      let found = false;
      for (const person of data) {
        if (person.id === selection.resourceId) {
          found = true;
          break;
        }
        rowIndex += Math.max(person.data.length, 1);
      }

      if (!found) return null;

      // Calculate X position based on date difference
      const selectionStart = dayjs(selection.startDate);
      const selectionEnd = dayjs(selection.endDate);

      let cellsFromStart: number;
      let cellSpan: number;

      switch (zoom) {
        case 0: // Weeks
          cellsFromStart = Math.floor(selectionStart.diff(baseDate, "days") / 7);
          cellSpan = Math.max(1, Math.ceil(selectionEnd.diff(selectionStart, "days") / 7) + 1);
          break;
        case 1: // Days
          cellsFromStart = selectionStart.diff(baseDate, "days");
          cellSpan = Math.max(1, selectionEnd.diff(selectionStart, "days") + 1);
          break;
        case 2: // Hours
          cellsFromStart = selectionStart.diff(baseDate, "hours");
          cellSpan = Math.max(1, selectionEnd.diff(selectionStart, "hours") + 1);
          break;
        default:
          cellsFromStart = 0;
          cellSpan = 1;
      }

      const x = cellsFromStart * cellWidth;
      let sepCount = 0;
      for (const sepRow of separatorRowIndices) {
        if (sepRow <= rowIndex) sepCount++;
      }
      const y = rowIndex * boxHeight + sepCount * subcontractSeparatorHeight;
      const width = cellSpan * cellWidth;

      return {
        index,
        selection,
        x,
        y,
        width,
        height: boxHeight
      };
    });
  }, [selections, data, zoom, baseDate, cellWidth]);

  const formatDateRange = (start: Date, end: Date) => {
    const startStr = dayjs(start).format("MMM D");
    const endStr = dayjs(end).format("MMM D");
    return startStr === endStr ? startStr : `${startStr} - ${endStr}`;
  };

  const getConflictTooltip = (selection: TimeRangeSelectionData) => {
    if (!selection.hasConflict || !selection.conflicts) return "";
    const conflictList = selection.conflicts
      .map((c) => {
        const hours = (c.overlapDuration / 3600000).toFixed(1);
        return `• ${c.event.title} (${hours}h overlap)`;
      })
      .join("\n");
    return `⚠️ Conflicts with:\n${conflictList}`;
  };

  // Get resource info from Y position
  const getResourceFromY = useCallback(
    (y: number): { resourceId: string; resourceLabel: { icon: string; title: string; subtitle: string } } | null => {
      let currentRow = 0;
      for (const person of data) {
        const rowsInPerson = Math.max(person.data.length, 1);
        if (y >= currentRow * boxHeight && y < (currentRow + rowsInPerson) * boxHeight) {
          return {
            resourceId: person.id,
            resourceLabel: person.label
          };
        }
        currentRow += rowsInPerson;
      }
      return null;
    },
    [data]
  );

  // Calculate date from X position
  const getDateFromX = useCallback(
    (x: number): Date => {
      const cellIndex = Math.floor(x / cellWidth);
      switch (zoom) {
        case 0:
          return baseDate.add(cellIndex * 7, "days").toDate();
        case 1:
          return baseDate.add(cellIndex, "days").toDate();
        case 2:
          return baseDate.add(cellIndex, "hours").toDate();
        default:
          return baseDate.toDate();
      }
    },
    [zoom, baseDate, cellWidth]
  );

  // Handle drag start
  const handleDragStart = useCallback(
    (e: React.MouseEvent, index: number) => {
      if (!onUpdate) return;
      e.preventDefault();
      e.stopPropagation();

      const pos = selectionPositions[index];
      if (!pos) return;

      dragStartPos.current = { x: e.clientX, y: e.clientY };
      setDraggingIndex(index);
      setDragOffset({ x: 0, y: 0 });
    },
    [onUpdate, selectionPositions]
  );

  // Handle drag move
  const handleDragMove = useCallback(
    (e: MouseEvent) => {
      if (draggingIndex === null || !dragStartPos.current) return;

      const deltaX = e.clientX - dragStartPos.current.x;
      const deltaY = e.clientY - dragStartPos.current.y;

      // Snap to grid
      const snappedDeltaX = Math.round(deltaX / cellWidth) * cellWidth;
      const snappedDeltaY = Math.round(deltaY / boxHeight) * boxHeight;

      setDragOffset({ x: snappedDeltaX, y: snappedDeltaY });
    },
    [draggingIndex, cellWidth]
  );

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    if (draggingIndex === null || !onUpdate) {
      setDraggingIndex(null);
      setDragOffset({ x: 0, y: 0 });
      dragStartPos.current = null;
      return;
    }

    const pos = selectionPositions[draggingIndex];
    if (!pos) {
      setDraggingIndex(null);
      setDragOffset({ x: 0, y: 0 });
      dragStartPos.current = null;
      return;
    }

    // Calculate new position
    const newX = pos.x + dragOffset.x;
    const newY = pos.y + dragOffset.y;

    // Get new resource from Y position
    const resourceInfo = getResourceFromY(newY + boxHeight / 2);
    if (!resourceInfo) {
      setDraggingIndex(null);
      setDragOffset({ x: 0, y: 0 });
      dragStartPos.current = null;
      return;
    }

    // Calculate new dates
    const newStartDate = getDateFromX(newX);
    const selection = selections[draggingIndex];
    const duration = selection.endDate.getTime() - selection.startDate.getTime();
    const newEndDate = new Date(newStartDate.getTime() + duration);

    // Update the selection
    onUpdate(draggingIndex, {
      startDate: newStartDate,
      endDate: newEndDate,
      resourceId: resourceInfo.resourceId,
      resourceLabel: resourceInfo.resourceLabel
    });

    setDraggingIndex(null);
    setDragOffset({ x: 0, y: 0 });
    dragStartPos.current = null;
  }, [draggingIndex, dragOffset, selectionPositions, selections, onUpdate, getResourceFromY, getDateFromX]);

  // Set up document-level event listeners for drag
  useEffect(() => {
    if (draggingIndex !== null) {
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);

      return () => {
        document.removeEventListener("mousemove", handleDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
      };
    }
  }, [draggingIndex, handleDragMove, handleDragEnd]);

  return (
    <>
      {selectionPositions.map((pos) => {
        if (!pos) return null;
        const hasConflict = pos.selection.hasConflict || false;
        const isDragging = draggingIndex === pos.index;
        const displayX = isDragging ? pos.x + dragOffset.x : pos.x;
        const displayY = isDragging ? pos.y + dragOffset.y : pos.y;

        return (
          <StyledPendingSelection
            key={pos.index}
            $hasConflict={hasConflict}
            $isDragging={isDragging}
            style={{
              left: displayX,
              top: displayY,
              width: pos.width,
              height: pos.height
            }}
            data-multi-select-ui
            onMouseDown={(e: React.MouseEvent) => handleDragStart(e, pos.index)}
          >
            {hasConflict && (
              <StyledConflictIcon title={getConflictTooltip(pos.selection)}>⚠️</StyledConflictIcon>
            )}
            <StyledSelectionLabel $hasConflict={hasConflict}>
              {formatDateRange(pos.selection.startDate, pos.selection.endDate)}
            </StyledSelectionLabel>
            <StyledRemoveButton
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onRemove(pos.index);
              }}
              onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
              title={hasConflict ? "Remove conflicting selection" : "Remove selection"}
            >
              ×
            </StyledRemoveButton>
          </StyledPendingSelection>
        );
      })}
    </>
  );
};

export default PendingSelections;

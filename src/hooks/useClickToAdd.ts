import { useState, useRef, useCallback, useEffect } from "react";
import dayjs from "dayjs";
import { Coords } from "@/types/global";
import { boxHeight, dayWidth, singleDayWidth, subcontractSeparatorHeight, zoom2ColumnWidth } from "@/constants";
import { adjustYForSeparators } from "@/utils/adjustYForSeparators";
import { clientToGridCoords } from "@/utils/dragAndDrop";
import {
  SelectionState,
  UseClickToAddParams,
  UseClickToAddReturn,
  TimeRangeSelectionData,
  ConflictDetails
} from "./types";

export const useClickToAdd = ({
  data,
  baseData,
  zoom,
  startDate,
  onTimeRangeSelect,
  onMultiTimeRangeSelect,
  clickToAddConfig = {},
  gridRef,
  isDragging,
  separatorRowIndices = []
}: UseClickToAddParams): UseClickToAddReturn => {
  const { enabled = false, isSelectable } = clickToAddConfig;

  // Only enable if explicitly enabled AND onTimeRangeSelect callback is provided
  const isEnabled = enabled && !!onTimeRangeSelect;

  const getRowY = useCallback((rowIndex: number) => {
    let sepCount = 0;
    for (const sepRow of separatorRowIndices) {
      if (sepRow <= rowIndex) sepCount++;
    }
    return rowIndex * boxHeight + sepCount * subcontractSeparatorHeight;
  }, [separatorRowIndices]);

  // State management
  const [selectionState, setSelectionState] = useState<SelectionState>("idle");
  const [selectionStart, setSelectionStart] = useState<Coords | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<Coords | null>(null);
  const [selectionBox, setSelectionBox] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  // Multi-select state - activated when consumer returns { continueMultiSelect: true }
  const [isMultiSelectActive, setIsMultiSelectActive] = useState(false);
  const [pendingSelections, setPendingSelections] = useState<TimeRangeSelectionData[]>([]);
  // Track whether there are new selections since last confirm (controls toolbar visibility)
  const [hasUnconfirmedSelections, setHasUnconfirmedSelections] = useState(false);

  // Refs for tracking selection
  const mouseDownPosition = useRef<Coords | null>(null);
  const startResourceIndex = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  /**
   * Get cell width based on zoom level
   */
  const getCellWidth = useCallback((): number => {
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

  /**
   * Calculate date from X position
   */
  const getDateFromX = useCallback(
    (x: number): Date => {
      const cellWidth = getCellWidth();
      const cellIndex = Math.floor(x / cellWidth);

      const baseDate = dayjs()
        .year(startDate.year)
        .month(startDate.month)
        .date(startDate.dayOfMonth)
        .hour(startDate.hour)
        .minute(0)
        .second(0)
        .millisecond(0);

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
    [zoom, startDate, getCellWidth]
  );



  /**
   * Get resource info from Y position
   */
  const getResourceFromY = useCallback(
    (
      y: number
    ): {
      resourceId: string;
      resourceIndex: number;
      resourceLabel: { icon?: string; title: string; subtitle: string };
    } | null => {
      const adjustedY = adjustYForSeparators(y, separatorRowIndices);
      const resourceIndex = Math.floor(adjustedY / boxHeight);

      let currentRow = 0;
      for (const person of data) {
        const rowsInPerson = Math.max(person.data.length, 1);
        if (resourceIndex < currentRow + rowsInPerson) {
          return {
            resourceId: person.id,
            resourceIndex,
            resourceLabel: person.label
          };
        }
        currentRow += rowsInPerson;
      }
      return null;
    },
    [data, separatorRowIndices]
  );

  /**
   * Calculate snapped X position for selection box
   */
  const getSnappedX = useCallback(
    (x: number): number => {
      const cellWidth = getCellWidth();
      return Math.floor(x / cellWidth) * cellWidth;
    },
    [getCellWidth]
  );

  /**
   * Detect conflicts between a selection and existing events + other pending selections
   */
  const detectConflicts = useCallback(
    (
      resourceId: string,
      selectionStart: Date,
      selectionEnd: Date,
      currentPendingSelections: TimeRangeSelectionData[] = []
    ): ConflictDetails[] => {
      const conflicts: ConflictDetails[] = [];

      // Use baseData if available, otherwise fall back to data
      // Cast to a common type that works for both SchedulerData and PaginatedSchedulerData
      const dataToCheck = (baseData || data) as Array<{
        id: string;
        data:
          | import("@/types/global").SchedulerProjectData[]
          | import("@/types/global").SchedulerProjectData[][];
      }>;

      // Find the resource
      const resource = dataToCheck.find((r) => r.id === resourceId);

      const selStart = selectionStart.getTime();
      const selEnd = selectionEnd.getTime();

      // Check conflicts with existing events
      if (resource) {
        // Flatten events - handle both PaginatedSchedulerRow (data: SchedulerProjectData[][])
        // and SchedulerRow (data: SchedulerProjectData[])
        const firstItem = resource.data[0];
        const events: import("@/types/global").SchedulerProjectData[] =
          firstItem && Array.isArray(firstItem)
            ? (resource.data as import("@/types/global").SchedulerProjectData[][]).flat()
            : (resource.data as import("@/types/global").SchedulerProjectData[]);

        // Check each event in the resource for overlap
        for (const event of events) {
          const eventStart = new Date(event.startDate).getTime();
          const eventEnd = new Date(event.endDate).getTime();

          // Check for overlap: two ranges overlap if one starts before the other ends
          // and the other starts before the first one ends
          if (selStart < eventEnd && selEnd > eventStart) {
            // Calculate overlap period
            const conflictStart = new Date(Math.max(selStart, eventStart));
            const conflictEnd = new Date(Math.min(selEnd, eventEnd));
            const overlapDuration = conflictEnd.getTime() - conflictStart.getTime();

            conflicts.push({
              event,
              conflictStart,
              conflictEnd,
              overlapDuration
            });
          }
        }
      }

      // Check conflicts with other pending selections on the same resource
      for (const pending of currentPendingSelections) {
        if (pending.resourceId !== resourceId) continue;

        const pendingStart = pending.startDate.getTime();
        const pendingEnd = pending.endDate.getTime();

        // Check for overlap
        if (selStart < pendingEnd && selEnd > pendingStart) {
          // Calculate overlap period
          const conflictStart = new Date(Math.max(selStart, pendingStart));
          const conflictEnd = new Date(Math.min(selEnd, pendingEnd));
          const overlapDuration = conflictEnd.getTime() - conflictStart.getTime();

          // Create a pseudo-event for the pending selection
          const pseudoEvent: import("@/types/global").SchedulerProjectData = {
            segmentId: `pending-${pending.startDate.getTime()}`,
            reservationId: `pending-${pending.startDate.getTime()}`,
            startDate: pending.startDate,
            endDate: pending.endDate,
            occupancy: 0,
            title: `New Event (${pending.resourceLabel.title})`,
            bookingNumber: "",
            description: "Pending selection"
          };

          conflicts.push({
            event: pseudoEvent,
            conflictStart,
            conflictEnd,
            overlapDuration
          });
        }
      }

      return conflicts;
    },
    [data, baseData]
  );

  /**
   * Handle mouse down on grid - start potential selection
   */
  const handleGridMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!isEnabled || isDragging) return;
      if (!gridRef.current) return;

      if (e.button !== 0) return;

      const target = e.target as HTMLElement;
      if (target.closest("[data-segment-id]")) return;
      // Don't start selection if clicking on multi-select UI elements
      if (target.closest("[data-multi-select-ui]")) return;

      const gridCoords = clientToGridCoords(e.clientX, e.clientY, gridRef.current);

      const resourceInfo = getResourceFromY(gridCoords.y);
      if (!resourceInfo) return;

      mouseDownPosition.current = { x: e.clientX, y: e.clientY };
      startResourceIndex.current = resourceInfo.resourceIndex;

      const snappedX = getSnappedX(gridCoords.x);
      const cellWidth = getCellWidth();
      const rowY = getRowY(resourceInfo.resourceIndex);

      setSelectionStart(gridCoords);
      setSelectionEnd(gridCoords);
      setSelectionBox({
        x: snappedX,
        y: rowY,
        width: cellWidth,
        height: boxHeight
      });
      setSelectionState("selecting");
    },
    [isEnabled, isDragging, gridRef, getResourceFromY, getSnappedX, getCellWidth, getRowY]
  );

  /**
   * Handle mouse move during selection
   */
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (selectionState !== "selecting" || !gridRef.current) return;
      if (startResourceIndex.current === null) return;

      const gridCoords = clientToGridCoords(e.clientX, e.clientY, gridRef.current);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setSelectionEnd(gridCoords);

        const cellWidth = getCellWidth();
        const startX = getSnappedX(selectionStart?.x || 0);
        const endX = getSnappedX(gridCoords.x);
        const rowY = getRowY(startResourceIndex.current!);

        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX) + cellWidth;

        setSelectionBox({
          x: minX,
          y: rowY,
          width: maxX - minX,
          height: boxHeight
        });
      });
    },
    [selectionState, gridRef, selectionStart, getCellWidth, getSnappedX, getRowY]
  );

  /**
   * Handle mouse up - complete selection
   */
  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (selectionState !== "selecting") return;
      if (!gridRef.current || !selectionStart || !mouseDownPosition.current) {
        setSelectionState("idle");
        setSelectionStart(null);
        setSelectionEnd(null);
        setSelectionBox(null);
        return;
      }

      const gridCoords = clientToGridCoords(e.clientX, e.clientY, gridRef.current);

      const resourceInfo = getResourceFromY(selectionStart.y);
      if (!resourceInfo) {
        setSelectionState("idle");
        setSelectionStart(null);
        setSelectionEnd(null);
        setSelectionBox(null);
        return;
      }

      const startX = Math.min(selectionStart.x, gridCoords.x);
      const endX = Math.max(selectionStart.x, gridCoords.x);

      // Get the dates from grid position
      const rangeStartDate = getDateFromX(startX);
      // Set end date to 23:59:00 of the selected day for full-day coverage
      const rawEndDate = getDateFromX(endX);
      const rangeEndDate = dayjs(rawEndDate).hour(23).minute(59).second(0).millisecond(0).toDate();

      if (isSelectable && !isSelectable(resourceInfo.resourceId, rangeStartDate, rangeEndDate)) {
        setSelectionState("idle");
        setSelectionStart(null);
        setSelectionEnd(null);
        setSelectionBox(null);
        return;
      }

      // Detect conflicts with existing events AND other pending selections
      const conflicts = detectConflicts(
        resourceInfo.resourceId,
        rangeStartDate,
        rangeEndDate,
        pendingSelections
      );
      const hasConflict = conflicts.length > 0;

      const selectionData: TimeRangeSelectionData = {
        startDate: rangeStartDate,
        endDate: rangeEndDate,
        resourceId: resourceInfo.resourceId,
        resourceLabel: resourceInfo.resourceLabel,
        zoomLevel: zoom,
        hasConflict,
        conflicts: hasConflict ? conflicts : undefined
      };

      // If already in multi-select mode, just accumulate silently (no callback)
      if (isMultiSelectActive) {
        setPendingSelections((prev) => [...prev, selectionData]);
        setHasUnconfirmedSelections(true); // New selection added, show toolbar
      }
      // First selection - fire onTimeRangeSelect, consumer decides what to do
      else if (onTimeRangeSelect) {
        const response = onTimeRangeSelect(selectionData);

        // Handle both sync and async responses
        const handleResponse = (res: { continueMultiSelect: boolean } | void) => {
          if (res?.continueMultiSelect) {
            setIsMultiSelectActive(true);
            setPendingSelections([selectionData]);
            setHasUnconfirmedSelections(true);
          }
        };

        if (response instanceof Promise) {
          response.then(handleResponse);
        } else {
          handleResponse(response);
        }
      }

      // Reset current selection state
      setSelectionState("idle");
      setSelectionStart(null);
      setSelectionEnd(null);
      setSelectionBox(null);
      mouseDownPosition.current = null;
      startResourceIndex.current = null;
    },
    [
      selectionState,
      gridRef,
      selectionStart,
      getResourceFromY,
      getDateFromX,
      isSelectable,
      onTimeRangeSelect,
      zoom,
      isMultiSelectActive,
      detectConflicts,
      pendingSelections
    ]
  );

  /**
   * Confirm all pending selections and trigger onMultiTimeRangeSelect
   * Consumer can return { continueMultiSelect: true } to keep adding more (selections stay visible)
   */
  const confirmSelections = useCallback(() => {
    if (pendingSelections.length > 0 && onMultiTimeRangeSelect) {
      // Hide toolbar immediately while consumer decides (e.g., shows a dialog)
      setHasUnconfirmedSelections(false);

      const response = onMultiTimeRangeSelect(pendingSelections);

      // Handle both sync and async responses
      const handleResponse = (res: { continueMultiSelect: boolean } | void) => {
        if (res?.continueMultiSelect) {
          // Keep multi-select mode active, show toolbar again
          setHasUnconfirmedSelections(true);
        } else {
          // Finalize - clear everything
          setPendingSelections([]);
          setIsMultiSelectActive(false);
          setHasUnconfirmedSelections(false);
        }
      };

      if (response instanceof Promise) {
        response.then(handleResponse);
      } else {
        handleResponse(response);
      }
      return;
    }
    // Reset multi-select state (finalize)
    setPendingSelections([]);
    setIsMultiSelectActive(false);
    setHasUnconfirmedSelections(false);
  }, [pendingSelections, onMultiTimeRangeSelect]);

  /**
   * Clear all pending selections without triggering callback
   */
  const clearSelections = useCallback(() => {
    setPendingSelections([]);
    setIsMultiSelectActive(false);
    setHasUnconfirmedSelections(false);
  }, []);

  /**
   * Remove a specific selection by index
   */
  const removeSelection = useCallback((index: number) => {
    setPendingSelections((prev) => {
      const newSelections = prev.filter((_, i) => i !== index);
      // If no selections left, exit multi-select mode
      if (newSelections.length === 0) {
        setIsMultiSelectActive(false);
        setHasUnconfirmedSelections(false);
      }
      return newSelections;
    });
  }, []);

  /**
   * Update a specific selection by index (used for drag repositioning)
   */
  const updateSelection = useCallback(
    (index: number, updates: Partial<TimeRangeSelectionData>) => {
      setPendingSelections((prev) => {
        return prev.map((selection, i) => {
          if (i !== index) return selection;

          const updatedSelection = { ...selection, ...updates };

          // Re-detect conflicts for the updated selection
          const otherSelections = prev.filter((_, j) => j !== index);
          const conflicts = detectConflicts(
            updatedSelection.resourceId,
            updatedSelection.startDate,
            updatedSelection.endDate,
            otherSelections
          );

          return {
            ...updatedSelection,
            hasConflict: conflicts.length > 0,
            conflicts: conflicts.length > 0 ? conflicts : undefined
          };
        });
      });
    },
    [detectConflicts]
  );

  /**
   * Handle escape key to cancel selection
   */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectionState === "selecting") {
          setSelectionState("idle");
          setSelectionStart(null);
          setSelectionEnd(null);
          setSelectionBox(null);
          mouseDownPosition.current = null;
          startResourceIndex.current = null;
        } else if (isMultiSelectActive && pendingSelections.length > 0) {
          // In multi-select mode, Escape clears pending selections
          setPendingSelections([]);
          setIsMultiSelectActive(false);
          setHasUnconfirmedSelections(false);
        }
      }
    },
    [selectionState, isMultiSelectActive, pendingSelections.length]
  );

  /**
   * Set up document-level event listeners
   */
  useEffect(() => {
    if (selectionState === "selecting") {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectionState, handleMouseMove, handleMouseUp, handleKeyDown]);

  /**
   * Listen for Escape in multi-select mode even when not selecting
   */
  useEffect(() => {
    if (isMultiSelectActive && pendingSelections.length > 0) {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isMultiSelectActive, pendingSelections.length, handleKeyDown]);

  /**
   * Cleanup RAF on unmount
   */
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  /**
   * Cancel selection if dragging starts
   */
  useEffect(() => {
    if (isDragging && selectionState === "selecting") {
      setSelectionState("idle");
      setSelectionStart(null);
      setSelectionEnd(null);
      setSelectionBox(null);
      mouseDownPosition.current = null;
      startResourceIndex.current = null;
    }
  }, [isDragging, selectionState]);

  return {
    selectionState,
    selectionStart,
    selectionEnd,
    selectionBox,
    handleGridMouseDown,
    isEnabled,
    pendingSelections,
    confirmSelections,
    clearSelections,
    removeSelection,
    updateSelection,
    isMultiSelectActive,
    hasUnconfirmedSelections
  };
};

import { useState, useRef, useCallback, useEffect } from "react";
import dayjs from "dayjs";
import { SchedulerProjectData, Coords } from "@/types/global";
import { boxHeight, dayWidth, singleDayWidth, zoom2ColumnWidth } from "@/constants";
import { adjustYForSeparators } from "@/utils/adjustYForSeparators";
import { detectDragIntent, clientToGridCoords } from "@/utils/dragAndDrop";
import {
  DragState,
  DropTarget,
  UseDragAndDropParams,
  UseDragAndDropReturn,
  EventDropData,
  EventDragData,
  ConflictDetails,
  NearbyEventDetails
} from "./types";

export const useDragAndDrop = ({
  data,
  baseData,
  zoom,
  startDate,
  onEventDrop,
  onEventDrag,
  draggableConfig = {},
  gridRef,
  separatorRowIndices = []
}: UseDragAndDropParams): UseDragAndDropReturn => {
  // Normalize baseData to PaginatedSchedulerData format for conflict detection
  // If baseData is SchedulerData (non-paginated), convert it to PaginatedSchedulerData format
  const conflictCheckData = baseData 
    ? (baseData.length > 0 && baseData[0].data.length > 0 && !Array.isArray(baseData[0].data[0])
        ? baseData.map(row => ({ ...row, data: [row.data as any] })) as any
        : baseData)
    : data;
  const { 
    enabled = true, 
    isDraggable: customIsDraggable, 
    resourceOnly = false,
    isValidDrop: customIsValidDrop
  } = draggableConfig;

  // State management
  const [dragState, setDragState] = useState<DragState>("idle");
  const [draggedEvent, setDraggedEvent] = useState<SchedulerProjectData | null>(null);
  const [ghostPosition, setGhostPosition] = useState<Coords>({ x: 0, y: 0 });
  const [ghostDimensions, setGhostDimensions] = useState({ width: 0, height: 48 });
  const [dropTarget, setDropTarget] = useState<DropTarget | null>(null);
  const [isValidDrop, setIsValidDrop] = useState(true);

  // Refs for tracking drag operation
  const dragStartPosition = useRef<Coords>({ x: 0, y: 0 });
  const dragStartMousePosition = useRef<Coords>({ x: 0, y: 0 });
  const dragOffset = useRef<Coords>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const lastDragCallbackTime = useRef<number>(0);
  const originalEventData = useRef<{
    startDate: Date;
    endDate: Date;
    resourceId: string;
  } | null>(null);

  /**
   * Subtask 1.1: Check if an event is draggable
   */
  const isDraggable = useCallback(
    (event: SchedulerProjectData): boolean => {
      if (!enabled) return false;
      
      // Check per-event draggable property
      if (event.draggable === false) return false;
      
      // Check custom draggability function
      if (customIsDraggable) {
        return customIsDraggable(event);
      }
      
      return true;
    },
    [enabled, customIsDraggable]
  );

  /**
   * Subtask 1.3: Calculate snap position based on zoom level
   */
  const calculateSnapPosition = useCallback(
    (mouseX: number, mouseY: number): { snappedDate: Date; snappedResourceIndex: number } => {
      // Calculate resource row based on Y position, adjusted for separator offsets
      const adjustedY = adjustYForSeparators(mouseY, separatorRowIndices);
      const resourceIndex = Math.floor(adjustedY / boxHeight);

      // Calculate date based on X position and zoom level
      let cellWidth: number;
      switch (zoom) {
        case 0: // Yearly view (week-wide columns)
          cellWidth = singleDayWidth * 7; // Week width
          break;
        case 1: // Monthly view (day columns)
          cellWidth = dayWidth;
          break;
        case 2: // Hourly view
          cellWidth = zoom2ColumnWidth;
          break;
        default:
          cellWidth = dayWidth;
      }

      const cellIndex = Math.floor(mouseX / cellWidth);

      // Convert cell index to date based on zoom
      let snappedDate: Date;
      const baseDate = dayjs()
        .year(startDate.year)
        .month(startDate.month)
        .date(startDate.dayOfMonth)
        .hour(startDate.hour)
        .minute(0)
        .second(0)
        .millisecond(0);

      switch (zoom) {
        case 0: // Weekly view - snap to weeks
          snappedDate = baseDate.add(cellIndex * 7, "days").toDate();
          break;
        case 1: // Daily view - snap to days
          snappedDate = baseDate.add(cellIndex, "days").toDate();
          break;
        case 2: // Hourly view - snap to hours
          snappedDate = baseDate.add(cellIndex, "hours").toDate();
          break;
        default:
          snappedDate = baseDate.toDate();
      }

      return { snappedDate, snappedResourceIndex: resourceIndex };
    },
    [zoom, startDate, separatorRowIndices]
  );

  /**
   * Helper: Calculate conflict details for a given time range and resource
   */
  const calculateConflicts = useCallback(
    (
      draggedEvent: SchedulerProjectData,
      startDate: Date,
      endDate: Date,
      resourceId: string
    ): ConflictDetails[] => {
      const conflicts: ConflictDetails[] = [];
      const dragStart = startDate.getTime();
      const dragEnd = endDate.getTime();

      // Find the target resource in the unfiltered base data
      const targetResource = conflictCheckData.find((r: any) => r.id === resourceId);
      if (!targetResource) return conflicts;

      // Normalize data to always be an array of events
      // Handle both paginated (SchedulerProjectData[][]) and non-paginated (SchedulerProjectData[]) formats
      const allEvents: SchedulerProjectData[] = [];
      for (const item of targetResource.data) {
        if (Array.isArray(item)) {
          // Paginated format: item is an array of events
          allEvents.push(...item);
        } else {
          // Non-paginated format: item is a single event
          allEvents.push(item);
        }
      }

      // Check all events in the target resource for overlaps
      for (const existingEvent of allEvents) {
        // Skip the event being dragged
        if (existingEvent.segmentId === draggedEvent.segmentId) continue;

        const eventStart = existingEvent.startDate.getTime();
        const eventEnd = existingEvent.endDate.getTime();

        // Check for overlap
        const hasOverlap =
          (dragStart >= eventStart && dragStart < eventEnd) ||
          (dragEnd > eventStart && dragEnd <= eventEnd) ||
          (dragStart <= eventStart && dragEnd >= eventEnd);

        if (hasOverlap) {
          // Calculate the exact overlap period
          const conflictStart = new Date(Math.max(dragStart, eventStart));
          const conflictEnd = new Date(Math.min(dragEnd, eventEnd));
          const overlapDuration = conflictEnd.getTime() - conflictStart.getTime();

          conflicts.push({
            event: existingEvent,
            conflictStart,
            conflictEnd,
            overlapDuration
          });
        }
      }

      return conflicts;
    },
    [conflictCheckData]
  );

  /**
   * Helper: Calculate nearby events (same day, no overlap)
   */
  const calculateNearbyEvents = useCallback(
    (
      draggedEvent: SchedulerProjectData,
      startDate: Date,
      endDate: Date,
      resourceId: string
    ): NearbyEventDetails[] => {
      const nearbyEvents: NearbyEventDetails[] = [];
      const dragStart = startDate.getTime();
      const dragEnd = endDate.getTime();
      const dragDay = dayjs(startDate).format("YYYY-MM-DD");

      // Find the target resource in the unfiltered base data
      const targetResource = conflictCheckData.find((r: any) => r.id === resourceId);
      if (!targetResource) return nearbyEvents;

      // Normalize data to always be an array of events
      // Handle both paginated (SchedulerProjectData[][]) and non-paginated (SchedulerProjectData[]) formats
      const allEvents: SchedulerProjectData[] = [];
      for (const item of targetResource.data) {
        if (Array.isArray(item)) {
          // Paginated format: item is an array of events
          allEvents.push(...item);
        } else {
          // Non-paginated format: item is a single event
          allEvents.push(item);
        }
      }

      // Check all events in the target resource
      for (const existingEvent of allEvents) {
        // Skip the event being dragged
        if (existingEvent.segmentId === draggedEvent.segmentId) continue;

        const eventStart = existingEvent.startDate.getTime();
        const eventEnd = existingEvent.endDate.getTime();
        
        // Check if event is on the same day (check both start and end dates)
        const eventStartDay = dayjs(existingEvent.startDate).format("YYYY-MM-DD");
        const eventEndDay = dayjs(existingEvent.endDate).format("YYYY-MM-DD");
        const dragEndDay = dayjs(endDate).format("YYYY-MM-DD");
        
        // Event is on same day if any part of either event overlaps with the same calendar day
        const isOnSameDay = 
          eventStartDay === dragDay || 
          eventEndDay === dragDay ||
          eventStartDay === dragEndDay ||
          eventEndDay === dragEndDay ||
          (dayjs(existingEvent.startDate).isBefore(startDate, "day") && 
           dayjs(existingEvent.endDate).isAfter(endDate, "day"));

        if (!isOnSameDay) continue;

        // Check for overlap (skip if overlapping - those are conflicts)
        const hasOverlap =
          (dragStart >= eventStart && dragStart < eventEnd) ||
          (dragEnd > eventStart && dragEnd <= eventEnd) ||
          (dragStart <= eventStart && dragEnd >= eventEnd);

        if (hasOverlap) continue; // Skip overlapping events

        // Calculate time gap
        let timeGap: number;
        let position: "before" | "after";

        if (eventEnd <= dragStart) {
          // Event ends before dragged event starts
          timeGap = dragStart - eventEnd;
          position = "before";
        } else {
          // Event starts after dragged event ends
          timeGap = eventStart - dragEnd;
          position = "after";
        }

        // Include all events on the same day (no time limit)
        nearbyEvents.push({
          event: existingEvent,
          timeGap,
          position
        });
      }

      // Sort by time gap (closest first)
      return nearbyEvents.sort((a, b) => a.timeGap - b.timeGap);
    },
    [conflictCheckData]
  );

  /**
   * Subtask 1.4: Calculate drop target with duration preservation and capacity validation
   */
  const calculateDropTarget = useCallback(
    (event: SchedulerProjectData, mouseX: number, mouseY: number): DropTarget | null => {
      const snapPosition = calculateSnapPosition(mouseX, mouseY);
      
      // If resourceOnly mode, keep original dates; otherwise calculate new dates
      let newStartDate: Date;
      let newEndDate: Date;
      
      if (resourceOnly) {
        // Keep original dates, only change resource
        newStartDate = event.startDate;
        newEndDate = event.endDate;
      } else {
        // Preserve event duration and calculate new dates
        const duration = dayjs(event.endDate).diff(event.startDate);
        newStartDate = snapPosition.snappedDate;
        newEndDate = dayjs(newStartDate).add(duration, "milliseconds").toDate();
      }

      // Find resource ID and capacity from resource index
      let currentRow = 0;
      let resourceId = "";
      let resourceCapacity: number | undefined;

      for (const person of data) {
        const rowsInPerson = Math.max(person.data.length, 1);
        if (snapPosition.snappedResourceIndex < currentRow + rowsInPerson) {
          resourceId = person.id;
          resourceCapacity = person.capacity;
          break;
        }
        currentRow += rowsInPerson;
      }

      // If no valid resource found, return null
      if (!resourceId) return null;

      // Check capacity validation
      let hasCapacity = true;
      if (resourceCapacity !== undefined && event.totalPassengers !== undefined) {
        hasCapacity = event.totalPassengers <= resourceCapacity;
      }

      // Calculate conflict details
      const conflicts = calculateConflicts(event, newStartDate, newEndDate, resourceId);
      
      // Calculate nearby events (only if no conflicts)
      const nearbyEvents = conflicts.length === 0 
        ? calculateNearbyEvents(event, newStartDate, newEndDate, resourceId)
        : [];

      return {
        startDate: newStartDate,
        endDate: newEndDate,
        resourceId,
        resourceIndex: snapPosition.snappedResourceIndex,
        resourceCapacity,
        hasCapacity,
        conflicts,
        hasConflict: conflicts.length > 0,
        nearbyEvents
      };
    },
    [calculateSnapPosition, data, resourceOnly, calculateConflicts, calculateNearbyEvents]
  );

  /**
   * Subtask 1.6: Throttled drag progress callback
   */
  const fireDragProgressCallback = useCallback(
    (event: SchedulerProjectData, target: DropTarget) => {
      if (!onEventDrag) return;

      const now = Date.now();
      if (now - lastDragCallbackTime.current < 100) return; // Throttle to 100ms

      lastDragCallbackTime.current = now;

      const dragData: EventDragData = {
        event,
        currentStartDate: target.startDate,
        currentEndDate: target.endDate,
        currentResourceId: target.resourceId,
        conflicts: target.conflicts
      };

      onEventDrag(dragData);
    },
    [onEventDrag]
  );

  /**
   * Subtask 1.1: Handle drag start
   */
  const handleDragStart = useCallback(
    (event: SchedulerProjectData, mouseEvent: React.MouseEvent) => {
      if (!isDraggable(event)) return;
      if (!gridRef.current) return;

      mouseEvent.preventDefault();
      mouseEvent.stopPropagation();

      // Get the tile's actual DOM position
      const tileElement = (mouseEvent.target as HTMLElement).closest('[style*="left"]') as HTMLElement;
      let tileX = 0;
      let tileY = 0;
      
      if (tileElement && tileElement.style.left && tileElement.style.top) {
        tileX = parseInt(tileElement.style.left);
        tileY = parseInt(tileElement.style.top);
      }

      // Store initial positions
      const gridCoords = clientToGridCoords(
        mouseEvent.clientX,
        mouseEvent.clientY,
        gridRef.current
      );

      dragStartPosition.current = { x: tileX, y: tileY };
      dragStartMousePosition.current = { x: mouseEvent.clientX, y: mouseEvent.clientY };

      // Calculate drag offset (difference between mouse position and tile position)
      // For X: calculate offset so ghost stays aligned with where user grabbed it
      // For Y: no offset - ghost follows mouse vertically
      dragOffset.current = { 
        x: gridCoords.x - tileX, // Offset from mouse to tile's left edge
        y: 20 // No Y offset - ghost follows mouse vertically
      };

      // Store original event data for potential rejection
      originalEventData.current = {
        startDate: event.startDate,
        endDate: event.endDate,
        resourceId: "" // Will be determined from data structure
      };

      // Find original resource ID
      for (const person of data) {
        for (const row of person.data) {
          if (row.some(e => e.segmentId === event.segmentId)) {
            originalEventData.current.resourceId = person.id;
            break;
          }
        }
        if (originalEventData.current.resourceId) break;
      }

      setDraggedEvent(event);
      setDragState("potential");
      // Set ghost position to the tile's DOM position
      setGhostPosition({ x: tileX, y: tileY });

      // Get ghost dimensions from the tile's DOM element
      let width = 100; // Default width
      let height = 48; // Default height
      
      if (tileElement) {
        const rect = tileElement.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
      }
      
      setGhostDimensions({ width, height });
    },
    [isDraggable, gridRef, data, zoom]
  );

  /**
   * Auto-scroll when dragging near edges
   */
  const handleAutoScroll = useCallback(
    (mouseEvent: MouseEvent) => {
      if (!gridRef.current) return;

      // Find the scrollable container - look for parent with overflow
      let scrollContainer: HTMLElement | null = gridRef.current;
      while (scrollContainer && scrollContainer !== document.body) {
        const style = window.getComputedStyle(scrollContainer);
        const hasVerticalScroll = 
          scrollContainer.scrollHeight > scrollContainer.clientHeight &&
          (style.overflowY === "auto" || style.overflowY === "scroll" || style.overflow === "auto" || style.overflow === "scroll");
        
        if (hasVerticalScroll) {
          break;
        }
        scrollContainer = scrollContainer.parentElement;
      }

      // Fallback to window scroll if no scrollable parent found
      if (!scrollContainer || scrollContainer === document.body) {
        scrollContainer = document.documentElement;
      }

      const rect = scrollContainer.getBoundingClientRect();
      const mouseY = mouseEvent.clientY;
      
      // Define scroll zones (50px from top/bottom of visible area)
      const scrollZone = 50;
      const scrollSpeed = 12; // pixels per frame (near the edge); scales down toward the zone's inner boundary
      
      const distanceFromTop = mouseY - rect.top;
      const distanceFromBottom = rect.bottom - mouseY;
      
      let shouldScroll = false;
      let scrollDelta = 0;

      if (distanceFromTop < scrollZone && distanceFromTop > 0) {
        // Near top - scroll up
        shouldScroll = true;
        scrollDelta = -scrollSpeed * (1 - distanceFromTop / scrollZone);
      } else if (distanceFromBottom < scrollZone && distanceFromBottom > 0) {
        // Near bottom - scroll down
        shouldScroll = true;
        scrollDelta = scrollSpeed * (1 - distanceFromBottom / scrollZone);
      }

      if (shouldScroll) {
        // Cancel any pending scroll RAF
        if (scrollRafRef.current) {
          cancelAnimationFrame(scrollRafRef.current);
        }

        // Smooth scroll with RAF
        scrollRafRef.current = requestAnimationFrame(() => {
          scrollContainer!.scrollTop += scrollDelta;
          
          // Continue scrolling if still in zone
          if (dragState === "dragging") {
            handleAutoScroll(mouseEvent);
          }
        });
      } else {
        // Stop scrolling when out of zone
        if (scrollRafRef.current) {
          cancelAnimationFrame(scrollRafRef.current);
          scrollRafRef.current = null;
        }
      }
    },
    [gridRef, dragState]
  );

  /**
   * Subtask 1.2: Handle drag move with RAF optimization and auto-scroll
   */
  const handleDragMove = useCallback(
    (mouseEvent: MouseEvent) => {
      if (dragState === "idle" || dragState === "animating") return;
      if (!draggedEvent || !gridRef.current) return;

      const currentMousePos = { x: mouseEvent.clientX, y: mouseEvent.clientY };

      // Check if we should transition from potential to dragging
      if (dragState === "potential") {
        const isDragging = detectDragIntent(dragStartMousePosition.current, currentMousePos);
        if (isDragging) {
          setDragState("dragging");
        } else {
          return; // Still within click threshold
        }
      }

      // Handle auto-scroll when near edges
      handleAutoScroll(mouseEvent);

      // Convert to grid coordinates
      const gridCoords = clientToGridCoords(
        mouseEvent.clientX,
        mouseEvent.clientY,
        gridRef.current
      );

      // Cancel any pending RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Update ghost position with RAF
      rafRef.current = requestAnimationFrame(() => {
        const newPosition = {
          x: gridCoords.x - dragOffset.current.x,
          y: gridCoords.y - dragOffset.current.y
        };
        setGhostPosition(newPosition);

        // Calculate and update drop target
        const target = calculateDropTarget(draggedEvent, gridCoords.x, gridCoords.y);
        
        // Check for conflicts using custom validation
        if (target && customIsValidDrop) {
          const dragData: EventDragData = {
            event: draggedEvent,
            currentStartDate: target.startDate,
            currentEndDate: target.endDate,
            currentResourceId: target.resourceId,
            conflicts: target.conflicts
          };
          target.hasConflict = !customIsValidDrop(dragData);
        }
        
        setDropTarget(target);

        // Update validation state - only capacity blocks drops, conflicts are warnings
        if (target) {
          const isValid = target.hasCapacity !== false;
          setIsValidDrop(isValid);
          fireDragProgressCallback(draggedEvent, target);
        }
      });
    },
    [dragState, draggedEvent, gridRef, calculateDropTarget, fireDragProgressCallback, customIsValidDrop, handleAutoScroll]
  );

  /**
   * Subtask 1.5: Handle drag end and drop
   */
  const handleDragEnd = useCallback(
    async (mouseEvent: MouseEvent) => {
      if (dragState === "idle" || dragState === "animating") return;

      // Check if this was a click (not a drag)
      const currentMousePos = { x: mouseEvent.clientX, y: mouseEvent.clientY };
      const wasDrag = detectDragIntent(dragStartMousePosition.current, currentMousePos);

      if (!wasDrag || dragState === "potential") {
        // This was a click, not a drag - reset state
        setDragState("idle");
        setDraggedEvent(null);
        setDropTarget(null);
        return;
      }

      if (!draggedEvent || !dropTarget || !originalEventData.current) {
        setDragState("idle");
        setDraggedEvent(null);
        setDropTarget(null);
        return;
      }

      // Only reject drop if capacity validation fails (hard block)
      // Conflicts are warnings and don't prevent the drop
      if (dropTarget.hasCapacity === false) {
        setIsValidDrop(false);
        setDragState("animating");
        
        // Animate back to original position
        setGhostPosition(dragStartPosition.current);
        
        // After animation completes, reset state
        setTimeout(() => {
          setDragState("idle");
          setDraggedEvent(null);
          setDropTarget(null);
          setIsValidDrop(true);
        }, 300); // Match animation duration
        return;
      }

      // Prepare drop data
      const dropData: EventDropData = {
        event: draggedEvent,
        originalStartDate: originalEventData.current.startDate,
        originalEndDate: originalEventData.current.endDate,
        originalResourceId: originalEventData.current.resourceId,
        newStartDate: dropTarget.startDate,
        newEndDate: dropTarget.endDate,
        newResourceId: dropTarget.resourceId,
        hasConflict: dropTarget.hasConflict,
        conflicts: dropTarget.conflicts
      };

      // Invoke consumer callback
      let accepted = true;
      if (onEventDrop) {
        try {
          const result = onEventDrop(dropData);
          accepted = result instanceof Promise ? await result : result;
        } catch (error) {
          accepted = false;
        }
      }

      if (accepted) {
        // Successful drop
        setIsValidDrop(true);
        setDragState("idle");
        setDraggedEvent(null);
        setDropTarget(null);
      } else {
        // Rejected drop - animate back to original position
        setIsValidDrop(false);
        setDragState("animating");
        
        // Animate back to original position
        setGhostPosition(dragStartPosition.current);
        
        // After animation completes, reset state
        setTimeout(() => {
          setDragState("idle");
          setDraggedEvent(null);
          setDropTarget(null);
          setIsValidDrop(true);
        }, 300); // Match animation duration
      }
    },
    [dragState, draggedEvent, dropTarget, onEventDrop, customIsValidDrop]
  );

  /**
   * Subtask 1.2 & 8.1: Set up document-level event listeners with proper cleanup
   */
  useEffect(() => {
    if (dragState === "potential" || dragState === "dragging") {
      const handleMouseMove = (e: MouseEvent) => handleDragMove(e);
      const handleMouseUp = (e: MouseEvent) => handleDragEnd(e);

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    } else {
      // Ensure listeners are removed when drag ends (transition to idle/animating)
      // This is a safety measure in case the cleanup didn't run
      return () => {
        // No-op cleanup when not dragging
      };
    }
  }, [dragState, handleDragMove, handleDragEnd]);

  /**
   * Subtask 8.1: Cleanup RAF on unmount and when drag ends
   */
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    };
  }, []);

  /**
   * Subtask 8.1: Cancel RAF when drag state changes to idle or animating
   */
  useEffect(() => {
    if (dragState === "idle" || dragState === "animating") {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (scrollRafRef.current) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    }
  }, [dragState]);

  /**
   * Subtask 8.2: Handle zoom changes during drag - cancel drag operation and return to original position
   */
  useEffect(() => {
    if (dragState === "dragging" || dragState === "potential") {
      // Animate back to original position before canceling
      if (dragState === "dragging") {
        setDragState("animating");
        setGhostPosition(dragStartPosition.current);
        
        // After animation completes, reset state
        setTimeout(() => {
          setDragState("idle");
          setDraggedEvent(null);
          setDropTarget(null);
        }, 300); // Match animation duration
      } else {
        // If still in potential state, just cancel immediately
        setDragState("idle");
        setDraggedEvent(null);
        setDropTarget(null);
      }
    }
  }, [zoom]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Subtask 8.3: Handle data updates during drag - cancel if dragged event no longer exists
   */
  useEffect(() => {
    if ((dragState === "dragging" || dragState === "potential") && draggedEvent) {
      // Check if the dragged event still exists in the data
      let eventExists = false;
      for (const person of data) {
        for (const row of person.data) {
          if (row.some(e => e.segmentId === draggedEvent.segmentId)) {
            eventExists = true;
            break;
          }
        }
        if (eventExists) break;
      }

      // If event no longer exists, cancel the drag operation
      if (!eventExists) {
        // If actively dragging, animate back before canceling
        if (dragState === "dragging") {
          setDragState("animating");
          setGhostPosition(dragStartPosition.current);
          
          // After animation completes, reset state
          setTimeout(() => {
            setDragState("idle");
            setDraggedEvent(null);
            setDropTarget(null);
          }, 300); // Match animation duration
        } else {
          // If still in potential state, just cancel immediately
          setDragState("idle");
          setDraggedEvent(null);
          setDropTarget(null);
        }
      }
    }
  }, [data, dragState, draggedEvent]);

  return {
    dragState,
    draggedEvent,
    ghostPosition,
    ghostDimensions,
    dropTarget,
    isValidDrop,
    handleDragStart,
    isDraggable,
    draggingEventId: draggedEvent?.segmentId || null,
    resourceOnly
  };
};

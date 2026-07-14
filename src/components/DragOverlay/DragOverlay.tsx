import { FC, useEffect, useState, useMemo, useCallback } from "react";
import dayjs from "dayjs";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { boxHeight, leftColumnWidth, subcontractSeparatorHeight } from "@/constants";
import { useLanguage } from "@/context/LocaleProvider/LocaleProvider";
import {
  StyledOverlayWrapper,
  StyledGhostElement,
  StyledGhostTextWrapper,
  StyledGhostText,
  StyledGhostDescription,
  StyledGhostStickyWrapper,
  StyledDropIndicator,
  StyledDropTimeLabel,
  StyledResourceHighlight,
  StyledInvalidResourceOverlay,
  StyledResourceOnlyIndicator,
  StyledConflictTooltip,
  StyledConflictHeader,
  StyledConflictIcon,
  StyledConflictList,
  StyledConflictItem,
  StyledConflictEventTitle,
  StyledConflictDetail,
  StyledConflictDuration
} from "./styles";
import { DragOverlayProps, ConflictDetails, NearbyEventDetails } from "./types";

const DragOverlay: FC<DragOverlayProps> = ({
  draggedEvent,
  ghostPosition,
  ghostDimensions,
  dropTarget,
  isValidDrop,
  dragState,
  data,
  resourceOnly,
  separatorRowIndices = []
}) => {
  const lang = useLanguage();

  const getRowY = (rowIndex: number) => {
    let sepCount = 0;
    for (const sepRow of separatorRowIndices) {
      if (sepRow <= rowIndex) sepCount++;
    }
    return rowIndex * boxHeight + sepCount * subcontractSeparatorHeight;
  };
  
  const [animateToPosition, setAnimateToPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  
  // Store the initial X position when drag starts (for resource-only mode)
  const [initialXPosition, setInitialXPosition] = useState<number>(0);
  
  /**
   * Calculate optimal tooltip position that guarantees visibility
   * 
   * Strategy:
   * 1. Convert ghost position from absolute grid coords to viewport-relative coords
   * 2. Calculate available space in all 4 directions from the ghost element
   * 3. Position tooltip in the direction with most space (prefer right, then left, then below, then above)
   * 4. If tooltip doesn't fit in any direction, align with ghost and clamp to safe boundaries
   * 5. Ensure tooltip never overlaps with left column (leftColumnWidth + padding)
   * 6. Convert final position back to absolute grid coordinates for CSS positioning
   */
  const calculateTooltipPosition = useCallback((tooltipWidth = 400, tooltipHeight = 300) => {
    const padding = 16;
    const ghostWidth = ghostDimensions.width;
    const ghostHeight = 48; // Standard tile height
    
    // Get the grid container to understand scroll position and visible area
    const gridContainer = document.getElementById("react-scheduler");
    if (!gridContainer) {
      // Fallback if container not found - position to the right of ghost
      return { 
        x: ghostPosition.x + ghostWidth + padding, 
        y: ghostPosition.y 
      };
    }
    
    // Get scroll position and viewport dimensions
    const scrollLeft = gridContainer.scrollLeft;
    const scrollTop = gridContainer.scrollTop;
    const viewportWidth = gridContainer.clientWidth;
    const viewportHeight = gridContainer.clientHeight;
    
    // Convert ghost position from absolute grid coordinates to viewport-relative coordinates
    const ghostViewportX = ghostPosition.x - scrollLeft;
    const ghostViewportY = ghostPosition.y - scrollTop;
    
    // Define safe boundaries in viewport coordinates
    const safeArea = {
      left: leftColumnWidth + padding, // Avoid left column
      right: viewportWidth - padding,
      top: padding,
      bottom: viewportHeight - padding
    };
    
    // Calculate available space in each direction from the ghost element
    const spaceRight = safeArea.right - (ghostViewportX + ghostWidth);
    const spaceLeft = ghostViewportX - safeArea.left;
    const spaceBelow = safeArea.bottom - (ghostViewportY + ghostHeight);
    const spaceAbove = ghostViewportY - safeArea.top;
    
    let tooltipViewportX: number;
    let tooltipViewportY: number;
    
    // HORIZONTAL POSITIONING
    // Choose the side with more available space
    if (spaceRight >= tooltipWidth + padding) {
      // Enough space on the right
      tooltipViewportX = ghostViewportX + ghostWidth + padding;
    } else if (spaceLeft >= tooltipWidth + padding) {
      // Enough space on the left
      tooltipViewportX = ghostViewportX - tooltipWidth - padding;
    } else {
      // Not enough space on either side - choose the side with MORE space
      if (spaceRight >= spaceLeft) {
        // More space on the right - position to the right and clamp
        tooltipViewportX = ghostViewportX + ghostWidth + padding;
        if (tooltipViewportX + tooltipWidth > safeArea.right) {
          tooltipViewportX = safeArea.right - tooltipWidth;
        }
      } else {
        // More space on the left - position to the left and clamp
        tooltipViewportX = ghostViewportX - tooltipWidth - padding;
        if (tooltipViewportX < safeArea.left) {
          tooltipViewportX = safeArea.left;
        }
      }
    }
    
    // VERTICAL POSITIONING
    // Choose the side with more available space
    if (spaceBelow >= tooltipHeight + padding) {
      // Enough space below
      tooltipViewportY = ghostViewportY + ghostHeight + padding;
    } else if (spaceAbove >= tooltipHeight + padding) {
      // Enough space above
      tooltipViewportY = ghostViewportY - tooltipHeight - padding;
    } else {
      // Not enough space above or below - choose the side with MORE space
      if (spaceBelow >= spaceAbove) {
        // More space below - position below and clamp
        tooltipViewportY = ghostViewportY + ghostHeight + padding;
        if (tooltipViewportY + tooltipHeight > safeArea.bottom) {
          tooltipViewportY = safeArea.bottom - tooltipHeight;
        }
      } else {
        // More space above - position above and clamp
        tooltipViewportY = ghostViewportY - tooltipHeight - padding;
        if (tooltipViewportY < safeArea.top) {
          tooltipViewportY = safeArea.top;
        }
      }
    }
    
    // Final safety clamps to ensure tooltip stays within safe area
    tooltipViewportX = Math.max(safeArea.left, Math.min(tooltipViewportX, safeArea.right - tooltipWidth));
    tooltipViewportY = Math.max(safeArea.top, Math.min(tooltipViewportY, safeArea.bottom - tooltipHeight));
    
    // Convert back to absolute grid coordinates for positioning
    return { 
      x: tooltipViewportX + scrollLeft, 
      y: tooltipViewportY + scrollTop 
    };
  }, [ghostPosition.x, ghostPosition.y, ghostDimensions.width]);

  useEffect(() => {
    if (dragState === "dragging" && draggedEvent && initialXPosition === 0) {
      // Capture the initial X position when drag starts
      setInitialXPosition(ghostPosition.x);
    } else if (dragState === "idle") {
      // Reset when drag ends
      setInitialXPosition(0);
    }
  }, [dragState, draggedEvent, ghostPosition.x, initialXPosition]);

  useEffect(() => {
    if (dragState === "animating" && draggedEvent) {
      // When animating back, set the target position
      // This would be the original position of the tile
      setAnimateToPosition({ x: 0, y: 0 });
    } else {
      setAnimateToPosition(null);
    }
  }, [dragState, draggedEvent]);

  // Calculate which resource rows have insufficient capacity
  const invalidResourceRows = useMemo(() => {
    if (!draggedEvent || !draggedEvent.totalPassengers || dragState === "idle" || dragState === "potential") {
      return [];
    }

    const invalidRows: number[] = [];
    let currentRow = 0;

    for (const person of data) {
      const rowsInPerson = Math.max(person.data.length, 1);
      
      // Check if this resource has capacity defined and if it's insufficient
      if (person.capacity !== undefined && draggedEvent.totalPassengers > person.capacity) {
        // Mark all rows for this resource as invalid
        for (let i = 0; i < rowsInPerson; i++) {
          invalidRows.push(currentRow + i);
        }
      }
      
      currentRow += rowsInPerson;
    }

    return invalidRows;
  }, [draggedEvent, data, dragState]);

  if (!draggedEvent || dragState === "idle" || dragState === "potential") {
    return null;
  }

  const isAnimating = dragState === "animating";
  const textColor = getTileTextColor(draggedEvent.bgColor ?? "");

  // Format time labels for drop indicator
  const formatTimeLabel = () => {
    if (!dropTarget) return "";
    const start = dayjs(dropTarget.startDate).format("MMM D, HH:mm");
    const end = dayjs(dropTarget.endDate).format("HH:mm");
    return `${start} - ${end}`;
  };

  return (
    <StyledOverlayWrapper>
      {/* Gray out resource rows with insufficient capacity */}
      {invalidResourceRows.map((rowIndex) => (
        <StyledInvalidResourceOverlay
          key={rowIndex}
          style={{
            top: `${getRowY(rowIndex)}px`,
            height: `${boxHeight}px`
          }}
        />
      ))}

      {/* Resource row highlighting */}
      {dropTarget && dragState === "dragging" && (
        <StyledResourceHighlight
          $isValid={isValidDrop}
          $hasConflict={dropTarget.hasConflict}
          style={{
            top: `${getRowY(dropTarget.resourceIndex)}px`,
            height: `${boxHeight}px`
          }}
        />
      )}

      {/* Drop target indicator - normal mode */}
      {dropTarget && dragState === "dragging" && !resourceOnly && (
        <>
          <StyledDropIndicator
            $isValid={isValidDrop}
            $hasConflict={dropTarget.hasConflict}
            style={{
              left: `${ghostPosition.x}px`,
              top: `${getRowY(dropTarget.resourceIndex) + (boxHeight - 48) / 2}px`,
              width: `${ghostDimensions.width}px`
            }}
          />
          <StyledDropTimeLabel
            $isValid={isValidDrop}
            $hasConflict={dropTarget.hasConflict}
            style={{
              left: `${ghostPosition.x}px`,
              top: `${getRowY(dropTarget.resourceIndex) + (boxHeight - 48) / 2}px`
            }}>
            {formatTimeLabel()}
          </StyledDropTimeLabel>
        </>
      )}

      {/* Resource-only mode indicator - vertical line on left edge */}
      {dropTarget && dragState === "dragging" && resourceOnly && (
        <StyledResourceOnlyIndicator
          $isValid={isValidDrop}
          $hasConflict={dropTarget.hasConflict}
          style={{
            left: "0px",
            top: `${getRowY(dropTarget.resourceIndex)}px`,
            height: `${boxHeight}px`
          }}
        />
      )}

      {/* Conflict details tooltip */}
      {dropTarget && isValidDrop && dropTarget.hasConflict && dropTarget.conflicts && dropTarget.conflicts.length > 0 && dragState === "dragging" && (() => {
        const tooltipPos = calculateTooltipPosition(400, 300);
        
        return (
        <StyledConflictTooltip
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`
          }}>
          <StyledConflictHeader>
            <StyledConflictIcon>!</StyledConflictIcon>
            {dropTarget.conflicts.length} {dropTarget.conflicts.length > 1 ? lang.conflicts.detectedPlural : lang.conflicts.detected} {lang.conflicts.detectedSuffix}
          </StyledConflictHeader>
          <StyledConflictList>
            {dropTarget.conflicts!.map((conflict: ConflictDetails, index: number) => {
              // Check if events span different days
              const dragStartDay = dayjs(dropTarget.startDate).format("YYYY-MM-DD");
              const dragEndDay = dayjs(dropTarget.endDate).format("YYYY-MM-DD");
              const existingStartDay = dayjs(conflict.event.startDate).format("YYYY-MM-DD");
              const existingEndDay = dayjs(conflict.event.endDate).format("YYYY-MM-DD");
              const conflictStartDay = dayjs(conflict.conflictStart).format("YYYY-MM-DD");
              const conflictEndDay = dayjs(conflict.conflictEnd).format("YYYY-MM-DD");
              
              const dragSpansMultipleDays = dragStartDay !== dragEndDay;
              const existingSpansMultipleDays = existingStartDay !== existingEndDay;
              const conflictSpansMultipleDays = conflictStartDay !== conflictEndDay;
              
              // Format times with dates if needed
              const newEventStart = dragSpansMultipleDays 
                ? dayjs(dropTarget.startDate).format("MMM D, h:mm A")
                : dayjs(dropTarget.startDate).format("h:mm A");
              const newEventEnd = dragSpansMultipleDays
                ? dayjs(dropTarget.endDate).format("MMM D, h:mm A")
                : dayjs(dropTarget.endDate).format("h:mm A");
              
              const existingEventStart = existingSpansMultipleDays
                ? dayjs(conflict.event.startDate).format("MMM D, h:mm A")
                : dayjs(conflict.event.startDate).format("h:mm A");
              const existingEventEnd = existingSpansMultipleDays
                ? dayjs(conflict.event.endDate).format("MMM D, h:mm A")
                : dayjs(conflict.event.endDate).format("h:mm A");
              
              const conflictStartTime = conflictSpansMultipleDays
                ? dayjs(conflict.conflictStart).format("MMM D, h:mm A")
                : dayjs(conflict.conflictStart).format("h:mm A");
              const conflictEndTime = conflictSpansMultipleDays
                ? dayjs(conflict.conflictEnd).format("MMM D, h:mm A")
                : dayjs(conflict.conflictEnd).format("h:mm A");
              
              const conflictDate = !conflictSpansMultipleDays ? dayjs(conflict.conflictStart).format("MMM D") : "";
              
              // Determine which times are conflicting
              const dragStart = dropTarget.startDate.getTime();
              const dragEnd = dropTarget.endDate.getTime();
              const existingStart = conflict.event.startDate.getTime();
              const existingEnd = conflict.event.endDate.getTime();
              
              // Check which parts of each event are in the conflict zone
              const dragStartsInConflict = dragStart >= existingStart && dragStart < existingEnd;
              const dragEndsInConflict = dragEnd > existingStart && dragEnd <= existingEnd;
              const dragCoversExisting = dragStart <= existingStart && dragEnd >= existingEnd;
              const existingCoversDrag = existingStart <= dragStart && existingEnd >= dragEnd;
              
              // Determine highlighting:
              // - If dragged START is in conflict → highlight dragged START and existing END (they overlap)
              // - If dragged END is in conflict → highlight dragged END and existing START (they overlap)
              // - If dragged covers existing → highlight both on both
              // - If existing covers dragged → highlight both on both
              
              let highlightDragStart = false;
              let highlightDragEnd = false;
              let highlightExistingStart = false;
              let highlightExistingEnd = false;
              let changeSuggestion = "";
              
              if (dragCoversExisting || existingCoversDrag) {
                // Full overlap - highlight everything
                highlightDragStart = true;
                highlightDragEnd = true;
                highlightExistingStart = true;
                highlightExistingEnd = true;
                changeSuggestion = `⚠️ ${lang.conflicts.changeBoth}`;
              } else if (dragStartsInConflict && dragEndsInConflict) {
                // Dragged event is entirely within existing event
                highlightDragStart = true;
                highlightDragEnd = true;
                highlightExistingStart = true;
                highlightExistingEnd = true;
                changeSuggestion = `⚠️ ${lang.conflicts.changeBoth}`;
              } else if (dragStartsInConflict) {
                // Dragged event starts during existing event
                // Highlight: dragged START (needs to move earlier) and existing END (being overlapped)
                highlightDragStart = true;
                highlightExistingEnd = true;
                changeSuggestion = `⚠️ ${lang.conflicts.changeStart}`;
              } else if (dragEndsInConflict) {
                // Dragged event ends during existing event
                // Highlight: dragged END (needs to move later) and existing START (being overlapped)
                highlightDragEnd = true;
                highlightExistingStart = true;
                changeSuggestion = `⚠️ ${lang.conflicts.changeEnd}`;
              }

              return (
                <StyledConflictItem key={index}>
                  <StyledConflictEventTitle>
                    {lang.conflicts.conflictsWith}: {conflict.event.title}
                    {conflict.event.subtitle && ` - ${conflict.event.subtitle}`}
                  </StyledConflictEventTitle>
                  <StyledConflictDetail>
                    <strong>{draggedEvent.title}</strong> {lang.conflicts.movingTo}:{" "}
                    {highlightDragStart ? (
                      <span style={{ color: "#D32F2F", fontWeight: 700 }}>{newEventStart}</span>
                    ) : (
                      newEventStart
                    )}{" "}
                    {lang.conflicts.to}{" "}
                    {highlightDragEnd ? (
                      <span style={{ color: "#D32F2F", fontWeight: 700 }}>{newEventEnd}</span>
                    ) : (
                      newEventEnd
                    )}
                  </StyledConflictDetail>
                  <StyledConflictDetail>
                    <strong>{conflict.event.title}</strong> {lang.conflicts.currentlyAt}:{" "}
                    {highlightExistingStart ? (
                      <span style={{ color: "#D32F2F", fontWeight: 700 }}>{existingEventStart}</span>
                    ) : (
                      existingEventStart
                    )}{" "}
                    {lang.conflicts.to}{" "}
                    {highlightExistingEnd ? (
                      <span style={{ color: "#D32F2F", fontWeight: 700 }}>{existingEventEnd}</span>
                    ) : (
                      existingEventEnd
                    )}
                  </StyledConflictDetail>
                  <StyledConflictDuration>
                    {lang.conflicts.conflictTime}: {conflictDate && `${conflictDate}, `}{conflictStartTime} - {conflictEndTime}
                  </StyledConflictDuration>
                  {changeSuggestion && (
                    <StyledConflictDetail style={{ 
                      backgroundColor: "#FFEBEE", 
                      color: "#C62828", 
                      fontWeight: 600,
                      marginTop: "6px",
                      border: "1px solid #EF5350"
                    }}>
                      {changeSuggestion}
                    </StyledConflictDetail>
                  )}
                </StyledConflictItem>
              );
            })}
          </StyledConflictList>
        </StyledConflictTooltip>
        );
      })()}

      {/* Nearby events tooltip (same day, no conflicts) */}
      {dropTarget && isValidDrop && !dropTarget.hasConflict && dropTarget.nearbyEvents && dropTarget.nearbyEvents.length > 0 && dragState === "dragging" && (() => {
        const tooltipPos = calculateTooltipPosition(400, 400);
        
        return (
        <StyledConflictTooltip
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            borderColor: "#4CAF50"
          }}>
          <StyledConflictHeader style={{ color: "#2E7D32" }}>
            <StyledConflictIcon style={{ backgroundColor: "#4CAF50" }}>✓</StyledConflictIcon>
            {dropTarget.nearbyEvents.length} {dropTarget.nearbyEvents.length > 1 ? lang.conflicts.nearbyEvents : lang.conflicts.nearbyEvent}
          </StyledConflictHeader>
          <StyledConflictList>
            {/* Show dragged event info first */}
            {(() => {
              // Determine if any nearby events are before or after
              const hasEventsBefore = dropTarget.nearbyEvents.some(e => e.position === "before");
              const hasEventsAfter = dropTarget.nearbyEvents.some(e => e.position === "after");
              
              const dragStartTime = dayjs(dropTarget.startDate).format("h:mm A");
              const dragEndTime = dayjs(dropTarget.endDate).format("h:mm A");
              
              return (
                <StyledConflictItem style={{ backgroundColor: "#F1F8E9", borderLeftColor: "#8BC34A" }}>
                  <StyledConflictEventTitle style={{ color: "#33691E" }}>
                    {lang.conflicts.yourEvent}: {draggedEvent.title}
                    {draggedEvent.subtitle && ` - ${draggedEvent.subtitle}`}
                  </StyledConflictEventTitle>
                  <StyledConflictDetail style={{ fontWeight: 600 }}>
                    {dayjs(dropTarget.startDate).format("MMM D")}:{" "}
                    {hasEventsBefore ? (
                      <span style={{ color: "#2E7D32", fontWeight: 700 }}>{dragStartTime}</span>
                    ) : (
                      dragStartTime
                    )}{" "}
                    {lang.conflicts.to}{" "}
                    {hasEventsAfter ? (
                      <span style={{ color: "#2E7D32", fontWeight: 700 }}>{dragEndTime}</span>
                    ) : (
                      dragEndTime
                    )}
                  </StyledConflictDetail>
                  <StyledConflictDetail style={{ 
                    backgroundColor: "#DCEDC8", 
                    marginTop: "4px",
                    fontSize: "10px",
                    color: "#558B2F"
                  }}>
                    {lang.conflicts.sameDay}
                  </StyledConflictDetail>
                </StyledConflictItem>
              );
            })()}
            
            {/* Show nearby events */}
            {dropTarget.nearbyEvents.map((nearby: NearbyEventDetails, index: number) => {
              // Check if event spans multiple days
              const eventStartDay = dayjs(nearby.event.startDate).format("YYYY-MM-DD");
              const eventEndDay = dayjs(nearby.event.endDate).format("YYYY-MM-DD");
              const spansMultipleDays = eventStartDay !== eventEndDay;
              
              // Format times with dates
              const eventStart = spansMultipleDays
                ? dayjs(nearby.event.startDate).format("MMM D, h:mm A")
                : dayjs(nearby.event.startDate).format("h:mm A");
              const eventEnd = spansMultipleDays
                ? dayjs(nearby.event.endDate).format("MMM D, h:mm A")
                : dayjs(nearby.event.endDate).format("h:mm A");
              const eventDate = dayjs(nearby.event.startDate).format("MMM D");
              
              // Calculate gap in hours and minutes
              const gapHours = Math.floor(nearby.timeGap / (1000 * 60 * 60));
              const gapMinutes = Math.floor((nearby.timeGap % (1000 * 60 * 60)) / (1000 * 60));
              const gapText = gapHours > 0 
                ? `${gapHours}h ${gapMinutes}m`
                : `${gapMinutes}m`;

              // Determine which times are "nearby" (highlight the closest times)
              // If event is BEFORE dragged event: highlight nearby event's END (close to dragged START)
              // If event is AFTER dragged event: highlight nearby event's START (close to dragged END)
              const highlightNearbyStart = nearby.position === "after";
              const highlightNearbyEnd = nearby.position === "before";

              return (
                <StyledConflictItem key={index} style={{ backgroundColor: "#E8F5E9", borderLeftColor: "#4CAF50" }}>
                  <StyledConflictEventTitle style={{ color: "#1B5E20" }}>
                    {nearby.event.title}
                    {nearby.event.subtitle && ` - ${nearby.event.subtitle}`}
                  </StyledConflictEventTitle>
                  <StyledConflictDetail>
                    {!spansMultipleDays && `${eventDate}: `}
                    {highlightNearbyStart ? (
                      <span style={{ color: "#2E7D32", fontWeight: 700 }}>{eventStart}</span>
                    ) : (
                      eventStart
                    )}{" "}
                    {lang.conflicts.to}{" "}
                    {highlightNearbyEnd ? (
                      <span style={{ color: "#2E7D32", fontWeight: 700 }}>{eventEnd}</span>
                    ) : (
                      eventEnd
                    )}
                  </StyledConflictDetail>
                  <StyledConflictDuration style={{ backgroundColor: "#C8E6C9", borderColor: "#4CAF50", color: "#1B5E20" }}>
                    {gapText} {nearby.position === "before" ? lang.conflicts.before : lang.conflicts.after}
                  </StyledConflictDuration>
                </StyledConflictItem>
              );
            })}
          </StyledConflictList>
        </StyledConflictTooltip>
        );
      })()}

      {/* Ghost element */}
      <StyledGhostElement
        $isAnimating={isAnimating}
        $animateToX={animateToPosition?.x}
        $animateToY={animateToPosition?.y}
        style={{
          left: isAnimating ? `${animateToPosition?.x ?? 0}px` : "0",
          top: isAnimating ? `${animateToPosition?.y ?? 0}px` : "0",
          transform: isAnimating
            ? undefined
            : `translate3d(${resourceOnly ? initialXPosition : ghostPosition.x}px, ${ghostPosition.y}px, 0)`,
          backgroundColor: draggedEvent.bgColor ?? "rgb(114, 141, 226)",
          width: `${ghostDimensions.width}px`,
          color: textColor
        }}>
        <StyledGhostTextWrapper>
          <StyledGhostStickyWrapper>
            <StyledGhostText $bold>{draggedEvent.title}</StyledGhostText>
            {draggedEvent.subtitle && (
              <StyledGhostText>{draggedEvent.subtitle}</StyledGhostText>
            )}
            {draggedEvent.description && (
              <StyledGhostDescription>{draggedEvent.description}</StyledGhostDescription>
            )}
          </StyledGhostStickyWrapper>
        </StyledGhostTextWrapper>
      </StyledGhostElement>
    </StyledOverlayWrapper>
  );
};

export default DragOverlay;

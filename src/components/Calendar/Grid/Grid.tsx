import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { drawGrid } from "@/utils/drawGrid/drawGrid";
import { boxHeight, canvasWrapperId, leftColumnWidth, outsideWrapperId, subcontractSeparatorHeight } from "@/constants";
import {
  Loader,
  Tiles,
  DragOverlay,
  SelectionOverlay,
  MultiSelectToolbar,
  PendingSelections,
  TodayColumn
} from "@/components";
import { useCalendar } from "@/context/CalendarProvider";
import { resizeCanvas } from "@/utils/resizeCanvas";
import { getCanvasWidth } from "@/utils/getCanvasWidth";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { useClickToAdd } from "@/hooks/useClickToAdd";
import { GridProps } from "./types";
import { StyledCanvas, StyledInnerWrapper, StyledSpan, StyledWrapper } from "./styles";

const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { zoom, rows, data, baseData, onTileClick, onEventDrop, onEventDrag, draggableConfig, onDragStateChange, onTimeRangeSelect, onMultiTimeRangeSelect, clickToAddConfig, separatorRowIndices = [] },
  ref
) {
  const isThrottled = useRef(false);
  const { handleScrollNext, handleScrollPrev, date, isLoading, cols, startDate } = useCalendar();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const refRight = useRef<HTMLSpanElement>(null);
  const refLeft = useRef<HTMLSpanElement>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);
  const [isDraggingState, setIsDraggingState] = useState(false);

  const theme = useTheme();

  // Initialize drag-and-drop hook
  const {
    dragState,
    draggedEvent,
    ghostPosition,
    ghostDimensions,
    dropTarget,
    isValidDrop,
    handleDragStart,
    isDraggable,
    draggingEventId,
    resourceOnly
  } = useDragAndDrop({
    data,
    baseData: baseData || data,
    zoom: zoom as 0 | 1 | 2,
    startDate,
    onEventDrop,
    onEventDrag,
    draggableConfig,
    gridRef: gridWrapperRef,
    separatorRowIndices
  });

  // Notify parent when drag state changes
  useEffect(() => {
    const isDragging = dragState === "dragging" || dragState === "potential";
    setIsDraggingState(isDragging);
    if (onDragStateChange) {
      onDragStateChange(isDragging);
    }
  }, [dragState, onDragStateChange]);

  // Initialize click-to-add hook
  const {
    selectionState,
    selectionBox,
    handleGridMouseDown,
    pendingSelections,
    confirmSelections,
    clearSelections,
    removeSelection,
    updateSelection,
    isMultiSelectActive,
    hasUnconfirmedSelections
  } = useClickToAdd({
    data,
    baseData: baseData || data,
    zoom: zoom as 0 | 1 | 2,
    startDate,
    onTimeRangeSelect,
    onMultiTimeRangeSelect,
    clickToAddConfig,
    gridRef: gridWrapperRef,
    isDragging: isDraggingState,
    separatorRowIndices
  });

  // Prevent default drag behavior on canvas
  const handleCanvasDragStart = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleCanvasDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const totalSeparatorOffset = separatorRowIndices.length * subcontractSeparatorHeight;

  const handleResize = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const width = getCanvasWidth();
      const height = rows * boxHeight + 1 + totalSeparatorOffset;
      resizeCanvas(ctx, width, height);
      drawGrid(ctx, zoom, rows, cols, startDate, theme, separatorRowIndices);
    },
    [cols, startDate, rows, zoom, theme, separatorRowIndices, totalSeparatorOffset]
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const onResize = () => handleResize(ctx);

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [handleResize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.style.letterSpacing = "1px";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    handleResize(ctx);
  }, [date, rows, zoom, handleResize]);


  useEffect(() => {
    if (!refRight.current) return;
    const observerRight = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting && !isThrottled.current) {
          isThrottled.current = true;
          handleScrollNext();
          setTimeout(() => {
            isThrottled.current = false;
          }, 1000);
        }
      },
      { root: document.getElementById(outsideWrapperId) }
    );

    observerRight.observe(refRight.current);

    return () => {
      observerRight.disconnect();
    };
  }, [handleScrollNext]);

  useEffect(() => {
    if (!refLeft.current) return;

    const observerLeft = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting && !isThrottled.current) {
          isThrottled.current = true; 
          handleScrollPrev();

          setTimeout(() => {
            isThrottled.current = false;
          }, 1000); 
        }
      },
      {
        root: document.getElementById(outsideWrapperId),
        rootMargin: `0px 0px 0px -${leftColumnWidth}px`
      }
    );

    observerLeft.observe(refLeft.current);

    return () => {
      observerLeft.disconnect();
    };
  }, [handleScrollPrev]);

  return (
    <StyledWrapper id={canvasWrapperId}>
      <StyledInnerWrapper 
        ref={(node) => {
          // Set both refs
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - We need to set this ref for drag-and-drop
          gridWrapperRef.current = node;
        }}
        onMouseDown={handleGridMouseDown}
        style={{ cursor: onTimeRangeSelect ? "crosshair" : "default" }}
      >
        <StyledSpan position="left" ref={refLeft} />
        <Loader isLoading={isLoading} position="left" />
        <StyledCanvas
          ref={canvasRef}
          onDragStart={handleCanvasDragStart}
          onDragOver={handleCanvasDragOver}
          style={{ userSelect: dragState === "dragging" ? "none" : "auto" }}
        />
        <TodayColumn zoom={zoom as 0 | 1 | 2} startDate={startDate} />
        <Tiles
          data={data} 
          zoom={zoom} 
          onTileClick={onTileClick}
          onDragStart={handleDragStart}
          isDraggable={isDraggable}
          draggingEventId={draggingEventId}
          separatorRowIndices={separatorRowIndices}
        />
        <StyledSpan ref={refRight} position="right" />
        <Loader isLoading={isLoading} position="right" />
        {(dragState === "dragging" || dragState === "animating") && (
          <DragOverlay
            draggedEvent={draggedEvent}
            ghostPosition={ghostPosition}
            ghostDimensions={ghostDimensions}
            dropTarget={dropTarget}
            isValidDrop={isValidDrop}
            dragState={dragState}
            zoom={zoom as 0 | 1 | 2}
            data={data}
            resourceOnly={resourceOnly}
            separatorRowIndices={separatorRowIndices}
          />
        )}
        <SelectionOverlay
          selectionBox={selectionBox}
          isSelecting={selectionState === "selecting"}
        />
        {isMultiSelectActive && pendingSelections.length > 0 && (
          <PendingSelections
            selections={pendingSelections}
            data={data}
            zoom={zoom as 0 | 1 | 2}
            startDate={startDate}
            onRemove={removeSelection}
            onUpdate={updateSelection}
            separatorRowIndices={separatorRowIndices}
          />
        )}
      </StyledInnerWrapper>
      {isMultiSelectActive && hasUnconfirmedSelections && pendingSelections.length > 0 && (
        <MultiSelectToolbar
          selections={pendingSelections}
          onConfirm={confirmSelections}
          onClear={clearSelections}
          onRemove={removeSelection}
        />
      )}
    </StyledWrapper>
  );
});

export default Grid;

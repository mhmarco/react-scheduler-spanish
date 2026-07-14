# Implementation Plan

- [x] 1. Create core drag-and-drop hook with state management
  - Implement `useDragAndDrop` hook in `src/hooks/useDragAndDrop.ts` with state machine (idle → potential → dragging → animating → idle)
  - Add drag state tracking, event references, and position calculations
  - Implement click vs drag detection using 5-pixel movement threshold
  - _Requirements: 1.1, 7.3, 7.4_

- [x] 1.1 Implement drag initiation and mouse event handlers
  - Create `handleDragStart` function to capture initial mouse position and event data
  - Add draggability check logic (per-event and global configuration)
  - Set up state for potential drag operation
  - _Requirements: 1.1, 6.1, 6.2, 6.3_

- [x] 1.2 Implement drag movement tracking with RAF optimization
  - Create `handleDragMove` function with requestAnimationFrame for smooth updates
  - Implement coordinate conversion from client to grid coordinates
  - Update ghost position state on mousemove
  - Add document-level event listeners for tracking outside grid
  - _Requirements: 1.3, 5.1, 5.2_

- [x] 1.3 Implement grid snapping calculations
  - Create `calculateSnapPosition` utility function for all zoom levels (0, 1, 2)
  - Calculate cell width based on zoom level (singleDayWidth, dayWidth, zoom2ColumnWidth)
  - Convert mouse position to grid cell index
  - Map cell index to date/time based on zoom level
  - _Requirements: 4.1, 4.2, 4.4_

- [x] 1.4 Implement drop target calculation
  - Create `calculateDropTarget` utility function
  - Preserve event duration when calculating new end date
  - Map resource index to resource ID from paginated data
  - Calculate both time and resource changes
  - _Requirements: 2.1, 2.4, 3.1_

- [x] 1.5 Implement drag end and drop handling
  - Create `handleDragEnd` function to finalize drag operation
  - Invoke `onEventDrop` callback with original and new positions
  - Handle async validation from consumer (Promise or boolean return)
  - Implement animation back to original position on rejection
  - Transition to idle state after successful drop or animation
  - _Requirements: 1.5, 3.2, 3.3, 3.4_

- [x] 1.6 Add drag progress callback with throttling
  - Implement throttled `onEventDrag` callback (100ms interval)
  - Include current position data in callback
  - Fire during drag movement for real-time feedback
  - _Requirements: 8.1, 8.2, 8.3_

- [x] 2. Create DragOverlay component for visual feedback
  - Create `src/components/DragOverlay/DragOverlay.tsx` component
  - Create `src/components/DragOverlay/types.ts` for prop types
  - Create `src/components/DragOverlay/styles.ts` for styled components
  - Create `src/components/DragOverlay/index.ts` for exports
  - _Requirements: 1.2, 4.1_

- [x] 2.1 Implement ghost element rendering
  - Render semi-transparent copy of dragged event at cursor position
  - Apply 50% opacity and pointer-events: none styling
  - Use transform: translate3d() for GPU-accelerated positioning
  - Add box shadow and scale effect for visual lift
  - Display event title, subtitle, and description in ghost
  - _Requirements: 1.2, 1.3, 5.1_

- [x] 2.2 Implement drop target indicators
  - Render visual indicator at calculated drop position
  - Show snapped grid cell with dashed border
  - Apply valid drop styling (green) or invalid styling (red) based on validation
  - Display calculated start and end times during drag
  - _Requirements: 4.1, 4.3, 4.5_

- [x] 2.3 Implement resource row highlighting
  - Highlight target resource row during vertical drag
  - Apply subtle background color to indicate drop target
  - Update highlight as cursor moves between rows
  - _Requirements: 2.2_

- [x] 2.4 Add return animation for rejected drops
  - Implement CSS transition for ghost element returning to original position
  - Use cubic-bezier easing for smooth animation (300ms duration)
  - Remove ghost element after animation completes
  - _Requirements: 3.3_

- [x] 3. Modify Tile component to support drag initiation
  - Update `src/components/Tiles/Tile/Tile.tsx` to add drag handlers
  - Update `src/components/Tiles/Tile/types.ts` to add new props
  - Update `src/components/Tiles/Tile/styles.ts` for cursor styling
  - _Requirements: 1.1, 5.5, 6.4_

- [x] 3.1 Add mousedown handler to Tile
  - Add `onMouseDown` event handler to tile wrapper
  - Call `onDragStart` prop with event data and mouse event
  - Prevent default browser drag behavior
  - _Requirements: 1.1_

- [x] 3.2 Add draggable styling and cursor
  - Add cursor: grab styling for draggable tiles
  - Add cursor: not-allowed for non-draggable tiles
  - Apply cursor: grabbing during active drag
  - Conditionally render based on `isDraggable` prop
  - _Requirements: 5.5, 6.4_

- [x] 3.3 Add visual state for dragging tile
  - Accept `isDragging` prop to indicate when tile is being dragged
  - Reduce opacity of original tile during drag (30%)
  - Restore full opacity when drag ends
  - _Requirements: 1.2_

- [x] 4. Integrate drag-and-drop into Grid component
  - Update `src/components/Calendar/Grid/Grid.tsx` to use drag hook
  - Update `src/components/Calendar/Grid/types.ts` to add drag-related props
  - Add DragOverlay component to Grid render
  - _Requirements: 1.1, 1.3, 1.5_

- [x] 4.1 Initialize useDragAndDrop hook in Grid
  - Import and call `useDragAndDrop` hook with required parameters
  - Pass paginated data, zoom level, and start date
  - Pass through `onEventDrop` and `onEventDrag` callbacks from props
  - Extract drag state and handlers from hook return
  - _Requirements: 1.1, 3.1_

- [x] 4.2 Pass drag handlers to Tiles component
  - Update Tiles component props to accept drag handlers
  - Pass `handleDragStart` to Tiles
  - Pass `isDraggable` function to Tiles
  - Pass current drag state to identify dragging tile
  - _Requirements: 1.1, 6.1_

- [x] 4.3 Add DragOverlay to Grid render
  - Conditionally render DragOverlay when drag state is 'dragging' or 'animating'
  - Pass dragged event, ghost position, and drop target to overlay
  - Pass validation state for visual feedback
  - Position overlay absolutely within Grid wrapper
  - _Requirements: 1.2, 4.1_

- [x] 4.4 Prevent default drag behavior on canvas
  - Add `onDragStart` handler to canvas element to prevent default
  - Add `onDragOver` handler to prevent default
  - Ensure text selection is disabled during drag
  - _Requirements: 5.4_

- [x] 5. Update Tiles component to propagate drag props
  - Update `src/components/Tiles/Tiles.tsx` to pass drag handlers to Tile
  - Update `src/components/Tiles/types.ts` to include drag-related props
  - _Requirements: 1.1, 6.1_

- [x] 5.1 Accept and pass drag handlers
  - Add `onDragStart` prop to TilesProps
  - Add `isDraggable` function prop to TilesProps
  - Add `draggingEventId` prop to identify currently dragging tile
  - Pass these props to each Tile component
  - _Requirements: 1.1, 6.1_

- [x] 5.2 Determine dragging state for each tile
  - Compare tile's segmentId with draggingEventId
  - Pass `isDragging` boolean to Tile component
  - Check draggability using `isDraggable` function
  - Pass `isDraggable` boolean to Tile component
  - _Requirements: 1.2, 6.1_

- [x] 6. Add drag-and-drop props to Scheduler component
  - Update `src/components/Scheduler/types.ts` to add new props
  - Update `src/components/Scheduler/Scheduler.tsx` to pass props through
  - _Requirements: 3.1, 6.2, 8.1_

- [x] 6.1 Define new TypeScript types
  - Add `EventDropData` type with original and new positions
  - Add `EventDragData` type for drag progress updates
  - Add `DraggableConfig` type for configuration options
  - Add optional props to SchedulerProps: `onEventDrop`, `onEventDrag`, `draggableConfig`
  - _Requirements: 3.1, 6.2, 8.1_

- [x] 6.2 Pass drag props through component hierarchy
  - Extract drag-related props in Scheduler component
  - Pass to CalendarProvider context or directly to Calendar
  - Ensure props flow through to Grid component
  - Apply default values for optional configuration
  - _Requirements: 3.1, 6.2_

- [x] 7. Add draggable field to SchedulerProjectData type
  - Update `src/types/global.ts` to add optional `draggable` boolean field
  - Document the field in JSDoc comments
  - _Requirements: 6.1_

- [x] 8. Implement edge case handling and cleanup
  - Add proper cleanup for event listeners and RAF
  - Handle zoom changes during drag
  - Handle data updates during drag
  - _Requirements: 5.4_

- [x] 8.1 Add cleanup for document event listeners
  - Remove mousemove and mouseup listeners on component unmount
  - Remove listeners when drag ends
  - Cancel pending requestAnimationFrame on unmount
  - _Requirements: 5.4_

- [x] 8.2 Handle zoom changes during drag
  - Listen for zoom changes in useDragAndDrop hook
  - Cancel active drag operation if zoom changes
  - Return event to original position
  - _Requirements: 5.4_

- [x] 8.3 Handle data updates during drag
  - Detect when data prop changes during active drag
  - Cancel drag operation if dragged event no longer exists
  - Reset drag state to idle
  - _Requirements: 5.4_

- [x] 9. Update component exports
  - Add DragOverlay to `src/components/index.tsx` exports
  - Ensure all new types are exported from appropriate index files
  - _Requirements: All_

- [x] 10. Create utility functions module
  - Create `src/utils/dragAndDrop.ts` for shared drag utilities
  - Implement `detectDragIntent` function
  - Implement `clientToGridCoords` function
  - Export utility functions for use in hook
  - _Requirements: 7.3, 7.4_

- [x] 11. Add comprehensive unit tests for drag hook
  - Create test file `src/hooks/useDragAndDrop.test.ts`
  - Test state transitions (idle → potential → dragging → animating → idle)
  - Test click detection (movement < 5 pixels)
  - Test drag detection (movement > 5 pixels)
  - Test grid snapping for all zoom levels
  - Test drop target calculation with duration preservation
  - Test draggability checks (per-event and global)
  - _Requirements: 1.1, 7.3, 7.4, 6.1_

- [ ] 12. Add integration tests for full drag flow
  - Create test file `src/components/Calendar/Grid/Grid.drag.test.tsx`
  - Test successful drag and drop with consumer acceptance
  - Test rejected drop with animation back to original position
  - Test click preservation (no drag on small movements)
  - Test multi-resource drag (changing resource rows)
  - Test dragging with different zoom levels
  - _Requirements: 1.5, 2.4, 3.3, 7.1, 7.2_

- [x] 13. Implement capacity-based validation
  - Add `capacity` field to `SchedulerRow` and `PaginatedSchedulerRow` types
  - Add `totalPassengers` field to `SchedulerProjectData` type
  - Update `DropTarget` type to include `resourceCapacity` and `hasCapacity` fields
  - _Requirements: 9.1, 9.5_

- [x] 13.1 Update drop target calculation with capacity validation
  - Modify `calculateDropTarget` to extract resource capacity from data
  - Add capacity validation logic comparing `totalPassengers` with `capacity`
  - Set `hasCapacity` flag in drop target based on validation result
  - _Requirements: 9.1, 9.6_

- [x] 13.2 Update drag movement to validate capacity
  - Modify `handleDragMove` to set `isValidDrop` based on `hasCapacity` flag
  - Ensure visual feedback updates in real-time during drag
  - _Requirements: 9.2, 9.3_

- [x] 13.3 Prevent drops on insufficient capacity resources
  - Modify `handleDragEnd` to check `hasCapacity` before processing drop
  - Reject drop and animate back if capacity is insufficient
  - _Requirements: 9.4_

- [x] 13.4 Add visual indicators for capacity validation
  - Update `DragOverlay` component to accept `data` prop
  - Calculate invalid resource rows based on capacity comparison
  - Render gray overlay on resource rows with insufficient capacity
  - Update resource highlight color based on `isValidDrop` (green/red)
  - Add `StyledInvalidResourceOverlay` styled component
  - _Requirements: 9.2, 9.3_

- [x] 13.5 Update documentation for capacity validation
  - Update design document with capacity validation section
  - Update requirements document with Requirement 9
  - Update tasks document with capacity implementation tasks
  - Add usage examples for capacity-based validation
  - _Requirements: 9.1-9.6_

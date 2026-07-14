# Design Document: Drag-and-Drop Events

## Overview

This design implements drag-and-drop functionality for the React Scheduler component, allowing users to reposition events by dragging them to new time slots and/or resource rows. The implementation preserves existing click functionality through movement threshold detection and provides a callback-based API for consumer applications to validate and handle drop operations.

The design leverages the existing canvas-based rendering architecture while adding an HTML overlay for the draggable ghost element to ensure smooth interactions without interfering with the high-performance canvas grid rendering.

## Architecture

### High-Level Approach

The drag-and-drop system consists of three main layers:

1. **Interaction Layer**: Captures mouse events on tiles and determines whether the user is clicking or dragging
2. **Visual Feedback Layer**: Renders a ghost element and visual indicators during drag operations
3. **Callback Layer**: Provides hooks for consumer applications to validate and process drop operations

### Component Hierarchy

```
Scheduler (unchanged)
  └── Calendar (unchanged)
      └── Grid (modified)
          ├── Canvas (unchanged - grid rendering)
          ├── Tiles (modified - drag initiation)
          │   └── Tile (modified - mouse event handlers)
          └── DragOverlay (new - ghost element and drop indicators)
```

### State Management

Drag state will be managed at the Grid component level using a custom hook `useDragAndDrop`:

- **dragState**: Tracks current drag operation (idle, dragging, animating)
- **draggedEvent**: Reference to the event being dragged
- **ghostPosition**: Current position of the ghost element
- **dropTarget**: Calculated drop position (time + resource)
- **dragStartPosition**: Initial mouse position for click/drag detection

## Components and Interfaces

### 1. Modified Tile Component

**File**: `src/components/Tiles/Tile/Tile.tsx`

**Changes**:
- Add `onMouseDown` handler to initiate potential drag
- Add `draggable` prop support from event data
- Add cursor style based on draggability
- Pass drag-related props to styled component

**New Props**:
```typescript
type TileProps = {
  // ... existing props
  onDragStart?: (event: SchedulerProjectData, mouseEvent: React.MouseEvent) => void;
  isDragging?: boolean;
  isDraggable?: boolean;
}
```

### 2. New DragOverlay Component

**File**: `src/components/DragOverlay/DragOverlay.tsx`

**Purpose**: Renders the ghost element and visual feedback during drag operations

**Props**:
```typescript
type DragOverlayProps = {
  draggedEvent: SchedulerProjectData | null;
  ghostPosition: { x: number; y: number };
  ghostDimensions: { width: number; height: number };
  dropTarget: DropTarget | null;
  isValidDrop: boolean;
  zoom: ZoomLevel;
}

type DropTarget = {
  startDate: Date;
  endDate: Date;
  resourceId: string;
  resourceIndex: number;
}
```

**Rendering**:
- Absolutely positioned overlay that doesn't interfere with canvas
- Ghost element styled with 50% opacity and pointer-events: none
- Drop indicators showing target time slot with visual feedback
- Snapping guides aligned to grid boundaries

### 3. Custom Hook: useDragAndDrop

**File**: `src/hooks/useDragAndDrop.ts`

**Purpose**: Encapsulates all drag-and-drop logic and state management

**Interface**:
```typescript
type UseDragAndDropParams = {
  data: PaginatedSchedulerData;
  zoom: ZoomLevel;
  startDate: Day;
  onEventDrop?: (dropData: EventDropData) => Promise<boolean> | boolean;
  onEventDrag?: (dragData: EventDragData) => void;
  isDraggingEnabled?: boolean;
}

type UseDragAndDropReturn = {
  dragState: DragState;
  draggedEvent: SchedulerProjectData | null;
  ghostPosition: { x: number; y: number };
  ghostDimensions: { width: number; height: number };
  dropTarget: DropTarget | null;
  isValidDrop: boolean;
  handleDragStart: (event: SchedulerProjectData, mouseEvent: React.MouseEvent) => void;
  handleDragMove: (mouseEvent: React.MouseEvent) => void;
  handleDragEnd: (mouseEvent: React.MouseEvent) => void;
  isDraggable: (event: SchedulerProjectData) => boolean;
}

type DragState = 'idle' | 'potential' | 'dragging' | 'animating';

type EventDropData = {
  event: SchedulerProjectData;
  originalStartDate: Date;
  originalEndDate: Date;
  originalResourceId: string;
  newStartDate: Date;
  newEndDate: Date;
  newResourceId: string;
}

type EventDragData = {
  event: SchedulerProjectData;
  currentStartDate: Date;
  currentEndDate: Date;
  currentResourceId: string;
}
```

**State Machine**:
```
idle → potential (mousedown)
potential → dragging (mousemove > threshold)
potential → idle (mouseup < threshold = click)
dragging → animating (mouseup)
animating → idle (animation complete)
```

### 4. Modified Grid Component

**File**: `src/components/Calendar/Grid/Grid.tsx`

**Changes**:
- Integrate `useDragAndDrop` hook
- Add `DragOverlay` component
- Pass drag handlers to Tiles component
- Add mouse event listeners for drag operations
- Prevent default drag behavior on canvas

### 5. New Scheduler Props

**File**: `src/components/Scheduler/types.ts`

**New Props**:
```typescript
type SchedulerProps = {
  // ... existing props
  onEventDrop?: (dropData: EventDropData) => Promise<boolean> | boolean;
  onEventDrag?: (dragData: EventDragData) => void;
  draggableConfig?: DraggableConfig;
}

type DraggableConfig = {
  enabled?: boolean;
  isDraggable?: (event: SchedulerProjectData) => boolean;
  resourceOnly?: boolean; // If true, only allow resource changes, not date changes
  snapToGrid?: boolean;
  animationDuration?: number;
}
```

## Data Models

### Extended SchedulerProjectData

Add optional draggability flag and capacity information to event data:

```typescript
type SchedulerProjectData = {
  // ... existing fields
  draggable?: boolean; // Optional: if false, event cannot be dragged
  totalPassengers?: number; // Optional: total passengers/occupants for capacity validation
}
```

### Extended SchedulerRow

Add optional capacity information to resource rows:

```typescript
type SchedulerRow = {
  // ... existing fields
  capacity?: number; // Optional: maximum capacity for this resource (e.g., vehicle capacity)
}

type PaginatedSchedulerRow = {
  // ... existing fields
  capacity?: number; // Optional: maximum capacity for this resource
}
```

### Drag Calculation Models

```typescript
type MousePosition = {
  x: number;
  y: number;
  clientX: number;
  clientY: number;
}

type DragOffset = {
  x: number;
  y: number;
}

type GridSnap = {
  snappedDate: Date;
  snappedResourceIndex: number;
}

type DropTarget = {
  startDate: Date;
  endDate: Date;
  resourceId: string;
  resourceIndex: number;
  resourceCapacity?: number; // Capacity of the target resource
  hasCapacity?: boolean; // Whether the target has sufficient capacity
}
```

## Error Handling

### Invalid Drop Scenarios

1. **Consumer Rejection**: If `onEventDrop` returns `false` or rejects
   - Animate ghost back to original position
   - Restore original event rendering
   - No state change

2. **Insufficient Capacity**: Dropping an event on a resource with insufficient capacity
   - Gray out resource rows that cannot accommodate the event
   - Show red highlight on invalid drop target
   - Prevent drop and animate back to original position
   - Validation based on `event.totalPassengers` vs `resource.capacity`

3. **Out of Bounds**: Dragging outside the visible grid area
   - Clamp ghost position to grid boundaries
   - Show visual indicator that drop is invalid
   - Return to original position on drop

4. **Non-Draggable Event**: Attempting to drag a locked event
   - Prevent drag initiation
   - Show standard cursor instead of grab cursor

### Edge Cases

1. **Rapid Clicks**: Multiple mousedown events in quick succession
   - Debounce drag initiation
   - Only allow one active drag at a time

2. **Mouse Leave**: Cursor leaves the grid during drag
   - Continue tracking via document-level listeners
   - Complete drag on mouseup anywhere

3. **Zoom Change During Drag**: User changes zoom while dragging
   - Cancel active drag operation
   - Return event to original position

4. **Data Update During Drag**: External data update while dragging
   - Cancel active drag operation
   - Re-render with new data

## Algorithms

### 1. Click vs Drag Detection

```typescript
const DRAG_THRESHOLD = 5; // pixels

function detectDragIntent(startPos: MousePosition, currentPos: MousePosition): boolean {
  const deltaX = Math.abs(currentPos.x - startPos.x);
  const deltaY = Math.abs(currentPos.y - startPos.y);
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  return distance > DRAG_THRESHOLD;
}
```

### 2. Grid Snapping Calculation

```typescript
function calculateSnapPosition(
  mouseX: number,
  mouseY: number,
  zoom: ZoomLevel,
  startDate: Day,
  data: PaginatedSchedulerData
): GridSnap {
  // Calculate resource row based on Y position
  const resourceIndex = Math.floor(mouseY / boxHeight);
  
  // Calculate date based on X position and zoom level
  let cellWidth: number;
  switch (zoom) {
    case 0: cellWidth = singleDayWidth; break;
    case 1: cellWidth = dayWidth; break;
    case 2: cellWidth = zoom2ColumnWidth; break;
  }
  
  const cellIndex = Math.floor(mouseX / cellWidth);
  
  // Convert cell index to date based on zoom
  let snappedDate: Date;
  switch (zoom) {
    case 0: // Weekly view - snap to weeks
      snappedDate = dayjs(startDate).add(cellIndex * 7, 'days').toDate();
      break;
    case 1: // Daily view - snap to days
      snappedDate = dayjs(startDate).add(cellIndex, 'days').toDate();
      break;
    case 2: // Hourly view - snap to hours
      snappedDate = dayjs(startDate).add(cellIndex, 'hours').toDate();
      break;
  }
  
  return { snappedDate, snappedResourceIndex: resourceIndex };
}
```

### 3. Drop Target Calculation with Capacity Validation

```typescript
function calculateDropTarget(
  draggedEvent: SchedulerProjectData,
  snapPosition: GridSnap,
  data: PaginatedSchedulerData
): DropTarget {
  const duration = dayjs(draggedEvent.endDate).diff(draggedEvent.startDate);
  const newStartDate = snapPosition.snappedDate;
  const newEndDate = dayjs(newStartDate).add(duration, 'milliseconds').toDate();
  
  // Find resource ID and capacity from resource index
  let currentRow = 0;
  let resourceId = '';
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
  
  // Check capacity validation
  let hasCapacity = true;
  if (resourceCapacity !== undefined && draggedEvent.totalPassengers !== undefined) {
    hasCapacity = draggedEvent.totalPassengers <= resourceCapacity;
  }
  
  return {
    startDate: newStartDate,
    endDate: newEndDate,
    resourceId,
    resourceIndex: snapPosition.snappedResourceIndex,
    resourceCapacity,
    hasCapacity
  };
}
```

### 4. Ghost Position Update (with RAF)

```typescript
function updateGhostPosition(
  mouseX: number,
  mouseY: number,
  dragOffset: DragOffset,
  rafRef: React.MutableRefObject<number | null>
) {
  if (rafRef.current) {
    cancelAnimationFrame(rafRef.current);
  }
  
  rafRef.current = requestAnimationFrame(() => {
    setGhostPosition({
      x: mouseX - dragOffset.x,
      y: mouseY - dragOffset.y
    });
  });
}
```

## Testing Strategy

### Unit Tests

1. **useDragAndDrop Hook**
   - State transitions (idle → potential → dragging → animating → idle)
   - Click detection (movement < threshold)
   - Drag detection (movement > threshold)
   - Grid snapping calculations
   - Drop target calculations
   - Draggability checks

2. **Utility Functions**
   - `detectDragIntent`: Various mouse movement scenarios
   - `calculateSnapPosition`: All zoom levels and edge cases
   - `calculateDropTarget`: Duration preservation, resource mapping

3. **DragOverlay Component**
   - Ghost element positioning
   - Visual feedback rendering
   - Valid/invalid drop styling

### Integration Tests

1. **Full Drag Flow**
   - User drags event to new time slot
   - Consumer accepts drop
   - Event updates to new position

2. **Rejected Drop**
   - User drags event
   - Consumer rejects drop
   - Event returns to original position with animation

3. **Click Preservation**
   - User clicks event without dragging
   - `onTileClick` callback fires
   - No drag operation initiated

4. **Multi-Resource Drag**
   - User drags event to different resource row
   - Drop target includes new resource ID
   - Event moves to new row

### Performance Tests

1. **Large Dataset**
   - 100+ events on screen
   - Drag performance remains smooth (60fps)
   - No jank during ghost updates

2. **Rapid Interactions**
   - Quick successive drags
   - No memory leaks
   - Proper cleanup of event listeners

## Performance Considerations

### Optimizations

1. **RequestAnimationFrame**: All ghost position updates use RAF to sync with browser repaint
2. **Throttling**: `onEventDrag` callback throttled to 100ms to prevent excessive consumer updates
3. **Event Delegation**: Use single mousemove listener on Grid instead of per-tile listeners
4. **Memoization**: Memoize drag calculations to avoid redundant computations
5. **CSS Transforms**: Use `transform: translate3d()` for ghost positioning (GPU acceleration)

### Memory Management

1. **Cleanup**: Remove document-level event listeners on unmount or drag end
2. **RAF Cancellation**: Cancel pending animation frames when component unmounts
3. **Debounce Cleanup**: Clear debounced functions on unmount

## Capacity-Based Validation

### Overview

The drag-and-drop system includes built-in capacity validation to prevent events from being dropped on resources that cannot accommodate them. This is particularly useful for use cases like:

- Vehicle scheduling (passengers vs vehicle capacity)
- Room booking (attendees vs room capacity)
- Equipment allocation (load vs equipment capacity)

### Implementation

1. **Data Model**: Resources define a `capacity` property, and events define a `totalPassengers` property
2. **Validation Logic**: During drag, the system compares `event.totalPassengers` with `resource.capacity`
3. **Visual Feedback**: Resource rows with insufficient capacity are grayed out during drag
4. **Drop Prevention**: Drops on insufficient-capacity resources are automatically rejected

### Visual Indicators

- **Gray Overlay**: Applied to all resource rows that cannot accommodate the dragged event
- **Red Highlight**: Applied to the current drop target if capacity is insufficient
- **Green Highlight**: Applied to the current drop target if capacity is sufficient

### Example Usage

```typescript
const data = [
  {
    id: "vehicle-1",
    label: { title: "Van", subtitle: "8 seats", icon: "🚐" },
    capacity: 8, // Vehicle can hold 8 passengers
    data: [...]
  },
  {
    id: "vehicle-2",
    label: { title: "Sedan", subtitle: "4 seats", icon: "🚗" },
    capacity: 4, // Vehicle can hold 4 passengers
    data: [...]
  }
];

const events = [
  {
    segmentId: "trip-1",
    title: "Airport Transfer",
    totalPassengers: 6, // 6 passengers
    // ... other fields
  }
];

// When dragging "trip-1" (6 passengers):
// - "Van" (8 seats) will be highlighted in green when hovered
// - "Sedan" (4 seats) will be grayed out and cannot receive the drop
```

## Resource-Only Mode

### Overview

Resource-only mode restricts drag-and-drop to only change the resource/unit assignment without modifying the event's dates. This is useful for scenarios where you want to reassign tasks or bookings between resources while keeping the same time slot.

### Configuration

Enable resource-only mode via the `draggableConfig`:

```typescript
<Scheduler
  data={schedulerData}
  onEventDrop={handleEventDrop}
  draggableConfig={{ 
    enabled: true,
    resourceOnly: true // Only allow resource changes, not date changes
  }}
/>
```

### Implementation

When `resourceOnly` is true:

1. **Drop Target Calculation**: The `calculateDropTarget` function preserves the original event dates instead of calculating new dates based on mouse position
2. **Visual Feedback**: A vertical line indicator appears on the left edge of the target resource row instead of the full drop indicator box
3. **Ghost Position**: The ghost element's horizontal position is locked to the original position

### Visual Indicators

- **Vertical Line**: A 4px colored line on the left edge of the target resource row
  - Green: Valid drop target (sufficient capacity or no capacity validation)
  - Red: Invalid drop target (insufficient capacity)
- **No Horizontal Indicator**: The dashed box drop indicator is not shown
- **Gray Overlay**: Resource rows with insufficient capacity are still grayed out
- **Resource Highlight**: Background highlight on the target resource row (green/red based on validation)

### Use Cases

1. **Task Reassignment**: Reassign tasks between team members without changing deadlines
2. **Resource Reallocation**: Move bookings between rooms/vehicles without changing time slots
3. **Workload Balancing**: Redistribute work across resources while maintaining schedules

### Example

```typescript
const handleEventDrop = async (dropData: EventDropData): Promise<boolean> => {
  // In resource-only mode:
  // - dropData.newStartDate === dropData.originalStartDate
  // - dropData.newEndDate === dropData.originalEndDate
  // - dropData.newResourceId may be different
  
  if (dropData.newResourceId === dropData.originalResourceId) {
    return false; // No change, reject
  }
  
  // Update resource assignment only
  await updateEventResource(dropData.event.id, dropData.newResourceId);
  return true;
};
```

## Accessibility Considerations

While this design focuses on mouse-based drag-and-drop, future enhancements could include:

- Keyboard navigation for drag-and-drop (arrow keys to move events)
- Screen reader announcements for drag state changes
- Focus management during drag operations

For the initial implementation, we ensure:
- Draggable events maintain proper semantic HTML
- Click functionality remains fully accessible
- Visual feedback has sufficient contrast
- Capacity validation provides clear visual indicators

## Migration Path

### Backward Compatibility

All new props are optional, ensuring existing implementations continue to work:

```typescript
// Existing usage - no changes required
<Scheduler data={data} config={config} />

// New usage - opt-in to drag-and-drop
<Scheduler 
  data={data} 
  config={config}
  onEventDrop={handleDrop}
  draggableConfig={{ enabled: true }}
/>
```

### Feature Flag

The `draggableConfig.enabled` flag allows consumers to:
- Test drag-and-drop in development before production rollout
- Disable drag-and-drop for specific user roles
- Toggle feature based on viewport size (disable on mobile)

## Visual Design

### Ghost Element Styling

```typescript
const ghostStyles = {
  opacity: 0.5,
  pointerEvents: 'none',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transform: 'scale(1.02)',
  transition: 'none', // No transition during drag
  cursor: 'grabbing'
}
```

### Drop Indicator Styling

```typescript
const dropIndicatorStyles = {
  valid: {
    border: '2px dashed #4CAF50',
    backgroundColor: 'rgba(76, 175, 80, 0.1)'
  },
  invalid: {
    border: '2px dashed #F44336',
    backgroundColor: 'rgba(244, 67, 54, 0.1)'
  }
}
```

### Animation

```typescript
const returnAnimation = {
  duration: 300, // ms
  easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Material Design standard
  property: 'transform'
}
```

## Implementation Notes

### Coordinate System

The scheduler uses multiple coordinate systems:

1. **Canvas Coordinates**: Relative to canvas element (0,0 at top-left of canvas)
2. **Grid Coordinates**: Relative to grid wrapper (accounts for scroll position)
3. **Client Coordinates**: Relative to viewport (from mouse events)

The drag system must convert between these coordinate systems:

```typescript
function clientToGridCoords(
  clientX: number,
  clientY: number,
  gridRef: HTMLElement
): { x: number; y: number } {
  const rect = gridRef.getBoundingClientRect();
  return {
    x: clientX - rect.left + gridRef.scrollLeft,
    y: clientY - rect.top + gridRef.scrollTop
  };
}
```

### Scroll Handling

During drag operations near grid edges:
- Auto-scroll is NOT implemented in v1 (to keep scope manageable)
- Users must manually scroll then continue dragging
- Future enhancement: Auto-scroll when dragging near edges

### Z-Index Management

Layer stacking (bottom to top):
1. Canvas grid (z-index: 1)
2. Tiles (z-index: 2)
3. Drag overlay (z-index: 1000)
4. Tooltip (z-index: 1001 - unchanged)

## Dependencies

No new external dependencies required. The implementation uses:
- React built-in hooks (useState, useRef, useCallback, useEffect)
- dayjs (already in project)
- Existing utility functions

## Future Enhancements

Potential features for future iterations:

1. **Multi-Select Drag**: Drag multiple events simultaneously
2. **Resize Handles**: Drag event edges to change duration
3. **Auto-Scroll**: Scroll grid when dragging near edges
4. **Undo/Redo**: Revert drag operations
5. **Drag Preview Customization**: Allow consumers to customize ghost element
6. **Touch Support**: Add touch event handlers for mobile devices
7. **Keyboard Drag**: Arrow keys to move selected events
8. **Conflict Visualization**: Show overlapping events during drag

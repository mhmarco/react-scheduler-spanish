# Capacity-Based Validation Feature

## Overview

This feature adds capacity-based validation to the drag-and-drop system, preventing events from being dropped on resources that cannot accommodate them. This is particularly useful for vehicle scheduling, room booking, and equipment allocation scenarios.

## Implementation Summary

### Type Changes

#### `SchedulerRow` and `PaginatedSchedulerRow`
Added optional `capacity` property:
```typescript
type SchedulerRow = {
  id: string;
  label: SchedulerRowLabel;
  data: SchedulerProjectData[];
  capacity?: number; // Maximum capacity for this resource
}
```

#### `SchedulerProjectData`
Added optional `totalPassengers` property:
```typescript
type SchedulerProjectData = {
  // ... existing fields
  totalPassengers?: number; // Total passengers/occupants for capacity validation
}
```

#### `DropTarget`
Added capacity validation fields:
```typescript
type DropTarget = {
  startDate: Date;
  endDate: Date;
  resourceId: string;
  resourceIndex: number;
  resourceCapacity?: number; // Capacity of the target resource
  hasCapacity?: boolean; // Whether the target has sufficient capacity
}
```

### Logic Changes

#### `useDragAndDrop` Hook
- **`calculateDropTarget`**: Now extracts resource capacity and validates against event's `totalPassengers`
- **`handleDragMove`**: Sets `isValidDrop` based on capacity validation
- **`handleDragEnd`**: Rejects drops on resources with insufficient capacity

#### `DragOverlay` Component
- Accepts `data` prop to access resource capacity information
- Calculates which resource rows have insufficient capacity
- Renders gray overlay on invalid resource rows
- Updates resource highlight color based on validation (green/red)

### Visual Indicators

1. **Gray Overlay** (`StyledInvalidResourceOverlay`): Applied to resource rows that cannot accommodate the dragged event
2. **Green Highlight**: Applied to valid drop targets (sufficient capacity)
3. **Red Highlight**: Applied to invalid drop targets (insufficient capacity)

## Usage Example

```tsx
import { Scheduler, SchedulerData } from '@bitnoi.se/react-scheduler';

const schedulerData: SchedulerData = [
  {
    id: "vehicle-1",
    label: { 
      title: "Van", 
      subtitle: "8 seats",
      icon: "🚐" 
    },
    capacity: 8, // Vehicle can hold 8 passengers
    data: [
      [
        {
          segmentId: "trip-1",
          reservationId: "res-1",
          title: "Airport Transfer",
          totalPassengers: 6, // 6 passengers
          startDate: new Date("2024-01-01T10:00:00"),
          endDate: new Date("2024-01-01T12:00:00"),
          occupancy: 7200,
          bookingNumber: "BK001"
        }
      ]
    ]
  },
  {
    id: "vehicle-2",
    label: { 
      title: "Sedan", 
      subtitle: "4 seats",
      icon: "🚗" 
    },
    capacity: 4, // Vehicle can hold 4 passengers
    data: [[]]
  }
];

function MyScheduler() {
  const handleEventDrop = async (dropData) => {
    // Capacity validation is automatic
    // This callback only fires if capacity is sufficient
    await saveToBackend(dropData);
    return true;
  };

  return (
    <Scheduler
      data={schedulerData}
      onEventDrop={handleEventDrop}
      draggableConfig={{ enabled: true }}
    />
  );
}
```

## Validation Rules

1. **Both properties defined**: Validation is performed
   - `event.totalPassengers <= resource.capacity` → Valid drop (green)
   - `event.totalPassengers > resource.capacity` → Invalid drop (red/gray)

2. **Either property undefined**: Validation is skipped
   - No `capacity` on resource → No validation
   - No `totalPassengers` on event → No validation

3. **Automatic rejection**: Drops on insufficient-capacity resources are automatically rejected and animate back to original position

## Benefits

- **Prevents overbooking**: Ensures resources are not assigned more than they can handle
- **Visual feedback**: Users immediately see which resources can accommodate an event
- **Flexible**: Optional validation allows mixing validated and non-validated resources
- **Type-safe**: Full TypeScript support with proper type definitions

## Files Modified

- `src/types/global.ts` - Added `capacity` and `totalPassengers` fields
- `src/hooks/types.ts` - Updated `DropTarget` type
- `src/hooks/useDragAndDrop.ts` - Added capacity validation logic
- `src/components/DragOverlay/DragOverlay.tsx` - Added visual indicators and fixed drag state condition
- `src/components/DragOverlay/types.ts` - Updated props
- `src/components/DragOverlay/styles.ts` - Added new styled components
- `src/components/Calendar/Grid/Grid.tsx` - Passed data to DragOverlay
- `src/utils/splitToPages.ts` - Fixed to preserve `capacity` field during pagination

## Bug Fixes

### Issue: Gray Overlay Not Showing During Drag

**Problem**: The gray overlay for insufficient-capacity resources was not appearing during drag operations.

**Root Causes**:
1. **Inverted condition in DragOverlay**: The `invalidResourceRows` calculation had `dragState !== "dragging"` which returned an empty array when actively dragging. Fixed by changing to `dragState === "idle" || dragState === "potential"`.

2. **Lost capacity field during pagination**: The `splitToPages` utility was not preserving the `capacity` field when creating paginated data. Fixed by adding `capacity: data[i].capacity` to all item creation points.

**Files Fixed**:
- `src/components/DragOverlay/DragOverlay.tsx` - Fixed drag state condition
- `src/utils/splitToPages.ts` - Preserved capacity field during pagination

## Documentation Updated

- `.kiro/specs/drag-drop-events/design.md` - Added capacity validation section
- `.kiro/specs/drag-drop-events/requirements.md` - Added Requirement 9
- `.kiro/specs/drag-drop-events/tasks.md` - Added implementation tasks
- `DRAG_AND_DROP.md` - Added capacity validation guide and examples
- `.kiro/specs/drag-drop-events/CAPACITY_VALIDATION.md` - Added bug fixes section

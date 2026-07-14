# Conflict Detection Feature

## Overview

This feature adds custom validation support to the drag-and-drop system, allowing consumers to implement conflict detection (e.g., time overlaps) and provide real-time visual feedback during drag operations.

## Implementation Summary

### Type Changes

#### `DraggableConfig`
Added optional `isValidDrop` property:
```typescript
type DraggableConfig = {
  enabled?: boolean;
  isDraggable?: (event: SchedulerProjectData) => boolean;
  resourceOnly?: boolean;
  isValidDrop?: (dragData: EventDragData) => boolean; // NEW: Custom validation function
  snapToGrid?: boolean;
  animationDuration?: number;
}
```

### Logic Changes

#### `useDragAndDrop` Hook

**Configuration**:
- Extracts `isValidDrop` from `draggableConfig`

**`handleDragMove`**:
- After calculating drop target and checking capacity validation
- Calls `isValidDrop` with current drag data if provided
- Combines capacity validation AND custom validation results
- Updates `isValidDrop` state for visual feedback

**`handleDragEnd`**:
- Before processing the drop, checks custom validation
- If validation fails, rejects the drop and animates back to original position
- Validation happens BEFORE calling `onEventDrop` callback

### Visual Feedback

The validation result affects the visual indicators:

**Valid Drop** (`isValidDrop` returns `true`):
- Green dashed border on drop indicator
- Green background highlight on target resource row
- Green vertical line (in resource-only mode)

**Invalid Drop** (`isValidDrop` returns `false`):
- Red dashed border on drop indicator
- Red background highlight on target resource row
- Red vertical line (in resource-only mode)
- Drop is automatically rejected

### Validation Flow

1. **During Drag** (`handleDragMove`):
   - Calculate drop target position
   - Check capacity validation (if applicable)
   - Call `isValidDrop` with current position (if provided)
   - Update visual feedback in real-time

2. **On Drop** (`handleDragEnd`):
   - Check capacity validation
   - Call `isValidDrop` with final position (if provided)
   - If validation fails, animate back to original position
   - If validation passes, call `onEventDrop` callback

## Usage Example

### Basic Conflict Detection

```tsx
import { Scheduler, EventDragData } from '@bitnoi.se/react-scheduler';

function MyScheduler() {
  const [data, setData] = useState(schedulerData);

  // Check for time conflicts
  const checkConflict = (dragData: EventDragData) => {
    const targetResource = data.find((r) => r.id === dragData.currentResourceId);
    if (!targetResource) return false;

    // Check all events in the target resource for overlaps
    for (const event of targetResource.data) {
      // Skip the event being dragged
      if (event.id === dragData.event.id) continue;

      const dragStart = new Date(dragData.currentStartDate).getTime();
      const dragEnd = new Date(dragData.currentEndDate).getTime();
      const eventStart = new Date(event.startDate).getTime();
      const eventEnd = new Date(event.endDate).getTime();

      // Check for overlap
      if (
        (dragStart >= eventStart && dragStart < eventEnd) ||
        (dragEnd > eventStart && dragEnd <= eventEnd) ||
        (dragStart <= eventStart && dragEnd >= eventEnd)
      ) {
        return true; // Has conflict
      }
    }

    return false; // No conflict
  };

  return (
    <Scheduler
      data={data}
      onEventDrop={handleEventDrop}
      draggableConfig={{
        enabled: true,
        isValidDrop: (dragData) => !checkConflict(dragData)
      }}
    />
  );
}
```

### Combined Validation

The system automatically combines multiple validation checks:

1. **Capacity Validation** (built-in): Checks if `event.totalPassengers <= resource.capacity`
2. **Custom Validation** (via `isValidDrop`): Checks for time conflicts or other business rules

Both must pass for the drop to be valid:
```typescript
// Internal logic
let isValid = target.hasCapacity !== false; // Capacity check
if (customIsValidDrop && isValid) {
  isValid = customIsValidDrop(dragData); // Custom check
}
```

### Advanced Example: Multiple Validation Rules

```tsx
const validateDrop = (dragData: EventDragData) => {
  // Rule 1: Check for time conflicts
  if (hasTimeConflict(dragData)) {
    console.log("❌ Time conflict detected");
    return false;
  }

  // Rule 2: Check resource availability
  if (!isResourceAvailable(dragData.currentResourceId, dragData.currentStartDate)) {
    console.log("❌ Resource not available");
    return false;
  }

  // Rule 3: Check business hours
  const hour = new Date(dragData.currentStartDate).getHours();
  if (hour < 8 || hour > 18) {
    console.log("❌ Outside business hours");
    return false;
  }

  return true; // All checks passed
};

<Scheduler
  data={data}
  draggableConfig={{
    enabled: true,
    isValidDrop: validateDrop
  }}
/>
```

## Benefits

- **Real-time Feedback**: Users see validation results immediately while dragging
- **Flexible**: Supports any custom validation logic
- **Automatic Rejection**: Invalid drops are automatically rejected without calling `onEventDrop`
- **Visual Clarity**: Clear green/red indicators show valid/invalid drop positions
- **Performance**: Validation is throttled during drag to avoid excessive calculations
- **Composable**: Works seamlessly with built-in capacity validation

## Files Modified

- `src/hooks/types.ts` - Added `isValidDrop` to `DraggableConfig`
- `src/hooks/useDragAndDrop.ts` - Implemented custom validation logic in `handleDragMove` and `handleDragEnd`
- `src/App.tsx` - Added conflict detection example with `checkConflict` function
- `DRAG_AND_DROP.md` - Added Conflict Detection section with examples

## Documentation Updated

- `DRAG_AND_DROP.md` - Added Conflict Detection section
- `.kiro/specs/drag-drop-events/CONFLICT_DETECTION.md` - Created this summary document

## Validation Timing

- **During Drag**: Called on every mouse move (throttled via RAF)
- **On Drop**: Called once before accepting the drop
- **Performance**: Validation function should be fast (< 10ms) to avoid jank

## Error Handling

If `isValidDrop` throws an error:
- The error is not caught (will propagate)
- Recommendation: Wrap validation logic in try-catch if needed
- Invalid drops are treated as validation failure

## Future Enhancements

Potential improvements:
- Add validation error messages to display to users
- Support async validation (return Promise<boolean>)
- Add validation caching to improve performance
- Provide validation context (e.g., all events in target resource)

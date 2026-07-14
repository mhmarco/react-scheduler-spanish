# Resource-Only Mode Feature

## Overview

This feature adds a `resourceOnly` mode to the drag-and-drop system, which restricts dragging to only change the resource/unit assignment without modifying the event's dates. This is useful for scenarios where you want to reassign tasks or bookings between resources while keeping the same time slot.

## Implementation Summary

### Type Changes

#### `DraggableConfig`
Added optional `resourceOnly` property:
```typescript
type DraggableConfig = {
  enabled?: boolean;
  isDraggable?: (event: SchedulerProjectData) => boolean;
  resourceOnly?: boolean; // If true, only allow resource changes, not date changes
  snapToGrid?: boolean;
  animationDuration?: number;
}
```

#### `UseDragAndDropReturn`
Added `resourceOnly` to the return type:
```typescript
type UseDragAndDropReturn = {
  // ... existing fields
  resourceOnly: boolean; // Indicates if resource-only mode is active
}
```

#### `DragOverlayProps`
Added `resourceOnly` to the props:
```typescript
type DragOverlayProps = {
  // ... existing fields
  resourceOnly: boolean; // Indicates if resource-only mode is active
}
```

### Logic Changes

#### `useDragAndDrop` Hook
- **Configuration**: Extracts `resourceOnly` from `draggableConfig` (default: `false`)
- **`calculateDropTarget`**: When `resourceOnly` is true, preserves original event dates instead of calculating new dates based on mouse position
- **Return value**: Includes `resourceOnly` flag for use by DragOverlay

#### `DragOverlay` Component
- Accepts `resourceOnly` prop
- **Normal mode**: Shows dashed box drop indicator with time labels
- **Resource-only mode**: Shows vertical line indicator on left edge of target resource row
- **Visual feedback**: 
  - Green line for valid drops (sufficient capacity)
  - Red line for invalid drops (insufficient capacity)
  - No horizontal drop indicator in resource-only mode

#### `Grid` Component
- Extracts `resourceOnly` from `useDragAndDrop` hook
- Passes `resourceOnly` to `DragOverlay` component

### Visual Indicators

#### Normal Mode
- Dashed box at drop position showing where event will land
- Time label showing new start/end times
- Green/red color based on validation

#### Resource-Only Mode
- **Vertical Line**: 4px colored line on left edge of target resource row
  - Green: Valid drop target
  - Red: Invalid drop target
- **No Horizontal Indicator**: Dashed box is not shown
- **Gray Overlay**: Resource rows with insufficient capacity are still grayed out
- **Resource Highlight**: Background highlight on target row (green/red)

### Styled Components

Added `StyledResourceOnlyIndicator`:
```typescript
export const StyledResourceOnlyIndicator = styled.div<{ $isValid: boolean }>`
  position: absolute;
  width: 4px;
  background-color: ${({ $isValid }) => ($isValid ? "#4CAF50" : "#F44336")};
  pointer-events: none;
  border-radius: 2px;
  box-shadow: 0 0 8px ${({ $isValid }) => 
    ($isValid ? "rgba(76, 175, 80, 0.5)" : "rgba(244, 67, 54, 0.5)")};
`;
```

## Usage Example

```tsx
import { Scheduler, EventDropData } from '@bitnoi.se/react-scheduler';

function MyScheduler() {
  const [resourceOnlyMode, setResourceOnlyMode] = useState(false);

  const handleEventDrop = async (dropData: EventDropData) => {
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

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={resourceOnlyMode}
          onChange={(e) => setResourceOnlyMode(e.target.checked)}
        />
        Resource-Only Mode
      </label>
      
      <Scheduler
        data={schedulerData}
        onEventDrop={handleEventDrop}
        draggableConfig={{ 
          enabled: true,
          resourceOnly: resourceOnlyMode
        }}
      />
    </>
  );
}
```

## Use Cases

1. **Task Reassignment**: Reassign tasks between team members without changing deadlines
2. **Resource Reallocation**: Move bookings between rooms/vehicles without changing time slots
3. **Workload Balancing**: Redistribute work across resources while maintaining schedules
4. **Capacity Management**: Reassign events to resources with available capacity

## Comparison

| Mode | Horizontal Drag | Vertical Drag | Visual Indicator | Use Case |
|------|----------------|---------------|------------------|----------|
| **Normal** | Changes dates | Changes resource | Dashed box at drop position | Reschedule and reassign |
| **Resource-Only** | No effect | Changes resource | Vertical line on left edge | Reassign without rescheduling |

## Files Modified

- `src/hooks/types.ts` - Added `resourceOnly` to `DraggableConfig` and `UseDragAndDropReturn`
- `src/hooks/useDragAndDrop.ts` - Added resource-only logic to `calculateDropTarget` and return value
- `src/components/DragOverlay/types.ts` - Added `resourceOnly` to `DragOverlayProps`
- `src/components/DragOverlay/DragOverlay.tsx` - Added conditional rendering for resource-only mode
- `src/components/DragOverlay/styles.ts` - Added `StyledResourceOnlyIndicator` component
- `src/components/Calendar/Grid/Grid.tsx` - Passed `resourceOnly` to DragOverlay
- `src/App.tsx` - Added toggle for testing resource-only mode

## Documentation Updated

- `DRAG_AND_DROP.md` - Added Resource-Only Mode section with examples
- `.kiro/specs/drag-drop-events/design.md` - Added Resource-Only Mode section
- `.kiro/specs/drag-drop-events/RESOURCE_ONLY_MODE.md` - Created this summary document

## Benefits

- **Prevents accidental rescheduling**: Users can reassign events without worrying about changing dates
- **Clear visual feedback**: Vertical line indicator makes it obvious that only resource is changing
- **Flexible**: Can be toggled on/off at runtime
- **Compatible**: Works with existing capacity validation
- **Type-safe**: Full TypeScript support with proper type definitions

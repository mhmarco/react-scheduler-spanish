# Drag and Drop Events

This document explains how to implement drag-and-drop functionality in the React Scheduler.

> **Looking to create new events?** See [CLICK_TO_ADD.md](./CLICK_TO_ADD.md) for the click-to-add feature that allows users to select a time range on the calendar to create new events.

## Drop Behavior Overview

The scheduler handles different drop scenarios automatically:

| Scenario | Visual Indicator | Drop Behavior | Consumer Notified? |
|----------|-----------------|---------------|-------------------|
| **No Conflicts** | Green or no tooltip | ✅ Allowed | ✅ Yes - via `onEventDrop` |
| **Nearby Events** | Green tooltip with event details | ✅ Allowed | ✅ Yes - via `onEventDrop` |
| **Conflicts** | Red tooltip with conflict details | ⚠️ Allowed (consumer decides) | ✅ Yes - with conflict data |
| **Insufficient Capacity** | Gray overlay + red indicator | ❌ **Blocked** (hard block) | ❌ No - automatically rejected |

### Key Points

- **Capacity validation is a hard block** - Drops are automatically rejected if `totalPassengers > capacity`. The `onEventDrop` callback is NOT called.
- **Conflicts are warnings** - Drops are allowed, but the consumer receives full conflict details and decides whether to accept or reject.
- **Nearby events are informational** - Shows same-day events for context, but doesn't affect drop behavior.
- **Consumer has final say** - For all allowed drops, the consumer's `onEventDrop` return value determines if the drop is accepted.

## Quick Start

```tsx
import { Scheduler, EventDropData, EventDragData } from '@bitnoi.se/react-scheduler';

function MyScheduler() {
  const handleEventDrop = async (dropData: EventDropData): Promise<boolean> => {
    // Validate the drop
    const hasConflict = checkForConflicts(
      dropData.newStartDate,
      dropData.newEndDate,
      dropData.newResourceId
    );
    
    if (hasConflict) {
      return false; // Reject - event animates back
    }
    
    // Save to backend
    try {
      await updateEvent(dropData.event.id, {
        startDate: dropData.newStartDate,
        endDate: dropData.newEndDate,
        resourceId: dropData.newResourceId
      });
      return true; // Accept - event stays in new position
    } catch (error) {
      return false; // Reject on error
    }
  };

  const handleEventDrag = (dragData: EventDragData) => {
    // Optional: Show real-time feedback while dragging
    console.log('Dragging to:', dragData.currentStartDate);
  };

  return (
    <Scheduler
      data={schedulerData}
      onEventDrop={handleEventDrop}
      onEventDrag={handleEventDrag}
      draggableConfig={{ enabled: true }}
    />
  );
}
```

## Filtered Data and Conflict Detection

If you apply custom filters to your data before passing it to the Scheduler, you should provide the unfiltered data via the `baseData` prop to ensure conflicts are detected against ALL events, not just the visible filtered ones.

```tsx
function MyScheduler() {
  const [allData, setAllData] = useState(/* all scheduler data */);
  const [filteredData, setFilteredData] = useState(allData);
  
  const handleFilter = (searchTerm: string) => {
    const filtered = allData.filter(resource => 
      resource.label.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Scheduler
      data={filteredData}      // Filtered data for display
      baseData={allData}        // Unfiltered data for conflict detection
      onEventDrop={handleEventDrop}
      draggableConfig={{ enabled: true }}
    />
  );
}
```

**Why is this important?**
- Without `baseData`, conflicts are only checked against visible (filtered) events
- An event might appear conflict-free but actually overlap with a filtered-out event
- Providing `baseData` ensures accurate conflict detection regardless of filters

**When to use `baseData`:**
- ✅ You apply search/filter logic before passing data to Scheduler
- ✅ You paginate data externally before passing to Scheduler
- ✅ You hide certain resources based on user preferences
- ❌ You only use Scheduler's built-in search (no need for `baseData`)
- ❌ You don't filter data (no need for `baseData`)


## API Reference

### `onEventDrop` Callback

Called when the user drops an event after dragging.

**Type:** `(dropData: EventDropData) => Promise<boolean> | boolean`

**Parameters:**
- `dropData.event` - The complete event object being dropped
- `dropData.originalStartDate` - Start date before drag
- `dropData.originalEndDate` - End date before drag
- `dropData.originalResourceId` - Resource ID before drag
- `dropData.newStartDate` - New start date (snapped to grid)
- `dropData.newEndDate` - New end date (duration preserved)
- `dropData.newResourceId` - New resource ID

**Returns:**
- `true` - Accept the drop (event stays in new position)
- `false` - Reject the drop (event animates back to original position)

**Notes:**
- Can be synchronous or asynchronous (return a Promise)
- The consumer is responsible for persisting changes
- Event duration is automatically preserved during the drag
- **This callback is NOT called if capacity validation fails** - those drops are automatically blocked

**Conflict Handling:**
When `dropData.hasConflict` is `true`, the consumer receives:
- `dropData.conflicts` - Array of conflicting events with detailed overlap information
- Consumer must decide: return `true` to accept despite conflicts, or `false` to reject

### `onEventDrag` Callback

Called during drag operation (throttled to 100ms).

**Type:** `(dragData: EventDragData) => void`

**Parameters:**
- `dragData.event` - The event being dragged
- `dragData.currentStartDate` - Current start date (snapped to grid)
- `dragData.currentEndDate` - Current end date (duration preserved)
- `dragData.currentResourceId` - Current resource ID
- `dragData.conflicts` - Array of `ConflictDetails` objects (if any conflicts exist)

**Use Cases:**
- Show real-time validation feedback
- Display conflict details while dragging
- Update UI indicators with specific conflict information

### `ConflictDetails` Type

Detailed information about a conflicting event:

**Properties:**
- `event: SchedulerProjectData` - The complete conflicting event object
- `conflictStart: Date` - Start date of the overlap period
- `conflictEnd: Date` - End date of the overlap period
- `overlapDuration: number` - Duration of overlap in milliseconds

**Example:**
```tsx
const handleEventDrag = (dragData: EventDragData) => {
  if (dragData.conflicts) {
    dragData.conflicts.forEach(conflict => {
      const hours = conflict.overlapDuration / (1000 * 60 * 60);
      console.log(`Overlaps with "${conflict.event.title}" by ${hours.toFixed(1)} hours`);
      console.log(`Overlap period: ${conflict.conflictStart} to ${conflict.conflictEnd}`);
    });
  }
};
```


### `draggableConfig` Configuration

Configure drag-and-drop behavior.

**Type:** `DraggableConfig`

**Properties:**
- `enabled?: boolean` - Enable/disable drag-and-drop globally (default: `true`)
- `isDraggable?: (event: SchedulerProjectData) => boolean` - Custom function to determine if a specific event is draggable
- `resourceOnly?: boolean` - If true, dragging only changes the resource/unit, not the dates (default: `false`)
- `isValidDrop?: (dragData: EventDragData) => boolean` - Custom function to validate if a drop position is valid (e.g., check for time conflicts). Return `true` for valid, `false` for invalid.

**Example:**
```tsx
const draggableConfig = {
  enabled: true,
  isDraggable: (event) => {
    // Only allow dragging events that are not locked
    return !event.locked && event.status !== 'completed';
  },
  isValidDrop: (dragData) => {
    // Check for time conflicts
    return !hasTimeConflict(dragData.currentStartDate, dragData.currentEndDate, dragData.currentResourceId);
  }
};
```

## Drop Scenarios Explained

### Scenario 1: Clean Drop (No Issues)

**When:** Event is dropped with no conflicts and sufficient capacity.

**Visual:** Green indicators or no tooltip (if no nearby events).

**Behavior:**
1. Drop is allowed
2. `onEventDrop` is called with event details
3. Consumer returns `true` (accept) or `false` (reject)
4. If accepted, event moves to new position
5. If rejected, event animates back

**Example:**
```tsx
const handleEventDrop = async (dropData: EventDropData) => {
  // No conflicts, no capacity issues
  await saveToBackend(dropData);
  return true; // Accept
};
```

### Scenario 2: Nearby Events (Same Day)

**When:** Event is dropped on a day with other events, but no time overlap.

**Visual:** Green tooltip showing nearby events with time gaps.

**Behavior:**
1. Drop is allowed (informational only)
2. `onEventDrop` is called normally
3. Consumer can see nearby events in UI but they don't affect the callback
4. Consumer returns `true` or `false` as usual

**Example:**
```tsx
const handleEventDrop = async (dropData: EventDropData) => {
  // Nearby events shown in UI, but no special handling needed
  await saveToBackend(dropData);
  return true;
};
```

### Scenario 3: Conflicts Detected

**When:** Event overlaps with existing events.

**Visual:** Red tooltip with detailed conflict information.

**Behavior:**
1. Drop is **allowed** (warning, not blocking)
2. `onEventDrop` is called with `hasConflict: true` and `conflicts` array
3. **Consumer decides** whether to accept or reject
4. Consumer can check conflict details and make informed decision

**Example:**
```tsx
const handleEventDrop = async (dropData: EventDropData) => {
  if (dropData.hasConflict && dropData.conflicts) {
    // Check conflict severity
    const totalOverlap = dropData.conflicts.reduce(
      (sum, c) => sum + c.overlapDuration, 0
    );
    
    // Allow minor conflicts (< 30 minutes)
    if (totalOverlap < 30 * 60 * 1000) {
      await saveToBackend(dropData);
      return true; // Accept despite conflict
    }
    
    // Reject major conflicts
    alert('Conflict too large - please choose another time');
    return false; // Reject
  }
  
  await saveToBackend(dropData);
  return true;
};
```

### Scenario 4: Insufficient Capacity

**When:** Event's `totalPassengers` exceeds resource's `capacity`.

**Visual:** Gray overlay on insufficient capacity rows, red indicators.

**Behavior:**
1. Drop is **automatically blocked** (hard block)
2. Event animates back to original position
3. `onEventDrop` is **NOT called**
4. Consumer has no control - capacity validation is enforced

**Example:**
```tsx
const handleEventDrop = async (dropData: EventDropData) => {
  // This callback is NEVER called for capacity failures
  // The system blocks the drop automatically
  
  await saveToBackend(dropData);
  return true;
};
```

**Data Setup:**
```tsx
const schedulerData = [
  {
    id: "vehicle-1",
    capacity: 8, // Maximum capacity
    data: [[
      {
        id: "trip-1",
        totalPassengers: 10, // Exceeds capacity
        // This event cannot be dropped on vehicles with capacity < 10
      }
    ]]
  }
];
```

## Resource-Only Mode

When `resourceOnly` is enabled, dragging only changes which resource/unit an event is assigned to, without changing the event's dates. This is useful for scenarios where you want to reassign tasks or bookings between resources while keeping the same time slot.

### Setup

```tsx
<Scheduler
  data={schedulerData}
  onEventDrop={handleEventDrop}
  draggableConfig={{ 
    enabled: true,
    resourceOnly: true // Only allow resource changes, not date changes
  }}
/>
```

### Visual Feedback

In resource-only mode:
- **Vertical Line Indicator**: A colored vertical line appears on the left edge of the target resource row
- **Green Line**: Valid drop target (sufficient capacity or no capacity validation)
- **Red Line**: Invalid drop target (insufficient capacity)
- **No Horizontal Movement**: The ghost element stays at the original horizontal position
- **Gray Overlay**: Resource rows with insufficient capacity are grayed out

### Example Use Case

```tsx
// Reassign tasks between team members without changing deadlines
const handleEventDrop = async (dropData: EventDropData): Promise<boolean> => {
  // In resource-only mode:
  // - dropData.newStartDate === dropData.originalStartDate
  // - dropData.newEndDate === dropData.originalEndDate
  // - dropData.newResourceId may be different
  
  if (dropData.newResourceId === dropData.originalResourceId) {
    return false; // No change, reject
  }
  
  // Update resource assignment
  await updateEventResource(dropData.event.id, dropData.newResourceId);
  return true;
};

<Scheduler
  data={schedulerData}
  onEventDrop={handleEventDrop}
  draggableConfig={{ resourceOnly: true }}
/>
```

### Comparison

| Mode | Horizontal Drag | Vertical Drag | Visual Indicator | Use Case |
|------|----------------|---------------|------------------|----------|
| **Normal** | Changes dates | Changes resource | Dashed box at drop position | Reschedule and reassign |
| **Resource-Only** | No effect | Changes resource | Vertical line on left edge | Reassign without rescheduling |

## Per-Event Draggability

You can also control draggability on a per-event basis using the `draggable` property:

```tsx
const schedulerData = [
  {
    id: "person-1",
    label: { title: "John Doe" },
    data: [
      [
        {
          id: "event-1",
          draggable: false, // This event cannot be dragged
          startDate: new Date("2024-01-01"),
          endDate: new Date("2024-01-02"),
          // ... other properties
        }
      ]
    ]
  }
];
```

## Conflict Detection

The scheduler automatically calculates detailed conflict information when events overlap. You can use this information to make informed decisions about whether to accept or reject drops, and provide detailed feedback to users.

### Automatic Conflict Detection

Conflict details are automatically calculated and included in both `onEventDrag` and `onEventDrop` callbacks:

```tsx
const handleEventDrop = async (dropData: EventDropData): Promise<boolean> => {
  // Check if there are conflicts
  if (dropData.hasConflict && dropData.conflicts) {
    console.log(`Found ${dropData.conflicts.length} conflicts:`);
    
    dropData.conflicts.forEach(conflict => {
      const overlapHours = conflict.overlapDuration / (1000 * 60 * 60);
      console.log(`- Conflicts with "${conflict.event.title}"`);
      console.log(`  Overlap: ${conflict.conflictStart} to ${conflict.conflictEnd}`);
      console.log(`  Duration: ${overlapHours.toFixed(2)} hours`);
    });
    
    // Decide based on total overlap
    const totalOverlap = dropData.conflicts.reduce((sum, c) => sum + c.overlapDuration, 0);
    const totalHours = totalOverlap / (1000 * 60 * 60);
    
    if (totalHours > 2) {
      alert(`Cannot drop: ${totalHours.toFixed(1)} hours of overlap detected`);
      return false; // Reject
    }
  }
  
  // Accept the drop
  await saveToBackend(dropData);
  return true;
};
```

### Conflict Details Structure

Each conflict includes:
- `event` - The conflicting event object
- `conflictStart` - Start date of the overlap period
- `conflictEnd` - End date of the overlap period
- `overlapDuration` - Duration of overlap in milliseconds

### Real-Time Conflict Feedback

Show conflict details while dragging:

```tsx
const [conflictWarning, setConflictWarning] = useState<string | null>(null);

const handleEventDrag = (dragData: EventDragData) => {
  if (dragData.conflicts && dragData.conflicts.length > 0) {
    const messages = dragData.conflicts.map(c => {
      const hours = (c.overlapDuration / (1000 * 60 * 60)).toFixed(1);
      return `${c.event.title} (${hours}h overlap)`;
    });
    setConflictWarning(`Conflicts: ${messages.join(', ')}`);
  } else {
    setConflictWarning(null);
  }
};

return (
  <>
    {conflictWarning && <div className="warning">{conflictWarning}</div>}
    <Scheduler
      data={schedulerData}
      onEventDrop={handleEventDrop}
      onEventDrag={handleEventDrag}
      draggableConfig={{ enabled: true }}
    />
  </>
);
```

### Custom Validation with isValidDrop

You can still use `isValidDrop` to control visual feedback (green/red indicators):

```tsx
<Scheduler
  data={schedulerData}
  onEventDrop={handleEventDrop}
  draggableConfig={{
    enabled: true,
    isValidDrop: (dragData) => {
      // Show red indicator if any conflicts exist
      return !dragData.conflicts || dragData.conflicts.length === 0;
    }
  }}
/>
```

### Visual Feedback

The scheduler provides comprehensive visual feedback during drag operations:

**Color Indicators:**
- **Green**: Valid drop position (no conflicts, sufficient capacity)
- **Red**: Conflict detected (warning - drop can still be accepted)
- **Gray**: Insufficient capacity (drop will be rejected)

**Conflict Tooltip:**
When dragging over a position with conflicts, a detailed tooltip appears showing:
- Number of conflicts detected
- Each conflicting event's title and subtitle
- Existing event time range
- Exact overlap period
- Overlap duration (hours and minutes)

The tooltip automatically positions itself next to the ghost element and updates in real-time as you drag.

**Internationalization:**
The conflict tooltip is fully internationalized and supports all scheduler languages:
- English (en)
- Spanish (es)
- German (de)
- Polish (pl)
- Lithuanian (lt)

The tooltip text automatically adapts to the current scheduler language setting.

**Note**: Visual feedback (red/green) is just a warning. The drop is only rejected if:
1. Capacity validation fails (insufficient capacity)
2. `onEventDrop` returns `false`

This allows you to show warnings but still accept drops with minor conflicts.

## Capacity-Based Validation

The scheduler includes built-in capacity validation to prevent events from being dropped on resources that cannot accommodate them. This is useful for scenarios like vehicle scheduling, room booking, or equipment allocation.

### Setup

1. Add a `capacity` property to your resources
2. Add a `totalPassengers` property to your events

```tsx
const schedulerData = [
  {
    id: "vehicle-1",
    label: { 
      title: "Van", 
      subtitle: "8 seats",
      icon: "🚐" 
    },
    capacity: 8, // Maximum capacity for this resource
    data: [
      [
        {
          id: "trip-1",
          title: "Airport Transfer",
          totalPassengers: 6, // Number of passengers for this event
          startDate: new Date("2024-01-01T10:00:00"),
          endDate: new Date("2024-01-01T12:00:00"),
          // ... other properties
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
    capacity: 4, // Maximum capacity for this resource
    data: [[]]
  }
];
```

### Behavior

When dragging an event with `totalPassengers` defined:

1. **Visual Feedback**: Resource rows with insufficient capacity are grayed out
2. **Drop Prevention**: Drops on insufficient-capacity resources are automatically rejected
3. **Color Indicators**:
   - Green highlight: Valid drop target (sufficient capacity)
   - Red highlight: Invalid drop target (insufficient capacity)
   - Gray overlay: Resource cannot accommodate the event

### Example

```tsx
// Event with 6 passengers
const event = {
  id: "trip-1",
  totalPassengers: 6,
  // ...
};

// When dragging this event:
// - Van (capacity: 8) → Green highlight, can drop ✓
// - Sedan (capacity: 4) → Gray overlay, cannot drop ✗
```

### Optional Validation

Capacity validation is optional and only applies when both properties are defined:

- If `capacity` is undefined on a resource, capacity validation is skipped
- If `totalPassengers` is undefined on an event, capacity validation is skipped
- This allows you to mix validated and non-validated resources/events


## Complete Example

```tsx
import React, { useState } from 'react';
import { Scheduler, EventDropData, EventDragData, SchedulerData } from '@bitnoi.se/react-scheduler';

function MyScheduler() {
  const [data, setData] = useState<SchedulerData>([/* your data */]);
  const [conflictInfo, setConflictInfo] = useState<string | null>(null);

  // Handle drop with detailed conflict information
  const handleEventDrop = async (dropData: EventDropData): Promise<boolean> => {
    // Check for conflicts with detailed information
    if (dropData.hasConflict && dropData.conflicts) {
      const totalOverlap = dropData.conflicts.reduce((sum, c) => sum + c.overlapDuration, 0);
      const totalHours = totalOverlap / (1000 * 60 * 60);
      
      // Show detailed conflict information
      const conflictDetails = dropData.conflicts.map(c => {
        const hours = (c.overlapDuration / (1000 * 60 * 60)).toFixed(1);
        return `"${c.event.title}" (${hours}h overlap)`;
      }).join(', ');
      
      // Reject if total overlap is more than 2 hours
      if (totalHours > 2) {
        alert(`Cannot drop: ${totalHours.toFixed(1)} hours of overlap with: ${conflictDetails}`);
        return false;
      }
      
      // Accept with warning for minor conflicts
      console.warn(`Accepting drop with minor conflicts: ${conflictDetails}`);
    }

    // Update local state
    setData(prevData => {
      return prevData.map(resource => {
        if (resource.id === dropData.newResourceId) {
          // Add to new resource
          return {
            ...resource,
            data: resource.data.map(row => [
              ...row,
              {
                ...dropData.event,
                startDate: dropData.newStartDate,
                endDate: dropData.newEndDate
              }
            ])
          };
        } else if (resource.id === dropData.originalResourceId) {
          // Remove from old resource
          return {
            ...resource,
            data: resource.data.map(row =>
              row.filter(e => e.segmentId !== dropData.event.segmentId)
            )
          };
        }
        return resource;
      });
    });

    // Save to backend
    try {
      await fetch(`/api/events/${dropData.event.segmentId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          startDate: dropData.newStartDate,
          endDate: dropData.newEndDate,
          resourceId: dropData.newResourceId
        })
      });
      return true;
    } catch (error) {
      console.error('Failed to save:', error);
      return false;
    }
  };

  // Handle drag with real-time conflict feedback
  const handleEventDrag = (dragData: EventDragData) => {
    if (dragData.conflicts && dragData.conflicts.length > 0) {
      const messages = dragData.conflicts.map(c => {
        const hours = (c.overlapDuration / (1000 * 60 * 60)).toFixed(1);
        return `${c.event.title} (${hours}h)`;
      });
      setConflictInfo(`⚠️ Conflicts: ${messages.join(', ')}`);
    } else {
      setConflictInfo(null);
    }
  };

  return (
    <>
      {conflictInfo && (
        <div style={{ 
          padding: '10px', 
          background: '#fff3cd', 
          border: '1px solid #ffc107',
          borderRadius: '4px',
          marginBottom: '10px'
        }}>
          {conflictInfo}
        </div>
      )}
      <Scheduler
        data={data}
        onEventDrop={handleEventDrop}
        onEventDrag={handleEventDrag}
        draggableConfig={{
          enabled: true,
          isDraggable: (event) => !event.locked,
          // Show red indicator for any conflicts (but still allow drop)
          isValidDrop: (dragData) => !dragData.conflicts || dragData.conflicts.length === 0
        }}
      />
    </>
  );
}
```

## Decision Flowchart

```
User drops event
       ↓
Check capacity validation
       ↓
   Sufficient? ──NO──→ [BLOCKED] Animate back, no callback
       ↓ YES
       ↓
Check for conflicts
       ↓
   Has conflicts? ──YES──→ Call onEventDrop with conflict data
       ↓ NO                      ↓
       ↓                    Consumer decides
       ↓                         ↓
       ↓                    true or false?
       ↓                         ↓
       └──────→ Call onEventDrop ←┘
                      ↓
                Consumer returns true or false
                      ↓
              true: Accept drop
              false: Animate back
```

## Behavior

- **Grid Snapping**: Events automatically snap to the grid based on zoom level (weeks/days/hours)
- **Duration Preservation**: Event duration is maintained during drag operations
- **Visual Feedback**: Ghost overlay shows where the event will be dropped
- **Animation**: Rejected drops animate back to original position
- **Click Detection**: Small movements (< 5 pixels) are treated as clicks, not drags
- **Auto-Scroll**: When dragging near the top or bottom edge (within 50px), the scheduler automatically scrolls to reveal more resources. Scroll speed increases as you get closer to the edge for smooth navigation.
- **Capacity Validation**: Resources with insufficient capacity are grayed out and cannot receive drops (hard block)
- **Conflict Detection**: Conflicts are shown but don't block drops - consumer decides

## Use Cases

### Vehicle Fleet Management
```tsx
// Vehicles with different capacities
const vehicles = [
  { id: "van", capacity: 8, label: { title: "Van" } },
  { id: "sedan", capacity: 4, label: { title: "Sedan" } },
  { id: "bus", capacity: 20, label: { title: "Bus" } }
];

// Trips with passenger counts
const trips = [
  { id: "trip-1", totalPassengers: 6, title: "Airport Transfer" },
  { id: "trip-2", totalPassengers: 15, title: "Group Tour" }
];

// When dragging:
// - Trip 1 (6 passengers) can only go to Van or Bus
// - Trip 2 (15 passengers) can only go to Bus
```

### Room Booking
```tsx
// Meeting rooms with different capacities
const rooms = [
  { id: "small", capacity: 4, label: { title: "Small Room" } },
  { id: "medium", capacity: 10, label: { title: "Medium Room" } },
  { id: "large", capacity: 30, label: { title: "Large Room" } }
];

// Meetings with attendee counts
const meetings = [
  { id: "meeting-1", totalPassengers: 8, title: "Team Sync" },
  { id: "meeting-2", totalPassengers: 25, title: "All Hands" }
];
```

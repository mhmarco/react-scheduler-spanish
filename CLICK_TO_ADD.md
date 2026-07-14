# Click-to-Add Events

Add events to the scheduler by clicking/dragging on the calendar grid.

## Quick Start

```tsx
import { Scheduler } from '@bitnoi.se/react-scheduler';

<Scheduler
  data={schedulerData}
  onTimeRangeSelect={handleTimeRangeSelect}
  onMultiTimeRangeSelect={handleMultiTimeRangeSelect}
  clickToAddConfig={{ enabled: true }}
/>
```

## The Flow

```
┌─────────────────────────────────────────────────────────────────┐
│  User clicks/drags on calendar                                  │
│         ↓                                                       │
│  onTimeRangeSelect(selection) fires                             │
│         ↓                                                       │
│  Consumer asks user: "Add more?" or "Accept this one?"          │
│         ↓                                                       │
│  ┌─────────────────┬────────────────────────────────┐           │
│  │ Add more        │ Accept                         │           │
│  │ return {        │ return {                       │           │
│  │   continueMulti │   continueMultiSelect: false   │           │
│  │   Select: true  │ }                              │           │
│  │ }               │ → Done, create event           │           │
│  └────────┬────────┴────────────────────────────────┘           │
│           ↓                                                     │
│  Multi-select mode enabled                                      │
│  Selection stays visible on calendar                            │
│  User can add more selections...                                │
│           ↓                                                     │
│  User clicks "Confirm" in toolbar                               │
│           ↓                                                     │
│  onMultiTimeRangeSelect(allSelections) fires                    │
│           ↓                                                     │
│  Consumer asks user: "Add more?" or "Accept all?"               │
│         ↓                                                       │
│  ┌─────────────────┬────────────────────────────────┐           │
│  │ Add more        │ Accept all                     │           │
│  │ return {        │ return {                       │           │
│  │   continueMulti │   continueMultiSelect: false   │           │
│  │   Select: true  │ }                              │           │
│  │ }               │ → Done, create all events      │           │
│  │ ↓               └────────────────────────────────┘           │
│  │ All selections stay visible                                  │
│  │ User can add more...                                         │
│  │ (loop back to "User clicks Confirm")                         │
│  └──────────────────────────────────────────────────────────────┘
```

## Implementation

### Option 1: Single Event Only

```tsx
const handleTimeRangeSelect = (selection) => {
  // Create event immediately
  createEvent(selection);
  return { continueMultiSelect: false };
};

<Scheduler
  onTimeRangeSelect={handleTimeRangeSelect}
  clickToAddConfig={{ enabled: true }}
/>
```

### Option 2: Let User Choose (Recommended)

```tsx
const handleTimeRangeSelect = (selection) => {
  // Ask user if they want to add more
  const addMore = window.confirm(
    `Selected: ${selection.resourceLabel.title}\n` +
    `${selection.startDate.toLocaleDateString()} - ${selection.endDate.toLocaleDateString()}\n\n` +
    `OK = Add more events\n` +
    `Cancel = Accept this event`
  );
  
  if (addMore) {
    return { continueMultiSelect: true };
  } else {
    createEvent(selection);
    return { continueMultiSelect: false };
  }
};

const handleMultiTimeRangeSelect = (selections) => {
  // Ask user if they want to add more
  const summary = selections.map(s => 
    `• ${s.resourceLabel.title}: ${s.startDate.toLocaleDateString()}`
  ).join('\n');
  
  const addMore = window.confirm(
    `${selections.length} selection(s):\n${summary}\n\n` +
    `OK = Add more events\n` +
    `Cancel = Accept all`
  );
  
  if (addMore) {
    // All selections stay visible, user can add more
    return { continueMultiSelect: true };
  } else {
    // Create all events
    selections.forEach(s => createEvent(s));
    return { continueMultiSelect: false };
  }
};

<Scheduler
  onTimeRangeSelect={handleTimeRangeSelect}
  onMultiTimeRangeSelect={handleMultiTimeRangeSelect}
  clickToAddConfig={{ enabled: true }}
/>
```

### Option 3: Always Multi-Select

```tsx
const handleTimeRangeSelect = () => {
  // Always enable multi-select
  return { continueMultiSelect: true };
};

const handleMultiTimeRangeSelect = (selections) => {
  // Create all events when user confirms
  selections.forEach(s => createEvent(s));
  return { continueMultiSelect: false };
};
```

## Selection Data

Each selection contains:

```ts
type TimeRangeSelectionData = {
  startDate: Date;           // Start of selected range
  endDate: Date;             // End of selected range
  resourceId: string;        // ID of the resource row
  resourceLabel: {           // Resource display info
    icon: string;
    title: string;
    subtitle: string;
  };
  zoomLevel: 0 | 1 | 2;      // 0=weeks, 1=days, 2=hours
  hasConflict?: boolean;     // Overlaps with existing events?
  conflicts?: ConflictDetails[]; // Details about conflicts
};
```

## Conflict Detection

Conflicts are automatically detected against:
- Existing events in the scheduler
- Other pending selections (in multi-select mode)

```tsx
const handleTimeRangeSelect = (selection) => {
  if (selection.hasConflict) {
    const proceed = window.confirm(
      `⚠️ This overlaps with ${selection.conflicts.length} event(s). Continue?`
    );
    if (!proceed) return { continueMultiSelect: false };
  }
  // ... continue with selection
};
```

## Multi-Select UI

When multi-select is active:
- Pending selections appear as green boxes (orange if conflicts)
- Selections are **draggable** - reposition by dragging
- Click × to remove individual selections
- Toolbar shows count and "Confirm" / "Clear All" buttons
- Press `Escape` to clear all

## Configuration

```tsx
clickToAddConfig={{
  enabled: true,  // Required to enable the feature
  isSelectable: (resourceId, startDate, endDate) => {
    // Optional: control which slots are selectable
    const day = startDate.getDay();
    return day !== 0 && day !== 6; // No weekends
  }
}}
```

## Key Points

1. **Consumer controls the flow** - Scheduler just provides selection data
2. **Return `{ continueMultiSelect: true }`** to keep adding events
3. **Return `{ continueMultiSelect: false }`** to finalize
4. **Selections persist** when continuing - user sees all pending events
5. **Same callback pattern** for initial and subsequent confirmations

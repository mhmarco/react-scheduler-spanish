# Requirements Document

## Introduction

This feature enables users to interactively reposition scheduled events through drag-and-drop interactions on the React Scheduler canvas. The system provides visual feedback during dragging and exposes conflict detection hooks to allow consuming applications to implement their own validation and conflict resolution logic.

## Glossary

- **Scheduler**: The React Scheduler component that renders the Gantt chart timeline
- **Event**: A scheduled item (also called "tile" or "project" in the codebase) displayed on the timeline
- **Canvas**: The HTML canvas element used for rendering the scheduler grid and events
- **Consumer Application**: The application that integrates and uses the React Scheduler library
- **Drag Operation**: The user interaction sequence of mousedown, mousemove, and mouseup on an event
- **Drop Target**: The new time position and/or resource row where an event is being moved
- **Conflict**: A scheduling constraint violation detected by the consumer application (e.g., overlapping events, resource unavailability)
- **Ghost Element**: A semi-transparent visual representation of the event being dragged
- **Snap Behavior**: Automatic alignment of events to time grid boundaries during drag operations

## Requirements

### Requirement 1

**User Story:** As a project manager, I want to drag events to different time slots, so that I can quickly reschedule tasks without manual data entry

#### Acceptance Criteria

1. WHEN a user presses the mouse button on an event, THE Scheduler SHALL initiate a drag operation
2. WHILE a drag operation is active, THE Scheduler SHALL display a ghost element at the cursor position
3. WHEN a user moves the cursor during a drag operation, THE Scheduler SHALL update the ghost element position in real-time
4. WHEN a user releases the mouse button, THE Scheduler SHALL calculate the new time position based on the drop location
5. WHEN a drop operation completes, THE Scheduler SHALL invoke a callback function with the event identifier, original position, and new position

### Requirement 2

**User Story:** As a resource manager, I want to drag events between different resource rows, so that I can reassign tasks to different team members

#### Acceptance Criteria

1. WHEN a user drags an event vertically across resource rows, THE Scheduler SHALL detect the target resource row
2. WHILE dragging across rows, THE Scheduler SHALL highlight the target resource row
3. WHEN a user drops an event on a different resource row, THE Scheduler SHALL include the new resource identifier in the callback data
4. THE Scheduler SHALL support drag operations that change both time position and resource assignment simultaneously

### Requirement 3

**User Story:** As a developer integrating the scheduler, I want to validate drops before they are applied, so that I can prevent scheduling conflicts according to my business rules

#### Acceptance Criteria

1. WHEN a drop operation occurs, THE Scheduler SHALL invoke an onEventDrop callback with event data and proposed changes
2. THE Scheduler SHALL wait for the consumer application to process the drop before updating the visual state
3. IF the consumer application rejects the drop, THEN THE Scheduler SHALL return the event to its original position with animation
4. IF the consumer application accepts the drop, THEN THE Scheduler SHALL update the event position with animation
5. THE Scheduler SHALL provide the original event data and proposed new data in the callback parameters

### Requirement 4

**User Story:** As a user dragging events, I want visual feedback about where the event will land, so that I can accurately position events

#### Acceptance Criteria

1. WHILE dragging an event, THE Scheduler SHALL display grid snapping indicators at valid drop positions
2. THE Scheduler SHALL snap the ghost element to the nearest time grid boundary based on the current zoom level
3. WHILE dragging, THE Scheduler SHALL display the calculated start time and end time of the proposed position
4. THE Scheduler SHALL maintain the event duration during horizontal drag operations
5. WHERE the consumer provides conflict data, THE Scheduler SHALL visually indicate conflicting time slots with distinct styling

### Requirement 5

**User Story:** As a user, I want smooth and responsive drag interactions, so that the interface feels natural and performant

#### Acceptance Criteria

1. THE Scheduler SHALL update the ghost element position within 16 milliseconds of cursor movement
2. THE Scheduler SHALL use requestAnimationFrame for rendering updates during drag operations
3. WHEN a drop animation completes, THE Scheduler SHALL restore normal event rendering within 300 milliseconds
4. THE Scheduler SHALL prevent text selection and other default browser behaviors during drag operations
5. THE Scheduler SHALL change the cursor style to indicate draggable events on hover

### Requirement 6

**User Story:** As a developer, I want to control which events are draggable, so that I can implement role-based permissions and locked events

#### Acceptance Criteria

1. WHERE an event has a draggable property set to false, THE Scheduler SHALL not initiate drag operations for that event
2. WHERE a global draggable configuration is disabled, THE Scheduler SHALL not allow any drag operations
3. THE Scheduler SHALL provide a callback function to dynamically determine if an event is draggable based on runtime conditions
4. WHEN hovering over a non-draggable event, THE Scheduler SHALL display a standard cursor instead of a drag cursor

### Requirement 7

**User Story:** As a user, I want click interactions to continue working normally, so that existing tooltip and selection functionality is not disrupted by drag-and-drop

#### Acceptance Criteria

1. WHEN a user clicks on an event without moving the cursor, THE Scheduler SHALL trigger the existing onClick callback
2. THE Scheduler SHALL distinguish between a click and a drag based on cursor movement distance
3. IF cursor movement is less than 5 pixels before mouseup, THEN THE Scheduler SHALL treat the interaction as a click
4. IF cursor movement exceeds 5 pixels before mouseup, THEN THE Scheduler SHALL treat the interaction as a drag operation
5. THE Scheduler SHALL maintain all existing click-based functionality including tooltip display and event selection

### Requirement 8

**User Story:** As a developer, I want to receive detailed event data during drag operations, so that I can provide real-time feedback to users

#### Acceptance Criteria

1. WHILE a drag operation is in progress, THE Scheduler SHALL invoke an onEventDrag callback with current position data
2. THE Scheduler SHALL throttle the onEventDrag callback to fire at most every 100 milliseconds
3. THE Scheduler SHALL include the event identifier, current time position, and current resource in the callback data
4. WHERE the consumer provides validation feedback, THE Scheduler SHALL update the ghost element styling to indicate valid or invalid drop targets

### Requirement 9

**User Story:** As a fleet manager, I want to prevent events from being dropped on resources with insufficient capacity, so that I don't overbook vehicles or rooms

#### Acceptance Criteria

1. WHEN an event has a `totalPassengers` property AND a resource has a `capacity` property, THE Scheduler SHALL validate capacity during drag
2. WHILE dragging an event, THE Scheduler SHALL gray out all resource rows where `event.totalPassengers > resource.capacity`
3. WHEN hovering over a resource with insufficient capacity, THE Scheduler SHALL display a red highlight instead of green
4. WHEN attempting to drop on a resource with insufficient capacity, THE Scheduler SHALL reject the drop and animate the event back to its original position
5. THE Scheduler SHALL include capacity information (`resourceCapacity`, `hasCapacity`) in the drop target data
6. WHERE either `totalPassengers` or `capacity` is undefined, THE Scheduler SHALL skip capacity validation for that event/resource pair

# Testing Capacity Validation

## Quick Start

1. **Install dependencies** (if not already done):
   ```bash
   yarn install
   ```

2. **Start the development server**:
   ```bash
   yarn dev
   ```

3. **Open your browser** to `http://localhost:5173`

## What to Test

The mock data now includes vehicles with different capacities:

- 🚐 **Van** - 8 seats
- 🚗 **Sedan** - 4 seats  
- 🚌 **Bus** - 20 seats
- 🚙 **SUV** - 6 seats

Each event (trip) has a random number of passengers (1-12).

### Test Scenarios

#### Scenario 1: Valid Drop (Sufficient Capacity)
1. Find an event with **3 passengers**
2. Drag it to any vehicle
3. ✅ All vehicles should show **green highlight** (all can accommodate 3 passengers)
4. Drop should be **accepted**

#### Scenario 2: Invalid Drop (Insufficient Capacity)
1. Find an event with **10 passengers**
2. Start dragging it
3. ❌ **Sedans (4 seats)** and **SUVs (6 seats)** should be **grayed out**
4. ❌ **Vans (8 seats)** should be **grayed out**
5. ✅ Only **Buses (20 seats)** should show **green highlight**
6. Try dropping on a Sedan → Event should **animate back** to original position

#### Scenario 3: Borderline Capacity
1. Find an event with **8 passengers**
2. Drag it around
3. ✅ **Vans (8 seats)** should show **green highlight** (exact match)
4. ✅ **Buses (20 seats)** should show **green highlight**
5. ❌ **Sedans (4 seats)** and **SUVs (6 seats)** should be **grayed out**

#### Scenario 4: Click vs Drag
1. Click on an event without moving the mouse
2. ✅ Should trigger the **click handler** (check console)
3. ❌ Should **NOT** initiate a drag operation

## Visual Indicators

During drag operations, you should see:

- **Gray Overlay**: Applied to resource rows that cannot accommodate the event
- **Green Highlight**: Valid drop target (sufficient capacity)
- **Red Highlight**: Invalid drop target when hovering (insufficient capacity)
- **Ghost Element**: Semi-transparent copy of the event following your cursor

## Console Output

Check the browser console for:

```
🔄 Dragging: [Event Title] to [Resource ID]
🚀 Event dropped: {
  event: "Van #1",
  passengers: 6,
  from: "abc-123",
  to: "def-456",
  capacity: 8
}
```

## Adjusting Test Data

To modify the test data, edit `src/mock/appMock.ts`:

```typescript
// Change vehicle capacities
const vehicleTypes = [
  { icon: "🚐", type: "Van", capacity: 8 },
  { icon: "🚗", type: "Sedan", capacity: 4 },
  // Add more vehicle types...
];

// Change passenger range (currently 1-12)
totalPassengers: Math.ceil(Math.random() * 12)
```

## Building for Production

Once testing is complete:

```bash
# Run type checking
yarn typecheck

# Run linting
yarn lint

# Build the library
yarn build

# Preview the production build
yarn preview
```

The production build will be in the `dist/` folder, ready for publishing or integration.

## Troubleshooting

### Events won't drag
- Check that `draggableConfig={{ enabled: true }}` is set in the Scheduler component
- Verify events don't have `draggable: false` property

### Capacity validation not working
- Ensure resources have `capacity` property defined
- Ensure events have `totalPassengers` property defined
- Check browser console for any errors

### Gray overlays not showing
- Verify the event being dragged has `totalPassengers` defined
- Check that resources have `capacity` defined
- Try dragging an event with more passengers than the smallest vehicle capacity

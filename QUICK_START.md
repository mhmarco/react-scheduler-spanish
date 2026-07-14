# Quick Start Guide - Capacity Validation Testing

## 🚀 Run the Development Server

```bash
yarn dev
```

Then open `http://localhost:5173` in your browser.

## 🧪 What You'll See

The test app now includes **vehicle scheduling** with capacity validation:

- **🚐 Vans** (8 seats)
- **🚗 Sedans** (4 seats)  
- **🚌 Buses** (20 seats)
- **🚙 SUVs** (6 seats)

Each trip has a random number of passengers (shown in the subtitle).

## 🎯 Try This

1. **Find a trip with 10+ passengers** (look at the subtitle)
2. **Start dragging it**
3. **Watch the magic:**
   - Sedans and SUVs will be **grayed out** ❌
   - Only Buses will show **green highlight** ✅
4. **Try dropping on a Sedan** → It will **bounce back** to the original position!

## 📊 Console Logs

Open your browser console to see:
- `🔄 Dragging:` messages while you drag
- `🚀 Event dropped:` messages when you drop (with capacity info)

## 🏗️ Build for Production

```bash
# Check everything is good
yarn typecheck
yarn lint

# Build the library
yarn build

# The output will be in dist/ folder
```

## 📝 Key Files Modified

- `src/App.tsx` - Added drag-and-drop handlers
- `src/mock/appMock.ts` - Added vehicle types with capacities
- `src/types/global.ts` - Added `capacity` and `totalPassengers` fields
- `src/hooks/useDragAndDrop.ts` - Added capacity validation logic
- `src/components/DragOverlay/` - Added visual indicators

## 🎨 Visual Feedback

| Indicator | Meaning |
|-----------|---------|
| Gray overlay | Resource cannot accommodate the event |
| Green highlight | Valid drop target (sufficient capacity) |
| Red highlight | Invalid drop target (insufficient capacity) |
| Ghost element | Semi-transparent event following cursor |

## 💡 Tips

- **Small movements** (< 5 pixels) are treated as **clicks**, not drags
- **Event duration** is preserved during drag operations
- **Capacity validation** is optional - only applies when both `capacity` and `totalPassengers` are defined
- Check `DRAG_AND_DROP.md` for full API documentation

Enjoy testing! 🎉

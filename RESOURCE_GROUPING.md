# Resource Grouping & Subcontract Units

## Overview

The Scheduler supports two resource organization features:

1. **Category Grouping** — Group resources into collapsible sections by vehicle type, capacity range, or any custom classification
2. **Subcontract Units** — Visually separate third-party/subcontract resources at the bottom with distinct styling

Both features are optional and backward-compatible. Existing integrations work without changes.

---

## Quick Start

```tsx
import { Scheduler, SchedulerData, SchedulerCategory } from "@bitnoi.se/react-scheduler";

// Define categories (optional)
const categories: SchedulerCategory[] = [
  { id: "hiace", name: "Hiace", minPassengers: 1, maxPassengers: 14 },
  { id: "rosa", name: "Rosa", minPassengers: 15, maxPassengers: 28 },
  { id: "bus", name: "Bus", minPassengers: 29, maxPassengers: 45 }
];

// Build your data with categoryId and isSubcontract
const data: SchedulerData = [
  {
    id: "vehicle-1",
    label: { icon: "🚐", title: "Hiace #1", subtitle: "14 seats" },
    capacity: 14,
    categoryId: "hiace",       // Links to category
    data: [/* events */]
  },
  {
    id: "vehicle-2",
    label: { icon: "🚌", title: "Bus #1", subtitle: "45 seats" },
    capacity: 45,
    categoryId: "bus",
    data: [/* events */]
  },
  {
    id: "sub-1",
    label: { icon: "🏢", title: "Alpha Transport #1", subtitle: "External" },
    capacity: 12,
    isSubcontract: true,       // Grouped at bottom
    data: [/* events */]
  }
];

<Scheduler data={data} categories={categories} />
```

---

## Data Model Reference

### SchedulerRow (updated)

```typescript
type SchedulerRow = {
  id: string;
  label: SchedulerRowLabel;
  data: SchedulerProjectData[];
  capacity?: number;          // Vehicle/resource capacity (used for grouping + drag validation)
  isSubcontract?: boolean;    // NEW: marks as subcontract unit
  categoryId?: string;        // NEW: links to a SchedulerCategory.id
};
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `isSubcontract` | `boolean` | No | When `true`, this resource renders in a separate "Subcontract" section at the bottom with amber-tinted styling. Default: `false` |
| `categoryId` | `string` | No | Must match a `SchedulerCategory.id`. Groups this resource under that category header. Ignored if no `categories` prop is provided |
| `capacity` | `number` | No | Used for auto-grouping when no categories are provided, and for drag-and-drop capacity validation |

### SchedulerCategory (new)

```typescript
type SchedulerCategory = {
  id: string;              // Unique identifier
  name: string;            // Display name shown in group header
  minPassengers: number;   // Minimum capacity for this category
  maxPassengers: number;   // Maximum capacity for this category
};
```

Categories are sorted by `maxPassengers` ascending in the UI.

### SchedulerProps (updated)

```typescript
type SchedulerProps = {
  data: SchedulerData;
  categories?: SchedulerCategory[];  // NEW: optional category definitions
  // ... all existing props unchanged
};
```

---

## Behavior Matrix

| `categories` provided? | `capacity` on rows? | `isSubcontract` on rows? | Result |
|------------------------|---------------------|--------------------------|--------|
| No | No | No | Flat list (original behavior) |
| No | No | Yes | Flat list + subcontract section at bottom |
| No | Yes (2+ distinct values) | No | Auto-grouped by capacity ranges |
| No | Yes (2+ distinct values) | Yes | Auto-grouped by capacity + subcontract section |
| Yes | N/A | No | Grouped by provided categories |
| Yes | N/A | Yes | Grouped by categories + subcontract section |

### Auto-Grouping (no categories provided)

When `categories` is not provided but resources have `capacity` values with at least 2 distinct values, the scheduler automatically groups resources using a natural breaks algorithm:

- Collects all unique `capacity` values from non-subcontract units
- Finds natural break points (largest gaps between consecutive values)
- Creates up to 5 groups
- Group names are purely the range: "14 pax", "28-45 pax", etc.
- Groups are ordered ascending by capacity

This requires no configuration — just set `capacity` on your `SchedulerRow` objects.

---

## Subcontract Units

### Marking a resource as subcontract

```typescript
const data: SchedulerData = [
  // Own fleet
  { id: "v1", label: { ... }, data: [...] },
  { id: "v2", label: { ... }, data: [...] },
  // Subcontract
  { id: "s1", label: { ... }, isSubcontract: true, data: [...] },
  { id: "s2", label: { ... }, isSubcontract: true, data: [...] },
];
```

Subcontract units always render at the bottom, below all own/categorized units, with:
- An amber-tinted left accent bar on the group header
- A warm background tint on each subcontract row in the left column
- A collapsible section header showing the count

### Translating the "Subcontract" label

The group header label is translatable. Add `subcontract` to your custom translations:

```typescript
const customTranslations = [{
  id: "en",
  translateCode: "en",
  dayjsTranslations: "en",
  lang: {
    // ... other translation keys
    subcontract: "Subcontract"  // or "Subcontrato", "Podwykonawca", etc.
  }
}];

<Scheduler
  data={data}
  config={{ translations: customTranslations }}
/>
```

Built-in translations: English ("Subcontract"), Spanish ("Subcontrato"), German ("Subunternehmer"), Polish ("Podwykonawca"), Lithuanian ("Subrangovas").

---

## Category Grouping

### Defining categories

```typescript
const categories: SchedulerCategory[] = [
  { id: "hiace", name: "Hiace", minPassengers: 1, maxPassengers: 14 },
  { id: "rosa", name: "Rosa", minPassengers: 15, maxPassengers: 28 },
  { id: "bus", name: "Bus", minPassengers: 29, maxPassengers: 45 }
];
```

### Assigning resources to categories

Set `categoryId` on each `SchedulerRow` to match a category `id`:

```typescript
const data: SchedulerData = [
  { id: "v1", label: { ... }, categoryId: "hiace", capacity: 14, data: [...] },
  { id: "v2", label: { ... }, categoryId: "rosa", capacity: 28, data: [...] },
  { id: "v3", label: { ... }, categoryId: "bus", capacity: 45, data: [...] },
];

<Scheduler data={data} categories={categories} />
```

### Display order

1. Category groups — sorted by `maxPassengers` ascending
2. Uncategorized own units — resources without `categoryId` (if any)
3. Subcontract units — always last

### Collapse/Expand

- Each group header has a chevron toggle to collapse/expand
- An expand/collapse all button appears next to the search bar when groups exist
- Collapsed groups hide their resources from both the left column and the grid

---

## Theme Customization

Three new theme colors control subcontract styling:

```typescript
<Scheduler
  config={{
    theme: {
      light: {
        subcontractBg: "#FFF7ED",       // Background tint for subcontract rows
        subcontractBorder: "#F59E0B",   // Accent color for subcontract header
        subcontractText: "#92400E"      // Text color in subcontract header
      },
      dark: {
        subcontractBg: "#422006",
        subcontractBorder: "#D97706",
        subcontractText: "#FCD34D"
      }
    }
  }}
/>
```

---

## Migration Guide

### From previous versions (no grouping)

No changes required. The scheduler is fully backward-compatible:

- If you don't pass `categories`, no category headers appear
- If you don't set `isSubcontract`, no subcontract section appears
- If you don't set `capacity`, no auto-grouping occurs
- All existing props and callbacks work identically

### Adding subcontract support

1. Add `isSubcontract: true` to your subcontract resources
2. Optionally add the `subcontract` translation key to your custom translations
3. Done — no other changes needed

### Adding category grouping

1. Define your `SchedulerCategory[]` array
2. Add `categoryId` to each `SchedulerRow`
3. Pass `categories` to `<Scheduler>`
4. Done — groups appear automatically with collapse/expand

### Using auto-grouping

1. Ensure `capacity` is set on your `SchedulerRow` objects
2. Don't pass `categories` — the scheduler auto-groups by capacity
3. Done — groups appear based on natural capacity breaks

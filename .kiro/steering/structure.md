# Project Structure

## Directory Organization

```
src/
├── assets/          # SVG icons and images
│   └── icons/       # Icon components and SVG files
├── components/      # React components (main export point)
│   ├── Scheduler/   # Main scheduler component
│   ├── Calendar/    # Calendar grid and rendering
│   ├── [Component]/ # Individual feature components
│   └── index.tsx    # Central component exports
├── constants.ts     # Global constants (cell dimensions, etc.)
├── context/         # React context providers
│   ├── CalendarProvider/
│   └── LocaleProvider/
├── hooks/           # Custom React hooks
├── locales/         # Translation files (en, pl, es, de, lt)
├── mock/            # Mock data for development
├── types/           # Global TypeScript types and guards
├── utils/           # Utility functions
│   ├── drawGrid/    # Canvas grid rendering logic
│   └── drawHeader/  # Canvas header rendering logic
├── index.ts         # Library entry point
└── main.tsx         # Dev app entry point
```

## Component Structure Convention

Each component follows this pattern:

```
ComponentName/
├── ComponentName.tsx    # Main component file (camelCase)
├── index.ts            # Export: export { default } from "./ComponentName"
├── styles.ts           # Styled components (optional)
├── types.ts            # Component-specific types (optional)
```

## Key Architectural Patterns

- **Canvas-based rendering** - Grid and tiles rendered on HTML canvas for performance
- **Context providers** - CalendarProvider manages state, LocaleProvider handles i18n
- **Styled Components** - All styling via styled-components with theme support
- **Path aliases** - Use `@/` prefix for imports from `src/` (e.g., `@/components`)
- **Centralized exports** - Components exported through `src/components/index.tsx`
- **Type safety** - Strict TypeScript with explicit types in separate files

## Import Rules

- **Forbidden**: Internal component imports like `@/components/Calendar/Grid`
- **Required**: Import from `@/components` barrel export only
- **Import order**: builtin → external → internal → parent → sibling

## File Naming

- Components: camelCase (e.g., `ExampleComponent.tsx`)
- Files must match exported name (enforced by ESLint `filenames/match-exported`)
- Types: camelCase with `.ts` extension
- Styles: camelCase with `.ts` extension (styled-components)

## Entry Points

- **Library**: `src/index.ts` - Exports Scheduler component and types
- **Development**: `src/main.tsx` - Renders App.tsx for local testing
- **Build output**: `dist/` - Contains compiled library files

# Technology Stack

## Core Technologies

- **React 18.3.1** - UI framework
- **TypeScript 4.9.3** - Type safety and development experience
- **Styled Components 5.3.8** - CSS-in-JS styling solution
- **Vite 4.1.0** - Build tool and dev server
- **Canvas API** - High-performance rendering for grid and tiles

## Key Dependencies

- **dayjs** - Date manipulation and formatting
- **lodash.debounce** - Performance optimization for event handlers
- **styled-normalize** - CSS normalization

## Development Tools

- **ESLint** - Code linting with TypeScript, React, and import rules
- **Prettier** - Code formatting (tabWidth: 2, printWidth: 100, double quotes)
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files
- **vite-plugin-dts** - TypeScript declaration generation
- **vite-plugin-svgr** - SVG as React components

## Build Configuration

- Path alias: `@/` maps to `./src/`
- Library output: UMD and ESM formats
- External dependencies: react, react-dom, react/jsx-runtime
- TypeScript strict mode enabled
- Declaration files generated and bundled

## Common Commands

```bash
# Development
yarn dev              # Start dev server on http://localhost:5173

# Building
yarn build            # TypeScript compile + Vite build
yarn preview          # Preview production build

# Code Quality
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint issues
yarn format           # Format with Prettier
yarn typecheck        # Run TypeScript compiler check

# Setup
yarn install          # Install dependencies
yarn prepare          # Install Husky hooks (runs automatically)
```

## Node Version

Check `.nvmrc` for required Node.js version.

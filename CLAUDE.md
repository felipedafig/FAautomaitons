# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

All commands run from the repo root via Turborepo:

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm run lint         # ESLint (flat config, v9)
npm run format       # Prettier
npm run typecheck    # tsc --noEmit
```

No test framework is configured.

## Architecture

Turborepo monorepo with npm workspaces:

- **apps/web** — Next.js 16 app (App Router, React 19, Server Components by default). This is the main hotel automation workflows landing page.
- **packages/ui** — Shared component library built on shadcn/ui (radix-nova style). Contains all UI components, hooks, styles, and utilities.
- **packages/eslint-config** — Shared ESLint flat configs (`./base`, `./next-js`, `./react-internal`).
- **packages/typescript-config** — Shared tsconfig files (`base.json`, `nextjs.json`, `react-library.json`).

## Import Conventions

Components from the UI package are imported via workspace exports:

```tsx
import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
```

The UI package exports are mapped in `packages/ui/package.json` under `"exports"`:
- `./components/*` → `src/components/*.tsx`
- `./lib/*` → `src/lib/*.ts`
- `./hooks/*` → `src/hooks/*.ts`
- `./globals.css` → `src/styles/globals.css`

## Code Style

- No semicolons, double quotes, 2-space indent, 80 char line width, ES5 trailing commas, LF line endings
- Prettier with `prettier-plugin-tailwindcss` (functions: `cn`, `cva`)
- Use `"use client"` directive only for interactive components; default to Server Components
- Component variants use CVA (class-variance-authority)
- Tailwind CSS v4 with PostCSS and oklch color variables

## Key Patterns

- **Dark mode**: `next-themes` with system default; press `d` key to toggle (custom hook in `apps/web/hooks/`)
- **Styling**: Tailwind v4 `@import` syntax in `packages/ui/src/styles/globals.css`; CSS variables for theming
- **Animation**: Framer Motion for transitions, Three.js/WebGL for 3D backgrounds, canvas-confetti for celebrations
- **Adding shadcn components**: `pnpm dlx shadcn@latest add <component> -c apps/web`

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

## Parallel Worktrees

This repo uses git worktrees to run multiple Claude Code sessions in parallel. Each worktree is a full copy of the repo on its own branch.

| Worktree | Path | Branch | Purpose |
|----------|------|--------|---------|
| **Main** | `C:\dev\Personal\FAautomaitons` | `master` | Primary development — merge target |
| **WT-1** | `C:\dev\Personal\FAautomaitons\.worktrees\wt-1` | `worktree-1` | Parallel task |
| **WT-2** | `C:\dev\Personal\FAautomaitons\.worktrees\wt-2` | `worktree-2` | Parallel task |

### Rules for worktree sessions

- **Never edit the same file** in two worktrees simultaneously — this causes merge conflicts.
- Each worktree has its own branch. When work is done, merge into `master` from the main terminal.
- Worktrees share the same `.git` — commits, stashes, and refs are visible across all.
- `.env.local` files must be **manually copied** into new worktrees (they are gitignored):
  ```bash
  cp apps/web/.env.local .worktrees/wt-1/apps/web/.env.local
  cp apps/web/.env.local .worktrees/wt-2/apps/web/.env.local
  ```
- Run `npm install` inside each worktree after creation (they need their own `node_modules`).
- The `.worktrees/` folder is gitignored — never commit it.

### Merging worktree work back

```bash
# From the main terminal (master branch):
git merge worktree-1
git merge worktree-2
```

### Cleanup

```bash
git worktree remove .worktrees/wt-1
git worktree remove .worktrees/wt-2
git branch -d worktree-1 worktree-2
```

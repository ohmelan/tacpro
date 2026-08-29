# TAC — The Audit Companion

Premium motion website for TAC (tax, GST, audit, compliance, and business registration
services). Rebuilt from the ground up with a scroll-choreographed, motion-first design.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run lint    # eslint
npx prettier --write .   # format
```

## Project structure

```
src/
  app/                 routes (App Router)
  components/
    ui/                base primitives (Button, Container, Section, ...)
    sections/           page-level composed sections (Hero, Services, ...)
  lib/                 utilities, motion helpers, constants
  content/             structured copy/content per page
docs/                  design system notes, planning docs
```

## Git flow

- `main` — always deployable. No server-side branch protection is configured (this repo is
  private on a free GitHub plan, which doesn't support it); discipline stands in for it — no
  force-push, no direct deletion, merge via PR only.
- `develop` — integration branch
- `feature/<name>` — one branch per unit of work, merged into `develop` via PR,
  then `develop` → `main` at each milestone

Conventional commits (`feat:`, `fix:`, `chore:`, `style:`, `docs:`).

## Status

Phase 1 (project setup) in progress. See `docs/` for the design system and phased build plan.
# tac_website
# tac_website
# tac_website

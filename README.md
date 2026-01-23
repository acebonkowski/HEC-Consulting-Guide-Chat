# HEC-Consulting-Guide

Public website (one-page) for the HEC Paris MBA Consulting Club, built to match the provided PRD.

## Tech stack (pinned)
- Next.js (App Router) + TypeScript
- React
- Tailwind CSS v4 (CSS-first)
- Feather Icons via `react-feather` (Feather v4.29.0)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/page.tsx`: Public one-page site (anchors)
- `app/consulting-guide/page.tsx`: Placeholder route (linked from nav/CTA)
- `components/*`: UI components (navbar, footer, cards, buttons)
- `app/globals.css`: Tailwind import + PRD design tokens in `@theme`

## Design tokens (PRD palette)

Defined in `app/globals.css` via Tailwind v4 `@theme`:

- `bg-planetary`, `text-galaxy`, `bg-universe`, `bg-venus`, `bg-sky`, `bg-meteor`, `bg-milky-way`

## Replace illustration

Replace `/public/illustration-placeholder.svg` with a corporate-friendly unDraw asset (or any other illustration you own the rights to).

## PRD reference
- `docs/PRD.md`

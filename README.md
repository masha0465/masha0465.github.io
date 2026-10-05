# Sunah Kim — QA Engineer Portfolio

Personal portfolio of 김선아 (Sunah Kim), QA Engineer with 10 years of software QA experience.
Live: https://masha0465.github.io/

> Building Testable Systems, Not Just Tests.

## Stack

- Next.js (App Router, static export) · React · TypeScript
- Tailwind CSS v4 with CSS-variable design tokens (dark / light)
- No animation library: CSS transitions + a small IntersectionObserver hook
- Deployed to GitHub Pages via GitHub Actions on every push to `main`

## Structure

```
src/
  app/          layout, page, global styles
  components/   layout · hero · about · common (Reveal, Chip, StatusBadge …)
  data/         all content (profile, growth path, nav, projects …) — UI reads from here
  hooks/        useInView, useTheme
scripts/        screenshot.mjs — multi-viewport visual check using system Chrome
docs/           design notes (phase1-design.md)
```

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npx tsc --noEmit
npm run build        # static export → out/
node scripts/screenshot.mjs http://localhost:3000/ docs/shots
```

Content is written from the author's career document only; nothing is added that is not in it.

# Drafted By

## What is Drafted By
Mother company behind three AI-powered lesson planning products:
- PrepareMesCours (preparemescours.fr) — French market
- Draft My Lesson (draftmylesson.com) — English market
- Przygotuj Lekcje (przygotujlekcje.pl) — Polish market

## Stack
Next.js 15, React 19, TypeScript, Tailwind CSS 4

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check (tsc --noEmit)

## Deployment
- Domain: draftedby.com
- Deployed via Cloudflare Tunnel on CT 103, port 3100:3000
- Container: `draftedby-website`
- Dockerfile: standalone output mode

## Pages
- `/` — Landing page
- `/products` — Product showcase (PMC, DML, PL)
- `/about` — About the company
- `/contact` — Contact form
- `/legal` — Legal notice

## Project Structure
```
src/
  app/        # Next.js App Router (pages + layouts)
  components/ # Shared React components
  lib/        # Utilities
public/       # Static assets
```

## Conventions
- English only (no i18n)
- This is a static marketing site — no database, no auth
- No emojis — use quality SVG icons
- Source on GitHub: jdmcasanova/draftedby

# TypeMaster — Typing Speed Training

A professional typing speed training web app: timed typing tests, accuracy
tracking, lessons, and progress stats — all client-side, no login, no backend.

## Features

- **Typing tests** — timed sessions with live WPM (words per minute) and accuracy feedback
- **Progress tracking** — session history and performance stats
- **Lessons & practice modes** — structured exercises to improve speed and precision
- **Responsive UI** — built with shadcn/ui + Tailwind CSS, works on desktop and mobile

## Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS, shadcn/ui, Radix UI primitives
- React Router, React Hook Form, Recharts

## Quick start

```sh
npm install
npm run dev      # dev server on http://localhost:8080
npm run build    # production build -> dist/
npm run lint     # eslint
```

Node.js 18+ recommended.

## Project structure

```
src/
  main.tsx            # entry point
  App.tsx             # router + providers
  pages/              # Index (landing + test), NotFound
  components/         # TypingTest, HeroSection, FeaturesSection, Header, Footer
  components/ui/      # shadcn/ui primitives
  hooks/ lib/         # utilities
public/               # static assets
```

## Deploy

Static site. `vite build` emits `dist/`, which is served from the repo root via
GitHub Pages (`base` is set to `/typify-speed-boost/` in `vite.config.ts`).

## License

MIT

---

Built by Girish Lade — https://ladestack.in

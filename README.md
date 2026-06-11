# Shady — Portfolio

Personal portfolio site for Shady, a full-stack web developer. Built as a fast,
single-page React app and deployed on Vercel.

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (dark mode follows the system preference)
- Scroll-reveal via the native `IntersectionObserver`

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build to /dist
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## Project structure

```
src/
  components/        UI sections (Hero, About, Skills, Projects, …)
    ui/              Shared primitives (icons, FadeSection, SectionLabel, …)
  data/portfolio.js  All editable content (links, projects, skills, contact)
  hooks/             useFadeIn scroll-reveal hook
  utils/             scroll helper
public/              Static assets (CV, favicon)
```

## Editing content

Most content lives in [`src/data/portfolio.js`](src/data/portfolio.js):
nav links, skills, projects, experience and contact details. To show a
project's **View Code** button, set that project's `code` field to a real
repository URL (it stays hidden while `code` is `null`).

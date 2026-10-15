# Portfolio Website

Dark, techy portfolio built with React + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React.

## Get started

```bash
npm install
npm run dev
```

## Edit your content

Everything personal (name, bio, projects, skills, social links) lives in one file:

```
src/data/portfolio.ts
```

Change the values there — you generally won't need to touch the components.

## Structure

- `src/components/Hero.tsx` — intro + animated "whoami" terminal card
- `src/components/About.tsx` — bio + a git-log styled career timeline
- `src/components/Projects.tsx` — project cards styled like editor tabs
- `src/components/Skills.tsx` — skills shown like package.json dependencies
- `src/components/Contact.tsx` — contact CTA
- `src/index.css` — design tokens (colors, fonts) under `@theme`

## Deploy

Push to GitHub, then import the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) — both auto-detect Vite and deploy on push. Build command: `npm run build`, output dir: `dist`.

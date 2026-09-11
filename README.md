# Ansh Ankul’s portfolio

A responsive Next.js portfolio positioned for AI Engineer and Forward Deployed Engineer roles, with production AI case studies, project filters, light and dark themes, and dedicated experience and education pages.

## Run locally

Use Node.js 24 (also specified in `.nvmrc` and `package.json`). With nvm installed:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open http://localhost:3000. To validate and serve a production build, run `npm run build` followed by `npm start`.

In Vercel, set **Settings → Build and Deployment → Node.js Version** to **24.x** and create a new deployment. The `engines.node` setting in `package.json` also selects Node.js 24 for deployments containing this configuration.

Deployment uses the Next.js runtime, as on Vercel. The existing GitHub Pages workflow invokes `next export`, which does not support this project's App Router routes in Next.js 13.1.6. That legacy workflow needs a framework update before it can publish a static export; the production build and Node/Vercel runtime work independently of it.

## Update the portfolio

- `lib/portfolio.ts` contains projects, experience, education, skills, and contact links. Current roles and the four AI case studies follow the supplied résumé; older projects remain in the collection. Project links that point to the general GitHub profile are labeled explicitly.
- `app/projects/[slug]/` renders the problem, implementation, and results for AI-AgriBench, AgAnswers agents, LLM Council annotation, and graph-augmented RAG. Update each project's `caseStudy` fields to edit these pages.
- `styles/globals.css` contains the shared layout, theme colors, and responsive styles. `styles/details.css` styles experience and education.
- `components/DataSculpture.tsx` renders the decorative canvas artwork with a static SVG fallback. It pauses offscreen and respects reduced-motion preferences.
- `public/fonts/` contains locally served DM Sans and DM Mono fonts with their SIL Open Font License notices.

The homepage is `app/page.tsx`. The active routes are in `app/`; the older `src/app/` files are not used by Next.js while the root app directory exists.

The current résumé PDF is bundled at `public/Ansh-Ankul-Resume.pdf`; the navigation’s résumé destination is controlled by `profile.resume`. Contact actions use `profile.email`. Publishing to the live Vercel site remains a separate deployment step.

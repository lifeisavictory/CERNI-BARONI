# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A Czech-language informational website about the *Pomocné technické prapory* (PTP) — "Černí baroni" — forced labor battalions of the Czechoslovak army (1950–1954). Content is journalistic/historical prose paraphrased from public sources (Radio Prague International, iROZHLAS, ČT24, Paměť národa, Wikipedia, etc.), not original research. Deployed at cernibaroni.cz.

React 19 + Vite 8 SPA, plain JavaScript/JSX (no TypeScript), client-side routing via `react-router-dom` v7. No backend, no test runner configured.

## Commands

- `npm run dev` — start the Vite dev server with HMR (http://localhost:5173)
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the project

## Architecture

- Entry point: `index.html` (contains SEO/OG meta tags and Google Fonts links) → `src/main.jsx` wraps `<App />` in `<BrowserRouter>` and `<StrictMode>`, mounting into `#root`.
- **Routing** (`src/App.jsx`): all routes are nested under a single `<Layout>` element via `react-router-dom`'s `<Routes>`/`<Route>`. Adding a page means: create `src/pages/NewPage.jsx`, add a `<Route path="..." element={<NewPage />} />` in `App.jsx`, and add a corresponding link in `src/components/Layout.jsx`'s `links` array (used for both header nav and footer nav).
- **Content/component separation**: all page text — timelines, source lists, biography entries, long-form paragraphs — lives in `src/data/content.js` as named exported constants (e.g. `sources`, `timeline`, `categories`, `notablePeople`, `bookInfo`, plus standalone prose strings like `originIntro`, `nicknameOrigin`, `conditionsText`, `memoryOfNationNote`). Page components (`src/pages/*.jsx`) import from this file rather than embedding prose inline. When editing factual/historical content, edit `content.js`; when editing layout/presentation, edit the page component.
- `src/components/Layout.jsx` renders the shared header (with a hamburger nav that collapses below 768px, tracked via local `isMenuOpen` state), the routed `<Outlet />`, and a shared footer with a duplicate nav + contact link.
- Site pages and their routes/data source:

  | Route | Component | Data from `content.js` |
  |---|---|---|
  | `/` | `Home.jsx` | `originIntro` |
  | `/vznik` | `Origin.jsx` | `timeline`, `nicknameOrigin`, `conditionsText` |
  | `/prislusnici` | `Members.jsx` | `categories`, `notablePeople`, `nobilityNote`, `memoryOfNationNote`, `memoryOfNationUrl` |
  | `/kniha` | `Book.jsx` | `bookInfo` |
  | `/zdroje` | `Sources.jsx` | `sources` |
  | `/ochrana-soukromi` | `Privacy.jsx` | (static text) |

- **Styling**: `src/index.css` defines global design tokens as CSS custom properties on `:root` (`--text`, `--text-h`, `--bg`, `--page-bg`, `--border`, `--accent`, `--accent-bg`, `--accent-border`, `--shadow`, font stacks `--sans`/`--heading`/`--mono`), with a dark-theme override block under `@media (prefers-color-scheme: dark)`. Always reuse these tokens instead of hardcoding colors/fonts. `src/App.css` holds component/layout-scoped styles using native CSS nesting (targets modern browsers per Vite's default build — no PostCSS nesting plugin). Fonts: Fraunces (headings), Inter (body), IBM Plex Mono (nav/labels).
- No `src/assets/` directory currently exists — all real assets (e.g. `favicon.svg`) live in `public/` and are referenced by absolute path, served as-is. If JS-imported assets are added later, put them under `src/assets/` so Vite processes them.
- ESLint config (`eslint.config.js`) is flat-config style: `@eslint/js` recommended rules + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` (Vite variant), targeting `**/*.{js,jsx}` with browser globals and JSX enabled. `dist/` is ignored.

## Content accuracy

Historical facts are compiled from public journalistic/archival sources; the full citation list lives on the `/zdroje` page and mirrors the `sources` array in `src/data/content.js`. Figures/estimates vary slightly between sources — this is expected and should be reflected as approximate (e.g. "40 až 60 tisíc") rather than resolved to a false precision. The Švandrlík book/film are fiction/satire, not historical sources, and should not be cited as fact.

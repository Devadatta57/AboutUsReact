# FEED MSCS Ltd. — About Us (React + Vite)

## Scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start the dev server (port 5173)     |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | ESLint                               |
| `npm run format`  | Prettier                             |

## Project structure

```
src/
├── assets/            # Static files imported by code (images, icons, fonts)
│   └── images/about/  # feedab-collage (photo collage) + feedab-landscape (bottom strip) from the design, feed-logo (brand mark), sections/ (pictures for sections 01–08)
├── components/
│   ├── common/        # Reusable UI building blocks (SectionEyebrow)
│   └── layout/        # App shell pieces (Navbar, Footer…) — add here
├── features/          # Feature modules: each owns its components, data, hooks
│   └── about/
│       ├── components/AboutHero/   # Hero section, HeroCollage, HeroBackground
│       ├── components/AboutSections/ # Sections 01–08, "On This Page" index, Read more panels
│       ├── data/                   # Copy & image config for the section
│       └── index.js                # Public API of the feature
├── pages/             # Route-level screens composed from features
│   └── AboutPage/
├── hooks/             # Shared custom hooks
├── services/          # API clients / data fetching
├── utils/             # Pure helper functions
├── styles/            # Global CSS + design tokens (variables.css)
├── App.jsx
└── main.jsx
```

Conventions:

- **One folder per component**: `Component.jsx` + `Component.module.css` + `index.js`.
- **CSS Modules** for component styles; shared colours/fonts/spacing live in `styles/variables.css`.
- **`@/` alias** points to `src/` (configured in `vite.config.js` and `jsconfig.json`).
- **Content lives in `data/`**, not hard-coded in JSX, so copy and photos can be changed in one place.

## Editing the hero

- Text: `src/features/about/data/aboutHeroContent.js`.
- Images: replace `feedab-collage.webp` / `feedab-landscape.jpg` / `feed-logo.jpg` in `src/assets/images/about/`.
- Logo size: `.logo` width in `AboutHero.module.css` (`414 * var(--u)` on desktop, sized so the logo and quote match the collage's height).

## Editing sections 01–08 (below the hero)

The numbered sections and the "On This Page" index follow the `feedabo` design; the text comes from `ABoutUsHomePageContent.docx`.

- All text, numbers and pictures: `src/features/about/data/aboutSectionsContent.js` (one entry per section, in page order; the comments at the top explain each field).
- "Read more": each section's `details` list is what opens when the button is clicked. Remove `details` from a section and its button disappears.
- "Join FEED Today" link: `href` in the last section (currently points back to the section; set it to the sign-up page).
- Pictures: `src/assets/images/about/sections/` (office, farmer and magazine-cover photos are cut from the design; `members-become.webp` is the "Become a FEED Member" line drawing; `feedcard.webp` is a web-sized copy of `feedcard.png`, the Membership & Reward Card picture; `presence-map.jpg` is the map from the content document; the page shows `presence-map-india.webp`, just the India map cut out of it on a transparent background).
- Icons: names from `src/components/common/Icon/Icon.jsx`.
- Components: `src/features/about/components/AboutSections/`.

### How the hero matches the design

On screens 900px and wider the hero is a proportional "artboard" built from the
1670 x 942 design mockup (trimmed to 1670 x 840 so the fields sit closer to the
collage, then grown to 1670 x 900 so the large FEED logo and quote fit beside
the collage, under a centred "About Us"): every size and position in `AboutHero.module.css` is a design-pixel
value multiplied by `--u`, and the collage is exported from the mockup at its
exact position. `--u` is the smaller of `width / 1670` and `window height / 900`,
so the whole hero — fields included — always fits on screen without scrolling.
Below 900px the hero stacks (text, then collage).

If a sticky navbar is added later, set `--site-header-height` (e.g. `72px`) on
`:root` so the hero still fits below it.

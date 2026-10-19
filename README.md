<div align="center">

# Burger Treats

**Big bites. Good vibes.**

A bold restaurant website concept bringing street-food energy to the web through expressive typography, food imagery and motion.

[Explore the live demo](https://street-food-burger-treats-app.lovable.app) · [View the menu](https://street-food-burger-treats-app.lovable.app/menu) · [Getting started](#getting-started)

<img src="https://raw.githubusercontent.com/3ConstArt3/street-food-burger-treats-app/main/src/assets/hero-burger.png" alt="Burger artwork used in the Burger Treats homepage hero" width="420" />

*Hero artwork from the application.*

</div>

## Overview

Burger Treats explores how a street-food restaurant can communicate its character while making its menu easy to discover. The experience combines a lively brand introduction, six signature burger cards, a dedicated PDF menu and a visit section within a consistent visual identity.

Built with **Lovable**, **React** and **TypeScript**, the project connects UI/UX design with a component-based implementation. Its focus is restaurant discovery and menu presentation; online ordering, payments and reservations are outside the current scope.

> This is a demonstration website. Restaurant contact details, opening hours and testimonials are fictional development content, as documented in the source files.

## Design approach

The visual direction combines a modern diner aesthetic with urban graphic elements: oversized condensed headings, warm cream backgrounds, dark ink surfaces, red accents and cheddar-yellow highlights.

| Design choice | Purpose in the experience |
| --- | --- |
| Roboto Condensed headings and Manrope body text | Give the brand a strong voice while keeping supporting information readable. |
| Asymmetric signature burger grid | Create a varied composition with prominent food imagery and visible prices. |
| Animated hero, scrolling ticker and section reveals | Introduce movement throughout the browsing experience. |
| Minimal menu page with geometric artwork | Keep attention on the original menu document. |
| Shared navigation and mobile action bar | Keep menu and visit information within reach across screen sizes. |

Reduced-motion handling is implemented in the hero, ticker, reveal components and other key animations. The interface also includes labelled controls, image alternatives and visible focus styles.

## Explore the experience

| Area | What visitors can explore |
| --- | --- |
| **Home** — `/` | Animated brand introduction, six signature burgers, restaurant story, sample testimonials and visit information. |
| **Menu** — `/menu` | A preview of the original menu that opens a scrollable PDF viewer. |
| **PDF viewer** | Zoom from 100% to 250%, scroll through the document and open the original PDF separately. |
| **Mobile navigation** | Expandable navigation and a fixed action bar for menu and visit access. Calling remains disabled until a usable phone number is configured. |

The shared menu dataset contains **14 items: 6 burgers, 4 sides and 4 drinks**, with descriptions and euro prices. The homepage derives its signature selection from this dataset, while the menu page displays the original PDF.

**Try it:** open the [live demo](https://street-food-burger-treats-app.lovable.app), select **Explore Menu**, then click the menu preview to inspect the document and use the zoom controls. On a narrow screen, explore the mobile navigation and bottom action bar.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Application | React 19, TypeScript, TanStack Start and TanStack Router |
| Styling and UI | Tailwind CSS 4, shadcn/ui components, Radix UI and Lucide icons |
| Animation | Motion for React |
| Document rendering | PDF.js, loaded in the browser when the viewer opens |
| Build tooling | Vite and the Lovable TanStack configuration |
| Quality tooling | Vitest, Testing Library, ESLint and Prettier |

## Getting started

Install Git, Node.js and npm, then run:

```bash
git clone https://github.com/3ConstArt3/street-food-burger-treats-app.git
cd street-food-burger-treats-app
npm install
npm run dev
```

Open the local URL printed in your terminal. The restaurant and menu content is defined in source files; no database setup is needed for the current experience.

The repository also includes a `bun.lock` file for Bun-based dependency management.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build using the configured adapter. |
| `npm run build:dev` | Build in development mode. |
| `npm run preview` | Run the configured Vite preview command. |
| `npm run test` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run lint` | Check the project with ESLint. |
| `npm run format` | Format project files with Prettier. |

The existing tests check menu names, descriptions, prices, item counts, signature selections, euro formatting and home-route matching.

## Project organisation

| Path | Responsibility |
| --- | --- |
| `src/routes/` | Home and menu routes, page metadata and the shared application shell. |
| `src/components/` | Navigation, product cards, PDF viewer, visit section and other reusable sections. |
| `src/components/ui/` | Reusable UI primitives. |
| `src/data/` | Menu items, restaurant details and sample testimonials. |
| `src/assets/` | Food imagery, hero artwork and menu-preview asset metadata. |
| `src/styles.css` | Design tokens, typography, layouts and custom visual treatments. |
| `src/test/` | Menu-data and routing tests. |
| `public/` | Original menu PDF and public assets. |

## Customisation

Edit `src/data/menu.ts` to update product information and `src/data/restaurant.ts` to configure business details, phone, map and social links. Replace demonstration testimonials in `src/data/testimonials.ts`. Adjust colours, typography and visual treatments in `src/styles.css`.

The PDF and TypeScript menu data are maintained separately. When changing the menu, update `public/Burger-Treats-Food-Menu.pdf`, the shared dataset and the preview together to keep the presentation consistent.

**Menu-preview portability:** `src/assets/official-menu-preview.asset.json` references a Lovable-hosted asset path under `/__l5e/assets-v1/`. That preview may be unavailable outside Lovable. For independent hosting, provide a local preview image and update the reference. The original PDF is included in the repository, and the interface provides a direct PDF fallback if the preview fails.

The application uses TanStack Start and an adapter-based build configuration. Check the deployment target in `vite.config.ts` before hosting it elsewhere.

## Development notes

The project is connected to Lovable. Follow the repository's [agent and development guidance](AGENTS.md), including its guidance on preserving published Git history and keeping menu content consistent.

A `LICENSE` file has not yet been added to this repository.

---

Created by [ConstArt](https://github.com/3ConstArt3) with Lovable.

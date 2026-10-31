# Artist portfolio

A static artist portfolio built with Astro. Artwork pages and the portfolio gallery are generated from Markdown content files.

## Requirements

- Node.js `>=22.23.4`
- npm

## Getting started

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Astro prints the local URL when the server starts, typically `http://localhost:4321`.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- <command>` | Run an Astro CLI command |

## Project structure

```text
public/
  artwork/             Artwork images and video files served as static assets
src/
  components/          Reusable Astro components, including artwork cards
  data/artwork/        Markdown files containing artwork content
  layouts/             Shared page layouts
  pages/               Landing, CV, Portfolio, Curatorial, Contact, and artwork detail pages
  styles/              Global styles
  content.config.ts    Artwork collection schema
ARTWORK_GUIDE.md       Artwork content and media authoring guide
```

## Artwork content

Add artwork as Markdown files in `src/data/artwork/` and media files in `public/artwork/`. The artwork collection schema and frontmatter examples are documented in [ARTWORK_GUIDE.md](./ARTWORK_GUIDE.md).

The [Portfolio page](./src/pages/portfolio.astro) presents selected artwork separately from the [Curatorial page](./src/pages/curatorial.astro), which features exhibition-arrangement images and installation views. Artwork marked `featured: true` appears in the landing page’s Featured work slideshow, which advances every five seconds and has clickable navigation dots. Slides are labeled as current work or on exhibition; exhibition name, location, and dates appear when provided. Featured works also remain in their corresponding series or Standalone work group in the Portfolio. Artwork cards are ordered by year, newest first.

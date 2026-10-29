# Artist portfolio

A static artist portfolio built with Astro. Artwork pages and the selected-work gallery are generated from Markdown content files.

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
  pages/               Landing page and generated artwork detail pages
  styles/              Global styles
  content.config.ts    Artwork collection schema
ARTWORK_GUIDE.md       Artwork content and media authoring guide
```

## Artwork content

Add artwork as Markdown files in `src/data/artwork/` and media files in `public/artwork/`. The artwork collection schema and frontmatter examples are documented in [ARTWORK_GUIDE.md](./ARTWORK_GUIDE.md).

The landing page shows the selected Curatorial-category piece, when available, followed by the artwork gallery. Artwork cards are ordered by year, newest first.

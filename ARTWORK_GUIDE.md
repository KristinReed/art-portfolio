# Artwork content guide

## Add an artwork

Create a Markdown file in `src/data/artwork/`. Its file name becomes the artwork page URL, for example `quiet-garden.md` is available at `/artwork/quiet-garden/`.

Put image and video files in `public/artwork/`. Reference them from frontmatter with a root-relative URL such as `/artwork/quiet-garden.jpg`.

Example artwork entry:

```md
---
title: "Quiet Garden"
year: 2026
medium: "Oil on canvas"
dimensions: "24 x 30 in"
category: "Paintings"
description: "A short description of the work."
alt: "Accessible description of the artwork"
mediaType: "image"
src: "/artwork/quiet-garden.jpg"
landscapeCard: false
placeholder: "linear-gradient(135deg, #d6d3d1, #f5f5f4)"
---
```

## Frontmatter fields

| Field | Required | Description |
| --- | --- | --- |
| `title` | Yes | Artwork title |
| `year` | Yes | Four-digit year as a number |
| `medium` | Yes | Materials or medium |
| `dimensions` | Yes | Dimensions or display context |
| `category` | Yes | Gallery category; use `Curatorial` for exhibitions arranged by the artist |
| `description` | Yes | Short description used on the artwork detail page |
| `alt` | No | Accessible description for an image; defaults to `Artwork` |
| `featured` | No | Set to `true` only while the artist's work is currently on exhibition; defaults to `false` |
| `currentWork` | No | Set to `true` to feature work currently in progress or being focused on in the homepage’s Current work section; defaults to `false` |
| `exhibitionName` | When `featured: true` | Name of the current exhibition |
| `exhibitionLocation` | When `featured: true` | Venue and location of the current exhibition |
| `exhibitionDates` | When `featured: true` | Show dates, for example `May 10 – June 20, 2026` |
| `mediaType` | No | `image`, `video`, or `placeholder`; defaults to `placeholder` |
| `src` | No | Media URL under `public/`; omit to display a placeholder |
| `landscapeCard` | No | Set to `true` for landscape proportions in gallery cards; defaults to `false` |
| `placeholder` | No | CSS background value for placeholder media; defaults to a neutral gradient |

For an artwork currently on exhibition, set `featured: true` and provide all three show details:

```md
featured: true
exhibitionName: "Quiet Rooms"
exhibitionLocation: "Example Gallery, Victoria, BC"
exhibitionDates: "May 10 – June 20, 2026"
```

The collection schema rejects featured entries that omit any of these details. When the show ends, set `featured` back to `false` and remove or update its exhibition details.

## Curatorial projects

To show an exhibition arranged by the artist, create a content entry for each image or installation view and set its category to `Curatorial`. These entries appear on the dedicated [Curatorial page](./src/pages/curatorial.astro), not in the Portfolio gallery. Add multiple entries when you want to document different views of the same exhibition.

```md
---
title: "Quiet Rooms — Installation View"
year: 2026
medium: "Group exhibition"
dimensions: "Installation view"
category: "Curatorial"
description: "An exhibition bringing together work about shelter, memory, and domestic life."
alt: "Gallery installation showing artworks arranged throughout a quiet room"
mediaType: "image"
src: "/artwork/quiet-rooms-installation.jpg"
---
```

Image and video entries should include both `mediaType` and `src`. For video, use an MP4 file:

```md
mediaType: "video"
src: "/artwork/quiet-garden.mp4"
```

Gallery cards and artwork detail media use a 4:5 portrait ratio by default and a 5:4 ratio when `landscapeCard` is `true`. There is no per-artwork `aspectRatio` field.

## Where entries appear

- Artwork entries appear on the dedicated [Portfolio page](./src/pages/portfolio.astro), sorted newest first, except entries marked `currentWork: true`; those appear in the homepage’s Current work section instead. Curatorial entries are also excluded from the Portfolio gallery.
- Artwork marked `featured: true` also appears in the homepage’s “Currently on exhibition” section with the exhibition name, location, and dates. If there are no active shows, the section displays an empty message.
- Artwork marked `currentWork: true` appears in the homepage’s “Current work” section, after current exhibitions, and is omitted from the Portfolio gallery to keep the groups separate. Multiple entries can be marked current; the section displays an empty message when none are marked.
- Curatorial entries appear on the dedicated Curatorial page, sorted newest first. If there are no curatorial entries, that page displays an empty message.
- Every entry has a detail page at `/artwork/<filename>/`, where `<filename>` is the Markdown filename without its `.md` extension.

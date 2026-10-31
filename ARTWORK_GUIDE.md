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
| `featured` | No | Set to `true` to include work in the homepage Featured work slideshow; defaults to `false` |
| `seriesName` | No | Name of the artwork series; entries with the same name are grouped together on the Portfolio page |
| `exhibitionName` | No | Exhibition name; provide this together with location and dates for featured work that is on exhibition |
| `exhibitionLocation` | No | Venue and location; provide this together with exhibition name and dates |
| `exhibitionDates` | No | Show dates; provide this together with exhibition name and location |
| `mediaType` | No | `image`, `video`, or `placeholder`; defaults to `placeholder` |
| `src` | No | Media URL under `public/`; omit to display a placeholder |
| `landscapeCard` | No | Set to `true` for landscape proportions in gallery cards; defaults to `false` |
| `placeholder` | No | CSS background value for placeholder media; defaults to a neutral gradient |

For featured work currently on exhibition, set `featured: true` and provide all three show details. Featured work without exhibition details is labeled “Current work” in the homepage slideshow:

```md
featured: true
exhibitionName: "Quiet Rooms"
exhibitionLocation: "Example Gallery, Victoria, BC"
exhibitionDates: "May 10 – June 20, 2026"
```

If any exhibition detail is provided, all three are required. When a show ends, remove or update the exhibition details; leave `featured: true` if the work should remain in the homepage slideshow as current work.

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

- Artwork entries appear on the dedicated [Portfolio page](./src/pages/portfolio.astro), sorted newest first. Curatorial entries are excluded from this gallery.
- Portfolio artwork with the same `seriesName` is grouped under a series heading. Entries without a `seriesName` appear in the Standalone work section.
- Artwork marked `featured: true` appears in the homepage’s “Featured work” slideshow, which advances every five seconds and has clickable navigation dots. Entries with exhibition details are labeled “On exhibition” and show the name, location, and dates; featured entries without exhibition details are labeled “Current work.” Featured work remains part of its series or Standalone work section in the Portfolio.
- In the slideshow, portrait artwork uses a 4:5 card and artwork marked `landscapeCard: true` uses a 5:4 landscape card centered in the same fixed media slot.
- Curatorial entries appear on the dedicated Curatorial page, sorted newest first. If there are no curatorial entries, that page displays an empty message.
- Every entry has a detail page at `/artwork/<filename>/`, where `<filename>` is the Markdown filename without its `.md` extension.

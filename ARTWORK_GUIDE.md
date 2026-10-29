# Artwork content guide

## Add an artwork

Create a Markdown file in `src/data/artwork/`. Its file name becomes the artwork page URL, for example `quiet-garden.md` is available at `/artwork/quiet-garden/`.

Put image and video files in `public/artwork/`. Reference them from frontmatter with a root-relative URL such as `/artwork/quiet-garden.jpg`.

Example image entry:

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
| `category` | Yes | Gallery category; use `Curatorial` for the landing-page selected exhibition |
| `description` | Yes | Short description used on the artwork detail page |
| `alt` | No | Accessible description for an image; defaults to `Artwork` |
| `featured` | No | Accepted as metadata, but does not control landing-page display; defaults to `false` |
| `mediaType` | No | `image`, `video`, or `placeholder`; defaults to `placeholder` |
| `src` | No | Media URL under `public/`; omit to display a placeholder |
| `landscapeCard` | No | Set to `true` for landscape proportions in gallery and curated images; defaults to `false` |
| `placeholder` | No | CSS background value for placeholder media; defaults to a neutral gradient |

Image and video entries should include both `mediaType` and `src`. For a video, use an MP4 file:

```md
mediaType: "video"
src: "/artwork/quiet-garden.mp4"
```

Gallery cards and the curated image use a 4:5 portrait ratio by default and a 5:4 ratio when `landscapeCard` is `true`. Artwork detail media uses a 4:5 ratio. There is no per-artwork `aspectRatio` field.

Artwork cards on the landing page are sorted newest first. The selected exhibition is the first artwork categorized as `Curatorial`; if none exists, the page falls back to the first artwork in the collection.

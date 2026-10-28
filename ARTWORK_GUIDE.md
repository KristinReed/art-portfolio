# Artwork files

Add each artwork as a markdown file in this folder:

- src/data/artwork/*.md

Add the actual media files in the public folder so Astro can serve them:

- public/artwork/*.jpg
- public/artwork/*.png
- public/artwork/*.mp4

Example frontmatter:

```md
---
title: "Piece Name"
year: 2026
medium: "Oil on canvas"
dimensions: "24 x 30 in"
category: "Paintings"
description: "Short description of the work."
alt: "Accessible alt text"
featured: true
mediaType: "image"
src: "/artwork/piece-name.jpg"
aspectRatio: "4 / 5"
placeholder: "linear-gradient(135deg, #d6d3d1, #f5f5f4)"
---
```

For video files:

```md
mediaType: "video"
src: "/artwork/piece-name.mp4"
```

If you do not yet have a file, the site will still render a styled placeholder card automatically.

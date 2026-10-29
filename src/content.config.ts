import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artworkCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/artwork' }),
  schema: z
    .object({
      title: z.string(),
      year: z.number(),
      medium: z.string(),
      dimensions: z.string(),
      category: z.string(),
      description: z.string(),
      alt: z.string().default('Artwork'),
      featured: z.boolean().default(false),
      currentWork: z.boolean().default(false),
      exhibitionName: z.string().optional(),
      exhibitionLocation: z.string().optional(),
      exhibitionDates: z.string().optional(),
      landscapeCard: z.boolean().default(false),
      mediaType: z.enum(['image', 'video', 'placeholder']).default('placeholder'),
      src: z.string().optional(),
      placeholder: z.string().default('linear-gradient(135deg,#e7e5e4,#fafaf9)'),
    })
    .superRefine((artwork, context) => {
      if (!artwork.featured) return;

      for (const field of ['exhibitionName', 'exhibitionLocation', 'exhibitionDates'] as const) {
        if (!artwork[field]?.trim()) {
          context.addIssue({
            code: 'custom',
            path: [field],
            message: `${field} is required for work currently on exhibition`,
          });
        }
      }
    }),
});

export const collections = {
  artwork: artworkCollection,
};
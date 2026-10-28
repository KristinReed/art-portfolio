import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artworkCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/artwork' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string(),
    dimensions: z.string(),
    category: z.string(),
    description: z.string(),
    alt: z.string().default('Artwork'),
    featured: z.boolean().default(false),
    mediaType: z.enum(['image', 'video', 'placeholder']).default('placeholder'),
    src: z.string().optional(),
    aspectRatio: z.string().default('4 / 5'),
    placeholder: z.string().default('linear-gradient(135deg,#e7e5e4,#fafaf9)'),
  }),
});

export const collections = {
  artwork: artworkCollection,
};
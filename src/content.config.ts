// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const heroCollection = defineCollection({
  schema: z.object({
    title_line_1: z.string(),
    title_line_2: z.string(),
    subtitle: z.string(),
    cta: z.string(),
    promo: z.string(),
    video_title: z.string(),
    video_subtitle: z.string(),
  }),
});

export const collections = {
  hero: heroCollection,
};

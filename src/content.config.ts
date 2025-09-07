// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const heroCollection = defineCollection({
  // loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/hero' }),
  schema: z.object({
    cta_text: z.string(),
    promo_text: z.string(),
    lang: z.string(),
    subtitle: z.string(),
    title_first_line: z.string(),
    title_second_line: z.string(),
    video_subtitle: z.string(),
    video_title: z.string(),
  }),
});

const useCasesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    videoSrc: z.string().url(),
  }),
});

export const collections = {
  hero: heroCollection,
  'use-cases': useCasesCollection,
};

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
    video: z.object({
      title: z.string(),
      url: z.string().url(),
    }),
    highlights: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
      }),
    ),
  }),
});

export const collections = {
  hero: heroCollection,
  'use-cases': useCasesCollection,
};

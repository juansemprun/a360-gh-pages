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

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const links = z.object({
  description: z.string().optional(),
  icon: z.string().optional(),
  label: z.string().optional(),
  link: z.string().optional(),
});

const navigationCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    navigation: z.array(links).optional(),
    sectionTitles: z
      .object({
        classics: z.string().optional(),
        release: z.string().optional(),
        industry: z.string().optional(),
        useCase: z.string().optional(),
      })
      .optional(),
    video: z
      .object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
      })
      .optional(),
    useCasesNav: z
      .object({
        industry: z.array(links).optional(),
        useCase: z.array(links).optional(),
      })
      .optional(),
    aboutUsNav: z
      .object({
        primary: z.array(links).optional(),
        secondary: z.array(links).optional(),
      })
      .optional(),
  }),
});

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      published: z.coerce.date(),
      readingTime: z.number(),
      image: image(),
      metaDesc: z.string(),
      tags: z.array(z.string()),
    }),
});

const changelogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    headerImage: z.string(),
  }),
});

export const collections = {
  hero: heroCollection,
  'use-cases': useCasesCollection,
  pages: pagesCollection,
  navigation: navigationCollection,
  blog: blogCollection,
  changelog: changelogCollection,
};

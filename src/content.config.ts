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
    video_thumbnail: z.string(),
    video_url: z.string(),
  }),
});

// const useCasesCollection = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     video: z.object({
//       title: z.string(),
//       url: z.string().url(),
//     }),
//     highlights: z.array(
//       z.object({
//         title: z.string(),
//         text: z.string(),
//       }),
//     ),
//   }),
// });

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
        src: z.string().url(),
        postName: z.string(),
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
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      published: z.coerce.date(),
      readingTime: z.number(),
      image: image(),
      metaDesc: z.string(),
      tags: z.array(z.string()),
      author: z.string().default('Air360 Team').optional(),
    }),
});

const changelogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/changelog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      // Use image() helper for type-safe local images
      headerImage: image(),
    }),
});

const featuresCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Hero section
    heroCtaText: z.string().optional(),
    heroCtaUrl: z.string().optional(),
    // Video (self-hosted)
    videoSrc: z.string(),
    thumbnailVideoSrc: z.string(),
    thumbnailImageSrc: z.string(),
    videoThumbnailAlt: z.string().optional(),
    videoCtaText: z.string().optional(),
    videoDialogTitle: z.string().optional(),
    // FAQs
    faqTitle: z.string().optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
  }),
});

// Use Cases by Industry schema (existing)
const useCaseIndustrySchema = z.object({
  type: z.literal('industry'),
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
});

// Use Cases by Scenario schema (new)
const useCaseScenarioSchema = z.object({
  type: z.literal('use case'),
  title: z.string(),
  description: z.string(),
  // Hero section
  heroCtaText: z.string().optional(),
  heroCtaUrl: z.string().optional(),
  // Video (self-hosted)
  videoSrc: z.string(),
  thumbnailVideoSrc: z.string(),
  thumbnailImageSrc: z.string(),
  videoThumbnailAlt: z.string().optional(),
  videoCtaText: z.string().optional(),
  videoDialogTitle: z.string().optional(),
  // FAQs
  faqTitle: z.string().optional(),
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    )
    .optional(),
});

// Combined schema with discriminated union
const useCasesCollection = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/use-cases' }),
  schema: z.discriminatedUnion('type', [useCaseIndustrySchema, useCaseScenarioSchema]),
});

export const collections = {
  hero: heroCollection,
  'use-cases': useCasesCollection,
  pages: pagesCollection,
  navigation: navigationCollection,
  blog: blogCollection,
  changelog: changelogCollection,
  features: featuresCollection,
};

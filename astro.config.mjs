// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import { languageCodes } from './src/config/language';

// https://astro.build/config
export default defineConfig({
  site: 'https://juansemprun.dev',
  // base: '/a360-gh-pages',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx()],
  i18n: {
    locales: languageCodes,
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

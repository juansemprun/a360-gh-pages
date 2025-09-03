// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://juansemprun.github.io',
  base: '/a360-gh-pages',
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
});

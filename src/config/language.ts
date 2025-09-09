import type { SvgComponentProps } from 'astro/assets/runtime';

export interface Language {
  code: string; // Language code, e.g., 'en'
  label: string; // Display label, e.g., 'English'
  locale: string; // Locale string, e.g., 'en-US'
  default: boolean; // Marks the default language
}

export const languages: Language[] = [
  {
    code: 'en',
    label: 'English',
    locale: 'en-US',
    default: true,
  },
  {
    code: 'fr',
    label: 'Français',
    locale: 'fr-FR',
    default: false,
  },
  {
    code: 'ja',
    label: '日本語',
    locale: 'ja-JP',
    default: false,
  },
];

export const defaultLanguage = languages.find((lang) => lang.default);
export const languageCodes = languages.map((lang) => lang.code);

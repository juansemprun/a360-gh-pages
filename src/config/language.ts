import type { SvgComponentProps } from 'astro/assets/runtime';

import Japan from '@assets/icons/flags/japan.svg';
import France from '@assets/icons/flags/france.svg';
import America from '@assets/icons/flags/america.svg';

export interface Language {
  code: string; // Language code, e.g., 'en'
  label: string; // Display label, e.g., 'English'
  locale: string; // Locale string, e.g., 'en-US'
  icon: any;
  default: boolean; // Marks the default language
}

export const languages: Language[] = [
  {
    code: 'en',
    label: 'English',
    locale: 'en-US',
    icon: America,
    default: true,
  },
  {
    code: 'fr',
    label: 'Français',
    locale: 'fr-FR',
    icon: France,
    default: false,
  },
  {
    code: 'ja',
    label: '日本語',
    locale: 'ja-JP',
    icon: Japan,
    default: false,
  },
];

export const defaultLanguage = languages.find((lang) => lang.default);
export const languageCodes = languages.map((lang) => lang.code);

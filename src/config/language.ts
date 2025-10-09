export interface Language {
  code: string;
  label: string;
  locale: string;
  default: boolean;
}

export const languages = [
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
] as const satisfies readonly Language[];

export const defaultLanguage = languages.find((lang) => lang.default);

// Extract language codes with proper typing
export const languageCodes = languages.map((lang) => lang.code);

// Type helper for language codes
export type LanguageCode = (typeof languageCodes)[number]; // 'en' | 'fr' | 'ja'

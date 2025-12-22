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

/**
 * Validates and returns a safe LanguageCode from Astro.params
 * Falls back to default language if invalid
 * @param lang - Language code from Astro.params
 * @returns Valid LanguageCode
 */
export function getValidLanguage(lang: string | undefined): LanguageCode {
  // Check if lang exists and is in our supported languages
  const isValid = lang !== undefined && languageCodes.includes(lang as LanguageCode);

  // Return valid lang or fallback to default
  return isValid ? (lang as LanguageCode) : (defaultLanguage?.code ?? 'en');
}

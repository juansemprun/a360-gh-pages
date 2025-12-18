import type { LanguageCode } from '@/config/language';
import { languages } from '@/config/language';

// Import all translations
import { blog } from '@/i18n/translations/blog';
import { changelog } from '@/i18n/translations/changelog';
import { layout } from '@/i18n/translations/layout';
import { navigation } from '@/i18n/translations/navigation';
import { testimonials } from '@/i18n/translations/testimonials';
// import { common } from './namespaces/common';

// Get default language
export const defaultLang = languages.find((lang) => lang.default)?.code ?? 'en';

// Combine all translations
export const ui = {
  en: {
    ...blog.en,
    ...changelog.en,
    ...layout.en,
    ...navigation.en,
    ...testimonials.en,
  },
  fr: {
    ...blog.fr,
    ...changelog.fr,
    ...layout.fr,
    ...navigation.fr,
    ...testimonials.fr,
  },
  ja: {
    ...blog.ja,
    ...changelog.ja,
    ...layout.ja,
    ...navigation.ja,
    ...testimonials.ja,
  },
} as const;

/**
 * Type-safe translation function
 * @param lang - Language code (en, fr, ja)
 * @returns Translation function
 */
export function useTranslations(lang: LanguageCode = defaultLang as LanguageCode) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}

/**
 * Get locale-aware date formatter using Intl.DateTimeFormat
 * @param lang - Language code
 * @returns Date formatting function
 */
export function getDateFormatter(lang: LanguageCode = defaultLang as LanguageCode) {
  // Get full locale from language config
  const locale = languages.find((l) => l.code === lang)?.locale ?? 'en-US';

  return (date: Date, options?: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat(locale, options).format(date);
  };
}

/**
 * Get translations for a specific namespace
 * @param namespace - Translation namespace object
 * @param lang - Language code
 * @returns Translations for the specified language
 */
export function useNamespaceTranslations<T extends Record<string, any>>(
  namespace: Record<LanguageCode, T>,
  lang: LanguageCode = defaultLang as LanguageCode,
) {
  return namespace[lang] ?? namespace[defaultLang as LanguageCode];
}

/**
 * Helper to get the full locale string for a language code
 * @param lang - Language code
 * @returns Full locale string (e.g., 'en-US')
 */
export function getLocale(lang: LanguageCode): string {
  return languages.find((l) => l.code === lang)?.locale ?? 'en-US';
}

/**
 * Helper to get the language label
 * @param lang - Language code
 * @returns Language label (e.g., 'English', 'Français')
 */
export function getLanguageLabel(lang: LanguageCode): string {
  return languages.find((l) => l.code === lang)?.label ?? 'English';
}

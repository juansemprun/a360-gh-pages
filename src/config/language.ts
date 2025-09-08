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
];

export const defaultLanguage = languages.find((lang) => lang.default);
export const languageCodes = languages.map((lang) => lang.code);

import { ui, defaultLang } from './blog';

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// export function useTranslations(lang: keyof typeof ui) {
//   return function t(key: keyof (typeof ui)[typeof defaultLang]) {
//     return (
//       (ui[lang] as Record<string, string>)[key] || (ui[defaultLang] as Record<string, string>)[key]
//     );
//   };
// }

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';

const fallbackLng = 'en';

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb(fallbackLng),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    debug: true,
    resources: {
      en: { translation: en },
    },
  });

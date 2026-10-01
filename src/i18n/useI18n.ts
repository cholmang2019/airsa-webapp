import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, TranslationDictionary } from './translations';

export const useI18n = () => {
  const { language, dir, isRtl, setLanguage, currentLangInfo, availableLanguages } = useLanguage();
  const t: TranslationDictionary = TRANSLATIONS[language] || TRANSLATIONS.fa;
  return {
    language,
    dir,
    isRtl,
    setLanguage,
    currentLangInfo,
    availableLanguages,
    t,
  };
};

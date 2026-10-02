import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { IranFlag, UkFlag, UaeFlag, TurkeyFlag, ChinaFlag } from '../components/FlagIcons';
import { TRANSLATIONS, TranslationDictionary } from '../i18n/translations';

export type Language = 'fa' | 'en' | 'ar' | 'tr' | 'zh';
export type Direction = 'rtl' | 'ltr';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  country: string;
  flagEmoji: string;
  dir: Direction;
  FlagComponent: React.ComponentType<{ className?: string; size?: number }>;
}

export const AVAILABLE_LANGUAGES: LanguageInfo[] = [
  {
    code: 'fa',
    name: 'Persian',
    nativeName: 'فارسی',
    country: 'ایران',
    flagEmoji: '🇮🇷',
    dir: 'rtl',
    FlagComponent: IranFlag,
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    country: 'International',
    flagEmoji: '🇬🇧',
    dir: 'ltr',
    FlagComponent: UkFlag,
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    country: 'العالم العربي',
    flagEmoji: '🇦🇪',
    dir: 'rtl',
    FlagComponent: UaeFlag,
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    country: 'Türkiye',
    flagEmoji: '🇹🇷',
    dir: 'ltr',
    FlagComponent: TurkeyFlag,
  },
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    country: '中国',
    flagEmoji: '🇨🇳',
    dir: 'ltr',
    FlagComponent: ChinaFlag,
  },
];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: Direction;
  isRtl: boolean;
  currentLangInfo: LanguageInfo;
  availableLanguages: LanguageInfo[];
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'airsa_language_preference';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === 'fa' || saved === 'en' || saved === 'ar' || saved === 'tr' || saved === 'zh')) {
        return saved;
      }
      // Check browser language
      const navLang = navigator.language?.toLowerCase() || '';
      if (navLang.startsWith('zh')) return 'zh';
      if (navLang.startsWith('tr')) return 'tr';
      if (navLang.startsWith('ar')) return 'ar';
      if (navLang.startsWith('en')) return 'en';
    }
    return 'fa';
  });

  const currentLangInfo = AVAILABLE_LANGUAGES.find((l) => l.code === language) || AVAILABLE_LANGUAGES[0];
  const dir = currentLangInfo.dir;
  const isRtl = dir === 'rtl';
  const t: TranslationDictionary = TRANSLATIONS[language] || TRANSLATIONS.fa;

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // Ignore storage errors in sandbox
      }
    }
  }, []);

  // Update HTML tag attributes whenever language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      if (isRtl) {
        document.body.classList.remove('dir-ltr');
        document.body.classList.add('dir-rtl');
      } else {
        document.body.classList.remove('dir-rtl');
        document.body.classList.add('dir-ltr');
      }
    }
  }, [language, dir, isRtl]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dir,
        isRtl,
        currentLangInfo,
        availableLanguages: AVAILABLE_LANGUAGES,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

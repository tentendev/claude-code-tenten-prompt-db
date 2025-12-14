import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Language,
  Translations,
  DEFAULT_LANGUAGE,
  detectBrowserLanguage,
  getStoredLanguage,
  setStoredLanguage,
  getTranslation,
} from '../i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // First check localStorage
    const stored = getStoredLanguage();
    if (stored) return stored;

    // Then detect from browser
    return detectBrowserLanguage();
  });

  const [t, setT] = useState<Translations>(() => getTranslation(language));

  useEffect(() => {
    setT(getTranslation(language));
    setStoredLanguage(language);
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'zh-TW' ? 'en' : 'zh-TW'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

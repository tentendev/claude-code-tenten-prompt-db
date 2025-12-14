import { Language, Translations, PromptTranslation } from './types';
import { en } from './en';
import { zhTW } from './zh-TW';

export * from './types';

export const translations: Record<Language, Translations> = {
  'zh-TW': zhTW,
  'en': en,
};

export const DEFAULT_LANGUAGE: Language = 'zh-TW';

export const SUPPORTED_LANGUAGES: Language[] = ['zh-TW', 'en'];

export function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage;

  // Check for Traditional Chinese variants
  if (browserLang.startsWith('zh-TW') ||
      browserLang.startsWith('zh-Hant') ||
      browserLang === 'zh-HK' ||
      browserLang === 'zh-MO') {
    return 'zh-TW';
  }

  // Check for Simplified Chinese - default to Traditional for all Chinese
  if (browserLang.startsWith('zh')) {
    return 'zh-TW';
  }

  // For English or any other language, return English
  if (browserLang.startsWith('en')) {
    return 'en';
  }

  // Default to Traditional Chinese for other languages
  return DEFAULT_LANGUAGE;
}

export function getStoredLanguage(): Language | null {
  const stored = localStorage.getItem('language');
  if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
    return stored as Language;
  }
  return null;
}

export function setStoredLanguage(lang: Language): void {
  localStorage.setItem('language', lang);
}

export function getTranslation(lang: Language): Translations {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
}

export function getPromptTranslation(lang: Language, promptId: string): PromptTranslation | null {
  const t = translations[lang];
  return t?.prompts[promptId] || null;
}

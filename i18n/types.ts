export type Language = 'zh-TW' | 'en';

export interface UITranslations {
  header: {
    title: string;
    subtitle: string;
    about: string;
    contribute: string;
    openApp: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    promptsAvailable: string;
  };
  search: {
    placeholder: string;
    popular: string;
    results: string;
  };
  categories: {
    all: string;
    strategy: string;
    growth: string;
    operations: string;
    product: string;
    brand: string;
  };
  pillarDescriptions: {
    strategy: string;
    growth: string;
    operations: string;
    product: string;
    brand: string;
  };
  card: {
    copyPrompt: string;
    copied: string;
    customize: string;
  };
  modal: {
    context: string;
    thePrompt: string;
    copyPrompt: string;
    copied: string;
    footer: string;
  };
  empty: {
    title: string;
    description: string;
    clearFilters: string;
  };
  footer: {
    text: string;
  };
  language: {
    toggle: string;
    zh: string;
    en: string;
  };
}

export interface PromptTranslation {
  title: string;
  description: string;
  content: string;
  tags: string[];
}

export interface Translations {
  ui: UITranslations;
  prompts: Record<string, PromptTranslation>;
}

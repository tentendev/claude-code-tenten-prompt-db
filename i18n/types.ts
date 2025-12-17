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
    // Consulting Pillars
    seoGeo: string;
    socialMedia: string;
    aiConsulting: string;
    promptEngineering: string;
    vcIncubator: string;
    // Design Pillars
    webUiUx: string;
    productDesign: string;
    contentCreation: string;
    brandArtDirection: string;
    videoFilmography: string;
    // Software Development Pillars
    webDevelopment: string;
    shopifyDevelopment: string;
    devops: string;
    cloudManagement: string;
    aiResearch: string;
  };
  pillarDescriptions: {
    strategy: string;
    growth: string;
    operations: string;
    product: string;
    brand: string;
    // Consulting Pillars
    seoGeo: string;
    socialMedia: string;
    aiConsulting: string;
    promptEngineering: string;
    vcIncubator: string;
    // Design Pillars
    webUiUx: string;
    productDesign: string;
    contentCreation: string;
    brandArtDirection: string;
    videoFilmography: string;
    // Software Development Pillars
    webDevelopment: string;
    shopifyDevelopment: string;
    devops: string;
    cloudManagement: string;
    aiResearch: string;
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
  sidebar?: {
    tagline: string;
    strategicPillars: string;
    operationPillars: string;
    consultingPillars: string;
    designPillars: string;
    softwareDevPillars: string;
    darkMode: string;
    internal: string;
    highImpactPrompts: string;
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

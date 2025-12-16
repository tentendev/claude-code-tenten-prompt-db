export interface Prompt {
  id: string;
  title: string;
  category: PromptCategory;
  description: string;
  content: string;
  tags: string[];
}

export enum PromptCategory {
  STRATEGY = 'Strategic Vision',
  GROWTH = 'Growth & Sales',
  OPERATIONS = 'Operations & Team',
  PRODUCT = 'Product & AI Tech',
  BRAND = 'Brand & Content',
  // Consulting Pillars
  SEO_GEO = 'SEO & GEO',
  SOCIAL_MEDIA = 'Social Media Growth',
  AI_CONSULTING = 'AI Transformation',
  PROMPT_ENGINEERING = 'Prompt Engineering',
  VC_INCUBATOR = 'VC & Incubator',
  // Design Pillars
  WEB_UI_UX = 'Web & UI/UX Design',
  PRODUCT_DESIGN = 'Product Design',
  CONTENT_CREATION = 'Content Creation',
  BRAND_ART_DIRECTION = 'Brand & Art Direction',
  VIDEO_FILMOGRAPHY = 'Video & Filmography',
  // Software Development Pillars
  WEB_DEVELOPMENT = 'Web Development',
  SHOPIFY_DEVELOPMENT = 'Shopify Development',
  DEVOPS = 'DevOps',
  CLOUD_MANAGEMENT = 'Cloud Management',
  AI_RESEARCH = 'AI Research',
}

export interface CategoryStats {
  category: PromptCategory;
  count: number;
}
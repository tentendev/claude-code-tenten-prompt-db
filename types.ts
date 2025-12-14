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
}

export interface CategoryStats {
  category: PromptCategory;
  count: number;
}
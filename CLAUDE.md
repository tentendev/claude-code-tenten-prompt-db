# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

Set `GEMINI_API_KEY` in `.env.local` (currently unused but configured in vite.config.ts).

## Architecture

This is a React 19 + TypeScript + Vite application that displays a searchable/filterable library of CEO prompts for Tenten.co.

### Data Flow

1. **constants.ts** - Contains all prompt data in `PROMPTS` array (45+ prompts), category descriptions in `PILLAR_DESCRIPTIONS`, and `FEATURED_TAGS`
2. **types.ts** - Defines `Prompt` interface and `PromptCategory` enum (5 categories: Strategic Vision, Growth & Sales, Operations & Team, Product & AI Tech, Brand & Content)
3. **App.tsx** - Main component with filtering logic (category, search, tags) using `useMemo`
4. **components/** - `PromptCard.tsx` (grid display with copy-to-clipboard), `Modal.tsx` (full prompt view)

### Key Patterns

- Filtering: Triple filter chain (category → search text → active tag) in `filteredPrompts` useMemo
- State: React useState for `selectedCategory`, `searchQuery`, `selectedPrompt`, `activeTag`
- Styling: Tailwind CSS with Google DeepMind/Material 3 inspired design
- Path alias: `@` resolves to project root (configured in vite.config.ts)

### Adding New Prompts

Add to `PROMPTS` array in constants.ts following the `Prompt` interface:
```typescript
{
  id: string,           // e.g., 'strat-10'
  title: string,
  category: PromptCategory,  // Use enum value
  description: string,
  content: string,      // The actual prompt text (supports backticks for multiline)
  tags: string[]
}
```

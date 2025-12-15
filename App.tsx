import React, { useState, useMemo } from 'react';
import { PROMPTS } from './constants';
import { Prompt, PromptCategory } from './types';
import { useLanguage } from './contexts/LanguageContext';
import PromptCard from './components/PromptCard';
import Modal from './components/Modal';
import LanguageToggle from './components/LanguageToggle';
import { Search } from 'lucide-react';

const App: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  // Get localized prompts
  const localizedPrompts = useMemo(() => {
    return PROMPTS.map(prompt => {
      const translation = t.prompts[prompt.id];
      if (translation) {
        return {
          ...prompt,
          title: translation.title,
          description: translation.description,
          content: translation.content,
          tags: translation.tags,
        };
      }
      return prompt;
    });
  }, [t]);

  // Get localized category name
  const getCategoryLabel = (category: PromptCategory | 'All'): string => {
    if (category === 'All') return t.ui.categories.all;
    const categoryMap: Record<PromptCategory, string> = {
      [PromptCategory.STRATEGY]: t.ui.categories.strategy,
      [PromptCategory.GROWTH]: t.ui.categories.growth,
      [PromptCategory.OPERATIONS]: t.ui.categories.operations,
      [PromptCategory.PRODUCT]: t.ui.categories.product,
      [PromptCategory.BRAND]: t.ui.categories.brand,
    };
    return categoryMap[category] || category;
  };

  // Filter Logic
  const filteredPrompts = useMemo(() => {
    return localizedPrompts.filter(prompt => {
      const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory;
      const matchesSearch =
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, localizedPrompts]);

  // Statistics for Pills
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = { 'All': PROMPTS.length };
    Object.values(PromptCategory).forEach(cat => {
      stats[cat] = PROMPTS.filter(p => p.category === cat).length;
    });
    return stats;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Minimal Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              T
            </div>
            <span className="font-semibold text-slate-900">Tenten.co</span>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Hero Section - Clean & Centered */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {t.ui.hero.titlePart1} {t.ui.hero.titleHighlight}
          </h1>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            {t.ui.hero.subtitle}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full">
            <span className="text-sm font-semibold text-slate-700">
              {PROMPTS.length} {t.ui.hero.promptsAvailable}
            </span>
          </div>
        </div>

        {/* Search & Category Filters */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder={t.ui.search.placeholder}
              className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.ui.categories.all}
            </button>
            {Object.values(PromptCategory).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {searchQuery && (
          <div className="mb-6 text-center text-sm text-slate-500">
            {filteredPrompts.length} {t.ui.search.results}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPrompts.map((prompt) => (
            <PromptCard
              key={prompt.id}
              prompt={prompt}
              onClick={() => setSelectedPrompt(prompt)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
              <Search size={32} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{t.ui.empty.title}</h3>
            <p className="text-slate-500 mb-4">{t.ui.empty.description}</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-blue-600 font-medium hover:underline"
            >
              {t.ui.empty.clearFilters}
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            {t.ui.footer.text}
          </p>
        </div>
      </footer>

      {/* Modal */}
      {selectedPrompt && (
        <Modal
          prompt={selectedPrompt}
          onClose={() => setSelectedPrompt(null)}
        />
      )}
    </div>
  );
};

export default App;

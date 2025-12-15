import React, { useState, useMemo } from 'react';
import { PROMPTS, PILLAR_DESCRIPTIONS } from './constants';
import { Prompt, PromptCategory } from './types';
import { useLanguage } from './contexts/LanguageContext';
import PromptCard from './components/PromptCard';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import LanguageToggle from './components/LanguageToggle';
import { User } from 'lucide-react';

const App: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [darkMode, setDarkMode] = useState(true);

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

  // Get pillar description
  const getPillarDescription = (category: PromptCategory | 'All'): string => {
    if (category === 'All') {
      return t.ui.hero.subtitle;
    }
    const descriptionMap: Record<PromptCategory, string> = {
      [PromptCategory.STRATEGY]: t.ui.pillarDescriptions.strategy,
      [PromptCategory.GROWTH]: t.ui.pillarDescriptions.growth,
      [PromptCategory.OPERATIONS]: t.ui.pillarDescriptions.operations,
      [PromptCategory.PRODUCT]: t.ui.pillarDescriptions.product,
      [PromptCategory.BRAND]: t.ui.pillarDescriptions.brand,
    };
    return descriptionMap[category] || '';
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
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryStats={categoryStats}
        darkMode={darkMode}
        onDarkModeToggle={() => setDarkMode(!darkMode)}
      />

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Top Header */}
        <header className={`sticky top-0 z-40 ${darkMode ? 'bg-slate-950/80' : 'bg-white/80'} backdrop-blur-sm border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center justify-end px-8 py-4 gap-4">
            <LanguageToggle />
            <div className={`w-10 h-10 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-slate-200'} flex items-center justify-center`}>
              <User size={20} className={darkMode ? 'text-slate-400' : 'text-slate-500'} />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {getCategoryLabel(selectedCategory)}
              </h1>
              <span className={`px-4 py-1.5 text-sm font-semibold rounded-full ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                {filteredPrompts.length} {t.ui.hero.promptsAvailable}
              </span>
            </div>
            <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl`}>
              {selectedCategory === 'All'
                ? `${filteredPrompts.length} ${t.ui.sidebar?.highImpactPrompts || 'high-impact prompts curated for Tenten.co growth.'}`
                : getPillarDescription(selectedCategory)
              }
            </p>
          </div>

          {/* Results Count (when searching) */}
          {searchQuery && (
            <div className={`mb-6 text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              {filteredPrompts.length} {t.ui.search.results}
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                onClick={() => setSelectedPrompt(prompt)}
                darkMode={darkMode}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPrompts.length === 0 && (
            <div className="text-center py-20">
              <div className={`inline-block p-4 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} mb-4`}>
                <svg className={`w-8 h-8 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{t.ui.empty.title}</h3>
              <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} mb-4`}>{t.ui.empty.description}</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="text-blue-500 font-medium hover:underline"
              >
                {t.ui.empty.clearFilters}
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className={`py-8 px-8 ${darkMode ? 'border-t border-slate-800' : 'border-t border-slate-200'}`}>
          <div className="flex items-center justify-between">
            <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              © 2025 Tenten.co • Powered by Tenten AI
            </p>
          </div>
        </footer>
      </main>

      {/* Modal */}
      {selectedPrompt && (
        <Modal
          prompt={selectedPrompt}
          onClose={() => setSelectedPrompt(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default App;

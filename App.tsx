import React, { useState, useMemo, useEffect } from 'react';
import { PROMPTS, PILLAR_DESCRIPTIONS, FEATURED_TAGS } from './constants';
import { Prompt, PromptCategory } from './types';
import PromptCard from './components/PromptCard';
import Modal from './components/Modal';
import { Search, Sparkles, Filter, Command, Github } from 'lucide-react';

// DeepMind-inspired Header
const Header = () => (
  <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
          T
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-slate-900 leading-none">CEO Prompts</h1>
          <span className="text-[10px] font-medium text-slate-500 tracking-widest uppercase">Tenten.co Intelligence</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">About</a>
        <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">Contribute</a>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-md">
          Open App
        </button>
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Filter Logic
  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter(prompt => {
      const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory;
      const matchesSearch = 
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag = activeTag ? prompt.tags.includes(activeTag) : true;

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [selectedCategory, searchQuery, activeTag]);

  // Statistics for Pills
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = { 'All': PROMPTS.length };
    Object.values(PromptCategory).forEach(cat => {
      stats[cat] = PROMPTS.filter(p => p.category === cat).length;
    });
    return stats;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-6">
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">AI-First Management System</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Scale your agency with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Generative Intelligence</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A curated collection of {PROMPTS.length}+ strategic prompts designed for the CEO of Tenten.co. 
            Covering strategy, growth, operations, and product innovation.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-12 space-y-8 sticky top-20 z-30 bg-slate-50/95 py-4 backdrop-blur-sm -mx-4 px-4 sm:mx-0 sm:px-0">
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search specifically (e.g., 'Cold Email', 'HubSpot', 'Strategy')..."
              className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm group-hover:shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded hidden md:block">CMD + K</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => { setSelectedCategory('All'); setActiveTag(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Prompts <span className="ml-1 opacity-60 text-xs">{categoryStats['All']}</span>
            </button>
            {Object.values(PromptCategory).map((category) => (
              <button
                key={category}
                onClick={() => { setSelectedCategory(category); setActiveTag(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category} <span className="ml-1 opacity-60 text-xs">{categoryStats[category]}</span>
              </button>
            ))}
          </div>
          
          {/* Quick Tags (Optional) */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center"><Filter size={14} className="mr-2"/> Popular:</span>
            {FEATURED_TAGS.map(tag => (
               <button 
                 key={tag}
                 onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                 className={`hover:text-blue-600 transition-colors ${activeTag === tag ? 'text-blue-600 font-bold underline' : ''}`}
               >
                 #{tag}
               </button>
            ))}
          </div>
        </div>

        {/* Category Description Banner */}
        {selectedCategory !== 'All' && (
          <div className="mb-8 p-6 bg-white border-l-4 border-blue-500 rounded-r-xl shadow-sm animate-in fade-in slide-in-from-left-4">
             <h3 className="text-lg font-bold text-slate-900 mb-1">{selectedCategory}</h3>
             <p className="text-slate-600">
               {PILLAR_DESCRIPTIONS[selectedCategory as PromptCategory]}
             </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h3 className="text-xl font-bold text-slate-900 mb-2">No prompts found</h3>
            <p className="text-slate-500">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setActiveTag(null); }}
              className="mt-6 text-blue-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            Designed for Tenten.co • Inspired by Google DeepMind & Material 3
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
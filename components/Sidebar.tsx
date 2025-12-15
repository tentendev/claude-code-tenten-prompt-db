import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PromptCategory } from '../types';
import { Search, Moon, Sun, LayoutDashboard, Target, TrendingUp, Users, Cpu, Palette, Megaphone, Package, UserCog, DollarSign } from 'lucide-react';

interface SidebarProps {
  selectedCategory: PromptCategory | 'All';
  onCategorySelect: (category: PromptCategory | 'All') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categoryStats: Record<string, number>;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'All': <LayoutDashboard size={18} />,
  [PromptCategory.STRATEGY]: <Target size={18} />,
  [PromptCategory.GROWTH]: <TrendingUp size={18} />,
  [PromptCategory.OPERATIONS]: <Users size={18} />,
  [PromptCategory.PRODUCT]: <Cpu size={18} />,
  [PromptCategory.BRAND]: <Palette size={18} />,
};

// Strategic Pillars categories
const strategicPillars = [
  PromptCategory.STRATEGY,
  PromptCategory.GROWTH,
  PromptCategory.BRAND,
];

// Operation Pillars categories
const operationPillars = [
  PromptCategory.OPERATIONS,
  PromptCategory.PRODUCT,
];

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onCategorySelect,
  searchQuery,
  onSearchChange,
  categoryStats,
  darkMode,
  onDarkModeToggle,
}) => {
  const { t } = useLanguage();

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

  const NavItem = ({ category }: { category: PromptCategory | 'All' }) => {
    const isActive = selectedCategory === category;
    return (
      <button
        onClick={() => onCategorySelect(category)}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
          isActive
            ? 'bg-slate-700/50 text-white'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
        }`}
      >
        <span className={isActive ? 'text-blue-400' : 'text-slate-500'}>
          {categoryIcons[category]}
        </span>
        <span className="flex-1 text-left">{getCategoryLabel(category)}</span>
      </button>
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-50">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl font-bold text-white">Tenten</span>
          <span className="text-xl font-light text-blue-400">PromptBase</span>
        </div>
        <p className="text-xs text-slate-500 uppercase tracking-wider">
          {t.ui.sidebar?.tagline || 'Master the Art of Prompting'}
        </p>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder={t.ui.search.placeholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-2">
        {/* All Prompts */}
        <div className="mb-2">
          <NavItem category="All" />
        </div>

        {/* Strategic Pillars */}
        <div className="mt-6">
          <p className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {t.ui.sidebar?.strategicPillars || 'Strategic Pillars'}
          </p>
          <div className="space-y-0.5">
            {strategicPillars.map((category) => (
              <NavItem key={category} category={category} />
            ))}
          </div>
        </div>

        {/* Operation Pillars */}
        <div className="mt-6">
          <p className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {t.ui.sidebar?.operationPillars || 'Operation Pillars'}
          </p>
          <div className="space-y-0.5">
            {operationPillars.map((category) => (
              <NavItem key={category} category={category} />
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-slate-800">
        {/* Dark Mode Toggle */}
        <button
          onClick={onDarkModeToggle}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all"
        >
          <div className="flex items-center gap-3">
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
            <span>{t.ui.sidebar?.darkMode || 'Dark Mode'}</span>
          </div>
          <div className={`w-10 h-5 rounded-full transition-colors ${darkMode ? 'bg-blue-500' : 'bg-slate-600'}`}>
            <div className={`w-4 h-4 rounded-full bg-white mt-0.5 transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </div>
        </button>

        {/* Site Info */}
        <div className="mt-4 px-3">
          <p className="text-sm font-semibold text-slate-300">Tenten.co</p>
          <p className="text-xs text-slate-500">{t.ui.sidebar?.internal || 'Internal Use Only'}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
      title={t.ui.language.toggle}
    >
      <Globe size={16} />
      <span className="hidden sm:inline">
        {language === 'zh-TW' ? t.ui.language.en : t.ui.language.zh}
      </span>
    </button>
  );
};

export default LanguageToggle;

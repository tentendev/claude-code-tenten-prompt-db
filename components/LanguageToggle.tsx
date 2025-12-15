import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-1 px-1 py-1 bg-slate-800 rounded-lg">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          language === 'en'
            ? 'bg-slate-700 text-white'
            : 'text-slate-400 hover:text-slate-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh-TW')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          language === 'zh-TW'
            ? 'bg-slate-700 text-white'
            : 'text-slate-400 hover:text-slate-300'
        }`}
      >
        中
      </button>
    </div>
  );
};

export default LanguageToggle;

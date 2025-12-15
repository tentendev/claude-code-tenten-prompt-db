import React, { useState } from 'react';
import { Prompt } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Copy, User, Pencil } from 'lucide-react';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
  darkMode?: boolean;
}

// Extract expert name from content (first line after ## 角色 or ## Role)
const extractExpert = (content: string): { name: string; role: string } => {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('你是') || line.startsWith('You are')) {
      // Chinese format: 你是乾莫博翰（W. Chan Kim），《藍海策略》共同作者...
      // English format: You are W. Chan Kim, co-author of "Blue Ocean Strategy"...

      if (line.startsWith('你是')) {
        // Extract Chinese name and role
        const match = line.match(/你是([^，,]+)[，,](.+?)(?:[，,。]|$)/);
        if (match) {
          return { name: match[1].trim(), role: match[2].trim().slice(0, 50) };
        }
      } else {
        // Extract English name and role
        const match = line.match(/You are ([^,]+),\s*(.+?)(?:[,.]|$)/);
        if (match) {
          return { name: match[1].trim(), role: match[2].trim().slice(0, 50) };
        }
      }
    }
  }
  return { name: 'Expert', role: 'Strategic Advisor' };
};

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onClick, darkMode = true }) => {
  const { t } = useLanguage();
  const expert = extractExpert(prompt.content);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`group relative rounded-xl p-5 cursor-pointer flex flex-col h-full transition-all duration-200 ${
        darkMode
          ? 'bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
          : 'bg-white border border-slate-200 hover:shadow-lg hover:border-slate-300'
      }`}
      onClick={onClick}
    >
      {/* Copy Button - Top Right */}
      <button
        onClick={handleCopy}
        className={`absolute top-4 right-4 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
          darkMode
            ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-300'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700'
        }`}
        title={copied ? t.ui.card.copied : t.ui.card.copyPrompt}
      >
        <Copy size={16} />
      </button>

      {/* Title */}
      <h3 className={`text-base font-bold mb-3 leading-snug pr-10 transition-colors ${
        darkMode
          ? 'text-white group-hover:text-blue-400'
          : 'text-slate-900 group-hover:text-blue-600'
      }`}>
        {prompt.title}
      </h3>

      {/* Expert Attribution */}
      <div className={`flex items-center gap-2 text-sm mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        <User size={14} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{expert.name}</span>
        <span className={darkMode ? 'text-slate-600' : 'text-slate-300'}>|</span>
        <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{expert.role}</span>
      </div>

      {/* Description */}
      <p className={`text-sm mb-4 flex-grow line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {prompt.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {prompt.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className={`px-2.5 py-1 text-xs font-medium rounded-md ${
              darkMode
                ? 'bg-slate-800 text-slate-400'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer: ID + Customize */}
      <div className={`flex items-center justify-between pt-3 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
        <span className={`text-xs font-mono ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
          ID: {prompt.id}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            darkMode
              ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
          }`}
        >
          <Pencil size={12} />
          {t.ui.card.customize || 'Customize'}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;

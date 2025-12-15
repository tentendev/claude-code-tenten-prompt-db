import React, { useState } from 'react';
import { Prompt } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
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

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onClick }) => {
  const { t } = useLanguage();
  const expert = extractExpert(prompt.content);

  return (
    <div
      className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:border-slate-300 transition-all duration-200 cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      {/* Title */}
      <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
        {prompt.title}
      </h3>

      {/* Expert Attribution */}
      <div className="text-sm text-slate-500 mb-3 font-medium">
        <span className="text-slate-700">{expert.name}</span>
        <span className="mx-1.5 text-slate-300">|</span>
        <span className="text-slate-500 text-xs">{expert.role}</span>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-2">
        {prompt.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {prompt.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs text-slate-500 font-medium">
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer: ID + Customize */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <span className="text-xs text-slate-400 font-mono">
          ID: {prompt.id}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          {t.ui.card.customize || 'Customize'}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;

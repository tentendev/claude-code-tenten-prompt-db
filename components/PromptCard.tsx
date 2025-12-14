import React, { useState } from 'react';
import { Prompt } from '../types';
import { Copy, Check, Hash, ArrowUpRight } from 'lucide-react';

interface PromptCardProps {
  prompt: Prompt;
  onClick: () => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={onClick}
      className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full uppercase tracking-wider">
          {prompt.category}
        </span>
        <button 
          onClick={handleCopy}
          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors z-10"
          title="Copy Prompt"
        >
          {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
        </button>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
        {prompt.title}
      </h3>
      
      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
        {prompt.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {prompt.tags.slice(0, 3).map(tag => (
          <span key={tag} className="flex items-center text-xs text-slate-500">
            <Hash size={10} className="mr-0.5" />
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-500">
        <ArrowUpRight size={20} />
      </div>
    </div>
  );
};

export default PromptCard;
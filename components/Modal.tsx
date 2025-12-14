import React from 'react';
import { Prompt } from '../types';
import { X, Copy, Check, MessageSquare } from 'lucide-react';

interface ModalProps {
  prompt: Prompt | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ prompt, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!prompt) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div>
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
              {prompt.category}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">{prompt.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 bg-slate-50/50">
          
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Context</h3>
            <p className="text-slate-600">{prompt.description}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative group">
            <div className="absolute top-4 right-4 flex space-x-2">
               <button 
                onClick={handleCopy}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium shadow-md"
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>
            
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center">
              <MessageSquare size={16} className="mr-2 text-blue-500" />
              The Prompt
            </h3>
            
            <div className="prose prose-slate max-w-none font-mono text-sm leading-relaxed text-slate-800 whitespace-pre-wrap bg-slate-50 p-4 rounded-lg border border-slate-100">
              {prompt.content}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {prompt.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 shadow-sm">
                #{tag}
              </span>
            ))}
          </div>

        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-white text-center text-xs text-slate-400">
          Tenten.co CEO Library • {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
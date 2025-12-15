import React, { useState } from 'react';
import { Prompt } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Copy, Check, MessageSquare, User, Target, FileText, Lightbulb } from 'lucide-react';

interface ModalProps {
  prompt: Prompt | null;
  onClose: () => void;
}

// Extract expert name from content
const extractExpert = (content: string): { name: string; role: string } => {
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('你是') || line.startsWith('You are')) {
      if (line.startsWith('你是')) {
        const match = line.match(/你是([^，,]+)[，,](.+?)(?:[，,。]|$)/);
        if (match) {
          return { name: match[1].trim(), role: match[2].trim() };
        }
      } else {
        const match = line.match(/You are ([^,]+),\s*(.+?)(?:[,.]|$)/);
        if (match) {
          return { name: match[1].trim(), role: match[2].trim() };
        }
      }
    }
  }
  return { name: 'Expert', role: 'Strategic Advisor' };
};

// Parse RACE sections from content
const parseRaceSections = (content: string, language: string) => {
  const isZh = language === 'zh-TW';
  const roleHeader = isZh ? '## 角色' : '## Role';
  const actionHeader = isZh ? '## 任務' : '## Action';
  const contextHeader = isZh ? '## 背景' : '## Context';
  const expectationHeader = isZh ? '## 預期輸出' : '## Expectation';

  const sections: { role: string; action: string; context: string; expectation: string } = {
    role: '',
    action: '',
    context: '',
    expectation: '',
  };

  const lines = content.split('\n');
  let currentSection = '';

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine === roleHeader) {
      currentSection = 'role';
    } else if (trimmedLine === actionHeader) {
      currentSection = 'action';
    } else if (trimmedLine === contextHeader) {
      currentSection = 'context';
    } else if (trimmedLine === expectationHeader) {
      currentSection = 'expectation';
    } else if (currentSection) {
      sections[currentSection as keyof typeof sections] += line + '\n';
    }
  }

  return {
    role: sections.role.trim(),
    action: sections.action.trim(),
    context: sections.context.trim(),
    expectation: sections.expectation.trim(),
  };
};

const Modal: React.FC<ModalProps> = ({ prompt, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

  if (!prompt) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const expert = extractExpert(prompt.content);
  const raceSections = parseRaceSections(prompt.content, language);

  const sectionConfig = [
    { key: 'role', icon: User, label: language === 'zh-TW' ? '角色' : 'Role', color: 'blue' },
    { key: 'action', icon: Target, label: language === 'zh-TW' ? '任務' : 'Action', color: 'green' },
    { key: 'context', icon: FileText, label: language === 'zh-TW' ? '背景' : 'Context', color: 'purple' },
    { key: 'expectation', icon: Lightbulb, label: language === 'zh-TW' ? '預期輸出' : 'Expectation', color: 'amber' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-white">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {prompt.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                ID: {prompt.id}
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">{prompt.title}</h2>
            <p className="text-sm text-slate-500">
              <span className="font-medium text-slate-700">{expert.name}</span>
              <span className="mx-1.5 text-slate-300">|</span>
              {expert.role}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 bg-slate-50 flex-1">
          {/* Description */}
          <div className="mb-6">
            <p className="text-slate-600">{prompt.description}</p>
          </div>

          {/* RACE Sections */}
          <div className="space-y-4">
            {sectionConfig.map(({ key, icon: Icon, label, color }) => {
              const content = raceSections[key as keyof typeof raceSections];
              if (!content) return null;

              const colorClasses: Record<string, string> = {
                blue: 'bg-blue-50 border-blue-200 text-blue-700',
                green: 'bg-green-50 border-green-200 text-green-700',
                purple: 'bg-purple-50 border-purple-200 text-purple-700',
                amber: 'bg-amber-50 border-amber-200 text-amber-700',
              };

              return (
                <div key={key} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <div className={`flex items-center gap-2 px-4 py-2 border-b ${colorClasses[color]}`}>
                    <Icon size={14} />
                    <span className="text-sm font-semibold uppercase tracking-wide">{label}</span>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">
                      {content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {prompt.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-white flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {t.ui.modal.footer} • {new Date().getFullYear()}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>{t.ui.modal.copied}</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>{t.ui.modal.copyPrompt}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from 'react';
import { Prompt } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Copy, Check, User, Target, FileText, Lightbulb } from 'lucide-react';

interface ModalProps {
  prompt: Prompt | null;
  onClose: () => void;
  darkMode?: boolean;
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

  // Check for markdown bold format **ROLE:** etc.
  const boldRolePattern = /\*\*ROLE:\*\*/i;
  const boldActionPattern = /\*\*ACTION:\*\*/i;
  const boldContextPattern = /\*\*CONTEXT:\*\*/i;
  const boldExpectationPattern = /\*\*EXPECTATION:\*\*/i;

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

    if (boldRolePattern.test(trimmedLine) || trimmedLine === '## 角色' || trimmedLine === '## Role') {
      currentSection = 'role';
      // Extract content after **ROLE:** on same line
      const match = trimmedLine.match(/\*\*ROLE:\*\*\s*(.*)$/i);
      if (match && match[1]) {
        sections.role = match[1] + '\n';
      }
    } else if (boldActionPattern.test(trimmedLine) || trimmedLine === '## 任務' || trimmedLine === '## Action') {
      currentSection = 'action';
      const match = trimmedLine.match(/\*\*ACTION:\*\*\s*(.*)$/i);
      if (match && match[1]) {
        sections.action = match[1] + '\n';
      }
    } else if (boldContextPattern.test(trimmedLine) || trimmedLine === '## 背景' || trimmedLine === '## Context') {
      currentSection = 'context';
      const match = trimmedLine.match(/\*\*CONTEXT:\*\*\s*(.*)$/i);
      if (match && match[1]) {
        sections.context = match[1] + '\n';
      }
    } else if (boldExpectationPattern.test(trimmedLine) || trimmedLine === '## 預期輸出' || trimmedLine === '## Expectation') {
      currentSection = 'expectation';
      const match = trimmedLine.match(/\*\*EXPECTATION:\*\*\s*(.*)$/i);
      if (match && match[1]) {
        sections.expectation = match[1] + '\n';
      }
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

const Modal: React.FC<ModalProps> = ({ prompt, onClose, darkMode = true }) => {
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

  const colorClasses: Record<string, { light: string; dark: string }> = {
    blue: {
      light: 'bg-blue-50 border-blue-200 text-blue-700',
      dark: 'bg-blue-900/30 border-blue-800 text-blue-400',
    },
    green: {
      light: 'bg-green-50 border-green-200 text-green-700',
      dark: 'bg-green-900/30 border-green-800 text-green-400',
    },
    purple: {
      light: 'bg-purple-50 border-purple-200 text-purple-700',
      dark: 'bg-purple-900/30 border-purple-800 text-purple-400',
    },
    amber: {
      light: 'bg-amber-50 border-amber-200 text-amber-700',
      dark: 'bg-amber-900/30 border-amber-800 text-amber-400',
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={`relative w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      }`}>

        {/* Header */}
        <div className={`flex items-start justify-between p-6 border-b ${
          darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-white'
        }`}>
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-medium px-2 py-1 rounded ${
                darkMode ? 'text-slate-400 bg-slate-800' : 'text-slate-500 bg-slate-100'
              }`}>
                {prompt.category}
              </span>
              <span className={`text-xs font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                ID: {prompt.id}
              </span>
            </div>
            <h2 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {prompt.title}
            </h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{expert.name}</span>
              <span className={`mx-1.5 ${darkMode ? 'text-slate-600' : 'text-slate-300'}`}>|</span>
              {expert.role}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className={`overflow-y-auto p-6 flex-1 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
          {/* Description */}
          <div className="mb-6">
            <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{prompt.description}</p>
          </div>

          {/* RACE Sections */}
          <div className="space-y-4">
            {sectionConfig.map(({ key, icon: Icon, label, color }) => {
              const content = raceSections[key as keyof typeof raceSections];
              if (!content) return null;

              return (
                <div key={key} className={`rounded-xl overflow-hidden border ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className={`flex items-center gap-2 px-4 py-2 border-b ${
                    darkMode ? colorClasses[color].dark : colorClasses[color].light
                  }`}>
                    <Icon size={14} />
                    <span className="text-sm font-semibold uppercase tracking-wide">{label}</span>
                  </div>
                  <div className="p-4">
                    <div className={`text-sm whitespace-pre-wrap leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
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
              <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium border ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-600'
              }`}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex items-center justify-between ${
          darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-100 bg-white'
        }`}>
          <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            {t.ui.modal.footer} • {new Date().getFullYear()}
          </span>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
              darkMode
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
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

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, Language, LanguageInfo } from '../context/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'dropdown' | 'inline' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'dropdown',
  className = '',
}) => {
  const { language, setLanguage, currentLangInfo, availableLanguages, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Mobile / Drawer display variant
  if (variant === 'mobile') {
    return (
      <div className={`w-full py-2 ${className}`}>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <span>{isRtl ? 'انتخاب زبان / Language' : 'Language / اللغة'}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {availableLanguages.map((item) => {
            const isSelected = item.code === language;
            const Flag = item.FlagComponent;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => handleSelect(item.code)}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-sm shadow-amber-500/10 font-bold'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Flag className="w-4 h-3 rounded-[2px]" />
                  <span className="text-[13px]">{item.flagEmoji}</span>
                </div>
                <span>{item.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Inline / Footer display variant
  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-full border border-white/10 ${className}`}>
        {availableLanguages.map((item) => {
          const isSelected = item.code === language;
          const Flag = item.FlagComponent;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => handleSelect(item.code)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
              title={`${item.nativeName} (${item.name})`}
            >
              <Flag className="w-3.5 h-2.5 rounded-[1px]" />
              <span className="text-xs">{item.flagEmoji}</span>
              <span className="hidden sm:inline text-[11px]">{item.nativeName}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop Header Dropdown variant
  const CurrentFlag = currentLangInfo.FlagComponent;

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/15 hover:border-amber-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Change Language"
      >
        <span className="flex items-center gap-1.5">
          <CurrentFlag className="w-4 h-3 rounded-[2px]" />
          <span className="text-sm leading-none">{currentLangInfo.flagEmoji}</span>
        </span>
        <span className="font-medium text-xs">{currentLangInfo.nativeName}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-amber-400' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute ${
              isRtl ? 'left-0' : 'right-0'
            } mt-2 w-48 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/15 shadow-2xl p-1.5 z-50 focus:outline-none`}
            role="listbox"
          >
            <div className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-slate-400 border-b border-white/10 uppercase mb-1">
              {isRtl ? 'زبان / Language' : 'Select Language'}
            </div>
            {availableLanguages.map((item) => {
              const isSelected = item.code === language;
              const Flag = item.FlagComponent;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm transition-all text-start ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div className="flex items-center gap-2.5">
                    <Flag className="w-4 h-3 rounded-[2px] shrink-0" />
                    <span className="text-base leading-none">{item.flagEmoji}</span>
                    <div className="flex flex-col text-start">
                      <span className="leading-tight">{item.nativeName}</span>
                      <span className="text-[10px] text-slate-400 font-normal leading-tight">{item.name}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

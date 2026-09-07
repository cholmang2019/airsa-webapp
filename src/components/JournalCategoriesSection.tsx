import React from 'react';
import { JOURNAL_CATEGORIES, JournalCategory } from '../data/journalData';

interface JournalCategoriesSectionProps {
  selectedCategory: JournalCategory;
  onSelectCategory: (cat: JournalCategory) => void;
  categoryCounts: Record<JournalCategory, number>;
}

export const JournalCategoriesSection: React.FC<JournalCategoriesSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <section
      id="journal-categories-section"
      className="py-10 bg-[#070a12] text-white border-b border-white/[0.08] sticky top-0 z-30 backdrop-blur-xl bg-[#070a12]/90"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Horizontal responsive category selector */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 scroll-smooth">
          {JOURNAL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat];

            return (
              <button
                key={cat}
                id={`category-pill-${cat.replace(/\s+/g, '-')}`}
                onClick={() => onSelectCategory(cat)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-[0_4px_16px_rgba(245,158,11,0.25)]'
                    : 'bg-slate-900/80 text-slate-300 border-white/[0.1] hover:border-white/25 hover:text-white'
                }`}
                type="button"
              >
                <span>{cat}</span>
                {typeof count === 'number' && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                      isActive
                        ? 'bg-slate-950/20 text-slate-950'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

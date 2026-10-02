import React from 'react';
import { JOURNAL_CATEGORIES, JournalCategory } from '../data/journalData';
import { useLanguage, Language } from '../context/LanguageContext';

interface JournalCategoriesSectionProps {
  selectedCategory: JournalCategory;
  onSelectCategory: (cat: JournalCategory) => void;
  categoryCounts: Record<JournalCategory, number>;
}

const CATEGORY_LABELS: Record<Language, Record<JournalCategory, string>> = {
  fa: {
    'همه مقالات': 'همه مقالات',
    'گردشگری سلامت': 'گردشگری سلامت',
    'سفر به ایران': 'سفر به ایران',
    'راهنمای سفر': 'راهنمای سفر',
    'ویزا': 'ویزا',
    'خدمات بین‌المللی': 'خدمات بین‌المللی',
  },
  en: {
    'همه مقالات': 'All Articles',
    'گردشگری سلامت': 'Medical Tourism',
    'سفر به ایران': 'Travel to Iran',
    'راهنمای سفر': 'Travel Guide',
    'ویزا': 'Visa',
    'خدمات بین‌المللی': 'International Services',
  },
  ar: {
    'همه مقالات': 'جميع المقالات',
    'گردشگری سلامت': 'السياحة العلاجية',
    'سفر به ایران': 'السفر إلى إيران',
    'راهنمای سفر': 'دليل السفر',
    'ویزا': 'تأشيرات الدخول',
    'خدمات بین‌المللی': 'الخدمات الدولية',
  },
  tr: {
    'همه مقالات': 'Tüm Makaleler',
    'گردشگری سلامت': 'Sağlık Turizmi',
    'سفر به ایران': 'İran Seyahati',
    'راهنمای سفر': 'Seyahat Rehberi',
    'ویزا': 'Vize',
    'خدمات بین‌المللی': 'Uluslararası Hizmetler',
  },
  zh: {
    'همه مقالات': '全部文章',
    'گردشگری سلامت': '医疗旅游',
    'سفر به ایران': '伊朗之旅',
    'راهنمای سفر': '旅行指南',
    'ویزا': '签证服务',
    'خدمات بین‌المللی': '国际商务服务',
  },
};

export const JournalCategoriesSection: React.FC<JournalCategoriesSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const { language, isRtl } = useLanguage();
  const labels = CATEGORY_LABELS[language] || CATEGORY_LABELS.fa;

  return (
    <section
      id="journal-categories-section"
      className="py-10 bg-[#070a12] text-white border-b border-white/[0.08] sticky top-0 z-30 backdrop-blur-xl bg-[#070a12]/90"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Horizontal responsive category selector */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 scroll-smooth">
          {JOURNAL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat];
            const label = labels[cat] || cat;

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
                <span>{label}</span>
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { getExperienceIranMasonry } from '../data/incomingTourismData';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceIranMasonrySection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const experiences = getExperienceIranMasonry(language);

  const allLabel = t.tourism.allFilter;
  const [selectedCategory, setSelectedCategory] = useState<string>(allLabel);

  const categories = [allLabel, ...Array.from(new Set(experiences.map((i) => i.category)))];

  const filteredItems =
    selectedCategory === allLabel || selectedCategory === 'همه' || selectedCategory === 'All' || selectedCategory === 'الكل'
      ? experiences
      : experiences.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="experience-iran"
      className="py-24 sm:py-32 bg-[#fafafc] text-slate-900 relative"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className={`max-w-2xl ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.tourism.experienceBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25]">
              {t.tourism.experienceTitle}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              {t.tourism.experienceSubtitle}
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Bento Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-md border border-slate-200/60 aspect-[4/3] flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 filter brightness-[0.75] group-hover:brightness-[0.85]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                <div
                  className={`relative z-10 p-5 sm:p-6 ${
                    isRtl ? 'text-right' : 'text-left'
                  } flex flex-col`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-amber-200">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">
                      {item.location || item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                    {item.description || item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

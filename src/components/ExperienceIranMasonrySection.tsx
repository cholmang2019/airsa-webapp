import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Eye } from 'lucide-react';
import { EXPERIENCES_DATA, ExperienceItem } from '../data/incomingTourismData';

const CATEGORIES = ['همه', 'معماری', 'تاریخ', 'غذا', 'فرهنگ', 'طبیعت', 'زندگی ایرانی'] as const;

export const ExperienceIranMasonrySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');

  const filteredItems = selectedCategory === 'همه'
    ? EXPERIENCES_DATA
    : EXPERIENCES_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="experience-iran"
      className="py-24 sm:py-32 bg-[#fafafc] text-slate-900 relative"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Maximum 2-3 components */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>جلوه‌های ناب ایران</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25]">
              تجربه‌ای فراتر از یک سفر معمولی
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              تلاقی اعجاب‌انگیز هنر و فرهنگ، طعم‌های اصیل، شگفتی‌های معماری، طبیعت بکر و زندگی پرطراوت مردم ایران.
            </p>
          </div>

          {/* Filter Chips / Categories */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => (
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
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-500 bg-slate-900 ${
                  // Specific responsive spans for organic masonry look
                  item.id === 'exp-arch' ? 'sm:col-span-2 lg:col-span-2 min-h-[380px] sm:min-h-[440px]' :
                  item.id === 'exp-hist' ? 'min-h-[320px] sm:min-h-[440px]' :
                  item.id === 'exp-nat' ? 'sm:col-span-2 lg:col-span-1 min-h-[320px] sm:min-h-[360px]' :
                  'min-h-[300px] sm:min-h-[360px]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.82] group-hover:brightness-[0.72] contrast-[1.05]"
                  loading="lazy"
                />

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-[11px] font-medium text-amber-300">
                    {item.category}
                  </span>
                </div>

                {/* Minimal Text Overlay (Bottom) */}
                <div className="absolute bottom-0 right-0 left-0 p-5 sm:p-6 text-right z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-md">
                    {item.subtitle}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimal Footer Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Compass className="w-4 h-4 text-amber-600" />
          <span>تمام تصاویر برگرفته از مسیرها و جاذبه‌های واقعی بسته‌های گردشگری ایرسا سیمرغ است.</span>
        </div>

      </div>
    </section>
  );
};

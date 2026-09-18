import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Sparkles, BookOpen } from 'lucide-react';
import { FEATURED_ARTICLE_DATA, Article } from '../data/journalData';

interface JournalFeaturedArticleSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const JournalFeaturedArticleSection: React.FC<JournalFeaturedArticleSectionProps> = ({
  onSelectArticle,
}) => {
  return (
    <section
      id="journal-featured-section"
      className="py-14 sm:py-20 bg-[#070a12] text-white relative border-b border-white/[0.08]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header Eyebrow */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>مقاله برگزیده سردبیر</span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>مطالعه در پنجره لایت‌باکس (Ajax)</span>
          </span>
        </div>

        {/* Large Featured Article Card (Clickable Lightbox Trigger) */}
        <motion.article
          id="featured-article-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => onSelectArticle(FEATURED_ARTICLE_DATA)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectArticle(FEATURED_ARTICLE_DATA);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`مطالعه مقاله برگزیده: ${FEATURED_ARTICLE_DATA.title}`}
          className="relative rounded-3xl overflow-hidden bg-slate-900/70 border border-white/[0.12] hover:border-amber-400/50 transition-all duration-500 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_30px_70px_-15px_rgba(245,158,11,0.15)] group cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Image Column (Column 1 on Desktop RTL) */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden bg-slate-950">
              <img
                src={FEATURED_ARTICLE_DATA.image}
                alt={FEATURED_ARTICLE_DATA.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-transparent lg:to-transparent" />

              {/* Category Pill on image */}
              <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg">
                  {FEATURED_ARTICLE_DATA.category}
                </span>
              </div>

              {/* Quick View Lightbox Hover Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] z-10 pointer-events-none">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950/90 border border-amber-400/40 text-amber-300 font-semibold text-sm shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>کلیک کنید جهت باز شدن لایت‌باکس مقاله</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-right space-y-6">
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400/80" />
                    {FEATURED_ARTICLE_DATA.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400/80" />
                    {FEATURED_ARTICLE_DATA.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug group-hover:text-amber-300 transition-colors">
                  {FEATURED_ARTICLE_DATA.title}
                </h2>

                {/* Short Excerpt */}
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pt-1">
                  {FEATURED_ARTICLE_DATA.excerpt}
                </p>
              </div>

              {/* Action Button: «مطالعه مقاله» */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-amber-500 group-hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.3)] group-hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.5)]">
                  <span>مطالعه کامل مقاله (Lightbox)</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                  خواندن سریع
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};


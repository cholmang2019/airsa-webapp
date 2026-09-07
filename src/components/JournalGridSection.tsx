import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, BookOpen } from 'lucide-react';
import { Article } from '../data/journalData';

interface JournalGridSectionProps {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  activeCategory: string;
}

export const JournalGridSection: React.FC<JournalGridSectionProps> = ({
  articles,
  onSelectArticle,
  activeCategory,
}) => {
  return (
    <section
      id="journal-grid-section"
      className="py-16 sm:py-24 bg-[#070a12] text-white relative border-b border-white/[0.08]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold text-amber-400 font-mono tracking-wider block mb-2">
              LATEST ARTICLES & GUIDES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              {activeCategory === 'همه مقالات'
                ? 'تازه‌ترین مقالات و راهنماهای کاربردی'
                : `مقالات حوزه: ${activeCategory}`}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>کلیک روی هر کارت = باز شدن در لایت‌باکس</span>
            </span>
            <span>نمایش {articles.length} مقاله تخصصی</span>
          </div>
        </div>

        {/* Responsive Grid: 3-column on Desktop, 1-column on Mobile */}
        {articles.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-slate-900/40 border border-white/10 p-8">
            <p className="text-slate-400 text-base">مقاله‌ای در این دسته‌بندی یافت نشد.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              // Varied image aspect compositions for editorial visual rhythm
              const isTall = index % 5 === 1;
              const aspectClass = isTall ? 'aspect-[4/3.2]' : 'aspect-[16/10]';

              return (
                <motion.article
                  key={article.id}
                  id={`article-card-${article.id}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectArticle(article)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectArticle(article);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`مطالعه مقاله: ${article.title} در پنجره لایت‌باکس`}
                  className="rounded-3xl overflow-hidden bg-slate-900/60 border border-white/[0.1] hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {/* Top Part: Image & Category */}
                  <div>
                    {/* Image with hover zoom */}
                    <div className={`relative w-full ${aspectClass} overflow-hidden bg-slate-950`}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.93] contrast-[1.04]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-amber-300 font-semibold text-xs shadow-sm">
                          {article.category}
                        </span>
                      </div>

                      {/* Quick Read Badge on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/30 backdrop-blur-[1px]">
                        <span className="px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-400/40 text-amber-300 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>مطالعه در لایت‌باکس</span>
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 space-y-3.5 text-right">
                      {/* Meta Date & Time */}
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-amber-400/70" />
                          {article.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400/70" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                        {article.title}
                      </h3>

                      {/* Short Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action: Read More («مطالعه مقاله») */}
                  <div className="p-6 sm:p-7 pt-0 border-t border-white/[0.06] mt-4">
                    <div className="w-full inline-flex items-center justify-between pt-4 text-amber-400 group-hover:text-amber-300 text-xs sm:text-sm font-semibold transition-colors">
                      <span>مطالعه کامل مقاله (Lightbox)</span>
                      <span className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-400/20 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center transition-all">
                        <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};


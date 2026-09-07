import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  BookmarkCheck,
  Share2,
  Check,
  Type,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Article, JOURNAL_CTA_DATA } from '../data/journalData';

interface JournalArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const JournalArticleModal: React.FC<JournalArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  allArticles,
}) => {
  const [copied, setCopied] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock background scroll when modal is open and add Escape listener
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [article, onClose]);

  // Reset scroll position and progress when article changes (Ajax transition)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setScrollProgress(0);
  }, [article?.id]);

  // Scroll listener for reading progress bar
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const totalScroll = scrollHeight - clientHeight;
    if (totalScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / totalScroll) * 100)));
    }
  };

  // Copy link handler
  const handleCopyLink = () => {
    if (!article) return;
    const url = window.location.href.split('#')[0] + `#article-${article.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  if (!article) return null;

  // Find index for Ajax Prev/Next navigation
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : allArticles[allArticles.length - 1];
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : allArticles[0];

  // Related articles (same category or others)
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .sort((a, b) => (a.category === article.category ? -1 : 1))
    .slice(0, 3);

  // Font size classes
  const bodyFontSizeClass =
    fontSizeLevel === 'xlarge'
      ? 'text-lg sm:text-xl leading-loose'
      : fontSizeLevel === 'large'
      ? 'text-base sm:text-lg leading-relaxed'
      : 'text-sm sm:text-base leading-relaxed';

  return (
    <div
      id="journal-lightbox-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-slate-950/85 backdrop-blur-xl overflow-hidden"
      dir="rtl"
      onClick={onClose}
    >
      <motion.div
        key={article.id}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl h-full max-h-[94vh] flex flex-col rounded-3xl bg-[#090d16] border border-white/15 text-white shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-article-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Reading Progress Indicator Bar (Ajax Lightbox Feature) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Lightbox Sticky Top Toolbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#090d16]/95 backdrop-blur-lg border-b border-white/10">
          {/* Right: Breadcrumb info (RTL) */}
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold shrink-0">
              {article.category}
            </span>
            <span className="text-xs text-slate-400 truncate max-w-[200px] sm:max-w-xs md:max-w-md hidden sm:inline-block">
              {article.title}
            </span>
          </div>

          {/* Left: Interactive Controls (Font size, Share, Ajax Next/Prev, Close) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Font size toggle */}
            <div className="hidden sm:flex items-center bg-slate-900 border border-white/10 rounded-xl p-0.5">
              <button
                onClick={() => setFontSizeLevel('normal')}
                title="اندازه متن معمولی"
                className={`px-2.5 py-1 text-xs rounded-lg transition-colors ${
                  fontSizeLevel === 'normal' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                title="اندازه متن بزرگ"
                className={`px-2.5 py-1 text-xs rounded-lg transition-colors font-medium ${
                  fontSizeLevel === 'large' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('xlarge')}
                title="اندازه متن بسیار بزرگ"
                className={`px-2.5 py-1 text-xs rounded-lg transition-colors font-semibold ${
                  fontSizeLevel === 'xlarge' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                A++
              </button>
            </div>

            {/* Share / Copy button */}
            <button
              onClick={handleCopyLink}
              title="اشتراک‌گذاری و کپی لینک مقاله"
              className="relative p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-xs transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium hidden sm:inline">کپی شد!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">اشتراک</span>
                </>
              )}
            </button>

            {/* Ajax Prev / Next Navigators in header */}
            {prevArticle && (
              <button
                onClick={() => onSelectArticle(prevArticle)}
                title={`مقاله قبلی: ${prevArticle.title}`}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

            {nextArticle && (
              <button
                onClick={() => onSelectArticle(nextArticle)}
                title={`مقاله بعدی: ${nextArticle.title}`}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {/* Close Lightbox Button */}
            <button
              id="close-lightbox-btn"
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md focus:outline-none"
              aria-label="بستن پنجره لایت‌باکس"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">بستن (Esc)</span>
            </button>
          </div>
        </div>

        {/* Scrollable Article Body Content */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-5 sm:px-10 md:px-14 py-8 space-y-10 focus:outline-none"
        >
          {/* Article Meta Information & Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 border-b border-white/10 pb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-400" />
                <span>نویسنده: {article.author}</span>
              </div>
              <div className="mr-auto hidden sm:flex items-center gap-1.5 text-xs text-amber-300/80 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>IRSA SIMORGH LIGHTBOX</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 id="lightbox-article-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {article.title}
            </h1>
          </div>

          {/* Hero Editorial Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-center filter brightness-[0.94] contrast-[1.04]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 right-5 z-10">
              <span className="text-xs text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-sans">
                عکاسی اختصاصی و مستندسازی ایرسا سیمرغ
              </span>
            </div>
          </div>

          {/* Lead Paragraph / Summary Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/10 border-r-4 border-amber-400 border-t border-b border-l border-amber-400/20 shadow-inner">
            <p className="text-base sm:text-lg md:text-xl text-amber-200 font-medium leading-relaxed">
              {article.content.intro}
            </p>
          </div>

          {/* Article Detailed Sections */}
          <div className="space-y-8 pt-2">
            {article.content.sections.map((section, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-white/[0.08] space-y-3.5 hover:border-white/20 transition-colors"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)] shrink-0" />
                  {section.heading}
                </h2>
                <p className={`text-slate-300 font-light pr-6 ${bodyFontSizeClass}`}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Editorial Conclusion Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 border border-amber-400/30 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-amber-300 text-base font-bold">
              <BookmarkCheck className="w-5 h-5 text-amber-400" />
              <span>جمع‌بندی تحریریه و راهنمای مراجعان</span>
            </div>
            <p className={`text-slate-300 font-light leading-relaxed ${bodyFontSizeClass}`}>
              {article.content.conclusion}
            </p>
          </div>

          {/* In-Article Direct Consultation Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-l from-amber-500/20 via-slate-900 to-slate-900 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-right">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                نیاز به راهنمایی یا مشاوره مستقیم در خصوص این موضوع دارید؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                کارشناسان چندزبانه ایرسا سیمرغ آماده پاسخگویی سریع و تنظیم خدمات درمانی و سفر شما هستند.
              </p>
            </div>
            <a
              href={JOURNAL_CTA_DATA.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 transition-all shadow-lg hover:scale-105"
            >
              <span>{JOURNAL_CTA_DATA.buttonText}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Ajax Related Articles Shelf (Seamless internal jumping without closing modal) */}
          {relatedArticles.length > 0 && (
            <div className="space-y-5 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                  <Sparkles className="w-4 h-4" />
                  <span>مقالات پیشنهادی دیگر (مطالعه فوری با Ajax)</span>
                </div>
                <span className="text-xs text-slate-400">کلیک کنید تا بلافاصله باز شود</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectArticle(rel)}
                    className="p-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-amber-400/40 cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-full h-24 rounded-lg overflow-hidden mb-3 bg-slate-950">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[10px] text-amber-300 px-2 py-0.5 rounded bg-white/5 font-semibold">
                      {rel.category}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-amber-200 transition-colors mt-2 line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Navigation Bar inside Lightbox */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {prevArticle && (
                <button
                  onClick={() => onSelectArticle(prevArticle)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>مقاله قبلی</span>
                </button>
              )}
              {nextArticle && (
                <button
                  onClick={() => onSelectArticle(nextArticle)}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <span>مقاله بعدی</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-medium transition-colors"
            >
              <span>بستن پنجره لایت‌باکس و بازگشت به صفحه مجله</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

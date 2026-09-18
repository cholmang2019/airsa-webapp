import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquareQuote, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { JOURNAL_CTA_DATA } from '../data/journalData';

export const JournalCtaSection: React.FC = () => {
  return (
    <section
      id="journal-cta-section"
      className="py-20 sm:py-28 bg-[#070a12] text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] text-center space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
            <MessageSquareQuote className="w-4 h-4 text-amber-400" />
            <span>مشاوره و پشتیبانی اختصاصی</span>
          </div>

          {/* Title: «سؤالی درباره سفر یا درمان در ایران دارید؟» */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.25] max-w-3xl mx-auto">
            {JOURNAL_CTA_DATA.title}
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            {JOURNAL_CTA_DATA.subtitle}
          </p>

          {/* Key trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-2 pb-2 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>پاسخگویی سریع و محرمانه</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-amber-400" />
              <span>تیم کارشناسان چندزبانه</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>همراهی ۲۴ ساعته</span>
            </div>
          </div>

          {/* Action Button: «درخواست مشاوره» -> https://medixmaster.com/contact-us/ */}
          <div className="pt-4">
            <a
              id="journal-cta-consultation-btn"
              href={JOURNAL_CTA_DATA.contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(245,158,11,0.35)] hover:shadow-[0_20px_45px_-5px_rgba(245,158,11,0.55)] hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>{JOURNAL_CTA_DATA.buttonText}</span>
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

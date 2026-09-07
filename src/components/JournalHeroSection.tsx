import React from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { JOURNAL_HERO_DATA } from '../data/journalData';

export const JournalHeroSection: React.FC = () => {
  return (
    <section
      id="journal-hero-section"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#070a12] text-white pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Background Large Editorial Travel Image with High Clarity */}
      <div className="absolute inset-0 z-0">
        <img
          id="journal-hero-bg-image"
          src={JOURNAL_HERO_DATA.image}
          alt="مجله ایرسا سیمرغ - راهنمای سفر، گردشگری سلامت و خدمات بین‌المللی"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.08] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Refined gradient overlay for clear contrast while showcasing photography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/55 to-[#070a12]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950/25 via-transparent to-transparent opacity-70" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Editorial Pill */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/[0.15] text-xs sm:text-sm text-slate-200 shadow-xl mb-8"
        >
          <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
          <span className="font-medium tracking-wide">{JOURNAL_HERO_DATA.badge}</span>
        </motion.div>

        {/* Title: «مجله ایرسا سیمرغ» */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 drop-shadow-md"
        >
          {JOURNAL_HERO_DATA.title}
        </motion.h1>

        {/* Subtitle: «راهنمای سفر، گردشگری سلامت و خدمات بین‌المللی» */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl text-amber-200/95 font-medium leading-relaxed drop-shadow"
        >
          {JOURNAL_HERO_DATA.subtitle}
        </motion.p>

        {/* Short Editorial Mission statement */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed drop-shadow-sm"
        >
          {JOURNAL_HERO_DATA.description}
        </motion.p>
      </div>
    </section>
  );
};

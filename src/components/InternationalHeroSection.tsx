import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpLeft, Globe2, ShieldCheck } from 'lucide-react';
import { INTERNATIONAL_HERO_DATA, OFFICIAL_CONSULTATION_URL } from '../data/internationalServicesData';

export const InternationalHeroSection: React.FC = () => {
  return (
    <section
      id="international-hero-section"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070a12] text-white pt-16 pb-20 sm:pt-24 sm:pb-32 border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Background Photography with Sophisticated Dark Masking */}
      <div className="absolute inset-0 z-0">
        <img
          src={INTERNATIONAL_HERO_DATA.image}
          alt="دروازه‌ای برای ورود به ایران - خدمات بین‌المللی ایرسا سیمرغ"
          className="w-full h-full object-cover object-center filter brightness-[0.40] contrast-[1.12] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered Vignettes and Ambient Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/75 to-[#070a12]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-80" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Subtle Luxury Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/[0.15] text-xs sm:text-sm text-slate-200 shadow-xl mb-8"
        >
          <Globe2 className="w-4 h-4 text-amber-300 shrink-0" />
          <span className="font-medium tracking-wide">{INTERNATIONAL_HERO_DATA.badge}</span>
        </motion.div>

        {/* Primary Title: «دروازه‌ای برای ورود به ایران» */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.2] mb-7 drop-shadow-sm"
        >
          {INTERNATIONAL_HERO_DATA.title}
        </motion.h1>

        {/* Subtitle: «خدمات بین‌المللی برای افرادی که به دنبال راه‌اندازی کسب‌وکار، اقامت یا سرمایه‌گذاری در ایران هستند.» */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-lg sm:text-2xl text-slate-200/95 font-light leading-relaxed mb-10 text-balance"
        >
          {INTERNATIONAL_HERO_DATA.subtitle}
        </motion.p>

        {/* Primary Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            id="hero-primary-cta"
            href={OFFICIAL_CONSULTATION_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 font-bold text-base hover:opacity-95 shadow-[0_10px_35px_rgba(251,191,36,0.25)] hover:shadow-[0_12px_45px_rgba(251,191,36,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>{INTERNATIONAL_HERO_DATA.ctaText}</span>
            <ArrowUpLeft className="w-5 h-5 text-slate-950 transition-transform group-hover:-translate-x-1" />
          </a>
        </motion.div>

        {/* Minimal Trust Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-14 flex items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-light"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-300/80" />
            <span>رازداری کامل و امنیت اطلاعات حقوقی</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 hidden sm:inline-block" />
          <span className="hidden sm:inline-block">مشاوره اختصاصی به زبان‌های انگلیسی و فارسی</span>
        </motion.div>

      </div>
    </section>
  );
};

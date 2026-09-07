import React from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { ABOUT_HERO_DATA } from '../data/aboutUsData';

export const AboutHeroSection: React.FC = () => {
  return (
    <section
      id="about-hero-section"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#070a12] text-white pt-20 pb-24 sm:pt-28 sm:pb-36 border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Background Photography with Luminous & Clear Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          id="about-hero-image"
          src={ABOUT_HERO_DATA.image}
          alt="درباره ایرسا سیمرغ - گردشگری، سلامت و خدمات بین‌المللی"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.06] scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Layered Vignette & Ambient Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/50 to-[#070a12]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950/20 via-transparent to-transparent opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Corporate Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/[0.15] text-xs sm:text-sm text-slate-200 shadow-xl mb-8"
        >
          <Compass className="w-4 h-4 text-amber-300 shrink-0" />
          <span className="font-medium tracking-wide">{ABOUT_HERO_DATA.badge}</span>
        </motion.div>

        {/* Title: «درباره ایرسا سیمرغ» */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.2] mb-7 drop-shadow-sm"
        >
          {ABOUT_HERO_DATA.title}
        </motion.h1>

        {/* Subtitle: «همراه شما در تمام مسیر سفر، درمان و تجربه ایران» */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl text-amber-200/95 font-medium leading-relaxed drop-shadow"
        >
          {ABOUT_HERO_DATA.subtitle}
        </motion.p>

      </div>
    </section>
  );
};

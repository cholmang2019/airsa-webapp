import React from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { getAboutHeroData } from '../data/aboutUsData';
import { useLanguage } from '../context/LanguageContext';

export const AboutHeroSection: React.FC = () => {
  const { language, dir } = useLanguage();
  const hero = getAboutHeroData(language);

  return (
    <section
      id="about-hero-section"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#070a12] text-white pt-20 pb-24 sm:pt-28 sm:pb-36 border-b border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute inset-0 z-0">
        <img
          id="about-hero-image"
          src={hero.image}
          alt={hero.title}
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.06] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/50 to-[#070a12]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950/20 via-transparent to-transparent opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/[0.15] text-xs sm:text-sm text-slate-200 shadow-xl mb-8"
        >
          <Compass className="w-4 h-4 text-amber-300 shrink-0" />
          <span className="font-medium tracking-wide">{hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.2] mb-7 drop-shadow-sm"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl text-amber-200/95 font-medium leading-relaxed drop-shadow"
        >
          {hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
};

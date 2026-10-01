import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { getContactPageData } from '../data/contactData';
import { useLanguage } from '../context/LanguageContext';

export const ContactHeroSection: React.FC = () => {
  const { language, dir, t } = useLanguage();
  const { hero } = getContactPageData(language);

  const handleScrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact-hero-section"
      className="relative min-h-[68vh] sm:min-h-[74vh] flex items-center justify-center overflow-hidden bg-[#070a12] text-white pt-24 pb-20 sm:py-24"
      dir={dir}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image}
          alt={hero.title}
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] saturate-[1.08] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/30 to-[#070a12]/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#070a12]/50" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/15 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-medium shadow-xl"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.2]"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-light leading-relaxed drop-shadow"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2"
        >
          <button
            id="hero-scroll-btn"
            type="button"
            onClick={handleScrollToForm}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/30 font-medium text-xs sm:text-sm transition-all shadow-md group cursor-pointer"
          >
            <span>{t.contact.contactTitle}</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

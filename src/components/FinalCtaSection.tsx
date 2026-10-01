import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Shield, Headphones } from 'lucide-react';
import { getFinalCtaData, CONSULTATION_URL } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

export const FinalCtaSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const cta = getFinalCtaData(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="final-cta"
      className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden"
      dir={dir}
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-medium mb-8"
        >
          <span>{t.home.confidentialBadge}</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.3] mb-6 text-center max-w-2xl"
        >
          {cta.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed mb-12"
        >
          {cta.subtitle}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-14"
        >
          <a
            id="final-cta-btn"
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3.5 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base sm:text-lg transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_45px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-1 active:translate-y-0"
          >
            <span>{cta.buttonText}</span>
            <ArrowIcon className={`w-5 h-5 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
          </a>
        </motion.div>

        {/* Subtle Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 w-full text-center sm:text-right">
          <div className={`flex items-center justify-center sm:justify-start gap-3 text-slate-400 ${!isRtl ? 'sm:justify-start' : ''}`}>
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">{t.home.responseWithin24h}</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-slate-400">
            <Shield className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">{t.home.confidentialRecords}</span>
          </div>

          <div className={`flex items-center justify-center sm:justify-end gap-3 text-slate-400 ${!isRtl ? 'sm:justify-end' : ''}`}>
            <Headphones className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">{t.home.dedicatedCaseManager}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

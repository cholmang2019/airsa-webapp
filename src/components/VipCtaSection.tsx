import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, ShieldCheck, Lock, Headphones } from 'lucide-react';
import { getVipCtaData, VIP_CONSULTATION_URL } from '../data/vipServicesData';
import { useLanguage } from '../context/LanguageContext';

export const VipCtaSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const cta = getVipCtaData(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="vip-cta-section"
      className="py-28 sm:py-40 bg-slate-950 text-white relative overflow-hidden border-t border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] text-amber-200/90 text-xs sm:text-sm font-medium mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>IRSA SIMORGH | VIP CONCIERGE</span>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.2] text-center"
        >
          {cta.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-10 text-center"
        >
          {cta.subtitle}
        </motion.p>

        {/* Button */}
        <motion.a
          id="vip-final-cta-button"
          href={VIP_CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_12px_45px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_55px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>{cta.buttonText}</span>
          <ArrowIcon className={`w-5 h-5 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
        </motion.a>

        {/* Security & Service Pillars */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-center gap-2.5">
            <Lock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.home.confidentialRecords}</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.home.dedicatedInterpreter}</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Headphones className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{t.home.conciergeSupport}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

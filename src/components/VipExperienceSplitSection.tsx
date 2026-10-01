import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { getVipExperienceData, VIP_CONSULTATION_URL } from '../data/vipServicesData';
import { useLanguage } from '../context/LanguageContext';

export const VipExperienceSplitSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const experience = getVipExperienceData(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="vip-experience-section"
      className="py-24 sm:py-36 bg-[#0f172a] text-white relative overflow-hidden border-t border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Split Side 1: Photography */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 relative ${isRtl ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/[0.12] group bg-slate-900">
              <img
                src={experience.image}
                alt={experience.title}
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/[0.15] text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>{t.home.conciergeSupport}</span>
                </div>
                <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 font-semibold">
                  PRIVATE ATTACHÉ
                </span>
              </div>
            </div>

            <div
              className={`hidden sm:flex absolute -bottom-6 ${
                isRtl ? '-left-6 text-right' : '-right-6 text-left'
              } items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/[0.15] shadow-2xl text-white z-10 max-w-xs`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold block text-slate-100">{t.home.confidentialRecords}</span>
                <span className="text-[11px] text-slate-400">{t.form.confidentialTitle}</span>
              </div>
            </div>
          </motion.div>

          {/* Split Side 2: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 flex flex-col items-start ${
              isRtl ? 'text-right order-1 lg:order-2' : 'text-left order-1 lg:order-2'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>THE VIP EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
              {experience.title}
            </h2>

            <p className="text-base sm:text-lg text-amber-200/90 font-medium leading-relaxed mb-4">
              {experience.lead}
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed sm:leading-loose mb-10">
              {experience.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {experience.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/30 transition-colors ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <a
              id="vip-experience-cta"
              href={VIP_CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(245,158,11,0.4)] group cursor-pointer"
            >
              <span>{t.home.bookTripCoordination}</span>
              <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Award,
} from 'lucide-react';
import { getVipHospitalityOverview, VIP_CONSULTATION_URL } from '../data/vipServicesData';
import { useLanguage } from '../context/LanguageContext';

export const VipHospitalityStandardSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const overview = getVipHospitalityOverview(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="vip-hospitality-standard"
      className="py-24 sm:py-36 bg-[#0e1526] text-white relative overflow-hidden border-t border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1 (Text & Highlights) */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{overview.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
              {overview.title}
            </h2>

            <p className="text-amber-200/90 text-base sm:text-lg font-medium leading-relaxed">
              {overview.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {overview.description}
            </p>

            <div className="pt-2 space-y-3.5">
              {overview.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-400/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-100 block">{item.title}</span>
                    <span className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                id="vip-hospitality-cta"
                href={VIP_CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 border border-amber-400/40 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-sm transition-all duration-300 shadow-lg group cursor-pointer"
              >
                <span>{t.home.learnMore}</span>
                <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>
          </motion.div>

          {/* Column 2 (Imagery & Stats) */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] border border-white/[0.12] group bg-slate-900">
              <img
                src={overview.image}
                alt={overview.title}
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/[0.15] text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>{overview.tag}</span>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 font-semibold">
                  WORLD CLASS
                </span>
              </div>
            </div>

            {/* Subtle Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {overview.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-center"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 block font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-300 font-light mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

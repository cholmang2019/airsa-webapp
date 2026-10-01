import React from 'react';
import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import { getAboutApproachData } from '../data/aboutUsData';
import { useLanguage } from '../context/LanguageContext';

export const AboutApproachSection: React.FC = () => {
  const { language, dir, isRtl } = useLanguage();
  const approach = getAboutApproachData(language);

  return (
    <section
      id="about-approach-section"
      className="py-24 sm:py-36 bg-[#080c15] text-white relative overflow-hidden border-b border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Rich Text & Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-7 space-y-6 ${isRtl ? 'text-right order-1' : 'text-left order-1'}`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>{approach.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
              {approach.title}
            </h2>

            <div className="space-y-4 pt-2">
              {approach.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-300 font-light leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/[0.08]">
              {approach.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-amber-400/25 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-white mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-light">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Photography */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-5 relative ${isRtl ? 'order-2' : 'order-2'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] border border-white/[0.12] group bg-slate-900">
              <img
                src={approach.image}
                alt={approach.title}
                className="w-full h-auto aspect-[4/5] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.90] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

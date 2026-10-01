import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { getVipBrandStatement } from '../data/vipServicesData';
import { useLanguage } from '../context/LanguageContext';

export const VipBrandStatementMasonrySection: React.FC = () => {
  const { language, dir, isRtl } = useLanguage();
  const brand = getVipBrandStatement(language);

  return (
    <section
      id="vip-brand-statement"
      className="py-28 sm:py-40 bg-[#070a12] text-white relative overflow-hidden border-t border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Large Minimalist Brand Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-amber-300 text-xs sm:text-sm font-medium mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>VIP HOSPITALITY ETHOS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 tracking-tight mb-6 leading-[1.25] select-none"
          >
            {brand.faTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-200/95 leading-relaxed mb-6"
          >
            {brand.faStatement}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {brand.quote}
          </motion.p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {brand.principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <span className="text-xs font-mono text-amber-400 block mb-3 font-semibold">
                0{index + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

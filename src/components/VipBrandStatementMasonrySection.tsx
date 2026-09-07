import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { VIP_BRAND_STATEMENT } from '../data/vipServicesData';

export const VipBrandStatementMasonrySection: React.FC = () => {
  return (
    <section
      id="vip-brand-statement"
      className="py-28 sm:py-40 bg-[#070a12] text-white relative overflow-hidden border-t border-white/[0.08]"
      dir="rtl"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Large Minimalist Brand Statement */}
        <div className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
          
          {/* Subtle Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-amber-300 text-xs sm:text-sm font-medium mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>فلسفه بنیادین میزبانی ایرسا سیمرغ</span>
          </motion.div>

          {/* Large Persian Minimalist Statement */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 tracking-tight mb-6 leading-[1.25] select-none"
            dir="rtl"
          >
            {VIP_BRAND_STATEMENT.faTitle}
          </motion.h2>

          {/* Persian Supporting Text: «از اولین لحظه ورود تا زمان بازگشت، در کنار شما هستیم.» */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-200/95 leading-relaxed mb-6"
          >
            {VIP_BRAND_STATEMENT.faStatement}
          </motion.p>

          {/* Context Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {VIP_BRAND_STATEMENT.subtext}
          </motion.p>
        </div>

        {/* Masonry Curated Imagery Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {VIP_BRAND_STATEMENT.mosaicImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-xl bg-slate-900 ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-1 min-h-[260px] sm:min-h-[320px]' :
                idx === 1 ? 'min-h-[260px] sm:min-h-[320px]' :
                idx === 2 ? 'min-h-[260px] sm:min-h-[320px]' :
                'sm:col-span-2 lg:col-span-2 min-h-[260px] sm:min-h-[320px]'
              }`}
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.8] group-hover:brightness-[0.7] contrast-[1.05]"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Bottom Label (Subtle Glassmorphism) */}
              <div className="absolute bottom-4 right-4 left-4 z-10 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

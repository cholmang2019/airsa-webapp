import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_BRAND_VALUES_DATA } from '../data/aboutUsData';

export const AboutBrandValuesSection: React.FC = () => {
  return (
    <section
      id="about-brand-values-section"
      className="py-24 sm:py-36 bg-[#090d16] text-white relative border-b border-white/[0.08]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-mono tracking-widest text-amber-300 uppercase block mb-3">
            VALUES & PRINCIPLES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            ارزش‌های بنیادین برند
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            اصول چهارگانه‌ای که قطب‌نمای تمامی تصمیمات، خدمات و تعاملات ما در ایرسا سیمرغ است.
          </p>
        </div>

        {/* 4 Minimal Cards Grid (Clean, elegant, no excessive icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ABOUT_BRAND_VALUES_DATA.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-9 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/[0.10] hover:border-amber-400/35 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Tag & Accent Line */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-widest text-slate-400 group-hover:text-amber-300 transition-colors">
                    {value.tag}
                  </span>
                  <div className="w-8 h-[2px] bg-white/20 group-hover:bg-amber-400 group-hover:w-12 transition-all duration-300" />
                </div>

                {/* Core Title (اعتماد / کیفیت / مراقبت / تجربه) */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-amber-200 transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>

              {/* Bottom Subtle Order Marker */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] text-right">
                <span className="text-[11px] text-slate-500 font-mono">
                  0{index + 1} / 04
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

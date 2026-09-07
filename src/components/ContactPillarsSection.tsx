import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_PAGE_DATA } from '../data/contactData';

/**
 * ContactPillarsSection — سکشن ۳ ستونه تعهدات و ارکان خدمات ایرسا سیمرغ
 * شامل ۳ ستون متوازن با تصویر، عنوان و زیرعنوان متناسب
 */
export const ContactPillarsSection: React.FC = () => {
  const { pillarsSection } = CONTACT_PAGE_DATA;

  return (
    <section
      id="contact-pillars-section"
      className="py-16 sm:py-24 bg-[#080c15] text-white border-b border-white/[0.08] relative overflow-hidden"
      dir="rtl"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5">
          <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-semibold">
            {pillarsSection.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {pillarsSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            {pillarsSection.subtitle}
          </p>
        </div>

        {/* 3 Columns Grid with Balanced Images and Texts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pillarsSection.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-400/40 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Column Image with Controlled Aspect Ratio & Hover Animation */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.03] saturate-[1.05] group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Index Pill in Corner */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/70 border border-white/15 backdrop-blur-md text-amber-300 font-bold text-xs">
                  {item.number}
                </div>
              </div>

              {/* Column Text Content (Balanced Title & Subtitle) */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed text-justify">
                    {item.subtitle}
                  </p>
                </div>

                {/* Subtle Decorative Accent */}
                <div className="pt-2">
                  <div className="w-8 h-0.5 bg-white/10 group-hover:bg-amber-400/60 rounded-full transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

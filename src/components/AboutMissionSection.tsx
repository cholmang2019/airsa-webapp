import React from 'react';
import { motion } from 'motion/react';
import { Flag, Sparkles } from 'lucide-react';
import { ABOUT_MISSION_DATA } from '../data/aboutUsData';

export const AboutMissionSection: React.FC = () => {
  return (
    <section
      id="about-mission-section"
      className="py-24 sm:py-36 bg-[#070a12] text-white relative overflow-hidden border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Visually Strong Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/[0.15] bg-slate-900/90 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Supporting Image Column */}
            <div className="lg:col-span-5 relative h-72 lg:h-[480px] w-full overflow-hidden bg-slate-950 order-2 lg:order-1">
              <img
                src={ABOUT_MISSION_DATA.image}
                alt="ماموریت ایرسا سیمرغ - مراقبت و میزبانی حرفه‌ای"
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/30 to-transparent" />
              
              <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>CORE PURPOSE</span>
              </div>
            </div>

            {/* Mission Statement Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 text-right order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
                <Flag className="w-3.5 h-3.5 text-amber-400" />
                <span>{ABOUT_MISSION_DATA.badge}</span>
              </div>

              {/* Title: «ماموریت ما» */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2]">
                {ABOUT_MISSION_DATA.title}
              </h2>

              {/* Required Text: «ایجاد تجربه‌ای حرفه‌ای، یکپارچه و قابل اعتماد برای مسافران و بیماران بین‌المللی.» */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-amber-200 font-bold leading-relaxed">
                {ABOUT_MISSION_DATA.text}
              </p>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                {ABOUT_MISSION_DATA.supportingText}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

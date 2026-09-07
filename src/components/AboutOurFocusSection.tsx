import React from 'react';
import { motion } from 'motion/react';
import { 
  Palmtree, 
  HeartPulse, 
  Crown, 
  Globe2, 
  Target 
} from 'lucide-react';
import { ABOUT_OUR_FOCUS_DATA } from '../data/aboutUsData';

const focusIcons = [
  Palmtree,
  HeartPulse,
  Crown,
  Globe2,
];

export const AboutOurFocusSection: React.FC = () => {
  return (
    <section
      id="about-our-focus-section"
      className="py-24 sm:py-36 bg-[#0e1526] text-white relative border-b border-white/[0.08]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>حوزه‌های فعالیت</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            تمرکز تخصصی ایرسا سیمرغ
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            ارائه خدمات جامع و استاندارد در چهار محور بنیادین گردشگری، درمان، تشریفات و تعاملات فرامرزی.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ABOUT_OUR_FOCUS_DATA.map((item, index) => {
            const IconComponent = focusIcons[index % focusIcons.length];
            return (
              <motion.div
                key={item.id}
                id={`focus-card-${item.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/80 border border-white/[0.12] hover:border-amber-400/35 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  {/* Top Floating Badge & Number */}
                  <div className="absolute top-4 right-4 left-4 flex items-center justify-between z-10">
                    <div className="w-10 h-10 rounded-xl bg-slate-950/80 backdrop-blur-xl border border-white/20 text-amber-300 flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 px-2.5 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15">
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2.5 group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

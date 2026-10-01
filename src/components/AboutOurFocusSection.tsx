import React from 'react';
import { motion } from 'motion/react';
import {
  Palmtree,
  HeartPulse,
  Crown,
  Globe2,
  Target,
} from 'lucide-react';
import { getAboutOurFocusData } from '../data/aboutUsData';
import { useLanguage } from '../context/LanguageContext';

const focusIcons = [
  Palmtree,
  HeartPulse,
  Crown,
  Globe2,
];

export const AboutOurFocusSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const focusItems = getAboutOurFocusData(language);

  return (
    <section
      id="about-our-focus-section"
      className="py-24 sm:py-36 bg-[#0e1526] text-white relative border-b border-white/[0.08]"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.home.servicesBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            {t.home.servicesTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.home.servicesSubtitle}
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {focusItems.map((item, index) => {
            const IconComponent = focusIcons[index % focusIcons.length];
            return (
              <motion.div
                key={item.id}
                id={`focus-card-${item.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-3xl overflow-hidden bg-slate-900/80 border border-white/[0.12] hover:border-amber-400/35 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1 ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  <div
                    className={`absolute top-4 ${
                      isRtl ? 'right-4' : 'left-4'
                    } w-10 h-10 rounded-xl bg-slate-950/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-lg`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

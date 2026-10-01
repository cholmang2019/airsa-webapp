import React from 'react';
import { motion } from 'motion/react';
import {
  PlaneLanding,
  Sparkles,
  Car,
  Hotel,
  UserCheck,
  PlaneTakeoff,
  Clock,
} from 'lucide-react';
import { getVipTimelineSteps } from '../data/vipServicesData';
import { useLanguage } from '../context/LanguageContext';

const timelineIcons = [
  PlaneLanding,
  Sparkles,
  Car,
  Hotel,
  UserCheck,
  PlaneTakeoff,
];

export const VipJourneyTimelineSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const steps = getVipTimelineSteps(language);

  return (
    <section
      id="vip-journey-timeline"
      className="py-24 sm:py-36 bg-[#0b101c] text-white relative border-t border-white/[0.08]"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.vip.vipTimelineBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            {t.vip.vipTimelineTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.vip.vipTimelineSubtitle}
          </p>
        </div>

        {/* Desktop Horizontal Ribbon Progression */}
        <div className="hidden lg:flex items-center justify-between relative mb-20 px-6">
          <div className="absolute top-7 right-12 left-12 h-0.5 bg-gradient-to-r from-white/10 via-amber-400/30 to-white/10 -translate-y-1/2 z-0" />

          {steps.map((step, idx) => {
            const IconComp = timelineIcons[idx] || Sparkles;
            return (
              <div key={step.stepEn} className="relative z-10 flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/[0.15] group-hover:border-amber-400/80 shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center justify-center text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-800 backdrop-blur-md">
                  <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                <div className="mt-4 text-center">
                  <span className="font-mono text-xs font-bold text-amber-400 block tracking-wider mb-0.5">
                    {step.stepEn}
                  </span>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                    {step.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {steps.map((step, idx) => {
            const IconComp = timelineIcons[idx] || Sparkles;

            return (
              <motion.div
                key={step.stepEn}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`p-7 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/[0.08] hover:border-amber-400/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between ${
                  isRtl ? 'text-right' : 'text-left'
                } backdrop-blur-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300">
                      {step.stepEn}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] text-amber-300 flex items-center justify-center shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs font-medium text-amber-200/90 mb-3">
                    {step.lead}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {step.badge}
                  </span>
                  <span className="text-xs font-semibold text-amber-300">
                    VIP Protocol
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

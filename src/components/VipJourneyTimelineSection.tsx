import React from 'react';
import { motion } from 'motion/react';
import { 
  PlaneLanding, 
  Sparkles, 
  Car, 
  Hotel, 
  UserCheck, 
  PlaneTakeoff, 
  Clock
} from 'lucide-react';
import { VIP_TIMELINE_STEPS } from '../data/vipServicesData';

const timelineIcons = [
  PlaneLanding,
  Sparkles,
  Car,
  Hotel,
  UserCheck,
  PlaneTakeoff,
];

export const VipJourneyTimelineSection: React.FC = () => {
  return (
    <section
      id="vip-journey-timeline"
      className="py-24 sm:py-36 bg-[#0b101c] text-white relative border-t border-white/[0.08]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>مسیر گام‌به‌گام تشریفات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            گاه‌شمار یک تجربه ممتاز
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            از نخستین لحظه فرود تا آخرین نگاه پیش از پرواز، تک‌تک ثانیه‌ها با آرامش و دقت مدیریت می‌شوند.
          </p>
        </div>

        {/* Desktop Horizontal Ribbon Progression */}
        <div className="hidden lg:flex items-center justify-between relative mb-20 px-6">
          {/* Continuous Glow Line */}
          <div className="absolute top-7 right-12 left-12 h-0.5 bg-gradient-to-r from-white/10 via-amber-400/30 to-white/10 -translate-y-1/2 z-0" />

          {VIP_TIMELINE_STEPS.map((step, idx) => {
            const IconComp = timelineIcons[idx];
            return (
              <div key={step.stepEn} className="relative z-10 flex flex-col items-center group">
                {/* Numbered / Icon Node */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/[0.15] group-hover:border-amber-400/80 shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center justify-center text-amber-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-800 backdrop-blur-md">
                  <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                
                {/* Labels */}
                <div className="mt-3 text-center">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                    {step.stepEn}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {step.stepFa}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Timeline Cards (Grid View) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VIP_TIMELINE_STEPS.map((step, index) => {
            const StepIcon = timelineIcons[index];
            return (
              <motion.div
                key={step.stepEn}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-white/[0.08] hover:border-amber-400/30 shadow-lg hover:shadow-2xl transition-all duration-300 text-right group backdrop-blur-sm"
              >
                {/* Header with Step indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.12] text-amber-300 flex items-center justify-center shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.06] text-amber-200/90 font-medium border border-white/[0.08]">
                      {step.stepEn}
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-500 group-hover:text-amber-400 transition-colors">
                      {step.badge}
                    </span>
                  </div>
                </div>

                {/* Persian Step Title & Subtitle */}
                <div className="mb-2">
                  <span className="text-xs font-semibold text-amber-400/90 block mb-1">
                    {step.stepFa}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Lead highlight */}
                <p className="text-xs text-slate-400 font-medium mb-3">
                  {step.lead}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-light border-t border-white/[0.06] pt-3">
                  {step.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

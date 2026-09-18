import React from 'react';
import { motion } from 'motion/react';
import { 
  FileCheck, 
  Stamp, 
  PlaneLanding, 
  Hotel, 
  Sparkles, 
  PlaneTakeoff, 
  Check, 
  ArrowLeft 
} from 'lucide-react';
import { JOURNEY_STEPS, CONSULTATION_URL } from '../data/incomingTourismData';

const stepIcons = [
  FileCheck,
  Stamp,
  PlaneLanding,
  Hotel,
  Sparkles,
  PlaneTakeoff,
];

export const PersonalizedJourneySection: React.FC = () => {
  return (
    <section
      id="personalized-journey"
      className="py-24 sm:py-32 bg-white text-slate-900 relative border-t border-slate-200/70"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Maximum 2-3 components */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-4">
            <span>مسیر گام‌به‌گام مسافر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-5">
            سفر شما چگونه شکل می‌گیرد؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            از نخستین گفتگوی مشاوره تا بازگشت ایمن به میهن، در ۶ مرحله همه‌چیز دقیق و بدون سردرگمی پیش می‌رود.
          </p>
        </div>

        {/* Journey Flow Ribbon (Desktop horizontal overview) */}
        <div className="hidden lg:flex items-center justify-between relative mb-16 px-4">
          {/* Continuous Connecting Line */}
          <div className="absolute top-1/2 right-10 left-10 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          {JOURNEY_STEPS.map((step, idx) => {
            const IconComp = stepIcons[idx];
            return (
              <div key={step.stepEn} className="relative z-10 flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-amber-500 shadow-sm flex items-center justify-center text-slate-700 group-hover:text-amber-600 transition-all duration-300 group-hover:scale-110">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="mt-3 text-center">
                  <span className="font-mono text-xs font-bold text-amber-600 block">{step.stepEn}</span>
                  <span className="text-xs font-bold text-slate-800">{step.title}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Journey Cards (Grid Layout: 3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {JOURNEY_STEPS.map((step, index) => {
            const StepIcon = stepIcons[index];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl p-6 sm:p-8 bg-[#fafafc] border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-right group hover:border-amber-500/40"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center shadow-xs group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700 font-semibold">
                      {step.stepEn}
                    </span>
                    <span className="text-xl font-bold font-mono text-slate-400 group-hover:text-amber-600 transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>

                {/* Step Key Deliverables */}
                <ul className="space-y-2 pt-4 border-t border-slate-200/70 text-xs text-slate-600">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

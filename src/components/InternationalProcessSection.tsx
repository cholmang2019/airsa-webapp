import React from 'react';
import { motion } from 'motion/react';
import { 
  MessagesSquare, 
  SearchCheck, 
  Route, 
  Rocket, 
  ChevronLeft,
  Workflow
} from 'lucide-react';
import { PROCESS_STEPS_DATA } from '../data/internationalServicesData';

const stepIcons = [
  MessagesSquare,
  SearchCheck,
  Route,
  Rocket,
];

export const InternationalProcessSection: React.FC = () => {
  return (
    <section
      id="international-process-section"
      className="py-24 sm:py-36 bg-[#0b101c] text-white relative border-b border-white/[0.08]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Workflow className="w-3.5 h-3.5 text-amber-400" />
            <span>فرایند ۴ مرحله‌ای شفاف</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            مسیر همکاری از اولین گام تا تحقق هدف
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            فرایندی سازمان‌یافته، شفاف و بدون ابهام برای ورود ایمن و هوشمندانه به فضای اقتصادی ایران.
          </p>
        </div>

        {/* 4-Step Process Visual Flow */}
        <div className="relative">
          
          {/* Connecting Line across steps for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] -translate-y-12 bg-gradient-to-r from-amber-400/10 via-amber-400/40 to-amber-400/10 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {PROCESS_STEPS_DATA.map((step, index) => {
              const IconComponent = stepIcons[index % stepIcons.length];
              const isLast = index === PROCESS_STEPS_DATA.length - 1;

              return (
                <div key={index} className="relative flex flex-col items-center">
                  
                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full p-6 sm:p-7 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/[0.12] hover:border-amber-400/35 transition-all duration-300 flex flex-col items-center text-center shadow-lg group hover:-translate-y-1"
                  >
                    {/* Step Icon with Number Badge */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-500/10 border border-amber-400/30 text-amber-300 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-950 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold flex items-center justify-center shadow-md">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Step Title (Exact required names: مشاوره / بررسی نیاز / طراحی مسیر / اجرای خدمات) */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-amber-200 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* RTL Direction Arrow between steps on Desktop */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-12 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-slate-950 border border-amber-400/40 text-amber-300 items-center justify-center shadow-md">
                      <ChevronLeft className="w-4 h-4" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

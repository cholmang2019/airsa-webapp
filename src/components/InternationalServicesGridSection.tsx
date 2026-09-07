import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  UserCheck2, 
  TrendingUp, 
  Compass, 
  ArrowUpLeft, 
  CheckCircle2, 
  Briefcase
} from 'lucide-react';
import { INTERNATIONAL_SERVICES_DATA, OFFICIAL_CONSULTATION_URL } from '../data/internationalServicesData';

const serviceIcons = [
  Building2,
  UserCheck2,
  TrendingUp,
  Compass,
];

export const InternationalServicesGridSection: React.FC = () => {
  return (
    <section
      id="international-services-section"
      className="py-24 sm:py-36 bg-[#090d16] text-white relative border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>خدمات اصلی بین‌المللی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            راهکارهای تخصصی ورود و استقرار در ایران
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            مجموعه‌ای یکپارچه از خدمات حقوقی، شرکتی، سرمایه‌گذاری و استراتژیک برای فعالان اقتصادی و متقاضیان بین‌المللی.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {INTERNATIONAL_SERVICES_DATA.map((service, index) => {
            const IconComponent = serviceIcons[index % serviceIcons.length];
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900/80 border border-white/[0.12] hover:border-amber-400/35 transition-all duration-500 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Image Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Top Floating Badge & Number */}
                  <div className="absolute top-5 right-5 left-5 flex items-center justify-between z-10">
                    <div className="w-11 h-11 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/20 text-amber-300 flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-300 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15">
                      {service.number}
                    </span>
                  </div>

                  {/* English Tag Pill on Image */}
                  <div className="absolute bottom-4 right-5 z-10">
                    <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-amber-200/90">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Primary Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Primary Description (Required text) */}
                    <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Scope Highlights */}
                    <ul className="space-y-2.5 pt-2 border-t border-white/[0.08]">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 font-light">
                          <CheckCircle2 className="w-4 h-4 text-amber-400/80 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <a
                      href={OFFICIAL_CONSULTATION_URL}
                      className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/[0.04] hover:bg-amber-400/10 border border-white/[0.08] hover:border-amber-400/30 text-white hover:text-amber-200 text-xs sm:text-sm font-semibold transition-all group/btn"
                    >
                      <span>دریافت جزئیات و شروع مشاوره</span>
                      <ArrowUpLeft className="w-4 h-4 text-amber-300 transition-transform group-hover/btn:-translate-x-1" />
                    </a>
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

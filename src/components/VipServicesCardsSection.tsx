import React from 'react';
import { motion } from 'motion/react';
import { 
  PlaneLanding, 
  Car, 
  Hotel, 
  UserCheck, 
  HeartHandshake, 
  PlaneTakeoff, 
  Check, 
  ArrowUpLeft,
  Crown
} from 'lucide-react';
import { VIP_SERVICES_DATA, VIP_CONSULTATION_URL, VipServiceItem } from '../data/vipServicesData';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  'vip-airport-arrival': PlaneLanding,
  'vip-transfer': Car,
  'vip-stay': Hotel,
  'vip-concierge': UserCheck,
  'vip-medical': HeartHandshake,
  'vip-departure': PlaneTakeoff,
};

export const VipServicesCardsSection: React.FC = () => {
  return (
    <section
      id="vip-services-section"
      className="py-24 sm:py-36 bg-[#090d16] text-white relative border-t border-white/[0.08]"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Maximum 2-3 components */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>خدمات شش‌گانه VIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            استاندارد بی‌بدیل در تشریفات و میزبانی
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            ترکیب هارمونیک فناوری روز، ناوگان تشریفاتی، تسهیلات فرودگاهی و مراقبت فردی برای سفری بی‌نقص.
          </p>
        </div>

        {/* 6 Premium Cards Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {VIP_SERVICES_DATA.map((service: VipServiceItem, index: number) => {
            const IconComponent = iconMap[service.id] || Crown;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-3xl bg-slate-900/70 border border-white/[0.1] hover:border-amber-400/40 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.15)] transition-all duration-500 text-right backdrop-blur-md"
              >
                {/* Visual Imagery Header */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.82] group-hover:brightness-[0.72] contrast-[1.05]"
                    loading="lazy"
                  />
                  {/* Subtle Shading Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  {/* Top Category Badge (Subtle Glassmorphic) */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-xl border border-white/[0.15] text-[11px] font-mono font-medium text-amber-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Minimal Icon Badge */}
                  <div className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-2xl bg-white/[0.1] backdrop-blur-xl border border-white/[0.2] text-amber-300 flex items-center justify-center shadow-lg group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-200/80 mb-3.5">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>

                    {/* Features Checklist */}
                    <ul className="space-y-2 pt-4 border-t border-white/[0.08] text-xs text-slate-300">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/30">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-amber-200 transition-colors">
                    <span>اطلاعات بیشتر و درخواست</span>
                    <a
                      href={VIP_CONSULTATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200"
                    >
                      <span>رزرو</span>
                      <ArrowUpLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
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

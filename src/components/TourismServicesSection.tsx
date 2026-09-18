import React from 'react';
import { motion } from 'motion/react';
import { Plane, Hotel, Car, Compass, Sparkles, Headphones, ArrowUpLeft } from 'lucide-react';
import { SERVICES_DATA, CONSULTATION_URL } from '../data/incomingTourismData';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  cip: Plane,
  stay: Hotel,
  transfer: Car,
  itinerary: Compass,
  experiences: Sparkles,
  support: Headphones,
};

export const TourismServicesSection: React.FC = () => {
  return (
    <section
      id="tourism-services"
      className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Maximum 2-3 components */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-semibold mb-4">
            <span>خدمات جامع گردشگری ورودی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            ارکان یک سفر بی‌دغدغه و لوکس
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            از نخستین گام ورود به خاک ایران تا آخرین لحظات بدرقه، تمامی جزئیات با استانداردهای ممتاز بین‌المللی برنامه‌ریزی شده است.
          </p>
        </div>

        {/* 6-Card Grid with Subtle Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.id] || Compass;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-3xl bg-slate-800/80 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl hover:border-amber-500/50 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Subtle Image Header */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 filter brightness-[0.78] contrast-[1.05]"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-850 via-slate-900/40 to-transparent" />
                  
                  {/* Top Tag Pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15 text-[11px] font-medium text-amber-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-right">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs text-amber-400/90 font-medium block mb-3">
                      {service.subtitle}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Minimal Action Footer */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span>استاندارد VIP بین‌المللی</span>
                    <ArrowUpLeft className="w-4 h-4 text-amber-400 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Hook */}
        <div className="mt-14 text-center">
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs sm:text-sm text-slate-200 hover:text-white transition-all"
          >
            <span>نیاز به هماهنگی پکیج اختصاصی دارید؟ با ما در تماس باشید</span>
            <span className="text-amber-400">←</span>
          </a>
        </div>

      </div>
    </section>
  );
};

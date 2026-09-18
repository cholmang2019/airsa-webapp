import React from 'react';
import { motion } from 'motion/react';
import { Plane, Stamp, Hotel, Car, Check, ArrowUpLeft, ShieldCheck } from 'lucide-react';
import { CORE_SERVICES, CONSULTATION_URL } from '../data/travelServicesData';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  flights: Plane,
  visa: Stamp,
  hotel: Hotel,
  transfer: Car,
};

export const CoreServicesSection: React.FC = () => {
  return (
    <section
      id="core-services-section"
      className="py-24 sm:py-32 bg-[#fafafc] text-slate-900 relative"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header: Maximum 2-3 components, clean and uncrowded */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>خدمات محوری سفر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-4">
            ارکان چهارگانه سفر مطمئن
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            زنجیره به‌هم‌پیوسته خدمات مسافرتی برای مسافرانی که کیفیت، آسودگی و زمان برایشان اولویت دارد.
          </p>
        </div>

        {/* Four Large Cards Grid (2x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CORE_SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.id] || Plane;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_15px_40px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(15,23,42,0.12)] hover:border-amber-500/40 transition-all duration-500 text-right"
              >
                {/* Large Photography Header */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.88] group-hover:brightness-[0.8] contrast-[1.03]"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Floating Icon Emblem */}
                  <div className="absolute bottom-5 right-5 z-10 w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Body & Blurb */}
                <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </h3>

                    {/* Blurb Requirement */}
                    <div className="inline-block px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200/60 text-xs sm:text-sm font-semibold text-amber-900 mb-4">
                      {service.blurb}
                    </div>

                    {/* Detailed description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Highlights Checklist */}
                    <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                      {service.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-amber-700 transition-colors">
                    <span>هماهنگی و استعلام نرخ</span>
                    <a
                      href={CONSULTATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800"
                    >
                      <span>درخواست</span>
                      <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
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

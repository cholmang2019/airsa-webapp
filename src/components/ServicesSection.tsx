import React from 'react';
import { motion } from 'motion/react';
import {
  Stethoscope,
  UserCheck,
  Building2,
  FileText,
  Plane,
  Hotel,
  Car,
  HeartHandshake,
} from 'lucide-react';
import { getMedicalServices } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

const MINIMAL_ICONS: Record<string, React.ReactNode> = {
  consultation: <Stethoscope className="w-4 h-4 text-slate-800" />,
  doctor: <UserCheck className="w-4 h-4 text-slate-800" />,
  hospital: <Building2 className="w-4 h-4 text-slate-800" />,
  visa: <FileText className="w-4 h-4 text-slate-800" />,
  flight: <Plane className="w-4 h-4 text-slate-800" />,
  accommodation: <Hotel className="w-4 h-4 text-slate-800" />,
  transfer: <Car className="w-4 h-4 text-slate-800" />,
  recovery: <HeartHandshake className="w-4 h-4 text-slate-800" />,
};

const SERVICE_IMAGES: Record<string, string> = {
  consultation: ASSETS.services.consultation.src,
  doctor: ASSETS.services.doctorSelection.src,
  hospital: ASSETS.services.hospitalBooking.src,
  visa: ASSETS.services.visaAssistance.src,
  flight: ASSETS.services.flightBooking.src,
  accommodation: ASSETS.services.hotelAccommodation.src,
  transfer: ASSETS.services.privateTransfer.src,
  recovery: ASSETS.services.postOpRecovery.src,
};

export const ServicesSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const services = getMedicalServices(language);

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-slate-50/70 border-y border-slate-200/60 text-slate-900 overflow-hidden"
      dir={dir}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-3">
            <span>{t.home.servicesBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.home.servicesTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            {t.home.servicesSubtitle}
          </p>
        </div>

        {/* 2x4 Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const icon = MINIMAL_ICONS[service.id] || <Stethoscope className="w-4 h-4 text-slate-800" />;
            const imgSrc = SERVICE_IMAGES[service.id] || ASSETS.services.consultation.src;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Icon Badge Overlay */}
                  <div className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'} w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center`}>
                    {icon}
                  </div>

                  {/* Step Number */}
                  <span className={`absolute bottom-2.5 ${isRtl ? 'left-3' : 'right-3'} text-[11px] font-mono font-bold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md`}>
                    0{index + 1}
                  </span>
                </div>

                {/* Card Content */}
                <div className={`p-5 flex flex-col flex-grow ${isRtl ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-700 transition-colors">
                    <span className="font-semibold">{t.home.learnMore}</span>
                    <span className={`text-sm transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>
                      {isRtl ? '←' : '→'}
                    </span>
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

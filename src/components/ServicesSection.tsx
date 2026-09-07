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
  HeartHandshake 
} from 'lucide-react';
import { MEDICAL_SERVICES } from '../data/content';

import svcConsultationImg from '../assets/images/svc_consultation_1788732462429.jpg';
import svcDoctorImg from '../assets/images/svc_doctor_1788732474613.jpg';
import svcHospitalImg from '../assets/images/svc_hospital_1788732485452.jpg';
import svcVisaImg from '../assets/images/svc_visa_1788732496579.jpg';
import svcFlightImg from '../assets/images/svc_flight_1788732507797.jpg';
import svcHotelImg from '../assets/images/svc_hotel_1788732516592.jpg';
import svcTransferImg from '../assets/images/svc_transfer_1788732528571.jpg';
import svcRecoveryImg from '../assets/images/svc_recovery_1788732539999.jpg';

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
  consultation: svcConsultationImg,
  doctor: svcDoctorImg,
  hospital: svcHospitalImg,
  visa: svcVisaImg,
  flight: svcFlightImg,
  accommodation: svcHotelImg,
  transfer: svcTransferImg,
  recovery: svcRecoveryImg,
};

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services"
      className="py-24 sm:py-32 bg-slate-50/70 border-y border-slate-200/60 text-slate-900 overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-3">
            <span>خدمات جامع گردشگری سلامت</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            خدمات گردشگری سلامت
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            ارائه خدمات یکپارچه، هماهنگ و بدون دغدغه برای بیماران بین‌المللی در تمامی مراحل سفر و درمان در ایران.
          </p>
        </div>

        {/* 2x4 Responsive Card Grid (8 Cards with Realistic Photography) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDICAL_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-right group"
            >
              <div>
                {/* Top Realistic Image Container */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={SERVICE_IMAGES[service.id]}
                    alt={`${service.title} - ${service.enTitle}`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle glass gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />

                  {/* Top Badges */}
                  <div className="absolute top-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                    <div className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md text-slate-800 shadow-sm flex items-center justify-center">
                      {MINIMAL_ICONS[service.id]}
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-slate-950/80 text-amber-300 px-2.5 py-0.5 rounded-md backdrop-blur-md shadow-xs">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5">
                  {/* Persian Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* English Subtitle */}
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    {service.enTitle}
                  </div>

                  {/* Short Text Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Accent Bar */}
              <div className="px-5 pb-4 pt-2">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>SERVICE {service.number}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

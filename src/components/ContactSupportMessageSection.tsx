import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_PAGE_DATA } from '../data/contactData';

export const ContactSupportMessageSection: React.FC = () => {
  const { supportMessage } = CONTACT_PAGE_DATA;

  return (
    <section
      id="contact-support-message-section"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#060911] text-white flex items-center justify-center border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Clear and Luminous Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={supportMessage.backgroundImage}
          alt="همراهی در تمام مراحل سفر"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05] saturate-[1.1] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/50 via-[#060911]/30 to-[#070a12]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 md:p-16 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-6"
        >
          {/* Subtle Accent Mark */}
          <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full" />

          {/* Minimal Statement */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-relaxed sm:leading-tight tracking-tight">
            «{supportMessage.statement}»
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            {supportMessage.lead}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

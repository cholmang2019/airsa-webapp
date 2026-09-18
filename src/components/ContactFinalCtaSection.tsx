import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Send } from 'lucide-react';
import { CONTACT_PAGE_DATA } from '../data/contactData';

export const ContactFinalCtaSection: React.FC = () => {
  const { finalCta } = CONTACT_PAGE_DATA;

  const handleScrollToForm = () => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Focus on first input after scroll
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  return (
    <section
      id="contact-final-cta-section"
      className="relative py-20 sm:py-24 bg-[#070a12] text-white text-center overflow-hidden"
      dir="rtl"
    >
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          {finalCta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {finalCta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleScrollToForm}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.5)] hover:scale-105 cursor-pointer group"
          >
            <span>{finalCta.buttonText}</span>
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

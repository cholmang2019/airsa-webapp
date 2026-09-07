import React from 'react';
import { motion } from 'motion/react';
import { Eye, Sparkles } from 'lucide-react';
import { ABOUT_VISION_DATA } from '../data/aboutUsData';

export const AboutVisionSection: React.FC = () => {
  return (
    <section
      id="about-vision-section"
      className="py-24 sm:py-36 bg-[#0b101c] text-white relative overflow-hidden border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-8"
        >
          <Eye className="w-3.5 h-3.5 text-amber-400" />
          <span>{ABOUT_VISION_DATA.badge}</span>
        </motion.div>

        {/* Title: «چشم‌انداز ما» */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-8"
        >
          {ABOUT_VISION_DATA.title}
        </motion.h2>

        {/* Text: «تبدیل شدن به یک برند بین‌المللی قابل اعتماد در زمینه گردشگری، گردشگری سلامت و خدمات VIP.» */}
        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-200 font-bold leading-relaxed mb-6"
        >
          {ABOUT_VISION_DATA.text}
        </motion.blockquote>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto"
        >
          {ABOUT_VISION_DATA.supportingText}
        </motion.p>

      </div>
    </section>
  );
};

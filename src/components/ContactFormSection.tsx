import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  AlertCircle,
  Send,
  ShieldCheck,
  Clock,
  Mail,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';
import {
  getRequestTypeOptions,
  RequestType,
  ContactFormData,
  getContactPageData,
  CONTACT_PAGE_DATA,
} from '../data/contactData';
import { useLanguage } from '../context/LanguageContext';

export const ContactFormSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const contactData = getContactPageData(language);
  const options = getRequestTypeOptions(language);
  const fs = contactData.formStrings;

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    country: '',
    phone: '',
    whatsapp: '',
    email: '',
    requestType: options[0]?.id || 'medical-tourism',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = isRtl ? 'لطفاً نام و نام خانوادگی خود را کامل وارد کنید (حداقل ۳ حرف).' : 'Please enter your full name (at least 3 characters).';
    }

    if (!formData.country.trim()) {
      newErrors.country = isRtl ? 'لطفاً کشور محل سکونت خود را مشخص کنید.' : 'Please enter your country/city of residence.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = isRtl ? 'لطفاً شماره تماس معتبر به همراه کد کشور وارد کنید.' : 'Please enter a valid phone number with country code.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = isRtl ? 'لطفاً یک آدرس ایمیل معتبر وارد کنید.' : 'Please enter a valid email address.';
    }

    if (!formData.requestType) {
      newErrors.requestType = isRtl ? 'لطفاً نوع درخواست خود را انتخاب نمایید.' : 'Please select a request type.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = isRtl ? 'لطفاً شرح خلاصه یا نکات مهم درخواست خود را بیان نمایید (حداقل ۱۰ کاراکتر).' : 'Please provide details of your request (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      country: '',
      phone: '',
      whatsapp: '',
      email: '',
      requestType: options[0]?.id || 'medical-tourism',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return (
    <section
      id="contact-form-section"
      className="py-16 sm:py-24 bg-[#070a12] text-white relative border-b border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-slate-900/70 border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)]"
            >
              {/* Form Title & Destination Indicator */}
              <div className="border-b border-white/10 pb-6 mb-8 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {t.contact.contactTitle}
                  </h2>
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-xs font-mono font-medium">
                    DIRECT DISPATCH
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-light">
                  {isRtl ? 'کلیه درخواست‌ها مستقیماً به نشانی مدیریت ارشد ارسال می‌گردد: ' : 'All inquiries are dispatched directly to senior executive management: '}
                  <span className="text-amber-300 font-mono" dir="ltr">
                    {CONTACT_PAGE_DATA.destinationEmail}
                  </span>
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 sm:p-10 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {fs.successTitle}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg mx-auto">
                        {fs.successDesc}
                      </p>
                    </div>

                    {submittedData && (
                      <div className={`p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-white/10 text-xs sm:text-sm space-y-2.5 font-light text-slate-300 ${isRtl ? 'text-right' : 'text-left'}`}>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-slate-400">{fs.fullNameLabel}:</span>
                          <span className="text-white font-medium">{submittedData.fullName}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-slate-400">{fs.countryLabel}:</span>
                          <span className="text-white">{submittedData.country}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">{fs.emailLabel}:</span>
                          <span className="text-white font-mono" dir="ltr">{submittedData.email}</span>
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4 text-amber-400" />
                      <span>{isRtl ? 'ثبت درخواست جدید' : 'Submit Another Request'}</span>
                    </button>
                  </motion.div>
                ) : (
                  <form key="contact-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Row 1: Full Name + Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="fullName"
                          className="block text-xs sm:text-sm font-medium text-slate-200"
                        >
                          {fs.fullNameLabel} <span className="text-amber-400">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder={fs.fullNamePlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                            errors.fullName
                              ? 'border-rose-500 focus:border-rose-500'
                              : 'border-white/15 focus:border-amber-400'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="country"
                          className="block text-xs sm:text-sm font-medium text-slate-200"
                        >
                          {fs.countryLabel} <span className="text-amber-400">*</span>
                        </label>
                        <input
                          id="country"
                          type="text"
                          value={formData.country}
                          onChange={(e) => {
                            setFormData({ ...formData, country: e.target.value });
                            if (errors.country) setErrors({ ...errors, country: undefined });
                          }}
                          placeholder={fs.countryPlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                            errors.country
                              ? 'border-rose-500 focus:border-rose-500'
                              : 'border-white/15 focus:border-amber-400'
                          }`}
                        />
                        {errors.country && (
                          <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.country}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone + WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="phone"
                          className="block text-xs sm:text-sm font-medium text-slate-200"
                        >
                          {fs.phoneLabel} <span className="text-amber-400">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          dir="ltr"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder={fs.phonePlaceholder}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                            errors.phone
                              ? 'border-rose-500 focus:border-rose-500'
                              : 'border-white/15 focus:border-amber-400'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="whatsapp"
                            className="block text-xs sm:text-sm font-medium text-slate-200"
                          >
                            {fs.whatsappLabel}
                          </label>
                          <span className="text-[11px] text-slate-400">
                            {isRtl ? 'اختیاری' : 'Optional'}
                          </span>
                        </div>
                        <input
                          id="whatsapp"
                          type="tel"
                          dir="ltr"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder={fs.whatsappPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/15 focus:border-amber-400 text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                        />
                      </div>
                    </div>

                    {/* Row 3: Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-medium text-slate-200"
                      >
                        {fs.emailLabel} <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        dir="ltr"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder={fs.emailPlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/15 focus:border-amber-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 4: Request Type */}
                    <div className="space-y-2">
                      <label
                        htmlFor="requestType"
                        className="block text-xs sm:text-sm font-medium text-slate-200"
                      >
                        {fs.requestTypeLabel} <span className="text-amber-400">*</span>
                      </label>

                      <div className="relative">
                        <select
                          id="requestType"
                          value={formData.requestType}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              requestType: e.target.value as RequestType,
                            });
                            if (errors.requestType) setErrors({ ...errors, requestType: undefined });
                          }}
                          className={`w-full px-4 py-3.5 ${
                            isRtl ? 'pl-10 pr-4' : 'pr-10 pl-4'
                          } rounded-xl bg-slate-950 border border-white/15 focus:border-amber-400 text-sm text-white font-medium transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 appearance-none cursor-pointer`}
                        >
                          {options.map((opt) => (
                            <option
                              key={opt.id}
                              value={opt.id}
                              className="bg-slate-900 text-white py-2"
                            >
                              {opt.label} — {opt.description}
                            </option>
                          ))}
                        </select>
                        <div className={`absolute ${isRtl ? 'left-3.5' : 'right-3.5'} top-1/2 -translate-y-1/2 pointer-events-none text-slate-400`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Quick Interactive Pills */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {options.map((opt) => {
                          const isSelected = formData.requestType === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, requestType: opt.id });
                                if (errors.requestType) setErrors({ ...errors, requestType: undefined });
                              }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                                isSelected
                                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                                  : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>

                      {errors.requestType && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.requestType}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 5: Message */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="message"
                          className="block text-xs sm:text-sm font-medium text-slate-200"
                        >
                          {fs.messageLabel} <span className="text-amber-400">*</span>
                        </label>
                      </div>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder={fs.messagePlaceholder}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/50 resize-y leading-relaxed ${
                          errors.message
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/15 focus:border-amber-400'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        id="submit-contact-form-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/60 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_15px_30px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.5)] cursor-pointer disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            <span>{fs.submittingButton}</span>
                          </>
                        ) : (
                          <>
                            <span>{fs.submitButton}</span>
                            <Send className={`w-5 h-5 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Trust Note */}
                    <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>{t.home.confidentialRecords}</span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Secondary Column: Blurbs */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl space-y-4 ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold font-mono">
                <Clock className="w-4 h-4" />
                <span>EXECUTIVE RESPONSE PROTOCOL</span>
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">
                {isRtl ? 'پس از ارسال فرم چه مراحلی طی می‌شود؟' : 'What Happens After Submission?'}
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>
                    {isRtl ? 'بررسی اولیه محتوای درخواست توسط مدیریت و ارجاع به کارشناس ارشد حوزه تخصصی ظرف کمتر از ۲ ساعت کاری.' : 'Initial assessment of your request by senior management and assignment to a specialist within 2 hours.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>
                    {isRtl ? 'تنظیم برآورد هزینه، پکیج اختصاصی و برنامه‌ریزی زمان‌بندی سفر یا درمان متناسب با شرایط اعلامی.' : 'Custom quotation, personalized itinerary, and scheduling customized to your criteria.'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>
                    {isRtl ? 'برقراری تماس مستقیم تصویری یا تلفنی به زبان مادری متقاضی جهت پاسخ به سوالات جزئی و نهایی‌سازی هماهنگی‌ها.' : 'Direct consultation in your preferred language to answer queries and finalize details.'}
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-[#0c1222] border border-amber-400/25 backdrop-blur-xl space-y-4 shadow-xl ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <div className="flex items-center gap-3 text-amber-300">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold">
                  {isRtl ? 'صندوق مکاتبات مستقیم با مدیریت' : 'Direct Executive Correspondence'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {isRtl ? 'تمامی فرم‌های ثبت‌شده به صورت همگام به نشانی رسمی ایمیل زیر مخابره می‌گردند:' : 'All submitted inquiries are securely dispatched to the executive inbox:'}
              </p>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-xs sm:text-sm text-amber-300 text-center select-all" dir="ltr">
                {CONTACT_PAGE_DATA.destinationEmail}
              </div>
              <p className="text-[11px] text-slate-400 text-center">
                {isRtl ? 'در صورت نیاز می‌توانید اسناد پزشکی حجیم را مستقیماً به همین ایمیل ارسال کنید.' : 'You may also email large diagnostic records directly to this address.'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

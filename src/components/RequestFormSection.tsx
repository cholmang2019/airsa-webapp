import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Globe2, 
  Phone, 
  Mail, 
  Stethoscope, 
  FileText, 
  UploadCloud, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Clock, 
  ArrowLeft,
  Loader2,
  FileIcon
} from 'lucide-react';
import { TREATMENT_OPTIONS, TRUST_POINTS, SUBMISSION_TARGET_EMAIL } from '../data/treatmentRequestData';
import patientCoordinatorImg from '../assets/images/patient_coordinator_1788731714247.jpg';

interface FormData {
  fullName: string;
  country: string;
  phoneWhatsapp: string;
  email: string;
  treatmentType: string;
  description: string;
}

export const RequestFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    country: '',
    phoneWhatsapp: '',
    email: '',
    treatmentType: '',
    description: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [trackingCode, setTrackingCode] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const validFiles: File[] = [];
    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];
      if (file.size <= 25 * 1024 * 1024) {
        validFiles.push(file);
      }
    }
    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'لطفاً نام و نام خانوادگی را وارد کنید';
    if (!formData.country.trim()) errors.country = 'لطفاً کشور محل سکونت را وارد کنید';
    if (!formData.phoneWhatsapp.trim()) errors.phoneWhatsapp = 'لطفاً شماره تماس یا واتس‌اپ را وارد کنید';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'لطفاً یک ایمیل معتبر وارد کنید';
    }
    if (!formData.treatmentType) errors.treatmentType = 'لطفاً نوع درمان مورد نظر را انتخاب کنید';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Conceptually sends submissions to CEO@medixmaster.com
    const generatedCode = `IRSA-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // Simulate secure transmission to CEO@medixmaster.com
    setTimeout(() => {
      setIsSubmitting(false);
      setTrackingCode(generatedCode);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      country: '',
      phoneWhatsapp: '',
      email: '',
      treatmentType: '',
      description: '',
    });
    setFiles([]);
    setIsSubmitted(false);
    setTrackingCode('');
    setFormErrors({});
  };

  return (
    <section 
      id="treatment-form-section"
      className="py-20 sm:py-28 bg-[#fafafc] text-slate-900 relative"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Split Layout: Form Card (7 cols) + Trust Message & Context (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Section 2: Request Form (Glassmorphism Form Card) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.06)] p-6 sm:p-10 text-right overflow-hidden">
              
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-l from-amber-500 via-amber-400 to-amber-600" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Form Card Header */}
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-2.5">
                        <Stethoscope className="w-3.5 h-3.5 text-amber-600" />
                        <span>فرم درخواست بررسی درمان</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        ثبت اطلاعات پزشکی و سفر
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                        لطفاً مشخصات خود را با دقت تکمیل کنید تا برنامه اولیه درمان و هماهنگی‌ها با پزشک مربوطه آغاز گردد.
                      </p>
                    </div>

                    {/* Actual Form */}
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      
                      {/* Row 1: نام و نام خانوادگی & کشور */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {/* نام و نام خانوادگی */}
                        <div>
                          <label 
                            htmlFor="fullName"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            نام و نام خانوادگی <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="مثال: علی احمدی"
                              className={`w-full pr-10 pl-3.5 py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                                formErrors.fullName 
                                  ? 'border-red-400 ring-2 ring-red-400/20' 
                                  : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                              }`}
                            />
                          </div>
                          {formErrors.fullName && (
                            <p className="text-[11px] text-red-500 mt-1">{formErrors.fullName}</p>
                          )}
                        </div>

                        {/* کشور */}
                        <div>
                          <label 
                            htmlFor="country"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            کشور محل اقامت <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <Globe2 className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              placeholder="مثال: عمان، عراق، امارات، ..."
                              className={`w-full pr-10 pl-3.5 py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
                                formErrors.country 
                                  ? 'border-red-400 ring-2 ring-red-400/20' 
                                  : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                              }`}
                            />
                          </div>
                          {formErrors.country && (
                            <p className="text-[11px] text-red-500 mt-1">{formErrors.country}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: شماره تماس / WhatsApp & ایمیل */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {/* شماره تماس / WhatsApp */}
                        <div>
                          <label 
                            htmlFor="phoneWhatsapp"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            شماره تماس / WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <Phone className="w-4 h-4" />
                            </div>
                            <input
                              type="tel"
                              id="phoneWhatsapp"
                              name="phoneWhatsapp"
                              value={formData.phoneWhatsapp}
                              onChange={handleInputChange}
                              dir="ltr"
                              placeholder="+968 9123 4567"
                              className={`w-full pr-10 pl-3.5 py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all text-right ${
                                formErrors.phoneWhatsapp 
                                  ? 'border-red-400 ring-2 ring-red-400/20' 
                                  : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                              }`}
                            />
                          </div>
                          {formErrors.phoneWhatsapp && (
                            <p className="text-[11px] text-red-500 mt-1">{formErrors.phoneWhatsapp}</p>
                          )}
                        </div>

                        {/* ایمیل */}
                        <div>
                          <label 
                            htmlFor="email"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            ایمیل <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <Mail className="w-4 h-4" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              dir="ltr"
                              placeholder="example@mail.com"
                              className={`w-full pr-10 pl-3.5 py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all text-right ${
                                formErrors.email 
                                  ? 'border-red-400 ring-2 ring-red-400/20' 
                                  : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                              }`}
                            />
                          </div>
                          {formErrors.email && (
                            <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      {/* نوع درمان (Treatment Select) */}
                      <div>
                        <label 
                          htmlFor="treatmentType"
                          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                        >
                          نوع درمان <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                            <Stethoscope className="w-4 h-4" />
                          </div>
                          <select
                            id="treatmentType"
                            name="treatmentType"
                            value={formData.treatmentType}
                            onChange={handleInputChange}
                            className={`w-full pr-10 pl-3.5 py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer ${
                              formErrors.treatmentType 
                                ? 'border-red-400 ring-2 ring-red-400/20' 
                                : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                            }`}
                          >
                            <option value="" disabled>نوع خدمات درمانی مورد نظر را انتخاب کنید</option>
                            {TREATMENT_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.label}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {formErrors.treatmentType && (
                          <p className="text-[11px] text-red-500 mt-1">{formErrors.treatmentType}</p>
                        )}
                      </div>

                      {/* توضیحات درخواست */}
                      <div>
                        <label 
                          htmlFor="description"
                          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                        >
                          توضیحات درخواست
                        </label>
                        <div className="relative">
                          <textarea
                            id="description"
                            name="description"
                            rows={3}
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="شرح مختصری از سابقه بیماری، انتظارات درمانی یا پرسش‌های شما..."
                            className="w-full p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Optional Field: آپلود مدارک پزشکی */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block text-xs sm:text-sm font-semibold text-slate-700">
                            آپلود مدارک پزشکی <span className="text-slate-400 text-xs font-normal">(اختیاری)</span>
                          </label>
                          <span className="text-[11px] text-slate-400 font-normal">PDF، عکس یا اسکن تا ۲۵ مگابایت</span>
                        </div>

                        {/* Drag and Drop Zone */}
                        <div
                          onDragOver={onDragOver}
                          onDragLeave={onDragLeave}
                          onDrop={onDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`relative border-2 border-dashed rounded-2xl p-4 sm:p-5 text-center cursor-pointer transition-all ${
                            isDragging 
                              ? 'border-amber-500 bg-amber-50/40' 
                              : 'border-slate-200 hover:border-slate-300 bg-slate-50/40 hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={(e) => handleFileChange(e.target.files)}
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            className="hidden"
                          />
                          <div className="flex flex-col items-center justify-center gap-1.5">
                            <UploadCloud className="w-6 h-6 text-amber-600" />
                            <div className="text-xs text-slate-700 font-medium">
                              <span>برای بارگذاری مدارک بالینی کلیک کنید یا فایل‌ها را اینجا بکشید</span>
                            </div>
                            <p className="text-[11px] text-slate-400">
                              شامل نسخه‌ها، آزمایش‌ها، عکس‌ها یا ام‌آر‌آی
                            </p>
                          </div>
                        </div>

                        {/* Uploaded File List */}
                        {files.length > 0 && (
                          <div className="mt-3 space-y-2">
                            {files.map((file, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-xs text-slate-800"
                              >
                                <div className="flex items-center gap-2 truncate max-w-[85%]">
                                  <FileIcon className="w-4 h-4 text-amber-600 shrink-0" />
                                  <span className="truncate">{file.name}</span>
                                  <span className="text-[10px] text-slate-600 shrink-0 font-mono">
                                    ({(file.size / (1024 * 1024)).toFixed(1)} MB)
                                  </span>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(idx);
                                  }}
                                  className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Primary Button: «ارسال درخواست» */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                              <span>در حال ثبت امن درخواست...</span>
                            </>
                          ) : (
                            <>
                              <span>ارسال درخواست</span>
                              <ArrowLeft className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  /* Success Confirmation State */
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-5 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      درخواست شما با موفقیت ثبت شد
                    </h3>
                    
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                      اطلاعات شما با اولویت بالا به مدیریت هماهنگی بین‌المللی ارجاع داده شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.
                    </p>

                    {/* Tracking details */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-right mb-6 text-xs text-slate-700 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">کد رهگیری پرونده:</span>
                        <span className="font-mono font-bold text-amber-700 text-sm">{trackingCode}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">نام متقاضی:</span>
                        <span className="font-medium text-slate-900">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">نوع درمان انتخابی:</span>
                        <span className="font-medium text-slate-900">{formData.treatmentType}</span>
                      </div>
                      {files.length > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">تعداد مدارک پیوست‌شده:</span>
                          <span className="font-medium text-slate-900">{files.length} فایل</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                    >
                      ثبت یک درخواست دیگر
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Section 3: Trust Message (Small Premium Information Card) & Visual Split Element */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Trust Message Card */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.04)] text-right">
              
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>

              {/* Title: «اطلاعات شما با دقت و محرمانگی بررسی می‌شود» */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                «اطلاعات شما با دقت و محرمانگی بررسی می‌شود»
              </h3>

              {/* Short reassurance text */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed sm:leading-loose mb-6 font-normal">
                ما در ایرسا سیمرغ متعهد به رعایت بالاترین استانداردهای رازداری و حفاظت از سوابق پزشکی بیماران بین‌المللی هستیم. مدارک شما منحصراً توسط پزشکان متخصص مورد بررسی قرار گرفته و هیچ‌گونه اطلاعاتی بدون رضایت شما منتشر یا جابجا نخواهد شد.
              </p>

              {/* Trust Points */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                {TRUST_POINTS.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-right">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Lock className="w-2.5 h-2.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{point.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Supplementary Context Card with Patient Coordinator Photography */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm relative group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={patientCoordinatorImg}
                  alt="مشاور و هماهنگ‌کننده پزشکی ایرسا سیمرغ"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-4 right-4 left-4 text-right text-white">
                  <span className="text-[11px] font-mono text-amber-300 font-semibold mb-1 block">
                    پشتیبانی اختصاصی سفر درمانی
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    هماهنگ‌کننده پزشکی اختصاصی از بدو ارسال پرونده تا ترخیص در کنار شماست.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

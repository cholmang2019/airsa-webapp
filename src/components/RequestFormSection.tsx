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
  ArrowLeft,
  ArrowRight,
  Loader2,
  FileIcon,
} from 'lucide-react';
import {
  getSpecialtyOptions,
  getTrustPoints,
  SUBMISSION_TARGET_EMAIL,
} from '../data/treatmentRequestData';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

interface FormData {
  fullName: string;
  country: string;
  phoneWhatsapp: string;
  email: string;
  treatmentType: string;
  description: string;
}

export const RequestFormSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const treatmentOptions = getSpecialtyOptions(language);
  const trustPoints = getTrustPoints(language);

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
    const incoming = Array.from(newFiles);
    setFiles((prev) => [...prev, ...incoming]);
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = t.form.nameRequired;
    if (!formData.country.trim()) errors.country = t.form.countryRequired;
    if (!formData.phoneWhatsapp.trim()) errors.phoneWhatsapp = t.form.phoneRequired;
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = t.form.emailRequired;
    }
    if (!formData.treatmentType) errors.treatmentType = t.form.specialtyRequired;
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
    const generatedCode = `IRSA-${Math.floor(100000 + Math.random() * 900000)}`;

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

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="treatment-form-section"
      className="py-20 sm:py-28 bg-[#fafafc] text-slate-900 relative"
      dir={dir}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Request Form Card */}
          <div className="lg:col-span-7">
            <div
              className={`relative rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.06)] p-6 sm:p-10 overflow-hidden ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-2.5">
                        <Stethoscope className="w-3.5 h-3.5 text-amber-600" />
                        <span>{t.form.badge}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {t.form.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                        {t.form.subtitle}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="fullName"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            {t.form.fullName} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div
                              className={`absolute inset-y-0 ${
                                isRtl ? 'right-0 pr-3.5' : 'left-0 pl-3.5'
                              } flex items-center pointer-events-none text-slate-400`}
                            >
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder={t.form.fullNamePlaceholder}
                              className={`w-full ${
                                isRtl ? 'pr-10 pl-3.5' : 'pl-10 pr-3.5'
                              } py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
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

                        {/* Country */}
                        <div>
                          <label
                            htmlFor="country"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            {t.form.country} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div
                              className={`absolute inset-y-0 ${
                                isRtl ? 'right-0 pr-3.5' : 'left-0 pl-3.5'
                              } flex items-center pointer-events-none text-slate-400`}
                            >
                              <Globe2 className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              placeholder={t.form.countryPlaceholder}
                              className={`w-full ${
                                isRtl ? 'pr-10 pl-3.5' : 'pl-10 pr-3.5'
                              } py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {/* Phone / Whatsapp */}
                        <div>
                          <label
                            htmlFor="phoneWhatsapp"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            {t.form.phoneWhatsapp} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div
                              className={`absolute inset-y-0 ${
                                isRtl ? 'right-0 pr-3.5' : 'left-0 pl-3.5'
                              } flex items-center pointer-events-none text-slate-400`}
                            >
                              <Phone className="w-4 h-4" />
                            </div>
                            <input
                              type="tel"
                              id="phoneWhatsapp"
                              name="phoneWhatsapp"
                              value={formData.phoneWhatsapp}
                              onChange={handleInputChange}
                              placeholder="+98 ... / +971 ..."
                              dir="ltr"
                              className={`w-full ${
                                isRtl ? 'pr-10 pl-3.5 text-right' : 'pl-10 pr-3.5 text-left'
                              } py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
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

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                          >
                            {t.form.email} <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div
                              className={`absolute inset-y-0 ${
                                isRtl ? 'right-0 pr-3.5' : 'left-0 pl-3.5'
                              } flex items-center pointer-events-none text-slate-400`}
                            >
                              <Mail className="w-4 h-4" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="patient@example.com"
                              dir="ltr"
                              className={`w-full ${
                                isRtl ? 'pr-10 pl-3.5 text-right' : 'pl-10 pr-3.5 text-left'
                              } py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white transition-all ${
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

                      {/* Treatment Type Dropdown */}
                      <div>
                        <label
                          htmlFor="treatmentType"
                          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                        >
                          {t.form.treatmentType} <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div
                            className={`absolute inset-y-0 ${
                              isRtl ? 'right-0 pr-3.5' : 'left-0 pl-3.5'
                            } flex items-center pointer-events-none text-slate-400`}
                          >
                            <Stethoscope className="w-4 h-4" />
                          </div>
                          <select
                            id="treatmentType"
                            name="treatmentType"
                            value={formData.treatmentType}
                            onChange={handleInputChange}
                            className={`w-full ${
                              isRtl ? 'pr-10 pl-3.5' : 'pl-10 pr-3.5'
                            } py-3 rounded-xl bg-slate-50/70 border text-sm text-slate-900 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer ${
                              formErrors.treatmentType
                                ? 'border-red-400 ring-2 ring-red-400/20'
                                : 'border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20'
                            }`}
                          >
                            <option value="">{t.form.selectTreatment}</option>
                            {treatmentOptions.map((opt) => (
                              <option key={opt.id} value={opt.label}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {formErrors.treatmentType && (
                          <p className="text-[11px] text-red-500 mt-1">{formErrors.treatmentType}</p>
                        )}
                      </div>

                      {/* Description */}
                      <div>
                        <label
                          htmlFor="description"
                          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                        >
                          {t.form.description}
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows={3}
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder={t.form.descriptionPlaceholder}
                          className="w-full p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                        />
                      </div>

                      {/* File Upload Box */}
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                          {t.form.uploadMedicalFiles}
                        </label>
                        <div
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all ${
                            isDragging
                              ? 'border-amber-500 bg-amber-50/50 scale-[1.01]'
                              : 'border-slate-300 hover:border-amber-400 bg-slate-50/50 hover:bg-slate-50'
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
                              <span>{t.form.dragDropFiles}</span>
                            </div>
                            <p className="text-[11px] text-slate-400">
                              {t.form.acceptedFileTypes}
                            </p>
                          </div>
                        </div>

                        {/* File list */}
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

                      {/* Primary Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                              <span>{t.form.submitting}</span>
                            </>
                          ) : (
                            <>
                              <span>{t.form.submitButton}</span>
                              <ArrowIcon className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  /* Success View */
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
                      {t.form.successTitle}
                    </h3>

                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                      {t.form.successSubtitle}
                    </p>

                    <div
                      className={`p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto ${
                        isRtl ? 'text-right' : 'text-left'
                      } mb-6 text-xs text-slate-700 space-y-2`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">{t.form.trackingCode}:</span>
                        <span className="font-mono font-bold text-amber-700 text-sm">{trackingCode}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">{t.form.patientName}:</span>
                        <span className="font-medium text-slate-900">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">{t.form.treatmentType}:</span>
                        <span className="font-medium text-slate-900">{formData.treatmentType}</span>
                      </div>
                      {files.length > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">{t.form.attachedFilesCount}:</span>
                          <span className="font-medium text-slate-900">{files.length}</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleReset}
                      type="button"
                      className="px-6 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                    >
                      {t.form.submitAnother}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Trust Message & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.04)] ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                {t.form.confidentialTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed sm:leading-loose mb-6 font-normal">
                {t.form.confidentialDesc}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Lock className="w-2.5 h-2.5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{point.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supplementary Context Card */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm relative group">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img
                  src={ASSETS.team.medicalCoordinator.src}
                  alt={ASSETS.team.medicalCoordinator.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                <div
                  className={`absolute bottom-4 right-4 left-4 text-white ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  <span className="text-[11px] font-mono text-amber-300 font-semibold mb-1 block">
                    {t.home.dedicatedCaseManager}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    {t.home.conciergeSupport}
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

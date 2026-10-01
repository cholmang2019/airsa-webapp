import { Language } from '../context/LanguageContext';

export const CONSULTATION_URL = "https://medixmaster.com/contact-us/";
export const SUBMISSION_TARGET_EMAIL = "CEO@medixmaster.com";

export interface TreatmentOption {
  value: string;
  label: string;
  id?: string;
}

export interface TrustPoint {
  title: string;
  description: string;
}

export interface TreatmentHeroData {
  title: string;
  subtitle: string;
  badge: string;
}

export interface TreatmentFormData {
  nameLabel: string;
  namePlaceholder: string;
  countryLabel: string;
  countryPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  whatsappLabel: string;
  emailLabel: string;
  specialtyLabel: string;
  selectSpecialty: string;
  dateLabel: string;
  filesLabel: string;
  filesHint: string;
  notesLabel: string;
  notesPlaceholder: string;
  submitButton: string;
  submittingButton: string;
  successTitle: string;
  successDesc: string;
  trackingLabel: string;
  newRequestButton: string;
}

export const TREATMENT_HERO_BY_LANG: Record<Language, TreatmentHeroData> = {
  fa: {
    title: '«ثبت رسمی پرونده و درخواست درمان»',
    subtitle: '«اطلاعات بالینی خود را ارسال فرمایید تا متخصصان ارشد ما ظرف کمتر از ۲۴ ساعت بهترین برنامه درمانی را تدوین کنند.»',
    badge: 'پذیرش مستقیم بیماران بین‌المللی',
  },
  en: {
    title: 'Formal Treatment Request & Clinical Case Submission',
    subtitle: 'Submit your clinical documentation. Our senior medical advisory panel will formulate a bespoke treatment and travel itinerary within 24 hours.',
    badge: 'Direct International Patient Intake',
  },
  ar: {
    title: '«تسجيل الملف الطبي وطلب العلاج الرسمي»',
    subtitle: '«أرسلوا تقاريركم ومعلوماتكم الطبية ليقوم كبار الأطباء بإعداد خطة علاجية وسياحية دقيقة خلال أقل من ۲۴ ساعة.»',
    badge: 'القبول المباشر للمرضى الدوليين',
  },
  tr: {
    title: '«Resmi Tedavi Dosyası ve Başvuru Kaydı»',
    subtitle: '«Klinik belgelerinizi iletin; kıdemli hekim kurulumuz 24 saat içinde en uygun tedavi ve seyahat planını hazırlasın.»',
    badge: 'Uluslararası Hasta Doğrudan Kabulü',
  },
};

export const TREATMENT_OPTIONS_BY_LANG: Record<Language, TreatmentOption[]> = {
  fa: [
    { value: "hair_transplant", label: "کاشت مو و ابرو" },
    { value: "dental", label: "خدمات تخصصی دندانپزشکی" },
    { value: "cosmetic_surgery", label: "جراحی زیبایی و پلاستیک" },
    { value: "ophthalmology", label: "چشم‌پزشکی و لیزیک" },
    { value: "orthopedics", label: "ارتوپدی و جراحی مفاصل" },
    { value: "cardiology", label: "قلب و عروق" },
    { value: "infertility", label: "ناباروری و IVF" },
    { value: "other", label: "سایر تخصص‌ها و چکاپ عمومی" },
  ],
  en: [
    { value: "hair_transplant", label: "Hair & Eyebrow Transplant" },
    { value: "dental", label: "Advanced Cosmetic & Implant Dentistry" },
    { value: "cosmetic_surgery", label: "Plastic & Aesthetic Surgery" },
    { value: "ophthalmology", label: "Ophthalmology & LASIK" },
    { value: "orthopedics", label: "Orthopedics & Joint Replacement" },
    { value: "cardiology", label: "Cardiology & Vascular Surgery" },
    { value: "infertility", label: "Fertility Treatment & IVF" },
    { value: "other", label: "Other Specialties & Comprehensive Checkup" },
  ],
  ar: [
    { value: "hair_transplant", label: "زراعة الشعر والحواجب" },
    { value: "dental", label: "طب وزراعة وتجميل الأسنان" },
    { value: "cosmetic_surgery", label: "الجراحة التجميلية والترميمية" },
    { value: "ophthalmology", label: "طب وجراحة العيون والليزر" },
    { value: "orthopedics", label: "جراحة العظام وتبديل المفاصل" },
    { value: "cardiology", label: "أمراض وجراحة القلب والأوعية" },
    { value: "infertility", label: "علاج العقم وأطفال الأنابيب (IVF)" },
    { value: "other", label: "تخصصات أخرى وفحص شامل" },
  ],
  tr: [
    { value: "hair_transplant", label: "Saç ve Kaş Ekimi" },
    { value: "dental", label: "İleri Diş Hekimliği & İmplant" },
    { value: "cosmetic_surgery", label: "Plastik ve Estetik Cerrahi" },
    { value: "ophthalmology", label: "Göz Cerrahisi & LASIK" },
    { value: "orthopedics", label: "Ortopedi & Eklem Cerrahisi" },
    { value: "cardiology", label: "Kardiyoloji & Kalp Damar Cerrahisi" },
    { value: "infertility", label: "Kısırlık Tedavisi & Tüp Bebek (IVF)" },
    { value: "other", label: "Diğer Uzmanlıklar & Kapsamlı Check-up" },
  ],
};

export const TRUST_POINTS_BY_LANG: Record<Language, TrustPoint[]> = {
  fa: [
    {
      title: "رازداری و حفظ محرمانگی بالینی",
      description: "کلیه مدارک، پرونده‌ها و اطلاعات هویتی شما صرفاً در اختیار پزشکان معتمد و مشاوران ارشد درمان قرار می‌گیرد.",
    },
    {
      title: "ارزیابی اولیه توسط تیم پزشکی",
      description: "پرونده ارسالی توسط متخصصان مربوطه بررسی و گزینه‌های دقیق درمانی به همراه برآورد هزینه به شما اعلام خواهد شد.",
    },
    {
      title: "پاسخگویی سریع کمتر از ۲۴ ساعت",
      description: "کارشناس پذیرش بین‌الملل ایرسا سیمرغ جهان در اسرع وقت از طریق واتس‌اپ یا ایمیل با شما در ارتباط خواهد بود.",
    },
  ],
  en: [
    {
      title: "Strict Clinical Confidentiality",
      description: "All medical files, diagnostic reports, and personal identities are kept strictly secure and shared solely with your assigned medical consultants.",
    },
    {
      title: "Independent Medical Review",
      description: "Your file is evaluated by board-certified specialists who provide transparent clinical options, timelines, and comprehensive cost breakdowns.",
    },
    {
      title: "Guaranteed Response in <24 Hours",
      description: "Our multilingual international coordinators will contact you via WhatsApp, phone, or official email with clear next steps.",
    },
  ],
  ar: [
    {
      title: "السرية التامة وحماية الخصوصية",
      description: "كافة السجلات الطبية والتقارير والهويات تخضع لسرية مطلقة ولا تُعرض إلا على الأطباء الاستشاريين المعتمدين.",
    },
    {
      title: "تقييم أولي مباشر من كبار الجراحين",
      description: "تتم دراسة حالتكم بواسطة أطباء اختصاصيين لتقديم أنسب الخيارات العلاجية مع بيان تفصيلي للتكاليف المقدرة.",
    },
    {
      title: "استجابة سريعة خلال أقل من ۲۴ ساعة",
      description: "سيتواصل معكم منسق المرضى الدوليين عبر واتساب أو الهاتف أو البريد الإلكتروني لتأكيد الخطوات التالية.",
    },
  ],
  tr: [
    {
      title: "Mutlak Klinik Gizlilik",
      description: "Tüm tıbbi kayıtlarınız, tetkikleriniz ve kimlik bilgileriniz uluslararası mahremiyet standartlarına uygun olarak korunur.",
    },
    {
      title: "Uzman Hekimlerce Ön İnceleme",
      description: "Dosyanız alanında uzman cerrahlarca incelenir, şeffaf tedavi seçenekleri ve ayrıntılı maliyet dökümü sunulur.",
    },
    {
      title: "24 Saat İçinde Garantili Yanıt",
      description: "Airsa Simorgh Jahan hasta koordinatörümüz WhatsApp, telefon veya e-posta yoluyla sizinle ivedilikle iletişime geçer.",
    },
  ],
};

export const FORM_STRINGS_BY_LANG: Record<Language, TreatmentFormData> = {
  fa: {
    nameLabel: 'نام و نام خانوادگی بیمار',
    namePlaceholder: 'مثال: سارا محمدی',
    countryLabel: 'کشور و شهر محل سکونت',
    countryPlaceholder: 'مثال: عراق، عمان، آلمان...',
    phoneLabel: 'شماره تماس مستقیم',
    phonePlaceholder: '+98 912 ... یا شماره بین‌المللی',
    whatsappLabel: 'شماره واتس‌اپ فعال (جهت ارسال مدارک)',
    emailLabel: 'آدرس ایمیل معتبر',
    specialtyLabel: 'نوع خدمت درمانی یا تخصص مورد نظر',
    selectSpecialty: 'تخصص مورد نظر را انتخاب نمایید',
    dateLabel: 'تاریخ تقریبی تمایل به سفر و آغاز درمان',
    filesLabel: 'آپلود مدارک و آزمایش‌های بالینی (اختیاری)',
    filesHint: 'فرمت‌های مجاز: PDF, JPG, PNG حداکثر تا ۲۵ مگابایت',
    notesLabel: 'توضیحات تکمیلی، سابقه بیماری و نیازهای خاص',
    notesPlaceholder: 'لطفاً شرح علائم، سوابق جراحی یا داروهای مصرفی را بنویسید...',
    submitButton: 'ارسال پرونده و دریافت برنامه درمان',
    submittingButton: 'در حال ارسال اطلاعات...',
    successTitle: 'درخواست درمان با موفقیت ثبت شد',
    successDesc: 'پرونده پزشکی شما در سیستم پذیرش بین‌الملل ایرسا سیمرغ جهان ثبت گردید. کارشناسان ارشد ظرف حداکثر ۲۴ ساعت آینده با شما تماس خواهند گرفت.',
    trackingLabel: 'کد پیگیری پرونده بالینی',
    newRequestButton: 'ثبت درخواست پرونده دیگر',
  },
  en: {
    nameLabel: 'Patient Full Name',
    namePlaceholder: 'e.g., John Smith',
    countryLabel: 'Country & City of Residence',
    countryPlaceholder: 'e.g., UAE, UK, Germany, Canada...',
    phoneLabel: 'Direct Phone Number',
    phonePlaceholder: '+1 ... or international format',
    whatsappLabel: 'Active WhatsApp Number (for rapid coordination)',
    emailLabel: 'Official Email Address',
    specialtyLabel: 'Desired Medical Specialty or Procedure',
    selectSpecialty: 'Select desired medical specialty',
    dateLabel: 'Estimated Preferred Travel Date',
    filesLabel: 'Upload Clinical Records & Diagnostics (Optional)',
    filesHint: 'Accepted formats: PDF, JPG, PNG up to 25MB',
    notesLabel: 'Clinical Notes, Medical History, or Special Requests',
    notesPlaceholder: 'Please describe current symptoms, prior surgeries, or medications...',
    submitButton: 'Submit Case & Receive Care Plan',
    submittingButton: 'Submitting Case...',
    successTitle: 'Treatment Request Successfully Registered',
    successDesc: 'Your medical file is safely registered in Airsa Simorgh Jahan intake registry. Our chief clinical coordinator will reach out within 24 hours.',
    trackingLabel: 'Clinical Case Tracking Code',
    newRequestButton: 'Submit Another Treatment Case',
  },
  ar: {
    nameLabel: 'الاسم الكامل للمريض',
    namePlaceholder: 'مثال: أحمد عبد الله',
    countryLabel: 'بلد ومدينة الإقامة',
    countryPlaceholder: 'مثال: سلطنة عمان، العراق، الإمارات، الكويت...',
    phoneLabel: 'رقم الهاتف المباشر',
    phonePlaceholder: 'مفتاح الدولة + رقم الهاتف',
    whatsappLabel: 'رقم الواتساب النشط (للتواصل وإرسال التقارير)',
    emailLabel: 'البريد الإلكتروني المعتمد',
    specialtyLabel: 'التخصص الطبي أو نوع العلاج المطلوب',
    selectSpecialty: 'اختر التخصص الطبي المطلوب',
    dateLabel: 'الموعد التقريبي المقترح للسفر والعلاج',
    filesLabel: 'تحميل التقارير الطبية والتحاليل (اختياري)',
    filesHint: 'الملفات المسموحة: PDF, JPG, PNG بحجم أقصاه ۲۵ ميغابايت',
    notesLabel: 'تفاصيل الحالة، التاريخ المرضي، والاحتياجات الخاصة',
    notesPlaceholder: 'يرجى كتابة شرح للأعراض الحالية، العمليات السابقة، أو الأدوية المستخدمة...',
    submitButton: 'إرسال الملف الطبي والحصول على الخطة العلاجية',
    submittingButton: 'جاري إرسال الملف...',
    successTitle: 'تم تسجيل طلب العلاج بنجاح',
    successDesc: 'تم إدراج ملفكم الطبي في منظومة القبول الدولي لشركة إيرسا سيمرغ جهان. سيتواصل معكم المنسق الطبي المختص خلال أقل من ۲۴ ساعة.',
    trackingLabel: 'رمز متابعة الملف الطبي',
    newRequestButton: 'تسجيل طلب علاج جديد',
  },
  tr: {
    nameLabel: 'Hasta Adı ve Soyadı',
    namePlaceholder: 'Örn: Mehmet Özkan',
    countryLabel: 'İkamet Ettiğiniz Ülke ve Şehir',
    countryPlaceholder: 'Örn: Türkiye, İstanbul / Almanya, Berlin...',
    phoneLabel: 'Doğrudan İletişim Numarası',
    phonePlaceholder: '+90 532 ... veya uluslararası numara',
    whatsappLabel: 'Aktif WhatsApp Numarası (Belge ve Hızlı İletişim İçin)',
    emailLabel: 'Geçerli E-posta Adresi',
    specialtyLabel: 'İlgilendiğiniz Tedavi Alanı / Tıbbi Branş',
    selectSpecialty: 'Lütfen tedavi alanını seçiniz',
    dateLabel: 'Tahmini Seyahat ve Tedaviye Başlama Tarihi',
    filesLabel: 'Tıbbi Rapor ve Tetkikleri Yükleyin (Opsiyonel)',
    filesHint: 'Geçerli formatlar: PDF, JPG, PNG maksimum 25 MB',
    notesLabel: 'Şikayetleriniz, Hastalık Geçmişi ve Özel Talepler',
    notesPlaceholder: 'Lütfen mevcut şikayetlerinizi, varsa önceki ameliyatlarınızı veya kullandığınız ilaçları belirtiniz...',
    submitButton: 'Dosyayı Gönder & Tedavi Planı Al',
    submittingButton: 'Bilgiler İletiliyor...',
    successTitle: 'Tedavi Talebiniz Başarıyla Alındı',
    successDesc: 'Tıbbi dosyanız Airsa Simorgh Jahan uluslararası kabul sistemine kaydedildi. Baş koordinatörümüz 24 saat içinde sizinle iletişime geçecektir.',
    trackingLabel: 'Klinik Dosya Takip Numarası',
    newRequestButton: 'Yeni Bir Tedavi Talebi Oluştur',
  },
};

export const SUPPORT_CTA_BY_LANG = {
  fa: {
    title: 'نیاز به راهنمایی فوری یا مشاوره تلفنی دارید؟',
    subtitle: 'کارشناسان واحد بیماران بین‌الملل ۲۴ ساعته پاسخگوی سوالات شما هستند.',
    buttonText: 'گفتگوی مستقیم با مشاور پزشکی',
  },
  en: {
    title: 'Require Immediate Advisory or Direct Phone Support?',
    subtitle: 'Our International Patient Coordinators are accessible 24/7 to clarify procedures and travel requirements.',
    buttonText: 'Direct Medical Advisor Chat',
  },
  ar: {
    title: 'هل تحتاج إلى استشارة عاجلة أو تواصل هاتفي مباشر؟',
    subtitle: 'منسقو قسم المرضى الدوليين جاهزون للرد على استفساراتكم وتوجيهكم على مدار ۲۴ ساعة.',
    buttonText: 'تواصل مباشر مع المستشار الطبي',
  },
  tr: {
    title: 'Acil Rehberliğe veya Doğrudan Telefon Desteğine mi İhtiyacınız Var?',
    subtitle: 'Uluslararası hasta birimi danışmanlarımız 7/24 sorularınızı yanıtlamaya hazırdır.',
    buttonText: 'Tıbbi Danışmanla Doğrudan Görüşün',
  },
};

export const getTreatmentHeroData = (lang: Language = 'fa') => TREATMENT_HERO_BY_LANG[lang] || TREATMENT_HERO_BY_LANG.fa;
export const getTreatmentOptions = (lang: Language = 'fa') => TREATMENT_OPTIONS_BY_LANG[lang] || TREATMENT_OPTIONS_BY_LANG.fa;
export const getTrustPoints = (lang: Language = 'fa') => TRUST_POINTS_BY_LANG[lang] || TRUST_POINTS_BY_LANG.fa;
export const getFormStrings = (lang: Language = 'fa') => FORM_STRINGS_BY_LANG[lang] || FORM_STRINGS_BY_LANG.fa;
export const getSupportCta = (lang: Language = 'fa') => SUPPORT_CTA_BY_LANG[lang] || SUPPORT_CTA_BY_LANG.fa;

export const getTreatmentRequestHero = getTreatmentHeroData;
export const getSpecialtyOptions = getTreatmentOptions;

export const TREATMENT_OPTIONS = TREATMENT_OPTIONS_BY_LANG.fa;
export const TRUST_POINTS = TRUST_POINTS_BY_LANG.fa;

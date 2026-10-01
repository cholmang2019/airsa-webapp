import { Language } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

export type RequestType =
  | 'medical'
  | 'inbound'
  | 'travel'
  | 'visa'
  | 'vip'
  | 'company'
  | 'residency'
  | 'investment'
  | 'general'
  | 'گردشگری سلامت'
  | 'گردشگری ورودی'
  | 'خدمات سفر'
  | 'ویزای سفر'
  | 'خدمات VIP'
  | 'ثبت شرکت'
  | 'خدمات اقامت'
  | 'سرمایه‌گذاری خارجی'
  | 'مشاوره عمومی';

export interface RequestTypeOption {
  id: string;
  label: string;
  description: string;
}

export interface ContactHeroData {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
}

export interface ContactDirectCard {
  id: string;
  title: string;
  description: string;
  actionText: string;
  actionText2?: string;
  phone1?: string;
  phone2?: string;
  channelInfo: string;
  badge: string;
  href: string;
  href2?: string;
}

export interface ContactPillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface ContactPillarsSectionData {
  badge: string;
  title: string;
  subtitle: string;
  items: ContactPillarItem[];
}

export interface ContactSupportMessageData {
  backgroundImage: string;
  statement: string;
  lead: string;
}

export interface ContactFinalCtaData {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface ContactPageData {
  hero: ContactHeroData;
  destinationEmail: string;
  companyPhone: {
    line1: string;
    line1Display: string;
    line2: string;
    line2Display: string;
  };
  whatsapp: {
    number: string;
    display: string;
    link: string;
  };
  telegram: {
    channel: string;
    channelLink: string;
    channelUrl?: string;
    admin: string;
    adminLink: string;
    adminUrl?: string;
  };
  companyAddress: {
    city: string;
    fullAddress: string;
    googleMapEmbedUrl: string;
    googleMapsDirectLink: string;
  };
  directContactCards: ContactDirectCard[];
  directCards?: ContactDirectCard[];
  formStrings: {
    fullNameLabel: string;
    fullNamePlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    requestTypeLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successDesc: string;
  };
  pillarsSection: ContactPillarsSectionData;
  supportMessage: ContactSupportMessageData;
  finalCta: ContactFinalCtaData;
}

export interface ContactFormData {
  fullName: string;
  country: string;
  phone: string;
  whatsapp: string;
  email: string;
  requestType: string;
  message: string;
}

export const REQUEST_TYPE_OPTIONS_BY_LANG: Record<Language, RequestTypeOption[]> = {
  fa: [
    { id: 'گردشگری سلامت', label: 'گردشگری سلامت', description: 'درمان، جراحی، بستری و ویزای درمانی' },
    { id: 'گردشگری ورودی', label: 'گردشگری ورودی', description: 'تورهای اختصاصی، فرهنگی و راهنمای زبان‌آموز' },
    { id: 'خدمات سفر', label: 'خدمات سفر', description: 'پرواز، رزرو هتل ۵ ستاره و ترانسفر' },
    { id: 'ویزای سفر', label: 'ویزای سفر', description: 'روادید الکترونیک (E-Visa)، تمدید و امور کنسولی' },
    { id: 'خدمات VIP', label: 'خدمات VIP', description: 'تشریفات CIP فرودگاهی، اسکورت و خودرو لوکس' },
    { id: 'ثبت شرکت', label: 'ثبت شرکت', description: 'تاسیس شرکت، افتتاح حساب و دفاتر تجاری' },
    { id: 'خدمات اقامت', label: 'خدمات اقامت', description: 'اقامت کاری، سرمایه‌گذاری و پیگیری حقوقی' },
    { id: 'سرمایه‌گذاری خارجی', label: 'سرمایه‌گذاری خارجی', description: 'پروژه‌های عمرانی، سلامت و گردشگری' },
    { id: 'مشاوره عمومی', label: 'مشاوره عمومی', description: 'سایر سوالات و استعلام‌های تخصصی' },
  ],
  en: [
    { id: 'medical', label: 'Medical Tourism', description: 'Surgeries, physician matchmaking, and hospital admission' },
    { id: 'inbound', label: 'Inbound Cultural Tours', description: 'Private custom itineraries, historical sites, and licensed guides' },
    { id: 'travel', label: 'Travel & Concierge', description: 'International flights, 5-star hotel bookings, and private transfers' },
    { id: 'visa', label: 'Visa Facilitation', description: 'Electronic visas, medical visas (T-Visa), and consular tracking' },
    { id: 'vip', label: 'VIP Concierge', description: 'Airport CIP receptions, chauffeured fleets, and executive assistance' },
    { id: 'company', label: 'Company Incorporation', description: 'Commercial registration, banking setup, and corporate headquarters' },
    { id: 'residency', label: 'Residency Solutions', description: 'Investment residency pathways, long-term visas, and legal counsel' },
    { id: 'investment', label: 'Foreign Direct Investment', description: 'FIPPA opportunities, industrial ventures, and healthcare projects' },
    { id: 'general', label: 'General Inquiries', description: 'General strategic consultations and specialized information' },
  ],
  ar: [
    { id: 'medical', label: 'السياحة العلاجية', description: 'العمليات الجراحية، التنويم في أرقى المستشفيات والتأشيرات الطبية' },
    { id: 'inbound', label: 'السياحة الوافدة', description: 'جولات سياحية خاصة، زيارة المعالم التاريخية ومرشدون لغات' },
    { id: 'travel', label: 'خدمات السفر', description: 'حجز تذاكر الطيران، فنادق 5 نجوم وسيارات خاصة' },
    { id: 'visa', label: 'تأشيرات الدخول', description: 'التأشيرات الإلكترونية، التأشيرات العلاجية وتسهيل الإجراءات' },
    { id: 'vip', label: 'خدمات كبار الشخصيات VIP', description: 'استقبال صالات المطار CIP، سيارات فارهة ومساعد شخصي' },
    { id: 'company', label: 'تأسيس وتسجيل الشركات', description: 'تأسيس الكيانات التجارية، فتح الحسابات البنكية والتراخيص' },
    { id: 'residency', label: 'خدمات الإقامة القانونية', description: 'إقامات المستثمرين، تأشيرات العمل والمتابعة القانونية' },
    { id: 'investment', label: 'الاستثمار الأجنبي المباشر', description: 'المشاريع الاستثمارية الواعدة وقانون حماية الاستثمار' },
    { id: 'general', label: 'استشارات عامة', description: 'أي استفسارات إضافية أو طلبات خاصة' },
  ],
  tr: [
    { id: 'medical', label: 'Sağlık Turizmi', description: 'Cerrahi operasyonlar, uzman doktor eşleştirmesi ve hastane yatışı' },
    { id: 'inbound', label: 'Gelen Turizm (Kültür Turları)', description: 'Özel tur rotaları, tarihi mekanlar ve lisanslı rehberler' },
    { id: 'travel', label: 'Seyahat ve Rezervasyon', description: 'Uçak bileti, 5 yıldızlı otel rezervasyonu ve özel transfer' },
    { id: 'visa', label: 'Vize Kolaylığı', description: 'Elektronik vize (E-Vize), sağlık vizesi ve konsolosluk takibi' },
    { id: 'vip', label: 'VIP Konsiyerj', description: 'Havalimanı CIP salonu, lüks araç filosu ve yönetici asistanı' },
    { id: 'company', label: 'Şirket Kuruluşu', description: 'Ticari tescil, banka hesabı açılışı ve ofis kurulumu' },
    { id: 'residency', label: 'İkamet Çözümleri', description: 'Yatırım yoluyla ikamet, uzun süreli vizeler ve hukuki danışmanlık' },
    { id: 'investment', label: 'Doğrudan Yabancı Yatırım', description: 'FIPPA yatırım fırsatları, sanayi ve sağlık projeleri' },
    { id: 'general', label: 'Genel Danışmanlık', description: 'Stratejik danışmanlık ve diğer tüm özel sorularınız' },
  ],
};

export const CONTACT_PAGE_DATA_BY_LANG: Record<Language, ContactPageData> = {
  fa: {
    hero: {
      title: 'چطور می‌توانیم به شما کمک کنیم؟',
      subtitle: 'نوع درخواست خود را انتخاب کنید و اطلاعات اولیه را برای ما ارسال کنید.',
      image: ASSETS.hero.contactSupport.src,
      badge: 'ارتباط مستقیم با مدیریت و کارشناسان ارشد',
    },
    destinationEmail: 'CEO@medixmaster.com',
    companyPhone: {
      line1: '03131324716',
      line1Display: '۰۳۱-۳۱۳۲۴۷۱۶',
      line2: '03131324717',
      line2Display: '۰۳۱-۳۱۳۲۴۷۱۷',
    },
    whatsapp: {
      number: '09133607595',
      display: '۰۹۱۳۳۶۰۷۵۹۵',
      link: 'https://wa.me/989133607595',
    },
    telegram: {
      channel: 'medixmaster',
      channelLink: 'https://t.me/medixmaster',
      admin: 'venustejaratvira',
      adminLink: 'https://t.me/venustejaratvira',
    },
    companyAddress: {
      city: 'اصفهان',
      fullAddress: 'اصفهان، خیابان بهار آزادی، حد فاصل میدان آزادی و سه راه توحید، روبروی درب دانشگاه اصفهان، کوچه زمانی، مجتمع تجاری اداری پردیس ۲، طبقه اول، واحد ۲۱۲',
      googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.368003687379!2d51.65714777428757!3d32.623022091842344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc370058d79b3b%3A0x5418667f3b9ea11f!2z2LTYsdqp2Kog2YjZhtmI2LMg2KrYrNin2LHYqiDZiNuM2LHYpyAobWVkaXggbWFzdGVy2YXYr9uM2qnYsyDZhdiz2KrYsSk!5e0!3m2!1sen!2sus!4v1788740203502!5m2!1sen!2sus',
      googleMapsDirectLink: 'https://maps.google.com/?q=32.623022,51.657147',
    },
    directContactCards: [
      {
        id: 'phone',
        title: 'تماس مستقیم با شرکت',
        description: 'پاسخگویی کارشناسان و هماهنگی اداری و تشریفاتی',
        actionText: 'تماس با خط ۱',
        actionText2: 'تماس با خط ۲',
        phone1: '03131324716',
        phone2: '03131324717',
        channelInfo: '۰۳۱-۳۱۳۲۴۷۱۶  |  ۰۳۱-۳۱۳۲۴۷۱۷',
        badge: 'خطوط اداری مستقیم',
        href: 'tel:03131324716',
        href2: 'tel:03131324717',
      },
      {
        id: 'whatsapp',
        title: 'شماره تماس در واتس‌اپ',
        description: 'مشاوره فوری، ارسال مدارک و فایل‌های پزشکی',
        actionText: 'گفتگو در واتس‌اپ',
        channelInfo: '۰۹۱۳۳۶۰۷۵۹۵',
        badge: 'پاسخگویی سریع',
        href: 'https://wa.me/989133607595',
      },
      {
        id: 'telegram',
        title: 'کانال و پشتیبانی تلگرام',
        description: 'عضویت در کانال اطلاع‌رسانی و پیام به ادمین',
        actionText: 'کانال: medixmaster@',
        actionText2: 'ادمین: venustejaratvira@',
        channelInfo: 'medixmaster@  |  venustejaratvira@',
        badge: 'کانال و ادمین رسمی',
        href: 'https://t.me/medixmaster',
        href2: 'https://t.me/venustejaratvira',
      },
      {
        id: 'email',
        title: 'مکاتبه رسمی با مدیریت ارشد',
        description: 'ارسال پیشنهادات، پرونده‌های پزشکی و استعلام سازمانی',
        actionText: 'ارسال ایمیل به مدیرعامل',
        channelInfo: 'CEO@medixmaster.com',
        badge: 'ارتباط مستقیم مدیریتی',
        href: 'mailto:CEO@medixmaster.com',
      },
    ],
    formStrings: {
      fullNameLabel: 'نام و نام خانوادگی',
      fullNamePlaceholder: 'مثال: علیرضا افشار',
      countryLabel: 'کشور و شهر محل سکونت',
      countryPlaceholder: 'مثال: آلمان - برلین یا عمان - مسقط',
      phoneLabel: 'شماره تماس مستقیم',
      phonePlaceholder: '+98 912 ... یا شماره بین‌المللی',
      whatsappLabel: 'شماره واتس‌اپ (اختیاری)',
      whatsappPlaceholder: '+98 913 ...',
      emailLabel: 'آدرس ایمیل معتبر',
      emailPlaceholder: 'you@example.com',
      requestTypeLabel: 'حوزه درخواست یا موضوع مشاوره',
      messageLabel: 'شرح درخواست یا جزئیات نیاز شما',
      messagePlaceholder: 'لطفاً خلاصه نیاز، تاریخ تقریبی سفر و جزئیات مدنظر خود را شرح دهید...',
      submitButton: 'ارسال پیام و ثبت استعلام',
      submittingButton: 'در حال ارسال پیام...',
      successTitle: 'پیام شما با موفقیت ثبت شد',
      successDesc: 'اطلاعات شما در سامانه ثبت گردید و کارشناس مربوطه ظرف ۲۴ ساعت با شما تماس خواهد گرفت.',
    },
    pillarsSection: {
      badge: 'ارکان بنیادین تعهد ما',
      title: 'تعهد به کیفیت، امنیت و پاسخگویی بی‌وقفه',
      subtitle: 'سه رکن اساسی در تمام تعاملات و خدمات ایرسا سیمرغ جهان',
      items: [
        {
          id: 'pillar-1',
          number: '۰۱',
          title: 'سرعت و دقت در پاسخگویی',
          subtitle: 'پاسخگویی اولیه به کلیه درخواست‌ها ظرف کمتر از ۲۴ ساعت کاری با رعایت دقیق‌ترین جزئیات بالینی و اجرایی.',
          image: ASSETS.about.focusHealthDoctor.src,
          alt: 'پاسخگویی سریع',
        },
        {
          id: 'pillar-2',
          number: '۰۲',
          title: 'رازداری و امنیت اطلاعات',
          subtitle: 'حفظ محرمانگی کامل مدارک هویتی، پرونده‌های پزشکی و اطلاعات تجاری با استانداردهای بین‌المللی.',
          image: ASSETS.about.approachHandshake.src,
          alt: 'امنیت و رازداری',
        },
        {
          id: 'pillar-3',
          number: '۰۳',
          title: 'همراهی و پشتیبانی همه‌جانبه',
          subtitle: 'حضور مستمر راهنمایان و کارشناسان اختصاصی از اولین تماس تا بازگشت کامل به کشور مبدا.',
          image: ASSETS.about.commitmentJourney.src,
          alt: 'همراهی مستمر',
        },
      ],
    },
    supportMessage: {
      backgroundImage: ASSETS.services.seamlessTravel.src,
      statement: 'ما از نخستین پیام تا پایان سفر در کنار شما هستیم',
      lead: 'تیم متخصص ایرسا سیمرغ جهان با تلفیق تخصص درمانی، تشریفات دیپلماتیک و مهمان‌نوازی اصیل ایرانی، آرامش خاطر شما را تضمین می‌کند.',
    },
    finalCta: {
      title: 'آماده شروع یک تجربه متمایز هستید؟',
      subtitle: 'فرم ارتباطی بالا را تکمیل کنید یا از طریق یکی از روش‌های تماس با ما گفتگو نمایید.',
      buttonText: 'تکمیل فرم درخواست و مشاوره',
    },
  },
  en: {
    hero: {
      title: 'How Can We Assist You?',
      subtitle: 'Select your inquiry domain and share preliminary details. Our executive team is at your disposal.',
      image: ASSETS.hero.contactSupport.src,
      badge: 'Direct Access to Executive Advisory Desk',
    },
    destinationEmail: 'CEO@medixmaster.com',
    companyPhone: {
      line1: '+983131324716',
      line1Display: '+98 (31) 3132-4716',
      line2: '+983131324717',
      line2Display: '+98 (31) 3132-4717',
    },
    whatsapp: {
      number: '+989133607595',
      display: '+98 913 360 7595',
      link: 'https://wa.me/989133607595',
    },
    telegram: {
      channel: 'medixmaster',
      channelLink: 'https://t.me/medixmaster',
      admin: 'venustejaratvira',
      adminLink: 'https://t.me/venustejaratvira',
    },
    companyAddress: {
      city: 'Isfahan',
      fullAddress: 'Pardis 2 Commercial Complex, 1st Floor, Suite 212, Zamani Alley, Bahar Azadi St, Isfahan, Iran',
      googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.368003687379!2d51.65714777428757!3d32.623022091842344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc370058d79b3b%3A0x5418667f3b9ea11f!2z2LTYsdqp2Kog2YjZhtmI2LMg2KrYrNin2LHYqiDZiNuM2LHYpyAobWVkaXggbWFzdGVy2YXYr9uM2qnYsyDZhdiz2KrYsSk!5e0!3m2!1sen!2sus!4v1788740203502!5m2!1sen!2sus',
      googleMapsDirectLink: 'https://maps.google.com/?q=32.623022,51.657147',
    },
    directContactCards: [
      {
        id: 'phone',
        title: 'Direct Corporate Lines',
        description: 'Multilingual executive intake and institutional coordination',
        actionText: 'Call Line 1',
        actionText2: 'Call Line 2',
        phone1: '+983131324716',
        phone2: '+983131324717',
        channelInfo: '+98 (31) 3132-4716  |  +98 (31) 3132-4717',
        badge: 'HQ Direct Lines',
        href: 'tel:+983131324716',
        href2: 'tel:+983131324717',
      },
      {
        id: 'whatsapp',
        title: 'Official WhatsApp Concierge',
        description: 'Rapid intake, file transmission, and instant messaging',
        actionText: 'Chat on WhatsApp',
        channelInfo: '+98 913 360 7595',
        badge: 'Priority Instant Desk',
        href: 'https://wa.me/989133607595',
      },
      {
        id: 'telegram',
        title: 'Telegram Channel & Support',
        description: 'Updates channel and direct liaison with desk administrator',
        actionText: 'Channel: @medixmaster',
        actionText2: 'Admin: @venustejaratvira',
        channelInfo: '@medixmaster  |  @venustejaratvira',
        badge: 'Official Communications',
        href: 'https://t.me/medixmaster',
        href2: 'https://t.me/venustejaratvira',
      },
      {
        id: 'email',
        title: 'Direct Executive Correspondence',
        description: 'Corporate partnerships, diagnostic files, and confidential queries',
        actionText: 'Email Chief Executive',
        channelInfo: 'CEO@medixmaster.com',
        badge: 'Executive Direct Desk',
        href: 'mailto:CEO@medixmaster.com',
      },
    ],
    formStrings: {
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g., Jonathan Adams',
      countryLabel: 'Country & City of Residence',
      countryPlaceholder: 'e.g., London, UK or Dubai, UAE',
      phoneLabel: 'Direct Phone Number',
      phonePlaceholder: '+1 ... or international format',
      whatsappLabel: 'WhatsApp Number (Optional)',
      whatsappPlaceholder: '+971 ...',
      emailLabel: 'Official Email Address',
      emailPlaceholder: 'you@example.com',
      requestTypeLabel: 'Service Domain or Inquiry Topic',
      messageLabel: 'Detailed Request / Clinical or Travel Needs',
      messagePlaceholder: 'Please outline your objectives, anticipated dates, and specific requirements...',
      submitButton: 'Submit Inquiry to Advisory Desk',
      submittingButton: 'Submitting Message...',
      successTitle: 'Inquiry Successfully Submitted',
      successDesc: 'Your request is recorded. Our assigned international coordinator will contact you within 24 hours.',
    },
    pillarsSection: {
      badge: 'Pillars of Our Commitment',
      title: 'Dedication to Quality, Security & Unfaltering Care',
      subtitle: 'Three foundational principles guiding all client partnerships at Airsa Simorgh Jahan',
      items: [
        {
          id: 'pillar-1',
          number: '01',
          title: 'Rapid Precision Intake',
          subtitle: 'Prompt comprehensive evaluation of all cases within 24 hours adhering to strict clinical and concierge protocols.',
          image: ASSETS.about.focusHealthDoctor.src,
          alt: 'Rapid precision intake',
        },
        {
          id: 'pillar-2',
          number: '02',
          title: 'Confidentiality & Data Security',
          subtitle: 'Absolute safeguarding of personal records, health diagnostics, and corporate strategies according to global standards.',
          image: ASSETS.about.approachHandshake.src,
          alt: 'Data confidentiality',
        },
        {
          id: 'pillar-3',
          number: '03',
          title: 'Dedicated End-to-End Care',
          subtitle: 'Continuous liaison with personal coordinators and licensed liaisons from first consultation until safe journey conclusion.',
          image: ASSETS.about.commitmentJourney.src,
          alt: 'End-to-end guidance',
        },
      ],
    },
    supportMessage: {
      backgroundImage: ASSETS.services.seamlessTravel.src,
      statement: 'From Your First Inquiry to Safe Return, We Are by Your Side',
      lead: 'Combining clinical diligence, executive protocol, and genuine Persian hospitality, Airsa Simorgh Jahan ensures absolute peace of mind.',
    },
    finalCta: {
      title: 'Ready to Embark on a Distinctive Experience?',
      subtitle: 'Complete the inquiry form above or reach out directly through our dedicated communication channels.',
      buttonText: 'Complete Inquiry Form',
    },
  },
  ar: {
    hero: {
      title: 'كيف يمكننا مساعدتكم اليوم؟',
      subtitle: 'حدد نوع طلبكم وأرسلوا لنا التفاصيل الأولية ليتواصل معكم فريقنا التنفيذي فوراً.',
      image: ASSETS.hero.contactSupport.src,
      badge: 'تواصل مباشر مع الإدارة العامة وكبار الاستشاريين',
    },
    destinationEmail: 'CEO@medixmaster.com',
    companyPhone: {
      line1: '+983131324716',
      line1Display: '٠٣١-٣١٣٢٤٧١٦',
      line2: '+983131324717',
      line2Display: '٠٣١-٣١٣٢٤٧١٧',
    },
    whatsapp: {
      number: '+989133607595',
      display: '٠٩١٣٣٦٠٧٥٩٥',
      link: 'https://wa.me/989133607595',
    },
    telegram: {
      channel: 'medixmaster',
      channelLink: 'https://t.me/medixmaster',
      admin: 'venustejaratvira',
      adminLink: 'https://t.me/venustejaratvira',
    },
    companyAddress: {
      city: 'أصفهان',
      fullAddress: 'إيران، أصفهان، شارع بهار آزادي، مقابل بوابة جامعة أصفهان، زقاق زماني، مجمع برديس ۲ التجاري الإداري، الطابق الأول، وحدة ۲۱۲',
      googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.368003687379!2d51.65714777428757!3d32.623022091842344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc370058d79b3b%3A0x5418667f3b9ea11f!2z2LTYsdqp2Kog2YjZhtmI2LMg2KrYrNin2LHYqiDZiNuM2LHYpyAobWVkaXggbWFzdGVy2YXYr9uM2qnYsyDZhdiz2KrYsSk!5e0!3m2!1sen!2sus!4v1788740203502!5m2!1sen!2sus',
      googleMapsDirectLink: 'https://maps.google.com/?q=32.623022,51.657147',
    },
    directContactCards: [
      {
        id: 'phone',
        title: 'الاتصال الهاتفي المباشر',
        description: 'استقبال المكالمات وتنسيق الرحلات والبرامج الطبية',
        actionText: 'اتصال بالخط الأول',
        actionText2: 'اتصال بالخط الثاني',
        phone1: '+983131324716',
        phone2: '+983131324717',
        channelInfo: '٠٣١-٣١٣٢٤٧١٦  |  ٠٣١-٣١٣٢٤٧١٧',
        badge: 'الخطوط الرسمية المباشرة',
        href: 'tel:+983131324716',
        href2: 'tel:+983131324717',
      },
      {
        id: 'whatsapp',
        title: 'رقم الواتساب المعتمد',
        description: 'استشارات فورية، إرسال الملفات والتقارير الطبية',
        actionText: 'محادثة عبر واتساب',
        channelInfo: '٠٩١٣٣٦٠٧٥٩٥',
        badge: 'استجابة فورية',
        href: 'https://wa.me/989133607595',
      },
      {
        id: 'telegram',
        title: 'قناة ودعم تيليجرام',
        description: 'متابعة أخبار الخدمات ومراسلة المسؤول المباشر',
        actionText: 'القناة: medixmaster@',
        actionText2: 'المسؤول: venustejaratvira@',
        channelInfo: 'medixmaster@  |  venustejaratvira@',
        badge: 'الحسابات الرسمية',
        href: 'https://t.me/medixmaster',
        href2: 'https://t.me/venustejaratvira',
      },
      {
        id: 'email',
        title: 'المراسلات الإدارية المباشرة',
        description: 'إرسال التقارير الطبية الموسعة والعروض التجارية',
        actionText: 'إرسال بريد للمدير العام',
        channelInfo: 'CEO@medixmaster.com',
        badge: 'التواصل المباشر مع الإدارة',
        href: 'mailto:CEO@medixmaster.com',
      },
    ],
    formStrings: {
      fullNameLabel: 'الاسم الكامل',
      fullNamePlaceholder: 'مثال: محمد العمري',
      countryLabel: 'بلد ومدينة الإقامة',
      countryPlaceholder: 'مثال: مسقط، عمان أو بغداد، العراق',
      phoneLabel: 'رقم الهاتف المباشر',
      phonePlaceholder: 'مفتاح الدولة + رقم الهاتف',
      whatsappLabel: 'رقم الواتساب (اختياري)',
      whatsappPlaceholder: '+968 ...',
      emailLabel: 'البريد الإلكتروني المعتمد',
      emailPlaceholder: 'you@example.com',
      requestTypeLabel: 'نوع الخدمة أو موضوع الاستشارة',
      messageLabel: 'تفاصيل الطلب أو شرح الحالة والاحتياجات',
      messagePlaceholder: 'يرجى كتابة تفاصيل الاستفسار، التواريخ المقترحة، وأي طلبات خاصة...',
      submitButton: 'إرسال الطلب والاستفسار',
      submittingButton: 'جاري الإرسال...',
      successTitle: 'تم إرسال رسالتكم بنجاح',
      successDesc: 'تم تسجيل بياناتكم في النظام، وسيقوم المنسق المختص بالتواصل معكم خلال أقل من ۲۴ ساعة.',
    },
    pillarsSection: {
      badge: 'أركان التزامنا الأساسية',
      title: 'الالتزام بالجودة، الأمان والاستجابة المستمرة',
      subtitle: 'ثلاث ركائز جوهرية توجه كافة خدماتنا وشراكاتنا في إيرسا سيمرغ جهان',
      items: [
        {
          id: 'pillar-1',
          number: '۰۱',
          title: 'السرعة والدقة في الرد',
          subtitle: 'مراجعة أولية شاملة لكافة الطلبات والتقارير الطبية خلال أقل من ۲۴ ساعة عمل مع أعلى درجات الدقة والاحترافية.',
          image: ASSETS.about.focusHealthDoctor.src,
          alt: 'الرد السريع والدقيق',
        },
        {
          id: 'pillar-2',
          number: '۰۲',
          title: 'السرية التامة وأمان البيانات',
          subtitle: 'حماية مطلقة لخصوصية الوثائق الطبية، المعلومات الشخصية، وخطط الأعمال الاستثمارية وفق أرقى المعايير الدولية.',
          image: ASSETS.about.approachHandshake.src,
          alt: 'السرية والأمان',
        },
        {
          id: 'pillar-3',
          number: '۰۳',
          title: 'المرافقة والدعم الشامل',
          subtitle: 'تواجد مستمر للمنسقين الشخصيين والمرشدين المتخصصين منذ أول تواصل وحتى العودة الآمنة إلى بلادكم.',
          image: ASSETS.about.commitmentJourney.src,
          alt: 'المرافقة الشاملة',
        },
      ],
    },
    supportMessage: {
      backgroundImage: ASSETS.services.seamlessTravel.src,
      statement: 'نحن بجانبكم من أول رسالة وحتى ختام الرحلة بسلام',
      lead: 'فريق إيرسا سيمرغ جهان المتخصص يجمع بين الدقة العلاجية، والبروتوكول الرفيع، وكرم الضيافة الإيرانية الأصيلة لضمان راحتكم التامة.',
    },
    finalCta: {
      title: 'هل أنتم مستعدون لتجربة استثنائية راقية؟',
      subtitle: 'يرجى تعبئة نموذج الاستفسار أعلاه أو التواصل المباشر عبر قنوات الاتصال المعتمدة.',
      buttonText: 'تعبئة استمارة الطلب والاستشارة',
    },
  },
  tr: {
    hero: {
      title: 'Size Nasıl Yardımcı Olabiliriz?',
      subtitle: 'Talep türünüzü seçin ve ilk bilgileri bize iletin; uzman ekibimiz en kısa sürede sizinle iletişime geçsin.',
      image: ASSETS.hero.contactSupport.src,
      badge: 'Yönetim ve Kıdemli Danışmanlarla Doğrudan İletişim',
    },
    destinationEmail: 'CEO@medixmaster.com',
    companyPhone: {
      line1: '+983131324716',
      line1Display: '+98 31 31324716',
      line2: '+983131324717',
      line2Display: '+98 31 31324717',
    },
    whatsapp: {
      number: '+989133607595',
      display: '+98 913 360 7595',
      link: 'https://wa.me/989133607595',
    },
    telegram: {
      channel: 'medixmaster',
      channelLink: 'https://t.me/medixmaster',
      admin: 'venustejaratvira',
      adminLink: 'https://t.me/venustejaratvira',
    },
    companyAddress: {
      city: 'İsfahan',
      fullAddress: 'İsfahan, Bahar Azadi Caddesi, Azadi Meydanı ile Tevhid Kavşağı arası, İsfahan Üniversitesi Girişi karşısı, Zamani Sokağı, Pardis 2 Ticaret ve İş Merkezi, 1. Kat, No: 212',
      googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.368003687379!2d51.65714777428757!3d32.623022091842344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc370058d79b3b%3A0x5418667f3b9ea11f!2z2LTYsdqp2Kog2YjZhtmI2LMg2KrYrNin2LHYqiDZiNuM2LHYpyAobWVkaXggbWFzdGVy2YXYr9uM2qnYsyDZhdiz2KrYsSk!5e0!3m2!1sen!2sus!4v1788740203502!5m2!1sen!2sus',
      googleMapsDirectLink: 'https://maps.google.com/?q=32.623022,51.657147',
    },
    directContactCards: [
      {
        id: 'phone',
        title: 'Doğrudan Telefon İletişimi',
        description: 'Uzman danışmanlık ve idari/protokol koordinasyonu',
        actionText: '1. Hattı Ara',
        actionText2: '2. Hattı Ara',
        phone1: '+983131324716',
        phone2: '+983131324717',
        channelInfo: '+98 31 31324716 | +98 31 31324717',
        badge: 'Resmi Doğrudan Hatlar',
        href: 'tel:+983131324716',
        href2: 'tel:+983131324717',
      },
      {
        id: 'whatsapp',
        title: 'Resmi WhatsApp Hattı',
        description: 'Anlık danışmanlık, dosya ve tıbbi rapor gönderimi',
        actionText: 'WhatsApp ile Sohbet',
        channelInfo: '+98 913 360 7595',
        badge: 'Hızlı Yanıt',
        href: 'https://wa.me/989133607595',
      },
      {
        id: 'telegram',
        title: 'Telegram Kanalı ve Destek',
        description: 'Hizmet haberleri ve doğrudan yetkiliyle iletişim',
        actionText: 'Kanal: @medixmaster',
        actionText2: 'Yetkili: @venustejaratvira',
        channelInfo: '@medixmaster | @venustejaratvira',
        badge: 'Resmi Hesaplar',
        href: 'https://t.me/medixmaster',
        href2: 'https://t.me/venustejaratvira',
      },
      {
        id: 'email',
        title: 'Doğrudan İdari Yazışma',
        description: 'Kapsamlı sağlık raporları ve ticari ortaklık teklifleri',
        actionText: 'Genel Müdüre E-posta',
        channelInfo: 'CEO@medixmaster.com',
        badge: 'Yönetimle Doğrudan İletişim',
        href: 'mailto:CEO@medixmaster.com',
      },
    ],
    formStrings: {
      fullNameLabel: 'Adınız ve Soyadınız',
      fullNamePlaceholder: 'Örn: Ahmet Yılmaz',
      countryLabel: 'İkamet Ettiğiniz Ülke ve Şehir',
      countryPlaceholder: 'Örn: İstanbul, Türkiye veya Bakü, Azerbaycan',
      phoneLabel: 'Telefon Numaranız',
      phonePlaceholder: 'Ülke Kodu + Telefon Numarası',
      whatsappLabel: 'WhatsApp Numaranız (İsteğe Bağlı)',
      whatsappPlaceholder: '+90 5...',
      emailLabel: 'E-posta Adresiniz',
      emailPlaceholder: 'you@example.com',
      requestTypeLabel: 'Hizmet Türü veya Danışmanlık Konusu',
      messageLabel: 'Talep Detayları veya Durum Açıklaması',
      messagePlaceholder: 'Lütfen sorularınızı, planlanan tarihleri ve özel taleplerinizi belirtin...',
      submitButton: 'Talebi ve Mesajı Gönder',
      submittingButton: 'Gönderiliyor...',
      successTitle: 'Mesajınız Başarıyla İletildi',
      successDesc: 'Bilgileriniz sisteme kaydedildi. İlgili koordinatörümüz 24 saat içinde sizinle iletişime geçecektir.',
    },
    pillarsSection: {
      badge: 'Temel Hizmet İlkelerimiz',
      title: 'Kalite, Güvenlik ve Kesintisiz İletişim',
      subtitle: 'Airsa Simorgh Jahan çatısı altındaki tüm hizmetlerimizi şekillendiren üç ana ilke',
      items: [
        {
          id: 'pillar-1',
          number: '01',
          title: 'Hızlı ve Titiz Değerlendirme',
          subtitle: 'Tüm başvuru ve tıbbi raporların 24 saat içinde en üst düzey uzmanlıkla incelenmesi ve yanıtlanması.',
          image: ASSETS.about.focusHealthDoctor.src,
          alt: 'Hızlı ve Titiz Değerlendirme',
        },
        {
          id: 'pillar-2',
          number: '02',
          title: 'Mutlak Gizlilik ve Veri Güvenliği',
          subtitle: 'Tıbbi belgelerin, kişisel verilerin ve yatırım planlarının uluslararası standartlarda tam korunması.',
          image: ASSETS.about.approachHandshake.src,
          alt: 'Gizlilik ve Güvenlik',
        },
        {
          id: 'pillar-3',
          number: '03',
          title: 'Kapsamlı Rehberlik ve Refakat',
          subtitle: 'İlk temastan seyahatinizin tamamlanıp ülkenize dönüşünüze kadar kesintisiz bireysel refakat.',
          image: ASSETS.about.commitmentJourney.src,
          alt: 'Kapsamlı Refakat',
        },
      ],
    },
    supportMessage: {
      backgroundImage: ASSETS.services.seamlessTravel.src,
      statement: 'İlk adımdan seyahatinizin sonuna kadar daima yanınızdayız',
      lead: 'Airsa Simorgh Jahan uzman ekibi; tıbbi hassasiyet, yüksek protokol standartları ve köklü Pers misafirperverliğini huzurunuz için bir araya getiriyor.',
    },
    finalCta: {
      title: 'Ayrıcalıklı ve Güvenli Bir Deneyime Hazır mısınız?',
      subtitle: 'Yukarıdaki danışmanlık formunu doldurabilir veya resmi iletişim kanallarımızdan bize doğrudan ulaşabilirsiniz.',
      buttonText: 'Talep Formunu Doldurun',
    },
  },
};

export const getRequestTypeOptions = (lang: Language = 'fa') => REQUEST_TYPE_OPTIONS_BY_LANG[lang] || REQUEST_TYPE_OPTIONS_BY_LANG.fa;
export const getContactPageData = (lang: Language = 'fa') => CONTACT_PAGE_DATA_BY_LANG[lang] || CONTACT_PAGE_DATA_BY_LANG.fa;

export const REQUEST_TYPE_OPTIONS = REQUEST_TYPE_OPTIONS_BY_LANG.fa;
export const CONTACT_PAGE_DATA = CONTACT_PAGE_DATA_BY_LANG.fa;

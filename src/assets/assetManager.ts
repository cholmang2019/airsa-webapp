/**
 * IRSA SIMORGH - Centralized Local Asset Manager
 * 
 * Strict Policy:
 * 1. Zero external stock dependencies (No Unsplash, Pixabay, Pexels).
 * 2. All images are local assets inside /public/images/.
 * 3. Short, SEO-friendly English filenames.
 * 4. High-efficiency WebP format with graceful local fallback placeholders.
 * 5. Descriptive Persian alt texts for maximum accessibility and SEO.
 */

export interface LocalAssetItem {
  id: string;
  src: string;
  alt: string;
  fallback: string;
  title?: string;
  width?: number;
  height?: number;
}

export const LOCAL_PLACEHOLDERS = {
  hero: '/images/hero/placeholder-hero.webp',
  about: '/images/about/placeholder-about.webp',
  services: '/images/services/placeholder-service.webp',
  blog: '/images/blog/placeholder-blog.webp',
  team: '/images/team/placeholder-team.webp',
  icons: '/images/icons/brand-symbol.svg',
} as const;

export const ASSETS = {
  // --- HERO ASSETS ---
  hero: {
    patientCare: {
      id: 'patient-care-hero',
      src: '/images/hero/patient-care-hero.webp',
      alt: 'خدمات همراهی بیماران بین‌المللی و مراقبت پزشکی تخصصی در ایران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
    iranTourism: {
      id: 'iran-tourism-hero',
      src: '/images/hero/iran-tourism-hero.webp',
      alt: 'جاذبه‌های گردشگری تاریخی و فرهنگی کهن ایران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
    travelServices: {
      id: 'travel-services-hero',
      src: '/images/hero/travel-services-hero.webp',
      alt: 'خدمات جامع سفر، اقامت و تشریفات گردشگری بین‌المللی',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
    contactSupport: {
      id: 'contact-support-hero',
      src: '/images/hero/contact-support-hero.webp',
      alt: 'مرکز پشتیبانی چندزبانه و مشاوره تخصصی ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
    requestTreatment: {
      id: 'request-treatment-hero',
      src: '/images/hero/request-treatment-hero.webp',
      alt: 'ثبت درخواست درمان و استعلام مدارک پزشکی در ایران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
    aboutGateway: {
      id: 'about-gateway-hero',
      src: '/images/hero/about-gateway-hero.webp',
      alt: 'درگاه خدمات جامع گردشگری سلامت و تشریفات ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
    terminalGateway: {
      id: 'terminal-gateway-hero',
      src: '/images/hero/terminal-gateway-hero.webp',
      alt: 'استقبال فرودگاهی و هماهنگی ترانسفر تشریفاتی مسافران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
  },

  // --- ABOUT US ASSETS ---
  about: {
    whoWeAreReception: {
      id: 'who-we-are-reception',
      src: '/images/about/who-we-are-reception.webp',
      alt: 'پذیرش رسمی و راهنمایی بیماران در مرکز ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    whoWeAreHospitality: {
      id: 'who-we-are-hospitality',
      src: '/images/about/who-we-are-hospitality.webp',
      alt: 'تیم مهمان‌نوازی و میزبانی بین‌المللی ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    missionCareSupport: {
      id: 'mission-care-support',
      src: '/images/about/mission-care-support.webp',
      alt: 'تعهد و رسالت سازمان در مراقبت همه‌جانبه از بیماران',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    missionIntegratedCare: {
      id: 'mission-integrated-care',
      src: '/images/about/mission-integrated-care.webp',
      alt: 'پوشش یکپارچه خدمات درمان و اقامت تخصصی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    approachBoardroom: {
      id: 'approach-boardroom',
      src: '/images/about/approach-boardroom.webp',
      alt: 'جلسه برنامه‌ریزی استراتژیک و هماهنگی کلینیک‌های طرف قرارداد',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    approachFormalMeeting: {
      id: 'approach-formal-meeting',
      src: '/images/about/approach-formal-meeting.webp',
      alt: 'مذاکرات رسمی و توسعه همکاری‌های بین‌المللی سلامت',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    approachConference: {
      id: 'approach-conference',
      src: '/images/about/approach-conference.webp',
      alt: 'حضور در کنفرانس‌های بین‌المللی گردشگری و درمان',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    approachHandshake: {
      id: 'approach-handshake',
      src: '/images/about/approach-handshake.webp',
      alt: 'انعقاد قرارداد همکاری با مراکز معتبر درمانی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    commitmentJourney: {
      id: 'commitment-journey',
      src: '/images/about/commitment-journey.webp',
      alt: 'همراهی گام‌به‌گام مسافر از مبدأ تا مقصد نهایی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    focusTourismIsfahan: {
      id: 'focus-tourism-isfahan',
      src: '/images/about/focus-tourism-isfahan.webp',
      alt: 'تورهای اختصاصی اصفهان و گشت‌های فرهنگی تاریخی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    focusTourismJourney: {
      id: 'focus-tourism-journey',
      src: '/images/about/focus-tourism-journey.webp',
      alt: 'تجربه سفرهای بی‌دغدغه در شهرهای دیدنی ایران',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    focusHealthDoctor: {
      id: 'focus-health-doctor',
      src: '/images/about/focus-health-doctor.webp',
      alt: 'پزشکان متخصص و فوق‌تخصص همکار در بالاترین استانداردهای پزشکی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    focusHealthModern: {
      id: 'focus-health-modern',
      src: '/images/about/focus-health-modern.webp',
      alt: 'تجهیزات مدرن تشخیصی و درمانی در بیمارستان‌های تراز اول',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    focusVipChauffeur: {
      id: 'focus-vip-chauffeur',
      src: '/images/about/focus-vip-chauffeur.webp',
      alt: 'ناوگان خودروهای لوکس و رانندگان مجرب تشریفاتی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
    focusIntlCorporate: {
      id: 'focus-intl-corporate',
      src: '/images/about/focus-intl-corporate.webp',
      alt: 'مشاوره حقوقی، بازرگانی و تجاری بین‌المللی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
  },

  // --- SERVICES ASSETS ---
  services: {
    consultation: {
      id: 'consultation',
      src: '/images/services/consultation.webp',
      alt: 'مشاوره پزشکی آنلاین و بررسی پرونده بالینی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    doctorSelection: {
      id: 'doctor-selection',
      src: '/images/services/doctor-selection.webp',
      alt: 'انتخاب بهترین پزشک جراح و متخصص متناسب با نوع بیماری',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    hospitalBooking: {
      id: 'hospital-booking',
      src: '/images/services/hospital-booking.webp',
      alt: 'رزرو تخت و هماهنگی بیمارستان‌های فوق‌تخصصی دارای IPD',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    visaAssistance: {
      id: 'visa-assistance',
      src: '/images/services/visa-assistance.webp',
      alt: 'صدور ویزای درمانی T و ویزای گردشگری ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    flightBooking: {
      id: 'flight-booking',
      src: '/images/services/flight-booking.webp',
      alt: 'رزرو بلیط پروازهای بین‌المللی و داخلی متناسب با تقویم درمانی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    hotelAccommodation: {
      id: 'hotel-accommodation',
      src: '/images/services/hotel-accommodation.webp',
      alt: 'رزرو هتل‌های ۵ ستاره، اقامتگاه‌های لوکس و سوئیت‌های نزدیک بیمارستان',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    privateTransfer: {
      id: 'private-transfer',
      src: '/images/services/private-transfer.webp',
      alt: 'ترانسفر اختصاصی فرودگاهی و جابه‌جایی شهری بیمار',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    postOpRecovery: {
      id: 'post-op-recovery',
      src: '/images/services/post-op-recovery.webp',
      alt: 'دوران نقاهت پس از عمل همراه با خدمات پرستاری و تغذیه ارگانیک',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    cipAirportLounge: {
      id: 'cip-airport-lounge',
      src: '/images/services/cip-airport-lounge.webp',
      alt: 'خدمات تشریفات فرودگاهی CIP و سالن اختصاصی پذیرایی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    itineraryPlanning: {
      id: 'itinerary-planning',
      src: '/images/services/itinerary-planning.webp',
      alt: 'برنامه‌ریزی تور اختصاصی و برنامه سفر سفارشی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    seamlessTravel: {
      id: 'seamless-travel',
      src: '/images/services/seamless-travel.webp',
      alt: 'همراهی بی‌وقفه و تجربه سفر بدون استرس در سراسر ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    companyFormation: {
      id: 'company-formation',
      src: '/images/services/company-formation.webp',
      alt: 'خدمات ثبت شرکت، اخذ اقامت و سرمایه‌گذاری خارجی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    intlAdvisory: {
      id: 'intl-advisory',
      src: '/images/services/intl-advisory.webp',
      alt: 'مشاوره حقوقی و اقتصادی برای تجار و شرکت‌های خارجی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    vipPatientRecovery: {
      id: 'vip-patient-recovery',
      src: '/images/services/vip-patient-recovery.webp',
      alt: 'محیط آرامش‌بخش درمان و اقامت VIP',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    luxuryTourism: {
      id: 'luxury-tourism',
      src: '/images/services/luxury-tourism.webp',
      alt: 'بسته‌های گردشگری لاکچری و اختصاصی ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    healthcareHospitality: {
      id: 'healthcare-hospitality',
      src: '/images/services/healthcare-hospitality.webp',
      alt: 'استانداردهای میزبانی و ایمنی بیمارستان‌های ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    persianCarpetCulture: {
      id: 'persian-carpet-culture',
      src: '/images/services/persian-carpet-culture.webp',
      alt: 'هنر فرش اصیل ایرانی و کارگاه‌های صنایع‌دستی سنتی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    persepolisHeritage: {
      id: 'persepolis-heritage',
      src: '/images/services/persepolis-heritage.webp',
      alt: 'تخت‌جمشید و میراث باستانی باشکوه شیراز',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    nasirAlMulkArchitecture: {
      id: 'nasir-al-mulk-architecture',
      src: '/images/services/nasir-al-mulk-architecture.webp',
      alt: 'معماری شگفت‌انگیز شیشه‌های رنگی و مقرنس‌های اصیل ایرانی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    persianCuisineFeast: {
      id: 'persian-cuisine-feast',
      src: '/images/services/persian-cuisine-feast.webp',
      alt: 'سفره اصیل غذاهای سنتی و نوشیدنی‌های گیاهی ایرانی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    lutDesertSafari: {
      id: 'lut-desert-safari',
      src: '/images/services/lut-desert-safari.webp',
      alt: 'کویر لوت، کلوت‌های افسانه‌ای و شب‌های پرستاره کویر',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    traditionalBazaarLife: {
      id: 'traditional-bazaar-life',
      src: '/images/services/traditional-bazaar-life.webp',
      alt: 'بازارهای سنتی و نبض پرحرارت زندگی و فرهنگ ایرانی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    yazdWindcatchers: {
      id: 'yazd-windcatchers',
      src: '/images/services/yazd-windcatchers.webp',
      alt: 'بادگیرهای تاریخی و بافت خشتی منحصربه‌فرد یزد',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    yazdHistoricRooftops: {
      id: 'yazd-historic-rooftops',
      src: '/images/services/yazd-historic-rooftops.webp',
      alt: 'پشت‌بام‌های کاهگلی شهر تاریخی یزد در غروب آفتاب',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    kishIslandResort: {
      id: 'kish-island-resort',
      src: '/images/services/kish-island-resort.webp',
      alt: 'ساحل آرام و هتل‌های پنج‌ستاره جزیره زیبای کیش',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    isfahanNaghsheJahan: {
      id: 'isfahan-naghshe-jahan',
      src: '/images/services/isfahan-naghshe-jahan.webp',
      alt: 'میدان نقش‌جهان اصفهان و گنبدهای فیروزه‌ای',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
    inboundTouristExperience: {
      id: 'inbound-tourist-experience',
      src: '/images/services/inbound-tourist-experience.webp',
      alt: 'تجربه دلنشین گردشگران بین‌المللی در سفر به ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
  },

  // --- TEAM ASSETS ---
  team: {
    medicalCoordinator: {
      id: 'medical-coordinator',
      src: '/images/team/medical-coordinator.webp',
      alt: 'هماهنگ‌کننده ارشد پرونده‌های پزشکی بیماران بین‌المللی',
      fallback: LOCAL_PLACEHOLDERS.team,
    },
    chiefMedicalOfficer: {
      id: 'chief-medical-officer',
      src: '/images/team/chief-medical-officer.webp',
      alt: 'پزشک ناظر و مشاور ارشد کلینیکال ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.team,
    },
    internationalAffairsDirector: {
      id: 'international-affairs-director',
      src: '/images/team/international-affairs-director.webp',
      alt: 'مدیر امور بین‌الملل و ارتباطات دیپلماتیک',
      fallback: LOCAL_PLACEHOLDERS.team,
    },
    vipTransportLead: {
      id: 'vip-transport-lead',
      src: '/images/team/vip-transport-lead.webp',
      alt: 'مسئول ارشد تشریفات و ناوگان اختصاصی فرودگاهی',
      fallback: LOCAL_PLACEHOLDERS.team,
    },
  },

  // --- BLOG / JOURNAL ASSETS ---
  blog: {
    medicalTourismGuide: {
      id: 'medical-tourism-guide',
      src: '/images/blog/iran-medical-tourism-guide.webp',
      alt: 'راهنمای جامع توریسم سلامت در ایران و مزیت‌های درمانی',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    healthHospitalityStandards: {
      id: 'health-hospitality-standards',
      src: '/images/blog/health-hospitality-standards.webp',
      alt: 'استانداردهای مراقبت و بیمارستان‌های دارای تاییدیه IPD در ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    isfahanTravelItinerary: {
      id: 'isfahan-travel-itinerary',
      src: '/images/blog/isfahan-travel-itinerary.webp',
      alt: 'راهنمای سفر و گشت‌های دیدنی در پایتخت فرهنگی اصفهان',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    shirazPersepolisHistory: {
      id: 'shiraz-persepolis-history',
      src: '/images/blog/shiraz-persepolis-history.webp',
      alt: 'سفر به تاریخ کهن هخامنشیان و باغ‌های شیراز',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    cipAirportGuide: {
      id: 'cip-airport-guide',
      src: '/images/blog/cip-airport-guide.webp',
      alt: 'مزایای خدمات CIP فرودگاه امام خمینی و اصفهان برای مسافران VIP',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    iranTreatmentVisa: {
      id: 'iran-treatment-visa',
      src: '/images/blog/iran-treatment-visa.webp',
      alt: 'مراحل و مدارک مورد نیاز جهت اخذ ویزای درمان T ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    businessFormationIran: {
      id: 'business-formation-iran',
      src: '/images/blog/business-formation-iran.webp',
      alt: 'راهنمای ثبت شرکت و سرمایه‌گذاری برای اتباع و بازرگانان خارجی',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    kishRecreationTourism: {
      id: 'kish-recreation-tourism',
      src: '/images/blog/kish-recreation-tourism.webp',
      alt: 'تفریحات دریایی و استراحت در هتل‌های جزیره کیش',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    doctorConsultationGuide: {
      id: 'doctor-consultation-guide',
      src: '/images/blog/doctor-consultation-guide.webp',
      alt: 'نحوه دریافت مشاوره پیش از سفر از پزشکان متخصص ایرانی',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    lutDesertUnesco: {
      id: 'lut-desert-unesco',
      src: '/images/blog/lut-desert-unesco.webp',
      alt: 'شگفتی‌های کویر ثبت‌شده جهانی لوت و کمپ‌های ستاره‌شناسی',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    corporateAdvisoryMiddleEast: {
      id: 'corporate-advisory-middle-east',
      src: '/images/blog/corporate-advisory-middle-east.webp',
      alt: 'مشاوره تجاری و حقوقی با کشورهای حوزه خلیج‌فارس و عراق',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    cosmeticSurgeryIran: {
      id: 'cosmetic-surgery-iran',
      src: '/images/blog/cosmetic-surgery-iran.webp',
      alt: 'کیفیت و هزینه جراحی‌های زیبایی بینی و زیبایی در ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    ivfFertilityCenters: {
      id: 'ivf-fertility-centers',
      src: '/images/blog/ivf-fertility-centers.webp',
      alt: 'نرخ موفقیت بالای درمان ناباروری و IVF در پژوهشگاه‌های ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    orthopedicSurgeries: {
      id: 'orthopedic-surgeries',
      src: '/images/blog/orthopedic-surgeries.webp',
      alt: 'تعویض مفصل و جراحی‌های ارتوپدی پیشرفته با کمترین هزینه',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    dentalImplantPackages: {
      id: 'dental-implant-packages',
      src: '/images/blog/dental-implant-packages.webp',
      alt: 'خدمات دندانپزشکی دیجیتال، لمینت و ایمپلنت فوری در تهران و اصفهان',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    iranVisaRequirementsFaq: {
      id: 'iran-visa-requirements-faq',
      src: '/images/blog/iran-visa-requirements-faq.webp',
      alt: 'پرسش‌های متداول ویزای فرودگاهی و الکترونیک ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
    medicalVisaExtensionRules: {
      id: 'medical-visa-extension-rules',
      src: '/images/blog/medical-visa-extension-rules.webp',
      alt: 'شرایط تمدید مجوز اقامت درمانی در صورت نیاز به ادامه درمان',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
  },

  // --- ICONS ---
  icons: {
    brandSymbol: {
      id: 'brand-symbol',
      src: '/images/icons/brand-symbol.svg',
      alt: 'نشان طلایی بال‌های سیمرغ و هویت بصری ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.icons,
    },
    appIcon192: {
      id: 'app-icon-192',
      src: '/images/icons/app-icon-192.png',
      alt: 'آیکون وب‌اپلیکیشن ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.icons,
    },
    appIcon512: {
      id: 'app-icon-512',
      src: '/images/icons/app-icon-512.png',
      alt: 'آیکون بزرگ وب‌اپلیکیشن ایرسا سیمرغ',
      fallback: LOCAL_PLACEHOLDERS.icons,
    },
  },
} as const;

/**
 * Validates that an image path is safe and local.
 * If invalid or empty, returns the appropriate local placeholder.
 */
export function getLocalImagePath(
  path?: string | null,
  category: keyof typeof LOCAL_PLACEHOLDERS = 'services'
): string {
  if (!path || typeof path !== 'string') {
    return LOCAL_PLACEHOLDERS[category] || LOCAL_PLACEHOLDERS.services;
  }

  // Reject any external hotlink
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    console.warn(`[AssetManager] External image hotlink rejected: ${path}. Using local fallback.`);
    return LOCAL_PLACEHOLDERS[category] || LOCAL_PLACEHOLDERS.services;
  }

  return path;
}

/**
 * Airsa Simorgh Jahan - Centralized Local Asset Manager
 *
 * All image paths are generated with Vite's BASE_URL so they work on:
 * - Local development
 * - GitHub Pages: /airsa-webapp/
 * - Custom domains
 *
 * All images are stored locally inside /public/images/
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

/**
 * Convert a public asset path into a GitHub Pages-safe URL.
 *
 * Example:
 * /images/hero/test.webp
 *
 * becomes:
 * /airsa-webapp/images/hero/test.webp
 *
 * when deployed to GitHub Pages.
 */
export function assetPath(filePath: string): string {
  const cleanPath = filePath.replace(/^\/+/, '');
  const base = import.meta.env.BASE_URL || '/';

  if (base === '/') {
    return '/' + cleanPath;
  }

  return base.replace(/\/+$/, '/') + cleanPath;
}

export const LOCAL_PLACEHOLDERS = {
  hero: assetPath('/images/hero/placeholder-hero.webp'),
  about: assetPath('/images/about/placeholder-about.webp'),
  services: assetPath('/images/services/placeholder-service.webp'),
  blog: assetPath('/images/blog/placeholder-blog.webp'),
  team: assetPath('/images/team/placeholder-team.webp'),
  icons: assetPath('/images/icons/brand-symbol.svg'),
} as const;

export const ASSETS = {
  hero: {
    patientCare: {
      id: 'patient-care-hero',
      src: assetPath('/images/hero/patient-care-hero.webp'),
      alt: 'خدمات همراهی بیماران بین‌المللی و مراقبت پزشکی تخصصی در ایران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },

    iranTourism: {
      id: 'iran-tourism-hero',
      src: assetPath('/images/hero/iran-tourism-hero.webp'),
      alt: 'جاذبه‌های گردشگری تاریخی و فرهنگی کهن ایران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },

    travelServices: {
      id: 'travel-services-hero',
      src: assetPath('/images/hero/travel-services-hero.webp'),
      alt: 'خدمات جامع سفر، اقامت و تشریفات گردشگری بین‌المللی',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },

    contactSupport: {
      id: 'contact-support-hero',
      src: assetPath('/images/hero/contact-support-hero.webp'),
      alt: 'مرکز پشتیبانی چندزبانه و مشاوره تخصصی ایرسا سیمرغ جهان',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },

    requestTreatment: {
      id: 'request-treatment-hero',
      src: assetPath('/images/hero/request-treatment-hero.webp'),
      alt: 'ثبت درخواست درمان و استعلام مدارک پزشکی در ایران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },

    aboutGateway: {
      id: 'about-gateway-hero',
      src: assetPath('/images/hero/about-gateway-hero.webp'),
      alt: 'درگاه خدمات جامع گردشگری سلامت و تشریفات ایرسا سیمرغ جهان',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },

    terminalGateway: {
      id: 'terminal-gateway-hero',
      src: assetPath('/images/hero/terminal-gateway-hero.webp'),
      alt: 'استقبال فرودگاهی و هماهنگی ترانسفر تشریفاتی مسافران',
      fallback: LOCAL_PLACEHOLDERS.hero,
    },
  },

  about: {
    whoWeAreReception: {
      id: 'who-we-are-reception',
      src: assetPath('/images/about/who-we-are-reception.webp'),
      alt: 'پذیرش رسمی و راهنمایی بیماران در مرکز ایرسا سیمرغ جهان',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    whoWeAreHospitality: {
      id: 'who-we-are-hospitality',
      src: assetPath('/images/about/who-we-are-hospitality.webp'),
      alt: 'تیم مهمان‌نوازی و میزبانی بین‌المللی ایرسا سیمرغ جهان',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    missionCareSupport: {
      id: 'mission-care-support',
      src: assetPath('/images/about/mission-care-support.webp'),
      alt: 'تعهد و رسالت سازمان در مراقبت همه‌جانبه از بیماران',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    missionIntegratedCare: {
      id: 'mission-integrated-care',
      src: assetPath('/images/about/mission-integrated-care.webp'),
      alt: 'پوشش یکپارچه خدمات درمان و اقامت تخصصی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    approachBoardroom: {
      id: 'approach-boardroom',
      src: assetPath('/images/about/approach-boardroom.webp'),
      alt: 'جلسه برنامه‌ریزی استراتژیک و هماهنگی کلینیک‌های طرف قرارداد',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    approachFormalMeeting: {
      id: 'approach-formal-meeting',
      src: assetPath('/images/about/approach-formal-meeting.webp'),
      alt: 'مذاکرات رسمی و توسعه همکاری‌های بین‌المللی سلامت',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    approachConference: {
      id: 'approach-conference',
      src: assetPath('/images/about/approach-conference.webp'),
      alt: 'حضور در کنفرانس‌های بین‌المللی گردشگری و درمان',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    approachHandshake: {
      id: 'approach-handshake',
      src: assetPath('/images/about/approach-handshake.webp'),
      alt: 'انعقاد قرارداد همکاری با مراکز معتبر درمانی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    commitmentJourney: {
      id: 'commitment-journey',
      src: assetPath('/images/about/commitment-journey.webp'),
      alt: 'همراهی گام‌به‌گام مسافر از مبدأ تا مقصد نهایی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    focusTourismIsfahan: {
      id: 'focus-tourism-isfahan',
      src: assetPath('/images/about/focus-tourism-isfahan.webp'),
      alt: 'تورهای اختصاصی اصفهان و گشت‌های فرهنگی تاریخی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    focusTourismJourney: {
      id: 'focus-tourism-journey',
      src: assetPath('/images/about/focus-tourism-journey.webp'),
      alt: 'تجربه سفرهای بی‌دغدغه در شهرهای دیدنی ایران',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    focusHealthDoctor: {
      id: 'focus-health-doctor',
      src: assetPath('/images/about/focus-health-doctor.webp'),
      alt: 'پزشکان متخصص و فوق‌تخصص همکار در بالاترین استانداردهای پزشکی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    focusHealthModern: {
      id: 'focus-health-modern',
      src: assetPath('/images/about/focus-health-modern.webp'),
      alt: 'تجهیزات مدرن تشخیصی و درمانی در بیمارستان‌های تراز اول',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    focusVipChauffeur: {
      id: 'focus-vip-chauffeur',
      src: assetPath('/images/about/focus-vip-chauffeur.webp'),
      alt: 'ناوگان خودروهای لوکس و رانندگان مجرب تشریفاتی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },

    focusIntlCorporate: {
      id: 'focus-intl-corporate',
      src: assetPath('/images/about/focus-intl-corporate.webp'),
      alt: 'مشاوره حقوقی، بازرگانی و تجاری بین‌المللی',
      fallback: LOCAL_PLACEHOLDERS.about,
    },
  },

  services: {
    consultation: {
      id: 'consultation',
      src: assetPath('/images/services/consultation.webp'),
      alt: 'مشاوره پزشکی آنلاین و بررسی پرونده بالینی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    doctorSelection: {
      id: 'doctor-selection',
      src: assetPath('/images/services/doctor-selection.webp'),
      alt: 'انتخاب پزشک جراح و متخصص متناسب با نوع بیماری',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    hospitalBooking: {
      id: 'hospital-booking',
      src: assetPath('/images/services/hospital-booking.webp'),
      alt: 'رزرو تخت و هماهنگی بیمارستان‌های فوق‌تخصصی دارای IPD',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    visaAssistance: {
      id: 'visa-assistance',
      src: assetPath('/images/services/visa-assistance.webp'),
      alt: 'صدور ویزای درمانی و گردشگری ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    flightBooking: {
      id: 'flight-booking',
      src: assetPath('/images/services/flight-booking.webp'),
      alt: 'رزرو بلیط پروازهای بین‌المللی و داخلی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    hotelAccommodation: {
      id: 'hotel-accommodation',
      src: assetPath('/images/services/hotel-accommodation.webp'),
      alt: 'رزرو هتل‌های ۵ ستاره و اقامتگاه‌های لوکس',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    privateTransfer: {
      id: 'private-transfer',
      src: assetPath('/images/services/private-transfer.webp'),
      alt: 'ترانسفر اختصاصی فرودگاهی و جابه‌جایی شهری',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    postOpRecovery: {
      id: 'post-op-recovery',
      src: assetPath('/images/services/post-op-recovery.webp'),
      alt: 'دوران نقاهت پس از عمل و خدمات مراقبتی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    cipAirportLounge: {
      id: 'cip-airport-lounge',
      src: assetPath('/images/services/cip-airport-lounge.webp'),
      alt: 'خدمات تشریفات فرودگاهی CIP',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    itineraryPlanning: {
      id: 'itinerary-planning',
      src: assetPath('/images/services/itinerary-planning.webp'),
      alt: 'برنامه‌ریزی تور اختصاصی و برنامه سفر سفارشی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    seamlessTravel: {
      id: 'seamless-travel',
      src: assetPath('/images/services/seamless-travel.webp'),
      alt: 'همراهی و تجربه سفر بدون استرس در سراسر ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    companyFormation: {
      id: 'company-formation',
      src: assetPath('/images/services/company-formation.webp'),
      alt: 'خدمات ثبت شرکت، اخذ اقامت و سرمایه‌گذاری خارجی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    intlAdvisory: {
      id: 'intl-advisory',
      src: assetPath('/images/services/intl-advisory.webp'),
      alt: 'مشاوره حقوقی و اقتصادی برای تجار و شرکت‌های خارجی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    vipPatientRecovery: {
      id: 'vip-patient-recovery',
      src: assetPath('/images/services/vip-patient-recovery.webp'),
      alt: 'محیط آرامش‌بخش درمان و اقامت VIP',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    luxuryTourism: {
      id: 'luxury-tourism',
      src: assetPath('/images/services/luxury-tourism.webp'),
      alt: 'بسته‌های گردشگری لوکس و اختصاصی ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    healthcareHospitality: {
      id: 'healthcare-hospitality',
      src: assetPath('/images/services/healthcare-hospitality.webp'),
      alt: 'استانداردهای میزبانی و ایمنی بیمارستان‌های ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    persianCarpetCulture: {
      id: 'persian-carpet-culture',
      src: assetPath('/images/services/persian-carpet-culture.webp'),
      alt: 'هنر فرش اصیل ایرانی و صنایع‌دستی سنتی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    persepolisHeritage: {
      id: 'persepolis-heritage',
      src: assetPath('/images/services/persepolis-heritage.webp'),
      alt: 'تخت‌جمشید و میراث باستانی شیراز',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    nasirAlMulkArchitecture: {
      id: 'nasir-al-mulk-architecture',
      src: assetPath('/images/services/nasir-al-mulk-architecture.webp'),
      alt: 'معماری شیشه‌های رنگی و مقرنس‌های اصیل ایرانی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    persianCuisineFeast: {
      id: 'persian-cuisine-feast',
      src: assetPath('/images/services/persian-cuisine-feast.webp'),
      alt: 'غذاهای سنتی و نوشیدنی‌های گیاهی ایرانی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    lutDesertSafari: {
      id: 'lut-desert-safari',
      src: assetPath('/images/services/lut-desert-safari.webp'),
      alt: 'کویر لوت و کلوت‌های افسانه‌ای',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    traditionalBazaarLife: {
      id: 'traditional-bazaar-life',
      src: assetPath('/images/services/traditional-bazaar-life.webp'),
      alt: 'بازارهای سنتی و فرهنگ ایرانی',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    yazdWindcatchers: {
      id: 'yazd-windcatchers',
      src: assetPath('/images/services/yazd-windcatchers.webp'),
      alt: 'بادگیرهای تاریخی و بافت خشتی یزد',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    yazdHistoricRooftops: {
      id: 'yazd-historic-rooftops',
      src: assetPath('/images/services/yazd-historic-rooftops.webp'),
      alt: 'پشت‌بام‌های تاریخی یزد',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    kishIslandResort: {
      id: 'kish-island-resort',
      src: assetPath('/images/services/kish-island-resort.webp'),
      alt: 'ساحل و هتل‌های پنج‌ستاره جزیره کیش',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    isfahanNaghsheJahan: {
      id: 'isfahan-naghshe-jahan',
      src: assetPath('/images/services/isfahan-naghshe-jahan.webp'),
      alt: 'میدان نقش‌جهان اصفهان',
      fallback: LOCAL_PLACEHOLDERS.services,
    },

    inboundTouristExperience: {
      id: 'inbound-tourist-experience',
      src: assetPath('/images/services/inbound-tourist-experience.webp'),
      alt: 'تجربه گردشگران بین‌المللی در سفر به ایران',
      fallback: LOCAL_PLACEHOLDERS.services,
    },
  },

  team: {
    medicalCoordinator: {
      id: 'medical-coordinator',
      src: assetPath('/images/team/medical-coordinator.webp'),
      alt: 'هماهنگ‌کننده پرونده‌های پزشکی بیماران بین‌المللی',
      fallback: LOCAL_PLACEHOLDERS.team,
    },

    chiefMedicalOfficer: {
      id: 'chief-medical-officer',
      src: assetPath('/images/team/chief-medical-officer.webp'),
      alt: 'پزشک ناظر و مشاور ارشد',
      fallback: LOCAL_PLACEHOLDERS.team,
    },

    internationalAffairsDirector: {
      id: 'international-affairs-director',
      src: assetPath('/images/team/international-affairs-director.webp'),
      alt: 'مدیر امور بین‌الملل و ارتباطات',
      fallback: LOCAL_PLACEHOLDERS.team,
    },

    vipTransportLead: {
      id: 'vip-transport-lead',
      src: assetPath('/images/team/vip-transport-lead.webp'),
      alt: 'مسئول تشریفات و ناوگان اختصاصی',
      fallback: LOCAL_PLACEHOLDERS.team,
    },
  },

  blog: {
    medicalTourismGuide: {
      id: 'medical-tourism-guide',
      src: assetPath('/images/blog/iran-medical-tourism-guide.webp'),
      alt: 'راهنمای گردشگری سلامت در ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    healthHospitalityStandards: {
      id: 'health-hospitality-standards',
      src: assetPath('/images/blog/health-hospitality-standards.webp'),
      alt: 'استانداردهای مراقبت و بیمارستان‌های ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    isfahanTravelItinerary: {
      id: 'isfahan-travel-itinerary',
      src: assetPath('/images/blog/isfahan-travel-itinerary.webp'),
      alt: 'راهنمای سفر به اصفهان',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    shirazPersepolisHistory: {
      id: 'shiraz-persepolis-history',
      src: assetPath('/images/blog/shiraz-persepolis-history.webp'),
      alt: 'تاریخ تخت‌جمشید و شیراز',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    cipAirportGuide: {
      id: 'cip-airport-guide',
      src: assetPath('/images/blog/cip-airport-guide.webp'),
      alt: 'راهنمای خدمات CIP فرودگاه',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    iranTreatmentVisa: {
      id: 'iran-treatment-visa',
      src: assetPath('/images/blog/iran-treatment-visa.webp'),
      alt: 'ویزای درمانی ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    businessFormationIran: {
      id: 'business-formation-iran',
      src: assetPath('/images/blog/business-formation-iran.webp'),
      alt: 'ثبت شرکت و سرمایه‌گذاری در ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    kishRecreationTourism: {
      id: 'kish-recreation-tourism',
      src: assetPath('/images/blog/kish-recreation-tourism.webp'),
      alt: 'تفریحات و گردشگری جزیره کیش',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    doctorConsultationGuide: {
      id: 'doctor-consultation-guide',
      src: assetPath('/images/blog/doctor-consultation-guide.webp'),
      alt: 'مشاوره پزشکی پیش از سفر',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    lutDesertUnesco: {
      id: 'lut-desert-unesco',
      src: assetPath('/images/blog/lut-desert-unesco.webp'),
      alt: 'کویر لوت',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    corporateAdvisoryMiddleEast: {
      id: 'corporate-advisory-middle-east',
      src: assetPath('/images/blog/corporate-advisory-middle-east.webp'),
      alt: 'مشاوره تجاری و حقوقی',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    cosmeticSurgeryIran: {
      id: 'cosmetic-surgery-iran',
      src: assetPath('/images/blog/cosmetic-surgery-iran.webp'),
      alt: 'جراحی زیبایی در ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    ivfFertilityCenters: {
      id: 'ivf-fertility-centers',
      src: assetPath('/images/blog/ivf-fertility-centers.webp'),
      alt: 'درمان ناباروری و IVF در ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    orthopedicSurgeries: {
      id: 'orthopedic-surgeries',
      src: assetPath('/images/blog/orthopedic-surgeries.webp'),
      alt: 'جراحی‌های ارتوپدی پیشرفته',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    dentalImplantPackages: {
      id: 'dental-implant-packages',
      src: assetPath('/images/blog/dental-implant-packages.webp'),
      alt: 'خدمات دندانپزشکی و ایمپلنت',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    iranVisaRequirementsFaq: {
      id: 'iran-visa-requirements-faq',
      src: assetPath('/images/blog/iran-visa-requirements-faq.webp'),
      alt: 'پرسش‌های متداول ویزای ایران',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },

    medicalVisaExtensionRules: {
      id: 'medical-visa-extension-rules',
      src: assetPath('/images/blog/medical-visa-extension-rules.webp'),
      alt: 'شرایط تمدید اقامت درمانی',
      fallback: LOCAL_PLACEHOLDERS.blog,
    },
  },

  icons: {
    brandSymbol: {
      id: 'brand-symbol',
      src: assetPath('/images/icons/brand-symbol.svg'),
      alt: 'نشان طلایی بال‌های سیمرغ و هویت بصری ایرسا سیمرغ جهان',
      fallback: LOCAL_PLACEHOLDERS.icons,
    },

    appIcon192: {
      id: 'app-icon-192',
      src: assetPath('/images/icons/app-icon-192.png'),
      alt: 'آیکون وب‌اپلیکیشن ایرسا سیمرغ جهان',
      fallback: LOCAL_PLACEHOLDERS.icons,
    },

    appIcon512: {
      id: 'app-icon-512',
      src: assetPath('/images/icons/app-icon-512.png'),
      alt: 'آیکون بزرگ وب‌اپلیکیشن ایرسا سیمرغ جهان',
      fallback: LOCAL_PLACEHOLDERS.icons,
    },
  },
} as const;

/**
 * Validates and normalizes a local image path.
 * External image URLs are rejected.
 */
export function getLocalImagePath(
  imagePath?: string | null,
  category: keyof typeof LOCAL_PLACEHOLDERS = 'services'
): string {
  if (!imagePath || typeof imagePath !== 'string') {
    return LOCAL_PLACEHOLDERS[category];
  }

  if (
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://') ||
    imagePath.startsWith('//')
  ) {
    console.warn(
      '[AssetManager] External image rejected:',
      imagePath
    );

    return LOCAL_PLACEHOLDERS[category];
  }

  return assetPath(imagePath);
}
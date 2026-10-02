import { Language } from '../context/LanguageContext';

export interface TranslationDictionary {
  // Navigation
  nav: {
    home: string;
    medicalTourism: string;
    treatmentRequest: string;
    incomingTourism: string;
    services: string;
    travelServices: string;
    vipServices: string;
    internationalServices: string;
    aboutUs: string;
    ceo: string;
    journal: string;
    contactUs: string;
    primaryCta: string;
    language: string;
    closeMenu: string;
    openMenu: string;
    selectLanguage: string;
  };
  // Header
  header: {
    homeAria: string;
    navAria: string;
    services: string;
    servicesMenu: string;
    about: string;
    aboutMenu: string;
    closeMenu: string;
    openMenu: string;
    chooseLanguage: string;
  };
  // Page Titles for browser tab & SEO
  pageTitles: Record<string, string>;
  // Global Footer
  footer: {
    bannerBadge: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerCta: string;
    slogan: string;
    brandDesc: string;
    colServices: string;
    colQuickLinks: string;
    colContact: string;
    phones: string;
    whatsapp: string;
    email: string;
    addressLabel: string;
    addressText: string;
    address: string;
    standardBadge: string;
    copyright: string;
    standards: string;
    hub: string;
  };
  // About Page Strings
  about: {
    valuesTitle: string;
    valuesSubtitle: string;
  };
  // Contact Page Strings
  contact: {
    contactTitle: string;
    contactSubtitle: string;
  };
  // PWA & Connectivity
  pwa: {
    installApp: string;
    installBannerTitle: string;
    installBannerDesc: string;
    installNow: string;
    dismiss: string;
    installed: string;
    iosGuideTitle: string;
    iosStep1: string;
    iosStep2: string;
  };
  offline: {
    title: string;
    desc: string;
    reconnected: string;
  };
  // Common UI
  common: {
    readMore: string;
    viewAll: string;
    learnMore: string;
    requestConsultation: string;
    contactExperts: string;
    close: string;
    back: string;
    copyLink: string;
    copied: string;
    share: string;
    loading: string;
    submit: string;
    submitting: string;
    sendRequest: string;
    trackingCode: string;
    success: string;
    error: string;
  };
  // Home & Shared Section Labels
  home: {
    authenticRhythm: string;
    noRushTours: string;
    curatedServicesBadge: string;
    curatedServicesTitle: string;
    curatedServicesSubtitle: string;
    learnMore: string;
    exploreServices: string;
    servicesTitle: string;
    servicesBadge: string;
    servicesSubtitle: string;
    inquireService: string;
    confidentialBadge: string;
    responseWithin24h: string;
    confidentialRecords: string;
    dedicatedCaseManager: string;
    viewServices: string;
    officialConsultation: string;
    journeyBadge: string;
    journeyTitle: string;
    journeySubtitle: string;
    keyDeliverables: string;
    stepCounter: string;
    of: string;
    conciergeSupport: string;
    bookTripCoordination: string;
    punctualCoordination: string;
    stressFreeTransfers: string;
    multilingualSupport: string;
    rapidFreeGuidance: string;
    discoverIran: string;
    dedicatedInterpreter: string;
    vipCtaBenefit1: string;
    vipCtaBenefit2: string;
    vipCtaBenefit3: string;
    dedicatedLiaisonBadge: string;
    requestVipConsultation: string;
    vipSpecialistAvailable: string;
    executiveConciergeFleet: string;
    certifiedQuality: string;
    coreServicesBadge: string;
    coreServicesTitle: string;
    coreServicesSubtitle: string;
  };
  // VIP Specific Strings
  vip: {
    timelineBadge: string;
    timelineTitle: string;
    timelineSubtitle: string;
    servicesBadge: string;
    servicesTitle: string;
    servicesSubtitle: string;
    vipTimelineBadge: string;
    vipTimelineTitle: string;
    vipTimelineSubtitle: string;
    sixVipServices: string;
    vipStandardTitle: string;
    vipStandardSubtitle: string;
  };
  // Tourism Specific Strings
  tourism: {
    allFilter: string;
    experienceBadge: string;
    experienceTitle: string;
    experienceSubtitle: string;
    journeyBadge: string;
    journeyTitle: string;
    journeySubtitle: string;
    planYourTrip: string;
  };
  // Form Strings
  form: {
    namePlaceholder: string;
    confidentialTitle: string;
    nameRequired: string;
    countryRequired: string;
    phoneRequired: string;
    emailRequired: string;
    specialtyRequired: string;
    badge: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    country: string;
    countryPlaceholder: string;
    phoneWhatsapp: string;
    email: string;
    treatmentType: string;
    selectTreatment: string;
    description: string;
    descriptionPlaceholder: string;
    uploadMedicalFiles: string;
    dragDropFiles: string;
    acceptedFileTypes: string;
    submitting: string;
    submitButton: string;
    successTitle: string;
    successSubtitle: string;
    trackingCode: string;
    patientName: string;
    attachedFilesCount: string;
    submitAnother: string;
    confidentialDesc: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  fa: {
    nav: {
      home: 'خانه',
      medicalTourism: 'گردشگری سلامت',
      treatmentRequest: 'درخواست درمان',
      incomingTourism: 'گردشگری ورودی',
      services: 'خدمات',
      travelServices: 'خدمات سفر',
      vipServices: 'خدمات VIP',
      internationalServices: 'خدمات بین‌المللی',
      aboutUs: 'درباره ما',
      ceo: 'مدیر عامل',
      journal: 'مجله',
      contactUs: 'تماس با ما',
      primaryCta: 'درخواست مشاوره',
      language: 'زبان',
      closeMenu: 'بستن منو',
      openMenu: 'باز کردن منو',
      selectLanguage: 'انتخاب زبان',
    },
    header: {
      homeAria: 'صفحه اصلی ایرسا سیمرغ جهان',
      navAria: 'منوی ناوبری اصلی',
      services: 'خدمات تخصصی',
      servicesMenu: 'منوی خدمات سفر، VIP و بین‌المللی',
      about: 'درباره ما',
      aboutMenu: 'معرفی شرکت و پیام مدیرعامل',
      closeMenu: 'بستن منوی ناوبری',
      openMenu: 'باز کردن منوی ناوبری',
      chooseLanguage: 'انتخاب زبان',
    },
    pageTitles: {
      '/': 'ایرسا سیمرغ جهان (Airsa Simorgh Jahan) | خدمات گردشگری سلامت و تشریفات بین‌المللی',
      '/medical-tourism/': 'گردشگری سلامت | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/treatment-request/': 'درخواست درمان | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/incoming-tourism/': 'گردشگری ورودی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/travel-services/': 'خدمات سفر | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/vip-services/': 'خدمات VIP و تشریفات اختصاصی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/international-services/': 'خدمات بین‌المللی و بازرگانی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/about-us/': 'درباره ما | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/ceo/': 'حدیثه دهقانی پوده | بنیان‌گذار و مدیر ایرسا سیمرغ جهان',
      '/journal/': 'مجله و مقالات تخصصی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
      '/contact-us/': 'تماس با ما | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    },
    footer: {
      bannerBadge: 'همراهی از اولین گام',
      bannerTitle: 'برای شروع مسیر خود با ما در ارتباط باشید',
      bannerSubtitle: 'تیم متخصصان و راهنمایان بین‌المللی ایرسا سیمرغ جهان آماده ارائه مشاوره، برنامه‌ریزی سفر و پذیرش درمانی شما هستند.',
      bannerCta: 'درخواست مشاوره',
      slogan: '«ایرسا سیمرغ جهان؛ همراه شما در تمام مسیر سفر، درمان و تجربه ایران»',
      brandDesc: 'ارائه‌دهنده خدمات تخصصی گردشگری سلامت، گردشگری ورودی، تشریفات VIP و ارتباطات تجاری بین‌المللی با تکیه بر استانداردهای جهانی و مهمان‌نوازی اصیل ایرانی.',
      colServices: 'خدمات',
      colQuickLinks: 'دسترسی سریع',
      colContact: 'ارتباط با ما',
      phones: 'تلفن‌های تماس',
      whatsapp: 'واتس‌اپ',
      email: 'ایمیل مستقیم',
      addressLabel: 'آدرس دفتر مرکزی',
      addressText: 'اصفهان، خیابان بهار آزادی، حد فاصل میدان آزادی و سه راه توحید، روبروی درب دانشگاه اصفهان، مجتمع پردیس ۲، طبقه اول، واحد ۲۱۲',
      address: 'اصفهان، خیابان بهار آزادی، مجتمع پردیس ۲، واحد ۲۱۲',
      standardBadge: 'استاندارد بین‌المللی گردشگری و سلامت',
      copyright: `© ${new Date().getFullYear()} Airsa Simorgh Jahan | ایرسا سیمرغ جهان. کلیه حقوق محفوظ است.`,
      standards: 'استاندارد بین‌المللی گردشگری و سلامت',
      hub: 'Iran Tourism & Medical Hub',
    },
    about: {
      valuesTitle: '«ارزش‌ها و اصول بنیادین ما»',
      valuesSubtitle: 'رویکرد ما بر پایه شفافیت مطلق، رازداری حرفه‌ای، استانداردهای روز پزشکی و مهمان‌نوازی فاخر ایرانی استوار است.',
    },
    contact: {
      contactTitle: 'تماس با کارشناسان و دفتر مرکزی',
      contactSubtitle: 'تیم پشتیبانی و مشاوران بین‌المللی ایرسا سیمرغ جهان در تمام روزهای هفته آماده پاسخگویی هستند.',
    },
    pwa: {
      installApp: 'نصب اپلیکیشن',
      installBannerTitle: 'نصب پرتال ایرسا سیمرغ جهان',
      installBannerDesc: 'برای دسترسی سریع، مرور آفلاین و تجربه روان‌تر، نسخه وب‌اپلیکیشن را روی گوشی خود نصب کنید.',
      installNow: 'نصب مستقیم',
      dismiss: 'بعداً',
      installed: 'اپلیکیشن نصب است',
      iosGuideTitle: 'راهنمای نصب روی آیفون (iOS)',
      iosStep1: 'دکمه Share (اشتراک‌گذاری) در پایین مرورگر Safari را لمس کنید.',
      iosStep2: 'گزینه "Add to Home Screen" (افزودن به صفحه اصلی) را انتخاب کنید.',
    },
    offline: {
      title: 'اتصال اینترنت قطع شده است',
      desc: 'شما در حالت آفلاین هستید. صفحات کش‌شده همچنان قابل مشاهده هستند.',
      reconnected: 'اتصال مجدداً برقرار شد',
    },
    common: {
      readMore: 'مطالعه مقاله کامل',
      viewAll: 'مشاهده همه',
      learnMore: 'اطلاعات بیشتر',
      requestConsultation: 'درخواست مشاوره',
      contactExperts: 'ارتباط با کارشناسان',
      close: 'بستن',
      back: 'بازگشت',
      copyLink: 'کپی لینک',
      copied: 'کپی شد!',
      share: 'اشتراک‌گذاری',
      loading: 'در حال بارگذاری...',
      submit: 'ثبت اطلاعات',
      submitting: 'در حال ارسال...',
      sendRequest: 'ارسال درخواست درمان',
      trackingCode: 'کد پیگیری شما',
      success: 'درخواست با موفقیت ثبت گردید',
      error: 'خطا در ثبت اطلاعات',
    },
    home: {
      authenticRhythm: 'ریتم اصیل و بومی',
      noRushTours: 'سفرهای عمیق، بدون شتاب',
      curatedServicesBadge: 'خدمات ویژه مسافران',
      curatedServicesTitle: '«خدماتی متناسب با سلیقه شما»',
      curatedServicesSubtitle: 'طراحی جامع تجربه سفر ورودی متناسب با بالاترین استانداردهای آسایش و اصالت ایرانی.',
      learnMore: 'اطلاعات بیشتر',
      exploreServices: 'مشاهده خدمات سفر',
      servicesTitle: 'خدمات سفر',
      servicesBadge: 'محورهای خدمت‌رسانی',
      servicesSubtitle: 'پوشش کامل نیازهای مسافر از مبدأ تا مقصد با نهایت دقت و آرامش خاطر.',
      inquireService: 'استعلام و درخواست خدمات',
      confidentialBadge: 'رازداری و امنیت اطلاعات',
      responseWithin24h: 'پاسخگویی سریع در کمتر از ۲۴ ساعت',
      confidentialRecords: 'حفظ محرمانگی کامل اطلاعات و پرونده‌ها',
      dedicatedCaseManager: 'مدیر پرونده و همراه اختصاصی مسافر',
      viewServices: 'مشاهده خدمات سفر',
      officialConsultation: 'درخواست مشاوره رسمی',
      journeyBadge: 'مسیر همراهی درمان و سفر',
      journeyTitle: '«از اولین پیام تا بازگشت سلامت به خانه»',
      journeySubtitle: 'مسیری شفاف و استاندارد که آرامش خیال شما و همراهانتان را تضمین می‌کند.',
      keyDeliverables: 'تعهدات کلیدی این مرحله',
      stepCounter: 'مرحله',
      of: 'از',
      conciergeSupport: 'پشتیبانی اختصاصی کانسیرژ',
      bookTripCoordination: 'رزرو و هماهنگی سفر',
      punctualCoordination: 'هماهنگی دقیق زمان‌بندی',
      stressFreeTransfers: 'ترانسفر بدون استرس و تشریفاتی',
      multilingualSupport: 'پشتیبانی به زبان‌های زنده دنیا',
      rapidFreeGuidance: 'راهنمایی و مشاوره اولیه رایگان',
      discoverIran: 'کشف زیبایی‌های ایران',
      dedicatedInterpreter: 'مترجم همزمان مسلط به اصطلاحات بالینی',
      vipCtaBenefit1: 'پشتیبانی اختصاصی ۲۴ ساعته',
      vipCtaBenefit2: 'حریم خصوصی و محرمانگی کامل',
      vipCtaBenefit3: 'تضمین رضایت و آرامش خاطر',
      dedicatedLiaisonBadge: 'همراه و مشاور اختصاصی',
      requestVipConsultation: 'درخواست مشاوره VIP',
      vipSpecialistAvailable: 'مشاور ارشد تشریفات آماده پاسخگویی است',
      executiveConciergeFleet: 'ناوگان خودروهای لوکس و لیدرهای چندزبانه',
      certifiedQuality: 'استاندارد بین‌المللی کیفیت و امنیت خدمات',
      coreServicesBadge: 'محورهای خدمت‌رسانی',
      coreServicesTitle: '«خدمات یکپارچه و مطمئن»',
      coreServicesSubtitle: 'پوشش کامل نیازهای مسافر از مبدأ تا مقصد با نهایت دقت و آرامش خاطر.',
    },
    vip: {
      timelineBadge: 'مسیر همراهی VIP',
      timelineTitle: '«گام‌به‌گام در کنار شما»',
      timelineSubtitle: 'مسیری شفاف و برنامه‌ریزی‌شده از نخستین تماس تا بدرقه نهایی در فرودگاه بین‌المللی.',
      servicesBadge: 'خدمات اختصاصی و تشریفاتی',
      servicesTitle: '«تجربه‌ای فراتر از انتظار»',
      servicesSubtitle: 'ارائه بسته‌ای کامل از خدمات تشریفاتی لوکس، دسترسی‌های اختصاصی و ناوگان اختصاصی.',
      vipTimelineBadge: 'مسیر همراهی VIP',
      vipTimelineTitle: '«گام‌به‌گام در کنار شما»',
      vipTimelineSubtitle: 'مسیری شفاف و برنامه‌ریزی‌شده از نخستین تماس تا بدرقه نهایی در فرودگاه بین‌المللی.',
      sixVipServices: 'خدمات شش‌گانه VIP',
      vipStandardTitle: '«بالاترین استانداردهای تشریفات اختصاصی»',
      vipStandardSubtitle: 'آسودگی خاطر و حفظ پرستیژ شخصی و سازمانی در تمامی مراحل حضور در ایران.',
    },
    tourism: {
      allFilter: 'همه تجربیات',
      experienceBadge: 'سفر به سبک ایرسا',
      experienceTitle: '«ایران را متفاوت کشف کنید»',
      experienceSubtitle: 'مجموعه‌ای از اصیل‌ترین تجربیات فرهنگی، تاریخی و طبیعی در سراسر ایران.',
      journeyBadge: 'برنامه‌ریزی گام‌به‌گام',
      journeyTitle: '«مسیر طراحی سفر اختصاصی شما»',
      journeySubtitle: 'از اشتراک علایق تا همراهی مستمر در طول سفر.',
      planYourTrip: 'طراحی برنامه سفر اختصاصی',
    },
    form: {
      namePlaceholder: 'نام و نام خانوادگی خود را وارد کنید',
      confidentialTitle: 'رازداری کامل در مدیریت پرونده‌ها',
      nameRequired: 'لطفاً نام و نام خانوادگی خود را وارد کنید.',
      countryRequired: 'لطفاً کشور محل سکونت خود را وارد کنید.',
      phoneRequired: 'لطفاً شماره تماس یا واتس‌اپ معتبر وارد کنید.',
      emailRequired: 'لطفاً یک آدرس ایمیل معتبر وارد کنید.',
      specialtyRequired: 'لطفاً حوزه درمان مورد نظر خود را مشخص کنید.',
      badge: 'پذیرش رسمی پرونده بالینی',
      title: 'فرم ثبت درخواست درمان',
      subtitle: 'اطلاعات و مستندات پزشکی خود را ثبت فرمایید تا توسط پزشکان ناظر بررسی شود.',
      fullName: 'نام و نام خانوادگی بیمار',
      fullNamePlaceholder: 'نام کامل به همراه پیشوند (مثال: آقای / خانم)',
      country: 'کشور محل سکونت',
      countryPlaceholder: 'مثال: عراق، عمان، امارات، آلمان، و ...',
      phoneWhatsapp: 'شماره تلفن مستقیم / واتس‌اپ',
      email: 'آدرس ایمیل',
      treatmentType: 'حوزه تخصصی درمان مورد نیاز',
      selectTreatment: 'انتخاب تخصص بالینی مورد نظر...',
      description: 'شرح وضعیت بالینی و خلاصه بیماری',
      descriptionPlaceholder: 'توضیحات مربوط به بیماری، سوابق درمان‌های قبلی و سوالات خود را بنویسید...',
      uploadMedicalFiles: 'بارگذاری مدارک پزشکی (آزمایش، تصویربرداری، نسخه)',
      dragDropFiles: 'فایل‌های خود را به این قسمت بکشید یا برای انتخاب کلیک کنید',
      acceptedFileTypes: 'فرمت‌های مجاز: JPG, PNG, PDF, DICOM (حداکثر ۲۰ مگابایت)',
      submitting: 'در حال ارسال و ثبت پرونده...',
      submitButton: 'ارسال نهایی درخواست درمان',
      successTitle: 'درخواست شما با موفقیت ثبت شد',
      successSubtitle: 'پرونده شما در صف بررسی فوق‌تخصصی قرار گرفت و به زودی با شما تماس گرفته می‌شود.',
      trackingCode: 'کد رهگیری پرونده شما',
      patientName: 'نام متقاضی',
      attachedFilesCount: 'تعداد فایل‌های پیوست‌شده',
      submitAnother: 'ثبت یک درخواست جدید',
      confidentialDesc: 'اطلاعات درمانی شما تحت پروتکل محرمانگی پزشک و بیمار ذخیره می‌شود.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      medicalTourism: 'Medical Tourism',
      treatmentRequest: 'Treatment Request',
      incomingTourism: 'Incoming Tourism',
      services: 'Services',
      travelServices: 'Travel Services',
      vipServices: 'VIP Services',
      internationalServices: 'International Services',
      aboutUs: 'About Us',
      ceo: 'Founder & CEO',
      journal: 'Journal',
      contactUs: 'Contact Us',
      primaryCta: 'Request Consultation',
      language: 'Language',
      closeMenu: 'Close menu',
      openMenu: 'Open menu',
      selectLanguage: 'Select language',
    },
    header: {
      homeAria: 'Airsa Simorgh Jahan Home',
      navAria: 'Main Navigation Menu',
      services: 'Services',
      servicesMenu: 'Specialized Services Menu',
      about: 'About Us',
      aboutMenu: 'About Company & Leadership',
      closeMenu: 'Close navigation menu',
      openMenu: 'Open navigation menu',
      chooseLanguage: 'Choose Language',
    },
    pageTitles: {
      '/': 'Airsa Simorgh Jahan | Medical Tourism & International VIP Services in Iran',
      '/medical-tourism/': 'Medical Tourism | Airsa Simorgh Jahan',
      '/treatment-request/': 'Treatment Request | Airsa Simorgh Jahan',
      '/incoming-tourism/': 'Incoming Tourism & Experience Iran | Airsa Simorgh Jahan',
      '/travel-services/': 'Travel Services (Flights, Hotels, Visa) | Airsa Simorgh Jahan',
      '/vip-services/': 'VIP & CIP Luxury Concierge Services | Airsa Simorgh Jahan',
      '/international-services/': 'International Business & Trade Services | Airsa Simorgh Jahan',
      '/about-us/': 'About Us | Airsa Simorgh Jahan',
      '/ceo/': 'Hadiseh Dehghani Poudeh | Founder & CEO of Airsa Simorgh Jahan',
      '/journal/': 'Journal & Specialized Insights | Airsa Simorgh Jahan',
      '/contact-us/': 'Contact Us | Airsa Simorgh Jahan',
    },
    footer: {
      bannerBadge: 'Accompanied from the First Step',
      bannerTitle: 'Begin Your Journey with Airsa Simorgh Jahan',
      bannerSubtitle: 'Our medical specialists and international concierge teams are ready to provide tailored advice, travel itineraries, and medical admissions.',
      bannerCta: 'Request Consultation',
      slogan: '«Airsa Simorgh Jahan; Your trusted companion across travel, treatment, and experiencing Iran.»',
      brandDesc: 'Providing specialized medical tourism, bespoke incoming travel, VIP protocol services, and international corporate facilitation grounded in global standards and genuine Iranian hospitality.',
      colServices: 'Services',
      colQuickLinks: 'Quick Links',
      colContact: 'Contact Info',
      phones: 'Direct Phone Lines',
      whatsapp: 'WhatsApp Support',
      email: 'Official Email',
      addressLabel: 'Headquarters Address',
      addressText: 'Pardis 2 Complex, 1st Floor, Unit 212, Opp. University of Isfahan Gate, Bahar Azadi St., Isfahan, Iran',
      address: 'Pardis 2 Complex, Unit 212, Bahar Azadi St., Isfahan, Iran',
      standardBadge: 'International Medical Tourism & Hospitality Standards',
      copyright: `© ${new Date().getFullYear()} Airsa Simorgh Jahan. All rights reserved.`,
      standards: 'International Medical Tourism & Hospitality Standards',
      hub: 'Iran Tourism & Medical Hub',
    },
    about: {
      valuesTitle: 'Our Values & Principles',
      valuesSubtitle: 'Our methodology is anchored in absolute transparency, clinical ethics, rigorous international safety, and genuine Persian hospitality.',
    },
    contact: {
      contactTitle: 'Contact Our Executive Team & Headquarters',
      contactSubtitle: 'Our multilingual coordinators and medical directors are accessible 7 days a week.',
    },
    pwa: {
      installApp: 'Install App',
      installBannerTitle: 'Install Airsa Simorgh Jahan App',
      installBannerDesc: 'Install our lightweight Web App for instant access, offline browsing, and seamless VIP coordination.',
      installNow: 'Install Now',
      dismiss: 'Later',
      installed: 'App Installed',
      iosGuideTitle: 'iOS Installation Guide',
      iosStep1: 'Tap the Share button at the bottom of Safari.',
      iosStep2: 'Scroll down and select "Add to Home Screen".',
    },
    offline: {
      title: 'You are currently offline',
      desc: 'Cached pages and resources remain accessible without an active internet connection.',
      reconnected: 'Internet connection restored',
    },
    common: {
      readMore: 'Read Full Article',
      viewAll: 'View All',
      learnMore: 'Learn More',
      requestConsultation: 'Request Consultation',
      contactExperts: 'Contact Specialists',
      close: 'Close',
      back: 'Back',
      copyLink: 'Copy Link',
      copied: 'Copied!',
      share: 'Share',
      loading: 'Loading...',
      submit: 'Submit Request',
      submitting: 'Submitting...',
      sendRequest: 'Send Treatment Request',
      trackingCode: 'Your Tracking Code',
      success: 'Request submitted successfully',
      error: 'An error occurred while submitting',
    },
    home: {
      authenticRhythm: 'Authentic Local Rhythm',
      noRushTours: 'Unrushed, immersive journeys',
      curatedServicesBadge: 'Tailored Guest Experiences',
      curatedServicesTitle: 'Curated Services for Your Journey',
      curatedServicesSubtitle: 'Comprehensive inbound travel engineering matching top international standards and authentic Persian hospitality.',
      learnMore: 'Learn More',
      exploreServices: 'Explore Travel Services',
      servicesTitle: 'Travel Services',
      servicesBadge: 'Service Pillars',
      servicesSubtitle: 'Comprehensive coverage of traveler needs from departure to safe return.',
      inquireService: 'Inquire & Request Service',
      confidentialBadge: 'Confidentiality & Data Security',
      responseWithin24h: 'Guaranteed response within 24 hours',
      confidentialRecords: 'Total discretion & strict privacy protocols',
      dedicatedCaseManager: 'Dedicated personal case manager and liaison',
      viewServices: 'View Travel Services',
      officialConsultation: 'Request Official Consultation',
      journeyBadge: 'Patient Journey Roadmap',
      journeyTitle: 'From Initial Contact to Safe Return Home',
      journeySubtitle: 'A structured, transparent roadmap ensuring total peace of mind for you and your family.',
      keyDeliverables: 'Key Deliverables at This Stage',
      stepCounter: 'Stage',
      of: 'of',
      conciergeSupport: '24/7 Concierge Support',
      bookTripCoordination: 'Book Travel Coordination',
      punctualCoordination: 'Punctual Coordination',
      stressFreeTransfers: 'Stress-free executive transfers',
      multilingualSupport: 'Multilingual assistance in major languages',
      rapidFreeGuidance: 'Complimentary initial medical review',
      discoverIran: 'Discover Iran’s Wonders',
      dedicatedInterpreter: 'Certified medical interpreter throughout care',
      vipCtaBenefit1: '24/7 Dedicated Concierge Support',
      vipCtaBenefit2: 'Absolute Discretion & Privacy',
      vipCtaBenefit3: 'Guaranteed Comfort & Flawless Care',
      dedicatedLiaisonBadge: 'Dedicated Personal Liaison',
      requestVipConsultation: 'Request VIP Consultation',
      vipSpecialistAvailable: 'Senior VIP protocol specialist available',
      executiveConciergeFleet: 'Executive luxury fleet & multilingual guides',
      certifiedQuality: 'Certified international quality & safety standards',
      coreServicesBadge: 'Service Pillars',
      coreServicesTitle: 'Seamless & Secure Services',
      coreServicesSubtitle: 'Total coverage of traveler requirements from departure to return with utmost care.',
    },
    vip: {
      timelineBadge: 'VIP Journey Blueprint',
      timelineTitle: 'Step-by-Step with You',
      timelineSubtitle: 'A transparent, meticulously planned journey from initial inquiry to VIP tarmac departure.',
      servicesBadge: 'Exclusive Concierge Services',
      servicesTitle: 'An Experience Beyond Expectations',
      servicesSubtitle: 'Comprehensive luxury VIP services, privileged accesses, and executive private transport.',
      vipTimelineBadge: 'VIP Journey Blueprint',
      vipTimelineTitle: 'Step-by-Step with You',
      vipTimelineSubtitle: 'A transparent, meticulously planned journey from initial inquiry to VIP tarmac departure.',
      sixVipServices: '6 Core VIP Concierge Pillars',
      vipStandardTitle: 'The Highest Standards of Private Concierge',
      vipStandardSubtitle: 'Uncompromising discretion, prestige, and executive care across Iran.',
    },
    tourism: {
      allFilter: 'All Experiences',
      experienceBadge: 'Travel the Airsa Way',
      experienceTitle: 'Discover Iran Differently',
      experienceSubtitle: 'A curated anthology of authentic cultural, historic, and natural journeys across Iran.',
      journeyBadge: 'Step-by-Step Blueprint',
      journeyTitle: 'How We Craft Your Bespoke Journey',
      journeySubtitle: 'From understanding your aspirations to seamless 24/7 on-ground companionship.',
      planYourTrip: 'Plan Your Custom Journey',
    },
    form: {
      namePlaceholder: 'Enter your full name',
      confidentialTitle: 'Strict Clinical Discretion',
      nameRequired: 'Please enter your full name.',
      countryRequired: 'Please enter your country of residence.',
      phoneRequired: 'Please enter a valid phone number or WhatsApp.',
      emailRequired: 'Please enter a valid email address.',
      specialtyRequired: 'Please select your medical specialty or treatment.',
      badge: 'Official Clinical Case Intake',
      title: 'Treatment Request Form',
      subtitle: 'Submit your clinical documentation and history for priority evaluation by our medical board.',
      fullName: 'Patient Full Name',
      fullNamePlaceholder: 'Full name with title (e.g. Mr. / Ms. / Dr.)',
      country: 'Country of Residence',
      countryPlaceholder: 'e.g., Iraq, Oman, UAE, Germany, etc.',
      phoneWhatsapp: 'Direct Phone / WhatsApp Number',
      email: 'Email Address',
      treatmentType: 'Required Medical Department or Treatment',
      selectTreatment: 'Select clinical specialty...',
      description: 'Medical Summary & Clinical Symptoms',
      descriptionPlaceholder: 'Briefly describe your symptoms, past treatments, medical background, and queries...',
      uploadMedicalFiles: 'Upload Medical Documents (Lab tests, MRI/CT, prescriptions)',
      dragDropFiles: 'Drag and drop your files here or click to browse',
      acceptedFileTypes: 'Supported: JPG, PNG, PDF, DICOM (up to 20MB)',
      submitting: 'Submitting clinical intake...',
      submitButton: 'Submit Treatment Request',
      successTitle: 'Your Request Has Been Submitted',
      successSubtitle: 'Your case has been queued for medical review. Our concierge will contact you promptly.',
      trackingCode: 'Your Case Tracking Code',
      patientName: 'Patient Name',
      attachedFilesCount: 'Attached Documents Count',
      submitAnother: 'Submit Another Request',
      confidentialDesc: 'Your medical records are protected under international doctor-patient confidentiality protocols.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      medicalTourism: 'السياحة العلاجية',
      treatmentRequest: 'طلب العلاج',
      incomingTourism: 'السياحة الوافدة',
      services: 'الخدمات',
      travelServices: 'خدمات السفر',
      vipServices: 'خدمات VIP',
      internationalServices: 'الخدمات الدولية',
      aboutUs: 'من نحن',
      ceo: 'المدير التنفيذي',
      journal: 'المدونة والمقالات',
      contactUs: 'اتصل بنا',
      primaryCta: 'طلب استشارة',
      language: 'اللغة',
      closeMenu: 'إغلاق القائمة',
      openMenu: 'فتح القائمة',
      selectLanguage: 'اختر اللغة',
    },
    header: {
      homeAria: 'الصفحة الرئيسية لإيرسا سيمرغ جهان',
      navAria: 'قائمة التصفح الرئيسية',
      services: 'الخدمات التخصصية',
      servicesMenu: 'قائمة الخدمات التخصصية',
      about: 'من نحن',
      aboutMenu: 'من نحن والقيادة التنفيذية',
      closeMenu: 'إغلاق القائمة',
      openMenu: 'فتح القائمة',
      chooseLanguage: 'اختر اللغة',
    },
    pageTitles: {
      '/': 'إيرسا سيمرغ جهان (Airsa Simorgh Jahan) | خدمات السياحة العلاجية والتشريفات الدولية',
      '/medical-tourism/': 'السياحة العلاجية | إيرسا سيمرغ جهان (Airsa Simorgh Jahan)',
      '/treatment-request/': 'طلب العلاج والتأهيل الطبي | إيرسا سيمرغ جهان',
      '/incoming-tourism/': 'السياحة الوافدة واستكشاف إيران | إيرسا سيمرغ جهان',
      '/travel-services/': 'خدمات السفر (طيران، فنادق، تأشيرات) | إيرسا سيمرغ جهان',
      '/vip-services/': 'خدمات كبار الشخصيات والتشريفات الخاصة VIP | إيرسا سيمرغ جهان',
      '/international-services/': 'الخدمات التجارية والاستثمار الدولي | إيرسا سيمرغ جهان',
      '/about-us/': 'من نحن ورؤيتنا | إيرسا سيمرغ جهان',
      '/ceo/': 'حديثة دهقاني بوده | المؤسس والمدير التنفيذي لإيرسا سيمرغ جهان',
      '/journal/': 'المدونة والمقالات الطبية والسياحية | إيرسا سيمرغ جهان',
      '/contact-us/': 'اتصل بنا وحجز موعد | إيرسا سيمرغ جهان',
    },
    footer: {
      bannerBadge: 'معكم من الخطوة الأولى',
      bannerTitle: 'ابدأ رحلتك العلاجية والسياحية معنا',
      bannerSubtitle: 'فريق الخبراء والمرشدين متعددي اللغات في إيرسا سيمرغ جهان جاهز لتقديم الاستشارات، تنظيم خطط السفر، والقبول الطبي الفوري.',
      bannerCta: 'طلب استشارة طبية',
      slogan: '«إيرسا سيمرغ جهان؛ رفيقكم الموثوق في كافة مراحل السفر، العلاج، وتجربة إيران»',
      brandDesc: 'تقديم أرقى خدمات السياحة العلاجية، السياحة الوافدة، تشريفات كبار الشخصيات VIP وتسهيل الأعمال الدولية وفقاً لأعلى المعايير العالمية وبكرم الضيافة الإيرانية الأصيلة.',
      colServices: 'الخدمات',
      colQuickLinks: 'روابط سريعة',
      colContact: 'معلومات الاتصال',
      phones: 'أرقام الهاتف المباشرة',
      whatsapp: 'خدمة واتساب',
      email: 'البريد الإلكتروني المباشر',
      addressLabel: 'مقر الشركة الرئيسي',
      addressText: 'أصفهان، شارع بهار آزادي، مقابل بوابة جامعة أصفهان، مجمع برديس ۲، الطابق الأول، وحدة ۲۱۲',
      address: 'أصفهان، شارع بهار آزادي، مجمع برديس ۲، وحدة ۲۱۲',
      standardBadge: 'المعايير الدولية للسياحة العلاجية والضيافة',
      copyright: `© ${new Date().getFullYear()} Airsa Simorgh Jahan | إيرسا سيمرغ جهان. جميع الحقوق محفوظة.`,
      standards: 'المعايير الدولية للسياحة العلاجية والضيافة',
      hub: 'Iran Tourism & Medical Hub',
    },
    about: {
      valuesTitle: 'قيمنا ومبادئنا الجوهرية',
      valuesSubtitle: 'نهجنا يرتكز على الشفافية المطلقة، السرية المهنية، أعلى المعايير الطبية وكرم الضيافة الإيرانية العريقة.',
    },
    contact: {
      contactTitle: 'الاتصال بالخبراء والمقر الرئيسي',
      contactSubtitle: 'فريق الدعم والمستشارون متعددو اللغات في إيرسا سيمرغ جهان مستعدون للرد على استفساراتكم طوال أيام الأسبوع.',
    },
    pwa: {
      installApp: 'تثبيت التطبيق',
      installBannerTitle: 'تثبيت تطبيق إيرسا سيمرغ جهان',
      installBannerDesc: 'ثبّت تطبيق الويب على هاتفك الذكي للوصول السريع، التصفح دون إنترنت، وتجربة تشريفات متكاملة.',
      installNow: 'تثبيت الآن',
      dismiss: 'لاحقاً',
      installed: 'التطبيق مثبت بالفعل',
      iosGuideTitle: 'دليل التثبيت على أجهزة آيفون (iOS)',
      iosStep1: 'اضغط على زر المشاركة (Share) أسفل متصفح Safari.',
      iosStep2: 'اختر "إضافة إلى الصفحة الرئيسية" (Add to Home Screen).',
    },
    offline: {
      title: 'انقطع الاتصال بالإنترنت',
      desc: 'أنت تتصفح حالياً في وضع عدم الاتصال. الصفحات المحفوظة مؤقتاً ما زالت متاحة.',
      reconnected: 'تمت استعادة الاتصال بالإنترنت بنجاح',
    },
    common: {
      readMore: 'قراءة المقال بالكامل',
      viewAll: 'عرض الكل',
      learnMore: 'المزيد من التفاصيل',
      requestConsultation: 'طلب استشارة',
      contactExperts: 'التواصل مع الخبراء',
      close: 'إغلاق',
      back: 'رجوع',
      copyLink: 'نسخ الرابط',
      copied: 'تم النسخ!',
      share: 'مشاركة',
      loading: 'جاري التحميل...',
      submit: 'إرسال البيانات',
      submitting: 'جاري الإرسال...',
      sendRequest: 'إرسال طلب العلاج',
      trackingCode: 'رمز المتابعة الخاص بك',
      success: 'تم إرسال طلبكم بنجاح',
      error: 'حدث خطأ أثناء إرسال البيانات',
    },
    home: {
      authenticRhythm: 'إيقاع أصيل وتراثي',
      noRushTours: 'رحلات هادئة، متأنية وغنية',
      curatedServicesBadge: 'خدمات سياحية متكاملة',
      curatedServicesTitle: '«خدمات مصممة خصيصاً لذوقكم»',
      curatedServicesSubtitle: 'تصميم شامل لتجربة السفر السياحي بما يلائم أعلى معايير الراحة وكرم الضيافة الإيرانية.',
      learnMore: 'المزيد من التفاصيل',
      exploreServices: 'استعراض خدمات السفر',
      servicesTitle: 'خدمات السفر',
      servicesBadge: 'محاور خدماتنا',
      servicesSubtitle: 'تغطية شاملة لكافة احتياجات المسافر من نقطة الانطلاق وحتى العودة بأعلى درجات العناية.',
      inquireService: 'استعلام وطلب الخدمة',
      confidentialBadge: 'السرية وأمان البيانات',
      responseWithin24h: 'استجابة سريعة خلال أقل من ۲۴ ساعة',
      confidentialRecords: 'سرية تامة وخصوصية مطلقة لملفات المرضى',
      dedicatedCaseManager: 'مدير ملف ومرافق شخصي خاص للمسافر',
      viewServices: 'عرض خدمات السفر',
      officialConsultation: 'طلب استشارة رسمية',
      journeyBadge: 'مسار رحلة العلاج والسفر',
      journeyTitle: '«من الاتصال الأول وحتى العودة سالماً للوطن»',
      journeySubtitle: 'خارطة طريق مدروسة بدقة تضمن الراحة التامة لكم ولمرافقيكم.',
      keyDeliverables: 'المخرجات الأساسية لهذه المرحلة',
      stepCounter: 'المرحلة',
      of: 'من',
      conciergeSupport: 'دعم كونسيرج على مدار الساعة',
      bookTripCoordination: 'حجز وتنسيق الرحلة',
      punctualCoordination: 'تنسيق دقيق للمواعيد',
      stressFreeTransfers: 'تنقلات مريحة وتشريفية',
      multilingualSupport: 'دعم بلغات عالمية متعددة',
      rapidFreeGuidance: 'استشارة وتقييم أولي مجاني للملف',
      discoverIran: 'اكتشف روائع إيران',
      dedicatedInterpreter: 'مترجم طبي فوري معتمد طوال فترة العلاج',
      vipCtaBenefit1: 'دعم ومتابعة على مدار ۲۴ ساعة',
      vipCtaBenefit2: 'خصوصية وسرية تامة',
      vipCtaBenefit3: 'ضمان الراحة التامة وجودة الخدمة',
      dedicatedLiaisonBadge: 'مساعد ومستشار شخصي خاص',
      requestVipConsultation: 'طلب استشارة VIP خاصة',
      vipSpecialistAvailable: 'كبير مسؤولي التشريفات مستعد للرد',
      executiveConciergeFleet: 'أسطول سيارات فارهة ومرشدون متعددو اللغات',
      certifiedQuality: 'معايير جودة وأمان دولية معتمدة',
      coreServicesBadge: 'محاور خدماتنا',
      coreServicesTitle: '«خدمات متكاملة وآمنة»',
      coreServicesSubtitle: 'تغطية شاملة لكافة احتياجات المسافر من نقطة الانطلاق وحتى العودة بأعلى درجات العناية.',
    },
    vip: {
      timelineBadge: 'مسار خدمات كبار الشخصيات',
      timelineTitle: '«خطوة بخطوة بجانبكم»',
      timelineSubtitle: 'مسار واضح ومدروس بدقة من أول لحظة وحتى التوديع في صالة كبار الشخصيات بالمطار.',
      servicesBadge: 'خدمات خاصة وتشريفية',
      servicesTitle: '«تجربة تفوق التوقعات»',
      servicesSubtitle: 'حزمة متكاملة من الخدمات التشريفية الفاخرة، الامتيازات الحصرية والأسطول الخاص.',
      vipTimelineBadge: 'مسار خدمات كبار الشخصيات',
      vipTimelineTitle: '«خطوة بخطوة بجانبكم»',
      vipTimelineSubtitle: 'مسار واضح ومدروس بدقة من أول لحظة وحتى التوديع في صالة كبار الشخصيات بالمطار.',
      sixVipServices: 'الخدمات الست لكبار الشخصيات',
      vipStandardTitle: 'أعلى معايير التشريفات الحصرية',
      vipStandardSubtitle: 'راحة بال تامة والحفاظ على المكانة الرفيعة في كافة تفاصيل إقامتكم في إيران.',
    },
    tourism: {
      allFilter: 'كافة التجارب',
      experienceBadge: 'السفر بأسلوب إيرسا',
      experienceTitle: '«استكشف إيران بأسلوب مختلف»',
      experienceSubtitle: 'مجموعة من أثرى التجارب الثقافية والتاريخية والطبيعية في كافة أنحاء إيران.',
      journeyBadge: 'تخطيط خطوة بخطوة',
      journeyTitle: '«كيف نصمم رحلتكم الخاصة إلى إيران»',
      journeySubtitle: 'من استيعاب رغباتكم وحتى المرافقة الميدانية المستمرة طوال الرحلة.',
      planYourTrip: 'تصميم برنامج رحلتكم الخاصة',
    },
    form: {
      namePlaceholder: 'أدخل الاسم الكامل',
      confidentialTitle: 'سرية تامة في إدارة الملفات',
      nameRequired: 'يرجى إدخال الاسم الكامل.',
      countryRequired: 'يرجى إدخال بلد الإقامة.',
      phoneRequired: 'يرجى إدخال رقم هاتف أو واتساب صالح.',
      emailRequired: 'يرجى إدخال بريد إلكتروني صحيح.',
      specialtyRequired: 'يرجى تحديد التخصص الطبي المطلوب.',
      badge: 'القبول الرسمي للملفات السريرية',
      title: 'استمارة تقديم طلب العلاج',
      subtitle: 'يرجى إرسال تقاريركم الطبية ليتم تقييمها من قِبل كبار الأطباء والمستشارين.',
      fullName: 'اسم المريض الكامل',
      fullNamePlaceholder: 'الاسم الكامل مع اللقب (مثال: السيد / السيدة / الدكتور)',
      country: 'بلد الإقامة',
      countryPlaceholder: 'مثال: العراق، سلطنة عمان، الإمارات، ألمانيا، وغيرها',
      phoneWhatsapp: 'رقم الهاتف المباشر / الواتساب',
      email: 'البريد الإلكتروني',
      treatmentType: 'التخصص الطبي المطلوب',
      selectTreatment: 'اختر التخصص الطبي المطلوب...',
      description: 'شرح الحالة الصحية والملخص المرضي',
      descriptionPlaceholder: 'اكتب تفاصيل الأعراض، العلاجات السابقة واستفساراتك الطبية...',
      uploadMedicalFiles: 'تحميل الوثائق الطبية (التحاليل، الأشعة، التقارير)',
      dragDropFiles: 'اسحب الملفات إلى هنا أو اضغط للاختيار من جهازك',
      acceptedFileTypes: 'الملفات المدعومة: JPG, PNG, PDF, DICOM (حتى ۲۰ ميغابايت)',
      submitting: 'جاري إرسال وتسجيل الملف...',
      submitButton: 'إرسال طلب العلاج النهائي',
      successTitle: 'تم تسجيل طلبكم بنجاح',
      successSubtitle: 'تم إدراج ملفكم الطبي في قائمة المراجعة التخصصية، وسيتواصل معكم فريقنا قريباً.',
      trackingCode: 'رمز المتابعة الخاص بملفكم',
      patientName: 'اسم المريض',
      attachedFilesCount: 'عدد الملفات المرفقة',
      submitAnother: 'تسجيل طلب جديد',
      confidentialDesc: 'كافة بياناتكم وتقاريركم الطبية محفوظة بسرية وأمان تام وفق البروتوكولات المعتمدة.',
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      medicalTourism: 'Sağlık Turizmi',
      treatmentRequest: 'Tedavi Talebi',
      incomingTourism: 'Gelen Turizm',
      services: 'Hizmetler',
      travelServices: 'Seyahat Hizmetleri',
      vipServices: 'VIP Hizmetler',
      internationalServices: 'Uluslararası Hizmetler',
      aboutUs: 'Hakkımızda',
      ceo: 'Genel Müdür & Kurucu',
      journal: 'Dergi & Blog',
      contactUs: 'İletişim',
      primaryCta: 'Ücretsiz Danışmanlık',
      language: 'Dil',
      closeMenu: 'Menüyü Kapat',
      openMenu: 'Menüyü Aç',
      selectLanguage: 'Dil Seçin',
    },
    header: {
      homeAria: 'Ana Sayfaya Git',
      navAria: 'Ana Gezinti Menüsü',
      services: 'Hizmetler',
      servicesMenu: 'Uzmanlık Hizmetleri Menüsü',
      about: 'Hakkımızda',
      aboutMenu: 'Kurumsal Bilgiler ve Genel Müdür',
      closeMenu: 'Menüyü Kapat',
      openMenu: 'Menüyü Aç',
      chooseLanguage: 'Dil Seçiniz',
    },
    pageTitles: {
      '/': 'Airsa Simorgh Jahan | İran Sağlık Turizmi ve VIP Hizmetleri',
      '/medical-tourism/': 'Sağlık Turizmi | Airsa Simorgh Jahan',
      '/treatment-request/': 'Tedavi Talebi | Airsa Simorgh Jahan',
      '/incoming-tourism/': 'Gelen Turizm | İran Kültür ve Doğa Turları',
      '/travel-services/': 'Kapsamlı Seyahat Hizmetleri | Airsa Simorgh Jahan',
      '/vip-services/': 'VIP ve CIP Hizmetleri | Airsa Simorgh Jahan',
      '/international-services/': 'Uluslararası Ticaret ve Danışmanlık | Airsa Simorgh Jahan',
      '/about-us/': 'Hakkımızda | Airsa Simorgh Jahan',
      '/ceo/': 'Hadiseh Dehghani Poudeh | Kurucu ve Genel Müdür',
      '/journal/': 'Dergi ve Rehber | Airsa Simorgh Jahan',
      '/contact-us/': 'İletişim ve Destek | Airsa Simorgh Jahan',
    },
    footer: {
      bannerBadge: 'Uluslararası Seyahat Ağınız',
      bannerTitle: 'İran’da Sağlık, İş ve Keşif Dolu Bir Yolculuğa Başlayın',
      bannerSubtitle: 'Uzman hekim kadromuz, VIP ulaşım filomuz ve 7/24 çok dilli destek ekibimizle yanınızdayız.',
      bannerCta: 'Doğrudan İletişime Geçin',
      slogan: 'Uluslararası Sağlık Turizmi, İş Seyahatleri ve Kültür Turları',
      brandDesc: 'Airsa Simorgh Jahan, uluslararası hastalara ve seçkin gezginlere İran’da en yüksek tıbbi ve lüks konaklama standartlarında kapsamlı hizmetler sunmaktadır.',
      colServices: 'Hizmetlerimiz',
      colQuickLinks: 'Hızlı Bağlantılar',
      colContact: 'İletişim Bilgileri',
      phones: 'Telefon Hatları',
      whatsapp: 'WhatsApp Destek',
      email: 'E-posta',
      addressLabel: 'Merkez Ofis',
      addressText: 'İsfahan, Şehit Motahari Caddesi, No: 48, Airsa Simorgh Jahan Binası',
      address: 'İsfahan, Şehit Motahari Caddesi, No: 48',
      standardBadge: 'Sağlık Bakanlığı IPD Lisanslı',
      copyright: '© {year} Airsa Simorgh Jahan Co. Tüm hakları saklıdır.',
      standards: 'Uluslararası Kalite Standartları & IPD Sertifikasyonu',
      hub: 'İsfahan • Tahran • Uluslararası Temsilcilikler',
    },
    about: {
      valuesTitle: 'Temel Kurumsal Değerlerimiz',
      valuesSubtitle: 'Güven, şeffaflık, yüksek tıbbi etik ve koşulsuz misafirperverlik ilkeleriyle hareket ediyoruz.',
    },
    contact: {
      contactTitle: 'Bizimle İletişime Geçin',
      contactSubtitle: 'Uzman danışmanlarımız taleplerinizi 24 saat içinde yanıtlamaktan memnuniyet duyar.',
    },
    pwa: {
      installApp: 'Uygulamayı Yükle',
      installBannerTitle: 'Airsa Uygulamasını Yükleyin',
      installBannerDesc: 'Hızlı erişim ve çevrimdışı kullanım için ana ekranınıza ekleyin.',
      installNow: 'Şimdi Yükle',
      dismiss: 'Daha Sonra',
      installed: 'Uygulama Yüklendi',
      iosGuideTitle: 'iOS Cihazlarda Kurulum',
      iosStep1: 'Tarayıcının Paylaş butonuna (aşağıdaki kare ve ok) dokunun.',
      iosStep2: 'Menüden "Ana Ekrana Ekle" seçeneğini belirleyin.',
    },
    offline: {
      title: 'Çevrimdışı Mod',
      desc: 'İnternet bağlantınız kesildi. Daha önce yüklenen içeriklere göz atabilirsiniz.',
      reconnected: 'İnternet bağlantısı yeniden kuruldu.',
    },
    common: {
      readMore: 'Devamını Oku',
      viewAll: 'Tümünü Gör',
      learnMore: 'Daha Fazla Bilgi',
      requestConsultation: 'Danışmanlık İste',
      contactExperts: 'Uzmanlarla Görüşün',
      close: 'Kapat',
      back: 'Geri',
      copyLink: 'Bağlantıyı Kopyala',
      copied: 'Kopyalandı',
      share: 'Paylaş',
      loading: 'Yükleniyor...',
      submit: 'Gönder',
      submitting: 'Gönderiliyor...',
      sendRequest: 'Talebi İlet',
      trackingCode: 'Takip Kodu',
      success: 'İşlem Başarılı',
      error: 'Bir Hata Oluştu',
    },
    home: {
      authenticRhythm: 'Huzurlu ve Planlı Bir Deneyim',
      noRushTours: 'Aceleye Getirilmeyen, Özel Tasarlanmış Programlar',
      curatedServicesBadge: 'Seçkin Hizmet Yelpazesi',
      curatedServicesTitle: 'İran’da A’dan Z’ye Kusursuz Sağlık ve Seyahat',
      curatedServicesSubtitle: 'Havalimanı CIP karşılamasından hastane yatışına, lüks otellerden özel tercüman desteğine kadar her ayrıntı güvencemiz altında.',
      learnMore: 'Daha Fazla Bilgi',
      exploreServices: 'Hizmetleri Keşfedin',
      servicesTitle: 'Kapsamlı Çözümlerimiz',
      servicesBadge: 'Uzmanlık Alanlarımız',
      servicesSubtitle: 'Her misafirin ihtiyacına özel olarak kurgulanmış profesyonel sağlık ve seyahat paketleri.',
      inquireService: 'Bilgi ve Rezervasyon',
      confidentialBadge: 'Gizlilik & Güvenlik Güvencesi',
      responseWithin24h: '24 Saat İçinde Yanıt',
      confidentialRecords: 'Tıbbi Verileriniz Tamamen Gizli Tutulur',
      dedicatedCaseManager: 'Size Özel Vaka Yöneticisi',
      viewServices: 'Tüm Hizmetler',
      officialConsultation: 'Resmi Tıbbi Danışmanlık',
      journeyBadge: 'Hasta Süreç Yolculuğu',
      journeyTitle: '«İlk İletişimden Sağlıklı Dönüşe Kadar»',
      journeySubtitle: 'İlk online görüşmeden ülkenize sağlıklı dönüşünüze kadar şeffaf ve güvenli bir süreç.',
      keyDeliverables: 'Temel Ayrıcalıklar',
      stepCounter: 'Adım',
      of: '/',
      conciergeSupport: '7/24 Konsiyerj Hizmeti',
      bookTripCoordination: 'Uçuş ve Otel Koordinasyonu',
      punctualCoordination: 'Zamanında ve Eksiksiz Organizasyon',
      stressFreeTransfers: 'Konforlu VIP Transferler',
      multilingualSupport: 'Türkçe, Farsça, Arapça ve İngilizce Rehberlik',
      rapidFreeGuidance: 'Ücretsiz Hızlı Ön Değerlendirme',
      discoverIran: 'İran’ın Tarihi ve Kültürel Zenginlikleri',
      dedicatedInterpreter: 'Özel Sağlık Tercümanı',
      vipCtaBenefit1: 'Gelişmiş Tıbbi Teknolojiler ve Deneyimli Cerrahlar',
      vipCtaBenefit2: 'VIP CIP Havalimanı Hizmetleri ve Özel Şoför',
      vipCtaBenefit3: '5 Yıldızlı Otel ve Konaklama Ayrıcalıkları',
      dedicatedLiaisonBadge: 'Özel Temsilci',
      requestVipConsultation: 'VIP Danışmanlık Talep Edin',
      vipSpecialistAvailable: 'Kıdemli Danışmanımız Çevrimiçi',
      executiveConciergeFleet: 'Özel VIP Araç Filosu',
      certifiedQuality: 'Uluslararası Kalite Belgesi',
      coreServicesBadge: 'Ana Hizmetler',
      coreServicesTitle: '«Entegre Seyahat ve Sağlık Ekosistemi»',
      coreServicesSubtitle: 'Tıbbi tedavi, seyahat lojistiği ve turistik deneyimi tek çatı altında birleştiriyoruz.',
    },
    vip: {
      timelineBadge: 'VIP Süreç Aşamaları',
      timelineTitle: '«Kusursuz VIP Hasta Deneyimi»',
      timelineSubtitle: 'Özel araçla karşılama, VIP suit konaklama ve birebir refakat.',
      servicesBadge: 'VIP Hizmet Paketi',
      servicesTitle: '«Ayrıcalıklı Konsiyerj Hizmetleri»',
      servicesSubtitle: 'Üst düzey yöneticiler ve konforuna önem veren misafirlerimiz için tasarlandı.',
      vipTimelineBadge: 'Özel Zaman Çizelgesi',
      vipTimelineTitle: '«Havalimanından Sağlıklı Dönüşe»',
      vipTimelineSubtitle: 'Her saniyesi planlanmış, bekleme süresi olmayan VIP akış.',
      sixVipServices: '6 Temel VIP Ayrıcalığı',
      vipStandardTitle: 'Uluslararası VIP Standartları',
      vipStandardSubtitle: 'Sıfır stres, maksimum konfor ve tam mahremiyet.',
    },
    tourism: {
      allFilter: 'Tümü',
      experienceBadge: 'Unutulmaz Deneyimler',
      experienceTitle: '«İran’ın Büyüleyici Dünyasını Keşfedin»',
      experienceSubtitle: 'Tarihi meydanlar, antik başkentler, çöller ve zengin Pers mutfağı.',
      journeyBadge: 'Tur Güzergahları',
      journeyTitle: '«Özenle Hazırlanmış Kültür Rotaları»',
      journeySubtitle: 'İsfahan, Şiraz, Yezd ve Kiş adasında seçkin seyahat deneyimleri.',
      planYourTrip: 'Turunuzu Planlayın',
    },
    form: {
      namePlaceholder: 'Adınız ve Soyadınız',
      confidentialTitle: 'Bilgilerinizin Gizliliği',
      nameRequired: 'Lütfen adınızı ve soyadınızı giriniz.',
      countryRequired: 'Lütfen ülkenizi belirtiniz.',
      phoneRequired: 'Lütfen telefon / WhatsApp numaranızı giriniz.',
      emailRequired: 'Lütfen geçerli bir e-posta adresi giriniz.',
      specialtyRequired: 'Lütfen ilgilendiğiniz tedavi alanını seçiniz.',
      badge: 'Online Tedavi Başvurusu',
      title: 'Tıbbi Dosyanızı Gönderin, Ücretsiz Görüş Alın',
      subtitle: 'Uzman hekimlerimiz tetkiklerinizi inceleyerek en uygun tedavi planı ve maliyet bilgisini sunar.',
      fullName: 'Ad Soyad',
      fullNamePlaceholder: 'Örn: Ahmet Yılmaz',
      country: 'Ülke ve Şehir',
      countryPlaceholder: 'Örn: Türkiye, İstanbul',
      phoneWhatsapp: 'Telefon / WhatsApp Numarası',
      email: 'E-posta Adresi',
      treatmentType: 'Tedavi veya Hizmet Alanı',
      selectTreatment: 'Lütfen tedavi türünü seçiniz',
      description: 'Tıbbi Geçmişiniz ve Talebiniz',
      descriptionPlaceholder: 'Mevcut şikayetlerinizi, teşhislerinizi ve varsa daha önceki ameliyatlarınızı belirtiniz...',
      uploadMedicalFiles: 'Tıbbi Rapor ve Belgeleri Yükleyin',
      dragDropFiles: 'Dosyaları buraya sürükleyin veya tıklayarak seçin',
      acceptedFileTypes: 'PDF, JPG, PNG veya DICOM formatları (maks. 25 MB)',
      submitting: 'Talebiniz İletiliyor...',
      submitButton: 'Tedavi Talebini Gönder',
      successTitle: 'Talebiniz Başarıyla Alındı!',
      successSubtitle: 'Sağlık koordinatörümüz 24 saat içerisinde sizinle iletişime geçecektir.',
      trackingCode: 'Takip Numaranız',
      patientName: 'Hasta Adı',
      attachedFilesCount: 'Yüklenen Dosya Sayısı',
      submitAnother: 'Yeni Bir Talep Gönder',
      confidentialDesc: 'Verileriniz uluslararası hasta hakları ve tıbbi gizlilik yasaları çerçevesinde korunur.',
    },
  },
};

import { Language } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

export const CONSULTATION_URL = "https://medixmaster.com/contact-us/";

export interface CoreServiceItem {
  id: string;
  title: string;
  blurb: string;
  description: string;
  tag: string;
  image: string;
  highlights: string[];
  features?: string[];
}

export interface TravelHeroContent {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  consultationText: string;
  ctaUrl: string;
  image: string;
}

export interface SeamlessTravelData {
  title: string;
  lead: string;
  description: string;
  image: string;
  badge?: string;
  highlights?: string[];
  badges: { title: string; desc: string }[];
}

export interface TravelCtaContent {
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  ctaUrl: string;
  benefits: string[];
}

export const HERO_CONTENT_BY_LANG: Record<Language, TravelHeroContent> = {
  fa: {
    badge: 'خدمات یکپارچه سفر',
    title: '«همه چیز برای یک سفر مطمئن»',
    subtitle: '«خدمات سفر ایرسا سیمرغ جهان از بلیت و ویزا تا اقامت و ترانسفر.»',
    ctaText: 'مشاهده خدمات سفر',
    consultationText: 'درخواست مشاوره',
    ctaUrl: CONSULTATION_URL,
    image: ASSETS.hero.travelServices.src,
  },
  en: {
    badge: 'Comprehensive Travel Engineering',
    title: 'Everything You Need for a Seamless Journey',
    subtitle: 'Airsa Simorgh Jahan comprehensive travel solutions: ticketing, expedited visa issuance, luxury hotels, and private transfers.',
    ctaText: 'Explore Travel Services',
    consultationText: 'Request Consultation',
    ctaUrl: CONSULTATION_URL,
    image: ASSETS.hero.travelServices.src,
  },
  ar: {
    badge: 'خدمات السفر المتكاملة',
    title: '«كل ما تحتاجه لرحلة آمنة ومريحة»',
    subtitle: '«خدمات السفر المتكاملة من إيرسا سيمرغ جهان: حجز الطيران، استخراج التأشيرات، الفنادق الراقية، والنقل الخاص.»',
    ctaText: 'استعراض خدمات السفر',
    consultationText: 'طلب استشارة سريعة',
    ctaUrl: CONSULTATION_URL,
    image: ASSETS.hero.travelServices.src,
  },
  tr: {
    badge: 'Entegre Seyahat Hizmetleri',
    title: '«Güvenli Bir Seyahat İçin İhtiyacınız Olan Her Şey»',
    subtitle: '«Uçak biletinden vizeye, lüks konaklamadan VIP transfere kadar Airsa Simorgh Jahan seyahat çözümleri.»',
    ctaText: 'Seyahat Hizmetlerini Görün',
    consultationText: 'Danışmanlık Talep Edin',
    ctaUrl: CONSULTATION_URL,
    image: ASSETS.hero.travelServices.src,
  },
};

export const CORE_SERVICES_BY_LANG: Record<Language, CoreServiceItem[]> = {
  fa: [
    {
      id: 'flights',
      title: 'بلیت هواپیما',
      blurb: 'رزرو و صدور بلیت سفرهای داخلی و بین‌المللی.',
      description: 'دسترسی سریع به معتبرترین خطوط هوایی بین‌المللی و داخلی، بهترین نرخ‌ها و امکان برنامه‌ریزی پروازهای اتصالی با آرامش کامل.',
      tag: 'پروازهای مستقیم و بین‌المللی',
      image: ASSETS.services.flightBooking.src,
      highlights: [
        'صدور آنی پروازهای معتبر داخلی و بین‌المللی',
        'پشتیبانی تغییر زمان و جابه‌جایی بلیت',
        'کلاس‌های پروازی اکونومی، بیزینس و فرست‌کلاس',
      ],
    },
    {
      id: 'visa',
      title: 'ویزا',
      blurb: 'مشاوره و پیگیری امور مرتبط با ویزا.',
      description: 'تسهیل و پشتیبانی کامل مراحل اداری، بررسی مدارک و دریافت روادید بدون دغدغه و اتلاف وقت مسافر.',
      tag: 'تسهیل امور کنسولی',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'بررسی و اعتبارسنجی دقیق مدارک پیش از ارسال',
        'پیگیری مستقیم امور ویزای گردشگری و تجاری',
        'مشاوره تخصصی شرایط ورود کشورهای مختلف',
      ],
    },
    {
      id: 'hotel',
      title: 'اقامت',
      blurb: 'هماهنگی هتل و محل اقامت متناسب با سفر.',
      description: 'انتخاب از میان برترین هتل‌های پنج ستاره، اقامتگاه‌های بوتیک لوکس سنتی یا مجموعه‌های مجهز تجاری با تایید کیفیت.',
      tag: 'هتل‌ها و اقامتگاه‌های برگزیده',
      image: ASSETS.services.hotelAccommodation.src,
      highlights: [
        'رزرو تاییدشده هتل‌های ۵ ستاره و بوتیک‌های اصیل',
        'ضمانت بهترین قیمت و شفافیت کامل خدمات',
        'امکانات اختصاصی ویژه مهمانان ایرسا سیمرغ جهان',
      ],
    },
    {
      id: 'transfer',
      title: 'ترانسفر',
      blurb: 'انتقال فرودگاهی و حمل‌ونقل اختصاصی.',
      description: 'ناوگان خودروهای VIP لوکس و مجهز، رانندگان مجرب و وقت‌شناس، و هماهنگی دقیق سفرهای درون‌شهری و بین‌شهری.',
      tag: 'ناوگان VIP تشریفاتی',
      image: ASSETS.services.privateTransfer.src,
      highlights: [
        'ترانسفر اختصاصی فرودگاهی بدون معطلی',
        'خودروهای مدرن VIP با رانندگان حرفه‌ای و مسلط',
        'سرویس‌های در اختیار روزانه و بین‌شهری',
      ],
    },
  ],
  en: [
    {
      id: 'flights',
      title: 'Flight Ticketing',
      blurb: 'Domestic and international airline booking & ticket issuance.',
      description: 'Direct connectivity with world-class airlines, competitive fares, optimized connecting flights, and 24/7 rebooking support.',
      tag: 'Direct & Connecting Flights',
      image: ASSETS.services.flightBooking.src,
      highlights: [
        'Instant issuance for premier international and domestic routes',
        'Flexible date rebooking and ticket exchange assistance',
        'Economy, Business Class, and First Class reservations',
      ],
    },
    {
      id: 'visa',
      title: 'Visa Facilitation',
      blurb: 'Expert visa consultation and consular application follow-up.',
      description: 'End-to-end management of official documentation, entry permissions, and fast-track processing for leisure, business, and medical visas.',
      tag: 'Consular Expedited Processing',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'Pre-submission compliance auditing and document verification',
        'Direct tracking with relevant ministries and consular offices',
        'Tailored visa consultation for regional and international passports',
      ],
    },
    {
      id: 'hotel',
      title: 'Hotel & Lodging',
      blurb: 'Handpicked premium hotel bookings tailored to your stay.',
      description: 'Curated portfolio of 5-star international hotels, historic boutique mansions, and fully serviced residences with quality assurances.',
      tag: 'Verified Luxury Accommodations',
      image: ASSETS.services.hotelAccommodation.src,
      highlights: [
        'Confirmed reservations in premier 5-star & boutique properties',
        'Best fare guarantee with transparent amenities',
        'Exclusive VIP privileges for Airsa Simorgh Jahan guests',
      ],
    },
    {
      id: 'transfer',
      title: 'Chauffeured Transfers',
      blurb: 'Airport welcoming and private luxury ground transport.',
      description: 'Modern fleet of VIP executive vehicles, English-speaking professional chauffeurs, and punctual city-to-city transportation.',
      tag: 'VIP Chauffeured Fleet',
      image: ASSETS.services.privateTransfer.src,
      highlights: [
        'Zero-wait private airport arrivals and departures',
        'Modern luxury sedans and vans with trained professional drivers',
        'Full-day dedicated chauffeur services and intercity tours',
      ],
    },
  ],
  ar: [
    {
      id: 'flights',
      title: 'تذاكر الطيران',
      blurb: 'حجز وإصدار تذاكر الطيران الداخلي والدولي بأفضل الأسعار.',
      description: 'تأمين حجوزات الطيران عبر خطوط الطيران العالمية المعتمدة، مع ضمان أفضل المواعيد وإمكانية تعديل الرحلات بكل سهولة.',
      tag: 'رحلات مباشرة ودولية',
      image: ASSETS.services.flightBooking.src,
      highlights: [
        'إصدار فوري لتذاكر الطيران للرحلات الداخلية والدولية',
        'مرونة ودعم مستمر لتعديل مواعيد الرحلات والتذاكر',
        'توفير درجات السفر: السياحية، رجال الأعمال، والدرجة الأولى',
      ],
    },
    {
      id: 'visa',
      title: 'خدمات التأشيرات',
      blurb: 'استشارات قانونية وتخليص إجراءات التأشيرة بسرعة واحترافية.',
      description: 'تسهيل كافة المعاملات القنصلية، وتدقيق المستندات الرسمية، واستخراج التأشيرات السياحية والعلاجية والتجارية دون أي عناء.',
      tag: 'تسهيل الشؤون القنصلية',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'تدقيق وفحص المستندات الطبية والشخصية بدقة قبل التقديم',
        'متابعة مباشرة لملفات التأشيرات مع الجهات الرسمية',
        'استشارات قانونية مخصصة لشروط الدخول لمختلف الجنسيات',
      ],
    },
    {
      id: 'hotel',
      title: 'الحجوزات الفندقية',
      blurb: 'تنسيق الإقامة الفندقية الراقية بما يتناسب مع طبيعة الرحلة.',
      description: 'خيارات إقامة مختارة بعناية تشمل أفخم الفنادق 5 نجوم، والقصور التراثية الفاخرة، والأجنحة المفروشة بالكامل.',
      tag: 'فنادق وأجنحة مختارة بعناية',
      image: ASSETS.services.hotelAccommodation.src,
      highlights: [
        'حجوزات مؤكدة في فنادق 5 نجوم وأجنحة فخمة متكاملة الخدمات',
        'شفافية كاملة وأسعار تفضيلية خاصة لضيوفنا',
        'مرافق وخدمات حصرية لعملاء إيرسا سيمرغ جهان',
      ],
    },
    {
      id: 'transfer',
      title: 'المواصلات والنقل الخاص',
      blurb: 'استقبال وتوديع المطار وسيارات فاخرة مع سائق خاص.',
      description: 'أسطول متكامل من أحدث السيارات الفارهة، مع سائقين محترفين وذوي خبرة ودراية تامة ببروتوكولات الضيافة والتنقل.',
      tag: 'أسطول سيارات VIP',
      image: ASSETS.services.privateTransfer.src,
      highlights: [
        'استقبال ونقل خاص من وإلى المطار بدون أي انتظار',
        'سيارات حديثة ومكيفة مع سائقين يجيدون اللغات وذوي كفاءة عالية',
        'خدمة سيارة وسائق تحت الطلب للجولات اليومية وبين المحافظات',
      ],
    },
  ],
  tr: [
    {
      id: 'flights',
      title: 'Uçak Bileti & Rezervasyon',
      blurb: 'Yurt içi ve uluslararası uçak bileti rezervasyonu ve satışı.',
      description: 'Dünyanın en güvenilir hava yolları ile doğrudan bağlantı, en avantajlı fiyatlar ve esnek bilet değiştirme desteği.',
      tag: 'Direkt ve Aktarmalı Uçuşlar',
      image: ASSETS.services.flightBooking.src,
      highlights: [
        'Tüm yurt içi ve uluslararası hatlarda anında biletleme',
        'Esnek tarih değişikliği ve iptal yönetimi desteği',
        'Ekonomi, Business ve First Class rezervasyon seçenekleri',
      ],
    },
    {
      id: 'visa',
      title: 'Vize Kolaylığı & Takip',
      blurb: 'Uzman vize danışmanlığı ve konsolosluk başvuru takibi.',
      description: 'Evrakların eksiksiz hazırlanması, resmi onayların takibi ve turistik, ticari ya da medikal vize alımının hızlandırılması.',
      tag: 'Konsolosluk & Hızlı Vize',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'Belgelerin başvuru öncesi titizlikle kontrolü ve doğrulanması',
        'Resmi makamlar nezdinde doğrudan başvuru takibi',
        'Farklı pasaport türlerine özel vize şartları danışmanlığı',
      ],
    },
    {
      id: 'hotel',
      title: 'Otel & Seçkin Konaklama',
      blurb: 'Seyahat amacınıza en uygun otel ve süit organizasyonu.',
      description: '5 yıldızlı lüks otellerden tarihi butik saraylara kadar konforu ve kalitesi onaylanmış tesislerde ayrıcalıklı konaklama.',
      tag: 'Seçkin Oteller & Süitler',
      image: ASSETS.services.hotelAccommodation.src,
      highlights: [
        'Onaylı 5 yıldızlı oteller ve otantik butik saray rezervasyonları',
        'En iyi fiyat garantisi ve şeffaf hizmet anlayışı',
        'Airsa Simorgh Jahan misafirlerine özel VIP ayrıcalıklar',
      ],
    },
    {
      id: 'transfer',
      title: 'VIP Transfer & Şoförlü Araç',
      blurb: 'Havalimanı karşılama ve kişiye özel lüks ulaşım.',
      description: 'Lüks araç filosu, yabancı dil bilen kibar şoförler ve şehir içi ya da şehirler arası dakik transfer organizasyonu.',
      tag: 'Protokol VIP Filo',
      image: ASSETS.services.privateTransfer.src,
      highlights: [
        'Sırada beklemeden doğrudan havalimanı transferi',
        'Deneyimli ve nezaket kurallarına hakim profesyonel şoförler',
        'Günlük tahsisli ya da şehirler arası VIP ulaşım',
      ],
    },
  ],
};

export const SEAMLESS_TRAVEL_BY_LANG: Record<Language, SeamlessTravelData> = {
  fa: {
    title: '«سفر بدون دغدغه»',
    lead: 'هماهنگی یکپارچه و هوشمندانه تمام ارکان سفر، کلید تجربه‌ای آرام و به‌یادماندنی است.',
    description: 'در ایرسا سیمرغ جهان، ما تک‌تک اجزای سفر شما را به عنوان زنجیره‌ای به هم‌پیوسته می‌بینیم. از لحظه‌ای که به فکر رزرو بلیت و اخذ ویزا می‌افتید، تا زمان تحویل بار، ترانسفر فرودگاهی و استقرار در هتل، کارشناسان ما همه‌چیز را با دقت ساعت هماهنگ می‌کنند تا هیچ دغدغه یا وقفه‌ای در سفر شما پیش نیاید.',
    image: ASSETS.services.seamlessTravel.src,
    badge: 'تجربه بی‌نقص و یکپارچه سفر',
    highlights: [
      'برنامه‌ریزی دقیق زمان‌بندی پرواز و اقامت',
      'استقبال اختصاصی فرودگاهی CIP و پذیرایی VIP',
      'ناوگان خودروهای لوکس و رانندگان مجرب',
      'پشتیبانی ۲۴ ساعته و کانسی‌یژ اختصاصی مسافر',
    ],
    badges: [
      { title: 'یکپارچگی خدمات', desc: 'مدیریت متمرکز پرواز، اقامت و جابه‌جایی در یک پرونده' },
      { title: 'کانسی‌یژ اختصاصی', desc: 'پشتیبانی بی‌وقفه مسافر در کلیه ساعات شبانه‌روز' },
      { title: 'تضمین کیفیت و زمان', desc: 'وقت‌شناسی کامل در تمامی ترانسفرها و ترخیص‌ها' },
    ],
  },
  en: {
    title: 'Effortless, Stress-Free Travel',
    lead: 'Seamless synergy across all travel components is the foundation of a serene and memorable experience.',
    description: 'At Airsa Simorgh Jahan, every detail of your journey is coordinated as an unbroken chain. From initial visa acquisition and premium flight ticketing to CIP airport arrivals, luggage clearing, and 5-star hotel check-ins, our seasoned specialists synchronize every minute to ensure utter tranquility.',
    image: ASSETS.services.seamlessTravel.src,
    badge: 'Flawless & Integrated Travel',
    highlights: [
      'Precision flight & accommodation scheduling',
      'Private airport CIP reception & fast-track',
      'Executive luxury vehicle fleet and seasoned chauffeurs',
      '24/7 dedicated guest concierge desk',
    ],
    badges: [
      { title: 'Integrated Itineraries', desc: 'Unified management of flights, lodging, and private transport in a single booking.' },
      { title: 'Personal Concierge', desc: 'Uninterrupted 24/7 guest support for instant assistance and adjustments.' },
      { title: 'Punctuality Guarantee', desc: 'Flawless timekeeping across all airport transfers, check-ins, and appointments.' },
    ],
  },
  ar: {
    title: '«سفر هادئ بلا أي عناء»',
    lead: 'التنسيق الشامل والذكي لكافة عناصر الرحلة هو جوهر التجربة الراقية والذكريات الجميلة.',
    description: 'في إيرسا سيمرغ جهان، نرى كل تفصيل من تفاصيل رحلتكم كحلقة في منظومة متكاملة. من لحظة البدء بإصدار التأشيرة وحجز الطيران، وحتى استلام الحقائب، والاستقبال في المطار، والاستقرار في الفندق، يحرص خبراؤنا على التنسيق الدقيق لتنعموا برحلة مريحة وممتعة دون أي ارتباك.',
    image: ASSETS.services.seamlessTravel.src,
    badge: 'تجربة سفر متكاملة وبلا عناء',
    highlights: [
      'جدولة دقيقة ومتقنة لمواعيد الطيران والفنادق',
      'استقبال صالات المطار الخاصة CIP وخدمات الترحيب',
      'أسطول سيارات حديثة وسائقون متميزون بروتوكولياً',
      'متابعة وكونسيرج خاص على مدار الساعة طيلة الرحلة',
    ],
    badges: [
      { title: 'تكامل منظومة السفر', desc: 'إدارة مركزية لجميع خدمات الطيران، الإقامة، والتنقل في ملف واحد.' },
      { title: 'مساعد شخصي مخصص', desc: 'دعم ومتابعة مستمرة للضيف على مدار ۲۴ ساعة طيلة أيام الأسبوع.' },
      { title: 'ضمان الدقة والوقت', desc: 'التزام تام بالمواعيد في كافة عمليات النقل والاستقبال والتوديع.' },
    ],
  },
  tr: {
    title: '«Kaygısız ve Kusursuz Seyahat»',
    lead: 'Seyahatin tüm unsurlarının uyum içinde koordine edilmesi, huzurlu ve unutulmaz bir deneyimin anahtarıdır.',
    description: 'Airsa Simorgh Jahan’da seyahatinizin her detayını birbiriyle bağlantılı bir bütün olarak ele alıyoruz. Vize alımından biletlemeye, havalimanı karşılamasından 5 yıldızlı otele yerleşime kadar her adımı dakiklikle senkronize ediyoruz.',
    image: ASSETS.services.seamlessTravel.src,
    badge: 'Kusursuz & Entegre Seyahat',
    highlights: [
      'Uçuş ve otel takviminin milimetrik planlanması',
      'Özel CIP havalimanı salonunda karşılama ve hızlı geçiş',
      'Lüks araç filosu ve protokol deneyimli şoförler',
      '7/24 kesintisiz konsiyerj ve misafir destek hattı',
    ],
    badges: [
      { title: 'Entegre Seyahat', desc: 'Uçuş, konaklama ve transferin tek bir rezervasyon altında merkezi yönetimi.' },
      { title: 'Kişisel Konsiyerj', desc: 'Tüm seyahat boyunca anlık destek sunan 7/24 danışman.' },
      { title: 'Dakiklik Garantisi', desc: 'Tüm transferlerde ve randevularda tam zamanlama disiplini.' },
    ],
  },
};

export const CTA_CONTENT_BY_LANG: Record<Language, TravelCtaContent> = {
  fa: {
    badge: 'همراهی گام‌به‌گام در سفر',
    title: '«برای سفر خود به راهنمایی نیاز دارید؟»',
    subtitle: 'کارشناسان مجرب سفر در ایرسا سیمرغ جهان آماده پاسخگویی به سوالات شما، تنظیم برنامه سفر و هماهنگی بهترین گزینه‌های اقامتی و پروازی هستند.',
    buttonText: 'درخواست مشاوره',
    ctaUrl: CONSULTATION_URL,
    benefits: [
      'پاسخگویی سریع کمتر از ۲ ساعت',
      'تضمین بهترین قیمت و کیفیت اقامت',
      'پشتیبانی مستقیم در طول مسیر سفر',
    ],
  },
  en: {
    badge: 'Step-by-Step Travel Guidance',
    title: 'Need Guidance for Your Upcoming Trip?',
    subtitle: 'Our travel planning specialists are available to design custom itineraries, manage reservations, and secure the finest flight and lodging options.',
    buttonText: 'Request Travel Consultation',
    ctaUrl: CONSULTATION_URL,
    benefits: [
      'Rapid response in under 2 hours',
      'Guaranteed premier rates & vetted lodging',
      'Direct concierge support throughout journey',
    ],
  },
  ar: {
    badge: 'إرشاد سياحي خطوة بخطوة',
    title: '«هل تحتاج إلى مساعدة في تنظيم رحلتك القادمة؟»',
    subtitle: 'خبراء السفر في إيرسا سيمرغ جهان مستعدون للإجابة عن كافة استفساراتكم، وتنسيق أفضل خيارات الإقامة والطيران المصممة خصيصاً لكم.',
    buttonText: 'طلب استشارة سياحية',
    ctaUrl: CONSULTATION_URL,
    benefits: [
      'استجابة سريعة في أقل من ساعتين',
      'ضمان أفضل الأسعار وجودة الإقامة الفندقية',
      'دعم مباشر متواصل طيلة أيام الرحلة',
    ],
  },
  tr: {
    badge: 'Adım Adım Seyahat Rehberliği',
    title: '«Yaklaşan Seyahatiniz İçin Rehberliğe mi İhtiyacınız Var?»',
    subtitle: 'Airsa Simorgh Jahan seyahat uzmanları sorularınızı yanıtlamaya, size özel program oluşturmaya ve en iyi uçuş/otel seçeneklerini sunmaya hazırdır.',
    buttonText: 'Seyahat Danışmanlığı İsteyin',
    ctaUrl: CONSULTATION_URL,
    benefits: [
      '2 saat içinde hızlı yanıt',
      'En avantajlı fiyat ve onaylı konaklama garantisi',
      'Seyahat süresince doğrudan danışman desteği',
    ],
  },
};

export const getTravelHeroContent = (lang: Language = 'fa') => HERO_CONTENT_BY_LANG[lang] || HERO_CONTENT_BY_LANG.fa;
export const getCoreServices = (lang: Language = 'fa') => CORE_SERVICES_BY_LANG[lang] || CORE_SERVICES_BY_LANG.fa;
export const getSeamlessTravel = (lang: Language = 'fa') => SEAMLESS_TRAVEL_BY_LANG[lang] || SEAMLESS_TRAVEL_BY_LANG.fa;
export const getTravelCtaContent = (lang: Language = 'fa') => CTA_CONTENT_BY_LANG[lang] || CTA_CONTENT_BY_LANG.fa;

export const getTravelHero = getTravelHeroContent;
export const getTravelCoreServices = getCoreServices;
export const getSeamlessTravelData = getSeamlessTravel;
export const getTravelCta = getTravelCtaContent;
export const getTravelCtaData = getTravelCtaContent;

export const HERO_CONTENT = HERO_CONTENT_BY_LANG.fa;
export const CORE_SERVICES = CORE_SERVICES_BY_LANG.fa;
export const SEAMLESS_TRAVEL = SEAMLESS_TRAVEL_BY_LANG.fa;
export const CTA_CONTENT = CTA_CONTENT_BY_LANG.fa;

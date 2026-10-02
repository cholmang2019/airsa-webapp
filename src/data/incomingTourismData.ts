import { Language } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

export const CONSULTATION_URL = "https://medixmaster.com/contact-us/";

export interface TourismService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  aspectClass: string;
  description?: string;
  location?: string;
}

export interface JourneyStep {
  number: string;
  stepEn: string;
  title: string;
  description: string;
  details: string[];
  deliverables?: string[];
  highlights?: string[];
}

export interface TourismHeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
  badge?: string;
  ctaUrl?: string;
}

export interface TourismIntroData {
  badge: string;
  title: string;
  lead?: string;
  locationCaption: string;
  paragraph1: string;
  paragraph2: string;
  paragraphs?: string[];
  pillars: Array<{ title: string; desc: string } | string>;
  image: string;
  ctaUrl: string;
  ctaText: string;
}

export const TOURISM_HERO_BY_LANG: Record<Language, TourismHeroData> = {
  fa: {
    title: '«ایران را به شیوه خود تجربه کنید»',
    subtitle: '«خدمات تخصصی گردشگری ورودی برای مسافرانی که می‌خواهند ایران را متفاوت تجربه کنند.»',
    ctaText: '«برنامه سفر من را طراحی کنید»',
    image: ASSETS.hero.iranTourism.src,
  },
  en: {
    title: 'Experience Iran on Your Own Terms',
    subtitle: 'Bespoke inbound tourism curated for discerning international travelers who seek authentic cultural immersion and personalized luxury.',
    ctaText: 'Design My Custom Itinerary',
    image: ASSETS.hero.iranTourism.src,
  },
  ar: {
    title: '«اكتشف سحر إيران بأسلوبك الخاص»',
    subtitle: '«خدمات السياحة الوافدة المتخصصة للضيوف الباحثين عن تجربة استثنائية تجمع بين التاريخ العريق والضيافة الفاخرة.»',
    ctaText: '«صمّم برنامج رحلتي الخاصة»',
    image: ASSETS.hero.iranTourism.src,
  },
  tr: {
    title: '«İran’ı Kendi Tarzınızla Keşfedin»',
    subtitle: '«İran’ı farklı ve ayrıcalıklı bir biçimde deneyimlemek isteyen misafirler için özel gelen turizm hizmetleri.»',
    ctaText: '«Özel Seyahat Planımı Hazırlayın»',
    image: ASSETS.hero.iranTourism.src,
  },
  zh: {
    title: '«以您独有的步调，深度探索伊朗»',
    subtitle: '«专为追求地道文化沉浸与尊崇个性化体验的国际旅行者打造的定制入境旅游服务。»',
    ctaText: '«量身定制我的专属行程»',
    image: ASSETS.hero.iranTourism.src,
  },
};

export const TOURISM_INTRO_BY_LANG: Record<Language, TourismIntroData> = {
  fa: {
    badge: 'رویکرد متمایز در سفر',
    title: '«سفر شما، با یک برنامه اختصاصی»',
    lead: 'ایران سرزمینی با هزاره‌ها تاریخ، تنوع اقلیمی کم‌نظیر و مهمان‌نوازی افسانه‌ای است. ما در ایرسا سیمرغ جهان باور داریم که هیچ دو مسافری علایق، ریتم و انتظارات یکسانی ندارند.',
    locationCaption: 'اصفهان و شیراز | اقامت‌های بوتیک میراثی',
    paragraph1: 'ایران سرزمینی با هزاره‌ها تاریخ، تنوع اقلیمی کم‌نظیر و مهمان‌نوازی افسانه‌ای است. ما در ایرسا سیمرغ جهان باور داریم که هیچ دو مسافری علایق، ریتم و انتظارات یکسانی ندارند.',
    paragraph2: 'تیم گردشگری ورودی ایرسا سیمرغ جهان با تکیه بر شبکه گسترده هتل‌های بوتیک اصیل، ناوگان ترانسفر اختصاصی و راهنمایان مسلط بین‌المللی، برنامه‌ای منحصربه‌فرد برای شما طراحی می‌کند.',
    paragraphs: [
      'تیم گردشگری ورودی ایرسا سیمرغ جهان با تکیه بر شبکه گسترده هتل‌های بوتیک اصیل، ناوگان ترانسفر اختصاصی، راهنمایان مسلط به زبان‌های بین‌المللی و ارتباطات عمیق بومی، برنامه‌ای منحصربه‌فرد بر پایه علایق فرهنگی، معماری، طبیعت‌گردی یا شکم‌گردی شما طراحی می‌کند.',
      'از لحظه صدور ویزا و تشریفات فرودگاهی CIP تا همراهی اختصاصی در طول سفر، تجربه‌ای روان، امن و خاطره‌انگیز برای مسافران بین‌المللی رقم می‌زنیم.',
    ],
    pillars: [
      'برنامه‌ریزی کاملاً شخصی‌سازی‌شده و منعطف',
      'اقامت در هتل‌های سنتی و بوتیک منتخب',
      'ترانسفر اختصاصی و راهنمایان مسلط بین‌المللی',
      'پشتیبانی و همراهی بی‌وقفه ۲۴ ساعته',
    ],
    image: ASSETS.services.inboundTouristExperience.src,
    ctaUrl: CONSULTATION_URL,
    ctaText: 'درخواست برنامه سفر اختصاصی',
  },
  en: {
    badge: 'Distinctive Travel Philosophy',
    title: 'Your Journey, Perfectly Tailored',
    lead: 'Iran is a land of millennia of living history, breathtaking geographical diversity, and world-renowned hospitality.',
    locationCaption: 'Isfahan & Shiraz | Heritage Boutique Mansions',
    paragraph1: 'Iran is a land of millennia of living history, breathtaking geographical diversity, and world-renowned hospitality. At Airsa Simorgh Jahan, we recognize that no two travelers share identical rhythms or aspirations.',
    paragraph2: 'Our inbound tourism division leverages a curated network of historic boutique mansions, private chauffeured transport, and fluent multilingual guides to craft unique routes matching your passions.',
    paragraphs: [
      'Our inbound tourism division leverages a curated network of historic boutique mansions, private chauffeured transport, fluent multilingual guides, and deep local relationships to craft unique routes centered on your passion for archaeology, architecture, culinary traditions, or desert landscapes.',
      'From visa facilitation and VIP airport receptions to uninterrupted concierge support, we deliver a smooth, secure, and deeply enriching Persian voyage.',
    ],
    pillars: [
      '100% Tailored and flexible itineraries',
      'Handpicked heritage boutique hotels',
      'Executive private chauffeurs and certified guides',
      '24/7 dedicated concierge assistance',
    ],
    image: ASSETS.services.inboundTouristExperience.src,
    ctaUrl: CONSULTATION_URL,
    ctaText: 'Request Custom Itinerary',
  },
  ar: {
    badge: 'نهج متميز في السفر',
    title: '«رحلتكم، ببرنامج سياحي مصمم خصيصاً لكم»',
    lead: 'إيران بلد يعبق بآلاف السنين من التاريخ، وتنوع طبيعي ساحر، وكرم ضيافة أسطوري.',
    locationCaption: 'أصفهان وشيراز | قصور تراثية فندقية فاخرة',
    paragraph1: 'إيران بلد يعبق بآلاف السنين من التاريخ، وتنوع طبيعي ساحر، وكرم ضيافة أسطوري. في إيرسا سيمرغ جهان، نؤمن بأن كل ضيف يملك ذوقاً واهتمامات وتطلعات فريدة.',
    paragraph2: 'يعتمد فريق السياحة الوافدة لدينا على شبكة واسعة من القصور التراثية الفندقية الفاخرة، وأسطول النقل الخاص، ومرشدين سياحيين يتحدثون العربية والإنجليزية بطلاقة.',
    paragraphs: [
      'يعتمد فريق السياحة الوافدة لدينا على شبكة واسعة من القصور التراثية الفندقية الفاخرة، وأسطول النقل الخاص، ومرشدين سياحيين يتحدثون العربية والإنجليزية بطلاقة، لتصميم برنامج سياحي مخصص يلبي شغفكم بالآثار التاريخية، أو الطبيعة، أو فنون العمارة، أو المأكولات الإيرانية الشهيرة.',
      'من لحظة استخراج الفيزا واستقبال صالة كبار الشخصيات CIP وحتى نهاية الرحلة، نضمن لكم إقامة مريحة، آمنة ومفعمة بأجمل الذكريات.',
    ],
    pillars: [
      'تخطيط سياحي مخصص ومرن بالكامل',
      'إقامة في قصور وفنادق تراثية فاخرة',
      'سيارات تنفيذية خاصة ومرشدون متمرسون',
      'دعم ومتابعة شخصية على مدار ۲۴ ساعة',
    ],
    image: ASSETS.services.inboundTouristExperience.src,
    ctaUrl: CONSULTATION_URL,
    ctaText: 'طلب تصميم جدول سياحي خاص',
  },
  tr: {
    badge: 'Seyahatte Seçkin Bir Yaklaşım',
    title: '«Size Özel Tasarlanmış Bir Seyahat»',
    lead: 'İran, binlerce yıllık tarihi, eşsiz coğrafi çeşitliliği ve efsanevi misafirperverliğiyle büyüleyici bir ülkedir.',
    locationCaption: 'İsfahan ve Şiraz | Tarihi Butik Konaklar',
    paragraph1: 'İran, binlerce yıllık tarihi, eşsiz coğrafi çeşitliliği ve efsanevi misafirperverliğiyle büyüleyici bir ülkedir. Airsa Simorgh Jahan olarak, hiçbir iki gezginin aynı ilgi alanlarına veya seyahat temposuna sahip olmadığını biliyoruz.',
    paragraph2: 'Gelen turizm ekibimiz; seçkin tarihi butik oteller, özel şoförlü VIP araç filosu ve çok dilli profesyonel rehberleriyle ilgi alanlarınıza özel bir rota oluşturur.',
    paragraphs: [
      'Airsa Simorgh Jahan gelen turizm ekibi; köklü butik konaklar, özel transfer filosu, yabancı dillere hakim rehberler ve yerel bağlantılarıyla; mimari, tarih, doğa veya gastronomi tutkunuza uygun benzersiz bir seyahat programı sunar.',
      'Hızlı vize sürecinden CIP havalimanı karşılamasına ve seyahat boyunca kesintisiz refakata kadar güvenli, konforlu ve unutulmaz bir deneyim vadediyoruz.',
    ],
    pillars: [
      'Tamamen kişiselleştirilmiş ve esnek seyahat planı',
      'Özenle seçilmiş tarihi ve butik otellerde konaklama',
      'Özel transfer araçları ve lisanslı yabancı dil rehberleri',
      '7/24 kesintisiz konsiyerj ve saha desteği',
    ],
    image: ASSETS.services.inboundTouristExperience.src,
    ctaUrl: CONSULTATION_URL,
    ctaText: 'Özel Seyahat Programı Talep Edin',
  },
  zh: {
    badge: '独树一帜的旅行理念',
    title: '«您的专属旅程，精准定制»',
    lead: '伊朗是一片拥有数千年灿烂文明、丰富多变地貌与传奇待客热情的古老沃土。在艾尔萨·西摩格，我们深知没有哪两位客人的偏好与节奏会完全相同。',
    locationCaption: '伊斯法罕与设拉子 | 历史传统精品行馆',
    paragraph1: '伊朗是一片拥有数千年灿烂文明、丰富多变地貌与传奇待客热情的古老沃土。在艾尔萨·西摩格，我们深知没有哪两位客人的偏好与节奏会完全相同。',
    paragraph2: '艾尔萨·西摩格入境旅游事业部依托庞大的原真历史精品行馆网络、专属带驾VIP车队以及精通中文与国际语言的权威向导，为您量身定制独一无二的探索方案。',
    paragraphs: [
      '艾尔萨·西摩格入境旅游专业团队依托精心甄选的传统精品府邸、私密尊享专车车队、谙熟历史文脉的持证向导及深厚的本土资源，根据您在古代建筑、历史文脉、自然秘境或地道美食上的特别兴趣，架构专属于您的路线。',
      '从签证加急申办、机场CIP贵宾室无缝迎送到旅途全程贴身管家陪伴，我们为国际宾客缔造流畅、安全且永生难忘的波斯体验。',
    ],
    pillars: [
      '完全个性化、高度灵活的弹性日程设计',
      '入住甄选历史遗迹改建精品行馆与五星级酒店',
      '全程私密专车与持证专业多语种向导陪同',
      '全天候24小时不间断专属管家与落地保障',
    ],
    image: ASSETS.services.inboundTouristExperience.src,
    ctaUrl: CONSULTATION_URL,
    ctaText: '申请定制专属旅行方案',
  },
};

export const TOURISM_SERVICES_BY_LANG: Record<Language, TourismService[]> = {
  fa: [
    {
      id: 'cip',
      title: 'استقبال فرودگاهی',
      subtitle: 'تشریفات اختصاصی CIP و ترانسفر مستقیم',
      description: 'استقبال بدون معطلی در سالن تشریفات اختصاصی فرودگاه، انجام امور گذرنامه و بار، و هدایت به ترانسفر VIP.',
      image: ASSETS.services.cipAirportLounge.src,
      tag: 'ورود بدون دغدغه',
    },
    {
      id: 'stay',
      title: 'اقامت',
      subtitle: 'هتل‌های لوکس و بوتیک‌های تاریخی اصیل',
      description: 'رزرو اقامتگاه‌های دست‌چین‌شده سنتی با حیاط‌های دلنشین فیروزه‌ای یا هتل‌های مدرن ۵ ستاره با بالاترین استانداردهای رفاهی.',
      image: ASSETS.services.hotelAccommodation.src,
      tag: 'آرامش و شکوه',
    },
    {
      id: 'transfer',
      title: 'ترانسفر اختصاصی',
      subtitle: 'ناوگان VIP بین‌شهری و درون‌شهری',
      description: 'جابه‌جایی ایمن و آسوده در سراسر ایران با خودروهای لوکس مجهز، رانندگان مجرب و سیستم ره‌گیری دقیق مسیر.',
      image: ASSETS.services.privateTransfer.src,
      tag: 'سفری ایمن و راحت',
    },
    {
      id: 'itinerary',
      title: 'برنامه‌ریزی سفر',
      subtitle: 'طراحی گشت‌ها متناسب با ریتم و سلیقه شما',
      description: 'مسیرهای ویژه فراتر از تورهای کلیشه‌ای، متمرکز بر علایق باستان‌شناسی، عکاسی، طبیعت، معماری یا خوراک‌شناسی.',
      image: ASSETS.services.itineraryPlanning.src,
      tag: 'اختصاصی و منعطف',
    },
    {
      id: 'experiences',
      title: 'تجربه‌های بومی',
      subtitle: 'ارتباط اصیل با فرهنگ و هنر ایرانی',
      description: 'دیدار با اساتید صنایع دستی اصفهان و شیراز، صرف چای در باغ‌های تاریخی، و چشیدن اصیل‌ترین طعم‌های محلی.',
      image: ASSETS.services.traditionalBazaarLife.src,
      tag: 'روح اصیل ایران',
    },
    {
      id: 'guide',
      title: 'راهنمای چندزبانه',
      subtitle: 'لیدرهای حرفه‌ای و مسلط به تاریخ و هنر',
      description: 'همراهی راهنمایان کارت‌دار دارای تسلط کامل بر زبان‌های انگلیسی، عربی، فرانسوی یا آلمانی با دانش عمیق تاریخی.',
      image: ASSETS.services.inboundTouristExperience.src,
      tag: 'همراه آگاه و امین',
    },
  ],
  en: [
    {
      id: 'cip',
      title: 'Airport CIP Welcoming',
      subtitle: 'Dedicated Fast-Track & Chauffeured Pickup',
      description: 'Zero-wait tarmac pickup, luggage and passport formalities completed in the private lounge, followed by direct luxury transit.',
      image: ASSETS.services.cipAirportLounge.src,
      tag: 'Effortless Arrival',
    },
    {
      id: 'stay',
      title: 'Historic Lodging',
      subtitle: 'Royal Boutique Mansions & 5-Star Suites',
      description: 'Handpicked restored mansions with turquoise courtyards alongside modern international 5-star properties.',
      image: ASSETS.services.hotelAccommodation.src,
      tag: 'Elegance & Serenity',
    },
    {
      id: 'transfer',
      title: 'Private Ground Fleet',
      subtitle: 'VIP Intercity & City Chauffeured Transport',
      description: 'Travel securely across Iran in modern luxury sedans and vans with vetted drivers and precision routing.',
      image: ASSETS.services.privateTransfer.src,
      tag: 'Comfort & Reliability',
    },
    {
      id: 'itinerary',
      title: 'Curated Itineraries',
      subtitle: 'Designed to Match Your Exact Rhythm',
      description: 'Non-formulaic routes tailored specifically to your passions: UNESCO monuments, photography, Silk Road caravanserais, or culinary arts.',
      image: ASSETS.services.itineraryPlanning.src,
      tag: 'Flexible & Private',
    },
    {
      id: 'experiences',
      title: 'Authentic Encounters',
      subtitle: 'Living Heritage & Master Artisans',
      description: 'Private studio visits with master carpet weavers and miniature artists in Isfahan, saffron harvests, and tea ceremonies in Persian gardens.',
      image: ASSETS.services.traditionalBazaarLife.src,
      tag: 'Persian Soul',
    },
    {
      id: 'guide',
      title: 'Multilingual Ambassadors',
      subtitle: 'Licensed Cultural Specialists',
      description: 'Certified guides fluent in English, Arabic, French, and German possessing authoritative knowledge of Persian civilizations.',
      image: ASSETS.services.inboundTouristExperience.src,
      tag: 'Expert Cultural Companion',
    },
  ],
  ar: [
    {
      id: 'cip',
      title: 'استقبال المطار CIP',
      subtitle: 'تشريفات خاصة وتوصيل مباشر للفندق',
      description: 'استقبال فوري في صالة كبار الشخصيات، وتخليص الجوازات والأمتعة دون عناء، والانتقال بسيارة خاصة ومكيفة.',
      image: ASSETS.services.cipAirportLounge.src,
      tag: 'وصول مريح وبلا انتظار',
    },
    {
      id: 'stay',
      title: 'الإقامة الراقية',
      subtitle: 'فنادق 5 نجوم وقصور تراثية ساحرة',
      description: 'حجوزات مؤكدة في أفضل القصور التاريخية المرممة ذات الأفنية المائية الخلابة، أو الفنادق الحديثة الفخمة.',
      image: ASSETS.services.hotelAccommodation.src,
      tag: 'أصالة وفخامة',
    },
    {
      id: 'transfer',
      title: 'المواصلات الخاصة',
      subtitle: 'أسطول VIP للجولات اليومية والسفر بین المدن',
      description: 'تنقل آمن ومريح في كافة المحافظات الإيرانية بأحدث السيارات وسائقين متمرسين يراعون راحة العائلة.',
      image: ASSETS.services.privateTransfer.src,
      tag: 'أمان وراحة تامة',
    },
    {
      id: 'itinerary',
      title: 'تصميم برامج السفر',
      subtitle: 'جولات سياحية تناسب رغباتكم الخاصة',
      description: 'جداول سياحية مرنة بعيدة عن المسارات التقليدية، تركز على المعالم التاريخية، الطبيعة، الأسواق التراثية والمطاعم الفاخرة.',
      image: ASSETS.services.itineraryPlanning.src,
      tag: 'مرونة وخصوصية',
    },
    {
      id: 'experiences',
      title: 'تجارب ثقافية حية',
      subtitle: 'معايشة أصيلة للتراث والفنون الإيرانية',
      description: 'زيارة ورش الحرف اليدوية وحياكة السجاد الفاخر بأصفهان وشيراز، وتناول الشاي في الحدائق الفارسية المصنفة باليونسكو.',
      image: ASSETS.services.traditionalBazaarLife.src,
      tag: 'عبق الشرق الأصيل',
    },
    {
      id: 'guide',
      title: 'مرشدون سياحيون معتمدون',
      subtitle: 'مرشدون يتحدثون العربية والإنجليزية بطلاقة',
      description: 'مرافقة من قبل مرشدين محترفين حاصلين على تراخيص رسمية وملمين بتاريخ وحضارة إيران العريقة.',
      image: ASSETS.services.inboundTouristExperience.src,
      tag: 'رفيق سفر أمين ومثقف',
    },
  ],
  tr: [
    {
      id: 'cip',
      title: 'Havalimanı CIP Karşılama',
      subtitle: 'Özel Hızlı Geçiş ve Doğrudan VIP Transfer',
      description: 'Havalimanında beklemeden özel salonda pasaport ve bagaj işlemleri, ardından doğrudan lüks araçla otele transfer.',
      image: ASSETS.services.cipAirportLounge.src,
      tag: 'Zahmetsiz Varış',
    },
    {
      id: 'stay',
      title: 'Tarihi ve Lüks Konaklama',
      subtitle: 'Seçkin Butik Konaklar ve 5 Yıldızlı Oteller',
      description: 'Geleneksel mimariye sahip avlulu butik oteller veya en yüksek konfora sahip modern 5 yıldızlı süitler.',
      image: ASSETS.services.hotelAccommodation.src,
      tag: 'Zarafet ve Huzur',
    },
    {
      id: 'transfer',
      title: 'Özel VIP Transfer',
      subtitle: 'Şehir İçi ve Şehirlerarası Özel Araç Filosu',
      description: 'Modern lüks araçlar, deneyimli şoförler ve güvenli güzergah takibiyle İran genelinde huzurlu yolculuk.',
      image: ASSETS.services.privateTransfer.src,
      tag: 'Güvenli ve Konforlu',
    },
    {
      id: 'itinerary',
      title: 'Kişiye Özel Rota Tasarımı',
      subtitle: 'Zevkinize ve Temponuza Uygun Gezi Programı',
      description: 'Klasik turların ötesinde; arkeoloji, fotoğrafçılık, çöl safarisi veya gurme lezzetlere odaklanan esnek programlar.',
      image: ASSETS.services.itineraryPlanning.src,
      tag: 'Özgün ve Esnek',
    },
    {
      id: 'experiences',
      title: 'Otantik Kültürel Deneyimler',
      subtitle: 'İran Kültürü ve Sanatıyla Birebir Temas',
      description: 'İsfahan ve Şiraz el sanatları ustalarıyla buluşma, tarihi Pers bahçelerinde çay molası ve yerel lezzet tadımları.',
      image: ASSETS.services.traditionalBazaarLife.src,
      tag: 'Doğunun Büyüsü',
    },
    {
      id: 'guide',
      title: 'Çok Dilli Profesyonel Rehberler',
      subtitle: 'Tarih ve Sanat Uzmanı Lisanslı Rehberler',
      description: 'Türkçe, İngilizce, Arapça ve diğer dillerde yetkin, İran’ın derin tarihine hakim lisanslı uzmanlar.',
      image: ASSETS.services.inboundTouristExperience.src,
      tag: 'Bilgili ve Güvenilir Yol Arkadaşı',
    },
  ],
  zh: [
    {
      id: 'cip',
      title: '机场CIP贵宾迎送',
      subtitle: '停机坪专属通道与专车直达',
      description: '在机场CIP贵宾楼享受零排队尊享礼遇，专员代办入境手续与行李提取，随后直达VIP专车。',
      image: ASSETS.services.cipAirportLounge.src,
      tag: '从容无忧入境',
    },
    {
      id: 'stay',
      title: '精品特色住宿',
      subtitle: '奢华五星级酒店与原汁原味历史行馆',
      description: '预订精挑细选的传统庭院式精品行馆（绿松石水池与古朴回廊），或国际高标准的现代奢华五星级酒店。',
      image: ASSETS.services.hotelAccommodation.src,
      tag: '静谧与尊荣',
    },
    {
      id: 'transfer',
      title: '全流程私密专车',
      subtitle: '城际与市内高规格带驾车队',
      description: '以车况卓越的高端商务车、经验丰富的礼宾司机与智能路线追踪，保障在伊朗境内安全舒适畅行。',
      image: ASSETS.services.privateTransfer.src,
      tag: '安全尊贵出行',
    },
    {
      id: 'itinerary',
      title: '量身定制路线规划',
      subtitle: '依据您的个人步调与独特审美设计',
      description: '打破千篇一律的常规走马观花路线，深度聚焦考古探寻、摄影采风、沙漠星空或丝路文化。',
      image: ASSETS.services.itineraryPlanning.src,
      tag: '私享与弹性',
    },
    {
      id: 'experiences',
      title: '原真文化非遗体验',
      subtitle: '与波斯传统艺术与生活方式深度交融',
      description: '拜会伊斯法罕与设拉子手工艺国宝级大师，在联合国历史波斯园林中品茶，尝遍纯正传统美味。',
      image: ASSETS.services.traditionalBazaarLife.src,
      tag: '波斯文明神韵',
    },
    {
      id: 'guide',
      title: '资深中文多语种向导',
      subtitle: '熟谙历史艺术的专业持证双语向导',
      description: '全程由精通中文、英文并持有国家高级导游资质的文化学者型领队随行讲解，带来深刻生动的人文洞见。',
      image: ASSETS.services.inboundTouristExperience.src,
      tag: '学识渊博的同行者',
    },
  ],
};

export const EXPERIENCES_BY_LANG: Record<Language, ExperienceItem[]> = {
  fa: [
    { id: '1', title: 'میدان نقش جهان اصفهان', subtitle: 'شکوه معماری عصر صفوی و کاشی‌کاری‌های فیروزه‌ای', category: 'معماری', image: ASSETS.services.isfahanNaghsheJahan.src, aspectClass: 'aspect-[4/3]' },
    { id: '2', title: 'پرسپولیس (تخت جمشید)', subtitle: 'پایتخت تشریفاتی امپراتوری هخامنشی', category: 'تاریخ', image: ASSETS.services.persepolisHeritage.src, aspectClass: 'aspect-[3/4]' },
    { id: '3', title: 'کویر مرنجاب و کاشان', subtitle: 'سکوت رمل‌های طلایی و آسمان پر ستاره کویری', category: 'طبیعت', image: ASSETS.services.lutDesertSafari.src, aspectClass: 'aspect-[4/3]' },
    { id: '4', title: 'بازار بزرگ قیصریه', subtitle: 'عطر ادویه‌ها و کارگاه‌های زنده قلم‌زنی و مسگری', category: 'فرهنگ', image: ASSETS.services.traditionalBazaarLife.src, aspectClass: 'aspect-[3/4]' },
    { id: '5', title: 'باغ‌های اصیل ایرانی', subtitle: 'باغ فین کاشان و باغ ارم شیراز با معماری ثبت جهانی', category: 'معماری', image: ASSETS.services.nasirAlMulkArchitecture.src, aspectClass: 'aspect-[4/3]' },
    { id: '6', title: 'طعم اصیل غذاهای سنتی', subtitle: 'بریانی اصفهان، کباب‌های زعفرانی و دمنوش‌های گیاهی', category: 'غذا', image: ASSETS.services.persianCuisineFeast.src, aspectClass: 'aspect-[3/4]' },
  ],
  en: [
    { id: '1', title: 'Naqsh-e Jahan Square', subtitle: 'Safavid architectural splendor and turquoise tilework in Isfahan', category: 'Architecture', image: ASSETS.services.isfahanNaghsheJahan.src, aspectClass: 'aspect-[4/3]' },
    { id: '2', title: 'Persepolis (Takht-e Jamshid)', subtitle: 'The ceremonial imperial capital of the Achaemenid Empire', category: 'History', image: ASSETS.services.persepolisHeritage.src, aspectClass: 'aspect-[3/4]' },
    { id: '3', title: 'Maranjab Desert Dunes', subtitle: 'Golden silences and celestial night skies across the Silk Road', category: 'Nature', image: ASSETS.services.lutDesertSafari.src, aspectClass: 'aspect-[4/3]' },
    { id: '4', title: 'Isfahan Grand Bazaar', subtitle: 'Fragrant saffron spices and live coppersmith artisan guilds', category: 'Culture', image: ASSETS.services.traditionalBazaarLife.src, aspectClass: 'aspect-[3/4]' },
    { id: '5', title: 'UNESCO Persian Gardens', subtitle: 'Fin Garden in Kashan and Eram Garden in Shiraz with flowing fountains', category: 'Architecture', image: ASSETS.services.nasirAlMulkArchitecture.src, aspectClass: 'aspect-[4/3]' },
    { id: '6', title: 'Traditional Persian Culinary', subtitle: 'Savory saffron kebabs, pomegranate fesenjan, and herbal distillates', category: 'Gastronomy', image: ASSETS.services.persianCuisineFeast.src, aspectClass: 'aspect-[3/4]' },
  ],
  ar: [
    { id: '1', title: 'ساحة نقش جهان في أصفهان', subtitle: 'روعة العمارة الصفوية والزخارف القاشانية الفيروزية الساحرة', category: 'العمارة', image: ASSETS.services.isfahanNaghsheJahan.src, aspectClass: 'aspect-[4/3]' },
    { id: '2', title: 'تخت جمشيد (برسيبوليس)', subtitle: 'عاصمة الإمبراطورية الأخمينية التاريخية وعجائب الآثار الحجرية', category: 'التاريخ', image: ASSETS.services.persepolisHeritage.src, aspectClass: 'aspect-[3/4]' },
    { id: '3', title: 'صحراء مرنجاب الذهبية', subtitle: 'هدوء الكثبان الرملية وسماء الصحراء المضاءة بالنجوم', category: 'الطبيعة', image: ASSETS.services.lutDesertSafari.src, aspectClass: 'aspect-[4/3]' },
    { id: '4', title: 'سوق أصفهان التاريخي الكبير', subtitle: 'عبق الزعفران الإيراني وورش صناعة النحاسيات والتحف اليدوية', category: 'الثقافة', image: ASSETS.services.traditionalBazaarLife.src, aspectClass: 'aspect-[3/4]' },
    { id: '5', title: 'الحدائق الفارسية المسجلة باليونسكو', subtitle: 'حديقة فين في كاشان وحديقة إرم في شيراز بجداولها المائية العذبة', category: 'العمارة', image: ASSETS.services.nasirAlMulkArchitecture.src, aspectClass: 'aspect-[4/3]' },
    { id: '6', title: 'أشهى المأكولات الإيرانية الأصيلة', subtitle: 'كباب الزعفران الفاخر، الأطباق التراثية اللذيذة والعصائر الطبيعية', category: 'المأكولات', image: ASSETS.services.persianCuisineFeast.src, aspectClass: 'aspect-[3/4]' },
  ],
  tr: [
    { id: '1', title: 'İsfahan Nakş-ı Cihan Meydanı', subtitle: 'Safevi mimarisinin ihtişamı ve turkuaz çini işlemeleri', category: 'Mimari', image: ASSETS.services.isfahanNaghsheJahan.src, aspectClass: 'aspect-[4/3]' },
    { id: '2', title: 'Persepolis (Taht-ı Cemşid)', subtitle: 'Ahameniş İmparatorluğu’nun görkemli tören başkenti', category: 'Tarih', image: ASSETS.services.persepolisHeritage.src, aspectClass: 'aspect-[3/4]' },
    { id: '3', title: 'Maranjab Çölü ve Kaşan Kumulları', subtitle: 'Altın kum tepelerinin dinginliği ve yıldız dolu çöl gökyüzü', category: 'Doğa', image: ASSETS.services.lutDesertSafari.src, aspectClass: 'aspect-[4/3]' },
    { id: '4', title: 'Tarihi Kapalıçarşı (Kayseriye)', subtitle: 'Baharat kokuları ve canlı bakır/oyma zanaat atölyeleri', category: 'Kültür', image: ASSETS.services.traditionalBazaarLife.src, aspectClass: 'aspect-[3/4]' },
    { id: '5', title: 'UNESCO Tescilli Pers Bahçeleri', subtitle: 'Kaşan Fin Bahçesi ve Şiraz İrem Bahçesi’nin havuzları ve selvileri', category: 'Mimari', image: ASSETS.services.nasirAlMulkArchitecture.src, aspectClass: 'aspect-[4/3]' },
    { id: '6', title: 'Geleneksel İran Mutfağı', subtitle: 'Safranlı kebaplar, fesencen ve ferahlatıcı bitkisel şerbetler', category: 'Gastronomi', image: ASSETS.services.persianCuisineFeast.src, aspectClass: 'aspect-[3/4]' },
  ],
  zh: [
    { id: '1', title: '伊斯法罕伊玛目广场 (Naqsh-e Jahan)', subtitle: '萨法维王朝建筑奇迹与蓝绿琉璃瓦马赛克艺术', category: '古建筑', image: ASSETS.services.isfahanNaghsheJahan.src, aspectClass: 'aspect-[4/3]' },
    { id: '2', title: '波斯波利斯 (Persepolis)', subtitle: '阿契美尼德帝国辉煌的礼仪帝国首都遗址', category: '历史遗迹', image: ASSETS.services.persepolisHeritage.src, aspectClass: 'aspect-[3/4]' },
    { id: '3', title: '马兰贾卜金色沙漠 (Maranjab)', subtitle: '丝绸之路上的金色沙丘、静谧落日与漫天星河', category: '自然风光', image: ASSETS.services.lutDesertSafari.src, aspectClass: 'aspect-[4/3]' },
    { id: '4', title: '伊斯法罕大巴扎 (Bazaar)', subtitle: '藏红花香气与传承千年的铜盘錾刻及珐琅彩手工作坊', category: '非遗文化', image: ASSETS.services.traditionalBazaarLife.src, aspectClass: 'aspect-[3/4]' },
    { id: '5', title: '联合国世遗名录波斯园林', subtitle: '卡尚费恩花园与设拉子天堂花园的潺潺清泉与古柏', category: '古典园林', image: ASSETS.services.nasirAlMulkArchitecture.src, aspectClass: 'aspect-[4/3]' },
    { id: '6', title: '波斯传统宫廷珍馐盛宴', subtitle: '特级藏红花烤肉、石榴核桃炖鸭与天然花草清酿', category: '美食佳酿', image: ASSETS.services.persianCuisineFeast.src, aspectClass: 'aspect-[3/4]' },
  ],
};

export const JOURNEY_STEPS_BY_LANG: Record<Language, JourneyStep[]> = {
  fa: [
    { number: '۰۱', stepEn: 'Discovery', title: 'ارتباط اولیه و شناخت علایق', description: 'گفتگوی مستقیم با مشاور گردشگری ما برای تعیین سلیقه، سبک سفر و شهرهای مدنظر شما.', details: ['تعیین اولویت‌های تاریخی، فرهنگی یا تفریحی', 'برآورد زمان سفر و ترکیب همسفران'] },
    { number: '۰۲', stepEn: 'Tailored Plan', title: 'طراحی برنامه اختصاصی سفر', description: 'تدوین روزشمار دقیق گشت‌ها، انتخاب هتل‌های متناسب و تایید مسیر رفت‌وآمد.', details: ['پیشنهاد اقامتگاه‌های سنتی یا مدرن لوکس', 'محاسبه شفاف هزینه‌ها و خدمات جانبی'] },
    { number: '۰۳', stepEn: 'Logistics', title: 'ویزا، پرواز و هماهنگی‌ها', description: 'اخذ روادید الکترونیک، رزرو قطعی اقامتگاه‌ها و خودروهای در اختیار.', details: ['صدور سریع ویزای گردشگری ایران', 'رزرو بهترین پروازهای بین‌المللی و داخلی'] },
    { number: '۰۴', stepEn: 'CIP Arrival', title: 'استقبال فرودگاهی و آغاز سفر', description: 'تشریفات اختصاصی در بدو ورود به ایران و هدایت به هتل برای استراحت و شروع برنامه.', details: ['استقبال در سالن تشریفات اختصاصی فرودگاه', 'تحویل سیم‌کارت و ملزومات سفر به مسافر'] },
    { number: '۰۵', stepEn: 'Unforgettable Journey', title: 'اجرای سفر همراه با پشتیبانی ۲۴ ساعته', description: 'همراهی مداوم لیدرهای اختصاصی و پیگیری تیم پشتیبانی تا لحظه بازگشت.', details: ['ارتباط مستقیم با کارشناس در تمام ساعات', 'امکان تغییرات منعطف در برنامه بنا به درخواست'] },
  ],
  en: [
    { number: '01', stepEn: 'Discovery', title: 'Discovery & Preferences', description: 'One-on-one consultation to define your passions, travel pacing, and ideal Iranian destinations.', details: ['Clarifying cultural, nature, or architectural focal points', 'Confirming group dynamics, duration, and seasonality'] },
    { number: '02', stepEn: 'Tailored Plan', title: 'Custom Itinerary Curation', description: 'Formulating a day-by-day blueprint, curating boutique hotels, and finalizing private transport.', details: ['Recommending boutique heritage vs modern 5-star properties', 'Transparent budgeting with zero hidden costs'] },
    { number: '03', stepEn: 'Logistics', title: 'Visa, Ticketing & Logistics', description: 'Securing electronic visa approvals, issuing domestic flights, and chartering private vehicles.', details: ['Fast-track Iranian tourist visa clearances', 'Confirmed reservations on premier flight routes'] },
    { number: '04', stepEn: 'CIP Arrival', title: 'VIP Arrival & Welcoming', description: 'Seamless airport greeting via private CIP terminals and executive transfer to your suite.', details: ['Tarmac reception and expedited passport formalities', 'Local data SIM provision and orientation briefing'] },
    { number: '05', stepEn: 'Unforgettable Journey', title: 'Enriching Journey with 24/7 Concierge', description: 'Guided exploration led by certified experts backed by our round-the-clock support desk.', details: ['Direct hotline to your dedicated journey manager', 'Real-time flexibility to adjust daily schedules'] },
  ],
  ar: [
    { number: '۰۱', stepEn: 'Discovery', title: 'التواصل الأولي وتحديد الرغبات', description: 'محادثة مباشرة مع خبير السياحة لمعرفة تفضيلاتكم، وأسلوب السفر المحبب، والمدن التي تودون زيارتها.', details: ['تحديد الأولويات: تاريخية، طبيعية، تسوق، أو دينية', 'تحديد مدة الرحلة وعدد المرافقين'] },
    { number: '۰۲', stepEn: 'Tailored Plan', title: 'تصميم البرنامج السياحي الخاص', description: 'إعداد جدول يومي مفصل للجولات، واختيار الفنادق الملائمة، وتأكيد مسارات التنقل.', details: ['اقتراح فنادق تراثية فاخرة أو فنادق عصرية 5 نجوم', 'بيان تفصيلي وشفاف لكافة التكاليف والخدمات'] },
    { number: '۰۳', stepEn: 'Logistics', title: 'استخراج التأشيرات وحجز الطيران', description: 'استخراج التأشيرة الإلكترونية السريعة، وتثبيت حجوزات الفنادق والسيارات الخاصة.', details: ['إصدار تأشيرة الدخول السياحية لإيران بسرعة', 'حجز تذاكر الطيران الداخلي والدولي بأفضل المواعيد'] },
    { number: '۰۴', stepEn: 'CIP Arrival', title: 'استقبال المطار وبدء الرحلة', description: 'تشريفات خاصة في صالة كبار الشخصيات بالمطار ونقل مريح إلى الفندق للاستراحة.', details: ['استقبال في صالة كبار الشخصيات CIP وتخليص الإجراءات', 'تسليم خط اتصال وإنترنت محلي للضيف'] },
    { number: '۰۵', stepEn: 'Unforgettable Journey', title: 'جولات ممتعة مع دعم مستمر ۲۴/۷', description: 'مرافقة مرشدين سياحيين محترفين ومتابعة مستمرة من إدارة الشركة حتى لحظة العودة.', details: ['تواصل مباشر مع المنسق الخاص في أي وقت', 'مرونة تامة لتعديل أوقات الجولات اليومية حسب رغبتكم'] },
  ],
  tr: [
    { number: '01', stepEn: 'Discovery', title: 'İlk İletişim ve Tercihlerin Belirlenmesi', description: 'Seyahat danışmanımızla birebir görüşerek ilgi alanlarınızı, seyahat temponuzu ve rotanızı netleştirin.', details: ['Tarihi, kültürel veya doğa odak noktalarının belirlenmesi', 'Seyahat süresi ve katılımcı sayısının planlanması'] },
    { number: '02', stepEn: 'Tailored Plan', title: 'Kişiye Özel Gezi Programının Tasarlanması', description: 'Gün gün detaylandırılmış rota, butik konaklama seçenekleri ve özel ulaşım güzergahının hazırlanması.', details: ['Tarihi butik konaklar veya modern 5 yıldızlı otel alternatifleri', 'Net ve şeffaf maliyet tablosu'] },
    { number: '03', stepEn: 'Logistics', title: 'Vize, Uçak Bileti ve Rezervasyonlar', description: 'Hızlı elektronik vize onayı, iç hat uçuşları ve özel tahsisli araçların kesinleştirilmesi.', details: ['Hızlı İran turist vizesi temini', 'En uygun saatlerde iç ve dış hat uçak biletleri'] },
    { number: '04', stepEn: 'CIP Arrival', title: 'CIP Havalimanı Karşılaması ve Başlangıç', description: 'Özel CIP salonunda beklemesiz karşılama, bagaj formaliteleri ve lüks araçla otele transfer.', details: ['Tarmak karşılama ve CIP salonunda pasaport işlemleri', 'Yerel SIM kart ve seyahat bilgilendirme paketi teslimi'] },
    { number: '05', stepEn: 'Unforgettable Journey', title: '7/24 Kesintisiz Destek ile Unutulmaz Seyahat', description: 'Lisanslı rehberler eşliğinde zengin bir keşif ve operasyon ekibimizden kesintisiz destek.', details: ['Özel seyahat danışmanınızla doğrudan iletişim', 'Programda esnek ve anlık uyarlamalar yapabilme imkanı'] },
  ],
  zh: [
    { number: '01', stepEn: 'Discovery', title: '初步对接与诉求意向沟通', description: '与我们的资深旅行顾问进行一对一深度交流，明确您的偏好主题、旅行节奏与目标城市。', details: ['明确历史、文化、摄影或自然风光重点', '确认出行天数、人数构成及季节偏好'] },
    { number: '02', stepEn: 'Tailored Plan', title: '专属定制行程方案出炉', description: '制定精确到每日时段的详细活动日程，精选特色精品行馆并核定私密专属专车路线。', details: ['对比推荐历史文化特色客栈与五星级酒店', '费用明码标价，无任何隐形附加支出'] },
    { number: '03', stepEn: 'Logistics', title: '签证审批、机票与落地保障', description: '高效申办伊朗电子旅游签证，锁定境内外航班黄金班次并调度专属商务专车。', details: ['加急办理伊朗旅游签证 (E-Visa)', '预留最舒适时段的国际与国内航班座位'] },
    { number: '04', stepEn: 'CIP Arrival', title: '机场CIP贵宾楼尊享迎送', description: '专员停机坪舷梯接送，在独立贵宾室享用茶点，由专员代办通关取件后送抵酒店休整。', details: ['舷梯专车接机与VIP贵宾楼边检通关', '现场交付高速数据电话卡及行前实用包'] },
    { number: '05', stepEn: 'Unforgettable Journey', title: '全程陪伴与24小时专属管家', description: '资深持证双语向导随行细致讲解，专属个案协调员24小时在线护航直至圆满返程。', details: ['专属行程经理24小时随时保持直线通畅', '旅途中可根据临时意向灵活微调当日节奏'] },
  ],
};

export const TOURISM_CTA_BY_LANG = {
  fa: {
    badge: 'برنامه‌ریزی سفری متمایز و به‌یادماندنی',
    title: 'سفر رویایی خود به ایران را با خیالی آسوده آغاز کنید',
    subtitle: 'همین حالا با مشاوران ارشد ما گفتگو کنید تا متناسب با علایق و زمان شما، برنامه‌ای بی‌نظیر و اختصاصی طراحی کنیم.',
    ctaUrl: CONSULTATION_URL,
    ctaText: 'شروع گفتگو و درخواست برنامه اختصاصی',
    benefits: [
      'راهنمای مجرب چندزبانه مسلط به تاریخ و فرهنگ ایران',
      'امنیت و پشتیبانی کامل ۲۴ ساعته در سراسر کشور',
      'انعطاف‌پذیری و شخصی‌سازی کامل برنامه‌های سفر',
    ],
  },
  en: {
    badge: 'Curate a Distinctive Journey',
    title: 'Begin Your Persian Odyssey with Unmatched Peace of Mind',
    subtitle: 'Consult directly with our bespoke journey curators to tailor a customized itinerary reflecting your passions and timeline.',
    ctaUrl: CONSULTATION_URL,
    ctaText: 'Start Consultation & Request Itinerary',
    benefits: [
      'Licensed multilingual cultural guides throughout Iran',
      '24/7 dedicated executive security & concierge support',
      'Total flexibility & bespoke customized itinerary design',
    ],
  },
  ar: {
    badge: 'تخطيط رحلة استثنائية لا تُنسى',
    title: 'ابدأ رحلتك السياحية الفاخرة إلى إيران بكل طمأنينة وراحة',
    subtitle: 'تواصل الآن مباشرة مع مستشارينا لتصميم جدول سياحي مخصص يلبي تطلعاتكم ويراعي أدق التفاصيل.',
    ctaUrl: CONSULTATION_URL,
    ctaText: 'طلب استشارة وتصميم برنامج سياحي خاص',
    benefits: [
      'مرشدون سياحيون محترفون يجيدون العربية والإنجليزية',
      'دعم تشريفي ومرافقة ميدانية على مدار الساعة',
      'مرونة كاملة لتخصيص جدول الرحلة بما يلائم الضيوف',
    ],
  },
  tr: {
    badge: 'Ayrıcalıklı Bir Seyahat Planlayın',
    title: 'İran Seyahatinize Tam Bir Güven ve Huzurla Başlayın',
    subtitle: 'Zamanınıza ve zevklerinize göre benzersiz bir seyahat programı hazırlamak için uzman danışmanlarımızla hemen iletişime geçin.',
    ctaUrl: CONSULTATION_URL,
    ctaText: 'Danışmanlığa Başlayın ve Özel Plan İsteyin',
    benefits: [
      'İran tarihi ve kültürüne hakim çok dilli lisanslı rehberler',
      'Ülke genelinde 7/24 özel operasyon ve güvenlik desteği',
      'Seyahat planında tam esneklik ve kişiselleştirme',
    ],
  },
  zh: {
    badge: '开启与众不同的尊贵之旅',
    title: '满怀从容与笃定，开启您的波斯绮丽探索',
    subtitle: '立即联系我们的资深旅行定制顾问，根据您的宝贵时间和独特品位，为您精心构筑无与伦比的专属行程。',
    ctaUrl: CONSULTATION_URL,
    ctaText: '开启咨询并索取专属旅行方案',
    benefits: [
      '精通波斯历史文化的专业持证多语种向导团队',
      '覆盖伊朗全境的24小时不间断安全礼宾保障',
      '全程行程设计完全定制化，随心调整弹性自如',
    ],
  },
};

export const getTourismHeroData = (lang: Language = 'fa') => TOURISM_HERO_BY_LANG[lang] || TOURISM_HERO_BY_LANG.fa;
export const getTourismIntroData = (lang: Language = 'fa') => TOURISM_INTRO_BY_LANG[lang] || TOURISM_INTRO_BY_LANG.fa;
export const getTourismServicesData = (lang: Language = 'fa') => TOURISM_SERVICES_BY_LANG[lang] || TOURISM_SERVICES_BY_LANG.fa;
export const getExperiencesData = (lang: Language = 'fa') => EXPERIENCES_BY_LANG[lang] || EXPERIENCES_BY_LANG.fa;
export const getJourneySteps = (lang: Language = 'fa') => JOURNEY_STEPS_BY_LANG[lang] || JOURNEY_STEPS_BY_LANG.fa;
export const getTourismCta = (lang: Language = 'fa') => TOURISM_CTA_BY_LANG[lang] || TOURISM_CTA_BY_LANG.fa;

export const getTourismHero = getTourismHeroData;
export const getTourismIntro = getTourismIntroData;
export const getTourismServices = getTourismServicesData;
export const getPersonalizedSteps = getJourneySteps;
export const getExperienceIranMasonry = getExperiencesData;

export const HERO_DATA = TOURISM_HERO_BY_LANG.fa;
export const INTRO_DATA = TOURISM_INTRO_BY_LANG.fa;
export const SERVICES_DATA = TOURISM_SERVICES_BY_LANG.fa;
export const EXPERIENCES_DATA = EXPERIENCES_BY_LANG.fa;
export const JOURNEY_STEPS = JOURNEY_STEPS_BY_LANG.fa;

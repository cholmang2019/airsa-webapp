import { Language } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

export const VIP_CONSULTATION_URL = 'https://medixmaster.com/contact-us/';

export interface VipServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  features: string[];
}

export interface VipTimelineStep {
  stepEn: string;
  stepFa: string;
  title: string;
  lead: string;
  description: string;
  badge: string;
}

export interface VipHeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
}

export interface VipExperienceData {
  title: string;
  lead: string;
  description: string;
  image: string;
  pillars: { title: string; desc: string }[];
}

export interface VipHospitalityOverview {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
}

export interface VipBrandStatement {
  title: string;
  statement: string;
  faTitle: string;
  faStatement: string;
  quote: string;
  author: string;
  role: string;
  principles: { title: string; desc: string }[];
}

export interface VipCtaData {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const VIP_HERO_BY_LANG: Record<Language, VipHeroData> = {
  fa: {
    title: '«سفر، فراتر از انتظار»',
    subtitle: '«خدمات VIP اختصاصی برای تجربه‌ای آرام، شخصی‌سازی‌شده و حرفه‌ای.»',
    ctaText: '«درخواست خدمات VIP»',
    image: ASSETS.hero.travelServices.src,
  },
  en: {
    title: 'Travel Beyond Expectations',
    subtitle: 'Exclusive VIP and CIP concierge services designed for serene, tailored, and distinguished journeys in Iran.',
    ctaText: 'Request VIP Concierge',
    image: ASSETS.hero.travelServices.src,
  },
  ar: {
    title: '«سفر يتجاوز التوقعات»',
    subtitle: '«خدمات تشريفات كبار الشخصيات VIP لتجربة هادئة، مخصصة، واحترافية بأعلى المقاييس.»',
    ctaText: '«طلب خدمات كبار الشخصيات VIP»',
    image: ASSETS.hero.travelServices.src,
  },
  tr: {
    title: '«Beklentilerin Ötesinde Bir Seyahat»',
    subtitle: '«İran’da huzurlu, kişiselleştirilmiş ve prestijli bir deneyim için seçkin VIP ve CIP konsiyerj hizmetleri.»',
    ctaText: '«VIP Hizmet Talep Edin»',
    image: ASSETS.hero.travelServices.src,
  },
  zh: {
    title: '«超越期待的尊荣旅程»',
    subtitle: '«专属VIP与CIP私人礼宾服务，在伊朗为您缔造从容、尊贵且高度定制的非凡体验。»',
    ctaText: '«申请VIP专属礼遇»',
    image: ASSETS.hero.travelServices.src,
  },
};

export const VIP_EXPERIENCE_BY_LANG: Record<Language, VipExperienceData> = {
  fa: {
    title: '«یک همراه اختصاصی در مسیر شما»',
    lead: 'آرامش خاطر مطلق در گرو حضور دستیاری اختصاصی است که پیش از بروز هر نیازی، پاسخ آن را مهیا ساخته است.',
    description: 'در سطح خدمات VIP ایرسا سیمرغ جهان، یک کانسی‌یژ ارشد و اختصاصی مسلط به زبان و پروتکل‌های تشریفات بین‌المللی در تمامی مراحل سفر همراه شماست. از هماهنگی گیت‌های اختصاصی فرودگاه و انتقال بی‌وقفه چمدان‌ها گرفته تا شخصی‌سازی اقامتگاه، رزرواسیون‌های ویژه، تنظیم ملاقات‌های پزشکی و رفع موانع زبانی، تمامی امور با بالاترین ضریب محرمانگی و دقت میلی‌متری به انجام می‌رسد.',
    image: ASSETS.team.medicalCoordinator.src,
    pillars: [
      { title: 'محرمانگی و حریم خصوصی', desc: 'حفاظت کامل از اطلاعات، هویت و آرامش فردی مهمانان' },
      { title: 'پاسخگویی بی‌وقفه ۲۴/۷', desc: 'ارتباط مستقیم اختصاصی در تمامی ساعات شبانه‌روز' },
      { title: 'شخصی‌سازی نامحدود', desc: 'تنظیم جزئی‌ترین جزئیات سفر طبق اولویت‌ها و سلیقه شما' },
    ],
  },
  en: {
    title: 'A Dedicated Concierge by Your Side',
    lead: 'Absolute serenity comes from having an executive assistant who anticipates your desires before they even arise.',
    description: 'With Airsa Simorgh Jahan VIP tier, a senior bilingual concierge fluent in diplomatic protocols accompanies your entire journey. From fast-tracked tarmac aircraft transfers and seamless luggage handling to private boutique suite customizations, medical appointments, and bespoke excursions—every detail is executed with pinpoint precision and absolute discretion.',
    image: ASSETS.team.medicalCoordinator.src,
    pillars: [
      { title: 'Total Discretion & Privacy', desc: 'Ironclad safeguards for personal identity, travel schedules, and confidential matters.' },
      { title: '24/7 Dedicated Availability', desc: 'Direct, dedicated line to your personal concierge around the clock.' },
      { title: 'Infinite Personalization', desc: 'Every aspect of the itinerary tailored precisely to your personal preferences and standards.' },
    ],
  },
  ar: {
    title: '«مرافق خاص ومساعد حصري طوال رحلتكم»',
    lead: 'راحة البال الحقيقية تتجلى في وجود مساعد تنفيذي خاص يتوقع احتياجاتكم ويجهزها قبل أن تطلبوها.',
    description: 'في باقة خدمات VIP من إيرسا سيمرغ جهان، يرافقكم منسق ومساعد تنفيذي متمرس يجيد لغتكم ومتقن لبروتوكولات الضيافة الدولية في كل خطوة. بدءاً من استقبال مدرج الطائرة، وتخليص الحقائب السريع، وترتيب أجنحة الإقامة الملكية، والمواعيد الطبية الحصرية، والتنقلات الفارهة، وتذليل أي عائق لغوي بأعلى درجات السرية والدقة المتناهية.',
    image: ASSETS.team.medicalCoordinator.src,
    pillars: [
      { title: 'السرية والخصوصية التامة', desc: 'حماية كاملة للبيانات الشخصية وجداول السفر لراحة بال الضيوف.' },
      { title: 'تواجد مستمر على مدار ۲۴/۷', desc: 'خط اتصال مباشر وخاص مع المساعد التنفيذي في أي وقت.' },
      { title: 'تخصيص كامل ومرن', desc: 'تصميم أدق تفاصيل البرنامج حسب ذوقكم واختياراتكم المفضلة.' },
    ],
  },
  tr: {
    title: '«Yolculuğunuz Boyunca Özel Bir Konsiyerj»',
    lead: 'Gerçek huzur, ihtiyaçlarınız daha ortaya çıkmadan çözümünü hazırlayan özel bir yönetici asistanıyla mümkündür.',
    description: 'Airsa Simorgh Jahan VIP hizmet seviyesinde, dilinizi akıcı konuşan ve diplomatik protokollere hakim kıdemli bir konsiyerj seyahatinizin her adımında size refakat eder. Uçak merdiveninde özel araçla karşılamadan bagaj teslimine, butik süit rezervasyonlarından hekim randevularına kadar her detay sıfır aksamayla ve tam gizlilik içinde yönetilir.',
    image: ASSETS.team.medicalCoordinator.src,
    pillars: [
      { title: 'Mutlak Gizlilik ve Mahremiyet', desc: 'Misafirlerimizin kimliği, seyahat planları ve kişisel verileri tam güvence altındadır.' },
      { title: '7/24 Kesintisiz İletişim', desc: 'Günün her saatinde özel danışmanınıza doğrudan erişim hattı.' },
      { title: 'Sınırsız Kişiselleştirme', desc: 'Programın her ayrıntısı kişisel tercihlerinize ve beklentilerinize göre uyarlanır.' },
    ],
  },
  zh: {
    title: '«专属私人管家全程陪伴»',
    lead: '真正的安心无忧，源于拥有一位在您提出需求之前便已筹备就绪的专属行政管家。',
    description: '在艾尔萨·西摩格的高端VIP服务体系中，一位通晓外事涉外礼仪且精通中文与波斯语的双语资深管家将全程陪伴您的在伊时光。从停机坪专车迎送与专人免排队行李提取，到奢华套房个性化布置、权威医生绿色会诊安排与无障碍跨语言沟通，所有事宜均以极高私密性与精准度细致推进。',
    image: ASSETS.team.medicalCoordinator.src,
    pillars: [
      { title: '绝对隐私与信息保密', desc: '严密保护客人的身份信息、商务行程与就诊记录。' },
      { title: '24/7 全天候即时响应', desc: '专属管家专线随时通畅，全时段处理突发与临时需求。' },
      { title: '无限尊崇个性化定制', desc: '严格按照您的生活品味、时间节奏与出行习惯定制全部细节。' },
    ],
  },
};

export const VIP_HOSPITALITY_BY_LANG: Record<Language, VipHospitalityOverview> = {
  fa: {
    tag: 'استاندارد ممتاز تشریفات',
    title: 'آرامش بی‌دغدغه، هماهنگی بی‌نقص',
    subtitle: '«هنر میزبانی لوکس، در پیش‌بینی جزئیاتی است که شما هنوز به آن فکر نکرده‌اید.»',
    description: 'تجربه سفر تشریفاتی در ایرسا سیمرغ جهان تنها معطوف به امکانات مجلل نیست؛ بلکه حاصل هماهنگی شبکه‌ای یکپارچه از متخصصان تشریفات فرودگاهی، رانندگان مجرب ناوگان VIP، مدیران اقامتگاه‌های ۵ ستاره و مشاوران زبده است. ما تمامی دسترسی‌ها، زمان‌بندی‌ها و ترتیبات اداری را پیش از حضور شما نهایی می‌کنیم تا جریان سفر با بیشترین آرامش و بدون کوچک‌ترین اتلاف وقت طی شود.',
    image: ASSETS.services.seamlessTravel.src,
    highlights: [
      { title: 'مدیریت دقیق زمان و تردد', desc: 'تردد روان در گیت‌ها و ترانسفرهای اختصاصی بدون کوچک‌ترین توقف یا معطلی.' },
      { title: 'انتخاب اختصاصی اقامتگاه و سوئیت', desc: 'دسترسی به برترین سوئیت‌های دیپلماتیک و بوتیک‌هتل‌های نامدار با خدمات اختصاصی.' },
      { title: 'حفظ حریم امن و آرامش مسافر', desc: 'رعایت کلیه موازین امنیتی، حریم خصوصی و پروتکل‌های محرمانگی در تمامی مقاصد.' },
    ],
    stats: [
      { value: '۱۰۰٪', label: 'تضمین محرمانگی' },
      { value: '۲۴/۷', label: 'پشتیبانی اختصاصی' },
      { value: 'صفر', label: 'معطلی در صفوف' },
    ],
  },
  en: {
    tag: 'Distinguished Protocol Standard',
    title: 'Flawless Coordination, Serene Luxury',
    subtitle: '«The art of luxury hospitality lies in anticipating the details you have not yet contemplated.»',
    description: 'The VIP experience with Airsa Simorgh Jahan is not merely about upscale amenities; it is powered by an interconnected network of airport CIP officers, executive chauffeurs, 5-star hotel general managers, and medical directors. We finalize every permit, fast-track, and schedule in advance so your trip unfolds effortlessly without a second wasted.',
    image: ASSETS.services.seamlessTravel.src,
    highlights: [
      { title: 'Rigorous Time Management', desc: 'Fluid movement through gates and private transfers without public delays.' },
      { title: 'Curated Diplomatic Suites', desc: 'Direct access to premier presidential suites and historic luxury boutique properties.' },
      { title: 'Uncompromising Guest Privacy', desc: 'Strict observance of security norms, personal discretion, and non-disclosure standards.' },
    ],
    stats: [
      { value: '100%', label: 'Discretion Guarantee' },
      { value: '24/7', label: 'Executive Support' },
      { value: 'Zero', label: 'Queue Time' },
    ],
  },
  ar: {
    tag: 'معايير التشريفات الممتازة',
    title: 'تنسيق متقن وراحة ملكية فاخرة',
    subtitle: '«فن الضيافة الراقية يكمن في استباق التفاصيل التي لم تفكر بها بعد.»',
    description: 'تجربة السفر الدبلوماسي مع إيرسا سيمرغ جهان تتعدى مجرد التجهيزات الفارهة؛ إنها ثمرة شبكة محترفة تضم مسؤولي تشريفات المطارات، وسائقي الأسطول التنفيذي، ومديري الفنادق الراقية، وكبار الأطباء. نحن ننهي جميع التراخيص والإجراءات المسبقة لتسير رحلتكم بسلاسة مطلقة وبدون أي هدر للوقت.',
    image: ASSETS.services.seamlessTravel.src,
    highlights: [
      { title: 'إدارة دقيقة للوقت والحركة', desc: 'تنقل سلس ومباشر عبر بوابات المطارات وسيارات النقل الخاص دون أي توقف أو انتظار.' },
      { title: 'أجنحة رئاسية وفندقية مختارة', desc: 'إتاحة الوصول إلى أفخم الأجنحة الدبلوماسية والقصور التراثية الفاخرة مع خدمات خاصة.' },
      { title: 'حماية أمن وخصوصية الضيف', desc: 'مراعاة تامة لكافة المعايير الأمنية وبروتوكولات السرية والراحة الشخصية.' },
    ],
    stats: [
      { value: '۱۰۰٪', label: 'ضمان الخصوصية والسرية' },
      { value: '۲۴/۷', label: 'دعم ومرافقة مستمرة' },
      { value: 'صفر', label: 'انتظار في الطوابير' },
    ],
  },
  tr: {
    tag: 'Seçkin Protokol Standardı',
    title: 'Kaygısız Bir Huzur, Kusursuz Bir Koordinasyon',
    subtitle: '«Lüks misafirperverlik sanatı, henüz aklınıza gelmemiş ayrıntıları önceden sezebilmektir.»',
    description: 'Airsa Simorgh Jahan’da VIP seyahat sadece lüks imkanlardan ibaret değildir; havalimanı protokol yetkilileri, deneyimli VIP şoförleri, 5 yıldızlı otel yöneticileri ve uzman danışmanların entegre uyumudur. Tüm erişim ve randevuları siz gelmeden tamamlayarak zamanınızı en verimli ve huzurlu şekilde geçirmenizi sağlıyoruz.',
    image: ASSETS.services.seamlessTravel.src,
    highlights: [
      { title: 'Dakik Zaman ve Transfer Yönetimi', desc: 'Havalimanı kapılarında ve transferlerde sıra beklemeden akıcı geçiş.' },
      { title: 'Özel Süit ve Konaklama Seçimi', desc: 'En seçkin diplomatik süitlere ve butik saray otellere özel erişim.' },
      { title: 'Güvenli ve Huzurlu Bir Mahremiyet Alanı', desc: 'Tüm destinasyonlarda uluslararası güvenlik ve tam gizlilik protokolleri.' },
    ],
    stats: [
      { value: '%100', label: 'Gizlilik Garantisi' },
      { value: '7/24', label: 'Özel Konsiyerj' },
      { value: 'Sıfır', label: 'Sırada Bekleme' },
    ],
  },
  zh: {
    tag: '卓越涉外礼宾规格',
    title: '从容安宁，无可挑剔的高效协调',
    subtitle: '«奢华款待的至高境界，在于提前洞察并妥帖安排您尚未言明的期许。»',
    description: '在艾尔萨·西摩格，高端定制出行绝不仅仅是奢华硬件的罗列；它由机场CIP礼宾官员、专业国宾车队司机、五星级酒店总经理及资深医疗总监共同构成的协作网络有力驱动。我们在您抵达前便办妥全部通行许可、绿色通道与保密安排，确保行程流畅无阻。',
    image: ASSETS.services.seamlessTravel.src,
    highlights: [
      { title: '严谨的时效与通行管理', desc: '在口岸出入境、机场要客通道及城际专车中享有毫无停滞的流畅通行。' },
      { title: '甄选总统套房与外交级寓所', desc: '直通各核心城市顶奢酒店的总统套房及受保护的历史精品私密宅邸。' },
      { title: '恪守安全准则与个人隐私', desc: '在所有拜访、会谈与诊疗场景中全面执行保密守则与安全防护规范。' },
    ],
    stats: [
      { value: '100%', label: '绝对信息隐私保障' },
      { value: '24/7', label: '专属管家专班守护' },
      { value: '零', label: '公共区域排队等候' },
    ],
  },
};

export const VIP_SERVICES_BY_LANG: Record<Language, VipServiceItem[]> = {
  fa: [
    {
      id: 'vip-airport-arrival',
      title: 'استقبال VIP فرودگاه',
      subtitle: 'تشریفات اختصاصی CIP پای پرواز',
      description: 'خروج اختصاصی پای پلکان هواپیما با خودروی تشریفاتی، پذیرایی در سالن اختصاصی CIP، و انجام کلیه تشریفات گذرنامه و تحویل چمدان بدون معطلی در صفوف عمومی.',
      tag: 'Fast-Track & CIP Lounge',
      image: ASSETS.services.cipAirportLounge.src,
      features: [
        'انتقال اختصاصی پای پرواز با خودروی تشریفات',
        'پذیرایی در سالن‌های VIP و استراحت مسافر',
        'اخذ بار و کنترل گذرنامه توسط تیم تشریفات',
      ],
    },
    {
      id: 'vip-transfer',
      title: 'ترانسفر اختصاصی',
      subtitle: 'ناوگان لوکس خودروهای تشریفاتی',
      description: 'ناوگان مدرن از برترین خودروهای تشریفاتی روز دنیا همراه با رانندگان زبده، مسلط به آداب مهمانداری و متعهد به حفظ کامل حریم خصوصی و امنیت سفر.',
      tag: 'Chauffeur & Fleet VIP',
      image: ASSETS.services.privateTransfer.src,
      features: [
        'خودروهای مدرن کلاس لوکس با سیستم تهویه مطبوع پیشرفته',
        'رانندگان مسلط به زبان‌های بین‌المللی و آداب دیپلماتیک',
        'سرویس‌های در اختیار شهری، بین‌شهری و تشریفاتی',
      ],
    },
    {
      id: 'vip-stay',
      title: 'اقامت ویژه',
      subtitle: 'سوئیت‌های منتخب در بهترین هتل‌ها',
      description: 'رزرو برترین سوئیت‌های لوکس و پنت‌هاوس‌های اختصاصی در هتل‌های تراز اول ۵ ستاره یا بوتیک‌هتل‌های نامدار با خدمات خدمتکار اختصاصی (Butler).',
      tag: 'Royal Suites & Hotels',
      image: ASSETS.services.hotelAccommodation.src,
      features: [
        'رزرو سوئیت‌های رویال، پرزیدنتال و دیپلماتیک',
        'خدمات باتلر اختصاصی و پذیرایی ۲۴ ساعته',
        'امکانات کامل استراحت، درمان و جلسات کاری',
      ],
    },
    {
      id: 'vip-concierge',
      title: 'همراه اختصاصی',
      subtitle: 'دستیار شخصی در تمام طول مسیر',
      description: 'حضور تمام‌وقت یک کانسی‌یژ ارشد با دانش بومی و تسلط کامل بر امور اداری، پزشکی و گردشگری برای حل فوری تمام نیازها و رفع موانع زبانی.',
      tag: 'Executive Concierge',
      image: ASSETS.team.medicalCoordinator.src,
      features: [
        'هماهنگی مستقیم جلسات پزشکی، تجاری و تفریحی',
        'همراهی در تمام مراحل بدون وقفه و با محرمانگی کامل',
        'رفع موانع زبانی و ترجمه رسمی مذاکرات و مدارک',
      ],
    },
  ],
  en: [
    {
      id: 'vip-airport-arrival',
      title: 'Airport CIP Welcoming',
      subtitle: 'Private Tarmac Meet & Greet',
      description: 'Tarmac aircraft pick-up in executive vehicle, relaxing hospitality at the dedicated CIP lounge, and complete luggage customs handling while you unwind.',
      tag: 'Fast-Track & CIP Lounge',
      image: ASSETS.services.cipAirportLounge.src,
      features: [
        'Private chauffeured ramp transit right from the aircraft stairs',
        'Full access to luxury CIP lounge with gourmet catering',
        'Priority baggage retrieval and diplomatic passport stamping',
      ],
    },
    {
      id: 'vip-transfer',
      title: 'Chauffeured Fleet',
      subtitle: 'Executive Luxury Transport',
      description: 'Modern fleet of high-end vehicles accompanied by multilingual executive chauffeurs trained in diplomatic etiquette and security norms.',
      tag: 'Chauffeur & Fleet VIP',
      image: ASSETS.services.privateTransfer.src,
      features: [
        'Modern premium sedans and luxury executive vans with climate control',
        'English/Arabic speaking chauffeurs adept in diplomatic discretion',
        'Available on-demand for full-day charters and private intercity touring',
      ],
    },
    {
      id: 'vip-stay',
      title: 'Bespoke Luxury Stays',
      subtitle: 'Presidential & Diplomatic Suites',
      description: 'Handpicked presidential suites and historic royal mansions with 24/7 dedicated butler service and enhanced sanitary standards.',
      tag: 'Royal Suites & Hotels',
      image: ASSETS.services.hotelAccommodation.src,
      features: [
        'Confirmed reservations in Royal, Presidential, and Diplomatic suites',
        'Dedicated butler service and custom dietary preparations',
        'Discreet settings optimal for private recovery or confidential meetings',
      ],
    },
    {
      id: 'vip-concierge',
      title: 'Personal Executive Concierge',
      subtitle: 'Your Dedicated Journey Assistant',
      description: 'Full-time accompaniment by a senior concierge possessing profound local insights, medical logistics mastery, and linguistic fluency.',
      tag: 'Executive Concierge',
      image: ASSETS.team.medicalCoordinator.src,
      features: [
        'Instant coordination of medical, corporate, and leisure schedules',
        'Uninterrupted discreet presence whenever and wherever required',
        'Native translation of clinical consultations and commercial documents',
      ],
    },
  ],
  ar: [
    {
      id: 'vip-airport-arrival',
      title: 'استقبال كبار الشخصيات CIP',
      subtitle: 'تشريفات خاصة عند مدرج الطائرة',
      description: 'استقبال فوري بسيارة خاصة عند سلم الطائرة، والضيافة في صالة CIP الفخمة، وتولي فريقنا لكافة إجراءات الجوازات واستلام الأمتعة بدون وقوف في الطوابير.',
      tag: 'Fast-Track & CIP Lounge',
      image: ASSETS.services.cipAirportLounge.src,
      features: [
        'نقل خاص بسيارة فاخرة من مدرج الطائرة مباشرة إلى صالة الاستقبال',
        'استراحة وضيافة راقية في صالات كبار الشخصيات المجهزة بالكامل',
        'استلام الأمتعة وختم الجوازات بسرعة واحترافية عالية عبر مسار خاص',
      ],
    },
    {
      id: 'vip-transfer',
      title: 'المواصلات التنفيذية الفاخرة',
      subtitle: 'أسطول سيارات حديث مع سائق خاص',
      description: 'أسطول حديث من أفخم السيارات الفارهة، يقودها سائقون محترفون يتحدثون لغات متعددة وملتزمون بأعلى معايير اللباقة والخصوصية والأمان.',
      tag: 'Chauffeur & Fleet VIP',
      image: ASSETS.services.privateTransfer.src,
      features: [
        'أحدث موديلات السيارات الفاخرة المريحة والمجهزة بأنظمة تكييف متطورة',
        'سائقون يجيدون العربية والإنجليزية ولديهم دراية بالبروتوكولات الرسمية',
        'سيارات تحت الطلب للجولات الداخلية وبين المدن الإيرانية',
      ],
    },
    {
      id: 'vip-stay',
      title: 'الإقامة الفندقية الملكية',
      subtitle: 'أجنحة رئاسية في أفضل الفنادق',
      description: 'حجز أرقى الأجنحة الملكية والبنتهاوس في فنادق 5 نجوم والقصور التراثية الفخمة، مع توفير خدمة الخادم الخاص (Butler) لتلبية كل الرغبات.',
      tag: 'Royal Suites & Hotels',
      image: ASSETS.services.hotelAccommodation.src,
      features: [
        'حجوزات للأجنحة الملكية والرئاسية والدبلوماسية الفسيحة',
        'خدمة الخادم الشخصي وتقديم أشهى المأكولات على مدار ۲۴ ساعة',
        'بيئة هادئة ومثالية للاستشفاء الصحي أو عقد الاجتماعات الهامة',
      ],
    },
    {
      id: 'vip-concierge',
      title: 'المساعد الشخصي الحصري',
      subtitle: 'رفيقكم التنفيذي طوال مدة الإقامة',
      description: 'مرافقة مستمرة من قبل خبير تشريفات يجيد العربية ولديه خبرة واسعة في الإجراءات الطبية والقانونية والسياحية لحل أي متطلب فوراً.',
      tag: 'Executive Concierge',
      image: ASSETS.team.medicalCoordinator.src,
      features: [
        'تنظيم وتنسيق المواعيد الطبية والعمليات والجولات الترفيهية',
        'مرافقة متواصلة بسرية تامة واهتمام بأدق التفاصيل',
        'ترجمة فورية وتسهيل كافة التعاملات الرسمية والتجارية',
      ],
    },
  ],
  tr: [
    {
      id: 'vip-airport-arrival',
      title: 'Havalimanı CIP Karşılama',
      subtitle: 'Uçak Merdiveninde Özel CIP Protokolü',
      description: 'Uçak kapısında lüks araçla karşılama, özel CIP lounge salonunda dinlenme ve gurme ikramlar eşliğinde pasaport ve bagaj işlemlerinin tamamlanması.',
      tag: 'Fast-Track & CIP Lounge',
      image: ASSETS.services.cipAirportLounge.src,
      features: [
        'Uçak kapısından özel araçla piste doğrudan transfer',
        'Seçkin CIP salonunda dinlenme ve gurme ikramlar',
        'Bagaj alımı ve pasaport işlemlerinin ekipçe yapılması',
      ],
    },
    {
      id: 'vip-transfer',
      title: 'Özel Şoförlü Lüks Filo',
      subtitle: 'Üst Segment Protokol Araçları',
      description: 'Diplomatik protokollere hakim, yabancı dil bilen profesyonel şoförler eşliğinde son model lüks araçlarla güvenli ve konforlu ulaşım.',
      tag: 'Chauffeur & Fleet VIP',
      image: ASSETS.services.privateTransfer.src,
      features: [
        'Gelişmiş iklimlendirme ve konfor donanımlı lüks araçlar',
        'Uluslararası nezaket kurallarına hakim deneyimli şoförler',
        'Şehir içi, şehirler arası ve tahsisli özel transferler',
      ],
    },
    {
      id: 'vip-stay',
      title: 'Ayrıcalıklı Konaklama',
      subtitle: 'En Seçkin 5 Yıldızlı Otel ve Süitler',
      description: 'İran’ın en prestijli 5 yıldızlı otellerinde ve tarihi butik saraylarında başkanlık, kraliyet ve diplomatik süit rezervasyonları ve özel butler hizmeti.',
      tag: 'Royal Suites & Hotels',
      image: ASSETS.services.hotelAccommodation.src,
      features: [
        'Royal, Presidential ve Diplomatik süit rezervasyonları',
        'Özel butler (hizmetkar) ve 24 saat oda servisi ayrıcalığı',
        'Dinlenme, tedavi ve iş görüşmelerine tam uyumlu süitler',
      ],
    },
    {
      id: 'vip-concierge',
      title: 'Kişisel Konsiyerj',
      subtitle: 'Tüm Seyahat Boyunca Özel Asistanınız',
      description: 'Tıbbi, idari ve turistik süreçleri anında çözmek ve dil engelini kaldırmak için ana dilinizde size eşlik eden tam zamanlı kıdemli danışman.',
      tag: 'Executive Concierge',
      image: ASSETS.team.medicalCoordinator.src,
      features: [
        'Sağlık randevuları, iş toplantıları ve turların koordinasyonu',
        'Tam mahremiyet ve sıfır aksamayla sürekli eşlik',
        'Anlık tercüme ve resmi işlemlerin kolaylaştırılması',
      ],
    },
  ],
  zh: [
    {
      id: 'vip-airport-arrival',
      title: '机场CIP贵宾要客迎送',
      subtitle: '停机坪舷梯专车与独立贵宾楼通道',
      description: '客机落地后舷梯专车直接接驳至机场CIP贵宾楼，在幽雅独立茶歇厅享用精致茶点，专员代办海关边检盖章与行李提取送上专车。',
      tag: 'Fast-Track & CIP Lounge',
      image: ASSETS.services.cipAirportLounge.src,
      features: [
        '飞机舷梯口停机坪豪华轿车专车直接接机',
        '在专属CIP贵宾厅休憩，专享精品茶歇与咖啡',
        '免去公共航站楼排队，由专员全权代办出入境与托运行李',
      ],
    },
    {
      id: 'vip-transfer',
      title: '专属带驾国宾车队',
      subtitle: '高规格豪华商务车与专业礼宾司机',
      description: '车况崭新的高规格豪华商务车与高级轿车，配以受过外事安全与涉外礼节培训的专业专职司机，保障全天候安全出行。',
      tag: 'Chauffeur & Fleet VIP',
      image: ASSETS.services.privateTransfer.src,
      features: [
        '配备高级空气净化系统与极致舒适软装的豪华座驾',
        '精通商务礼仪与安全保卫守则的资深专职司机',
        '支持市内点对点、全日专属包车及跨省城际专程接送',
      ],
    },
    {
      id: 'vip-stay',
      title: '皇家级尊尚套房住宿',
      subtitle: '精选顶奢五星级酒店总统套房与行馆',
      description: '下榻伊朗各重点城市经严苛标准甄选的奢华五星级酒店总统套房、外交套房或典藏级皇家历史行馆，配备私人英式管家服务。',
      tag: 'Royal Suites & Hotels',
      image: ASSETS.services.hotelAccommodation.src,
      features: [
        '优先锁定制高规格总统套房、皇家套房与外交级寓所',
        '专享24小时私人管家服务、客房送餐及专属入住手续',
        '私密静谧的环境高度适配商务闭门谈判与术后宁静调养',
      ],
    },
    {
      id: 'vip-concierge',
      title: '专属中文私人礼宾官',
      subtitle: '贯穿全行程的高级双语事务专员',
      description: '一位熟稔涉外政商礼仪、医疗体系与旅行文脉的资深双语礼宾官全天候待命，协助处理一切沟通对接与行程需求。',
      tag: 'Executive Concierge',
      image: ASSETS.team.medicalCoordinator.src,
      features: [
        '名医门诊手术、高阶商务洽谈与私密游览的高效协调',
        '严格遵守职业保密协议，全程无微不至体贴陪伴',
        '提供流畅的现场中文口译与涉外文件手续快速指引',
      ],
    },
  ],
};

export const VIP_TIMELINE_BY_LANG: Record<Language, VipTimelineStep[]> = {
  fa: [
    {
      stepEn: '01',
      stepFa: '۰۱',
      title: 'مشاوره و طراحی اختصاصی سفر',
      lead: 'شنیدن خواسته‌ها و تدوین برنامه‌ای بی‌نقص پیش از شروع مسیر',
      description: 'بررسی علایق، نیازهای درمانی یا تجاری، انتخاب سوئیت مناسب و صدور روادید VIP با دعوت‌نامه رسمی.',
      badge: 'قبل از حرکت',
    },
    {
      stepEn: '02',
      stepFa: '۰۲',
      title: 'استقبال CIP پای پرواز',
      lead: 'ورودی آرام بدون توقف در سالن‌های عمومی',
      description: 'خروج اختصاصی از پای پلکان هواپیما با خودروی تشریفاتی، استراحت در سالن اختصاصی و تحویل بار توسط تیم تشریفات.',
      badge: 'لحظه فرود',
    },
    {
      stepEn: '03',
      stepFa: '۰۳',
      title: 'انتقال و استقرار لوکس',
      lead: 'تجربه ناوگان مدرن تشریفات تا هتل برگزیده',
      description: 'راننده اختصاصی، چک‌این خصوصی و مستقیم در سوئیت بدون معطلی در لابی، و تحویل ملزومات رفاهی سفر.',
      badge: 'ورود به شهر',
    },
    {
      stepEn: '04',
      stepFa: '۰۴',
      title: 'همراهی کانسی‌یژ در تمام برنامه‌ها',
      lead: 'دستیار ویژه در جلسات، درمان و گشت‌های ویژه',
      description: 'هماهنگی کلینیک‌های ویژه و پزشکان، مترجم اختصاصی، رزرو رستوران‌های اختصاصی و دسترسی به جاذبه‌های برتر ایران.',
      badge: 'طول اقامت',
    },
    {
      stepEn: '05',
      stepFa: '۰۵',
      title: 'بدرقه تشریفاتی و فالوآپ اختصاصی',
      lead: 'پایان سفر با همان شکوه و دقت اولیه',
      description: 'ورود به سالن تشریفات خروجی فرودگاه، اخذ کارت پرواز، بارگیری چمدان‌ها و پیگیری‌های حمایتی مستمر پس از بازگشت.',
      badge: 'بازگشت',
    },
  ],
  en: [
    {
      stepEn: '01',
      stepFa: '01',
      title: 'Pre-Travel Custom Curation',
      lead: 'Listening to your priorities and architecting a flawless blueprint',
      description: 'Thorough review of healthcare or business objectives, handpicking private suites, and issuing VIP visa clearances.',
      badge: 'Pre-Departure',
    },
    {
      stepEn: '02',
      stepFa: '02',
      title: 'Tarmac Aircraft CIP Reception',
      lead: 'Immediate tranquility without public terminal transit',
      description: 'Ramp-side pickup right at the aircraft stairs, gourmet hospitality in the private CIP salon, and seamless luggage handling.',
      badge: 'Touchdown',
    },
    {
      stepEn: '03',
      stepFa: '03',
      title: 'Chauffeured Transfer & In-Suite Check-in',
      lead: 'Executive fleet transit directly to your luxury residence',
      description: 'Private driver, direct in-suite express registration bypassing the public lobby, and delivery of personalized local essentials.',
      badge: 'Arrival',
    },
    {
      stepEn: '04',
      stepFa: '04',
      title: 'Dedicated Executive Concierge',
      lead: 'Unbroken bilingual assistance across clinics, boardrooms, and private tours',
      description: 'Priority medical admissions, certified translation, reservations at premier dining venues, and private after-hours heritage viewings.',
      badge: 'Throughout Stay',
    },
    {
      stepEn: '05',
      stepFa: '05',
      title: 'Distinguished Departure & Follow-up',
      lead: 'Concluding your journey with identical elegance and care',
      description: 'Access to the departure CIP lounge, priority boarding gate assistance, and continuous remote check-ins upon your safe return.',
      badge: 'Safe Return',
    },
  ],
  ar: [
    {
      stepEn: '01',
      stepFa: '۰۱',
      title: 'التخطيط المسبق وتصميم الرحلة',
      lead: 'الاستماع لمتطلباتكم وتصميم جدول زمني دقيق ومتكامل',
      description: 'دراسة الاحتياجات الطبية أو التجارية، اختيار الأجنحة الفاخرة، واستخراج التأشيرات السريعة بدعوات رسمية.',
      badge: 'قبل السفر',
    },
    {
      stepEn: '02',
      stepFa: '۰۲',
      title: 'استقبال مدرج الطائرة وصالة CIP',
      lead: 'وصول ملكي مباشر دون المرور بالصالات العامة',
      description: 'سيارة تشريفات خاصة عند سلم الطائرة، استراحة وضيافة فاخرة في صالة كبار الشخصيات وتخليص الحقائب.',
      badge: 'لحظة الهبوط',
    },
    {
      stepEn: '03',
      stepFa: '۰۳',
      title: 'التنقل الفاره وتسجيل الدخول المباشر',
      lead: 'سيارة فاخرة تنقلكم مباشرة إلى جناحكم بالفندق',
      description: 'سائق خاص، وتسجيل دخول فوري داخل الجناح الفندقي دون أي انتظار في بهو الفندق، وتقديم التسهيلات.',
      badge: 'الوصول للفندق',
    },
    {
      stepEn: '04',
      stepFa: '۰۴',
      title: 'مرافقة المساعد الشخصي والمترجم',
      lead: 'دعم تنفيذي شامل في المواعيد الطبية، الاجتماعات، والجولات',
      description: 'تنسيق العمليات والمستشفيات، مترجم خاص، حجوزات المطاعم الراقية، وجولات سياحية حصرية.',
      badge: 'طوال فترة الإقامة',
    },
    {
      stepEn: '05',
      stepFa: '۰۵',
      title: 'التوديع التشريفي والمتابعة المستمرة',
      lead: 'اختتام الرحلة بذات المستوى الرفيع من العناية والدقة',
      description: 'الاستراحة في صالة المغادرة CIP، إصدار بطاقات الصعود، شحن الأمتعة، واستمرار التواصل والاطمئنان بعد العودة.',
      badge: 'العودة بالسلامة',
    },
  ],
  tr: [
    {
      stepEn: '01',
      stepFa: '01',
      title: 'Seyahat Öncesi Kişiye Özel Tasarım',
      lead: 'Beklentilerin dinlenmesi ve yola çıkmadan kusursuz bir plan hazırlanması',
      description: 'Sağlık veya ticari hedeflerin değerlendirilmesi, uygun süit seçimi ve resmi davetiyeyle VIP vize onayı.',
      badge: 'Hareket Öncesi',
    },
    {
      stepEn: '02',
      stepFa: '02',
      title: 'Uçak Merdiveninde CIP Karşılama',
      lead: 'Genel terminallere girmeden huzurlu ve hızlı bir başlangıç',
      description: 'Uçaktan inişte özel araçla karşılama, CIP lounge salonunda dinlenme ve bagaj işlemlerinin tamamlanması.',
      badge: 'İniş Anı',
    },
    {
      stepEn: '03',
      stepFa: '03',
      title: 'Lüks Transfer ve Otele Yerleşim',
      lead: 'Seçkin araç filosuyla otele konforlu geçiş',
      description: 'Özel şoför eşliğinde transfer, lobide beklemeden süitte hızlı check-in ve konfor olanaklarının sunumu.',
      badge: 'Şehre Varış',
    },
    {
      stepEn: '04',
      stepFa: '04',
      title: 'Konsiyerj Eşliğinde Süreç Yönetimi',
      lead: 'Görüşmelerde, tedavide ve özel gezilerde kişisel asistan',
      description: 'Hekim randevuları, resmi tercümanlık, özel restoran rezervasyonları ve İran’ın eşsiz güzelliklerine ayrıcalıklı erişim.',
      badge: 'Konaklama Boyunca',
    },
    {
      stepEn: '05',
      stepFa: '05',
      title: 'Protokol Uğurlaması ve İyileşme Takibi',
      lead: 'Yolculuğun aynı zarafet ve özenle tamamlanması',
      description: 'Havalimanı CIP salonundan uçağa uğurlama, biniş kartı ve bagaj teslimi ile ülkenize dönüş sonrası sürekli takip.',
      badge: 'Dönüş',
    },
  ],
  zh: [
    {
      stepEn: '01',
      stepFa: '01',
      title: '行前意向倾听与专属方案定制',
      lead: '充分倾听您的诉求，在启程前将每一处细节规划至完美',
      description: '深入评估您的医疗健康诉求或跨国商务目标，精选指定尊尚套房并依托官方邀请函加急办理VIP签证。',
      badge: '出行前筹备',
    },
    {
      stepEn: '02',
      stepFa: '02',
      title: '飞机舷梯口CIP贵宾楼接机迎候',
      lead: '无需步入拥挤的公共航站楼，从落地第一秒便尊享宁谧',
      description: '停机坪舷梯口专车恭候，直达CIP贵宾楼品茗休息，由专属礼宾官代办边检手续与行李提取直送上车。',
      badge: '抵伊迎候',
    },
    {
      stepEn: '03',
      stepFa: '03',
      title: '专车护送下榻与套房内快捷登记',
      lead: '乘坐奢华车队无缝直达酒店，免去大堂琐碎登记手续',
      description: '由礼宾专车平稳护送至下榻酒店，由管家直接在套房内办理快速私密入住，呈现定制欢迎礼遇。',
      badge: '入住休整',
    },
    {
      stepEn: '04',
      stepFa: '04',
      title: '专属双语管家随行与全程闭环管理',
      lead: '在权威会诊、商务洽谈与文化游览中提供贴心私人协助',
      description: '协调名医门诊绿色通道、现场高水平中文翻译、私享顶级餐厅预订及深度独家文化景点特权探访。',
      badge: '在伊全程',
    },
    {
      stepEn: '05',
      stepFa: '05',
      title: 'CIP贵宾欢送登机与回国后跟踪',
      lead: '以始终如一的典雅与尊重，为您的非凡旅途画上圆满句号',
      description: '在机场CIP贵宾楼办理登机手续与退税托运，舷梯专车送达机舱门口；安全返国后持续随访康复进展。',
      badge: '圆满返程',
    },
  ],
};

export const VIP_BRAND_BY_LANG: Record<Language, VipBrandStatement> = {
  fa: {
    title: '«استاندارد بی‌نظیر تشریفات»',
    statement: 'آرامش، دقت و وقار در هر لحظه سفر',
    faTitle: '«استاندارد بی‌نظیر تشریفات»',
    faStatement: 'آرامش، دقت و وقار در هر لحظه سفر',
    quote: '«تجمل واقعی در سروصدای امکانات نیست؛ در سکوت آرامش‌بخش نظمی است که همه‌چیز را بی‌نقص پیش می‌برد.»',
    author: 'ایرسا سیمرغ جهان',
    role: 'میزبانی ممتاز بین‌المللی',
    principles: [
      { title: 'دقت میلی‌متری', desc: 'هماهنگی برنامه‌ها با دقت ثانیه‌ای بدون معطلی و اتلاف زمان مسافر.' },
      { title: 'حریم خصوصی مطلق', desc: 'حفاظت بی‌چون‌وچرا از کلیه هویت‌ها، مذاکرات و اطلاعات پرونده‌ها.' },
      { title: 'مهمان‌نوازی اصیل', desc: 'ترکیب استانداردهای جهانی لوکس با فرهنگ غنی و احترام اصیل ایرانی.' },
    ],
  },
  en: {
    title: 'An Unrivaled Standard of Protocol',
    statement: 'Serenity, Precision & Dignity in Every Moment',
    faTitle: 'An Unrivaled Standard of Protocol',
    faStatement: 'Serenity, Precision & Dignity in Every Moment',
    quote: '«True luxury is not defined by excess, but by the serene quietude of a system where everything unfolds flawlessly.»',
    author: 'Airsa Simorgh Jahan',
    role: 'Distinguished International Hospitality',
    principles: [
      { title: 'Pinpoint Precision', desc: 'Punctual timetable execution preserving your valuable time without delays.' },
      { title: 'Absolute Discretion', desc: 'Unconditional confidentiality safeguarding personal data, discussions, and records.' },
      { title: 'Authentic Warmth', desc: 'Blending global luxury protocols with Iran centuries-old tradition of heartfelt hospitality.' },
    ],
  },
  ar: {
    title: '«معيار لا يُضاهى في التشريفات»',
    statement: 'السكينة، الدقة والهيبة في كل تفصيل من تفاصيل الرحلة',
    faTitle: '«معيار لا يُضاهى في التشريفات»',
    faStatement: 'السكينة، الدقة والهيبة في كل تفصيل من تفاصيل الرحلة',
    quote: '«الفخامة الحقيقية لا تكمن في المظاهر، بل في الهدوء والراحة والترتيب المتقن الذي يجعل كل شيء يسير بانسجام تام.»',
    author: 'إيرسا سيمرغ جهان',
    role: 'الضيافة الدولية الراقية',
    principles: [
      { title: 'الدقة المتناهية', desc: 'تنسيق الجداول باحترافية عالية توفر وقت الضيف وتضمن راحته.' },
      { title: 'الخصوصية المطلقة', desc: 'حماية كاملة وغير مشروطة لكافة البيانات والاجتماعات والملفات.' },
      { title: 'كرم الضيافة الأصيل', desc: 'دمج المعايير الفندقية العالمية مع عراقة وأصالة الضيافة الإيرانية الشهيرة.' },
    ],
  },
  tr: {
    title: '«Eşsiz Bir Protokol Standardı»',
    statement: 'Seyahatin Her Anında Dinginlik, Dakiklik ve Zarafet',
    faTitle: '«Eşsiz Bir Protokol Standardı»',
    faStatement: 'Seyahatin Her Anında Dinginlik, Dakiklik ve Zarafet',
    quote: '«Gerçek lüks aşırılıkta değil, her şeyin kusursuzca akmasını sağlayan sessiz ve dingin bir intizamdadır.»',
    author: 'Airsa Simorgh Jahan',
    role: 'Seçkin Uluslararası Misafirperverlik',
    principles: [
      { title: 'Milimetrik Dakiklik', desc: 'Misafirin değerli vaktini koruyan, sıfır gecikmeyle işleyen program akışı.' },
      { title: 'Mutlak Mahremiyet', desc: 'Kişisel kimlik, ticari görüşmeler ve sağlık kayıtlarının koşulsuz korunması.' },
      { title: 'Özgün Sıcaklık', desc: 'Dünya standartlarında lüks protokoller ile kadim İran misafirperverliğinin harmanı.' },
    ],
  },
  zh: {
    title: '«无可比拟的尊尚外事规格»',
    statement: '在旅途的每一寸时光中，感受静谧、精准与尊严',
    faTitle: '«无可比拟的尊尚外事规格»',
    faStatement: '在旅途的每一寸时光中，感受静谧、精准与尊严',
    quote: '«真正的奢华从不喧哗，它存在于让万事井然有序、丝滑流淌的静水深流之中。»',
    author: '艾尔萨·西摩格 (Airsa Simorgh Jahan)',
    role: '国际高规格涉外款待',
    principles: [
      { title: '分秒级严谨守时', desc: '精准推进所有行程与预约节点，绝不耽误贵宾一分一秒宝贵时光。' },
      { title: '全方位绝对私密', desc: '无条件保密客户个人身份、商务洽谈内容与医疗健康档案。' },
      { title: '至真醇厚的人性温度', desc: '将国际顶级尊贵服务标准与波斯古老深厚的好客传统融为一体。' },
    ],
  },
};

export const VIP_CTA_BY_LANG: Record<Language, VipCtaData> = {
  fa: {
    title: '«آماده تجربه سطحی متفاوت از سفر هستید؟»',
    subtitle: 'کارشناسان تشریفات ارشد ایرسا سیمرغ جهان آماده پاسخگویی، هماهنگی و شخصی‌سازی جزئیات سفر اختصاصی شما هستند.',
    buttonText: 'درخواست خدمات VIP و تشریفات',
  },
  en: {
    title: 'Ready to Experience an Elevated Level of Travel?',
    subtitle: 'Our senior VIP protocol directors are available to design and personalize the fine details of your exclusive stay in Iran.',
    buttonText: 'Request VIP Concierge Services',
  },
  ar: {
    title: '«هل أنت مستعد لتجربة سفر استثنائية وفريدة؟»',
    subtitle: 'مديرو تشريفات كبار الشخصيات في إيرسا سيمرغ جهان مستعدون لتنسيق وتخصيص تفاصيل رحلتكم الفاخرة بالكامل.',
    buttonText: 'طلب خدمات كبار الشخصيات والتشريفات VIP',
  },
  tr: {
    title: '«Farklı Bir Seyahat Deneyimine Hazır mısınız?»',
    subtitle: 'Airsa Simorgh Jahan kıdemli VIP protokol direktörleri seyahatinizin tüm ayrıntılarını kişiselleştirmek için hazırdır.',
    buttonText: 'VIP Hizmet ve Konsiyerj Talep Edin',
  },
  zh: {
    title: '«准备好体验更高维度的尊荣出行了吗？»',
    subtitle: '艾尔萨·西摩格资深VIP礼宾主管随时准备为您构思并量身定制在伊朗期间的每一处私享细节。',
    buttonText: '申请VIP专属礼遇与礼宾服务',
  },
};

export const getVipHeroData = (lang: Language = 'fa') => VIP_HERO_BY_LANG[lang] || VIP_HERO_BY_LANG.fa;
export const getVipExperienceData = (lang: Language = 'fa') => VIP_EXPERIENCE_BY_LANG[lang] || VIP_EXPERIENCE_BY_LANG.fa;
export const getVipHospitalityOverview = (lang: Language = 'fa') => VIP_HOSPITALITY_BY_LANG[lang] || VIP_HOSPITALITY_BY_LANG.fa;
export const getVipServicesData = (lang: Language = 'fa') => VIP_SERVICES_BY_LANG[lang] || VIP_SERVICES_BY_LANG.fa;
export const getVipTimelineSteps = (lang: Language = 'fa') => VIP_TIMELINE_BY_LANG[lang] || VIP_TIMELINE_BY_LANG.fa;
export const getVipBrandStatement = (lang: Language = 'fa') => VIP_BRAND_BY_LANG[lang] || VIP_BRAND_BY_LANG.fa;
export const getVipCtaData = (lang: Language = 'fa') => VIP_CTA_BY_LANG[lang] || VIP_CTA_BY_LANG.fa;

export const VIP_HERO_DATA = VIP_HERO_BY_LANG.fa;
export const VIP_EXPERIENCE_DATA = VIP_EXPERIENCE_BY_LANG.fa;
export const VIP_HOSPITALITY_OVERVIEW = VIP_HOSPITALITY_BY_LANG.fa;
export const VIP_SERVICES_DATA = VIP_SERVICES_BY_LANG.fa;
export const VIP_TIMELINE_STEPS = VIP_TIMELINE_BY_LANG.fa;
export const VIP_BRAND_STATEMENT = VIP_BRAND_BY_LANG.fa;
export const VIP_CTA_DATA = VIP_CTA_BY_LANG.fa;

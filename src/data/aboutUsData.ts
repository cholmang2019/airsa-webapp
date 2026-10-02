import { Language } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

export const OFFICIAL_CONTACT_URL = 'https://medixmaster.com/contact-us/';

export interface FocusArea {
  id: string;
  number: string;
  title: string;
  description: string;
  desc?: string;
  image: string;
  alt: string;
}

export interface AboutHeroData {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export interface AboutWhoWeAreData {
  badge: string;
  statement: string;
  elaboration: string;
  image: string;
  alt: string;
  highlights: { title: string; desc: string }[];
}

export interface AboutMissionData {
  badge: string;
  title: string;
  text: string;
  supportingText: string;
  elaboration?: string;
  image: string;
  alt: string;
}

export interface AboutVisionData {
  badge: string;
  title: string;
  text: string;
  supportingText: string;
}

export interface AboutBrandValue {
  id: string;
  title: string;
  lead: string;
  description: string;
  tag?: string;
}

export interface AboutApproachData {
  badge: string;
  title: string;
  image: string;
  alt: string;
  paragraphs: string[];
  stats: { label: string; value: string; desc: string }[];
}

export interface AboutCtaData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  badge?: string;
}

export const ABOUT_HERO_BY_LANG: Record<Language, AboutHeroData> = {
  fa: {
    badge: 'Airsa Simorgh Jahan | هویت سازمانی',
    title: '«درباره ایرسا سیمرغ جهان»',
    subtitle: '«همراه شما در تمام مسیر سفر، درمان و تجربه ایران»',
    image: ASSETS.hero.aboutGateway.src,
    alt: ASSETS.hero.aboutGateway.alt,
  },
  en: {
    badge: 'Airsa Simorgh Jahan | Corporate Profile',
    title: 'About Airsa Simorgh Jahan',
    subtitle: 'Your Trusted Partner Across Every Stage of Travel, Healthcare, and Iranian Discovery',
    image: ASSETS.hero.aboutGateway.src,
    alt: ASSETS.hero.aboutGateway.alt,
  },
  ar: {
    badge: 'إيرسا سيمرغ جهان | الهوية المؤسسية',
    title: '«عن شركة إيرسا سيمرغ جهان»',
    subtitle: '«رفيقكم الأمين طوال مسيرة السفر، العلاج، واكتشاف روائع إيران»',
    image: ASSETS.hero.aboutGateway.src,
    alt: ASSETS.hero.aboutGateway.alt,
  },
  tr: {
    badge: 'Airsa Simorgh Jahan | Kurumsal Kimlik',
    title: '«Airsa Simorgh Jahan Hakkında»',
    subtitle: '«Seyahat, Sağlık ve İran’ı Keşif Sürecinizde Güvenilir Yol Arkadaşınız»',
    image: ASSETS.hero.aboutGateway.src,
    alt: ASSETS.hero.aboutGateway.alt,
  },
  zh: {
    badge: '艾尔萨·西摩格 | 企业品牌概况',
    title: '«关于艾尔萨·西摩格 (Airsa Simorgh Jahan)»',
    subtitle: '«全程相伴您的每一次商旅出行、医疗救治与波斯探索之旅»',
    image: ASSETS.hero.aboutGateway.src,
    alt: ASSETS.hero.aboutGateway.alt,
  },
};

export const ABOUT_WHO_WE_ARE_BY_LANG: Record<Language, AboutWhoWeAreData> = {
  fa: {
    badge: 'معرفی مجموعه',
    statement: '«ایرسا سیمرغ جهان مجموعه‌ای تخصصی در حوزه گردشگری، خدمات هوایی، گردشگری سلامت، گردشگری ورودی و خدمات بین‌المللی است.»',
    elaboration: 'هدف بنیادین این مجموعه، ارائه تجربه‌ای یکپارچه، آرام و با استانداردهای جهانی برای مسافران، گردشگران و بیماران بین‌المللی است. ما تمامی نیازهای پیش از سفر، تشریفات فرودگاهی، اقامتگاهی، ترانسفر، هماهنگی‌های تخصصی پزشکی و امور حقوقی و تجاری را در قالب یک سامانه هماهنگ مدیریت می‌کنیم تا میهمانان ما بدون دغدغه، بالاترین سطح مراقبت و میزبانی را در ایران تجربه نمایند.',
    image: ASSETS.about.whoWeAreReception.src,
    alt: ASSETS.about.whoWeAreReception.alt,
    highlights: [
      { title: 'رویکرد یکپارچه (Integrated Care)', desc: 'مدیریت پیوسته کلیه مراحل سفر، اسکان و سلامت' },
      { title: 'استانداردهای بین‌المللی', desc: 'تعهد به کیفیت، زمان‌بندی دقیق و پروتکل‌های محرمانگی' },
      { title: 'تیم چندزبانه و متخصص', desc: 'همراهی کارشناسان زبده در تمام طول اقامت' },
    ],
  },
  en: {
    badge: 'Corporate Introduction',
    statement: '«Airsa Simorgh Jahan is a premier enterprise specializing in global travel, medical tourism, inbound cultural tours, and international corporate facilitation.»',
    elaboration: 'Our core philosophy is providing an effortless, serene journey benchmarked against the highest international standards. We integrate consular visa clearances, CIP airport receptions, handpicked 5-star lodging, private ground fleets, accredited hospital admissions, and legal advisory into a singular streamlined ecosystem so our guests experience Persian hospitality with complete peace of mind.',
    image: ASSETS.about.whoWeAreReception.src,
    alt: ASSETS.about.whoWeAreReception.alt,
    highlights: [
      { title: 'Integrated Care Framework', desc: 'Holistic supervision across medical, hospitality, and ground logistics' },
      { title: 'Global Benchmarks', desc: 'Commitment to punctuality, clinical ethics, and ironclad privacy protocols' },
      { title: 'Multilingual Expertise', desc: 'Dedicated bilingual case managers accompanying you throughout your stay' },
    ],
  },
  ar: {
    badge: 'نبذة عن الشركة',
    statement: '«إيرسا سيمرغ جهان هي شركة رائدة ومتخصصة في مجالات السياحة، خدمات الطيران، السياحة العلاجية، السياحة الوافدة، والخدمات الاستثمارية الدولية.»',
    elaboration: 'الهدف الجوهري لشركتنا هو تقديم تجربة متكاملة، مريحة ووفق أرقى المعايير العالمية للمسافرين والمرضى الدوليين ورجال الأعمال. نحن ندير كافة الإجراءات من إصدار التأشيرات، واستقبال صالات كبار الشخصيات CIP، والحجوزات الفندقية الفاخرة، والتنسيقات الطبية مع كبار الأطباء، والمعاملات القانونية لنوفر لضيوفنا أقصى درجات الراحة والاطمئنان في إيران.',
    image: ASSETS.about.whoWeAreReception.src,
    alt: ASSETS.about.whoWeAreReception.alt,
    highlights: [
      { title: 'منظومة الرعاية المتكاملة', desc: 'إشراف شامل ومتصل على كافة مراحل السفر والعلاج والإقامة' },
      { title: 'المعايير الدولية الرفيعة', desc: 'التزام تام بالجودة، دقة المواعيد، وبروتوكولات السرية التامة' },
      { title: 'فريق متخصص ومتعدد اللغات', desc: 'مرافقة مستمرة من قبل خبراء يتحدثون لغتكم بطلاقة' },
    ],
  },
  tr: {
    badge: 'Şirket Tanıtımı',
    statement: '«Airsa Simorgh Jahan; turizm, havacılık hizmetleri, sağlık turizmi, gelen turizm ve uluslararası iş danışmanlığı alanlarında uzmanlaşmış öncü bir kuruluştur.»',
    elaboration: 'Temel ilkemiz; uluslararası misafirlerimiz, turistler ve hastalarımız için dünya standartlarında, huzurlu ve entegre bir seyahat deneyimi sunmaktır. Vize işlemlerinden havalimanı CIP karşılamasına, seçkin 5 yıldızlı otellerden özel araç filolarına, akredite hastane yatışlarından hukuki ve ticari danışmanlığa kadar tüm süreçleri tek bir çatı altında koordine ediyoruz.',
    image: ASSETS.about.whoWeAreReception.src,
    alt: ASSETS.about.whoWeAreReception.alt,
    highlights: [
      { title: 'Entegre Bakım Modeli (Integrated Care)', desc: 'Seyahat, konaklama ve sağlık süreçlerinin bütünsel yönetimi' },
      { title: 'Uluslararası Standartlar', desc: 'Dakiklik, klinik etik ve mutlak gizlilik prensiplerine bağlılık' },
      { title: 'Çok Dilli Uzman Kadro', desc: 'Konaklamanız boyunca ana dilinizde size eşlik eden danışmanlar' },
    ],
  },
  zh: {
    badge: '企业实力介绍',
    statement: '«艾尔萨·西摩格 (Airsa Simorgh Jahan) 是一家集国际商旅、航空票务、医疗旅游、入境文化旅游及跨国商务落地于一体的综合性领军企业。»',
    elaboration: '我们的核心宗旨是依据全球高规格标准，为国际旅行者、观光客人及跨国就医患者打造省心、尊贵且无缝衔接的卓越体验。从出发前的领事签证加急、抵离机场CIP贵宾通道、精选奢华五星级酒店、专属专车车队，到权威三甲医院顶级专家预约挂号以及涉外法务商务咨询，我们在统一高效的体系下进行全流程协调，让您无忧享受纯正的波斯尊荣款待。',
    image: ASSETS.about.whoWeAreReception.src,
    alt: ASSETS.about.whoWeAreReception.alt,
    highlights: [
      { title: '一体化服务体系 (Integrated Care)', desc: '对旅行出行、高品质住宿与医疗健康各环节实施闭环统筹' },
      { title: '全球严苛准则', desc: '坚守准时高效、恪守医疗伦理并执行严格信息保密协议' },
      { title: '精通中文的多语种专家团队', desc: '配备专业双语个案经理，全程无微不至地陪伴您的在伊时光' },
    ],
  },
};

export const ABOUT_OUR_FOCUS_BY_LANG: Record<Language, FocusArea[]> = {
  fa: [
    { id: 'tourism', number: '۰۱', title: 'گردشگری', description: 'برنامه‌ریزی سفرهای اختصاصی، معرفی جاذبه‌های کهن ایران و میزبانی با بالاترین کیفیت.', image: ASSETS.about.focusTourismIsfahan.src, alt: ASSETS.about.focusTourismIsfahan.alt },
    { id: 'health-tourism', number: '۰۲', title: 'گردشگری سلامت', description: 'هماهنگی خدمات پزشکی برتر، پیگیری دوره نقاهت و مراقبت همه‌جانبه از بیماران بین‌المللی.', image: ASSETS.about.focusHealthDoctor.src, alt: ASSETS.about.focusHealthDoctor.alt },
    { id: 'vip-services', number: '۰۳', title: 'خدمات VIP', description: 'تشریفات اختصاصی فرودگاهی CIP، ترانسفر لوکس، اقامتگاه‌های ویژه و همراهی ۲۴ ساعته.', image: ASSETS.about.focusVipChauffeur.src, alt: ASSETS.about.focusVipChauffeur.alt },
    { id: 'international-services', number: '۰۴', title: 'خدمات بین‌المللی', description: 'تسهیل ثبت شرکت، خدمات اقامت قانونی، مشاوره سرمایه‌گذاری و ارتباطات راهبردی در ایران.', image: ASSETS.about.focusIntlCorporate.src, alt: ASSETS.about.focusIntlCorporate.alt },
  ],
  en: [
    { id: 'tourism', number: '01', title: 'Cultural Tourism', description: 'Bespoke heritage journeys, uncovering centuries of Persian civilization with flawless hospitality.', image: ASSETS.about.focusTourismIsfahan.src, alt: ASSETS.about.focusTourismIsfahan.alt },
    { id: 'health-tourism', number: '02', title: 'Medical Tourism', description: 'Direct access to elite board-certified surgeons, accredited hospitals, and dedicated post-op recovery.', image: ASSETS.about.focusHealthDoctor.src, alt: ASSETS.about.focusHealthDoctor.alt },
    { id: 'vip-services', number: '03', title: 'VIP Concierge', description: 'Tarmac aircraft CIP receptions, chauffeured executive fleets, diplomatic suites, and 24/7 personal concierges.', image: ASSETS.about.focusVipChauffeur.src, alt: ASSETS.about.focusVipChauffeur.alt },
    { id: 'international-services', number: '04', title: 'International Services', description: 'Expedited company incorporation, investment residency facilitation, and strategic cross-border advisory.', image: ASSETS.about.focusIntlCorporate.src, alt: ASSETS.about.focusIntlCorporate.alt },
  ],
  ar: [
    { id: 'tourism', number: '۰۱', title: 'السياحة الوافدة', description: 'تنظيم برامج سياحية حصرية لاستكشاف روائع التراث والحضارة الإيرانية العريقة.', image: ASSETS.about.focusTourismIsfahan.src, alt: ASSETS.about.focusTourismIsfahan.alt },
    { id: 'health-tourism', number: '۰۲', title: 'السياحة العلاجية', description: 'تنسيق العمليات مع كبار الجراحين، وحجز أرقى المستشفيات، والرعاية التمريضية خلال فترة النقاهة.', image: ASSETS.about.focusHealthDoctor.src, alt: ASSETS.about.focusHealthDoctor.alt },
    { id: 'vip-services', number: '۰۳', title: 'خدمات كبار الشخصيات VIP', description: 'استقبال صالات المطار CIP، أسطول سيارات فارهة، أجنحة فندقية ملكية، ومساعد تنفيذي متفرغ.', image: ASSETS.about.focusVipChauffeur.src, alt: ASSETS.about.focusVipChauffeur.alt },
    { id: 'international-services', number: '۰۴', title: 'الخدمات الدولية والاستثمار', description: 'تأسيس الشركات، استخراج الإقامات القانونية، واستشارات الاستثمار الأجنبي المباشر في إيران.', image: ASSETS.about.focusIntlCorporate.src, alt: ASSETS.about.focusIntlCorporate.alt },
  ],
  tr: [
    { id: 'tourism', number: '01', title: 'Kültür Turizmi', description: 'Özel seyahat planları, İran’ın kadim mirasını keşif ve yüksek misafirperverlik standartları.', image: ASSETS.about.focusTourismIsfahan.src, alt: ASSETS.about.focusTourismIsfahan.alt },
    { id: 'health-tourism', number: '02', title: 'Sağlık Turizmi', description: 'En iyi uzman cerrahlar, akredite hastaneler ve ameliyat sonrası profesyonel bakım desteği.', image: ASSETS.about.focusHealthDoctor.src, alt: ASSETS.about.focusHealthDoctor.alt },
    { id: 'vip-services', number: '03', title: 'VIP Hizmetler', description: 'Havalimanı CIP lounge karşılaması, lüks araç filosu, özel süitler ve 7/24 konsiyerj.', image: ASSETS.about.focusVipChauffeur.src, alt: ASSETS.about.focusVipChauffeur.alt },
    { id: 'international-services', number: '04', title: 'Uluslararası Hizmetler', description: 'Şirket kuruluşu, yasal oturum süreçleri, yatırım danışmanlığı ve stratejik iş geliştirme.', image: ASSETS.about.focusIntlCorporate.src, alt: ASSETS.about.focusIntlCorporate.alt },
  ],
  zh: [
    { id: 'tourism', number: '01', title: '文化旅游', description: '私人定制深度历史文化遗产之旅，以极高款待规格揭开数千年波斯文明的神秘面纱。', image: ASSETS.about.focusTourismIsfahan.src, alt: ASSETS.about.focusTourismIsfahan.alt },
    { id: 'health-tourism', number: '02', title: '医疗旅游', description: '直接对接国际认证三甲医院及权威主任专家，提供周到的术后专业护理与营养调养。', image: ASSETS.about.focusHealthDoctor.src, alt: ASSETS.about.focusHealthDoctor.alt },
    { id: 'vip-services', number: '03', title: 'VIP贵宾礼宾', description: '停机坪CIP舷梯专车接送、豪华行政车队、总统套房尊享及24小时专属贴身管家。', image: ASSETS.about.focusVipChauffeur.src, alt: ASSETS.about.focusVipChauffeur.alt },
    { id: 'international-services', number: '04', title: '国际商务', description: '加急跨境公司注册、外商投资居留合规办理、以及跨国经贸对接与战略咨询。', image: ASSETS.about.focusIntlCorporate.src, alt: ASSETS.about.focusIntlCorporate.alt },
  ],
};

export const ABOUT_MISSION_BY_LANG: Record<Language, AboutMissionData> = {
  fa: {
    badge: 'آرمان و تعهد ما',
    title: '«ماموریت ما»',
    text: '«ایجاد تجربه‌ای حرفه‌ای، یکپارچه و قابل اعتماد برای مسافران و بیماران بین‌المللی.»',
    supportingText: 'تعهد ما فراتر از ارائه خدمات صرف است؛ ما پلی معتمد میان خواسته‌های شما و بالاترین ظرفیت‌های گردشگری و درمانی ایران هستیم.',
    image: ASSETS.about.missionCareSupport.src,
    alt: ASSETS.about.missionCareSupport.alt,
  },
  en: {
    badge: 'Our Mission & Commitment',
    title: 'Our Mission',
    text: '«To engineer a professional, seamless, and deeply trustworthy gateway for international travelers and patients.»',
    supportingText: 'Our pledge extends far beyond routine service delivery; we act as your trusted bridge connecting personal aspirations with Iran’s finest medical, cultural, and corporate capabilities.',
    image: ASSETS.about.missionCareSupport.src,
    alt: ASSETS.about.missionCareSupport.alt,
  },
  ar: {
    badge: 'رسالتنا والتزامنا',
    title: '«رسالتنا»',
    text: '«صناعة تجربة احترافية، متكاملة وموثوقة لجميع الضيوف والمرضى الدوليين.»',
    supportingText: 'التزامنا يتجاوز مجرد تقديم الخدمات؛ نحن الجسر الموثوق الذي يربط بين تطلعاتكم وأرقى الإمكانات السياحية والطبية والاستثمارية في إيران.',
    image: ASSETS.about.missionCareSupport.src,
    alt: ASSETS.about.missionCareSupport.alt,
  },
  tr: {
    badge: 'Misyonumuz ve Taahhüdümüz',
    title: '«Misyonumuz»',
    text: '«Uluslararası gezginler ve hastalar için profesyonel, kusursuz ve güvenilir bir köprü oluşturmak.»',
    supportingText: 'Taahhüdümüz sıradan bir hizmet sunumunun ötesindedir; kişisel beklentileriniz ile İran’ın zengin medikal, kültürel ve ticari kapasiteleri arasında güvenilir bir bağ kuruyoruz.',
    image: ASSETS.about.missionCareSupport.src,
    alt: ASSETS.about.missionCareSupport.alt,
  },
  zh: {
    badge: '宗旨与誓言',
    title: '«我们的使命»',
    text: '«为国际旅行者与全球就诊患者构筑专业、流畅且值得深厚信赖的跨国服务桥梁。»',
    supportingText: '我们的承诺远超常规的服务提供；我们是联结您的真切期待与伊朗最优质医疗、文化和经贸资源之间的坚固信任桥梁。',
    image: ASSETS.about.missionCareSupport.src,
    alt: ASSETS.about.missionCareSupport.alt,
  },
};

export const ABOUT_VISION_BY_LANG: Record<Language, AboutVisionData> = {
  fa: {
    badge: 'آینده‌نگری سازمانی',
    title: '«چشم‌انداز ما»',
    text: '«تبدیل شدن به یک برند بین‌المللی قابل اعتماد در زمینه گردشگری، گردشگری سلامت و خدمات VIP.»',
    supportingText: 'همگام‌سازی استانداردهای بومی با انتظارات بین‌المللی و بازتعریف مفهوم میزبانی حرفه‌ای در منطقه.',
  },
  en: {
    badge: 'Organizational Vision',
    title: 'Our Vision',
    text: '«To become the leading international benchmark of excellence in cultural tourism, medical coordination, and bespoke VIP hospitality in the region.»',
    supportingText: 'Bridging national heritage with world-class guest protocols, setting a new paradigm for cross-border care.',
  },
  ar: {
    badge: 'الرؤية المستقبلية',
    title: '«رؤيتنا»',
    text: '«أن نكون العلامة الدولية الأكثر موثوقية وتميزاً في مجال السياحة العلاجية وخدمات كبار الشخصيات VIP في المنطقة.»',
    supportingText: 'مواءمة المعايير المحلية مع التطلعات العالمية وإعادة تعريف مفهوم الضيافة الاحترافية الراقية.',
  },
  tr: {
    badge: 'Kurumsal Vizyon',
    title: '«Vizyonumuz»',
    text: '«Bölgede kültür turizmi, sağlık turizmi ve VIP hizmetlerde uluslararası alanda en çok güvenilen marka olmak.»',
    supportingText: 'Yerel değerleri dünya standartlarındaki protokollerle birleştirerek sınır ötesi hizmet kalitesini yeniden tanımlıyoruz.',
  },
  zh: {
    badge: '战略宏图',
    title: '«我们的愿景»',
    text: '«成为中东及西亚区域在文化旅游、医疗协调及VIP专属礼遇领域备受尊崇的国际卓越标杆。»',
    supportingText: '将悠久深厚的民族待客传统与国际一流服务规范相融合，重新定义跨国服务品质标准。',
  },
};

export const ABOUT_BRAND_VALUES_BY_LANG: Record<Language, AboutBrandValue[]> = {
  fa: [
    { id: 'care', title: 'مسئولیت‌پذیری و مراقبت انسانی', lead: 'سلامت، شأن و آسودگی مسافر سرلوحه تصمیمات ماست.', description: 'ما مراجعان خود را فراتر از یک پرونده می‌بینیم؛ هر گام بر اساس همدلی، دقت بالینی و حمایت صمیمانه استوار است.' },
    { id: 'quality', title: 'کیفیت و استانداردهای جهانی', lead: 'انتخاب بهترین‌ها در کلیه ارکان پزشکی و رفاهی.', description: 'پایبندی سخت‌گیرانه به اعتبارنامه‌های درمانی، همکاری با پزشکان تراز اول و اقامت در هتل‌های تاییدشده.' },
    { id: 'trust', title: 'شفافیت، صداقت و رازداری', lead: 'اطمینان خاطر مطلق در امور مالی، درمانی و حریم خصوصی.', description: 'ارائه هزینه‌های روشن و شفاف، پایبندی به محرمانگی اطلاعات و امانتداری کامل در تمام تعاملات.' },
    { id: 'hospitality', title: 'مهمان‌نوازی اصیل ایرانی', lead: 'میزبانی گرم و احترام‌آمیز با رویکرد بین‌المللی.', description: 'ترکیب فرهنگ غنی میزبانی با تشریفات مدرن برای خلق خاطره‌ای جاودان و تجربه‌ای بدون استرس.' },
  ],
  en: [
    { id: 'care', title: 'Human-Centered Accountability', lead: 'Patient well-being, dignity, and family comfort guide our choices.', description: 'We see every guest as a family member; each step is rooted in empathy, clinical diligence, and proactive support.' },
    { id: 'quality', title: 'World-Class Standards', lead: 'Uncompromising selectivity across medical and lodging partners.', description: 'Strict adherence to medical accreditations, collaboration with top surgeons, and vetted 5-star accommodations.' },
    { id: 'trust', title: 'Transparency & Total Discretion', lead: 'Absolute integrity in pricing, treatment outcomes, and data privacy.', description: 'Zero hidden fees, transparent financial reporting, and ironclad clinical confidentiality at all times.' },
    { id: 'hospitality', title: 'Authentic Persian Warmth', lead: 'Heartfelt, respectful hospitality elevated by modern etiquette.', description: 'Harmonizing centuries-old Persian hospitality traditions with modern international VIP protocols.' },
  ],
  ar: [
    { id: 'care', title: 'المسؤولية الإنسانية والاهتمام بالضيف', lead: 'صحة المريض وكرامته وراحة مرافقيه هي أولويتنا المطلقة.', description: 'نتعامل مع كل ضيف كفرد من عائلتنا؛ وكل خطوة نقوم بها مبنية على التعاطف والرعاية الطبية الفائقة.' },
    { id: 'quality', title: 'الجودة والمعايير العالمية', lead: 'اختيار الأفضل دائماً في المجالات الطبية والفندقية.', description: 'التزام صارم بالاعتمادات الصحية الدولية، والتعاون مع كبار الجراحين والاستشاريين والفنادق المعتمدة.' },
    { id: 'trust', title: 'الشفافية، النزاهة وحفظ السرية', lead: 'ثقة مطلقة في التكاليف والخطط العلاجية والخصوصية التامة.', description: 'وضوح وشفافية تامة في الأسعار دون أي تكاليف خفية، مع حماية غير مشروطة للبيانات الطبية والشخصية.' },
    { id: 'hospitality', title: 'كرم الضيافة الإيرانية الأصيلة', lead: 'استقبال دافئ واحترام رفيع وفق أرقى الأصول الدبلوماسية.', description: 'مزج عراقة الضيافة الإيرانية المشهورة عالمياً مع أحدث بروتوكولات خدمة كبار الشخصيات.' },
  ],
  tr: [
    { id: 'care', title: 'İnsan Odaklı Sorumluluk', lead: 'Misafirlerimizin sağlığı, onuru ve huzuru tüm kararlarımızın merkezindedir.', description: 'Her danışanımızı ailemizin bir üyesi olarak görüyoruz; her adımımız empati, klinik özen ve içten destek üzerine kuruludur.' },
    { id: 'quality', title: 'Dünya Standartlarında Kalite', lead: 'Sağlık ve konaklama ortaklarında tavizsiz mükemmellik.', description: 'Tıbbi akreditasyonlara tam uyum, lider cerrahlarla iş birliği ve onaylı 5 yıldızlı tesislerde konaklama.' },
    { id: 'trust', title: 'Şeffaflık, Dürüstlük ve Gizlilik', lead: 'Maliyetlerde, tedavide ve kişisel verilerde mutlak güven.', description: 'Gizli ücret içermeyen net fiyatlandırma, tıbbi raporların tam gizliliği ve dürüst kurumsal iletişim.' },
    { id: 'hospitality', title: 'Özgün İran Misafirperverliği', lead: 'Geleneksel sıcak karşılama ile çağdaş uluslararası protokollerin uyumu.', description: 'Yüzyılların sıcak misafirperverlik kültürünü modern VIP standartlarıyla harmanlayarak unutulmaz anlar oluşturuyoruz.' },
  ],
  zh: [
    { id: 'care', title: '以人为本的责任与关怀', lead: '将客人的健康安康、尊严体面与旅途舒适置于所有决策的核心。', description: '我们视每一位客人如家人；每一步安排皆源自至诚同理心、严谨临床专业度与主动贴心的全程守护。' },
    { id: 'quality', title: '对标国际的高严标准', lead: '在医疗机构与接待酒店的选择上坚持毫不妥协的严苛甄选。', description: '严格核验医疗执业资质，仅与权威主刀名医及经实地检验的五星级酒店建立紧密协作。' },
    { id: 'trust', title: '透明公开、诚信与绝对隐私', lead: '在费用开支、治疗方案与个人隐私上给予客户绝对踏实感。', description: '各项费用明码标价无隐形开销，对个人病历与商业信息施行最高安全级别的保密保护。' },
    { id: 'hospitality', title: '真挚醇厚的波斯款待', lead: '将充满温度的传统敬重之礼与现代尊贵涉外礼仪完美融合。', description: '传承千年波斯好客美德，以细致入微的定制服务为您消除陌生的异国顾虑，缔造难忘回忆。' },
  ],
};

export const ABOUT_APPROACH_BY_LANG: Record<Language, AboutApproachData> = {
  fa: {
    badge: 'رویکرد یکپارچه ایرسا سیمرغ جهان',
    title: 'تعهد به همراهی پیوسته و کیفیت بی‌نقص',
    image: ASSETS.about.approachBoardroom.src,
    alt: ASSETS.about.approachBoardroom.alt,
    paragraphs: [
      'در ایرسا سیمرغ جهان، ما به خلق سفرهایی باور داریم که با آرامش کامل، شفافیت همه‌جانبه و احساس امنیت رقم می‌خورند. ساختار خدمات ما فراتر از یک آژانس مسافرتی یا مرکز هماهنگی مقطعی طراحی شده است؛ ما زنجیره‌ای پیوسته از کارشناسان تشریفات، مترجمان زبده و تیم‌های مراقبت بالینی را گرد هم آورده‌ایم تا در تمامی لحظات، همراهی مطمئن و پاسخگو در کنار میهمانان باشیم.',
      'از نخستین مشاوره پیش از ورود و اخذ روادید، تا استقبال اختصاصی در فرودگاه، هماهنگی اقامتگاه‌های منتخب، تنظیم برنامه‌های درمانی در بیمارستان‌های تراز اول و برنامه‌ریزی گشت‌های فرهنگی، تمام امور با دقت و نظارت مستمر مدیریت می‌شوند تا مراجعان کمترین دغدغه اجرایی را احساس نکنند.',
      'این رویکرد جامع به مسافران و بیماران بین‌المللی این امکان را می‌دهد که با خیالی آسوده بر بازیابی سلامت، کشف شکوه تمدن ایران یا پیشبرد مذاکرات تجاری خود تمرکز کنند؛ در حالی که می‌دانند جزئی‌ترین نیازها و انتظاراتشان توسط تیمی مسئولیت‌پذیر پیگیری و برآورده می‌شود.',
    ],
    stats: [
      { label: 'پوشش جامع مراحل سفر', value: '۱۰۰٪', desc: 'از مبدأ تا مقصد و بازگشت' },
      { label: 'پشتیبانی و همراهی اختصاصی', value: '۲۴/۷', desc: 'کارشناسان چندزبانه تمام‌وقت' },
      { label: 'شبکه مراکز درمانی و اقامتی', value: '+۵۰', desc: 'مراکز دارای تاییدیه بین‌المللی' },
    ],
  },
  en: {
    badge: 'The Integrated Framework',
    title: 'Commitment to Continuous Guidance and Flawless Quality',
    image: ASSETS.about.approachBoardroom.src,
    alt: ASSETS.about.approachBoardroom.alt,
    paragraphs: [
      'At Airsa Simorgh Jahan, we believe in creating journeys characterized by total peace of mind, uncompromising transparency, and genuine security. Our architecture extends beyond conventional travel agencies or ad-hoc facilitators; we unite an unbroken chain of protocol officers, certified interpreters, and clinical care coordinators to stand by our guests at every stage.',
      'From the very first remote clinical evaluation and visa issuance to airport tarmac receptions, handpicked 5-star lodging, hospital admissions with renowned surgeons, and curated heritage excursions, every milestone is orchestrated with vigilance.',
      'This unified philosophy empowers international patients and travelers to focus entirely on recovery, cultural discovery, or commercial success, knowing that every detail is managed by an accountable, dedicated desk.',
    ],
    stats: [
      { label: 'End-to-End Journey Coverage', value: '100%', desc: 'From departure to return' },
      { label: 'Dedicated Concierge Support', value: '24/7', desc: 'Full-time multilingual staff' },
      { label: 'Accredited Partner Network', value: '+50', desc: 'Certified hospitals and luxury stays' },
    ],
  },
  ar: {
    badge: 'النهج المتكامل لشركة إيرسا سيمرغ جهان',
    title: 'التزام بالمرافقة المستمرة والجودة التي لا تشوبها شائبة',
    image: ASSETS.about.approachBoardroom.src,
    alt: ASSETS.about.approachBoardroom.alt,
    paragraphs: [
      'في إيرسا سيمرغ جهان، نؤمن بصناعة رحلات تتسم براحة البال المطلقة، والشفافية الشاملة، والشعور بالأمان التام. هيكلية خدماتنا مصممة لتتجاوز دور وكالات السفر التقليدية؛ حيث نجمع بين خبراء التشريفات، والمترجمين المعتمدين، والكوادر الطبية لنكون عوناً موثوقاً لضيوفنا في كافة الأوقات.',
      'من الاستشارة الأولى قبل القدوم واستخراج التأشيرات، إلى استقبال كبار الشخصيات بالمطار، وتنسيق الفنادق الفخمة، والمواعيد مع كبار الجراحين بالمستشفيات المعتمدة، والجولات السياحية، تُدار كافة الأمور بإشراف دقيق حتى لا يشعر الضيف بأي قلق إداري.',
      'هذا النهج المتكامل يتيح للمرضى والمسافرين التفرغ التام للشفاء واستعادة الصحة، أو الاستمتاع بجمال الحضارة الإيرانية، مع يقينهم بأن كافة تفاصيل رحلتهم تخضع لمتابعة حريصة من فريق مخلص ومتمرس.',
    ],
    stats: [
      { label: 'تغطية شاملة لمراحل الرحلة', value: '۱۰۰٪', desc: 'من الانطلاق وحتى العودة بالسلامة' },
      { label: 'دعم ومرافقة مستمرة', value: '۲۴/۷', desc: 'خبراء يتحدثون لغات متعددة على مدار الساعة' },
      { label: 'شبكة المستشفيات والفنادق المعتمدة', value: '+۵۰', desc: 'مراكز حاصلة على شهادات جودة دولية' },
    ],
  },
  tr: {
    badge: 'Entegre Yaklaşımımız',
    title: 'Sürekli Refakat ve Kusursuz Kalite Taahhüdü',
    image: ASSETS.about.approachBoardroom.src,
    alt: ASSETS.about.approachBoardroom.alt,
    paragraphs: [
      'Airsa Simorgh Jahan’da mutlak huzur, şeffaflık ve derin güven duygusuyla şekillenen seyahatlere inanıyoruz. Hizmet yapımız geleneksel bir acentenin çok ötesindedir; protokol yetkilileri, yeminli tercümanlar ve klinik koordinatörlerden oluşan kesintisiz bir zincirle misafirlerimizin her an yanındayız.',
      'Seyahat öncesi tıbbi değerlendirmeden vize alımına, CIP havalimanı karşılamasından 5 yıldızlı konaklamaya, önde gelen cerrahlarla hastane süreçlerinden butik kültür gezilerine kadar هر aşama titizlikle denetlenir.',
      'Bu bütünleşik yaklaşım, uluslararası hastaların ve misafirlerimizin tüm operasyonel ayrıntıları profesyonel ekibimize emanet ederek sadece iyileşmelerine, kültürel keşiflerine veya ticari hedeflerine odaklanmalarını sağlar.',
    ],
    stats: [
      { label: 'Uçtan Uca Süreç Kapsamı', value: '%100', desc: 'Çıkış noktasından dönüşe kadar' },
      { label: 'Kesintisiz Destek', value: '7/24', desc: 'Tam zamanlı çok dilli danışmanlar' },
      { label: 'Akredite İş Ortağı Ağı', value: '+50', desc: 'Onaylı hastane ve lüks oteller' },
    ],
  },
  zh: {
    badge: '艾尔萨·西摩格的一体化服务体系',
    title: '坚持全程贴心陪伴与无可挑剔的卓越品质',
    image: ASSETS.about.approachBoardroom.src,
    alt: ASSETS.about.approachBoardroom.alt,
    paragraphs: [
      '在艾尔萨·西摩格，我们致力于打造从容安心、全方位透明且安全感满满的难忘旅程。我们的业务架构超越了传统旅行社或临时中介的局限；我们整合了高级礼宾专员、资深翻译专家与医疗临床个案团队，为您提供全天候值得托付的专业支持。',
      '从抵伊前的医疗档案初审与签证协助，到机场贵宾室CIP迎送、精选奢华酒店入驻、公立及私立名院权威主刀医生预约，乃至精品定制的人文游览，每一环节均由专人细致监督把控。',
      '这一全方位的一体化服务模式，让国际患者与尊贵宾客能够放下一切琐碎事务，全心专注于身体康复、领略伊朗悠久灿烂的文明底蕴，或高效推进跨国经贸合作。',
    ],
    stats: [
      { label: '全流程无缝覆盖率', value: '100%', desc: '从出发地登机直至平安返程' },
      { label: '全天候专属管家保障', value: '24/7', desc: '全职专业多语种服务团队' },
      { label: '国际认证合作网络', value: '+50', desc: '经资质核验的医疗中心与奢华酒店' },
    ],
  },
};

export const ABOUT_CTA_BY_LANG: Record<Language, AboutCtaData> = {
  fa: {
    title: '«مسیر مطمئن شما به ایران، از اینجا آغاز می‌شود»',
    subtitle: 'کارشناسان ما آماده پاسخگویی، ارزیابی مدارک و تدوین برنامه اختصاصی متناسب با اهداف شما هستند.',
    buttonText: 'درخواست مشاوره و ارتباط با ما',
    buttonUrl: OFFICIAL_CONTACT_URL,
  },
  en: {
    title: 'Your Trusted Gateway to Iran Begins Here',
    subtitle: 'Our senior specialists are ready to assess your clinical records, answer queries, and formulate a customized journey.',
    buttonText: 'Request Consultation & Contact Us',
    buttonUrl: OFFICIAL_CONTACT_URL,
  },
  ar: {
    title: '«بوابتكم الآمنة والموثوقة إلى إيران تبدأ من هنا»',
    subtitle: 'مستشارونا جاهزون للإجابة عن استفساراتكم، دراسة التقارير الطبية، وإعداد برنامج مخصص يلبي تطلعاتكم بدقة.',
    buttonText: 'طلب استشارة والتواصل معنا',
    buttonUrl: OFFICIAL_CONTACT_URL,
  },
  tr: {
    title: '«İran’a Güvenilir Yolculuğunuz Buradan Başlıyor»',
    subtitle: 'Kıdemli uzmanlarımız sorularınızı yanıtlamaya, tıbbi raporlarınızı incelemeye ve size özel programı hazırlamaya hazırdır.',
    buttonText: 'Danışmanlık Talep Edin & İletişime Geçin',
    buttonUrl: OFFICIAL_CONTACT_URL,
  },
  zh: {
    title: '«您的安心赴伊之旅，从这里启程»',
    subtitle: '我们的资深专家团队随时为您解答疑问、评估病历资料并量身定制专属方案。',
    buttonText: '预约专业咨询并联系我们',
    buttonUrl: OFFICIAL_CONTACT_URL,
  },
};

export const getAboutHeroData = (lang: Language = 'fa') => ABOUT_HERO_BY_LANG[lang] || ABOUT_HERO_BY_LANG.fa;
export const getAboutWhoWeAreData = (lang: Language = 'fa') => ABOUT_WHO_WE_ARE_BY_LANG[lang] || ABOUT_WHO_WE_ARE_BY_LANG.fa;
export const getAboutOurFocusData = (lang: Language = 'fa') => ABOUT_OUR_FOCUS_BY_LANG[lang] || ABOUT_OUR_FOCUS_BY_LANG.fa;
export const getAboutMissionData = (lang: Language = 'fa') => ABOUT_MISSION_BY_LANG[lang] || ABOUT_MISSION_BY_LANG.fa;
export const getAboutVisionData = (lang: Language = 'fa') => ABOUT_VISION_BY_LANG[lang] || ABOUT_VISION_BY_LANG.fa;
export const getAboutBrandValuesData = (lang: Language = 'fa') => ABOUT_BRAND_VALUES_BY_LANG[lang] || ABOUT_BRAND_VALUES_BY_LANG.fa;
export const getAboutApproachData = (lang: Language = 'fa') => ABOUT_APPROACH_BY_LANG[lang] || ABOUT_APPROACH_BY_LANG.fa;
export const getAboutCtaData = (lang: Language = 'fa') => ABOUT_CTA_BY_LANG[lang] || ABOUT_CTA_BY_LANG.fa;

export const ABOUT_HERO_DATA = ABOUT_HERO_BY_LANG.fa;
export const ABOUT_WHO_WE_ARE_DATA = ABOUT_WHO_WE_ARE_BY_LANG.fa;
export const ABOUT_OUR_FOCUS_DATA = ABOUT_OUR_FOCUS_BY_LANG.fa;
export const ABOUT_MISSION_DATA = ABOUT_MISSION_BY_LANG.fa;
export const ABOUT_VISION_DATA = ABOUT_VISION_BY_LANG.fa;
export const ABOUT_BRAND_VALUES_DATA = ABOUT_BRAND_VALUES_BY_LANG.fa;
export const ABOUT_APPROACH_DATA = ABOUT_APPROACH_BY_LANG.fa;
export const ABOUT_CTA_DATA = ABOUT_CTA_BY_LANG.fa;

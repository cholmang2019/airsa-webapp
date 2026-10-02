import { Language } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

export const OFFICIAL_CONSULTATION_URL = 'https://medixmaster.com/contact-us/';

export interface ServiceCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  stepNumber?: string;
  stepEn: string;
  title: string;
  description: string;
}

export interface InternationalHeroData {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
}

export interface InternationalSupportData {
  badge: string;
  title: string;
  lead: string;
  description: string;
  image: string;
  pillars: { title: string; desc: string }[];
}

export interface InternationalCtaData {
  badge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  trustPoints: string[];
}

export const INTL_HERO_BY_LANG: Record<Language, InternationalHeroData> = {
  fa: {
    badge: 'Airsa Simorgh Jahan | خدمات بین‌المللی',
    title: '«دروازه‌ای برای ورود به ایران»',
    subtitle: '«خدمات بین‌المللی برای افرادی که به دنبال راه‌اندازی کسب‌وکار، اقامت یا سرمایه‌گذاری در ایران هستند.»',
    ctaText: 'مشاوره تخصصی',
    image: ASSETS.hero.travelServices.src,
  },
  en: {
    badge: 'Airsa Simorgh Jahan | International Advisory',
    title: 'Your Premier Gateway to Iran',
    subtitle: 'Comprehensive international corporate advisory, strategic residency solutions, and direct foreign investment facilitation in Iran.',
    ctaText: 'Request Advisory Consultation',
    image: ASSETS.hero.travelServices.src,
  },
  ar: {
    badge: 'إيرسا سيمرغ جهان | الخدمات الدولية',
    title: '«بوابتكم الموثوقة للاستثمار في إيران»',
    subtitle: '«خدمات دولية متكاملة للمستثمرين ورجال الأعمال الراغبين في تأسيس الشركات، الإقامة، والاستثمار في إيران.»',
    ctaText: 'استشارة تجارية متخصصة',
    image: ASSETS.hero.travelServices.src,
  },
  tr: {
    badge: 'Airsa Simorgh Jahan | Uluslararası Hizmetler',
    title: '«İran’a Açılan Güvenli Kapınız»',
    subtitle: '«İran’da iş kurmak, şirket tescili, ikamet ve doğrudan yabancı yatırım gerçekleştirmek isteyen uluslararası girişimciler için stratejik danışmanlık.»',
    ctaText: 'Uzman Danışmanlık Alın',
    image: ASSETS.hero.travelServices.src,
  },
  zh: {
    badge: '艾尔萨·西摩格 | 国际商贸与投资发展',
    title: '«通往伊朗的高端经贸门户»',
    subtitle: '«为有意在伊朗开展经贸拓展、跨国企业注册、合法长期居留及外商直接投资的企业家提供全流程战略顾问服务。»',
    ctaText: '预约涉外商务咨询',
    image: ASSETS.hero.travelServices.src,
  },
};

export const INTL_SERVICES_BY_LANG: Record<Language, ServiceCardItem[]> = {
  fa: [
    {
      id: 'company-formation',
      number: '۰۱',
      title: 'ثبت شرکت',
      description: 'راهکارهای ثبت شرکت و شروع فعالیت اقتصادی.',
      tag: 'Corporate & Legal Formation',
      image: ASSETS.services.companyFormation.src,
      highlights: [
        'تدوین اساسنامه و انتخاب ساختار حقوقی بهینه',
        'افتتاح حساب‌های شرکتی و امور مالیاتی قانونی',
        'اخذ مجوزهای فعالیت اقتصادی و بازرگانی'
      ],
    },
    {
      id: 'residency-services',
      number: '۰۲',
      title: 'خدمات اقامت',
      description: 'مشاوره درباره راهکارهای قانونی اقامت.',
      tag: 'Residency & Visa Solutions',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'بررسی پرونده و گزینه‌های اقامت تجاری و سرمایه‌گذاری',
        'تسهیل دریافت ویزاهای بلندمدت و تمدید مدارک',
        'همراهی مستمر در کلیه مراجع رسمی و اداری'
      ],
    },
    {
      id: 'foreign-investment',
      number: '۰۳',
      title: 'سرمایه‌گذاری خارجی',
      description: 'مشاوره و خدمات مرتبط با سرمایه‌گذاری خارجی.',
      tag: 'Foreign Direct Investment (FDI)',
      image: ASSETS.services.luxuryTourism.src,
      highlights: [
        'مشاوره فرصت‌های راهبردی و تحلیل بازارهای هدف',
        'رعایت چارچوب‌های تشویق و حمایت از سرمایه‌گذاری (FIPPA)',
        'انتقال امن سرمایه و صیانت از منافع اقتصادی'
      ],
    },
    {
      id: 'international-advisory',
      number: '۰۴',
      title: 'مشاوره بین‌المللی',
      description: 'بررسی نیاز و ارائه مسیر مناسب.',
      tag: 'Strategic Advisory & Roadmapping',
      image: ASSETS.services.intlAdvisory.src,
      highlights: [
        'تحلیل جامع نیازمندی‌ها و اهداف شخصی یا سازمانی',
        'طراحی نقشه راه اجرایی گام‌به‌گام با پیش‌بینی ریسک‌ها',
        'پشتیبانی مشورتی در تمامی مراحل تصمیم‌گیری'
      ],
    },
  ],
  en: [
    {
      id: 'company-formation',
      number: '01',
      title: 'Company Incorporation',
      description: 'Streamlined corporate structuring and commercial entity registration.',
      tag: 'Corporate & Legal Formation',
      image: ASSETS.services.companyFormation.src,
      highlights: [
        'Articles of association drafting and optimal legal structure selection',
        'Corporate banking establishment and regulatory tax compliance',
        'Acquiring commercial licenses and operational ministry permits'
      ],
    },
    {
      id: 'residency-services',
      number: '02',
      title: 'Residency & Legal Status',
      description: 'Strategic counsel on commercial and investment residency frameworks.',
      tag: 'Residency & Visa Solutions',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'Portfolio assessment for business & investment residency pathways',
        'Multi-year business visa facilitations and extension management',
        'Legal accompaniment across all official ministerial departments'
      ],
    },
    {
      id: 'foreign-investment',
      number: '03',
      title: 'Foreign Direct Investment',
      description: 'Advisory and execution for foreign direct investment under FIPPA law.',
      tag: 'Foreign Direct Investment (FDI)',
      image: ASSETS.services.luxuryTourism.src,
      highlights: [
        'Target market opportunity screening and macroeconomic viability',
        'Full compliance with Foreign Investment Protection Act (FIPPA)',
        'Secure capital transfer channels and investor equity safeguarding'
      ],
    },
    {
      id: 'international-advisory',
      number: '04',
      title: 'Strategic Cross-Border Advisory',
      description: 'Comprehensive business diagnostics and customized market roadmaps.',
      tag: 'Strategic Advisory & Roadmapping',
      image: ASSETS.services.intlAdvisory.src,
      highlights: [
        'Comprehensive needs analysis and cross-border commercial strategy',
        'Step-by-step risk-mitigated operational deployment roadmap',
        'Continuous consultative counsel at every strategic milestone'
      ],
    },
  ],
  ar: [
    {
      id: 'company-formation',
      number: '۰۱',
      title: 'تأسيس وتسجيل الشركات',
      description: 'حلول قانونية متكاملة لتسجيل الشركات وبدء النشاط التجاري.',
      tag: 'Corporate & Legal Formation',
      image: ASSETS.services.companyFormation.src,
      highlights: [
        'صياغة عقود التأسيس واختيار الهيكل القانوني والتجاري الأنسب',
        'فتح الحسابات المصرفية للشركات والامتثال للأنظمة الضريبية',
        'استخراج التراخيص التجارية والتصاريح الحكومية الرسمية'
      ],
    },
    {
      id: 'residency-services',
      number: '۰۲',
      title: 'خدمات الإقامة القانونية',
      description: 'استشارات قانونية حول مسارات الإقامة للمستثمرين وأصحاب الأعمال.',
      tag: 'Residency & Visa Solutions',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'دراسة الملف وتحديد مسار الإقامة التجارية والاستثمارية الأنسب',
        'تسهيل استخراج التأشيرات طويلة الأمد وتجديد الإقامات',
        'مرافقة قانونية كاملة لدى جميع الدوائر والوزارات المعنية'
      ],
    },
    {
      id: 'foreign-investment',
      number: '۰۳',
      title: 'الاستثمار الأجنبي المباشر',
      description: 'استشارات متخصصة للاستفادة من قانون تشجيع وحماية الاستثمار (FIPPA).',
      tag: 'Foreign Direct Investment (FDI)',
      image: ASSETS.services.luxuryTourism.src,
      highlights: [
        'تحليل الفرص الاستثمارية الواعدة ودراسات الجدوى الاقتصادية',
        'تسجيل الاستثمار وفق قانون حماية وضمان الاستثمارات الأجنبية',
        'تأمين قنوات تحويل رؤوس الأموال وحماية الحقوق القانونية'
      ],
    },
    {
      id: 'international-advisory',
      number: '۰۴',
      title: 'الاستشارات الدولية الاستراتيجية',
      description: 'تقييم متطلبات العمل وتقديم خارطة طريق آمنة لدخول السوق.',
      tag: 'Strategic Advisory & Roadmapping',
      image: ASSETS.services.intlAdvisory.src,
      highlights: [
        'تحليل شامل لأهداف المستثمر الفردي أو المؤسسي',
        'تصميم خطة عمل تنفيذية مرحلية وتفادي المخاطر',
        'دعم استشاري دائم ومرافقة خلال جميع مراحل اتخاذ القرار'
      ],
    },
  ],
  tr: [
    {
      id: 'company-formation',
      number: '01',
      title: 'Şirket Kuruluşu ve Tescili',
      description: 'Yasal şirket kurulumu ve ticari faaliyete başlama çözümleri.',
      tag: 'Corporate & Legal Formation',
      image: ASSETS.services.companyFormation.src,
      highlights: [
        'Şirket ana sözleşmesinin hazırlanması ve en uygun kurumsal yapının seçimi',
        'Kurumsal banka hesaplarının açılışı ve vergi uyum süreçleri',
        'Ticari ve operasyonel faaliyet izinlerinin alınması',
      ],
    },
    {
      id: 'residency-services',
      number: '02',
      title: 'İkamet ve Vize Hizmetleri',
      description: 'Yatırımcılar ve yöneticiler için yasal ikamet danışmanlığı.',
      tag: 'Residency & Visa Solutions',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        'Ticari ve yatırım amaçlı ikamet dosyalarının analizi ve başvurusu',
        'Uzun süreli iş vizeleri ve oturum izinlerinin uzatılması',
        'İlgili tüm resmi kurumlarda kesintisiz hukuki refakat',
      ],
    },
    {
      id: 'foreign-investment',
      number: '03',
      title: 'Doğrudan Yabancı Yatırım (FDI)',
      description: 'Yabancı Yatırımı Teşvik ve Koruma Kanunu (FIPPA) kapsamında uzman danışmanlık.',
      tag: 'Foreign Direct Investment (FDI)',
      image: ASSETS.services.luxuryTourism.src,
      highlights: [
        'Stratejik yatırım fırsatlarının analizi ve fizibilite raporları',
        'Yabancı sermaye koruma kanunu kapsamında yatırım tescili',
        'Sermaye transfer kanallarının güvence altına alınması ve hukuki hakların korunması',
      ],
    },
    {
      id: 'international-advisory',
      number: '04',
      title: 'Stratejik Uluslararası Danışmanlık',
      description: 'Girişimciler için pazar analizi ve güvenli giriş yol haritası.',
      tag: 'Strategic Advisory & Roadmapping',
      image: ASSETS.services.intlAdvisory.src,
      highlights: [
        'Bireysel veya kurumsal yatırımcı hedeflerinin kapsamlı analizi',
        'Kademeli uygulama planı tasarlanması ve risklerin önlenmesi',
        'Tüm karar alma aşamalarında daimi danışmanlık ve rehberlik',
      ],
    },
  ],
  zh: [
    {
      id: 'company-formation',
      number: '01',
      title: '外资企业设立与商业注册',
      description: '公司设立、法律架构及合规展业一站式解决方案。',
      tag: 'Corporate & Legal Formation',
      image: ASSETS.services.companyFormation.src,
      highlights: [
        '拟定公司章程并选择最优外资法律企业结构',
        '协助开立商业银行账户与税务登记合规申报',
        '代办官方商贸展业许可证与特许经营批文',
      ],
    },
    {
      id: 'residency-services',
      number: '02',
      title: '合法居留许可与工作签证',
      description: '权威指导外商投资及高管合规居留路径。',
      tag: 'Residency & Visa Solutions',
      image: ASSETS.services.visaAssistance.src,
      highlights: [
        '个案评估投资居留、高管工签与自雇许可路径',
        '加急协助长期商务签证申领与到期延期手续',
        '专人陪同前往移民局及外事部门办理证件盖印',
      ],
    },
    {
      id: 'foreign-investment',
      number: '03',
      title: '外商直接投资 (FDI) 与法律保护',
      description: '在《外国投资促进与保护法》(FIPPA) 框架下进行投资运作。',
      tag: 'Foreign Direct Investment (FDI)',
      image: ASSETS.services.luxuryTourism.src,
      highlights: [
        '战略投资契机尽职调查与项目可行性深度报告',
        '依据 FIPPA 法规申请外商资本全额国家级保护批文',
        '锁定合法跨境资金流动通道并筑牢法律产权屏障',
      ],
    },
    {
      id: 'international-advisory',
      number: '04',
      title: '跨国战略咨询与市场准入路线图',
      description: '为跨国企业家提供深度本土市场调研与安全准入指引。',
      tag: 'Strategic Advisory & Roadmapping',
      image: ASSETS.services.intlAdvisory.src,
      highlights: [
        '深度剖析外资企业在伊商业目标与竞争格局',
        '制定分阶段执行规划，有效规避合规与商业风险',
        '在关键决策各节点提供全天候战略指引与伙伴引荐',
      ],
    },
  ],
};

export const INTL_SUPPORT_BY_LANG: Record<Language, InternationalSupportData> = {
  fa: {
    badge: 'پشتیبانی یکپارچه بین‌المللی',
    title: '«یک نقطه تماس برای مسیر شما»',
    lead: 'آرامش، اطمینان و سرعت عمل در تعامل با یک تیم اختصاصی و متعهد.',
    description: 'در ایرسا سیمرغ جهان، تمامی هماهنگی‌های حقوقی، تجاری، اقامتی و اجرایی از طریق یک مدیر پرونده ارشد و اختصاصی ساماندهی می‌شود. به جای درگیر شدن با سازمان‌های متعدد، تشریفات پیچیده اداری و پیگیری‌های پراکنده، شما از یک نقطه تماس مطمئن و مسلط به پروتکل‌های بین‌المللی بهره‌مند می‌شوید که مسیر ورود و استقرار شما را با بالاترین دقت، شفافیت و محرمانگی مدیریت می‌کند.',
    image: ASSETS.services.consultation.src,
    pillars: [
      { title: 'مدیر پرونده اختصاصی (Single Point of Contact)', desc: 'پاسخگویی مستقیم و یکپارچه در تمامی ابعاد سفر، اقامت و تجارت.' },
      { title: 'محرمانگی و انضباط بین‌المللی', desc: 'صیانت کامل از حریم خصوصی، اسناد مالی و اطلاعات کسب‌وکار شما.' },
      { title: 'شبکه متخصصان حقوقی و مالی', desc: 'همکاری مستقیم با وکلای پایه یک و کارشناسان ارشد سرمایه‌گذاری.' },
    ],
  },
  en: {
    badge: 'Unified International Concierge',
    title: 'A Single Point of Contact for Your Enterprise',
    lead: 'Confidence, swift execution, and total tranquility with a committed executive desk.',
    description: 'At Airsa Simorgh Jahan, all legal, commercial, residency, and logistical steps are steered by a designated senior case director. Rather than navigating divergent government bodies and cumbersome administrative procedures alone, you benefit from one authoritative, bilingual contact who handles your entry, corporate launch, and compliance with absolute discretion.',
    image: ASSETS.services.consultation.src,
    pillars: [
      { title: 'Single Point of Contact (SPOC)', desc: 'Direct, unified oversight of travel, legal status, and corporate governance.' },
      { title: 'Rigorous International Discretion', desc: 'Absolute safeguarding of personal data, financial assets, and intellectual property.' },
      { title: 'Elite Legal & Financial Network', desc: 'Direct partnership with top-tier corporate attorneys and licensed FDI advisors.' },
    ],
  },
  ar: {
    badge: 'منظومة الدعم الدولي الموحد',
    title: '«نقطة اتصال واحدة وخبيرة لكافة معاملاتكم»',
    lead: 'اطمئنان، سرعة إنجاز، واحترافية مطلقة مع فريق استشاري متفرغ لخدمتكم.',
    description: 'في إيرسا سيمرغ جهان، تتم إدارة كافة التنسيقات القانونية، التجارية، الإدارية، والإقامات من خلال مدير ملف أول ومخصص. بدلاً من التعامل مع مؤسسات حكومية متعددة وإجراءات معقدة، ستتعاملون مع نقطة اتصال واحدة تجيد لغتكم وتتقن البروتوكولات الدولية، لتوجيه استثماراتكم وحماية مصالحكم بأعلى درجات السرية والشفافية.',
    image: ASSETS.services.consultation.src,
    pillars: [
      { title: 'مدير ملف مخصص (Single Point of Contact)', desc: 'متابعة مباشرة وموحدة لكافة جوانب السفر، الإقامة، والمعاملات التجارية.' },
      { title: 'السرية والاحترافية الدولية', desc: 'حماية كاملة لخصوصية الضيوف، والوثائق المالية، وخطط الأعمال.' },
      { title: 'شبكة كبار المحامين والخبراء الماليين', desc: 'تعاون مباشر مع نخبة من المستشارين القانونيين وخبراء الاستثمار الأجنبي.' },
    ],
  },
  tr: {
    badge: 'Entegre Uluslararası Destek',
    title: '«Yatırım Süreciniz İçin Tek Bir İletişim Noktası»',
    lead: 'Özel ve kararlı bir ekiple güven, hızlı icra ve tam bir huzur.',
    description: 'Airsa Simorgh Jahan’da tüm hukuki, ticari, ikamet ve operasyonel koordinasyonlar, size özel atanmış kıdemli bir dosya yöneticisi tarafından yürütülür. Farklı resmi kurumlar ve karmaşık bürokratik işlemlerle tek başınıza uğraşmak yerine, uluslararası protokollere hakim tek bir uzman temas noktasıyla çalışırsınız.',
    image: ASSETS.services.consultation.src,
    pillars: [
      { title: 'Özel Dosya Yöneticisi (SPOC)', desc: 'Seyahat, oturum ve ticari işlemlerinizin tüm boyutlarında doğrudan ve koordineli takip.' },
      { title: 'Uluslararası Gizlilik ve Disiplin', desc: 'Kişisel verilerinizin, ticari belgelerinizin ve finansal planlarınızın mutlak korunması.' },
      { title: 'Seçkin Hukuk ve Finans Ağı', desc: 'Alanında uzman kurumsal avukatlar ve lisanslı yatırım danışmanlarıyla doğrudan çalışma.' },
    ],
  },
  zh: {
    badge: '一站式涉外综合支持体系',
    title: '«企业在伊发展的单一专属联络专员 (SPOC)»',
    lead: '由专业高效的执行专班护航，带来从容笃定与极速推进。',
    description: '在艾尔萨·西摩格，所有涉及法务、商务、居留许可及落地物流的环节，均由指派的资深项目总监统筹把控。您无需在错综复杂的行政部门和陌生官僚流程中独自摸索，只需与一位精通涉外商业惯例的高级双语个案经理直接沟通，即可全权托付。',
    image: ASSETS.services.consultation.src,
    pillars: [
      { title: '单一专属项目总监 (SPOC)', desc: '对商务出访、法人身份及跨国治理进行集中统一对接。' },
      { title: '国际级严密商业保密', desc: '全面筑牢商业秘密、财务资料与知识产权的保密防线。' },
      { title: '顶尖法务与财务顾问网络', desc: '直接联合知名涉外商事律师及持牌外商投资顾问协同作业。' },
    ],
  },
};

export const PROCESS_STEPS_BY_LANG: Record<Language, ProcessStep[]> = {
  fa: [
    { number: '۰۱', stepNumber: '۰۱', stepEn: 'Initial Consultation', title: 'مشاوره اولیه و ارزیابی نیاز', description: 'جلسه تخصصی برای بررسی اهداف، بررسی شرایط پرونده و تدوین راهکارهای اولیه.' },
    { number: '۰۲', stepNumber: '۰۲', stepEn: 'Strategic Roadmapping', title: 'تدوین نقشه راه و راهکار حقوقی', description: 'ارائه چارچوب شفاف هزینه‌ها، زمان‌بندی دقیق و گام‌های اجرایی ثبت یا اقامت.' },
    { number: '۰۳', stepNumber: '۰۳', stepEn: 'Document & Filing', title: 'تکمیل اسناد و ثبت رسمی', description: 'ترجمه رسمی، تاییدات دادگستری و امور خارجه، و ثبت درخواست در سامانه‌های قانونی.' },
    { number: '۰۴', stepNumber: '۰۴', stepEn: 'Execution & Support', title: 'پیگیری نهایی و استقرار پایدار', description: 'اخذ مجوزها، افتتاح حساب‌ها، دریافت ویزا یا کارت اقامت، و پشتیبانی مستمر حقوقی.' },
  ],
  en: [
    { number: '01', stepNumber: '01', stepEn: 'Initial Consultation', title: 'Initial Consultation & Diagnostic', description: 'Specialized discovery session evaluating your investment objectives, legal feasibility, and timelines.' },
    { number: '02', stepNumber: '02', stepEn: 'Strategic Roadmapping', title: 'Strategic Roadmap & Legal Structuring', description: 'Formulating clear cost models, regulatory milestones, and corporate or residency blueprints.' },
    { number: '03', stepNumber: '03', stepEn: 'Document & Filing', title: 'Documentation & Official Filings', description: 'Certified legal translations, apostille verifications, and formal portal submissions to ministries.' },
    { number: '04', stepNumber: '04', stepEn: 'Execution & Support', title: 'Final Approvals & Sustained Support', description: 'Procuring commercial licenses, corporate accounts, residency permits, and continuing legal governance.' },
  ],
  ar: [
    { number: '۰۱', stepNumber: '۰۱', stepEn: 'Initial Consultation', title: 'الاستشارة الأولية وتقييم الحالة', description: 'جلسة عمل تخصصية لدراسة الأهداف الاستثمارية وفحص المتطلبات القانونية والجدول المقترح.' },
    { number: '۰۲', stepNumber: '۰۲', stepEn: 'Strategic Roadmapping', title: 'إعداد خارطة الطريق القانونية', description: 'تقديم خطة تنفيذية شفافة توضح التكاليف، والمراحل الزمنية لتسجيل الشركة أو نيل الإقامة.' },
    { number: '۰۳', stepNumber: '۰۳', stepEn: 'Document & Filing', title: 'تجهيز الوثائق والإيداع الرسمي', description: 'الترجمة القانونية المعتمدة، تصديق الخارجية، وإيداع الملفات في المنظومات الرسمية.' },
    { number: '۰۴', stepNumber: '۰۴', stepEn: 'Execution & Support', title: 'الإنجاز النهائي والدعم المستمر', description: 'استلام التراخيص، فتح الحسابات البنكية، صدور بطاقات الإقامة، والدعم القانوني اللاحق.' },
  ],
  tr: [
    { number: '01', stepNumber: '01', stepEn: 'Initial Consultation', title: 'İlk Danışmanlık ve İhtiyaç Analizi', description: 'Yatırım hedeflerinizin, yasal gereksinimlerin ve takvimin değerlendirildiği keşif oturumu.' },
    { number: '02', stepNumber: '02', stepEn: 'Strategic Roadmapping', title: 'Stratejik Yol Haritası ve Hukuki Yapılandırma', description: 'Şeffaf maliyet tablosu, net takvim ve şirket kuruluşu/ikamet adımlarının belirlenmesi.' },
    { number: '03', stepNumber: '03', stepEn: 'Document & Filing', title: 'Belgelerin Hazırlanması ve Resmi Başvuru', description: 'Yeminli tercümeler, elçilik/bakanlık onayları ve resmi yasal portallara başvuru.' },
    { number: '04', stepNumber: '04', stepEn: 'Execution & Support', title: 'Nihai Onaylar ve Kesintisiz Destek', description: 'Ruhsatların alınması, banka hesaplarının açılması, ikamet kartları ve sürekli hukuki refakat.' },
  ],
  zh: [
    { number: '01', stepNumber: '01', stepEn: 'Initial Consultation', title: '初步商务咨询与意向评估', description: '召开闭门沟通会议，评估您的投资目标、法律可行性及预期时间进度表。' },
    { number: '02', stepNumber: '02', stepEn: 'Strategic Roadmapping', title: '制定战略路线图与法律架构', description: '提供清晰的费用预算模型、官方审批里程碑及公司设立或居留申请规划。' },
    { number: '03', stepNumber: '03', stepEn: 'Document & Filing', title: '涉外公证认证与官方立案呈报', description: '办理经公证的专业法律翻译、领事海牙认证，并在对应官方政务系统完成立案。' },
    { number: '04', stepNumber: '04', stepEn: 'Execution & Support', title: '执照批文获取与长期稳健展业', description: '领取商业注册登记证、开立公司账户、签发居留证件，并提供常年涉外法律支持。' },
  ],
};

export const INTL_CTA_BY_LANG: Record<Language, InternationalCtaData> = {
  fa: {
    badge: 'برنامه‌ریزی استراتژیک و توسعه در ایران',
    title: '«مسیر ورود خود به ایران را با اطمینان آغاز کنید»',
    subtitle: 'کارشناسان ارشد حقوقی و تجاری ایرسا سیمرغ جهان آماده پاسخگویی به سوالات و تدوین برنامه متناسب با اهداف شما هستند.',
    buttonText: 'درخواست مشاوره تخصصی',
    trustPoints: ['مشاوره تخصصی و محرمانه', 'شفافیت کامل در هزینه‌ها و زمان‌بندی', 'پشتیبانی مستمر حقوقی تا اخذ نتیجه'],
  },
  en: {
    badge: 'Strategic Planning & Growth in Iran',
    title: 'Embark on Your Ventures in Iran with Confidence',
    subtitle: 'Our senior corporate and legal advisors are prepared to address your inquiries and engineer a plan tailored to your commercial goals.',
    buttonText: 'Request Advisory Consultation',
    trustPoints: ['Confidential Legal Advisory', 'Full Timeline & Fee Transparency', 'Continuing Governance & Account Support'],
  },
  ar: {
    badge: 'التخطيط الاستراتيجي والتوسع في إيران',
    title: '«ابدأ مسيرتك الاستثمارية في إيران بثقة وأمان»',
    subtitle: 'كبار المستشارين القانونيين والتجاريين في إيرسا سيمرغ جهان مستعدون للإجابة عن استفساراتكم وإعداد خطة مخصصة تلبي أهدافكم.',
    buttonText: 'طلب استشارة تجارية واستثمارية',
    trustPoints: ['استشارات قانونية تخصصية ومحمية', 'شفافية مطلقة في التكاليف والمدد', 'متابعة حثيثة ومستمرة حتى استلام التراخيص'],
  },
  tr: {
    badge: 'İran’da Stratejik Planlama ve Gelişim',
    title: '«İran’daki Girişimlerinize Tam Güvenle Başlayın»',
    subtitle: 'Airsa Simorgh Jahan’ın kıdemli hukuk ve ticaret danışmanları, hedeflerinize uygun yol haritasını hazırlamak için hazırdır.',
    buttonText: 'Uzman Danışmanlık Talep Edin',
    trustPoints: ['Gizli ve Güvenli Hukuki Danışmanlık', 'Maliyet ve Takvimde Tam Şeffaflık', 'Sonuç Alınana Kadar Sürekli İdari Destek'],
  },
  zh: {
    badge: '在伊朗进行战略布局与业务扩张',
    title: '«满怀信心，开启您在伊朗的经贸投资新征程»',
    subtitle: '艾尔萨·西摩格资深法务与经贸投资专家随时准备为您答疑解惑，构筑精准契合商业雄心的落地路径。',
    buttonText: '预约涉外商贸投资咨询',
    trustPoints: ['高度保密的专业法务咨询', '费用清单与审批时限完全公开透明', '从前期筹备到最终获批全程跟进到底'],
  },
};

export const getInternationalHeroData = (lang: Language = 'fa') => INTL_HERO_BY_LANG[lang] || INTL_HERO_BY_LANG.fa;
export const getInternationalServicesData = (lang: Language = 'fa') => INTL_SERVICES_BY_LANG[lang] || INTL_SERVICES_BY_LANG.fa;
export const getInternationalSupportData = (lang: Language = 'fa') => INTL_SUPPORT_BY_LANG[lang] || INTL_SUPPORT_BY_LANG.fa;
export const getProcessStepsData = (lang: Language = 'fa') => PROCESS_STEPS_BY_LANG[lang] || PROCESS_STEPS_BY_LANG.fa;
export const getInternationalCtaData = (lang: Language = 'fa') => INTL_CTA_BY_LANG[lang] || INTL_CTA_BY_LANG.fa;

export const INTERNATIONAL_HERO_DATA = INTL_HERO_BY_LANG.fa;
export const INTERNATIONAL_SERVICES_DATA = INTL_SERVICES_BY_LANG.fa;
export const INTERNATIONAL_SUPPORT_DATA = INTL_SUPPORT_BY_LANG.fa;
export const PROCESS_STEPS_DATA = PROCESS_STEPS_BY_LANG.fa;
export const INTERNATIONAL_CTA_DATA = INTL_CTA_BY_LANG.fa;

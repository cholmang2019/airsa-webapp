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
      'Seyahat öncesi tıbbi değerlendirmeden vize alımına, CIP havalimanı karşılamasından 5 yıldızlı konaklamaya, önde gelen cerrahlarla hastane süreçlerinden butik kültür gezilerine kadar her aşama titizlikle denetlenir.',
      'Bu bütünleşik yaklaşım, uluslararası hastaların ve misafirlerimizin tüm operasyonel ayrıntıları profesyonel ekibimize emanet ederek sadece iyileşmelerine, kültürel keşiflerine veya ticari hedeflerine odaklanmalarını sağlar.',
    ],
    stats: [
      { label: 'Uçtan Uca Süreç Kapsamı', value: '%100', desc: 'Çıkış noktasından dönüşe kadar' },
      { label: 'Kesintisiz Destek', value: '7/24', desc: 'Tam zamanlı çok dilli danışmanlar' },
      { label: 'Akredite İş Ortağı Ağı', value: '+50', desc: 'Onaylı hastane ve lüks oteller' },
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

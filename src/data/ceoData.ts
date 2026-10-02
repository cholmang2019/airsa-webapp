import { Language } from '../context/LanguageContext';

export interface CeoTravelPath {
  id: string;
  number: string;
  title: string;
  badge: string;
  description: string;
  targetAudience: string;
  iconName: 'palm' | 'briefcase' | 'landmark' | 'graduation-cap' | 'activity' | 'heart-pulse';
  gradient: string;
  image: string;
  imageAlt: string;
}

export interface CeoExpertise {
  id: string;
  title: string;
  tag: string;
  desc: string;
  image?: string;
}

export interface CeoPageData {
  metaTitle: string;
  metaDesc: string;
  breadcrumb: {
    home: string;
    about: string;
    current: string;
  };
  hero: {
    badge: string;
    name: string;
    title: string;
    company: string;
    quote: string;
    contactCta: string;
    secondaryCta: string;
    portraitImage: string;
    portraitAlt: string;
  };
  overview: {
    badge: string;
    heading: string;
    lead: string;
    bioParagraphs: string[];
    image: string;
    imageAlt: string;
    expertises: CeoExpertise[];
  };
  philosophy: {
    badge: string;
    title: string;
    subtitle: string;
    quoteText: string;
    introParagraph: string;
    paths: CeoTravelPath[];
  };
  internationalTrade: {
    badge: string;
    title: string;
    lead: string;
    description: string;
    image: string;
    imageAlt: string;
    points: { title: string; desc: string }[];
  };
  personalStatement: {
    badge: string;
    title: string;
    paragraphs: string[];
    highlightQuote: string;
    goalTitle: string;
    goalText: string;
    image: string;
    imageAlt: string;
  };
  vision: {
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    sectors: string[];
    motto: string;
    signOff: {
      name: string;
      role: string;
      company: string;
    };
  };
}

export const CEO_PAGE_DATA_BY_LANG: Record<Language, CeoPageData> = {
  fa: {
    metaTitle: 'حدیثه دهقانی پوده | بنیان‌گذار و مدیر ایرسا سیمرغ جهان',
    metaDesc: 'آشنایی با حدیثه دهقانی پوده بنیان‌گذار و مدیر ایرسا سیمرغ جهان، دیدگاه چندبعدی به سفر، گردشگری سلامت، سفرهای تجاری، نمایشگاهی، علمی و ورزشی.',
    breadcrumb: {
      home: 'خانه',
      about: 'درباره ما',
      current: 'مدیر عامل و بنیان‌گذار',
    },
    hero: {
      badge: 'رهبری و بنیان‌گذاری',
      name: 'حدیثه دهقانی پوده',
      title: 'بنیان‌گذار و مدیر ایرسا سیمرغ جهان',
      company: 'شرکت ایرسا سیمرغ جهان',
      quote: '«هر سفر می‌تواند آغاز یک تجربه، یک ارتباط یا یک فرصت تازه باشد.»',
      contactCta: 'ارتباط مستقیم با دفتر مدیریت',
      secondaryCta: 'مشاهده چشم‌انداز و مسیرها',
      portraitImage: '/images/team/hadiseh-dehghani-ceo.jpg',
      portraitAlt: 'حدیثه دهقانی پوده - بنیان‌گذار و مدیر عامل ایرسا سیمرغ جهان',
    },
    overview: {
      badge: 'نگاه چندبعدی به سفر',
      heading: 'تلاقی تجربه، سلامت، تجارت و فرصت‌های بین‌المللی',
      lead: 'ایرسا سیمرغ جهان حاصل یک نگاه چندبعدی به مفهوم سفر و فرصت‌های بین‌المللی است؛ نگاهی که سفر را تنها رفتن از یک شهر یا کشور به مقصدی دیگر نمی‌بیند، بلکه آن را می‌تواند مسیری برای تجربه، آموزش، سلامت، تجارت، ارتباط و توسعه فردی و حرفه‌ای بداند.',
      bioParagraphs: [
        'حدیثه دهقانی پوده با پیشینه تخصصی در حوزه سلامت و تجربه فعالیت در زمینه‌های آموزش، مشاوره، توسعه کسب‌وکار، تجارت و خدمات بین‌المللی، گردشگری، پوست و زیبایی، طب سوزنی و مربیگری ورزشی، مسیر حرفه‌ای خود را در حوزه‌های متنوعی دنبال کرده است.',
        'ترکیب این تجربیات، دیدگاهی متفاوت نسبت به صنعت سفر ایجاد کرده است؛ دیدگاهی که به شکل‌گیری ایرسا سیمرغ جهان و توسعه آن در حوزه‌های مختلف گردشگری منجر شده است.',
      ],
      image: '/images/about/health-international-trade.webp',
      imageAlt: 'همکاری‌های راهبردی در حوزه سلامت، تجارت و فرصت‌های بین‌المللی',
      expertises: [
        {
          id: 'health',
          title: 'حوزه سلامت و مراقبت بالینی',
          tag: 'Healthcare & Clinical Care',
          desc: 'پیشینه تخصصی و دیدگاه عمیق به زنجیره درمان، بهداشت و مراقبت از بیمار',
          image: '/images/about/focus-health-doctor.webp',
        },
        {
          id: 'trade',
          title: 'تجارت و خدمات بین‌المللی',
          tag: 'International Business & Trade',
          desc: 'تجربه مذاکرات تجاری، ارتباطات بین‌المللی و گشایش بازارهای جدید خارجی',
          image: '/images/about/focus-intl-corporate.webp',
        },
        {
          id: 'beauty-acupuncture',
          title: 'پوست، زیبایی و طب سوزنی',
          tag: 'Aesthetics & Acupuncture',
          desc: 'تخصص در تکنیک‌های تکمیلی درمانی، زیبایی و تندرستی کل‌نگر',
          image: '/images/services/post-op-recovery.webp',
        },
        {
          id: 'consulting',
          title: 'آموزش، مشاوره و توسعه کسب‌وکار',
          tag: 'Consulting & Business Growth',
          desc: 'برنامه‌ریزی استراتژیک، توسعه زیرساخت‌های تجاری و ارتقای سرمایه انسانی',
          image: '/images/about/approach-formal-meeting.webp',
        },
        {
          id: 'sports',
          title: 'مربیگری ورزشی و تندرستی',
          tag: 'Sports Coaching & Fitness',
          desc: 'درک دقیق نیازمندی‌های ورزشکاران حرفه‌ای، اردوهای تخصصی و کمپ‌ها',
          image: '/images/services/kish-island-resort.webp',
        },
        {
          id: 'tourism',
          title: 'گردشگری هدفمند و تخصصی',
          tag: 'Specialized & Purposeful Travel',
          desc: 'طراحی بسته‌های سفر همسو با هدف، زمان و هویت مسافر',
          image: '/images/about/focus-tourism-isfahan.webp',
        },
      ],
    },
    philosophy: {
      badge: 'فلسفه و رویکرد ایرسا',
      title: 'سفر برای هر هدف، یک مسیر متفاوت دارد',
      subtitle: 'هماهنگی خدمات سفر با هدف واقعی مسافر؛ از آسایش و کشف تا تجارت و تندرستی.',
      quoteText: 'از نگاه بنیان‌گذار ایرسا، سفر زمانی ارزشمندتر می‌شود که با هدف واقعی مسافر هماهنگ باشد.',
      introParagraph: 'یک نفر برای استراحت و کشف یک مقصد جدید سفر می‌کند؛ فردی دیگر برای شرکت در یک دوره آموزشی، یک ورزشکار برای حضور در رویداد یا کمپ ورزشی، یک متخصص برای شرکت در کنگره، یک مدیر برای مذاکره تجاری و یک فعال اقتصادی برای حضور در نمایشگاه و یافتن فرصت‌های جدید بازار. ایرسا با همین نگاه، خدمات و برنامه‌های سفر خود را در مسیرهای متنوع توسعه می‌دهد.',
      paths: [
        {
          id: 'leisure',
          number: '۰۱',
          title: 'گردشگری و سفرهای تفریحی',
          badge: 'Leisure & Cultural Travel',
          description: 'برنامه‌ریزی و هماهنگی سفرهای تفریحی داخلی و بین‌المللی، تورهای گردشگری، سفرهای خانوادگی و سفرهای اختصاصی، بخشی از فعالیت ایرسا است.',
          targetAudience: 'هدف این است که مسافر بتواند با برنامه‌ریزی مناسب، از زمان خود در مقصد بیشترین بهره را ببرد و تجربه‌ای متناسب با علایق و هدف سفر خود داشته باشد.',
          iconName: 'palm',
          gradient: 'from-amber-500/20 to-orange-500/10',
          image: '/images/services/isfahan-naghshe-jahan.webp',
          imageAlt: 'گردشگری و میراث فرهنگی اصفهان و ایران',
        },
        {
          id: 'business',
          number: '۰۲',
          title: 'سفرهای تجاری',
          badge: 'Business & Corporate Travel',
          description: 'سفر می‌تواند بخشی از مسیر توسعه یک کسب‌وکار باشد. ایرسا در زمینه هماهنگی و برنامه‌ریزی سفرهای تجاری و کاری فعالیت می‌کند.',
          targetAudience: 'سفرهایی که می‌توانند با هدف مذاکره، توسعه بازار، برقراری ارتباط با شرکت‌ها، بررسی بازارهای جدید و ایجاد همکاری‌های بین‌المللی انجام شوند.',
          iconName: 'briefcase',
          gradient: 'from-blue-500/20 to-indigo-500/10',
          image: '/images/about/approach-boardroom.webp',
          imageAlt: 'جلسات تجاری و مذاکرات بین‌المللی شرکتی',
        },
        {
          id: 'exhibition',
          number: '۰۳',
          title: 'سفرهای نمایشگاهی',
          badge: 'Exhibition & Trade Fairs',
          description: 'نمایشگاه‌های بین‌المللی یکی از مهم‌ترین مسیرهای آشنایی با بازارها، محصولات، فناوری‌ها و شرکت‌های جدید هستند. ایرسا در طراحی و هماهنگی سفرهای نمایشگاهی، فرآیند سفر را متناسب با زمان و هدف حضور در نمایشگاه برنامه‌ریزی می‌کند.',
          targetAudience: 'مناسب صاحبان کسب‌وکار، مدیران، متخصصان، تولیدکنندگان، فعالان تجاری و علاقه‌مندان به بازارهای بین‌المللی.',
          iconName: 'landmark',
          gradient: 'from-emerald-500/20 to-teal-500/10',
          image: '/images/about/approach-conference.webp',
          imageAlt: 'حضور در همایش‌ها و نمایشگاه‌های تخصصی بین‌المللی',
        },
        {
          id: 'academic',
          number: '۰۴',
          title: 'سفرهای آموزشی و علمی',
          badge: 'Educational & Academic Travel',
          description: 'یادگیری محدود به کلاس و فضای آموزشی نیست. شرکت در دوره‌های آموزشی بین‌المللی، سمینارها، کنگره‌ها، کنفرانس‌ها، کارگاه‌های تخصصی و برنامه‌های آموزشی می‌تواند بخشی از یک سفر هدفمند باشد.',
          targetAudience: 'هماهنگی سفر افرادی که با هدف یادگیری، ارتقای مهارت، شرکت در رویدادهای تخصصی و ایجاد ارتباطات حرفه‌ای سفر می‌کنند.',
          iconName: 'graduation-cap',
          gradient: 'from-purple-500/20 to-indigo-500/10',
          image: '/images/services/persepolis-heritage.webp',
          imageAlt: 'سفرهای علمی، باستان‌شناسی و کنگره‌های تخصصی',
        },
        {
          id: 'sports',
          number: '۰۵',
          title: 'سفرهای ورزشی',
          badge: 'Sports Camps & Tournaments',
          description: 'با توجه به سابقه فعالیت در حوزه ورزش، یکی دیگر از حوزه‌های مورد توجه ایرسا، سفرهای ورزشی است؛ از سفر برای حضور در رویدادها و مسابقات گرفته تا کمپ‌ها، دوره‌های آموزشی و برنامه‌های تخصصی ورزشی.',
          targetAudience: 'ایجاد هماهنگی میان نیازهای ورزشی و خدمات سفر برای تجربه‌ای منظم‌تر و هدفمندتر.',
          iconName: 'activity',
          gradient: 'from-rose-500/20 to-red-500/10',
          image: '/images/services/kish-island-resort.webp',
          imageAlt: 'اردوها و مقاصد ورزشی و ساحلی کیش',
        },
        {
          id: 'health',
          number: '۰۶',
          title: 'گردشگری سلامت',
          badge: 'Health & Medical Tourism',
          description: 'پیشینه بنیان‌گذار ایرسا در حوزه سلامت و همچنین فعالیت در زمینه‌های پوست و زیبایی و طب سوزنی، نقش مهمی در شکل‌گیری نگاه ایرسا به گردشگری سلامت داشته است.',
          targetAudience: 'ایجاد ارتباط منظم میان سفر، اقامت و هماهنگی خدمات سلامت و درمان با بهره‌گیری از ظرفیت مراکز معتبر و متخصصان همکار.',
          iconName: 'heart-pulse',
          gradient: 'from-cyan-500/20 to-blue-500/10',
          image: '/images/services/hospital-booking.webp',
          imageAlt: 'بیمارستان‌ها و مراکز درمانی فوق‌تخصصی همکار ایرسا',
        },
      ],
    },
    internationalTrade: {
      badge: 'پیوند استراتژیک',
      title: 'تجارت، سفر و فرصت‌های بین‌المللی',
      lead: 'یکی از اهداف اصلی در شکل‌گیری ایرسا، ایجاد پیوند میان گردشگری و تجارت بین‌المللی است.',
      description: 'امروزه سفر می‌تواند نقطه آغاز یک همکاری تجاری، آشنایی با یک بازار جدید، حضور در یک نمایشگاه، شرکت در یک رویداد تخصصی یا ایجاد ارتباط با یک شریک بین‌المللی باشد. به همین دلیل، ایرسا تلاش می‌کند در کنار خدمات گردشگری، با توسعه ارتباطات حرفه‌ای و بین‌المللی، زمینه دسترسی مخاطبان به فرصت‌های جدید سفر و کسب‌وکار را فراهم کند.',
      image: '/images/services/company-formation.webp',
      imageAlt: 'توسعه ارتباطات تجاری و جلسات دیپلماتیک بازرگانی',
      points: [
        {
          title: 'شروع همکاری‌های پایدار تجاری',
          desc: 'پیوند دادن فعالان اقتصادی با شرکای تجاری، تأمین‌کنندگان و سرمایه‌گذاران معتبر بین‌المللی.',
        },
        {
          title: 'کشف و تحلیل بازارهای نوظهور',
          desc: 'فراهم‌سازی بسترهای میدانی برای بررسی میدانی بازارها و رقبا با همراهی کارشناسان محلی.',
        },
        {
          title: 'تسهیل جامع امور بازرگانی و اقامتی',
          desc: 'همراهی گام‌به‌گام از ویزای تجاری تا ترتیبات جلسات کاری، ثبت شرکت و ترتیبات اقامتی.',
        },
      ],
    },
    personalStatement: {
      badge: 'مانیفست بنیان‌گذار',
      title: 'نگاه من به ایرسا',
      paragraphs: [
        'ایرسا سیمرغ جهان برای من صرفاً یک آژانس یا ارائه‌دهنده خدمات سفر نیست.',
        'ایرسا نتیجه ترکیب تجربه‌ها و علاقه‌هایی است که در طول مسیر حرفه‌ای خود در حوزه‌های سلامت، آموزش، ورزش، زیبایی، تجارت، گردشگری و فعالیت‌های بین‌المللی به دست آورده‌ام.',
        'من باور دارم که مرز میان حوزه‌های مختلف در دنیای امروز کمرنگ‌تر شده است؛ یک سفر می‌تواند همزمان یک تجربه گردشگری، یک فرصت آموزشی، یک مسیر درمانی، یک ارتباط حرفه‌ای یا حتی نقطه شروع یک همکاری تجاری باشد.',
      ],
      highlightQuote: 'یک سفر می‌تواند همزمان یک تجربه گردشگری، یک فرصت آموزشی، یک مسیر درمانی، یک ارتباط حرفه‌ای یا حتی نقطه شروع یک همکاری تجاری باشد.',
      goalTitle: 'هدف من از ایجاد و توسعه ایرسا',
      goalText: 'ساختن مجموعه‌ای است که بتواند این مسیرها را در کنار یکدیگر قرار دهد و برای هر مسافر، متناسب با هدف او، راهی حرفه‌ای‌تر برای سفر و تجربه فرصت‌های جدید ایجاد کند.',
      image: '/images/about/international-health-trade-opportunities.webp',
      imageAlt: 'فرصت‌های بین‌المللی در حوزه سلامت، تجارت و ارتباطات جهانی ایرسا',
    },
    vision: {
      badge: 'افق و آرمان',
      title: 'چشم‌انداز ایرسا سیمرغ جهان',
      description: 'تبدیل شدن به برندی حرفه‌ای و بین‌المللی در حوزه Travel, Tourism, Health Tourism, Business Travel, Exhibition Travel & Educational Travel است؛ برندی که بتواند میان افراد، مقاصد، متخصصان، کسب‌وکارها و فرصت‌های بین‌المللی ارتباط ایجاد کند.',
      image: '/images/hero/about-gateway-hero.webp',
      imageAlt: 'افق بین‌المللی و دروازه ورود به مقاصد جهانی ایرسا',
      sectors: [
        'Travel & Cultural Tourism',
        'Health & Medical Tourism',
        'Business Travel',
        'Exhibition & Trade Travel',
        'Educational & Academic Travel',
      ],
      motto: 'هر سفر می‌تواند آغاز یک تجربه، یک ارتباط یا یک فرصت تازه باشد.',
      signOff: {
        name: 'حدیثه دهقانی پوده',
        role: 'بنیان‌گذار و مدیر ایرسا سیمرغ جهان',
        company: 'Airsa Simorgh Jahan Co.',
      },
    },
  },

  en: {
    metaTitle: 'Hadiseh Dehghani Poudeh | Founder & CEO of Airsa Simorgh Jahan',
    metaDesc: 'Discover Hadiseh Dehghani Poudeh, Founder and CEO of Airsa Simorgh Jahan: multi-disciplinary perspective on travel, health tourism, corporate, exhibition, scientific, and sports travel.',
    breadcrumb: {
      home: 'Home',
      about: 'About Us',
      current: 'Founder & CEO',
    },
    hero: {
      badge: 'Leadership & Founder',
      name: 'Hadiseh Dehghani Poudeh',
      title: 'Founder & CEO of Airsa Simorgh Jahan',
      company: 'Airsa Simorgh Jahan Co.',
      quote: '“Every journey can be the beginning of a new experience, a meaningful connection, or an extraordinary opportunity.”',
      contactCta: 'Contact CEO Executive Office',
      secondaryCta: 'Explore Vision & Pathways',
      portraitImage: '/images/team/hadiseh-dehghani-ceo.jpg',
      portraitAlt: 'Hadiseh Dehghani Poudeh - Founder & CEO of Airsa Simorgh Jahan',
    },
    overview: {
      badge: 'Multidisciplinary Vision of Travel',
      heading: 'Converging Experience, Health, Commerce & Global Horizons',
      lead: 'Airsa Simorgh Jahan is the realization of a multidimensional perspective on travel and global opportunities—a vision that perceives journey not merely as moving between geographical destinations, but as an enriching conduit for personal experience, education, healthcare, trade, human connection, and professional growth.',
      bioParagraphs: [
        'With a specialized background in healthcare and rich hands-on leadership across education, business consulting, enterprise development, international commerce, inbound tourism, dermatology & aesthetics, acupuncture, and athletic coaching, Hadiseh Dehghani Poudeh has forged an exceptionally diverse and impactful career path.',
        'The synthesis of these multifaceted domains has cultivated a transformative approach to the travel industry—an approach that catalysed the founding of Airsa Simorgh Jahan and its innovative expansion across specialized tourism sectors.',
      ],
      image: '/images/about/health-international-trade.webp',
      imageAlt: 'Strategic Synergy in Healthcare & Global Commerce',
      expertises: [
        {
          id: 'health',
          title: 'Healthcare & Clinical Systems',
          tag: 'Healthcare & Clinical Care',
          desc: 'Specialized healthcare background with profound insight into patient journey, hospital standards, and medical ethics.',
          image: '/images/about/focus-health-doctor.webp',
        },
        {
          id: 'trade',
          title: 'International Trade & Services',
          tag: 'International Business & Trade',
          desc: 'Extensive track record in commercial negotiations, cross-border partnerships, and foreign market penetration.',
          image: '/images/about/focus-intl-corporate.webp',
        },
        {
          id: 'beauty-acupuncture',
          title: 'Skin, Aesthetics & Acupuncture',
          tag: 'Aesthetics & Acupuncture',
          desc: 'Mastery of holistic wellbeing, integrative wellness therapies, aesthetic care, and clinical acupuncture.',
          image: '/images/services/post-op-recovery.webp',
        },
        {
          id: 'consulting',
          title: 'Education, Consulting & Enterprise Growth',
          tag: 'Consulting & Business Growth',
          desc: 'Strategic corporate planning, institutional mentoring, organizational scale, and human capital empowerment.',
          image: '/images/about/approach-formal-meeting.webp',
        },
        {
          id: 'sports',
          title: 'Sports Coaching & Athletic Camps',
          tag: 'Sports Coaching & Fitness',
          desc: 'Deep athletic coaching acumen understanding the logistical and physiological demands of elite teams and training camps.',
          image: '/images/services/kish-island-resort.webp',
        },
        {
          id: 'tourism',
          title: 'Purpose-Driven Specialized Tourism',
          tag: 'Specialized & Purposeful Travel',
          desc: 'Architecting personalized itineraries harmonized with the traveler’s authentic goals and personal timeline.',
          image: '/images/about/focus-tourism-isfahan.webp',
        },
      ],
    },
    philosophy: {
      badge: 'Our Philosophy & Core Thesis',
      title: 'Every Purpose Has Its Own Distinct Path',
      subtitle: 'Harmonizing travel logistics with the true mission of each traveler—from leisure and discovery to commerce and healing.',
      quoteText: '“From the CEO’s viewpoint, travel gains its truest value only when it aligns seamlessly with the traveler’s genuine purpose.”',
      introParagraph: 'One journeys to unwind and discover a new civilization; another to complete an advanced educational certification; an athlete travels to compete or join high-altitude training camps; a medical specialist to lecture at a scientific congress; an executive to negotiate cross-border trade deals; and an entrepreneur to exhibit at international expos. With this exact philosophy, Airsa designs distinct travel pathways.',
      paths: [
        {
          id: 'leisure',
          number: '01',
          title: 'Leisure & Cultural Tourism',
          badge: 'Leisure & Cultural Travel',
          description: 'Meticulous planning and execution of domestic and international cultural journeys, family escapes, and exclusive bespoke tours.',
          targetAudience: 'Ensuring travelers maximize their time in the destination with an itinerary intimately adapted to their personal interests and pace.',
          iconName: 'palm',
          gradient: 'from-amber-500/20 to-orange-500/10',
          image: '/images/services/isfahan-naghshe-jahan.webp',
          imageAlt: 'Cultural & Heritage Tourism in Isfahan and Historic Iran',
        },
        {
          id: 'business',
          number: '02',
          title: 'Business & Corporate Travel',
          badge: 'Business & Corporate Travel',
          description: 'Travel as a strategic catalyst for enterprise growth. Airsa manages end-to-end corporate and trade missions.',
          targetAudience: 'Designed for bilateral negotiations, market entry research, corporate liaison, and forging resilient international partnerships.',
          iconName: 'briefcase',
          gradient: 'from-blue-500/20 to-indigo-500/10',
          image: '/images/about/approach-boardroom.webp',
          imageAlt: 'Executive Boardroom Meetings & Corporate Negotiations',
        },
        {
          id: 'exhibition',
          number: '03',
          title: 'Exhibition & Trade Fair Travel',
          badge: 'Exhibition & Trade Fairs',
          description: 'Global exhibitions are premier gateways to emerging markets, technologies, and products. Airsa synchronizes travel timing with exhibition schedules and executive requirements.',
          targetAudience: 'Tailored for enterprise owners, C-suite executives, specialized engineers, manufacturers, and trade leaders.',
          iconName: 'landmark',
          gradient: 'from-emerald-500/20 to-teal-500/10',
          image: '/images/about/approach-conference.webp',
          imageAlt: 'International Trade Exhibitions & Global Summits',
        },
        {
          id: 'academic',
          number: '04',
          title: 'Educational & Academic Travel',
          badge: 'Educational & Academic Travel',
          description: 'True learning extends far beyond classroom boundaries. Participating in international congresses, masterclasses, and specialized seminars is vital.',
          targetAudience: 'Serving professionals, researchers, and students traveling for skill enhancement, symposiums, and institutional networking.',
          iconName: 'graduation-cap',
          gradient: 'from-purple-500/20 to-indigo-500/10',
          image: '/images/services/persepolis-heritage.webp',
          imageAlt: 'Archaeological Exploration, Academic Congresses and History',
        },
        {
          id: 'sports',
          number: '05',
          title: 'Sports & Athletic Travel',
          badge: 'Sports Camps & Tournaments',
          description: 'Rooted in athletic coaching expertise, Airsa specializes in sports missions: international tournaments, intensive training camps, and specialized clinics.',
          targetAudience: 'Bridging specialized athletic requirements with disciplined travel logistics for an orderly, high-performance experience.',
          iconName: 'activity',
          gradient: 'from-rose-500/20 to-red-500/10',
          image: '/images/services/kish-island-resort.webp',
          imageAlt: 'Kish Island Coastal Athletic Training & Sports Tourism',
        },
        {
          id: 'health',
          number: '06',
          title: 'Health & Medical Tourism',
          badge: 'Health & Medical Tourism',
          description: 'The founder’s clinical background, coupled with expertise in skincare, aesthetics, and acupuncture, fundamentally shapes Airsa’s health tourism ethos.',
          targetAudience: 'Creating seamless synergy between travel, luxury hospitality, and specialized medical treatments with accredited clinical partners.',
          iconName: 'heart-pulse',
          gradient: 'from-cyan-500/20 to-blue-500/10',
          image: '/images/services/hospital-booking.webp',
          imageAlt: 'Premier Hospital Infrastructure & IPD Medical Centers',
        },
      ],
    },
    internationalTrade: {
      badge: 'Strategic Synergy',
      title: 'Commerce, Travel & Global Opportunities',
      lead: 'A foundational objective behind Airsa is forging a symbiotic bridge between tourism and global trade.',
      description: 'Today, travel is frequently the spark for cross-border investments, exploratory ventures into new territories, exhibition engagements, and corporate matchmaking. Airsa expands international channels to grant our clients privileged access to both world-class travel and lucrative business horizons.',
      image: '/images/services/company-formation.webp',
      imageAlt: 'High-Level Cross-Border Commercial Partnerships & Summits',
      points: [
        {
          title: 'Launching Sustainable Cross-Border Partnerships',
          desc: 'Connecting entrepreneurs with vetted international counterparts, suppliers, and strategic investors.',
        },
        {
          title: 'On-the-Ground Market Discovery',
          desc: 'Providing immersive local frameworks to examine market dynamics, trade zones, and competitors alongside local advisors.',
        },
        {
          title: 'Full Corporate Concierge & Residency Support',
          desc: 'Guiding every step from business visas and executive summits to company incorporation and residency.',
        },
      ],
    },
    personalStatement: {
      badge: 'Founder’s Manifesto',
      title: 'My Vision for Airsa',
      paragraphs: [
        'Airsa Simorgh Jahan is far more to me than a travel agency or hospitality provider.',
        'It is the culmination of passions and professional insights cultivated throughout my journey across healthcare, education, athletic coaching, aesthetics, trade, tourism, and global engagements.',
        'I believe that the traditional boundaries dividing these disciplines are dissolving. Today, a single journey can simultaneously be an inspiring cultural exploration, an educational milestone, a restorative health path, a professional connection, or the catalyst for a game-changing business partnership.',
      ],
      highlightQuote: 'A single journey can simultaneously be a cultural adventure, an educational milestone, a curative health path, a professional bond, or the starting point of an enduring commercial alliance.',
      goalTitle: 'My Purpose in Building Airsa',
      goalText: 'To build an organization capable of intertwining these diverse trajectories, presenting every traveler with a professional, elevated gateway to discover new horizons matching their true ambitions.',
      image: '/images/about/international-health-trade-opportunities.webp',
      imageAlt: 'Global Opportunities in Healthcare, International Trade and Strategic Travel',
    },
    vision: {
      badge: 'Horizon & Aspiration',
      title: 'The Airsa Simorgh Jahan Vision',
      description: 'To become a globally recognized, premier brand across Travel, Tourism, Health Tourism, Business Travel, Exhibition Travel & Educational Travel—a brand that builds enduring bridges between people, destinations, specialists, enterprises, and international opportunities.',
      image: '/images/hero/about-gateway-hero.webp',
      imageAlt: 'Luminous Gateway to Global Horizons & Collaborative Ventures',
      sectors: [
        'Travel & Cultural Tourism',
        'Health & Medical Tourism',
        'Business Travel',
        'Exhibition & Trade Travel',
        'Educational & Academic Travel',
      ],
      motto: 'Every journey can be the start of a new experience, a connection, or a fresh opportunity.',
      signOff: {
        name: 'Hadiseh Dehghani Poudeh',
        role: 'Founder & CEO of Airsa Simorgh Jahan',
        company: 'Airsa Simorgh Jahan Co.',
      },
    },
  },

  ar: {
    metaTitle: 'حديثة دهقاني بوده | المؤسس والمدير التنفيذي لإيرسا سيمرغ جهان',
    metaDesc: 'التعرف على حديثة دهقاني بوده المؤسس والمدير التنفيذي لشركة إيرسا سيمرغ جهان، الرؤية متعددة الأبعاد للسفر، السياحة العلاجية، وسياحة الأعمال والمعارض والرياضة.',
    breadcrumb: {
      home: 'الرئيسية',
      about: 'من نحن',
      current: 'المدير التنفيذي والمؤسس',
    },
    hero: {
      badge: 'القيادة والمؤسس',
      name: 'حديثة دهقاني بوده',
      title: 'المؤسس والمدير التنفيذي لإيرسا سيمرغ جهان',
      company: 'شركة إيرسا سيمرغ جهان',
      quote: '«كل رحلة يمكن أن تكون بداية لتجربة جديدة، تواصل مثمر أو فرصة واعدة.»',
      contactCta: 'التواصل المباشر مع مكتب الإدارة',
      secondaryCta: 'استعراض الرؤية والمسارات',
      portraitImage: '/images/team/hadiseh-dehghani-ceo.jpg',
      portraitAlt: 'حديثة دهقاني بوده - المؤسس والمدير التنفيذي لإيرسا سيمرغ جهان',
    },
    overview: {
      badge: 'رؤية متعددة الأبعاد لمفهوم السفر',
      heading: 'ملتقى الخبرة العميقة، الصحة، التجارة والفرص الدولية',
      lead: 'تُعد إيرسا سيمرغ جهان ثمرة رؤية شاملة متعددة الأبعاد لمفهوم السفر والفرص الدولية؛ رؤية لا ترى السفر مجرد انتقال من مدينة أو بلد إلى آخر، بل تعتبره مساراً متكاملاً للتجربة الإنسانية، التعليم، الرعاية الصحية، التجارة، بناء الروابط والتطور الشخصي والمهني.',
      bioParagraphs: [
        'تمتلك حديثة دهقاني بوده خلفية تخصصية رفيعة في قطاع الصحة والرعاية، إلى جانب خبرتها العملية المتنوعة في مجالات التعليم، الاستشارات، تطوير الأعمال، التجارة والخدمات الدولية، السياحة، العناية بالبشرة والجمال، الوخز بالإبر الصينية والتدريب الرياضي.',
        'هذا المزيج الاستثنائي من الخبرات أنتج منظوراً متفرداً تجاه صناعة السفر؛ وهو المنظور الذي قاد إلى تأسيس إيرسا سيمرغ جهان وتطوير قطاعاتها السياحية المختلفة.',
      ],
      image: '/images/about/health-international-trade.webp',
      imageAlt: 'التعاون الاستراتيجي في قطاع الرعاية الصحية والتجارة الدولية',
      expertises: [
        {
          id: 'health',
          title: 'الرعاية الصحية والسريرية',
          tag: 'Healthcare & Clinical Care',
          desc: 'رؤية سريرية متقدمة وفهم عميق لمعايير الرعاية الدولية وسلامة المرضى.',
          image: '/images/about/focus-health-doctor.webp',
        },
        {
          id: 'trade',
          title: 'التجارة والأعمال الدولية',
          tag: 'International Business & Trade',
          desc: 'خبرة عريضة في المفاوضات التجارية، الشراكات العابرة للحدود واستكشاف الأسواق.',
          image: '/images/about/focus-intl-corporate.webp',
        },
        {
          id: 'beauty-acupuncture',
          title: 'البشرة والجمال والوخز بالإبر',
          tag: 'Aesthetics & Acupuncture',
          desc: 'تخصص في الطب التكميلي الشامل، الصحة الاستشفائية وتقنيات الجمال الطبيعية.',
          image: '/images/services/post-op-recovery.webp',
        },
        {
          id: 'consulting',
          title: 'التعليم والاستشارات وتطوير الأعمال',
          tag: 'Consulting & Business Growth',
          desc: 'تخطيط استراتيجي، توجيه مؤسسي وتطوير الكفاءات البشرية.',
          image: '/images/about/approach-formal-meeting.webp',
        },
        {
          id: 'sports',
          title: 'التدريب الرياضي واللياقة',
          tag: 'Sports Coaching & Fitness',
          desc: 'فهم متطلبات الفرق والرياضيين المحترفين والمعسكرات التدريبية المتقدمة.',
          image: '/images/services/kish-island-resort.webp',
        },
        {
          id: 'tourism',
          title: 'السياحة الهادفة والمتخصصة',
          tag: 'Specialized & Purposeful Travel',
          desc: 'هندسة رحلات دقيقة تلائم أهداف المسافر وجدوله الزمني.',
          image: '/images/about/focus-tourism-isfahan.webp',
        },
      ],
    },
    philosophy: {
      badge: 'فلسفة ونهج إيرسا',
      title: 'لكل هدف من السفر مسار مختلف',
      subtitle: 'مواءمة خدمات السفر مع الغاية الحقيقية للضيف؛ من الاستجمام والاستكشاف إلى الأعمال والعلاج.',
      quoteText: '«من منظور مؤسس إيرسا، يكتسب السفر قيمته الحقيقية حين يتناغم تماماً مع الهدف الفعلي للمسافر.»',
      introParagraph: 'يسافر شخص للاسترخاء واكتشاف حضارة جديدة؛ وآخر للمشاركة في دورة تدريبية دولية؛ ورياضي للمنافسة في بطولة أو معسكر تدريبي؛ وخبير لحضور مؤتمر علمي؛ ورجل أعمال للتفاوض التجاري؛ ومستثمر لحضور المعارض الدولية واستكشاف الأسواق. ومن هذا المنطلق تطور إيرسا برامجها في مسارات متخصصة.',
      paths: [
        {
          id: 'leisure',
          number: '۰۱',
          title: 'السياحة الترفيهية والثقافية',
          badge: 'Leisure & Cultural Travel',
          description: 'تخطيط وتنظيم الجولات السياحية العائلية والخاصة داخل إيران وخارجها بأعلى درجات الراحة.',
          targetAudience: 'تمكين الضيف من الاستفادة القصوى من وقته والاستمتاع بتجربة ملهمة تطابق تطلعاته.',
          iconName: 'palm',
          gradient: 'from-amber-500/20 to-orange-500/10',
          image: '/images/services/isfahan-naghshe-jahan.webp',
          imageAlt: 'السياحة الثقافية واستكشاف معالم أصفهان وإيران التاريخية',
        },
        {
          id: 'business',
          number: '۰۲',
          title: 'سياحة الأعمال والشركات',
          badge: 'Business & Corporate Travel',
          description: 'السفر كعنصر محوري في نمو وتوسع الأعمال التجارية والشراكات الاقتصادية.',
          targetAudience: 'تنظيم مهام العمل، التفاوض، دراسة الأسواق الجديدة وربط الشركات مع الشركاء العالميين.',
          iconName: 'briefcase',
          gradient: 'from-blue-500/20 to-indigo-500/10',
          image: '/images/about/approach-boardroom.webp',
          imageAlt: 'اجتماعات الأعمال ومفاوضات الشركات والمجالس التنفيذية',
        },
        {
          id: 'exhibition',
          number: '۰۳',
          title: 'سياحة المعارض والمؤتمرات',
          badge: 'Exhibition & Trade Fairs',
          description: 'المعارض الدولية بوابة رئيسية لاكتشاف أحدث المنتجات والتقنيات؛ وإيرسا تصمم رحلات متكاملة تناسب توقيت المعرض.',
          targetAudience: 'لأصحاب الأعمال، المدراء، المستثمرين، المهندسين والرواد التجاريين.',
          iconName: 'landmark',
          gradient: 'from-emerald-500/20 to-teal-500/10',
          image: '/images/about/approach-conference.webp',
          imageAlt: 'المعارض التجارية العالمية والمؤتمرات التخصصية',
        },
        {
          id: 'academic',
          number: '۰۴',
          title: 'الرحلات التعليمية والعلمية',
          badge: 'Educational & Academic Travel',
          description: 'التعلم لا ينحصر في القاعات الدراسية؛ بل يمتد للمؤتمرات العالمية والورش التخصصية المتقدمة.',
          targetAudience: 'تنسيق سفر الباحثين، الأطباء والمتخصصين الساعين لترقية المهارات وبناء علاقات مهنية.',
          iconName: 'graduation-cap',
          gradient: 'from-purple-500/20 to-indigo-500/10',
          image: '/images/services/persepolis-heritage.webp',
          imageAlt: 'الاستكشاف الأكاديمي والمؤتمرات التاريخية',
        },
        {
          id: 'sports',
          number: '۰۵',
          title: 'السياحة الرياضية والمعسكرات',
          badge: 'Sports Camps & Tournaments',
          description: 'انطلاقاً من الخبرة في التدريب الرياضي، تركز إيرسا على المعسكرات والبطولات والدورات التخصصية.',
          targetAudience: 'خلق تناغم دقيق بين الاحتياجات الرياضية وخدمات السفر الفندقية واللوجستية.',
          iconName: 'activity',
          gradient: 'from-rose-500/20 to-red-500/10',
          image: '/images/services/kish-island-resort.webp',
          imageAlt: 'المعسكرات والأنشطة الرياضية في جزيرة كيش',
        },
        {
          id: 'health',
          number: '۰۶',
          title: 'السياحة العلاجية والصحية',
          badge: 'Health & Medical Tourism',
          description: 'خلفية المؤسس في الصحة والجمال والطب التكميلي لعبت دوراً رئيسياً في صياغة رؤية إيرسا للسياحة العلاجية.',
          targetAudience: 'تأمين التنسيق الشامل بين السفر والإقامة الراقية والعلاج الموثوق بأرقى المستشفيات وأمهر الأطباء.',
          iconName: 'heart-pulse',
          gradient: 'from-cyan-500/20 to-blue-500/10',
          image: '/images/services/hospital-booking.webp',
          imageAlt: 'أرقى المستشفيات والمراكز العلاجية المعتمدة دولياً',
        },
      ],
    },
    internationalTrade: {
      badge: 'الترابط الاستراتيجي',
      title: 'التجارة، السفر والفرص الدولية',
      lead: 'أحد الأهداف الرئيسية لتأسيس إيرسا هو إرساء جسر تعاون بين السياحة والتجارة العالمية.',
      description: 'اليوم، يمكن أن يكون السفر الشرارة الأولى لشراكة تجارية، أو دخول سوق جديدة، أو حضور معرض عالمي، أو عقد تحالف استثماري. ولذا تسعى إيرسا لفتح آفاق استثنائية أمام عملائها.',
      image: '/images/services/company-formation.webp',
      imageAlt: 'الشراكات التجارية الدولية والقمم الاستثمارية المشتركة',
      points: [
        {
          title: 'بناء شراكات تجارية مستدامة',
          desc: 'ربط الفاعلين الاقتصاديين مع شركاء وموردين ومستثمرين معتمدين دولياً.',
        },
        {
          title: 'استكشاف ميداني للأسواق الناشئة',
          desc: 'توفير التسهيلات اللوجستية لدراسة الفرص الميدانية والتنافسية بدعم من مستشارين محليين.',
        },
        {
          title: 'تسهيل كافة الإجراءات التجارية والإقامة',
          desc: 'مرافقة مستمرة من تأشيرات العمل وتنظيم الاجتماعات إلى تأسيس الشركات وترتيبات الإقامة.',
        },
      ],
    },
    personalStatement: {
      badge: 'بيان المؤسس الشخصي',
      title: 'رؤيتي لـ إيرسا',
      paragraphs: [
        'إيرسا سيمرغ جهان ليست مجرد وكالة سفر أو مزود خدمات سياحية بالنسبة لي.',
        'إنها نتاج مزيج حيوي من الخبرات والشغف الذي جمعته طوال مسيرتي في مجالات الصحة، التعليم، الرياضة، الجمال، التجارة، السياحة والأنشطة الدولية.',
        'أؤمن تماماً بأن الحدود الفاصلة بين هذه المجالات قد تلاشت في عالمنا اليوم؛ فرحلة واحدة يمكن أن تكون تجربة سياحية، فرصة تعليمية، مساراً علاجياً، تواصلاً مهنياً أو حتى بداية لتعاون تجاري ضخم.',
      ],
      highlightQuote: 'رحلة واحدة يمكن أن تكون في الوقت ذاته تجربة سياحية ملهمة، محطة تعليمية فارقة، مساراً استشفائياً، أو نقطة انطلاق لشراكة تجارية استراتيجية.',
      goalTitle: 'هدفي من تأسيس وتطوير إيرسا',
      goalText: 'بناء مؤسسة رائدة تضع كل هذه المسارات جنباً إلى جنب، وتمنح كل مسافر طريقاً احترافياً ومصمماً بدقة لاستكشاف فرص جديدة تليق بطموحه.',
      image: '/images/about/international-health-trade-opportunities.webp',
      imageAlt: 'الفرص الدولية المتكاملة في مجالات الرعاية الصحية، التجارة العالمية والشراكات الاستراتيجية',
    },
    vision: {
      badge: 'الأفق والتطلعات',
      title: 'رؤية إيرسا سيمرغ جهان المستقبلية',
      description: 'أن تصبح علامة تجارية عالمية رائدة وموثوقة في مجالات السياحة، السياحة العلاجية، سياحة الأعمال، سياحة المعارض والسياحة التعليمية، وأن تبني جسوراً متينة بين الأفراد والوجهات والخبراء والمؤسسات الدولية.',
      image: '/images/hero/about-gateway-hero.webp',
      imageAlt: 'بوابة الانطلاق نحو العالمية والتعاون الدولي المشترك',
      sectors: [
        'Travel & Cultural Tourism',
        'Health & Medical Tourism',
        'Business Travel',
        'Exhibition & Trade Travel',
        'Educational & Academic Travel',
      ],
      motto: 'كل رحلة يمكن أن تكون بداية لتجربة جديدة، تواصل مثمر أو فرصة واعدة.',
      signOff: {
        name: 'حديثة دهقاني بوده',
        role: 'المؤسس والمدير التنفيذي لإيرسا سيمرغ جهان',
        company: 'Airsa Simorgh Jahan Co.',
      },
    },
  },

  tr: {
    metaTitle: 'Hadiseh Dehghani Poudeh | Airsa Simorgh Jahan Kurucusu ve Genel Müdürü',
    metaDesc: 'Airsa Simorgh Jahan Kurucusu ve Genel Müdürü Hadiseh Dehghani Poudeh: Seyahate çok boyutlu bakış, sağlık turizmi, iş seyahatleri, fuar, akademik ve spor organizasyonları.',
    breadcrumb: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      current: 'Kurucu ve Genel Müdür',
    },
    hero: {
      badge: 'Liderlik & Kurucu',
      name: 'Hadiseh Dehghani Poudeh',
      title: 'Airsa Simorgh Jahan Kurucusu ve Genel Müdürü',
      company: 'Airsa Simorgh Jahan Şirketi',
      quote: '«Her seyahat yeni bir deneyimin, kalıcı bir bağın veya olağanüstü bir fırsatın başlangıcı olabilir.»',
      contactCta: 'Genel Müdürlük Ofisi ile İletişim',
      secondaryCta: 'Vizyon ve Rotaları İnceleyin',
      portraitImage: '/images/team/hadiseh-dehghani-ceo.jpg',
      portraitAlt: 'Hadiseh Dehghani Poudeh - Airsa Simorgh Jahan Kurucusu ve Genel Müdürü',
    },
    overview: {
      badge: 'Seyahate Çok Boyutlu Bakış',
      heading: 'Deneyim, Sağlık, Ticaret ve Küresel Fırsatların Kesişimi',
      lead: 'Airsa Simorgh Jahan, seyahat kavramına ve küresel fırsatlara çok boyutlu bir bakış açısının ürünüdür; seyahati yalnızca bir şehirden ya da ülkeden diğerine gitmek olarak değil; deneyim, eğitim, sağlık, ticaret, insani bağlar, kişisel ve kurumsal gelişim için eşsiz bir köprü olarak değerlendiren bir vizyondur.',
      bioParagraphs: [
        'Sağlık alanındaki uzmanlık geçmişi ve eğitim, iş danışmanlığı, girişim geliştirme, uluslararası ticaret, turizm, cilt ve estetik, akupunktur ve spor koçluğu alanlarındaki zengin birikimiyle Hadiseh Dehghani Poudeh, kariyerinde çok yönlü ve ilham verici bir yol izlemiştir.',
        'Bu çeşitli disiplinlerin bir araya gelmesi, seyahat sektörüne özgün ve dönüştürücü bir bakış açısı kazandırmış; bu anlayış Airsa Simorgh Jahan’ın kuruluşuna ve turizmin farklı uzmanlık alanlarında gelişmesine öncülük etmiştir.',
      ],
      image: '/images/about/health-international-trade.webp',
      imageAlt: 'Uluslararası Sağlık ve Ticarette Stratejik İş Birliği',
      expertises: [
        {
          id: 'health',
          title: 'Sağlık ve Klinik Sistemler',
          tag: 'Sağlık & Medikal Bakım',
          desc: 'Hasta süreçleri, hastane standartları ve klinik etik alanında derin tıp geçmişi ve uzman bakış açısı.',
          image: '/images/about/focus-health-doctor.webp',
        },
        {
          id: 'trade',
          title: 'Uluslararası Ticaret ve Hizmetler',
          tag: 'Küresel Ticaret & İş Geliştirme',
          desc: 'Ticari müzakereler, sınır ötesi ortaklıklar ve yabancı pazar geliştirme alanında geniş tecrübe.',
          image: '/images/about/focus-intl-corporate.webp',
        },
        {
          id: 'beauty-acupuncture',
          title: 'Cilt, Estetik ve Akupunktur',
          tag: 'Güzellik & Tamamlayıcı Tıp',
          desc: 'Bütünsel sağlık, estetik bakım teknikleri ve klinik akupunktur alanında derinlemesine bilgi birikimi.',
          image: '/images/services/post-op-recovery.webp',
        },
        {
          id: 'consulting',
          title: 'Eğitim, Danışmanlık ve Büyüme',
          tag: 'Stratejik Yönetim & Danışmanlık',
          desc: 'Kurumsal strateji, organizasyonel mentorluk, kapasite artırımı ve insan kaynakları gelişimi.',
          image: '/images/about/approach-formal-meeting.webp',
        },
        {
          id: 'sports',
          title: 'Spor Koçluğu ve Kamp Yönetimi',
          tag: 'Spor Koçluğu & Hazırlık Kampları',
          desc: 'Sporcuların, takımların ve kondisyon kamplarının lojistik ve fizyolojik ihtiyaçlarına hakimiyet.',
          image: '/images/services/kish-island-resort.webp',
        },
        {
          id: 'tourism',
          title: 'Amaca Özel Nitelikli Turizm',
          tag: 'Özel Tasarlanmış Seyahatler',
          desc: 'Yolcunun gerçek gayesi ve zaman planıyla birebir örtüşen butik seyahat programları.',
          image: '/images/about/focus-tourism-isfahan.webp',
        },
      ],
    },
    philosophy: {
      badge: 'Felsefemiz ve Temel Yaklaşımımız',
      title: 'Her Amacın Kendine Özgü Bir Rotası Vardır',
      subtitle: 'Seyahat lojistiğini her yolcunun gerçek gayesiyle uyumlamak—dinlenme ve keşiften ticaret ve şifaya kadar.',
      quoteText: '«Genel Müdür bakış açısıyla seyahat, ancak misafirin gerçek amacıyla kusursuz bir uyum yakaladığında hakiki değerini bulur.»',
      introParagraph: 'Kimi dinlenmek ve bin yıllık bir medeniyeti keşfetmek için yola çıkar; kimi akademik bir uzmanlık sertifikası almak için; bir sporcu yarışmak veya yüksek irtifa kampına katılmak; bir hekim uluslararası bir tıp kongresinde bildiri sunmak; bir yönetici sınır ötesi ticari müzakereler yürütmek ve bir girişimci küresel fuarlarda yeni pazarlar açmak için seyahat eder. Airsa, tam da bu felsefeyle 6 özgün seyahat rotası tasarlamıştır.',
      paths: [
        {
          id: 'leisure',
          number: '01',
          title: 'Kültür ve Dinlenme Seyahatleri',
          badge: 'Kültürel Keşif ve Tatil',
          description: 'İran içinde ve uluslararası ölçekte titizlikle planlanmış kültürel turlar, aile tatilleri ve seçkin keşif seyahatleri.',
          targetAudience: 'Seyahat severlerin kendi ritimlerine ve ilgi alanlarına göre destinasyonun ruhunu doyasıya yaşamaları için tasarlandı.',
          iconName: 'palm',
          gradient: 'from-amber-500/20 to-orange-500/10',
          image: '/images/services/isfahan-naghshe-jahan.webp',
          imageAlt: 'İsfahan ve Tarihi İran Coğrafyasında Kültürel Keşif',
        },
        {
          id: 'business',
          number: '02',
          title: 'İş ve Kurumsal Seyahatler',
          badge: 'İş Dünyası ve Kurumsal',
          description: 'Girişimlerin büyümesinde stratejik bir kaldıraç olarak seyahat. Airsa, kurumsal heyetleri ve iş görüşmelerini uçtan uca yönetir.',
          targetAudience: 'İkili müzakereler, pazar araştırması ve kalıcı uluslararası ortaklıklar kurmak isteyen iş insanları ve yöneticiler.',
          iconName: 'briefcase',
          gradient: 'from-blue-500/20 to-indigo-500/10',
          image: '/images/about/approach-boardroom.webp',
          imageAlt: 'Üst Düzey Yönetim Kurulu Toplantıları ve Ticari Müzakereler',
        },
        {
          id: 'exhibition',
          number: '03',
          title: 'Fuar ve Ticaret Heyeti Seyahatleri',
          badge: 'Uluslararası Fuarlar ve Sergiler',
          description: 'Küresel fuarlar yeni pazarlara, teknolojilere ve ürünlere açılan en hızlı kapıdır. Airsa seyahat takvimini fuar akışıyla senkronize eder.',
          targetAudience: 'Şirket sahipleri, üst düzey yöneticiler, mühendisler, üreticiler ve ihracatçı liderler için özel planlama.',
          iconName: 'landmark',
          gradient: 'from-emerald-500/20 to-teal-500/10',
          image: '/images/about/approach-conference.webp',
          imageAlt: 'Uluslararası Ticaret Fuarları ve Küresel Zirveler',
        },
        {
          id: 'academic',
          number: '04',
          title: 'Eğitim ve Akademik Seyahatler',
          badge: 'Akademik Kongreler ve Eğitim',
          description: 'Hakiki öğrenme sınıf duvarlarının ötesine uzanır. Uluslararası kongrelere, uzmanlık çalıştaylarına ve seminerlere katılım esastır.',
          targetAudience: 'Mesleki gelişim, tıp sempozyumları ve akademik iş birlikleri amacıyla seyahat eden araştırmacılar ve uzmanlar.',
          iconName: 'graduation-cap',
          gradient: 'from-purple-500/20 to-indigo-500/10',
          image: '/images/services/persepolis-heritage.webp',
          imageAlt: 'Tarihi Araştırmalar, Arkeoloji ve Akademik Kongreler',
        },
        {
          id: 'sports',
          number: '05',
          title: 'Spor ve Hazırlık Kampı Seyahatleri',
          badge: 'Spor Kampları ve Turnuvalar',
          description: 'Spor koçluğu uzmanlığından beslenen Airsa; uluslararası turnuvalar, yoğun antrenman kampları ve spor etkinliklerinde uzmanlaşmıştır.',
          targetAudience: 'Sporcuların ve takımların yüksek performans gereksinimlerini dakik ve organize bir seyahat lojistiğiyle birleştiren ekipler.',
          iconName: 'activity',
          gradient: 'from-rose-500/20 to-red-500/10',
          image: '/images/services/kish-island-resort.webp',
          imageAlt: 'Kiş Adası Sahil Kampı ve Spor Turizmi Olanakları',
        },
        {
          id: 'health',
          number: '06',
          title: 'Sağlık ve Medikal Turizm',
          badge: 'Sağlık ve Tedavi Turizmi',
          description: 'Kurucunun klinik arka planı ve estetik ile akupunktur alanındaki derinliği, Airsa’nın sağlık turizmi anlayışının temelini oluşturur.',
          targetAudience: 'Seyahat konforu ile akredite hastanelerdeki uzman tıbbi tedavileri uyum içinde deneyimlemek isteyen uluslararası hastalar.',
          iconName: 'heart-pulse',
          gradient: 'from-cyan-500/20 to-blue-500/10',
          image: '/images/services/hospital-booking.webp',
          imageAlt: 'En İyi Hastane Altyapısı ve Uluslararası Hasta Merkezleri',
        },
      ],
    },
    internationalTrade: {
      badge: 'Stratejik Sinerji',
      title: 'Ticaret, Seyahat ve Küresel Fırsatlar',
      lead: 'Airsa’nın ardındaki en temel amaçlardan biri, turizm ile küresel ticaret arasında güçlü ve verimli bir köprü kurmaktır.',
      description: 'Günümüzde seyahat, sınır ötesi yatırımların, yeni coğrafyalara açılmanın, uluslararası fuar katılımlarının ve kurumsal ortaklıkların en güçlü kıvılcımıdır. Airsa, danışanlarına hem dünya standartlarında bir seyahat deneyimi hem de kazançlı ticari ufuklar sunmak için küresel kanallarını genişletmektedir.',
      image: '/images/services/company-formation.webp',
      imageAlt: 'Uluslararası Ticari İş Birlikleri ve Diplomatik Zirveler',
      points: [
        {
          title: 'Sürdürülebilir Uluslararası Ortaklıkların Kurulması',
          desc: 'Girişimcileri güvenilir uluslararası ortaklar, tedarikçiler ve stratejik yatırımcılarla buluşturuyoruz.',
        },
        {
          title: 'Sahada Pazar Dinamiklerinin Keşfi',
          desc: 'Yerel uzmanlar eşliğinde pazar dinamiklerini, serbest ticaret bölgelerini ve rekabet ortamını doğrudan yerinde inceleme fırsatı.',
        },
        {
          title: 'Eksiksiz Kurumsal Konsiyerj ve Şirket Kuruluşu',
          desc: 'Ticari vizelerden üst düzey toplantılara, şirket tescilinden yasal oturum süreçlerine kadar her aşamada rehberlik.',
        },
      ],
    },
    personalStatement: {
      badge: 'Kurucunun Manifestosu',
      title: 'Airsa’ya Bakışım',
      paragraphs: [
        'Airsa Simorgh Jahan benim için sadece bir seyahat acentesi veya turizm hizmet sağlayıcısı değildir.',
        'Sağlık, eğitim, spor, estetik, ticaret, turizm ve uluslararası faaliyetler alanlarında edindiğim tüm tecrübe ve tutkuların canlı bir sentezidir.',
        'Bugünün dünyasında bu alanlar arasındaki sınırların giderek kalktığına inanıyorum; tek bir seyahat aynı zamanda ilham verici bir kültür gezisi, bir eğitim fırsatı, bir tedavi süreci, profesyonel bir bağ veya büyük bir ticari ortaklığın başlangıcı olabilir.',
      ],
      highlightQuote: 'Tek bir seyahat aynı anda ilham verici bir keşif, önemli bir eğitim basamağı, şifa dolu bir tedavi rotası veya kalıcı bir ticari ortaklığın ilk adımı olabilir.',
      goalTitle: 'Airsa’yı Kurma ve Geliştirme Amacım',
      goalText: 'Tüm bu rotaları yan yana getirebilen ve her yolcuya kendi hedefine uygun, profesyonel ve yeni fırsatlarla dolu bir seyahat kapısı açabilen öncü bir kurum inşa etmektir.',
      image: '/images/about/international-health-trade-opportunities.webp',
      imageAlt: 'Sağlık, Uluslararası Ticaret ve Küresel Ortaklıklarda Bütünleşik Fırsatlar',
    },
    vision: {
      badge: 'Ufuk ve Hedefler',
      title: 'Airsa Simorgh Jahan’ın Gelecek Vizyonu',
      description: 'Seyahat, turizm, sağlık turizmi, iş seyahatleri, fuar ve eğitim turizmi alanlarında uluslararası düzeyde güvenilen lider bir marka olmak; insanlar, destinasyonlar, uzmanlar, işletmeler ve küresel fırsatlar arasında sağlam köprüler kurmaktır.',
      image: '/images/hero/about-gateway-hero.webp',
      imageAlt: 'Küresel Ufuklara ve Uluslararası İş Birliklerine Açılan Kapı',
      sectors: [
        'Travel & Cultural Tourism',
        'Health & Medical Tourism',
        'Business Travel',
        'Exhibition & Trade Travel',
        'Educational & Academic Travel',
      ],
      motto: 'Her seyahat yeni bir deneyimin, kalıcı bir bağın veya taze bir fırsatın başlangıcı olabilir.',
      signOff: {
        name: 'Hadiseh Dehghani Poudeh',
        role: 'Airsa Simorgh Jahan Kurucusu ve Genel Müdürü',
        company: 'Airsa Simorgh Jahan Co.',
      },
    },
  },
};

export const getCeoPageData = (lang: Language = 'fa'): CeoPageData => {
  return CEO_PAGE_DATA_BY_LANG[lang] || CEO_PAGE_DATA_BY_LANG.fa;
};

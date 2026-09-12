import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const mappings = [
  // --- HERO ---
  {
    src: 'src/assets/images/hero_patient_care_1788731701211.jpg',
    dest: 'public/images/hero/patient-care-hero.webp',
  },
  {
    src: 'src/assets/images/hero_iran_cinematic_1788733519875.jpg',
    dest: 'public/images/hero/iran-tourism-hero.webp',
  },
  {
    src: 'src/assets/images/travel_services_hero_1788733916402.jpg',
    dest: 'public/images/hero/travel-services-hero.webp',
  },
  {
    src: 'src/assets/images/contact_support_hero_1788739865372.jpg',
    dest: 'public/images/hero/contact-support-hero.webp',
  },
  {
    src: 'src/assets/images/request_hero_calm_1788732664259.jpg',
    dest: 'public/images/hero/request-treatment-hero.webp',
  },
  {
    src: 'src/assets/images/about_hero_luminous_gateway_1788738390786.jpg',
    dest: 'public/images/hero/about-gateway-hero.webp',
  },
  {
    src: 'src/assets/images/about_hero_terminal_gateway.jpg',
    dest: 'public/images/hero/terminal-gateway-hero.webp',
  },

  // --- ABOUT ---
  {
    src: 'src/assets/images/about_who_we_are_reception.jpg',
    dest: 'public/images/about/who-we-are-reception.webp',
  },
  {
    src: 'src/assets/images/about_who_we_are_hospitality.jpg',
    dest: 'public/images/about/who-we-are-hospitality.webp',
  },
  {
    src: 'src/assets/images/about_mission_care_support.jpg',
    dest: 'public/images/about/mission-care-support.webp',
  },
  {
    src: 'src/assets/images/about_mission_integrated_care.jpg',
    dest: 'public/images/about/mission-integrated-care.webp',
  },
  {
    src: 'src/assets/images/formal_approach_boardroom_1788737998156.jpg',
    dest: 'public/images/about/approach-boardroom.webp',
  },
  {
    src: 'src/assets/images/about_approach_formal_boardroom.jpg',
    dest: 'public/images/about/approach-formal-meeting.webp',
  },
  {
    src: 'src/assets/images/about_approach_formal_conference.jpg',
    dest: 'public/images/about/approach-conference.webp',
  },
  {
    src: 'src/assets/images/about_approach_formal_handshake.jpg',
    dest: 'public/images/about/approach-handshake.webp',
  },
  {
    src: 'src/assets/images/about_commitment_journey.jpg',
    dest: 'public/images/about/commitment-journey.webp',
  },
  {
    src: 'src/assets/images/about_focus_tourism_isfahan.jpg',
    dest: 'public/images/about/focus-tourism-isfahan.webp',
  },
  {
    src: 'src/assets/images/about_focus_tourism_journey.jpg',
    dest: 'public/images/about/focus-tourism-journey.webp',
  },
  {
    src: 'src/assets/images/about_focus_health_doctor.jpg',
    dest: 'public/images/about/focus-health-doctor.webp',
  },
  {
    src: 'src/assets/images/about_focus_health_modern.jpg',
    dest: 'public/images/about/focus-health-modern.webp',
  },
  {
    src: 'src/assets/images/about_focus_vip_chauffeur.jpg',
    dest: 'public/images/about/focus-vip-chauffeur.webp',
  },
  {
    src: 'src/assets/images/about_focus_intl_corporate.jpg',
    dest: 'public/images/about/focus-intl-corporate.webp',
  },

  // --- SERVICES ---
  {
    src: 'src/assets/images/svc_consultation_1788732462429.jpg',
    dest: 'public/images/services/consultation.webp',
  },
  {
    src: 'src/assets/images/svc_doctor_1788732474613.jpg',
    dest: 'public/images/services/doctor-selection.webp',
  },
  {
    src: 'src/assets/images/svc_hospital_1788732485452.jpg',
    dest: 'public/images/services/hospital-booking.webp',
  },
  {
    src: 'src/assets/images/svc_visa_1788732496579.jpg',
    dest: 'public/images/services/visa-assistance.webp',
  },
  {
    src: 'src/assets/images/svc_flight_1788732507797.jpg',
    dest: 'public/images/services/flight-booking.webp',
  },
  {
    src: 'src/assets/images/svc_hotel_1788732516592.jpg',
    dest: 'public/images/services/hotel-accommodation.webp',
  },
  {
    src: 'src/assets/images/svc_transfer_1788732528571.jpg',
    dest: 'public/images/services/private-transfer.webp',
  },
  {
    src: 'src/assets/images/svc_recovery_1788732539999.jpg',
    dest: 'public/images/services/post-op-recovery.webp',
  },
  {
    src: 'src/assets/images/svc_airport_cip_1788733656641.jpg',
    dest: 'public/images/services/cip-airport-lounge.webp',
  },
  {
    src: 'src/assets/images/svc_itinerary_map_1788733622001.jpg',
    dest: 'public/images/services/itinerary-planning.webp',
  },
  {
    src: 'src/assets/images/seamless_travel_exp_1788733930696.jpg',
    dest: 'public/images/services/seamless-travel.webp',
  },
  {
    src: 'src/assets/images/company_formation_biz_1788735659476.jpg',
    dest: 'public/images/services/company-formation.webp',
  },
  {
    src: 'src/assets/images/intl_advisory_meet_1788735680477.jpg',
    dest: 'public/images/services/intl-advisory.webp',
  },
  {
    src: 'src/assets/images/vip_patient_serene_1788731726403.jpg',
    dest: 'public/images/services/vip-patient-recovery.webp',
  },
  {
    src: 'src/assets/images/oman_luxury_tourism_1788730560569.jpg',
    dest: 'public/images/services/luxury-tourism.webp',
  },
  {
    src: 'src/assets/images/healthcare_hospitality_1788731009329.jpg',
    dest: 'public/images/services/healthcare-hospitality.webp',
  },
  {
    src: 'src/assets/images/culture_carpet_art_1788733608823.jpg',
    dest: 'public/images/services/persian-carpet-culture.webp',
  },
  {
    src: 'src/assets/images/history_persepolis_1788733559024.jpg',
    dest: 'public/images/services/persepolis-heritage.webp',
  },
  {
    src: 'src/assets/images/architecture_stained_glass_1788733570786.jpg',
    dest: 'public/images/services/nasir-al-mulk-architecture.webp',
  },
  {
    src: 'src/assets/images/persian_food_feast_1788733545465.jpg',
    dest: 'public/images/services/persian-cuisine-feast.webp',
  },
  {
    src: 'src/assets/images/nature_lut_desert_1788733582646.jpg',
    dest: 'public/images/services/lut-desert-safari.webp',
  },
  {
    src: 'src/assets/images/iranian_life_bazaar_1788733596085.jpg',
    dest: 'public/images/services/traditional-bazaar-life.webp',
  },
  {
    src: 'src/assets/images/yazd_historic_windcatchers_1788731231623.jpg',
    dest: 'public/images/services/yazd-windcatchers.webp',
  },
  {
    src: 'src/assets/images/yazd_historic_rooftops_1788731223124.jpg',
    dest: 'public/images/services/yazd-historic-rooftops.webp',
  },
  {
    src: 'src/assets/images/kish_island_beach_1788731248367.jpg',
    dest: 'public/images/services/kish-island-resort.webp',
  },
  {
    src: 'src/assets/images/naghshe_jahan_isfahan_1788730682237.jpg',
    dest: 'public/images/services/isfahan-naghshe-jahan.webp',
  },
  {
    src: 'src/assets/images/tourist_in_iran_1788733531977.jpg',
    dest: 'public/images/services/inbound-tourist-experience.webp',
  },

  // --- TEAM ---
  {
    src: 'src/assets/images/patient_coordinator_1788731714247.jpg',
    dest: 'public/images/team/medical-coordinator.webp',
  },
  {
    src: 'src/assets/images/about_focus_health_doctor.jpg',
    dest: 'public/images/team/chief-medical-officer.webp',
  },
  {
    src: 'src/assets/images/about_focus_intl_corporate.jpg',
    dest: 'public/images/team/international-affairs-director.webp',
  },
  {
    src: 'src/assets/images/about_focus_vip_chauffeur.jpg',
    dest: 'public/images/team/vip-transport-lead.webp',
  },

  // --- BLOG ---
  {
    src: 'src/assets/images/hero_iran_cinematic_1788733519875.jpg',
    dest: 'public/images/blog/iran-medical-tourism-guide.webp',
  },
  {
    src: 'src/assets/images/healthcare_hospitality_1788731009329.jpg',
    dest: 'public/images/blog/health-hospitality-standards.webp',
  },
  {
    src: 'src/assets/images/naghshe_jahan_isfahan_1788730682237.jpg',
    dest: 'public/images/blog/isfahan-travel-itinerary.webp',
  },
  {
    src: 'src/assets/images/history_persepolis_1788733559024.jpg',
    dest: 'public/images/blog/shiraz-persepolis-history.webp',
  },
  {
    src: 'src/assets/images/svc_airport_cip_1788733656641.jpg',
    dest: 'public/images/blog/cip-airport-guide.webp',
  },
  {
    src: 'src/assets/images/svc_visa_1788732496579.jpg',
    dest: 'public/images/blog/iran-treatment-visa.webp',
  },
  {
    src: 'src/assets/images/company_formation_biz_1788735659476.jpg',
    dest: 'public/images/blog/business-formation-iran.webp',
  },
  {
    src: 'src/assets/images/kish_island_beach_1788731248367.jpg',
    dest: 'public/images/blog/kish-recreation-tourism.webp',
  },
  {
    src: 'src/assets/images/svc_doctor_1788732474613.jpg',
    dest: 'public/images/blog/doctor-consultation-guide.webp',
  },
  {
    src: 'src/assets/images/nature_lut_desert_1788733582646.jpg',
    dest: 'public/images/blog/lut-desert-unesco.webp',
  },
  {
    src: 'src/assets/images/intl_advisory_meet_1788735680477.jpg',
    dest: 'public/images/blog/corporate-advisory-middle-east.webp',
  },
  {
    src: 'src/assets/images/about_focus_health_doctor.jpg',
    dest: 'public/images/blog/cosmetic-surgery-iran.webp',
  },
  {
    src: 'src/assets/images/about_focus_health_modern.jpg',
    dest: 'public/images/blog/ivf-fertility-centers.webp',
  },
  {
    src: 'src/assets/images/svc_hospital_1788732485452.jpg',
    dest: 'public/images/blog/orthopedic-surgeries.webp',
  },
  {
    src: 'src/assets/images/vip_patient_serene_1788731726403.jpg',
    dest: 'public/images/blog/dental-implant-packages.webp',
  },
  {
    src: 'src/assets/images/about_hero_terminal_gateway.jpg',
    dest: 'public/images/blog/iran-visa-requirements-faq.webp',
  },
  {
    src: 'src/assets/images/formal_approach_boardroom_1788737998156.jpg',
    dest: 'public/images/blog/medical-visa-extension-rules.webp',
  },
];

// Helper to create clean local placeholder SVGs & WebPs
async function createLocalPlaceholders() {
  const categories = [
    { dir: 'hero', name: 'placeholder-hero.webp', label: 'تصویر هدر اصلی', sub: 'Hero Cover' },
    { dir: 'about', name: 'placeholder-about.webp', label: 'درباره ایرسا سیمرغ', sub: 'About Us' },
    { dir: 'services', name: 'placeholder-service.webp', label: 'خدمات تخصصی', sub: 'Service Item' },
    { dir: 'blog', name: 'placeholder-blog.webp', label: 'مقاله ژورنال', sub: 'Journal Article' },
    { dir: 'team', name: 'placeholder-team.webp', label: 'تیم تخصصی ایرسا', sub: 'Team Member' },
  ];

  for (const cat of categories) {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0c1222"/>
          <stop offset="100%" stop-color="#050811"/>
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#fbbf24"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bg)"/>
      <rect x="20" y="20" width="760" height="460" rx="16" fill="none" stroke="url(#gold)" stroke-width="1.5" stroke-dasharray="8 8" opacity="0.4"/>
      <circle cx="400" cy="210" r="54" fill="#141c30" stroke="#f59e0b" stroke-width="2" opacity="0.8"/>
      <path d="M375 220 L400 185 L425 220 Z M385 220 L370 240 L430 240 Z" fill="#f59e0b" opacity="0.8"/>
      <text x="400" y="305" fill="#fef3c7" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle" direction="rtl">${cat.label}</text>
      <text x="400" y="340" fill="#94a3b8" font-family="sans-serif" font-size="14" text-anchor="middle">${cat.sub} Placeholder • IRSA SIMORGH</text>
    </svg>`;

    const destPath = path.join('public/images', cat.dir, cat.name);
    await sharp(Buffer.from(svgContent))
      .webp({ quality: 85 })
      .toFile(destPath);
    console.log(`Generated placeholder: ${destPath}`);
  }
}

async function copyIcons() {
  const iconFiles = [
    { src: 'public/icon.svg', dest: 'public/images/icons/brand-symbol.svg' },
    { src: 'public/pwa-192x192.png', dest: 'public/images/icons/app-icon-192.png' },
    { src: 'public/pwa-512x512.png', dest: 'public/images/icons/app-icon-512.png' },
  ];

  for (const item of iconFiles) {
    if (fs.existsSync(item.src)) {
      fs.copyFileSync(item.src, item.dest);
      console.log(`Copied icon: ${item.dest}`);
    }
  }
}

async function processAll() {
  console.log('Starting WebP conversion and organization...');

  // Ensure directories exist
  const dirs = [
    'public/images/hero',
    'public/images/about',
    'public/images/services',
    'public/images/blog',
    'public/images/team',
    'public/images/icons',
  ];
  dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

  for (const m of mappings) {
    if (fs.existsSync(m.src)) {
      await sharp(m.src)
        .webp({ quality: 86, effort: 4 })
        .toFile(m.dest);
      console.log(`Converted: ${m.src} -> ${m.dest}`);
    } else {
      console.warn(`Source not found: ${m.src}`);
    }
  }

  await createLocalPlaceholders();
  await copyIcons();

  console.log('All local images successfully converted and structured in public/images/!');
}

processAll().catch(err => {
  console.error(err);
  process.exit(1);
});

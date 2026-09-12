import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// SVG for IRSA SIMORGH with beautiful golden luxury crest
const createSvg = ({ isMaskable = false } = {}) => {
  // If maskable, icon elements are centered in the inner 75% safe area
  const scale = isMaskable ? 0.75 : 0.88;
  const offset = isMaskable ? 64 : 30; // for 512x512 canvas

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d" />
      <stop offset="50%" stop-color="#070a12" />
      <stop offset="100%" stop-color="#04060a" />
    </linearGradient>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde68a" />
      <stop offset="30%" stop-color="#fbbf24" />
      <stop offset="70%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <linearGradient id="crest-grad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="50%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#fef3c7" />
    </linearGradient>
    <radialGradient id="glow-radial" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#070a12" stop-opacity="0" />
    </radialGradient>
    <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Solid Full Bleed Background -->
  <rect width="512" height="512" fill="url(#bg-grad)" />

  <!-- Radial Glow Behind Emblem -->
  <circle cx="256" cy="256" r="210" fill="url(#glow-radial)" />

  <!-- Emblem Card / Badge Container -->
  <g transform="translate(${offset}, ${offset}) scale(${scale})">
    <!-- Outer Golden Ring Subtle Accent -->
    <rect x="36" y="36" width="440" height="440" rx="90" fill="#0c1222" stroke="url(#gold-grad)" stroke-width="6" stroke-opacity="0.35" />
    <rect x="46" y="46" width="420" height="420" rx="80" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.15" />

    <!-- Stylized Simorgh Crest Graphics -->
    <g transform="translate(100, 90) scale(9.8)" filter="url(#soft-glow)">
      <!-- Main Wing Arc 1 -->
      <path
        d="M6 22C11 20 18 16 23 8C20 14 16 18 10 24"
        stroke="url(#gold-grad)"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Wing Arc 2 -->
      <path
        d="M10 24C15 21 21 16 26 10C23 15 18 20 13 25"
        stroke="url(#crest-grad)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Crest Star/Sun Dot -->
      <circle cx="24" cy="7.5" r="2" fill="url(#crest-grad)" />
      <!-- Base Balance Hook -->
      <path
        d="M7 23.5C8 23 10 23.5 11 24.5"
        stroke="url(#gold-grad)"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </g>

    <!-- Subtle Brand Name Below Emblem -->
    <text x="256" y="420" text-anchor="middle" font-family="sans-serif" font-weight="900" font-size="28" fill="#ffffff" letter-spacing="3">IRSA SIMORGH</text>
  </g>
</svg>`;
};

async function generate() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const standardSvg = createSvg({ isMaskable: false });
  const maskableSvg = createSvg({ isMaskable: true });

  fs.writeFileSync(path.join(publicDir, 'icon.svg'), standardSvg, 'utf8');
  console.log('Created public/icon.svg');

  const standardBuffer = Buffer.from(standardSvg);
  const maskableBuffer = Buffer.from(maskableSvg);

  // 192x192
  await sharp(standardBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Created public/pwa-192x192.png');

  // 512x512
  await sharp(standardBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Created public/pwa-512x512.png');

  // 512x512 maskable (padded safe zone)
  await sharp(maskableBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Created public/pwa-maskable-512x512.png');

  // apple-touch-icon 180x180
  await sharp(standardBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created public/apple-touch-icon.png');

  // favicon.ico (64x64 png as favicon or ico)
  await sharp(standardBuffer)
    .resize(64, 64)
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created public/favicon.ico');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});

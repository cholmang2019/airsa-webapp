import React from 'react';

interface FlagProps {
  className?: string;
  size?: number;
}

/**
 * High-definition vector SVG flag for Iran (فارسی)
 */
export const IranFlag: React.FC<FlagProps> = ({ className = 'w-5 h-3.5 rounded-[2px] shadow-sm', size }) => (
  <svg
    viewBox="0 0 640 480"
    className={className}
    style={size ? { width: size, height: (size * 3) / 4 } : undefined}
    aria-hidden="true"
  >
    <path fill="#239f40" d="M0 0h640v160H0z" />
    <path fill="#ffffff" d="M0 160h640v160H0z" />
    <path fill="#da0000" d="M0 320h640v160H0z" />
    {/* Central Emblem */}
    <g transform="translate(320, 240) scale(0.65)">
      <path
        fill="#da0000"
        d="M0-70c-6 25-24 54-52 64 12 7 26 11 40 12v34h24V6c14-1 28-5 40-12-28-10-46-39-52-64z M-15-40c-18 20-22 45-12 68-7-8-11-18-11-28 0-16 9-31 23-40z M15-40c14 9 23 24 23 40 0 10-4 20-11 28 10-23 6-48-12-68z"
      />
    </g>
  </svg>
);

/**
 * High-definition vector SVG flag for United Kingdom / English (English)
 */
export const UkFlag: React.FC<FlagProps> = ({ className = 'w-5 h-3.5 rounded-[2px] shadow-sm', size }) => (
  <svg
    viewBox="0 0 640 480"
    className={className}
    style={size ? { width: size, height: (size * 3) / 4 } : undefined}
    aria-hidden="true"
  >
    <clipPath id="uk-clip">
      <path d="M0 0h640v480H0z" />
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path stroke="#fff" strokeWidth="60" d="m0 0 640 480M640 0 0 480" />
      <path stroke="#c8102e" strokeWidth="40" d="m0 0 640 480M640 0 0 480" />
      <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640" />
      <path stroke="#c8102e" strokeWidth="60" d="M320 0v480M0 240h640" />
    </g>
  </svg>
);

/**
 * High-definition vector SVG flag for UAE / Arab World (العربية)
 */
export const UaeFlag: React.FC<FlagProps> = ({ className = 'w-5 h-3.5 rounded-[2px] shadow-sm', size }) => (
  <svg
    viewBox="0 0 640 480"
    className={className}
    style={size ? { width: size, height: (size * 3) / 4 } : undefined}
    aria-hidden="true"
  >
    <path fill="#00732f" d="M0 0h640v160H0z" />
    <path fill="#ffffff" d="M0 160h640v160H0z" />
    <path fill="#000000" d="M0 320h640v160H0z" />
    <path fill="#ff0000" d="M0 0h160v480H0z" />
  </svg>
);

/**
 * High-definition vector SVG flag for Turkey (Türkçe)
 */
export const TurkeyFlag: React.FC<FlagProps> = ({ className = 'w-5 h-3.5 rounded-[2px] shadow-sm', size }) => (
  <svg
    viewBox="0 0 1200 800"
    className={className}
    style={size ? { width: size, height: (size * 2) / 3 } : undefined}
    aria-hidden="true"
  >
    <rect width="1200" height="800" fill="#E30A17" />
    <circle cx="420" cy="400" r="240" fill="#ffffff" />
    <circle cx="480" cy="400" r="192" fill="#E30A17" />
    <polygon
      fill="#ffffff"
      points="620,400 706,428 653,356 653,444 706,372"
    />
  </svg>
);

/**
 * High-definition vector SVG flag for China (中文)
 */
export const ChinaFlag: React.FC<FlagProps> = ({ className = 'w-5 h-3.5 rounded-[2px] shadow-sm', size }) => (
  <svg
    viewBox="0 0 900 600"
    className={className}
    style={size ? { width: size, height: (size * 2) / 3 } : undefined}
    aria-hidden="true"
  >
    <rect width="900" height="600" fill="#DE2910" />
    {/* Large Star */}
    <g transform="translate(150, 150) scale(90)">
      <polygon
        fill="#FFDE00"
        points="0,-1 0.588,0.809 -0.951,-0.309 0.951,-0.309 -0.588,0.809"
      />
    </g>
    {/* Star 1 */}
    <g transform="translate(300, 60) rotate(-52) scale(30)">
      <polygon
        fill="#FFDE00"
        points="0,-1 0.588,0.809 -0.951,-0.309 0.951,-0.309 -0.588,0.809"
      />
    </g>
    {/* Star 2 */}
    <g transform="translate(360, 120) rotate(-30) scale(30)">
      <polygon
        fill="#FFDE00"
        points="0,-1 0.588,0.809 -0.951,-0.309 0.951,-0.309 -0.588,0.809"
      />
    </g>
    {/* Star 3 */}
    <g transform="translate(360, 210) scale(30)">
      <polygon
        fill="#FFDE00"
        points="0,-1 0.588,0.809 -0.951,-0.309 0.951,-0.309 -0.588,0.809"
      />
    </g>
    {/* Star 4 */}
    <g transform="translate(300, 270) rotate(19) scale(30)">
      <polygon
        fill="#FFDE00"
        points="0,-1 0.588,0.809 -0.951,-0.309 0.951,-0.309 -0.588,0.809"
      />
    </g>
  </svg>
);

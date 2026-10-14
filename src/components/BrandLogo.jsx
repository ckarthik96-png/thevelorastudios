import React from 'react';

/**
 * Official Brand Logo Component for The Velora Studios
 * Features:
 * - Rounded square badge with gold border & obsidian fill
 * - Stylized geometric gold "V" chevron emblem
 * - Bold contemporary sans-serif typography: "The Velora Studios"
 * - Editorial sub-label: "CREATIVE & DIGITAL STUDIO"
 */
export default function BrandLogo({
  theme = 'auto', // 'dark' | 'light' | 'auto'
  size = 'md',    // 'sm' | 'md' | 'lg'
  hideSubtext = false,
  className = ''
}) {
  return (
    <div className={`brand-logo-lockup theme-${theme} size-${size} ${className}`}>
      <div className="brand-emblem-badge" aria-hidden="true">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-emblem-svg"
        >
          <defs>
            <linearGradient id="vGoldGradUnique" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D78E" />
              <stop offset="50%" stopColor="#D4A853" />
              <stop offset="100%" stopColor="#A87F30" />
            </linearGradient>
            <linearGradient id="badgeBorderUnique" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5BF70" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#8A651E" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="badgeBgUnique" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#15171F" />
              <stop offset="100%" stopColor="#0B0C10" />
            </linearGradient>
          </defs>
          <rect
            x="1"
            y="1"
            width="38"
            height="38"
            rx="9.5"
            fill="url(#badgeBgUnique)"
            stroke="url(#badgeBorderUnique)"
            strokeWidth="1.25"
          />
          <path
            d="M9 13H15L19.8 23.2C20 23.6 20.4 23.6 20.6 23.2L25.4 13H31.4L23.8 27H16.6L9 13Z"
            fill="url(#vGoldGradUnique)"
          />
        </svg>
      </div>

      <div className="brand-text-block">
        <span className="brand-title-text font-sans">The Velora Studios</span>
        {!hideSubtext && (
          <span className="brand-subtitle-text font-sans">CREATIVE &amp; DIGITAL STUDIO</span>
        )}
      </div>
    </div>
  );
}

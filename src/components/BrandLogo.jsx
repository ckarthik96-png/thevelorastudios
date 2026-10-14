import React from 'react';
import logoGold from '../assets/logo.png';
import logoGoldDarkBg from '../assets/logo-dark.png';

/**
 * The Velora Studios Official Brand Logo
 * Displays the 3D embossed gold VELORA STUDIOS emblem with the central Vel spear and play button.
 * Uses Vite bundled asset imports to eliminate all browser caching issues.
 */
export default function BrandLogo({
  theme = 'auto', // 'dark' | 'light' | 'auto'
  size = 'md',    // 'sm' | 'md' | 'lg' | 'hero'
  className = ''
}) {
  const isDark = theme === 'dark';

  return (
    <div className={`brand-logo-container size-${size} theme-${theme} ${className}`}>
      <img
        src={isDark ? logoGold : logoGoldDarkBg}
        alt="The Velora Studios"
        className="brand-official-logo-img"
        loading="eager"
      />
    </div>
  );
}

import React from 'react';

/**
 * The Velora Studios Official Brand Logo
 * Displays the 3D embossed gold VELORA STUDIOS emblem with the central Vel spear.
 * Automatically adapts between dark backgrounds and light backgrounds.
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
        src={isDark ? '/logo.png?v=5' : '/logo-dark.png?v=5'}
        alt="The Velora Studios"
        className="brand-official-logo-img"
        loading="eager"
      />
    </div>
  );
}

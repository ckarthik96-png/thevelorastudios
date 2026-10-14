import React from 'react';

/**
 * The Velora Studios Official Brand Logo
 * Displays the authentic paintbrush quill brand logo.
 * Automatically adapts between dark background (white text) and light background (charcoal text).
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
        src={isDark ? '/logo.png?v=4' : '/logo-dark.png?v=4'}
        alt="The Velora Studios"
        className="brand-official-logo-img"
        loading="eager"
      />
    </div>
  );
}

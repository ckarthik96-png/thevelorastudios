import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Monogram & Logo */}
        <a href="#" className="navbar-brand">
          <div className="brand-logo-symbol">
            <span>V</span>
          </div>
          <div className="brand-text">
            <span className="brand-title">{STUDIO_INFO.name}</span>
            <span className="brand-subtitle">Creative & Digital Studio</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-item">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary nav-cta">
            <span>Start a Project</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={handleLinkClick} className="mobile-nav-item">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-footer">
              <a href="#contact" onClick={handleLinkClick} className="btn btn-primary" style={{ width: '100%' }}>
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </a>
              <p className="mobile-email">{STUDIO_INFO.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

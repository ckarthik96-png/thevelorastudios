import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';
  const isDarkHeader = isHomePage && !isScrolled;

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isDarkHeader ? 'header-dark-hero' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="The Velora Studios Home">
          <img
            src={isDarkHeader ? "/logo.png" : "/logo-dark.png"}
            alt="The Velora Studios"
            className="site-logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-navigation" aria-label="Primary Navigation">
          <ul className="nav-menu">
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header CTA Button */}
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary nav-cta-btn">
            <span>Start a Project</span>
            <ArrowUpRight size={15} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <div className="container mobile-drawer-content">
            <div className="mobile-drawer-header">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="The Velora Studios Home">
                <img
                  src="/logo-dark.png"
                  alt="The Velora Studios"
                  className="mobile-drawer-logo"
                />
              </Link>
              <span className="mobile-eyebrow">BRANDING · DIGITAL · CREATIVE</span>
            </div>
            <ul className="mobile-links-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`mobile-nav-link font-serif ${location.pathname === link.path ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-bottom">
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Start a Project</span>
                <ArrowUpRight size={16} />
              </Link>
              <p className="mobile-email-hint">{STUDIO_CONFIG.displayEmail}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

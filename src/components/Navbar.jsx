import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';
import BrandLogo from './BrandLogo';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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

  // Lock body scroll when mobile menu is open to prevent page shift
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'Our Process', path: '/process' },
    { name: 'Contact', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';
  const isDark = theme === 'dark';
  const isDarkHeader = isDark || (isHomePage && !isScrolled);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isDarkHeader ? 'header-dark-hero' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" aria-label="The Velora Studios Home">
          <BrandLogo theme={isDarkHeader ? 'dark' : 'light'} size="md" />
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

            {/* Dark Mode / Light Mode Toggle Button (right next to Contact) */}
            <li className="nav-theme-item">
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <Sun size={17} className="theme-toggle-icon sun-icon" />
                ) : (
                  <Moon size={17} className="theme-toggle-icon moon-icon" />
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Header CTA Button & Actions */}
        <div className="nav-actions">
          {/* Mobile Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <Sun size={17} className="theme-toggle-icon sun-icon" />
            ) : (
              <Moon size={17} className="theme-toggle-icon moon-icon" />
            )}
          </button>

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
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Header stays visible above; no duplicate logo or toggle inside drawer) */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" id="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="container mobile-drawer-content">
            <ul className="mobile-links-list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`mobile-nav-link font-serif ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-drawer-bottom">
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
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

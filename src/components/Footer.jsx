import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Prominent Project Enquiry Banner */}
      <div className="footer-cta-banner">
        <div className="container footer-cta-container">
          <div className="footer-cta-text">
            <span className="editorial-label">06 / LET'S TALK</span>
            <h2 className="footer-cta-headline font-serif">
              Your next chapter starts with a conversation.
            </h2>
            <p className="footer-cta-subtext">
              Tell us about your business, your idea or the challenge you're ready to solve. Let's explore what we can create together.
            </p>
          </div>
          <div className="footer-cta-action">
            <Link to="/contact" className="btn btn-primary footer-main-cta">
              <span>LET'S DISCUSS YOUR PROJECT</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      <div className="horizontal-divider" />

      {/* Main Footer Navigation & Studio Details */}
      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Studio Identity */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-brand-title font-serif">
              VELORA<sup>®</sup>
            </Link>
            <p className="footer-tagline">
              {STUDIO_CONFIG.tagline}
            </p>
            <p className="footer-positioning">
              {STUDIO_CONFIG.positioning}
            </p>
            <span className="footer-edge-badge">
              Edge Hosted on Cloudflare Pages • thevelorastudios.com
            </span>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <span className="footer-heading">Navigation</span>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Studio</Link></li>
              <li><Link to="/services">Services Overview</Link></li>
              <li><Link to="/work">Selected Work</Link></li>
              <li><Link to="/insights">Studio Insights</Link></li>
              <li><Link to="/contact">Contact &amp; Enquiry</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <span className="footer-heading">Capabilities</span>
            <ul className="footer-nav-list">
              <li><Link to="/services/branding">Branding &amp; Visual Identity</Link></li>
              <li><Link to="/services/web-design">Website Design &amp; Development</Link></li>
              <li><Link to="/services/creative-design">Creative Design &amp; Direction</Link></li>
              <li><Link to="/services">Digital Experiences</Link></li>
              <li><Link to="/services">Content &amp; Visual Storytelling</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="footer-col">
            <span className="footer-heading">Direct Channels</span>
            <ul className="footer-nav-list">
              <li>
                <a href={`mailto:${STUDIO_CONFIG.displayEmail}`} className="footer-direct-link">
                  {STUDIO_CONFIG.displayEmail}
                </a>
              </li>
              <li>
                <a href={STUDIO_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-direct-link">
                  WhatsApp: {STUDIO_CONFIG.displayWhatsapp}
                </a>
              </li>
              <li>
                <a href={STUDIO_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer" className="footer-direct-link">
                  Book a Consultation ↗
                </a>
              </li>
            </ul>
            <div className="footer-socials-row">
              <a href={STUDIO_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
              <span>/</span>
              <a href={STUDIO_CONFIG.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
              <span>/</span>
              <a href={STUDIO_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <span>/</span>
              <a href={STUDIO_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-note">
            &copy; {currentYear} {STUDIO_CONFIG.name}. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="dot-sep">•</span>
            <Link to="/terms">Website Terms</Link>
          </div>

          <button type="button" onClick={scrollToTop} className="scroll-top-action" aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

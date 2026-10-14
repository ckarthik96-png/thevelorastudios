import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG, SERVICES_DATA } from '../data/studioData';
import BrandLogo from './BrandLogo';

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
            <span className="editorial-label">LET'S TALK</span>
            <h2 className="footer-cta-headline font-serif">
              Let’s make your next idea worth watching.
            </h2>
            <p className="footer-cta-subtext">
              Planning a campaign, launching a product, organising an event, or building your content calendar? Tell us what you have in mind.
            </p>
          </div>
          <div className="footer-cta-action">
            <Link to="/contact" className="btn btn-primary footer-main-cta">
              <span>Start a Project</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      <div className="horizontal-divider" />

      {/* Main Footer Content */}
      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Studio Identity */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-brand-logo-link" aria-label="The Velora Studios Home">
              <BrandLogo theme="light" size="lg" />
            </Link>
            <p className="footer-positioning">
              Video production, advertising, motion graphics, and AI-powered storytelling—from the first idea to the final frame.
            </p>
            <div className="footer-location-badge">
              <span>Based in Bangalore • Serving clients globally</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <span className="footer-heading">Services</span>
            <ul className="footer-nav-list">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link to="/services">{srv.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="footer-col">
            <span className="footer-heading">Explore</span>
            <ul className="footer-nav-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Client Markets & Direct Channels */}
          <div className="footer-col">
            <span className="footer-heading">Client Markets</span>
            <ul className="footer-markets-list">
              {STUDIO_CONFIG.clientMarkets.map((market) => (
                <li key={market} className="market-item">
                  <span className="market-dot" />
                  <span>{market}</span>
                </li>
              ))}
            </ul>

            <span className="footer-heading" style={{ marginTop: '24px' }}>Direct Inquiries</span>
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
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-note">
            &copy; {currentYear} {STUDIO_CONFIG.name}. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms</Link>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to Top of Page"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

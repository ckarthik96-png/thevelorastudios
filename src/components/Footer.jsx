import React from 'react';
import { ArrowUp, Globe, Mail } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

// Clean, precise social SVG icons for zero external icon dependency issues
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const XIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16m0-16L4 20"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Footer({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top Tier */}
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <div className="brand-logo-symbol">
                <span>V</span>
              </div>
              <span className="brand-title">{STUDIO_INFO.name}</span>
            </div>
            <p className="footer-tagline">
              Bespoke brand architecture, immersive digital products, and strategic creative direction for the global avant-garde.
            </p>
            <div className="footer-edge-badge">
              <span className="edge-pulse-dot" />
              <span>Edge-Hosted on Cloudflare Pages • {STUDIO_INFO.domain}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About Atelier</a></li>
              <li><a href="#services">Capabilities</a></li>
              <li><a href="#portfolio">Selected Works</a></li>
              <li><a href="#process">Methodology</a></li>
              <li><a href="#contact">Commission Brief</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Disciplines</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Brand Architecture</a></li>
              <li><a href="#services">Digital UI/UX Systems</a></li>
              <li><a href="#services">Creative Direction</a></li>
              <li><a href="#services">Modern Web Engineering</a></li>
              <li><a href="#services">Global Edge Deployment</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Atelier Presence</h4>
            <div className="footer-social-links">
              <a href={STUDIO_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                <InstagramIcon />
              </a>
              <a href={STUDIO_INFO.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="social-icon-btn">
                <XIcon />
              </a>
              <a href={STUDIO_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <LinkedinIcon />
              </a>
              <a href={STUDIO_INFO.socials.dribbble} target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="social-icon-btn">
                <DribbbleIcon />
              </a>
              <a href={STUDIO_INFO.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-btn">
                <GithubIcon />
              </a>
            </div>
            <p className="footer-inquiry-note">
              General Inquiries:
              <br />
              <a href={`mailto:${STUDIO_INFO.email}`} className="footer-email-link">{STUDIO_INFO.email}</a>
            </p>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {currentYear} {STUDIO_INFO.name}. All rights reserved. 
            <span className="placeholder-subtext"> [Placeholder: Registered Business Entity details].</span>
          </p>

          <div className="footer-legal-links">
            <button type="button" onClick={() => onOpenLegal('privacy')} className="legal-btn">
              Privacy Policy
            </button>
            <span className="legal-separator">•</span>
            <button type="button" onClick={() => onOpenLegal('terms')} className="legal-btn">
              Terms of Engagement
            </button>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll back to top">
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

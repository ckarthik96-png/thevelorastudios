import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, Film, Sparkles, MapPin, Check } from 'lucide-react';
import { STUDIO_CONFIG, ABOUT_STUDIO } from '../data/studioData';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import HighlightStrip from '../components/HighlightStrip';
import ServicesSection from '../components/ServicesSection';
import WorkSection from '../components/WorkSection';
import WhyVelora from '../components/WhyVelora';
import ProcessSection from '../components/ProcessSection';
import ClientReach from '../components/ClientReach';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper home-page">
      <SEO />

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="hero-dark-showcase-section" id="hero">
        <div className="hero-ambient-glow" />
        <div className="container hero-dark-container">
          {/* Official Brand Logo Crest */}
          <div className="hero-brand-crest-wrap">
            <BrandLogo theme="dark" size="hero" />
          </div>

          {/* Small Introductory Line */}
          <div className="hero-pill-badge-wrap">
            <div className="hero-pill-badge">
              <span className="pill-dot" />
              <span>{STUDIO_CONFIG.heroIntro}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="hero-dark-headline font-sans">
            Creative Video Production &amp; <span className="gold-gradient-text">AI-Powered Visual Content for Brands.</span>
          </h1>

          {/* Description answering: What services, Who are target customers, Why choose studio, What next */}
          <p className="hero-dark-paragraph">
            From cinematic commercials and motion graphics to social media reels and AI-powered brand films, we partner with ambitious companies across Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad. With 10+ years of filmmaking craft and 200+ projects delivered, we take your vision from the first concept to the final frame.
          </p>

          {/* Dual Action Buttons matching reference screenshot */}
          <div className="hero-dark-actions">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn hero-quote-btn"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={STUDIO_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Now</span>
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="btn btn-dark-outline hero-btn-sub"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Location Line */}
          <div className="hero-location-line font-mono">
            <MapPin size={14} className="hero-loc-pin" />
            <span>{STUDIO_CONFIG.heroLocations}</span>
          </div>

          {/* Subtle Divider Line */}
          <div className="hero-section-divider" />

          {/* Capabilities Row */}
          <div className="hero-capabilities-block">
            <span className="capabilities-label font-mono">OUR CAPABILITIES</span>
            <div className="capabilities-pills-row">
              <span className="capability-item">
                <Check size={16} className="capability-check-icon" />
                <span>Video Production</span>
              </span>
              <span className="capability-item">
                <Check size={16} className="capability-check-icon" />
                <span>Motion Graphics</span>
              </span>
              <span className="capability-item">
                <Check size={16} className="capability-check-icon" />
                <span>AI Videos</span>
              </span>
              <span className="capability-item">
                <Check size={16} className="capability-check-icon" />
                <span>Brand Films</span>
              </span>
            </div>
          </div>

          {/* 4 Stat Counter Cards */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-card-number font-sans">10+</div>
              <div className="stat-card-label font-sans">Years Enterprise Experience</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-card-number font-sans">200+</div>
              <div className="stat-card-label font-sans">Projects Completed</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-card-number font-sans">100+</div>
              <div className="stat-card-label font-sans">Happy Corporate Clients</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-card-number font-sans">24/7</div>
              <div className="stat-card-label font-sans">Help Desk Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. HIGHLIGHT STRIP
          ========================================================================= */}
      <HighlightStrip />

      {/* =========================================================================
          3. ABOUT THE STUDIO
          ========================================================================= */}
      <section className="section-spacing about-studio-overview-section" id="about">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-col-left">
              <span className="editorial-label">ABOUT THE STUDIO</span>
              <h2 className="about-overview-headline font-serif">
                {ABOUT_STUDIO.heading}
              </h2>
              <p className="about-overview-lead font-sans">
                {ABOUT_STUDIO.p1}
              </p>
              <p className="about-overview-body">
                {ABOUT_STUDIO.p2}
              </p>
              <p className="about-overview-body">
                {ABOUT_STUDIO.p3}
              </p>
            </div>

            <div className="about-overview-col-right">
              <div className="about-statement-card">
                <div className="statement-card-emblem">
                  <BrandLogo theme="light" size="md" />
                </div>
                <span className="statement-eyebrow font-mono">OUR PROMISE</span>
                <blockquote className="statement-quote font-serif">
                  "{ABOUT_STUDIO.statement}"
                </blockquote>
                <p className="statement-sub">
                  From initial scripting and creative moodboards through shoot production, 3D animation, and platform delivery, we treat every commission as a signature piece.
                </p>
                <div className="statement-action-wrap">
                  <Link to="/about" className="btn btn-secondary">
                    <span>Read Studio Story</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR SERVICES (8 Disciplines)
          ========================================================================= */}
      <ServicesSection />

      {/* =========================================================================
          5. OUR WORK (Portfolio with 8 Filters & Video Modal)
          ========================================================================= */}
      <WorkSection />

      {/* =========================================================================
          6. WHY VELORA (4 Key Pillars)
          ========================================================================= */}
      <WhyVelora />

      {/* =========================================================================
          7. OUR PROCESS (5 Steps)
          ========================================================================= */}
      <ProcessSection />

      {/* =========================================================================
          8. CLIENT REACH (Dubai, Canada, Bangalore, Hyderabad)
          ========================================================================= */}
      <ClientReach />

      {/* =========================================================================
          9. FREQUENTLY ASKED QUESTIONS (8 FAQs)
          ========================================================================= */}
      <FAQSection />

      {/* =========================================================================
          10. CONTACT SECTION
          ========================================================================= */}
      <ContactForm />
    </div>
  );
}

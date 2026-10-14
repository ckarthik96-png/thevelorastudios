import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, Film, Sparkles, MapPin } from 'lucide-react';
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
            Your vision. <span className="gold-gradient-text">Made unforgettable.</span>
          </h1>

          {/* Description */}
          <p className="hero-dark-paragraph">
            {STUDIO_CONFIG.heroDescription}
          </p>

          {/* Dual Action Buttons */}
          <div className="hero-dark-actions">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="btn btn-primary hero-btn-main"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-dark-outline hero-btn-sub"
            >
              <span>Let’s Create Together</span>
            </a>
          </div>

          {/* Location Line */}
          <div className="hero-location-line font-mono">
            <MapPin size={14} className="hero-loc-pin" />
            <span>{STUDIO_CONFIG.heroLocations}</span>
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

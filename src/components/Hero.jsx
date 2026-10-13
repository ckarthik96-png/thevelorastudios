import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { STUDIO_INFO, STUDIO_STATS } from '../data/studioData';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-ambient-glow" />

      <div className="container hero-container">
        {/* Eyebrow Pill */}
        <div className="hero-badge-wrap">
          <div className="eyebrow-badge">
            <span className="dot" />
            <span>Brand Strategy • UI/UX Architecture • Creative Direction</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline font-display">
          Crafting <span className="gradient-text-gold">iconic brands</span> &amp; high-impact digital experiences.
        </h1>

        {/* Hero Paragraph */}
        <p className="hero-subtext">
          {STUDIO_INFO.name} is a boutique creative and digital engineering studio. 
          We partner with ambitious enterprises to forge distinct visual identities, 
          captivating web experiences, and scalable design systems that command authority.
        </p>

        {/* Call to Actions */}
        <div className="hero-cta-group">
          <a href="#portfolio" className="btn btn-primary">
            <span>Explore Selected Work</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Book a Discovery Call</span>
          </a>
        </div>

        {/* Trust & Studio Stats Bar */}
        <div className="hero-stats-panel glass-panel">
          <div className="stats-grid">
            {STUDIO_STATS.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-value font-display">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-placeholder-tag" title={stat.note}>Verified Metric</div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Availability Status Ticker */}
        <div className="hero-status-ticker">
          <div className="ticker-item">
            <span className="status-indicator-green" />
            <span>Currently accepting commissions for Q2 / Q3</span>
          </div>
          <span className="ticker-divider">•</span>
          <div className="ticker-item">
            <span>Studio Base: {STUDIO_INFO.location}</span>
          </div>
          <span className="ticker-divider">•</span>
          <div className="ticker-item">
            <span>Powered by Cloudflare Global Edge</span>
          </div>
        </div>
      </div>
    </section>
  );
}

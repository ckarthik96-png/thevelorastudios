import React from 'react';
import { ABOUT_STUDIO, STUDIO_CONFIG } from '../data/studioData';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';
import WhyVelora from '../components/WhyVelora';
import ClientReach from '../components/ClientReach';

export default function AboutPage() {
  return (
    <div className="page-wrapper about-page">
      <SEO
        customTitle="About The Velora Studios | Storytelling & Video Agency"
        customDescription="The Velora Studios is a fast-growing advertising and video production agency based in Bangalore, working with clients across India and international markets."
      />

      {/* Hero Header */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">ABOUT THE STUDIO</span>
          <h1 className="page-hero-title font-serif">
            {ABOUT_STUDIO.heading}
          </h1>
          <p className="page-hero-sub">
            {STUDIO_CONFIG.tagline}
          </p>
        </div>
      </section>

      {/* Introduction & Philosophy */}
      <section className="section-spacing about-intro-section">
        <div className="container">
          <div className="about-editorial-grid">
            <div className="about-grid-col-left">
              <span className="editorial-label">OUR STORY</span>
              <p className="about-lead-paragraph font-serif">
                {ABOUT_STUDIO.p1}
              </p>
              <p className="about-text-body">
                {ABOUT_STUDIO.p2}
              </p>
              <p className="about-text-body">
                {ABOUT_STUDIO.p3}
              </p>
            </div>

            <div className="about-grid-col-right">
              <div className="about-philosophy-card">
                <div className="about-card-brand-wrap">
                  <BrandLogo theme="light" size="md" />
                </div>
                <span className="editorial-label">STUDIO PHILOSOPHY</span>
                <blockquote className="philosophy-card-title font-serif">
                  "{ABOUT_STUDIO.statement}"
                </blockquote>
                <p className="philosophy-card-desc">
                  We bridge the gap between creative storytelling and commercial impact, ensuring every visual element serves a clear strategic objective.
                </p>
                <div className="about-card-markets">
                  <span className="font-mono">Global collaborations:</span>
                  <div className="about-markets-pills">
                    {STUDIO_CONFIG.clientMarkets.map((m) => (
                      <span key={m} className="market-pill-item font-mono">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Velora (4 Pillars) */}
      <WhyVelora />

      {/* Client Reach */}
      <ClientReach />

    </div>
  );
}

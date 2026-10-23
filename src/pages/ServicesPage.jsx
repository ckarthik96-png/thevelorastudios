import React from 'react';
import ServicesSection from '../components/ServicesSection';
import WhyVelora from '../components/WhyVelora';
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <div className="page-wrapper services-overview-page">
      <SEO
        customTitle="Video Production & Creative Services | The Velora Studios"
        customDescription="From everyday content to ambitious films, we create video across formats, platforms, and production styles."
      />

      {/* Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">OUR SERVICES</span>
          <h1 className="page-hero-title font-serif">
            Everything your story needs to move.
          </h1>
          <p className="page-hero-sub">
            From everyday content to ambitious films, we create video across formats, platforms, and production styles.
          </p>
        </div>
      </section>

      {/* Services Grid (8 Disciplines) */}
      <ServicesSection hideHeader={true} />

      {/* Why Velora (4 Pillars) */}
      <WhyVelora />
    </div>
  );
}

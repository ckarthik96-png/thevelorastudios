import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import WhyVelora from '../components/WhyVelora';
import ProcessSection from '../components/ProcessSection';
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
      <ServicesSection />

      {/* Why Velora (4 Pillars) */}
      <WhyVelora />

      {/* Our Process (5 Steps) */}
      <ProcessSection />

      {/* Closing CTA */}
      <section className="section-spacing about-closing-cta">
        <div className="container text-center">
          <h2 className="about-cta-headline font-serif">
            Let’s make your next idea worth watching.
          </h2>
          <p className="about-cta-sub">
            Planning a campaign, launching a product, organising an event, or building your content calendar? Tell us what you have in mind.
          </p>
          <div style={{ marginTop: '28px' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Start a Project</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

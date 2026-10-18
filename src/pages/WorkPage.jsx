import React from 'react';
import WorkSection from '../components/WorkSection';
import ClientReach from '../components/ClientReach';
import SEO from '../components/SEO';

export default function WorkPage() {
  return (
    <div className="page-wrapper work-page">
      <SEO
        customTitle="Our Work & Portfolio | The Velora Studios"
        customDescription="See the stories we bring to life across commercials, AI videos, product films, social media, and narrative shorts."
      />

      {/* Hero Header */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">PORTFOLIO</span>
          <h1 className="page-hero-title font-serif">
            See the stories we bring to life.
          </h1>
          <p className="page-hero-sub">
            Explore our work across advertising, product films, motion graphics, event videos, social media, and AI production. Each project brings a different brief, audience, and creative challenge.
          </p>
        </div>
      </section>

      {/* Video Portfolio Grid with Filters */}
      <WorkSection hideHeader={true} />

      {/* Client Reach */}
      <ClientReach />
    </div>
  );
}

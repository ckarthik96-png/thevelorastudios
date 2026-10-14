import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
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
      <WorkSection />

      {/* Client Reach */}
      <ClientReach />

      {/* Closing CTA */}
      <section className="section-spacing about-closing-cta">
        <div className="container text-center">
          <h2 className="about-cta-headline font-serif">
            Have a project in mind? Let's start a conversation.
          </h2>
          <p className="about-cta-sub">
            Whether you need a commercial, a product launch film, or an ongoing social media series, we're ready to collaborate.
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS, STUDIO_CONFIG } from '../data/studioData';
import SEO from '../components/SEO';
import WhyVelora from '../components/WhyVelora';
import ClientReach from '../components/ClientReach';

export default function ProcessPage() {
  return (
    <div className="page-wrapper process-page">
      <SEO
        customTitle="Our Process | The Velora Studios"
        customDescription="A clear path from brief to final frame. Discover our 5-step video production methodology."
      />

      {/* Page Hero Header */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">OUR METHODOLOGY</span>
          <h1 className="page-hero-title font-serif">
            A clear path from brief to final frame.
          </h1>
          <p className="page-hero-sub">
            We guide your project through a structured, predictable process that eliminates ambiguity and ensures exceptional creative standards.
          </p>
        </div>
      </section>

      {/* 5 Steps Detail Section */}
      <section className="section-spacing process-detail-section">
        <div className="container">
          <div className="process-expanded-list">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="process-expanded-row">
                <div className="process-expanded-num font-mono">{step.step}</div>
                <div className="process-expanded-content">
                  <h2 className="process-expanded-title font-serif">{step.name}</h2>
                  <p className="process-expanded-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Velora Pillars */}
      <WhyVelora />

      {/* Client Reach */}
      <ClientReach />

      {/* Closing CTA */}
      <section className="section-spacing about-closing-cta">
        <div className="container text-center">
          <h2 className="about-cta-headline font-serif">
            Ready to bring your story to life?
          </h2>
          <p className="about-cta-sub">
            Let’s collaborate to create videos that capture attention and deliver results.
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

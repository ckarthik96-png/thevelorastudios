import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DETAILED_SERVICES } from '../data/studioData';
import ServicesSection from '../components/ServicesSection';
import SEO from '../components/SEO';

export default function ServicesPage() {
  const serviceKeys = Object.keys(DETAILED_SERVICES);

  return (
    <div className="page-wrapper services-overview-page">
      <SEO />

      {/* Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">STUDIO DISCIPLINES</span>
          <h1 className="page-hero-title font-serif">
            Creative services designed around your business.
          </h1>
          <p className="page-hero-sub">
            Whether you're building a new brand, refining an existing identity or creating a stronger digital presence, we bring strategic thinking and thoughtful design together to help you move forward.
          </p>
        </div>
      </section>

      {/* Signature Dark Services Section */}
      <ServicesSection />

      {/* Detailed Services Deep Dive Cards */}
      <section className="section-spacing services-detailed-cards-section">
        <div className="container">
          <div className="services-detailed-list">
            {serviceKeys.map((key) => {
              const s = DETAILED_SERVICES[key];
              return (
                <div key={s.slug} className="service-pillar-card">
                  <div className="pillar-header-row">
                    <div>
                      <span className="editorial-label">{s.badge}</span>
                      <h2 className="pillar-title font-serif">{s.title}</h2>
                    </div>
                    <Link to={`/services/${s.slug}`} className="btn btn-secondary">
                      <span>Explore Dedicated Service</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <p className="pillar-summary">{s.heroSummary}</p>

                  <div className="pillar-deliverables-wrap">
                    <span className="deliverables-heading">Potential Deliverables:</span>
                    <ul className="pillar-deliverables-grid">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="deliverable-list-item">
                          <CheckCircle2 size={15} className="item-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pillar-footer-row">
                    <span className="pillar-scope-note">
                      * Scope, pricing, timelines and final deliverables are confirmed for each tailored engagement.
                    </span>
                    <Link to={`/services/${s.slug}`} className="pillar-arrow-link font-serif">
                      <span>Read full {s.navTitle} breakdown</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Service Closing Copy Box */}
          <div className="services-closing-advisory-box">
            <h3 className="advisory-heading font-serif">Not sure which service you need?</h3>
            <p className="advisory-text">
              Tell us what you're trying to achieve. We'll discuss your requirements and identify a suitable starting point tailored to your budget and growth ambitions.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Discuss Your Requirements</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

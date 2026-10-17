import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, CheckCircle2, ChevronDown } from 'lucide-react';
import { DETAILED_SERVICES } from '../data/studioData';
import SEO from '../components/SEO';

export default function IndividualServicePage() {
  const { serviceSlug } = useParams();
  const service = DETAILED_SERVICES[serviceSlug];
  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="page-wrapper service-detail-page">
      <SEO
        customTitle={`${service.title} | The Velora Studios`}
        customDescription={service.heroSummary}
      />

      {/* Breadcrumb Navigation */}
      <section className="service-hero-section">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/services" className="back-link">
              <ArrowLeft size={14} />
              <span>All Services</span>
            </Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{service.navTitle}</span>
          </div>

          <span className="editorial-label">{service.badge}</span>
          <h1 className="service-hero-title font-serif">{service.heroHeadline}</h1>
          <p className="service-hero-lead">{service.heroSummary}</p>

          <div className="service-hero-cta">
            <Link to="/contact" className="btn btn-primary">
              <span>Enquire About {service.navTitle}</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Ideal Client Grid */}
      <section className="section-spacing service-problem-section">
        <div className="container">
          <div className="problem-client-grid">
            <div className="problem-col">
              <span className="editorial-label">THE BUSINESS CHALLENGE</span>
              <h2 className="section-subheading font-serif">What we solve</h2>
              <p className="body-copy-text">{service.clientProblem}</p>
            </div>
            <div className="client-col">
              <span className="editorial-label">IDEAL AUDIENCE</span>
              <h2 className="section-subheading font-serif">Who this is for</h2>
              <p className="body-copy-text">{service.idealClient}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Checklist */}
      <section className="section-spacing service-deliverables-section">
        <div className="container">
          <div className="deliverables-box">
            <span className="editorial-label">POTENTIAL DELIVERABLES</span>
            <h2 className="deliverables-title font-serif">Scope tailored to your exact milestones.</h2>
            <p className="deliverables-sub">
              Every business requires a slightly different scope. Below are the core deliverables we can include in our formal Statement of Work:
            </p>

            <ul className="service-full-deliverables-list">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="deliverable-item-full">
                  <CheckCircle2 size={18} className="item-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service 4-Step Process */}
      <section className="section-spacing service-process-section">
        <div className="container">
          <div className="service-process-intro">
            <span className="editorial-label">STRUCTURED METHODOLOGY</span>
            <h2 className="section-subheading font-serif">How we deliver {service.navTitle}</h2>
          </div>

          <div className="service-process-steps-grid">
            {service.process.map((p) => (
              <div key={p.step} className="step-card">
                <span className="step-num font-mono">{p.step}</span>
                <h3 className="step-title font-serif">{p.name}</h3>
                <p className="step-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="section-spacing service-faqs-section">
        <div className="container">
          <div className="faq-intro-header">
            <span className="editorial-label">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-subheading font-serif">Answers regarding this service</h2>
          </div>

          <div className="service-faqs-accordion">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-row-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="faq-toggle-btn"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-label font-serif">{faq.q}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-drawer">
                      <p className="faq-answer-body">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Service Closing CTA */}
          <div className="service-cta-card">
            <h3 className="service-cta-heading font-serif">Ready to discuss your {service.navTitle.toLowerCase()}?</h3>
            <p className="service-cta-text">
              Share your project brief or book a 30-minute discovery consultation.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Project</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

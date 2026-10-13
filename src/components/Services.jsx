import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/studioData';

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(SERVICES_LIST[0].id);

  const activeService = SERVICES_LIST.find((s) => s.id === activeTab) || SERVICES_LIST[0];

  const handleServiceSelect = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span className="dot" />
            <span>Studio Capabilities</span>
          </div>
          <h2 className="font-display">Disciplines honed for extraordinary outcomes.</h2>
          <p>
            We offer end-to-end creative and digital execution. Each capability operates with deep specialization while maintaining seamless cohesion across the entire project lifecycle.
          </p>
        </div>

        {/* Services Master Layout */}
        <div className="services-showcase-grid">
          {/* Service Selector Tabs / List */}
          <div className="services-nav-col">
            {SERVICES_LIST.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`service-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <div className="service-tab-num">{service.number}</div>
                  <div className="service-tab-info">
                    <span className="service-tab-title">{service.title}</span>
                  </div>
                  <ChevronRight size={18} className="tab-arrow" />
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Card */}
          <div className="service-detail-col">
            <div className="service-detail-card glass-panel">
              <div className="service-detail-header">
                <span className="detail-number-pill">{activeService.number}</span>
                <span className="detail-meta-tag">Signature Discipline</span>
              </div>

              <h3 className="detail-title font-display">{activeService.title}</h3>
              <p className="detail-summary">{activeService.summary}</p>

              <div className="detail-highlight-banner">
                <Sparkles size={18} className="highlight-icon" />
                <span>{activeService.highlight}</span>
              </div>

              <div className="deliverables-block">
                <h4 className="deliverables-title">Key Studio Deliverables</h4>
                <div className="deliverables-grid">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="deliverable-item">
                      <CheckCircle2 size={16} className="deliverable-check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-actions">
                <button
                  onClick={() => handleServiceSelect(activeService.title)}
                  className="btn btn-primary"
                >
                  <span>Commission {activeService.title}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Retainers Notice */}
        <div className="services-advisory-box">
          <p>
            <strong>Looking for Ongoing Creative Partnership?</strong> We also accept a limited number of quarterly creative direction and design retainers for scaling brands.
            <a href="#contact" className="advisory-link"> Inquire about retainer availability &rarr;</a>
          </p>
        </div>
      </div>
    </section>
  );
}

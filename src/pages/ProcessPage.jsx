import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';
import SEO from '../components/SEO';
import WhyVelora from '../components/WhyVelora';

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

    </div>
  );
}

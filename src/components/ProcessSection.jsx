import React from 'react';
import { PROCESS_STEPS } from '../data/studioData';
import { ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="section-spacing process-showcase-section" id="process">
      <div className="container">
        <div className="section-header text-center">
          <span className="editorial-label">OUR PROCESS</span>
          <h2 className="section-title font-serif">
            A clear path from brief to final frame.
          </h2>
          <p className="section-subtitle">
            A transparent, collaborative production methodology built to eliminate guesswork and deliver exceptional work on schedule.
          </p>
        </div>

        <div className="process-timeline-grid">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="process-step-card">
              <div className="step-card-header">
                <span className="step-badge font-mono">{step.step}</span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <span className="step-connector-line" aria-hidden="true" />
                )}
              </div>
              <h3 className="step-name font-serif">{step.name}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, Clock, ShieldCheck, Zap } from 'lucide-react';
import { STUDIO_PROCESS, CLIENT_FAQS } from '../data/studioData';

export default function Process() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span className="dot" />
            <span>Methodology</span>
          </div>
          <h2 className="font-display">Predictable precision from vision to deployment.</h2>
          <p>
            We eliminate ambiguity. Our 4-stage sprint framework ensures total creative rigor, clear milestone gates, and on-schedule execution.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="process-timeline-grid">
          {STUDIO_PROCESS.map((step, idx) => (
            <div key={idx} className="process-card glass-panel">
              <div className="process-card-top">
                <span className="process-step-num font-display">{step.step}</span>
                <span className="process-duration">
                  <Clock size={13} />
                  {step.duration}
                </span>
              </div>
              <h3 className="process-card-title font-display">{step.title}</h3>
              <p className="process-card-desc">{step.description}</p>
              <div className="process-progress-indicator" />
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="process-faq-wrapper">
          <div className="faq-intro">
            <h3 className="faq-heading font-display">Frequently Asked Inquiries</h3>
            <p className="faq-subtext">
              Common questions regarding our engagement models, turnaround timelines, and technology stack.
            </p>
          </div>

          <div className="faq-list">
            {CLIENT_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`faq-item glass-panel ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <ChevronDown size={18} className={`faq-arrow ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

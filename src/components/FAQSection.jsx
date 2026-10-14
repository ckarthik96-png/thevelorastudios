import React, { useState } from 'react';
import { FAQS_DATA } from '../data/studioData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-spacing faq-showcase-section" id="faqs">
      <div className="container">
        <div className="section-header text-center">
          <span className="editorial-label">CLARITY FIRST</span>
          <h2 className="section-title font-serif">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Everything you need to know about commissioning, producing, and delivering video projects with The Velora Studios.
          </p>
        </div>

        <div className="faq-accordion-container">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="faq-question-text font-serif">{faq.q}</span>
                  <div className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="faq-answer-panel"
                    role="region"
                  >
                    <p className="faq-answer-text">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

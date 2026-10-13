import React, { useEffect } from 'react';
import { X, Calendar, Building2, Tag, ArrowRight, Check } from 'lucide-react';

export default function Modal({ isOpen, onClose, type, data }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {/* Project Detail Modal */}
        {type === 'project' && data && (
          <div className="modal-project-content">
            <div className="modal-image-wrap">
              <img src={data.image} alt={data.title} className="modal-hero-image" />
              <div className="modal-category-badge">{data.category}</div>
            </div>

            <div className="modal-body">
              <div className="modal-meta-grid">
                <div>
                  <span className="modal-meta-label">Client Partner</span>
                  <span className="modal-meta-val">{data.client}</span>
                </div>
                <div>
                  <span className="modal-meta-label">Delivery Year</span>
                  <span className="modal-meta-val">{data.year}</span>
                </div>
                <div>
                  <span className="modal-meta-label">Documented Outcome</span>
                  <span className="modal-meta-val modal-highlight">{data.impact}</span>
                </div>
              </div>

              <h2 className="modal-title font-display">{data.title}</h2>
              <p className="modal-description">{data.description}</p>

              <div className="modal-tags-section">
                <span className="modal-meta-label">Scope &amp; Disciplines</span>
                <div className="modal-tags-list">
                  {data.tags.map((tag, idx) => (
                    <span key={idx} className="project-micro-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-disclaimer">
                <p>
                  <strong>Case Study Note:</strong> Detailed architectural wireframes, motion assets, and commercial conversion analytics are presented under NDA during discovery consultations.
                </p>
              </div>

              <div className="modal-cta-row">
                <a href="#contact" onClick={onClose} className="btn btn-primary">
                  <span>Inquire About Similar Project</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Policy Modal */}
        {type === 'privacy' && (
          <div className="modal-legal-content">
            <h2 className="modal-title font-display">Privacy Policy</h2>
            <p className="modal-legal-date">Last Updated: October 2026</p>

            <div className="legal-text-body">
              <section>
                <h3>1. Overview</h3>
                <p>
                  The Velora Studios ("we," "our," or "us") respects your privacy. This privacy notice explains how information is handled when you visit thevelorastudios.com or submit an inquiry through our communication channels.
                </p>
              </section>

              <section>
                <h3>2. Information We Collect</h3>
                <p>
                  We only collect information voluntarily provided by you, such as your name, corporate email address, project requirements, and budget expectations submitted via our inquiry form or direct electronic correspondence.
                </p>
              </section>

              <section>
                <h3>3. Use of Information</h3>
                <p>
                  Information is used exclusively for evaluating commission suitability, responding to business briefs, and executing client agreements. We never sell, rent, or trade your contact data to third-party marketing brokers.
                </p>
              </section>

              <section>
                <h3>4. Security & Edge Hosting</h3>
                <p>
                  Our web assets are deployed across Cloudflare’s global edge architecture, utilizing SSL/TLS end-to-end encryption, automated DDoS shielding, and strict DNSSEC verification.
                </p>
              </section>

              <section>
                <h3>5. Contact</h3>
                <p>
                  Questions regarding our data protection policies may be directed to <code>privacy@thevelorastudios.com</code>.
                </p>
              </section>
            </div>
          </div>
        )}

        {/* Terms of Engagement Modal */}
        {type === 'terms' && (
          <div className="modal-legal-content">
            <h2 className="modal-title font-display">Terms of Engagement</h2>
            <p className="modal-legal-date">Last Updated: October 2026</p>

            <div className="legal-text-body">
              <section>
                <h3>1. Scope of Services</h3>
                <p>
                  The Velora Studios delivers bespoke creative direction, brand identity architecture, and digital engineering services. All commissions are governed by dedicated Master Services Agreements (MSA) and formal Statements of Work (SOW).
                </p>
              </section>

              <section>
                <h3>2. Intellectual Property</h3>
                <p>
                  Upon final payment of commission fees, intellectual property transfers to the client as specified in each tailored SOW. Proprietary reusable code libraries, fonts, and foundational tooling remain under licensed permissions.
                </p>
              </section>

              <section>
                <h3>3. Confidentiality</h3>
                <p>
                  Both parties maintain rigorous confidentiality regarding trade secrets, unreleased products, strategic documentation, and proprietary commercial information.
                </p>
              </section>

              <section>
                <h3>4. Placeholders & Representations</h3>
                <p>
                  Any placeholder content indicated across draft environments represents non-binding editorial examples subject to final client brand ratification.
                </p>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

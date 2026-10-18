import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import SEO from '../components/SEO';

export default function TermsPage() {
  return (
    <div className="page-wrapper legal-page">
      <SEO />

      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">LEGAL &amp; COMPLIANCE</span>
          <h1 className="page-hero-title font-serif">Website Terms of Use</h1>
          <p className="page-hero-sub">
            Review the applicable terms for using The Velora Studios website and its services.
          </p>
        </div>
      </section>

      <section className="section-spacing legal-content-section">
        <div className="container legal-container">
          <div className="legal-prose">
            <p className="policy-meta-date font-mono">Effective Date: October 2026</p>

            <h2>1. Website Use</h2>
            <p>
              By accessing thevelorastudios.com, you agree to browse responsibly and comply with applicable laws. All content, editorial compositions, case study designs, and text across this website are property of {STUDIO_CONFIG.name} and protected by copyright.
            </p>

            <h2>2. Studio Services &amp; Proposals</h2>
            <p>
              Information on this website does not constitute a binding legal contract or formal guarantee of project engagement. Specific deliverables, pricing, intellectual property assignment, and project schedules are formalized through custom Statements of Work (SOW) executed between {STUDIO_CONFIG.name} and the client.
            </p>

            <h2>3. Concept Case Studies Disclosure</h2>
            <p>
              Where indicated, certain design artifacts, concept systems, or independent explorations are presented to demonstrate creative capabilities and art direction standards. They do not imply formal endorsement by or affiliation with third-party trademarks unless explicitly cited.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              While we strive to ensure continuous uptime and accurate information, this website and its content are provided on an "as is" basis without warranty of any kind.
            </p>

            <h2>5. Intellectual Property, Client Footage &amp; Commercial Rights</h2>
            <p>
              We believe in transparent, unencumbered rights for the brands we partner with:
            </p>
            <ul>
              <li><strong>Commercial Master Ownership:</strong> Upon settlement of the agreed project fees, all delivered master videos, commercial cutdowns, animations, and sound compositions become the exclusive intellectual property of the client with full global broadcast and digital exhibition rights.</li>
              <li><strong>Confidential Client Footage:</strong> Raw footage, unedited b-roll, executive likenesses, and voice recordings provided by clients remain the exclusive property of the client. {STUDIO_CONFIG.name} preserves all client media on access-restricted encrypted storage.</li>
              <li><strong>Strict AI Media Governance:</strong> Client media, product CAD data, and brand assets are never shared with public generative AI pools or used to train third-party foundation models without prior written consent.</li>
              <li><strong>Portfolio Exhibition:</strong> Unless restricted by an explicit non-disclosure agreement (NDA) or client embargo, {STUDIO_CONFIG.name} reserves the standard industry right to display delivered work in our studio portfolio, showreel, and case studies.</li>
            </ul>

            <h2>6. Governing Jurisdiction &amp; Legal Inquiries</h2>
            <p>
              These terms are governed by the laws of India. For commercial contracts, mutual NDA execution, or compliance inquiries, please contact our studio legal desk at <code>{STUDIO_CONFIG.displayEmail}</code>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

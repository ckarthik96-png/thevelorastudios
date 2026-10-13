import React from 'react';
import { Link } from 'react-router-dom';
import { STUDIO_CONFIG } from '../data/studioData';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <div className="page-wrapper legal-page">
      <SEO />

      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">LEGAL &amp; COMPLIANCE</span>
          <h1 className="page-hero-title font-serif">Privacy Policy</h1>
          <p className="page-hero-sub">
            Learn how The Velora Studios collects, uses and protects personal information through its website and enquiry services.
          </p>
        </div>
      </section>

      <section className="section-spacing legal-content-section">
        <div className="container legal-container">
          <div className="legal-prose">
            <p className="policy-meta-date font-mono">Effective Date: October 2026</p>

            <h2>1. Information We Collect</h2>
            <p>
              When you submit an enquiry via our website or email us, we collect the details you voluntarily provide: your name, email address, company name, website URL, project scope, budget range, and project description. We do not collect personal information automatically beyond standard, anonymized server logs required for network security and Cloudflare edge delivery.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use submitted contact details solely to evaluate project suitability, communicate regarding your enquiry, and provide creative proposals. We never sell, lease, or monetize your contact details to third-party advertisers or data brokers.
            </p>

            <h2>3. Form Submissions &amp; Third-Party Services</h2>
            <p>
              Our website is hosted on Cloudflare Pages. Enquiries submitted through the website are transmitted securely using industry-standard TLS encryption. If you choose to contact us via WhatsApp or third-party booking tools, your interactions are also governed by the respective privacy policies of those platforms.
            </p>

            <h2>4. Cookies &amp; Tracking</h2>
            <p>
              This website does not use intrusive marketing trackers, advertising cookies, or third-party cross-site profiling scripts. Any cookies utilized are strictly functional and necessary for secure edge content delivery.
            </p>

            <h2>5. Contacting the Studio</h2>
            <p>
              If you have questions regarding this Privacy Policy or wish to request the deletion of your enquiry data, please reach out directly to <code>{STUDIO_CONFIG.displayEmail}</code>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

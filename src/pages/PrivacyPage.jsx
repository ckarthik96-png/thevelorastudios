import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <div className="page-wrapper legal-page">
      <SEO
        customTitle="Privacy Policy | The Velora Studios"
        customDescription="Comprehensive privacy, confidentiality, and data protection policy for The Velora Studios, including the handling of client video footage, voice recordings, and AI production assets."
      />

      <section className="page-hero-section">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/" className="back-link">
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
          </div>
          <span className="editorial-label">LEGAL &amp; COMPLIANCE</span>
          <h1 className="page-hero-title font-serif">Privacy Policy &amp; Media Protection</h1>
          <p className="page-hero-sub">
            Learn how The Velora Studios protects your personal details, intellectual property, raw customer footage, voice recordings, and AI-generated assets.
          </p>
        </div>
      </section>

      <section className="section-spacing legal-content-section">
        <div className="container legal-container">
          <div className="legal-prose">
            <p className="policy-meta-date font-mono">Effective Date: October 2026 • Version 2.2</p>

            <h2>1. Information We Collect</h2>
            <p>
              When you submit a project enquiry or communicate with {STUDIO_CONFIG.name}, we collect the details you voluntarily provide: your name, business email address, phone number, company name, project brief, timeline milestones, and reference links. Standard, anonymized server telemetry is collected at our Cloudflare edge network solely to maintain HTTPS security, DDOS protection, and high-speed asset delivery.
            </p>

            <h2>2. Purpose &amp; Use of Contact Details</h2>
            <p>
              We use your submitted information exclusively to evaluate creative feasibility, prepare Statements of Work (SOW), and execute contracted video deliverables. <strong>We do not sell, rent, monetize, or disclose your contact details or project briefs to third-party data brokers or marketing lists.</strong>
            </p>

            <h2>3. Client Footage, Likeness &amp; Voice Recordings</h2>
            <p>
              As a video production studio, clients frequently entrust us with raw footage, b-roll, employee interviews, voiceover recordings, and corporate executive likenesses. We adhere to the following strict media governance standards:
            </p>
            <ul>
              <li><strong>Confidential Storage:</strong> All client footage and media files are stored on secure, access-restricted encrypted drives and private cloud workspaces.</li>
              <li><strong>Strict Purpose Limitation:</strong> Client footage, recorded voices, and talent likenesses are used solely for the agreed deliverables specified in your Statement of Work.</li>
              <li><strong>No Public AI Training:</strong> Client-provided footage, portraits, and audio recordings are <strong>never</strong> submitted to public artificial intelligence models or used to train external foundation models without explicit, written client consent.</li>
              <li><strong>Talent &amp; Voice Clearance:</strong> All actors, presenters, and voiceover artists recorded on our productions execute standard talent release waivers ensuring compliant broadcast and digital advertising rights.</li>
            </ul>

            <h2>4. AI-Generated Assets &amp; Intellectual Property Ownership</h2>
            <p>
              For projects incorporating AI video generation, synthetic visual effects, or neural world-building:
            </p>
            <ul>
              <li>We utilize commercially licensed enterprise AI production platforms that guarantee commercial indemnity and full commercial exploitation rights.</li>
              <li>Upon full financial settlement of the agreed project invoice, <strong>all final delivered video masters, composite animations, and rendered assets belong entirely to the client</strong>.</li>
              <li>Any custom prompts, private fine-tuned weights (LoRAs), or proprietary product workflows created specifically for a client remain private and confidential to that client's engagement.</li>
            </ul>

            <h2>5. Form Submissions &amp; Security Measures</h2>
            <p>
              Website enquiries are transmitted over secure TLS 1.3 encryption. We implement automated anti-spam protections (including honeypot verification) to prevent automated exploitation without compromising legitimate visitor privacy. Direct communications via WhatsApp and telephone are governed by end-to-end communication safeguards.
            </p>

            <h2>6. Data Retention &amp; Erasure Requests</h2>
            <p>
              Project media is retained during active production and archived for a minimum agreed warranty period to allow for future revisions. You may request the verification, export, or permanent deletion of your contact records or archived project files at any time by contacting our data controller at <code>{STUDIO_CONFIG.displayEmail}</code>.
            </p>

            <h2>7. Contacting the Studio</h2>
            <p>
              For legal inquiries, NDA execution requests, or questions regarding this Privacy Policy, please write directly to:<br />
              <strong>{STUDIO_CONFIG.name}</strong><br />
              Email: <code>{STUDIO_CONFIG.displayEmail}</code><br />
              Phone / WhatsApp: <code>{STUDIO_CONFIG.displayPhone}</code><br />
              Bangalore, India • Serving clients in Dubai, Saudi Arabia, Canada, Bangalore, and Hyderabad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

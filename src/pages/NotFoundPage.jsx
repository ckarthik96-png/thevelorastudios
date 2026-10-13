import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <div className="page-wrapper not-found-page">
      <SEO customTitle="Page Not Found | The Velora Studios" />

      <section className="section-spacing text-center" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <span className="editorial-label">404 ERROR</span>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '16px 0' }}>
            Page Not Found
          </h1>
          <p style={{ maxWidth: '520px', margin: '0 auto 32px auto' }}>
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={15} />
              <span>Return to Homepage</span>
            </Link>
            <Link to="/services" className="btn btn-secondary">
              <span>Explore Services</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

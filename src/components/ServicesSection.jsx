import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/studioData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ hideHeader = false }) {
  return (
    <section className="section-spacing services-showcase-section" id="services">
      <div className="container">
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header text-center">
            <span className="editorial-label">OUR SERVICES</span>
            <h2 className="section-title font-serif">
              Everything your story needs to move.
            </h2>
            <p className="section-subtitle">
              From everyday content to ambitious films, we create video across formats, platforms, and production styles.
            </p>
          </div>
        )}

        {/* 8 Services Grid */}
        <div className="services-eight-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-editorial-card">
              <div className="service-card-top">
                <span className="service-number font-mono">{service.number}</span>
                <span className="service-category-tag font-mono">CAPABILITY</span>
              </div>

              <h3 className="service-card-title font-serif">
                <Link to={`/services/${service.id}`} className="service-title-link">
                  {service.title}
                </Link>
              </h3>
              <p className="service-card-description">{service.description}</p>

              <div className="service-includes-block">
                <span className="includes-label font-mono">Includes:</span>
                <div className="includes-tags-wrap">
                  {service.includes.map((inc, i) => (
                    <span key={i} className="include-pill-tag">
                      {inc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="service-card-footer">
                <Link to={`/services/${service.id}`} className="service-action-link font-sans">
                  <span>Explore Service</span>
                  <ArrowUpRight size={14} />
                </Link>
                <Link to="/contact" className="service-enquire-link font-mono">
                  <span>Enquire</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

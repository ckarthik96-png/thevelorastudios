import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HOMEPAGE_SERVICES } from '../data/studioData';

export default function ServicesSection() {
  return (
    <section className="services-editorial-dark-section" id="services" aria-labelledby="services-headline">
      <div className="container">
        {/* Section Header */}
        <div className="services-editorial-header">
          <span className="editorial-label editorial-label-dark">02 / WHAT WE DO</span>
          <h2 id="services-headline" className="services-editorial-headline font-serif">
            From a bold idea to a distinctive brand.
          </h2>
        </div>

        {/* Five Full-Width Horizontal Service Rows */}
        <div className="services-rows-container" role="list">
          {HOMEPAGE_SERVICES.map((service) => (
            <div key={service.id} className="service-row-item" role="listitem">
              <Link to={service.link} className="service-row-link" aria-label={`Learn more about ${service.title}`}>
                {/* Column 1: Number (~7%) */}
                <div className="service-col-num font-mono">
                  <span>{service.number}</span>
                </div>

                {/* Column 2: Service Title (~60%) */}
                <div className="service-col-title">
                  <h3 className="service-title-text font-serif">{service.title}</h3>
                </div>

                {/* Column 3: Description (~33%) + Arrow Indicator */}
                <div className="service-col-desc">
                  <p className="service-desc-text">{service.description}</p>
                  <span className="service-arrow-indicator" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Section Footer / Subtitle Anchor */}
        <div className="services-editorial-footer">
          <span className="services-discipline-tagline">STRATEGY · DESIGN · DIGITAL</span>
          <Link to="/services" className="btn btn-dark-outline services-explore-link">
            <span>Explore All Capabilities</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

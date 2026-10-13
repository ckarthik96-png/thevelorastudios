import React, { useState } from 'react';
import { ExternalLink, Eye, Tag, Calendar, Building2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/studioData';

export default function Portfolio({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Branding', 'Digital Experience', 'Creative Direction'];

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="section-padding portfolio-section" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span className="dot" />
            <span>Selected Works</span>
          </div>
          <h2 className="font-display">Archived commissions &amp; digital milestones.</h2>
          <p>
            A curated showcase of our recent engagements in brand architecture, bespoke digital interfaces, and spatial creative direction.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="portfolio-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-pill-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="portfolio-card glass-panel">
              {/* Media Thumbnail Container */}
              <div className="project-media-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <button
                    onClick={() => onOpenProject(project)}
                    className="btn btn-primary btn-sm project-view-btn"
                    aria-label={`View details for ${project.title}`}
                  >
                    <Eye size={16} />
                    <span>View Case Study</span>
                  </button>
                </div>
                <div className="project-year-badge">{project.year}</div>
              </div>

              {/* Card Meta Content */}
              <div className="project-card-content">
                <div className="project-meta-row">
                  <span className="project-cat-tag">{project.category}</span>
                  <span className="project-client-tag">
                    <Building2 size={13} />
                    {project.client}
                  </span>
                </div>

                <h3 className="project-title font-display">
                  <button onClick={() => onOpenProject(project)} className="project-title-btn">
                    {project.title}
                  </button>
                </h3>

                <p className="project-desc">{project.description}</p>

                {/* Impact Metric Callout */}
                <div className="project-impact-box">
                  <span className="impact-label">Documented Outcome:</span>
                  <span className="impact-text">{project.impact}</span>
                </div>

                {/* Tags */}
                <div className="project-tags-row">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-micro-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Portfolio Verification Callout */}
        <div className="portfolio-footer-callout">
          <p className="callout-text">
            <span>Confidentiality Notice:</span> Select enterprise work, pre-launch stealth brand systems, and proprietary fintech IP remain under strict non-disclosure. 
            Private interactive walkthroughs are available upon request during discovery consultations.
          </p>
          <a href="#contact" className="btn btn-outline-gold">
            <span>Request Private Portfolio Deck</span>
          </a>
        </div>
      </div>
    </section>
  );
}

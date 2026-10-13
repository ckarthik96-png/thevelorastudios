import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import SEO from '../components/SEO';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Brand Strategy & Packaging', 'Website Design & UI Architecture', 'Visual Identity & Editorial Web'];

  const filteredProjects = activeFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === activeFilter);

  return (
    <div className="page-wrapper work-page">
      <SEO />

      {/* Hero Header */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">CURATED WORK</span>
          <h1 className="page-hero-title font-serif">
            Thoughtful ideas. Tangible creative work.
          </h1>
          <p className="page-hero-sub">
            Every project begins with a different challenge. Explore the thinking, design decisions and creative details behind selected work from The Velora Studios.
          </p>

          {/* Honest Notice */}
          <div className="concept-transparency-pill" style={{ marginTop: '28px' }}>
            <Sparkles size={14} />
            <span>
              <strong>Concept Projects &amp; Independent Explorations:</strong> These case studies illustrate the studio's aesthetic standard, art direction, and design capabilities. Client-commissioned work will be published upon commercial disclosure authorization.
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section-spacing work-grid-section">
        <div className="container">
          {/* Filter Pills */}
          <div className="work-filter-pills">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="work-gallery-grid">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="work-card-large">
                <Link to={`/work/${project.slug}`} className="work-card-image-link">
                  <div className="work-card-image-box">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <span className="work-badge-tag">{project.statusBadge}</span>
                  </div>
                </Link>

                <div className="work-card-info">
                  <div className="work-meta-row">
                    <span className="work-cat font-sans">{project.category}</span>
                    <span className="work-year font-mono">{project.year}</span>
                  </div>

                  <h2 className="work-card-title font-serif">
                    <Link to={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="work-card-summary">{project.summary}</p>

                  <div className="work-deliverables-pills">
                    {project.deliverables.slice(0, 3).map((d, i) => (
                      <span key={i} className="micro-deliverable-tag">{d}</span>
                    ))}
                  </div>

                  <div className="work-read-cta">
                    <Link to={`/work/${project.slug}`} className="view-case-study-link font-serif">
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

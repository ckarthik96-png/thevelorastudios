import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Building2, Calendar } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';
import SEO from '../components/SEO';

export default function ProjectDetailPage() {
  const { projectSlug } = useParams();
  const project = CASE_STUDIES.find((p) => p.slug === projectSlug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const relatedProjects = CASE_STUDIES.filter((p) => p.slug !== projectSlug).slice(0, 2);

  return (
    <div className="page-wrapper project-detail-page">
      <SEO
        customTitle={`${project.title} | Case Study | The Velora Studios`}
        customDescription={project.summary}
      />

      {/* Top Breadcrumb */}
      <section className="project-detail-hero">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link to="/work" className="back-link">
              <ArrowLeft size={14} />
              <span>Back to Selected Work</span>
            </Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{project.title}</span>
          </div>

          <div className="project-hero-header">
            <span className="editorial-label">{project.category}</span>
            <h1 className="project-hero-title font-serif">{project.title}</h1>
            <p className="project-hero-lead">{project.summary}</p>

            <div className="project-meta-grid-bar">
              <div className="meta-bar-item">
                <span className="meta-bar-label">Client Exploration</span>
                <span className="meta-bar-val">{project.client}</span>
              </div>
              <div className="meta-bar-item">
                <span className="meta-bar-label">Industry</span>
                <span className="meta-bar-val">{project.industry}</span>
              </div>
              <div className="meta-bar-item">
                <span className="meta-bar-label">Timeline Year</span>
                <span className="meta-bar-val">{project.year}</span>
              </div>
              <div className="meta-bar-item">
                <span className="meta-bar-label">Exploration Status</span>
                <span className="meta-bar-val highlight-val">{project.statusBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Media Showcase */}
      <section className="project-media-showcase-section">
        <div className="container">
          <div className="project-featured-image-box">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </section>

      {/* Case Study Deep Dive Body */}
      <section className="section-spacing project-case-study-body">
        <div className="container">
          <div className="case-study-columns-layout">
            {/* Left Narrative */}
            <div className="case-study-narrative">
              {/* Challenge */}
              <div className="narrative-block">
                <span className="editorial-label">THE CHALLENGE</span>
                <h2 className="narrative-heading font-serif">Overcoming fragmented perceptions</h2>
                <p className="narrative-text">{project.challenge}</p>
              </div>

              {/* Objectives */}
              <div className="narrative-block">
                <span className="editorial-label">PROJECT OBJECTIVES</span>
                <h2 className="narrative-heading font-serif">What we set out to accomplish</h2>
                <ul className="narrative-objectives-list">
                  {project.objectives.map((obj, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="objective-icon" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Creative Strategy */}
              <div className="narrative-block">
                <span className="editorial-label">CREATIVE STRATEGY</span>
                <h2 className="narrative-heading font-serif">The design direction &amp; thinking</h2>
                <p className="narrative-text">{project.strategy}</p>
              </div>
            </div>

            {/* Right Deliverables Sidebar */}
            <aside className="case-study-sidebar">
              <div className="sidebar-sticky-box">
                <span className="editorial-label">FINAL DELIVERABLES</span>
                <h3 className="sidebar-deliverables-title font-serif">Commission Package</h3>
                <ul className="sidebar-deliverables-list">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="sidebar-deliverable-item">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="sidebar-cta-group">
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Inquire About Similar Project</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-spacing related-projects-section">
        <div className="container">
          <div className="related-header">
            <span className="editorial-label">RELATED WORK</span>
            <h2 className="related-headline font-serif">Explore more explorations</h2>
          </div>

          <div className="home-work-grid">
            {relatedProjects.map((rel) => (
              <article key={rel.slug} className="editorial-project-card">
                <Link to={`/work/${rel.slug}`} className="project-image-link">
                  <div className="project-image-wrap">
                    <img src={rel.image} alt={rel.title} loading="lazy" />
                  </div>
                </Link>
                <div className="project-card-meta">
                  <span className="project-category-name">{rel.category}</span>
                  <h3 className="project-card-heading font-serif">
                    <Link to={`/work/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="project-card-summary">{rel.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

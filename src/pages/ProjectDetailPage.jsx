import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS, CASE_STUDIES } from '../data/studioData';
import SEO from '../components/SEO';

export default function ProjectDetailPage() {
  const { projectSlug } = useParams();

  // 1. Look up in PORTFOLIO_PROJECTS (video productions)
  const portfolioItem = PORTFOLIO_PROJECTS.find((p) => p.id === projectSlug);

  // 2. Fallback to CASE_STUDIES
  const caseStudyItem = CASE_STUDIES.find((p) => p.slug === projectSlug);

  if (!portfolioItem && !caseStudyItem) {
    return <Navigate to="/work" replace />;
  }

  const isVideo = Boolean(portfolioItem);
  const project = portfolioItem || caseStudyItem;

  const relatedItems = isVideo
    ? PORTFOLIO_PROJECTS.filter((p) => p.id !== projectSlug).slice(0, 3)
    : CASE_STUDIES.filter((p) => p.slug !== projectSlug).slice(0, 2);

  const pageTitle = isVideo
    ? `${project.title} — ${project.category} | The Velora Studios`
    : `${project.title} | Case Study | The Velora Studios`;

  const metaDescription = isVideo ? project.description : project.summary;

  return (
    <div className="page-wrapper project-detail-page">
      <SEO customTitle={pageTitle} customDescription={metaDescription} />

      {/* Top Breadcrumb & Hero */}
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
            <p className="project-hero-lead">{isVideo ? project.description : project.summary}</p>

            <div className="project-meta-grid-bar">
              <div className="meta-bar-item">
                <span className="meta-bar-label">Client Partner</span>
                <span className="meta-bar-val">{project.client}</span>
              </div>
              <div className="meta-bar-item">
                <span className="meta-bar-label">{isVideo ? 'Runtime' : 'Industry'}</span>
                <span className="meta-bar-val">{isVideo ? project.duration : project.industry}</span>
              </div>
              <div className="meta-bar-item">
                <span className="meta-bar-label">Production Year</span>
                <span className="meta-bar-val">{project.year}</span>
              </div>
              <div className="meta-bar-item">
                <span className="meta-bar-label">{isVideo ? 'Production Market' : 'Exploration Status'}</span>
                <span className="meta-bar-val highlight-val">
                  {isVideo ? project.location : project.statusBadge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Showcase: Full HD Video Player or Featured Image */}
      <section className="project-media-showcase-section">
        <div className="container">
          {isVideo && project.videoUrl ? (
            <div className="project-featured-video-box">
              <video
                key={project.id}
                src={project.videoUrl}
                poster={project.image}
                controls
                playsInline
                preload="metadata"
                className="project-hero-video-element"
              >
                Your browser does not support HTML5 video streaming.
              </video>
            </div>
          ) : (
            <div className="project-featured-image-box">
              <img src={project.image} alt={project.title} />
            </div>
          )}
        </div>
      </section>

      {/* Narrative & Deep Dive Body */}
      <section className="section-spacing project-case-study-body">
        <div className="container">
          <div className="case-study-columns-layout">
            {/* Left Narrative */}
            <div className="case-study-narrative">
              {isVideo ? (
                <>
                  <div className="narrative-block">
                    <span className="editorial-label">THE CREATIVE BRIEF</span>
                    <h2 className="narrative-heading font-serif">Storytelling that connects with the audience</h2>
                    <p className="narrative-text">{project.description}</p>
                  </div>

                  <div className="narrative-block">
                    <span className="editorial-label">PRODUCTION CAPABILITIES</span>
                    <h2 className="narrative-heading font-serif">Execution &amp; craft disciplines</h2>
                    <ul className="narrative-objectives-list">
                      {project.scope.map((scopeItem, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="objective-icon" />
                          <span>{scopeItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="narrative-block">
                    <span className="editorial-label">AUDIENCE REACH</span>
                    <h2 className="narrative-heading font-serif">Platform distribution</h2>
                    <p className="narrative-text">
                      Tailored for high-impact viewing across 16:9 cinematic screens, digital ads, and 9:16 mobile feeds. Serving audiences across {project.location}.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="narrative-block">
                    <span className="editorial-label">THE CHALLENGE</span>
                    <h2 className="narrative-heading font-serif">Overcoming fragmented perceptions</h2>
                    <p className="narrative-text">{project.challenge}</p>
                  </div>

                  <div className="narrative-block">
                    <span className="editorial-label">PROJECT OBJECTIVES</span>
                    <h2 className="narrative-heading font-serif">What we set out to accomplish</h2>
                    <ul className="narrative-objectives-list">
                      {project.objectives?.map((obj, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="objective-icon" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="narrative-block">
                    <span className="editorial-label">CREATIVE STRATEGY</span>
                    <h2 className="narrative-heading font-serif">The design direction &amp; thinking</h2>
                    <p className="narrative-text">{project.strategy}</p>
                  </div>
                </>
              )}
            </div>

            {/* Right Deliverables Sidebar */}
            <aside className="case-study-sidebar">
              <div className="sidebar-sticky-box">
                <span className="editorial-label">
                  {isVideo ? 'PRODUCTION SCOPE' : 'FINAL DELIVERABLES'}
                </span>
                <h3 className="sidebar-deliverables-title font-serif">
                  {isVideo ? 'Production Scope' : 'Commission Package'}
                </h3>
                <ul className="sidebar-deliverables-list">
                  {(isVideo ? project.scope : project.deliverables).map((item, idx) => (
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
            <span className="editorial-label">MORE WORK</span>
            <h2 className="related-headline font-serif">Explore more productions</h2>
          </div>

          <div className="home-work-grid">
            {relatedItems.map((rel) => {
              const relSlug = isVideo ? rel.id : rel.slug;
              const relSummary = isVideo ? rel.description : rel.summary;
              return (
                <article key={relSlug} className="editorial-project-card">
                  <Link to={`/work/${relSlug}`} className="project-image-link">
                    <div className="project-image-wrap">
                      <img src={rel.image} alt={rel.title} loading="lazy" />
                    </div>
                  </Link>
                  <div className="project-card-meta">
                    <span className="project-category-name">{rel.category}</span>
                    <h3 className="project-card-heading font-serif">
                      <Link to={`/work/${relSlug}`}>{rel.title}</Link>
                    </h3>
                    <p className="project-card-summary">{relSummary}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

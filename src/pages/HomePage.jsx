import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import { CASE_STUDIES, STUDIO_PROCESS_STEPS } from '../data/studioData';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div className="page-wrapper home-page">
      <SEO />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="hero-editorial-section">
        <div className="container hero-editorial-container">
          <div className="hero-editorial-badge">
            <span className="editorial-label">BRANDING · DIGITAL · CREATIVE</span>
          </div>

          <h1 className="hero-editorial-title font-serif">
            Make your next idea impossible to ignore.
          </h1>

          <p className="hero-editorial-lead">
            We help ambitious businesses turn ideas into distinctive brands, meaningful digital experiences, and creative work that stands apart.
          </p>

          <div className="hero-editorial-actions">
            <Link to="/contact" className="btn btn-primary">
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link to="/work" className="btn btn-secondary">
              <span>Explore Our Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 01 / OUR PHILOSOPHY
          ========================================================================= */}
      <section className="section-spacing philosophy-section">
        <div className="container">
          <div className="philosophy-layout-grid">
            <div className="philosophy-label-col">
              <span className="editorial-label">01 / OUR PHILOSOPHY</span>
            </div>
            <div className="philosophy-content-col">
              <h2 className="philosophy-headline font-serif">
                Great brands are built with intention.
              </h2>
              <p className="philosophy-body-text">
                Your brand is more than a logo. It's the impression you leave, the experience you create, and the reason people remember you. We bring strategy, design and creativity together to make every interaction count.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 / WHAT WE DO (THE SIGNATURE EDITORIAL DARK SERVICES SECTION)
          ========================================================================= */}
      <ServicesSection />

      {/* =========================================================================
          SECTION 03 / WHO WE WORK WITH
          ========================================================================= */}
      <section className="section-spacing who-we-work-with-section">
        <div className="container">
          <div className="audience-header">
            <span className="editorial-label">03 / WHO WE WORK WITH</span>
            <h2 className="audience-headline font-serif">Built for what's next.</h2>
            <p className="audience-lead">
              For startups shaping their first impression and established businesses ready for their next chapter, we create design solutions aligned with your goals, audience and ambitions.
            </p>
          </div>

          <div className="audience-cards-grid">
            {/* Startup Card */}
            <div className="audience-editorial-card">
              <span className="audience-card-tag">For Startups</span>
              <h3 className="audience-card-title font-serif">
                Build a strong foundation from day one.
              </h3>
              <p className="audience-card-text">
                When launching a venture, early perceptions matter. We help founders clarify their positioning, establish a cohesive visual identity, and build a conversion-focused website that establishes immediate authority.
              </p>
              <ul className="audience-checklist">
                <li><span>Strategic brand positioning</span></li>
                <li><span>Foundational visual identity</span></li>
                <li><span>High-impact launch website</span></li>
              </ul>
              <Link to="/contact" className="audience-card-link">
                <span>Start as a Startup</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Established Business Card */}
            <div className="audience-editorial-card">
              <span className="audience-card-tag">For Established Businesses</span>
              <h3 className="audience-card-title font-serif">
                Evolve your brand with purpose.
              </h3>
              <p className="audience-card-text">
                For established firms that have outgrown their original branding or whose websites no longer represent their capability, we lead strategic refreshes that protect existing brand equity while modernizing every touchpoint.
              </p>
              <ul className="audience-checklist">
                <li><span>Comprehensive identity refresh</span></li>
                <li><span>Modern web re-architecture</span></li>
                <li><span>Design systems &amp; marketing assets</span></li>
              </ul>
              <Link to="/contact" className="audience-card-link">
                <span>Evolve Your Brand</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 / SELECTED WORK
          ========================================================================= */}
      <section className="section-spacing selected-work-section">
        <div className="container">
          <div className="work-header-row">
            <div>
              <span className="editorial-label">04 / SELECTED WORK</span>
              <h2 className="work-section-headline font-serif">Ideas, thoughtfully realised.</h2>
              <p className="work-section-sub">
                Explore the thinking, design and details behind our creative work.
              </p>
            </div>
            <Link to="/work" className="btn btn-secondary work-view-all-btn">
              <span>View All Projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Transparent Notice */}
          <div className="concept-transparency-pill">
            <Sparkles size={14} />
            <span>Concept Projects &amp; Independent Explorations — demonstrating our studio design capabilities before client commission release.</span>
          </div>

          {/* Project Cards Grid */}
          <div className="home-work-grid">
            {CASE_STUDIES.slice(0, 3).map((project) => (
              <article key={project.slug} className="editorial-project-card">
                <Link to={`/work/${project.slug}`} className="project-image-link" aria-label={`View ${project.title}`}>
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <span className="project-status-tag">{project.statusBadge}</span>
                  </div>
                </Link>
                <div className="project-card-meta">
                  <div className="project-meta-top">
                    <span className="project-category-name">{project.category}</span>
                    <span className="project-year-num">{project.year}</span>
                  </div>
                  <h3 className="project-card-heading font-serif">
                    <Link to={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="project-card-summary">{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 / OUR PROCESS
          ========================================================================= */}
      <section className="section-spacing home-process-section">
        <div className="container">
          <div className="process-header">
            <span className="editorial-label">05 / OUR PROCESS</span>
            <h2 className="process-headline font-serif">Good work begins with good questions.</h2>
          </div>

          <div className="process-steps-row">
            {STUDIO_PROCESS_STEPS.map((step) => (
              <div key={step.step} className="process-step-block">
                <span className="step-number-tag font-mono">{step.step}</span>
                <h3 className="step-name-title font-serif">{step.name}</h3>
                <h4 className="step-subtitle font-sans">{step.title}</h4>
                <p className="step-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

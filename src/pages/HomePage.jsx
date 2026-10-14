import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Play, Film, Sparkles, CheckCircle2 } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import { CASE_STUDIES, STUDIO_PROCESS_STEPS } from '../data/studioData';
import SEO from '../components/SEO';
import BrandLogo from '../components/BrandLogo';

export default function HomePage() {
  return (
    <div className="page-wrapper home-page">
      <SEO />

      {/* =========================================================================
          REFERENCE A — DARK HERO SECTION
          Centered headline, muted gold gradient on "iconic brands", service pill
          ========================================================================= */}
      <section className="hero-dark-showcase-section" id="hero">
        <div className="hero-ambient-glow" />
        <div className="container hero-dark-container">
          {/* Studio Brand Emblem / Crest */}
          <div className="hero-brand-crest-wrap">
            <BrandLogo theme="dark" size="lg" />
          </div>

          {/* Service Pill Badge */}
          <div className="hero-pill-badge-wrap">
            <div className="hero-pill-badge">
              <span className="pill-dot" />
              <span>BRAND STRATEGY • UI/UX ARCHITECTURE • CREATIVE DIRECTION</span>
            </div>
          </div>

          {/* Main Headline with Muted Gold Gradient */}
          <h1 className="hero-dark-headline font-sans">
            Crafting <span className="gold-gradient-text">iconic brands</span> &amp;
            <br className="hero-desktop-break" />
            {' '}high-impact digital experiences.
          </h1>

          {/* Supporting Paragraph */}
          <p className="hero-dark-paragraph">
            The Velora Studios is an independent creative and digital studio helping ambitious startups and established businesses build distinctive brands, engaging digital experiences and compelling visual stories.
          </p>

          {/* Dual Call to Actions */}
          <div className="hero-dark-actions">
            <Link to="/contact" className="btn btn-primary hero-btn-main">
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link to="/work" className="btn btn-dark-outline hero-btn-sub">
              <span>Explore Our Work</span>
            </Link>
          </div>

          {/* Studio Capability Sub-bar */}
          <div className="hero-capability-subbar">
            <span>INDEPENDENT CREATIVE, DIGITAL &amp; VIDEO STUDIO</span>
            <span className="subbar-bullet">•</span>
            <span>WORLDWIDE CLIENT COLLABORATIONS</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          REFERENCE B — EDITORIAL VIDEO & CREATIVE SECTION ("Films with feeling.")
          Contrasting Pale Cream Background (#F5F0D0), Bold Sans + Expressive Italic Serif
          ========================================================================= */}
      <section className="editorial-video-cream-section" id="video-creative">
        <div className="container">
          <div className="editorial-video-layout">
            {/* Top Text Content */}
            <div className="video-text-content">
              <span className="video-eyebrow-label">
                INDEPENDENT VIDEO &amp; CREATIVE STUDIO
              </span>

              <h2 className="films-with-feeling-headline">
                <span className="films-bold font-sans">Films with</span>
                <br />
                <span className="feeling-serif italic-serif-feeling">feeling.</span>
              </h2>

              <p className="video-supporting-copy">
                We turn your ideas into stories people remember. Video, motion and AI — brought together with craft.
              </p>

              <div className="video-cta-wrap">
                <Link to="/services/creative-design" className="btn btn-primary video-primary-btn">
                  <span>Explore Our Creative Services</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Art-Directed Cinematic Media Showcase */}
            <div className="cinematic-showcase-card">
              <div className="cinematic-frame-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1400&q=80"
                  alt="Cinematic production studio still"
                  className="cinematic-hero-image"
                  loading="lazy"
                />
                
                {/* Cinema Slate Header Overlay */}
                <div className="cinema-slate-top">
                  <div className="slate-pill">
                    <img src="/favicon.png" alt="" className="slate-pill-emblem" />
                    <span className="rec-dot" />
                    <span>THE VELORA STUDIOS SHOWREEL</span>
                  </div>
                  <span className="slate-specs">4K UHD • 24 FPS</span>
                </div>

                {/* Central Play Badge */}
                <div className="cinema-center-action">
                  <Link
                    to="/services/creative-design"
                    className="cinema-play-button"
                    aria-label="Explore Video Production Services"
                  >
                    <Play size={24} fill="#242538" className="play-icon" />
                  </Link>
                </div>

                {/* Cinema Lower Third Overlay */}
                <div className="cinema-lower-third">
                  <span className="lower-tagline">BRAND FILMS · MOTION · AI CREATIVE</span>
                  <span className="lower-timecode font-mono">01:48 / REEL</span>
                </div>
              </div>

              {/* Three Cinematic Pillar Highlights */}
              <div className="cinema-pillars-row">
                <div className="cinema-pillar-item">
                  <span className="pillar-num font-mono">01</span>
                  <div>
                    <h4 className="pillar-h">Brand Films</h4>
                    <p className="pillar-p">Cinematic narratives and product stories.</p>
                  </div>
                </div>
                <div className="cinema-pillar-item">
                  <span className="pillar-num font-mono">02</span>
                  <div>
                    <h4 className="pillar-h">Motion Design</h4>
                    <p className="pillar-p">Dynamic kinetic typography and 3D visual storytelling.</p>
                  </div>
                </div>
                <div className="cinema-pillar-item">
                  <span className="pillar-num font-mono">03</span>
                  <div>
                    <h4 className="pillar-h">AI-Assisted Workflows</h4>
                    <p className="pillar-p">Concept visualization guided by human art direction.</p>
                  </div>
                </div>
              </div>
            </div>
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
                Your brand is more than a logo. It's the impression you leave, the experience you create, and the reason people remember you. We bring strategy, design, film and technology together to make every interaction count.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 / WHAT WE DO (THE 7-DISCIPLINE SIGNATURE EDITORIAL DARK SECTION)
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
                When launching a venture, early perceptions matter. We help founders clarify their positioning, establish a cohesive visual identity, produce compelling launch films, and build a conversion-focused website that establishes immediate authority.
              </p>
              <ul className="audience-checklist">
                <li><span>Strategic brand positioning</span></li>
                <li><span>Foundational visual identity</span></li>
                <li><span>Launch film &amp; high-impact website</span></li>
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
                For established firms that have outgrown their original branding or whose digital presence no longer represents their capability, we lead strategic refreshes that protect existing brand equity while modernizing every touchpoint.
              </p>
              <ul className="audience-checklist">
                <li><span>Comprehensive identity refresh</span></li>
                <li><span>Cinematic brand film &amp; campaigns</span></li>
                <li><span>Modern web re-architecture</span></li>
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
            <span>Concept Projects &amp; Independent Explorations — demonstrating our studio design, motion, and art direction capabilities before client commission release.</span>
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

import React, { useState } from 'react';
import { WORK_FILTERS, PORTFOLIO_PROJECTS } from '../data/studioData';
import { Play, Film, Sparkles, X, ArrowUpRight, Clock, MapPin } from 'lucide-react';

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('All Work');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  const filteredProjects = activeFilter === 'All Work'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.filterKey === activeFilter);

  return (
    <section className="section-spacing work-showcase-section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="editorial-label">OUR WORK</span>
          <h2 className="section-title font-serif">
            See the stories we bring to life.
          </h2>
          <p className="section-subtitle">
            Explore our work across advertising, product films, motion graphics, event videos, social media, and AI production. Each project brings a different brief, audience, and creative challenge.
          </p>

          {/* Showreel Action Button */}
          <div className="showreel-cta-wrap">
            <button
              type="button"
              className="btn btn-primary showreel-main-btn"
              onClick={() => setShowreelOpen(true)}
              aria-label="Watch Our Showreel"
            >
              <Play size={16} fill="currentColor" />
              <span>Watch Our Showreel</span>
            </button>
          </div>
        </div>

        {/* Portfolio Filters */}
        <div className="portfolio-filter-bar" role="tablist" aria-label="Work category filters">
          {WORK_FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`filter-tab-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-cards-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-video-card">
              <div
                className="project-poster-wrap"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                aria-label={`Watch ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-poster-img"
                  loading="lazy"
                />
                <div className="poster-overlay-scrim">
                  <div className="poster-play-badge">
                    <Play size={20} fill="#090A0D" />
                  </div>
                </div>

                <div className="poster-runtime-tag font-mono">
                  <Clock size={12} />
                  <span>{project.duration}</span>
                </div>

                <div className="poster-category-badge font-mono">
                  {project.category}
                </div>
              </div>

              <div className="project-info-block">
                <div className="project-header-row">
                  <div>
                    <span className="project-client-name font-mono">{project.client} • {project.year}</span>
                    <h3 className="project-title-heading font-serif">{project.title}</h3>
                  </div>
                </div>

                <p className="project-brief-desc">{project.description}</p>

                <div className="project-scope-tags">
                  {project.scope.map((tag, i) => (
                    <span key={i} className="scope-tag font-mono">{tag}</span>
                  ))}
                </div>

                <div className="project-action-row">
                  <button
                    type="button"
                    className="btn btn-secondary watch-project-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Play size={14} fill="currentColor" />
                    <span>Watch Project</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Video Modal */}
      {selectedProject && (
        <div className="video-player-modal-backdrop" onClick={() => setSelectedProject(null)} role="dialog" aria-modal="true">
          <div className="video-player-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-icon-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close video player"
            >
              <X size={20} />
            </button>

            <div className="dialog-video-frame">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-stream-preview"
              />
              <div className="dialog-playback-overlay">
                <div className="playback-pulse-circle">
                  <Play size={32} fill="#090A0D" />
                </div>
                <span className="playback-hint font-mono">4K UHD Master • {selectedProject.duration}</span>
              </div>
            </div>

            <div className="dialog-meta-panel">
              <div className="dialog-meta-left">
                <span className="dialog-category font-mono">{selectedProject.category} • {selectedProject.year}</span>
                <h3 className="dialog-title font-serif">{selectedProject.title}</h3>
                <p className="dialog-desc">{selectedProject.description}</p>
              </div>
              <div className="dialog-meta-right">
                <span className="dialog-meta-label font-mono">Client Partner</span>
                <span className="dialog-meta-val">{selectedProject.client}</span>
                <span className="dialog-meta-label font-mono" style={{ marginTop: '12px' }}>Location</span>
                <span className="dialog-meta-val">{selectedProject.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Studio Showreel Modal */}
      {showreelOpen && (
        <div className="video-player-modal-backdrop" onClick={() => setShowreelOpen(false)} role="dialog" aria-modal="true">
          <div className="video-player-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-icon-btn"
              onClick={() => setShowreelOpen(false)}
              aria-label="Close Showreel"
            >
              <X size={20} />
            </button>

            <div className="dialog-video-frame showreel-frame">
              <img
                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1400&q=80"
                alt="The Velora Studios Official Showreel"
                className="modal-stream-preview"
              />
              <div className="dialog-playback-overlay">
                <div className="playback-pulse-circle">
                  <Play size={36} fill="#090A0D" />
                </div>
                <span className="playback-hint font-mono">THE VELORA STUDIOS • OFFICIAL SHOWREEL 2026 (4K)</span>
              </div>
            </div>

            <div className="dialog-meta-panel">
              <div>
                <span className="dialog-category font-mono">CREATIVE SHOWREEL</span>
                <h3 className="dialog-title font-serif">Your vision. Made unforgettable.</h3>
                <p className="dialog-desc">
                  Featuring commercials, AI product visuals, motion graphics, and cinematic narrative scenes for ambitious brands worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

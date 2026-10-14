import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_VALUES } from '../data/studioData';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="page-wrapper about-page">
      <SEO />

      {/* Hero Header */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">ABOUT THE STUDIO</span>
          <h1 className="page-hero-title font-serif">
            Creativity with purpose. Design with direction.
          </h1>
        </div>
      </section>

      {/* Introduction & Philosophy */}
      <section className="section-spacing about-intro-section">
        <div className="container">
          <div className="about-editorial-grid">
            <div className="about-grid-col-left">
              <span className="editorial-label">INTRODUCTION</span>
              <p className="about-lead-paragraph font-serif">
                The Velora Studios is a branding, web design and creative services studio focused on helping businesses communicate with clarity and distinction.
              </p>
              <p className="about-text-body">
                We believe meaningful creative work begins with understanding. By learning about your business, your audience and your ambitions, we develop design solutions that feel considered, communicate your value and support your next stage of growth.
              </p>
            </div>

            <div className="about-grid-col-right">
              <div className="about-philosophy-card">
                <div className="about-card-brand-wrap">
                  <img
                    src="/logo-dark.png"
                    alt="The Velora Studios"
                    className="about-card-brand-logo"
                  />
                </div>
                <span className="editorial-label">OUR PHILOSOPHY</span>
                <h2 className="philosophy-card-title font-serif">
                  Design should do more than look good.
                </h2>
                <p className="philosophy-card-desc">
                  It should make your message clearer, your brand more recognisable and your digital presence more useful.
                </p>
                <p className="philosophy-card-desc">
                  We combine strategic thinking with creative exploration to help businesses build cohesive identities and engaging online experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing about-values-section">
        <div className="container">
          <div className="values-header">
            <span className="editorial-label">OUR CORE VALUES</span>
            <h2 className="values-main-title font-serif">Principles that guide every commission.</h2>
          </div>

          <div className="values-list-grid">
            {STUDIO_VALUES.map((val, idx) => (
              <div key={val.name} className="value-item-row">
                <div className="value-num font-mono">0{idx + 1}</div>
                <div className="value-name font-serif">{val.name}</div>
                <div className="value-desc">{val.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-spacing about-closing-cta">
        <div className="container text-center">
          <h2 className="about-cta-headline font-serif">
            Have a project in mind? Let's start a conversation.
          </h2>
          <p className="about-cta-sub">
            Whether you are launching a new startup or evolving an established identity, we are here to collaborate.
          </p>
          <div style={{ marginTop: '28px' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Start a Conversation</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

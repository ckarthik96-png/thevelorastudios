import React from 'react';
import { Target, Layers, Cpu, Award } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function About() {
  const pillars = [
    {
      icon: <Target size={28} className="pillar-icon" />,
      title: "Strategic Architecture",
      desc: "We don't design for aesthetic novelty alone. Every layout, brand mark, and typography scale is rigorously grounded in brand positioning, consumer psychology, and commercial longevity."
    },
    {
      icon: <Layers size={28} className="pillar-icon" />,
      title: "Uncompromising Craft",
      desc: "From the micro-kerning of custom type to seamless 60fps interaction choreography, we treat digital mediums with the tactile reverence of classical ateliers."
    },
    {
      icon: <Cpu size={28} className="pillar-icon" />,
      title: "Edge Engineering",
      desc: "Audacious design requires flawless execution. We engineer our web platforms on modern React, Vite, and Cloudflare Pages edge infrastructure for sub-second global response times."
    }
  ];

  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span className="dot" />
            <span>About The Studio</span>
          </div>
          <h2 className="font-display">Where strategic discipline meets visionary design.</h2>
          <p>
            {STUDIO_INFO.name} was established on a single principle: digital presence should not merely participate in culture—it should define it.
          </p>
        </div>

        {/* Manifesto Showcase */}
        <div className="about-manifesto-card glass-panel">
          <div className="manifesto-content">
            <span className="quote-mark font-display">“</span>
            <blockquote className="manifesto-quote font-display">
              We operate at the convergence of high fashion, architectural minimalism, and digital engineering. 
              Our work turns complex company narratives into magnetic, iconic artifacts.
            </blockquote>
            <div className="manifesto-attribution">
              <div className="attribution-avatar">VS</div>
              <div>
                <p className="attribution-name">Creative Direction &amp; Leadership</p>
                <p className="attribution-role">[Placeholder: Insert Founder / Creative Director Name]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glass-panel">
              <div className="pillar-icon-wrap">
                {pillar.icon}
              </div>
              <h3 className="pillar-title font-display">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Transparent Studio Disclosures */}
        <div className="about-notice-bar">
          <p className="notice-text">
            <strong>Studio Notice:</strong> All project credits, client engagements, and studio milestones presented across this platform adhere to client confidentiality agreements. 
            <span> [Placeholder: Replace with your actual studio story, registered studio entities, or team bios before commercial launch].</span>
          </p>
        </div>
      </div>
    </section>
  );
}

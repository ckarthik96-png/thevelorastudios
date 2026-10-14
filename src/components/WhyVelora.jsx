import React from 'react';
import { WHY_VELORA_PILLARS } from '../data/studioData';
import { Layers, Film, MonitorPlay, Globe } from 'lucide-react';

const ICONS = [Layers, Film, MonitorPlay, Globe];

export default function WhyVelora() {
  return (
    <section className="section-spacing why-velora-section" id="why-velora">
      <div className="container">
        <div className="section-header text-center">
          <span className="editorial-label">WHY VELORA</span>
          <h2 className="section-title font-serif">
            Creative thinking. Careful execution.
          </h2>
          <p className="section-subtitle">
            Every project is guided by clear communication, deep craft, and an unwavering commitment to your audience.
          </p>
        </div>

        <div className="why-velora-grid">
          {WHY_VELORA_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div key={pillar.number} className="why-pillar-card">
                <div className="pillar-top-row">
                  <span className="pillar-num font-mono">{pillar.number}</span>
                  <div className="pillar-icon-box">
                    <Icon size={20} className="pillar-icon" />
                  </div>
                </div>
                <h3 className="pillar-title font-serif">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

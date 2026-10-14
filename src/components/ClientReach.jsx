import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { Globe, MapPin } from 'lucide-react';

const MARKETS = [
  { city: "Dubai", label: "Middle East & GCC Hub", tag: "GMT+4" },
  { city: "Canada", label: "North American Market", tag: "EST / PST" },
  { city: "Bangalore", label: "Studio Headquarters", tag: "IST (GMT+5:30)" },
  { city: "Hyderabad", label: "Media & Tech Corridor", tag: "IST (GMT+5:30)" }
];

export default function ClientReach() {
  return (
    <section className="section-spacing client-reach-section" id="reach">
      <div className="container">
        <div className="client-reach-card">
          <div className="reach-content-layout">
            <div className="reach-text-col">
              <span className="editorial-label">CLIENT REACH</span>
              <h2 className="reach-title font-serif">
                Different markets. A shared passion for great stories.
              </h2>
              <p className="reach-desc">
                We collaborate with clients in Dubai, Canada, Bangalore, and Hyderabad, creating video content for different audiences, industries, and platforms.
              </p>
              <div className="reach-presence-note font-mono">
                <MapPin size={16} className="pin-icon" />
                <span>Seamless remote workflows • On-location production teams</span>
              </div>
            </div>

            <div className="reach-markets-grid">
              {MARKETS.map((m) => (
                <div key={m.city} className="market-location-box">
                  <div className="market-top">
                    <span className="market-city font-serif">{m.city}</span>
                    <span className="market-tz font-mono">{m.tag}</span>
                  </div>
                  <span className="market-sub">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

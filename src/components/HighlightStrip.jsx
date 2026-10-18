import React from 'react';
import { HIGHLIGHT_STRIP } from '../data/studioData';

export default function HighlightStrip() {
  return (
    <section className="highlight-strip-section" aria-label="Core Capabilities Highlight">
      <div className="highlight-strip-track">
        <div className="highlight-strip-content">
          {[...HIGHLIGHT_STRIP, ...HIGHLIGHT_STRIP, ...HIGHLIGHT_STRIP, ...HIGHLIGHT_STRIP].map((item, idx) => (
            <div key={idx} className="highlight-item">
              <span className="highlight-text">{item}</span>
              <span className="highlight-separator">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

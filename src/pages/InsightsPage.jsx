import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../data/studioData';
import SEO from '../components/SEO';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Branding', 'Web Design', 'Strategy'];

  const filteredArticles = activeCategory === 'All'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="page-wrapper insights-page">
      <SEO />

      {/* Hero Header */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">STUDIO PERSPECTIVES</span>
          <h1 className="page-hero-title font-serif">
            Ideas for building better brands and digital experiences.
          </h1>
          <p className="page-hero-sub">
            Practical perspectives on branding, website design, creative thinking and building a stronger digital presence.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing insights-list-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="insights-filter-pills">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`filter-btn ${activeCategory === c ? 'active' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="insights-articles-grid">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="insight-card-item">
                <div className="insight-meta-row">
                  <span className="insight-category-tag">{article.category}</span>
                  <span className="insight-read-time font-mono">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="insight-title font-serif">
                  <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="insight-summary-text">{article.summary}</p>

                <div className="insight-footer-action">
                  <Link to={`/insights/${article.slug}`} className="read-article-link font-serif">
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

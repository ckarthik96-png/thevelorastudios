import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../data/studioData';
import SEO from '../components/SEO';

export default function ArticleDetailPage() {
  const { articleSlug } = useParams();
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === articleSlug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="page-wrapper article-detail-page">
      <SEO
        customTitle={`${article.title} | The Velora Studios Insights`}
        customDescription={article.summary}
      />

      {/* Article Header */}
      <section className="article-hero-section">
        <div className="container article-container">
          <div className="breadcrumb-nav">
            <Link to="/insights" className="back-link">
              <ArrowLeft size={14} />
              <span>Back to Insights</span>
            </Link>
          </div>

          <div className="article-meta-tags">
            <span className="editorial-label">{article.category}</span>
            <span className="article-read-badge font-mono">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>

          <h1 className="article-main-title font-serif">{article.title}</h1>
          <p className="article-hero-lead">{article.summary}</p>

          <div className="article-date-row font-mono">
            <span>Published {article.date}</span> • <span>The Velora Studios Editorial</span>
          </div>
        </div>
      </section>

      <div className="horizontal-divider" />

      {/* Article Body */}
      <section className="section-spacing article-body-section">
        <div className="container article-container">
          <div className="article-prose-content">
            {article.content.map((sec, idx) => (
              <div key={idx} className="prose-section-block">
                <h2 className="prose-heading font-serif">{sec.heading}</h2>
                <p className="prose-text">{sec.text}</p>
              </div>
            ))}
          </div>

          {/* Article Closing CTA */}
          <div className="article-closing-box">
            <span className="editorial-label">START A CONVERSATION</span>
            <h3 className="closing-box-title font-serif">
              Ready to apply these principles to your brand or website?
            </h3>
            <p className="closing-box-text">
              We collaborate with founders and established businesses to build distinctive identities and purposeful digital platforms.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Project</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

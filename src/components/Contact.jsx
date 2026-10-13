import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Clock, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand Architecture & Visual Identity',
    budget: '$25,000 – $50,000',
    timeline: 'Within 4 – 8 weeks',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Sync if preselected from Services component
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const projectTypes = [
    'Brand Architecture & Visual Identity',
    'Digital Experience & UI/UX Design',
    'Creative Direction & Artistry',
    'Modern Web Engineering & Edge Delivery',
    'Comprehensive End-to-End Launch'
  ];

  const budgetTiers = [
    'Under $15,000',
    '$15,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000 – $100,000+',
    'Quarterly Creative Retainer'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (minimum 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide brief details about your vision (minimum 10 characters).';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable async form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Brand Architecture & Visual Identity',
      budget: '$25,000 – $50,000',
      timeline: 'Within 4 – 8 weeks',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(STUDIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="section-padding contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow-badge">
            <span className="dot" />
            <span>Project Inquiries</span>
          </div>
          <h2 className="font-display">Let’s engineer something iconic together.</h2>
          <p>
            Whether embarking on an ambitious brand reinvention, a high-converting digital product, or a long-term creative partnership, we are eager to hear your vision.
          </p>
        </div>

        {/* Backend Form Notice Alert */}
        <div className="form-backend-advisory glass-panel">
          <div className="advisory-icon-col">
            <AlertCircle size={22} className="advisory-icon" />
          </div>
          <div className="advisory-content">
            <h4 className="advisory-title">Production Form Integration Advisory</h4>
            <p className="advisory-text">
              This client-side interactive form includes input verification, field sanitation, and responsive UI states. 
              <strong> Before your official launch on thevelorastudios.com:</strong> to route submissions directly to your inbox (<code>{STUDIO_INFO.email}</code>), 
              connect this form action to a backend handler such as a <strong>Cloudflare Worker</strong>, <strong>Formspree</strong>, <strong>Resend</strong>, or <strong>Web3Forms</strong>. 
              Submitting now demonstrates the client-side validation and confirmation lifecycle.
            </p>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-layout-grid">
          {/* Left Column: Direct Studio Channels */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-panel">
              <h3 className="info-card-title font-display">Direct Channels</h3>
              <p className="info-card-desc">
                Prefer a direct conversation? Contact our principals directly or schedule an exploratory introduction.
              </p>

              <div className="direct-channels-list">
                {/* Email Channel */}
                <div className="channel-item">
                  <div className="channel-icon-wrap">
                    <Mail size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Official Studio Email</span>
                    <div className="channel-value-row">
                      <a href={`mailto:${STUDIO_INFO.email}`} className="channel-link">
                        {STUDIO_INFO.email}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmailToClipboard}
                        className="copy-btn"
                        title="Copy email to clipboard"
                        aria-label="Copy email to clipboard"
                      >
                        {copiedEmail ? <Check size={14} className="copied" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Response Commitment */}
                <div className="channel-item">
                  <div className="channel-icon-wrap">
                    <Clock size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Response Commitment</span>
                    <span className="channel-val-text">Guaranteed response within 24–48 business hours.</span>
                  </div>
                </div>

                {/* Studio Hub */}
                <div className="channel-item">
                  <div className="channel-icon-wrap">
                    <MapPin size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Atelier Location</span>
                    <span className="channel-val-text">{STUDIO_INFO.location}</span>
                  </div>
                </div>

                {/* Direct Phone Placeholder */}
                <div className="channel-item">
                  <div className="channel-icon-wrap">
                    <Phone size={18} />
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Private Line</span>
                    <span className="channel-val-text">{STUDIO_INFO.phone}</span>
                  </div>
                </div>
              </div>

              {/* NDA Assurance */}
              <div className="confidentiality-badge">
                <Sparkles size={16} />
                <span>Mutual Non-Disclosure Agreement provided prior to detailed brief analysis.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-panel">
              {isSubmitted ? (
                <div className="form-success-state" role="status" aria-live="polite">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} className="success-icon" />
                  </div>
                  <h3 className="success-title font-display">Inquiry Transmitted Successfully</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>. Your project brief regarding <em>{formData.projectType}</em> has been cataloged. 
                    Our studio partners will review your requirements and reach out to <strong>{formData.email}</strong> within 24–48 hours.
                  </p>
                  <div className="success-preview-box">
                    <span className="preview-label">Project Scope:</span>
                    <span className="preview-val">{formData.projectType} ({formData.budget})</span>
                  </div>
                  <button onClick={handleReset} className="btn btn-secondary" style={{ marginTop: '20px' }}>
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="studio-inquiry-form">
                  <h3 className="form-heading font-display">Commission Brief</h3>

                  {/* Name & Email Row */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name" className="field-label">
                        Your Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        className={`field-input ${errors.name ? 'input-error' : ''}`}
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. eleanor@vanceatelier.com"
                        className={`field-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Company & Timeline */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="company" className="field-label">
                        Company or Project Name <span className="optional">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="[Placeholder: Your Brand / Firm]"
                        className="field-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="budget" className="field-label">
                        Target Investment Tier
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="field-input select-input"
                      >
                        {budgetTiers.map((tier) => (
                          <option key={tier} value={tier}>
                            {tier}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="form-field">
                    <label className="field-label">Primary Engagement Scope</label>
                    <div className="project-type-pills">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                          className={`type-pill ${formData.projectType === type ? 'active' : ''}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div className="form-field">
                    <label htmlFor="message" className="field-label">
                      Project Vision &amp; Objectives <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your brand challenges, deliverables, aesthetic inspirations, or ideal launch date..."
                      className={`field-input textarea-input ${errors.message ? 'input-error' : ''}`}
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary submit-btn"
                  >
                    {isSubmitting ? (
                      <span className="submitting-spinner-wrap">
                        <span className="spinner" />
                        <span>Transmitting Brief...</span>
                      </span>
                    ) : (
                      <>
                        <span>Transmit Project Brief</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

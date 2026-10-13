import React, { useState } from 'react';
import { Mail, MessageSquare, Calendar, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    service: 'Brand Strategy & Visual Identity',
    budget: '$10,000 – $25,000',
    timeline: 'Within 4 – 8 weeks',
    description: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesOptions = [
    'Brand Strategy & Visual Identity',
    'Website Design & Development',
    'Creative Design & Direction',
    'Digital Experiences',
    'Content & Visual Storytelling'
  ];

  const budgetOptions = [
    'Under $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000+',
    'Ongoing Creative Retainer'
  ];

  const timelineOptions = [
    'Immediately / ASAP',
    'Within 1 – 2 months',
    'Within 3 – 6 months',
    'Exploring options'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name is required (minimum 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Business email is required.';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please describe your project or challenge (minimum 10 characters).';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'Please acknowledge that your information will be used to respond to your enquiry.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      website: '',
      service: 'Brand Strategy & Visual Identity',
      budget: '$10,000 – $25,000',
      timeline: 'Within 4 – 8 weeks',
      description: '',
      privacyConsent: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-component-wrap">
      {/* 4 Direct Contact Methods Grid */}
      <div className="direct-contact-channels-grid">
        {/* Email */}
        <a href={`mailto:${STUDIO_CONFIG.displayEmail}`} className="contact-channel-card">
          <div className="channel-icon-circle">
            <Mail size={20} />
          </div>
          <div className="channel-card-body">
            <span className="channel-title">Direct Email</span>
            <span className="channel-value">{STUDIO_CONFIG.displayEmail}</span>
            <span className="channel-note">Responses within 24–48 hours</span>
          </div>
          <ArrowUpRight size={16} className="channel-arrow" />
        </a>

        {/* WhatsApp */}
        <a href={STUDIO_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-channel-card">
          <div className="channel-icon-circle">
            <MessageSquare size={20} />
          </div>
          <div className="channel-card-body">
            <span className="channel-title">WhatsApp Chat</span>
            <span className="channel-value">{STUDIO_CONFIG.displayWhatsapp}</span>
            <span className="channel-note">Direct principal messaging</span>
          </div>
          <ArrowUpRight size={16} className="channel-arrow" />
        </a>

        {/* Consultation Booking */}
        <a href={STUDIO_CONFIG.bookingUrl} target="_blank" rel="noopener noreferrer" className="contact-channel-card">
          <div className="channel-icon-circle">
            <Calendar size={20} />
          </div>
          <div className="channel-card-body">
            <span className="channel-title">Schedule Call</span>
            <span className="channel-value">30-Min Discovery</span>
            <span className="channel-note">Select a convenient time slot</span>
          </div>
          <ArrowUpRight size={16} className="channel-arrow" />
        </a>
      </div>

      {/* Project Enquiry Form */}
      <div className="enquiry-form-container">
        {isSubmitted ? (
          <div className="form-submission-success-box" role="status" aria-live="polite">
            <div className="success-icon-badge">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="success-heading font-serif">Enquiry Submitted</h3>
            <p className="success-message-text">
              Thank you for telling us about your project. Your enquiry has been submitted. 
              We'll follow up using the contact details you provided.
            </p>
            <div className="success-summary-pill">
              <span>{formData.fullName}</span> • <span>{formData.service}</span>
            </div>
            <button type="button" onClick={handleReset} className="btn btn-secondary" style={{ marginTop: '24px' }}>
              <span>Send Another Enquiry</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="project-enquiry-form">
            <div className="form-legend">
              <h3 className="form-legend-title font-serif">Project Enquiry Form</h3>
              <p className="form-legend-sub">Fill out the brief below and we will prepare a tailored proposal.</p>
            </div>

            {/* Row 1: Full Name & Business Email */}
            <div className="form-grid-row">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full name <span className="req-star">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Maya Chen"
                  className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  required
                />
                {errors.fullName && <span className="field-error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Business email <span className="req-star">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. maya@company.com"
                  className={`form-input ${errors.email ? 'has-error' : ''}`}
                  required
                />
                {errors.email && <span className="field-error-text">{errors.email}</span>}
              </div>
            </div>

            {/* Row 2: Company Name & Website URL */}
            <div className="form-grid-row">
              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company name <span className="optional-tag">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Studio Vance"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="website" className="form-label">
                  Website URL <span className="optional-tag">(Optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="form-input"
                />
              </div>
            </div>

            {/* Row 3: Service Required & Estimated Budget */}
            <div className="form-grid-row">
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Service required <span className="req-star">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input select-input"
                  required
                >
                  {servicesOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget" className="form-label">
                  Estimated budget <span className="optional-tag">(Optional)</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-input select-input"
                >
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Timeline */}
            <div className="form-group">
              <label htmlFor="timeline" className="form-label">
                Expected timeline <span className="optional-tag">(Optional)</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="form-input select-input"
              >
                {timelineOptions.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Row 5: Project Description */}
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Project description <span className="req-star">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell us about your business, your idea, objectives, or current challenges..."
                className={`form-input textarea-input ${errors.description ? 'has-error' : ''}`}
                required
              />
              {errors.description && <span className="field-error-text">{errors.description}</span>}
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="form-consent-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  className="checkbox-input"
                  required
                />
                <span>
                  I agree to The Velora Studios storing and processing my details to reply to this project inquiry.
                </span>
              </label>
              {errors.privacyConsent && <span className="field-error-text">{errors.privacyConsent}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary submit-enquiry-btn"
            >
              {isSubmitting ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <Send size={15} />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Backend Integration Note for Studio Owner */}
      <div className="backend-transparency-note">
        <AlertCircle size={16} className="note-icon" />
        <p>
          <strong>Form Integration Note:</strong> Client-side validation is active. To route enquiries directly to <code>{STUDIO_CONFIG.displayEmail}</code> in production, connect this form action to Formspree, Resend, or a Cloudflare Worker.
        </p>
      </div>
    </div>
  );
}

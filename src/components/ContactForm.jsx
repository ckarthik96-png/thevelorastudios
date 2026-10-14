import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, MapPin, Mail, MessageSquare } from 'lucide-react';
import { STUDIO_CONFIG, SERVICES_DATA } from '../data/studioData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Advertising & Brand Films',
    deliveryDate: '',
    projectDescription: '',
    referenceLink: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailPattern.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 10) {
      errs.projectDescription = 'Please tell us a little about your project (minimum 10 characters).';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Advertising & Brand Films',
      deliveryDate: '',
      projectDescription: '',
      referenceLink: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="section-spacing contact-section-wrapper" id="contact">
      <div className="container">
        <div className="contact-main-card">
          <div className="contact-header-block text-center">
            <span className="editorial-label">START A PROJECT</span>
            <h2 className="contact-main-headline font-serif">
              Let’s make your next idea worth watching.
            </h2>
            <p className="contact-main-subtext">
              Planning a campaign, launching a product, organising an event, or building your content calendar? Tell us what you have in mind.
            </p>
            <div className="contact-location-tag font-mono">
              <MapPin size={15} />
              <span>Based in Bangalore. Serving clients in India and internationally.</span>
            </div>
          </div>

          <div className="contact-form-inner-container">
            {isSubmitted ? (
              <div className="contact-success-state" role="alert">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={44} className="success-check-icon" />
                </div>
                <h3 className="success-title font-serif">Thank you for getting in touch.</h3>
                <p className="success-desc">
                  We have received your project details. A creative producer from The Velora Studios will review your brief and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleReset}
                  style={{ marginTop: '20px' }}
                >
                  <span>Submit Another Enquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="project-enquiry-form" noValidate>
                <div className="form-grid-row">
                  {/* Name */}
                  <div className="form-field-group">
                    <label htmlFor="field-name" className="field-label">
                      Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="field-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      autoComplete="name"
                    />
                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                  </div>

                  {/* Company / Brand */}
                  <div className="form-field-group">
                    <label htmlFor="field-company" className="field-label">
                      Company / Brand
                    </label>
                    <input
                      id="field-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or project name"
                      className="form-input"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="form-grid-row">
                  {/* Email */}
                  <div className="form-field-group">
                    <label htmlFor="field-email" className="field-label">
                      Email <span className="req-star">*</span>
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      autoComplete="email"
                    />
                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="form-field-group">
                    <label htmlFor="field-phone" className="field-label">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="field-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / +971 / +1..."
                      className="form-input"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-grid-row">
                  {/* Service Required */}
                  <div className="form-field-group">
                    <label htmlFor="field-service" className="field-label">
                      Service Required
                    </label>
                    <select
                      id="field-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Target Delivery Date */}
                  <div className="form-field-group">
                    <label htmlFor="field-delivery" className="field-label">
                      Target Delivery Date
                    </label>
                    <input
                      id="field-delivery"
                      type="text"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      placeholder="e.g. End of next month / Q3 2026"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Reference Link */}
                <div className="form-field-group">
                  <label htmlFor="field-ref" className="field-label">
                    Reference Link
                  </label>
                  <input
                    id="field-ref"
                    type="url"
                    name="referenceLink"
                    value={formData.referenceLink}
                    onChange={handleChange}
                    placeholder="YouTube, Vimeo, website or moodboard URL"
                    className="form-input"
                  />
                </div>

                {/* Tell Us About Your Project */}
                <div className="form-field-group">
                  <label htmlFor="field-desc" className="field-label">
                    Tell Us About Your Project <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="field-desc"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleChange}
                    placeholder="Tell us your goal, audience, preferred video style, approximate duration, and the deliverables you need."
                    className={`form-textarea ${errors.projectDescription ? 'input-error' : ''}`}
                  />
                  {errors.projectDescription && (
                    <span className="field-error-msg">{errors.projectDescription}</span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="form-action-row">
                  <button
                    type="submit"
                    className="btn btn-primary submit-btn-large"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Project Enquiry'}</span>
                    <Send size={16} />
                  </button>
                  <span className="form-direct-hint font-mono">
                    Direct inquiries: <a href={`mailto:${STUDIO_CONFIG.displayEmail}`}>{STUDIO_CONFIG.displayEmail}</a> • <a href={STUDIO_CONFIG.phoneUrl}>{STUDIO_CONFIG.displayPhone}</a>
                  </span>
                </div>
              </form>
            )}

            {/* Client Markets */}
            <div className="contact-markets-strip">
              <span className="contact-markets-title font-mono">Client Markets</span>
              <div className="contact-markets-pills">
                {STUDIO_CONFIG.clientMarkets.map((market) => (
                  <span key={market} className="contact-market-pill font-sans">
                    <span className="market-dot" />
                    <span>{market}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowUpRight, MapPin } from 'lucide-react';
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
  const [honeypot, setHoneypot] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Bot honeypot verification
    if (honeypot) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@thevelorastudios.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company || 'Not Specified',
          email: formData.email,
          phone: formData.phone || 'Not Specified',
          service: formData.service,
          deliveryDate: formData.deliveryDate || 'Flexible',
          projectDescription: formData.projectDescription,
          referenceLink: formData.referenceLink || 'None provided',
          _subject: `New Project Enquiry from ${formData.name} [The Velora Studios]`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Even if the remote service returns non-200, don't block user
        setIsSubmitted(true);
      }
    } catch (err) {
      console.warn('FormSubmit AJAX request fallback:', err);
      // Fallback gracefully without frustrating the client
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
    setHoneypot('');
    setIsSubmitted(false);
  };

  const getWhatsAppUrl = () => {
    let msg = `Hi Velora Studios, I would like to enquire about video production services for my brand.`;
    if (formData.name) {
      msg = `Hi Velora Studios, my name is ${formData.name}. I would like to enquire about ${formData.service || 'video production'}${formData.company ? ` for ${formData.company}` : ''}.`;
      if (formData.projectDescription) {
        msg += ` Brief: ${formData.projectDescription}`;
      }
    }
    return `https://wa.me/917483404094?text=${encodeURIComponent(msg)}`;
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
                <div className="success-action-group" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn hero-whatsapp-btn"
                    style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Instant WhatsApp Follow-up</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="project-enquiry-form" noValidate>
                {/* Anti-spam honeypot (invisible to humans) */}
                <input
                  type="text"
                  name="_gotcha"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />
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

                {/* Submit Action Cluster */}
                <div className="form-action-row">
                  <div className="action-buttons-cluster" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn-large"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Project Enquiry'}</span>
                      <Send size={16} />
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn hero-whatsapp-btn"
                      style={{ padding: '12px 20px', fontSize: '0.88rem' }}
                      title="Enquire directly on WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>WhatsApp Now</span>
                    </a>

                    <a
                      href={STUDIO_CONFIG.bookingUrl}
                      onClick={(e) => {
                        if (STUDIO_CONFIG.bookingUrl.startsWith('#')) {
                          e.preventDefault();
                          const el = document.getElementById('field-name') || document.getElementById('contact');
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                            el.focus?.();
                          }
                        }
                      }}
                      target={STUDIO_CONFIG.bookingUrl.startsWith('#') ? undefined : '_blank'}
                      rel={STUDIO_CONFIG.bookingUrl.startsWith('#') ? undefined : 'noopener noreferrer'}
                      className="btn btn-secondary"
                      style={{ padding: '12px 20px', fontSize: '0.88rem' }}
                      title="Schedule a consultation call"
                    >
                      <span>Book a Consultation</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

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

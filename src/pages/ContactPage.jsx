import React from 'react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="page-wrapper contact-page">
      <SEO />

      {/* Hero Header */}
      <section className="page-hero-section">
        <div className="container">
          <span className="editorial-label">PROJECT INQUIRIES</span>
          <h1 className="page-hero-title font-serif">
            Tell us what you're looking to create.
          </h1>
          <p className="page-hero-sub">
            Have a new idea, a brand that needs a refresh or a website you're ready to build? Share a little about your project and we'll have a conversation about the next steps.
          </p>
        </div>
      </section>

      {/* Contact Form & Direct Channels Component */}
      <section className="section-spacing contact-main-section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import ContactForm from '../components/ContactForm';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="page-wrapper contact-page">
      <SEO
        customTitle="Start a Project | Contact The Velora Studios"
        customDescription="Plan your next campaign, commercial, product video, or ongoing social media content. Based in Bangalore, serving clients in Dubai, Saudi Arabia, Canada, Bangalore, and Chennai."
      />

      {/* Main Contact Form Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

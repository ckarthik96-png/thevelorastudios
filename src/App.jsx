import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndividualServicePage from './pages/IndividualServicePage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import InsightsPage from './pages/InsightsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import FloatingContactButtons from './components/FloatingContactButtons';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="velora-site-shell">
        {/* Main Sticky Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceSlug" element={<IndividualServicePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:projectSlug" element={<ProjectDetailPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:articleSlug" element={<ArticleDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp and Call Action Buttons */}
        <FloatingContactButtons />
      </div>
    </BrowserRouter>
  );
}

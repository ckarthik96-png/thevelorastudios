import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import './App.css';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'project' | 'privacy' | 'terms'
    data: null
  });

  const [preselectedService, setPreselectedService] = useState('');

  const handleOpenProject = (project) => {
    setModalState({
      isOpen: true,
      type: 'project',
      data: project
    });
  };

  const handleOpenLegal = (type) => {
    setModalState({
      isOpen: true,
      type: type,
      data: null
    });
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      data: null
    });
  };

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
  };

  return (
    <div className="velora-app">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <Portfolio onOpenProject={handleOpenProject} />
        <Process />
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Global Studio Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Interactive Modal for Projects & Legal Documentation */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        data={modalState.data}
      />
    </div>
  );
}

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactModal from './components/ContactModal';
import { Mail, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactOpen = () => {
    setIsContactOpen(true);
  };

  const handleContactClose = () => {
    setIsContactOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased selection:bg-[#B600A8] selection:text-white min-h-screen relative w-full overflow-x-hidden">
      {/* Page Sections */}
      <main className="w-full relative overflow-x-clip">
        <HeroSection onContactClick={handleContactOpen} />
        <MarqueeSection />
        <AboutSection onContactClick={handleContactOpen} />
        <ServicesSection />
        <ProjectsSection />
      </main>

      {/* Footer Section */}
      <footer className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-white/5 py-12 px-6 md:px-10 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-black uppercase tracking-widest text-lg md:text-xl">
              Anhaa
            </span>
            <span className="text-xs text-[#D7E2EA]/50 font-light mt-1">
              © 2026 Anhaa. All rights reserved. 3D Creator & Visual Designer.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-[#B600A8] text-[#D7E2EA] transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-[#B600A8] text-[#D7E2EA] transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={handleContactOpen}
              aria-label="Email Anhaa"
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-[#B600A8] text-[#D7E2EA] transition-all duration-300 cursor-pointer"
            >
              <Mail size={18} />
            </button>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer border border-white/10 rounded-full px-4 py-2 hover:bg-white/5"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Contact Form Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleContactClose} />
    </div>
  );
}

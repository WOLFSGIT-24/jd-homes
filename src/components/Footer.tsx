import React from 'react';
import { Tab } from '../types';
import { Leaf, Sprout, Heart, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const navItems = [
    { id: 'philosophy-section', label: 'Overview' },
    { id: 'lifestyle-experience', label: 'Lifestyle' },
    { id: 'amenities-section', label: 'Amenities' },
    { id: 'location-advantage-section', label: 'Location' },
    { id: 'gallery-section', label: 'Gallery' },
    { id: 'faq-section', label: 'FAQ' },
  ];

  const handleNavClick = (sectionId: string) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };
  return (
    <footer className="w-full bg-[#0E2516] text-[#FAF7F0] py-16 border-t border-[#cbc4d2]/30" id="app-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* About Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-start">
          <div className="flex items-center gap-4 mb-6">
            <img src="/logo.png" alt="JD Homes Logo" className="h-16 w-auto object-contain" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed mb-6 text-white/80">
            Traditional Ayurvedic healing in a serene, professional environment. Dedicated to the ancient science of life for over three decades.
          </p>
          <div className="flex gap-4 text-[#D4B47C]">
            <Sprout className="w-5 h-5 hover:text-white transition-colors" />
            <Leaf className="w-5 h-5 hover:text-white transition-colors" />
            <Heart className="w-5 h-5 hover:text-white transition-colors" />
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm text-left hover:text-[#D4B47C] transition-colors py-1 cursor-pointer"
              id={`footer-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex items-start gap-2.5 text-sm">
            <MapPin className="w-4 h-4 text-[#D4B47C] shrink-0 mt-0.5" />
            <span>123 Wellness Way, Nature Valley</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm font-bold text-white">
            <Phone className="w-4 h-4 text-[#D4B47C] shrink-0" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Mail className="w-4 h-4 text-[#D4B47C] shrink-0" />
            <a href="mailto:info@prashanthavana.com" className="hover:underline">info@prashanthavana.com</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-[#cbc4d2]/30 text-center text-xs text-white/50">
        © {new Date().getFullYear()} JD Homes. All rights reserved.
      </div>
    </footer>
  );
}

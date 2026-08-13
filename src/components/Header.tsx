import React, { useState } from 'react';
import { Tab } from '../types';
import { Menu, X, User, Leaf } from 'lucide-react';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#193A22] backdrop-blur-md shadow-lg border-b border-white/10 flex flex-col">
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-end items-center px-6 lg:px-12 py-2 bg-[#0E2516] text-white/80 text-[11px] font-medium gap-6 border-b border-white/5 w-full">
        <a href="tel:+919523879894" className="flex items-center gap-1.5 hover:text-[#D4B47C] transition-colors tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          +91 9523879894
        </a>
        <a href="mailto:mihirsantosh830@gmail.com" className="flex items-center gap-1.5 hover:text-[#D4B47C] transition-colors tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          mihirsantosh830@gmail.com
        </a>
      </div>
      <div className="h-20 max-w-7xl w-full mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo and Branding */}
        <div 
          className="flex items-center gap-4 cursor-pointer" 
          onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          id="header-brand"
        >
          <img src="/logo.png" alt="JD Homes Logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-medium transition-all duration-300 relative py-2 text-white/80 hover:text-white"
              id={`nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('schedule-visit-section')}
            className="hidden sm:block px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 bg-white/10 hover:bg-white/20 text-white shadow-sm"
            id="book-stay-desktop-btn"
          >
            Schedule Site Visit
          </button>
          

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-1.5 rounded-md hover:bg-white/10 text-white transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#193A22] shadow-xl absolute top-20 left-0 w-full animate-fadeIn" id="mobile-nav-container">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-base font-semibold py-2.5 px-4 rounded-xl transition-all text-white/80 hover:bg-white/5 hover:text-white"
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('schedule-visit-section')}
              className="w-full text-center py-3 bg-[#D4B47C] text-[#193A22] rounded-full font-bold shadow-md hover:shadow-lg transition-all mt-2"
              id="book-stay-mobile-btn"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

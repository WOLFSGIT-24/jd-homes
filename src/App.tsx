import React, { useState, useEffect } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeTab from './components/HomeTab';
import TreatmentsTab from './components/TreatmentsTab';
import CampusTab from './components/CampusTab';
import ConsultationTab from './components/ConsultationTab';
import BookingTab from './components/BookingTab';
import AboutUsTab from './components/AboutUsTab';
import PrivacyPolicyTab from './components/PrivacyPolicyTab';
import TermsTab from './components/TermsTab';
import PopupForm from './components/PopupForm';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [prefillDosha, setPrefillDosha] = useState<'vata' | 'pitta' | 'kapha' | null>(null);
  const [preFilledSetup, setPreFilledSetup] = useState<{ cottageId: string; nights: number; treatmentIds: string[] } | null>(null);

  // Scroll to top whenever tab changes to ensure smooth layout transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [activeTab]);

  const handleSetPrefillDosha = (dosha: 'vata' | 'pitta' | 'kapha') => {
    setPrefillDosha(dosha);
  };

  const handlePreFillBookingSetup = (setup: { cottageId: string; nights: number; treatmentIds: string[] }) => {
    setPreFilledSetup(setup);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeTab 
            setActiveTab={setActiveTab} 
            onSetPrefillConsultation={handleSetPrefillDosha}
          />
        );
      case 'treatments':
        return (
          <TreatmentsTab 
            setActiveTab={setActiveTab} 
            onPreFillBookingSetup={handlePreFillBookingSetup}
          />
        );
      case 'campus':
        return (
          <CampusTab 
            setActiveTab={setActiveTab} 
          />
        );
      case 'consultation':
        return (
          <ConsultationTab 
            setActiveTab={setActiveTab}
            prefillDosha={prefillDosha}
            onClearPrefillDosha={() => setPrefillDosha(null)}
          />
        );
      case 'booking':
        return (
          <BookingTab 
            setActiveTab={setActiveTab}
            preFilledSetup={preFilledSetup}
            onClearPrefilledSetup={() => setPreFilledSetup(null)}
          />
        );
      case 'about-us':
        return (
          <AboutUsTab 
            setActiveTab={setActiveTab}
          />
        );
      case 'privacy-policy':
        return (
          <PrivacyPolicyTab 
            setActiveTab={setActiveTab}
          />
        );
      case 'terms':
        return (
          <TermsTab 
            setActiveTab={setActiveTab}
          />
        );
      default:
        return (
          <HomeTab 
            setActiveTab={setActiveTab} 
            onSetPrefillConsultation={handleSetPrefillDosha}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col justify-between selection:bg-[#4f378a]/10 selection:text-[#4f378a]" id="app-root">
      
      {/* Universal Fixed Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Screen Content Stage */}
      <main className="flex-grow pt-20 md:pt-[110px]" id="main-content-wrapper">
        {renderActiveTab()}
      </main>

      {/* Universal Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919523879894" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-6 right-6 lg:bottom-10 lg:right-10 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" className="group-hover:animate-pulse">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Mobile Bottom Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1d1b20] flex items-center shadow-[0_-8px_30px_rgb(0,0,0,0.3)]">
        <a 
          href="tel:+919523879894" 
          className="flex-1 py-4 flex items-center justify-center gap-2 text-white font-bold text-sm bg-transparent border-r border-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Us
        </a>
        <button 
          onClick={() => {
            const el = document.getElementById('schedule-visit-section');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="flex-1 py-4 flex items-center justify-center gap-2 bg-[#D4B47C] text-[#193A22] font-bold text-sm"
        >
          Enquire Now
        </button>
      </div>

      <PopupForm />
    </div>
  );
}

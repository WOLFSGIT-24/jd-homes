import React, { useState } from 'react';
import { Tab } from '../types';
import { Leaf, Sprout, Heart, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

interface FooterProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

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
            A premium farmland community offering individual ownership, modern infrastructure, and a peaceful countryside lifestyle.
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
          <div className="flex flex-col gap-4 text-sm mb-2">
            <div>
              <span className="text-[#D4B47C] font-semibold text-xs block mb-1">Project Address:</span>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4B47C] shrink-0 mt-0.5" />
                <span className="text-white/90">Prashantha Vana, Kalluldi village, kasaba hobli, gouribidnur taluk, Karnataka 561208</span>
              </div>
            </div>
            
            <div>
              <span className="text-[#D4B47C] font-semibold text-xs block mb-1">JD HOMES Head Office:</span>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4B47C] shrink-0 mt-0.5" />
                <span className="text-white/90">JD Homes.1247 , Sri Tulasi , 3rd Floor A Block , 17th Main, 20th Cross Rd, Sahakar Nagar, Bengaluru, Karnataka 560092</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-sm font-bold text-white">
            <Phone className="w-4 h-4 text-[#D4B47C] shrink-0" />
            <span>1800 313 2718</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Mail className="w-4 h-4 text-[#D4B47C] shrink-0" />
            <a href="mailto:marketing@jdhomes.co.in" className="hover:underline">marketing@jdhomes.co.in</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-[#cbc4d2]/30 mb-8">
        <div className="mb-10">
          <h4 className="text-[#D4B47C] font-bold text-xs md:text-sm uppercase tracking-[0.15em] mb-3">
            Authorized Sales Partner
          </h4>
          <p className="text-white/80 text-sm md:text-base mb-3">
            Wolf Media
          </p>
          <p className="text-white/50 text-xs md:text-sm italic">
            This website is operated by an authorized marketing partner for Prashantha Vana by JD Homes.
          </p>
        </div>

        <button 
          onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
          className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <span>Legal Disclaimer</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDisclaimerOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <div className={`grid transition-all duration-300 ease-in-out ${isDisclaimerOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <div className="text-[10px] md:text-xs text-white/40 leading-relaxed text-justify">
              <strong>Disclaimer:</strong> The images, renders, floor plans, specifications, and all other details herein are indicative and for illustrative purposes only. Prashantha Vana | JD Homes reserves the right to alter, modify, or change any or all details in the interest of the development and in accordance with applicable laws. All artist's impressions are used solely to illustrate amenities, interiors, specifications, and landscaping. A tolerance of ±3% is applicable in all unit carpet areas on account of design and construction variances. All brands, materials, and finishes stated are subject to the final decision of the project architect and interior consultant. This electronic / printed communication does not constitute an offer, invitation, or contract of any kind between JD Homes and the recipient. No booking or allotment shall be deemed to have been made on the basis of this material alone. Any purchaser of a residence in this development shall be governed solely by the terms and conditions of the Agreement for Sale executed between the parties, and no detail mentioned herein shall govern such transactions unless expressly provided in the said Agreement by the Promoter. The Promoter does not warrant or assume any liability for the accuracy, completeness, or currency of information contained herein. This communication has been prepared in accordance with the Real Estate (Regulation and Development) Act, 2016 (RERA) as applicable. Prospective customers are advised to independently verify all details — including carpet area, amenities, services, payment terms, and any other relevant terms — directly with the Promoter's authorised sales team by physically visiting the project site and the registered RERA portal. You are requested NOT to rely on information from any unauthorised website, unverified digital platform, or unregistered broker (online or offline) for details pertaining to Prashantha Vana or any other projects of JD Homes. RERA Reg. No.: Applicable as per Karnataka RERA regulations. Please verify on the official RERA Karnataka website.
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#cbc4d2]/30 text-center text-xs text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} JD Homes. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              setActiveTab('terms');
            }}
            className="hover:text-white transition-colors hover:underline"
          >
            Terms & Conditions
          </button>
          <span>|</span>
          <button 
            onClick={() => {
              setActiveTab('privacy-policy');
            }}
            className="hover:text-white transition-colors hover:underline"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}

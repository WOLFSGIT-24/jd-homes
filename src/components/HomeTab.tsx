import React, { useState, useRef, useEffect } from 'react';
import { Tab } from '../types';
import { DOSHA_QUIZ } from '../data';
import { 
  Sparkles, ShieldAlert, ChevronRight, RefreshCw, CheckCircle, Check,
  Clock, Sun, Moon, Coffee, Heart, Landmark, Compass, Award, Play
} from 'lucide-react';

interface HomeTabProps {
  setActiveTab: (tab: Tab) => void;
  onSetPrefillConsultation?: (dosha: 'vata' | 'pitta' | 'kapha') => void;
}

export default function HomeTab({ setActiveTab, onSetPrefillConsultation }: HomeTabProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 768 || !galleryRef.current) return;
      
      const el = galleryRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      
      if (el.scrollLeft >= maxScroll - 10) {
        // Reset to start
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to next item (approx 85vw width)
        el.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' });
      }
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('schedule-visit-section');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Where is Prashantha Vana located?",
      answer: "Prashantha Vana is located near Gauribidanur, Karnataka, close to State Highway 94, approximately 75 minutes from Bengaluru via Airport Road depending on traffic."
    },
    {
      question: "What plot sizes are available?",
      answer: "We offer a variety of plot sizes to suit different needs and investment preferences. Please contact our farmland advisor for the most current availability and dimensions."
    },
    {
      question: "What is the starting investment?",
      answer: "Investment opportunities at Prashantha Vana start from ₹56L, giving you access to premium farmland and all community amenities."
    },
    {
      question: "Is the farmland professionally managed?",
      answer: "Yes, Prashantha Vana is professionally managed so you can enjoy farmland ownership without the daily responsibility of maintaining the plantation and common infrastructure."
    },
    {
      question: "Are water and electricity available?",
      answer: "Yes, we provide individual plot ownership with ready access to water and electricity, along with 24×7 security and well-maintained internal roads."
    },
    {
      question: "Is the project suitable for weekend visits?",
      answer: "Absolutely! The property is designed to be the perfect countryside weekend retreat, family escape, or long-term investment, complete with recreational areas and cottages."
    },
    {
      question: "What amenities are included?",
      answer: "Our amenities include a Courtyard House, Swimming Pool, Children's Play Area, Cafeteria, Guest Cottages, Landscaped Common Areas, Solar Street Lights, and Fruit-Bearing Plantations."
    },
    {
      question: "Can NRIs invest in this project?",
      answer: "Yes, NRIs can invest in Prashantha Vana. Our team will assist you with all necessary documentation and regulatory compliance to ensure a smooth investment process."
    }
  ];

  return (
    <div className="flex flex-col w-full font-body bg-[#FAF7F0]">
      
      {/* Banner / Welcome */}
      <section className="relative w-full min-h-screen pt-24 pb-16 lg:py-0 lg:h-screen lg:min-h-[700px] flex items-center justify-start overflow-x-hidden bg-[#1d1b20]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-16">
          <div className="max-w-3xl flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-black/40 border border-white/10 rounded-md backdrop-blur-sm">
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#D4B47C] uppercase">
                PRASHANTHA VANA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-6 font-semibold">
              Own a Managed <br className="hidden md:block" />
              <span className="text-[#F2D792]">Farmland</span> Near Bangalore
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-xl font-normal leading-relaxed">
              A professionally managed forest community near Gauribidanur, just 75 minutes from Bangalore, designed for peaceful weekends, nature living and long-term ownership.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-sm font-medium text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B47C]"></span>
                10 Acres
              </div>
              <span className="hidden sm:block text-white/30">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B47C]"></span>
                47 Exclusive Plots
              </div>
              <span className="hidden sm:block text-white/30">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4B47C]"></span>
                Fully Managed by JD Homes
              </div>
            </div>

            <div className="text-2xl sm:text-3xl font-bold text-white mb-10">
              Starting from <span className="text-[#D4B47C]">₹56 Lakhs*</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2 bg-[#D1A75B] text-black px-8 py-4 text-sm font-bold rounded-md hover:bg-[#b88c42] transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
              >
                BOOK A SITE VISIT
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 text-sm font-bold rounded-md hover:bg-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer group active:scale-95"
              >
                GET PROJECT DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>
{/* 4-Point USP Strip (Marquee) */}
      <section className="w-full bg-[#0E2516] border-y border-[#D4B47C]/20 relative z-20 shadow-xl overflow-hidden py-4 md:py-4">
        <div className="flex w-max animate-marquee items-center cursor-default text-xs md:text-sm uppercase tracking-[0.15em] font-bold">
          {[1, 2, 3, 4].map((set) => (
            <div key={set} className="flex items-center">
              <div className="flex items-center px-8 md:px-12 whitespace-nowrap">
                <span className="text-[#D4B47C] mr-2.5">10 Acres</span>
                <span className="text-white/70">Premium managed forest</span>
              </div>
              <span className="text-[#D4B47C]/40 text-xs">✦</span>
              
              <div className="flex items-center px-8 md:px-12 whitespace-nowrap">
                <span className="text-[#D4B47C] mr-2.5">75 Minutes</span>
                <span className="text-white/70">From Bangalore</span>
              </div>
              <span className="text-[#D4B47C]/40 text-xs">✦</span>
              
              <div className="flex items-center px-8 md:px-12 whitespace-nowrap">
                <span className="text-[#D4B47C] mr-2.5">47 Plots</span>
                <span className="text-white/70">Exclusive gated community</span>
              </div>
              <span className="text-[#D4B47C]/40 text-xs">✦</span>
              
              <div className="flex items-center px-8 md:px-12 whitespace-nowrap">
                <span className="text-[#D4B47C] mr-2.5">Fully Managed</span>
                <span className="text-white/70">JD Homes handles maintenance</span>
              </div>
              <span className="text-[#D4B47C]/40 text-xs">✦</span>
            </div>
          ))}
        </div>
      </section>

      
      {/* Why Us Section (Redesigned) */}
      <section className="w-full bg-[#FAF7F0] py-20 md:py-24" id="why-us-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Why Prashantha Vana
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#193A22] font-headline leading-tight">
              Designed for Peace, <br className="hidden md:block" /> Managed for Convenience
            </h2>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Box 1: Large Image Background (Takes up 2 columns) */}
            <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10 duration-500" />
              <img src="/foundation.jpg" alt="Individual Ownership" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/30">
                  <span className="text-white font-serif font-bold text-xl">I</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Individual Ownership</h3>
                <p className="text-white/90 text-sm md:text-base max-w-md leading-relaxed">
                  Own a clearly identified private farmland plot within a secure, planned community. Your personal sanctuary in nature.
                </p>
              </div>
            </div>

            {/* Box 2: Professionally Managed (Solid Color or Glass) */}
            <div className="md:col-span-1 bg-[#193A22] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4B47C]/10 rounded-full blur-3xl group-hover:bg-[#D4B47C]/20 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
                  <span className="text-[#D4B47C] font-serif font-bold text-xl">II</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">Professionally Managed</h3>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed relative z-10">
                Enjoy farmland ownership without the daily responsibility of maintaining the plantation and common infrastructure.
              </p>
            </div>

            {/* Box 3: Connected Yet Peaceful */}
            <div className="md:col-span-1 bg-white border border-[#cbc4d2]/30 shadow-xl rounded-[2rem] p-8 md:p-10 flex flex-col justify-between group hover:border-[#D4B47C]/50 transition-colors duration-500">
              <div>
                <div className="w-12 h-12 bg-[#FAF7F0] rounded-full flex items-center justify-center mb-6 text-[#193A22]">
                  <span className="font-serif font-bold text-xl">III</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1d1b20] mb-4 leading-tight">Connected Yet Peaceful</h3>
              </div>
              <p className="text-[#494551] text-sm md:text-base leading-relaxed">
                Experience peaceful countryside living with convenient main-road connectivity near Gauribidanur, just 75 mins from Bengaluru.
              </p>
            </div>

            {/* Box 4: Lifestyle and Investment (Image background) */}
            <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              <img src="/landscaped.jpg" alt="Lifestyle and Investment" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                <div className="w-12 h-12 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20">
                  <span className="text-white font-serif font-bold text-xl">IV</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Lifestyle & Investment</h3>
                <p className="text-white/90 text-sm md:text-base max-w-md leading-relaxed">
                  Use your farmland as a weekend retreat, a family escape, or a high-potential long-term land investment.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
{/* Gallery Section */}
      <section
        className="w-full bg-[#FAF7F0] py-16 md:py-24"
        id="gallery-section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#193A22] font-headline">
              Experience Prashantha Vana
            </h2>
          </div>

          <div 
            ref={galleryRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-4 md:gap-6"
            style={{ scrollbarWidth: 'none' }}
          >
            {/* Row 1 & 2 Left */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[424px]">
              <img
                src="/gallery/1.png"
                alt="Prashantha Vana Landscape"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Row 1 Right 1 */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-1 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[200px]">
              <img
                src="/gallery/2.png"
                alt="Fruit Picking"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Row 1 Right 2 */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-1 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[200px]">
              <img
                src="/gallery/3.jpg"
                alt="Plot Landscape"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Row 2 Right */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[200px]">
              <img
                src="/gallery/4.jpg"
                alt="Entrance Gate"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Row 3 Left */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[300px]">
              <img
                src="/gallery/5.jpg"
                alt="Courtyard House"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Row 3 Right */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[300px]">
              <img
                src="/gallery/6.jpg"
                alt="Plantation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage Section (Redesigned) */}
      <section
        className="w-full bg-[#193A22] py-20 md:py-32 relative overflow-hidden"
        id="location-advantage-section"
      >
        {/* Subtle Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#D4B47C]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#D4B47C]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Location Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-headline leading-tight">
              Peaceful Countryside with <br className="hidden md:block" /> Convenient Connectivity
            </h2>
            <p className="text-sm md:text-base text-gray-400 font-medium">
              Prashantha Vana – Gauribidanur <span className="hidden md:inline mx-2 text-[#D4B47C]">|</span><br className="md:hidden" /> Well Connected. Close to Nature.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Left/Top: Glassmorphism Details Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 h-full flex flex-col justify-center shadow-2xl">
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#D4B47C]/20 flex items-center justify-center shrink-0 border border-[#D4B47C]/30">
                      <Compass size={18} className="text-[#D4B47C]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">State Highway 9</h4>
                      <p className="text-gray-400 text-sm">Located directly on SH 9 with excellent main-road connectivity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#D4B47C]/20 flex items-center justify-center shrink-0 border border-[#D4B47C]/30">
                      <Clock size={18} className="text-[#D4B47C]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">75 Mins from Bengaluru</h4>
                      <p className="text-gray-400 text-sm">Quick access via Airport Road for a stress-free weekend commute.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#D4B47C]/20 flex items-center justify-center shrink-0 border border-[#D4B47C]/30">
                      <Landmark size={18} className="text-[#D4B47C]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-1">Heritage Landmarks</h4>
                      <p className="text-gray-400 text-sm">20 mins from Gudibande Fort, 25 mins from Lepakshi, and 30 mins from Makalidurga.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/maps?ll=13.643381,77.543675&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9940362746835670606",
                        "_blank"
                      )
                    }
                    className="w-full bg-[#D4B47C] text-black py-4 rounded-xl font-bold text-sm hover:bg-[#b88c42] transition-all shadow-lg flex justify-center items-center gap-2 group"
                  >
                    Get Directions
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right/Bottom: Map Embed */}
            <div className="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px] w-full relative border border-white/10 group">
              {/* Optional overlay to make map darker initially, lifting on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
              <iframe
                src="https://maps.google.com/maps?ll=13.643381,77.543675&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9940362746835670606&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(30%) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prashantha Vana Location"
                className="w-full h-full relative z-0"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
{/* Amenities Section */}
      <section
        className="w-full bg-[#EEE3D3] py-16 md:py-24"
        id="amenities-section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Amenities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1b20] mb-16 font-headline leading-tight">
            More Than Farmland
            <br />A Countryside Lifestyle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden group">
              <img
                src="/courtyard.jpg"
                alt="Courtyard House"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Courtyard House
              </div>
            </div>

            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden group">
              <img
                src="/pool.png"
                alt="Swimming Pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Swimming Pool
              </div>
            </div>

            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden group">
              <img
                src="/play.png"
                alt="Children's Play Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Children's Play Area
              </div>
            </div>

            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden group">
              <img
                src="/cafeteria.jpg"
                alt="Cafeteria"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Cafeteria
              </div>
            </div>

            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden group">
              <img
                src="/cottages.png"
                alt="Cottages & Guest Rooms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Cottages & Guest Rooms
              </div>
            </div>

            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden group">
              <img
                src="/landscape.png"
                alt="Landscaped Common Areas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Landscaped Common Areas
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-[#494551]/70 max-w-5xl mx-auto font-medium">
            Also Included: Solar Street Lights · Grand Entrance Arch · Pre-Cast
            Compound Wall · Internal Roads · 24×7 Security · CCTV Surveillance ·
            Fruit-Bearing Plantations · Outdoor Relaxation Areas
          </p>
        </div>
      </section>

      
      {/* Managed Farmland - How It Works Section */}
      <section className="w-full bg-white py-20 md:py-32 border-y border-[#D4B47C]/20" id="how-it-works-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              The Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#193A22] font-headline leading-tight">
              Managed Farmland <br className="hidden md:block" /> How It Works
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal Line connector (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#D4B47C]/10 via-[#D4B47C] to-[#D4B47C]/10 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#FAF7F0] border-2 border-[#D4B47C] flex items-center justify-center mb-8 shadow-xl group-hover:-translate-y-2 transition-transform duration-500 relative">
                  <div className="absolute inset-0 bg-[#D4B47C]/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <Award size={32} className="text-[#193A22] relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#193A22] text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    1
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1d1b20] mb-4">You Own the Land</h3>
                <p className="text-[#494551] text-sm leading-relaxed max-w-sm">
                  You purchase and register a clearly demarcated plot in your name, securing a tangible, high-value real estate asset.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#FAF7F0] border-2 border-[#D4B47C] flex items-center justify-center mb-8 shadow-xl group-hover:-translate-y-2 transition-transform duration-500 relative">
                  <div className="absolute inset-0 bg-[#D4B47C]/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <RefreshCw size={32} className="text-[#193A22] relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#193A22] text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    2
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1d1b20] mb-4">We Manage the Estate</h3>
                <p className="text-[#494551] text-sm leading-relaxed max-w-sm">
                  JD Homes takes over the day-to-day hassles. We professionally maintain the plantations, 24/7 security, roads, and clubhouse.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-[#FAF7F0] border-2 border-[#D4B47C] flex items-center justify-center mb-8 shadow-xl group-hover:-translate-y-2 transition-transform duration-500 relative">
                  <div className="absolute inset-0 bg-[#D4B47C]/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  <Heart size={32} className="text-[#193A22] relative z-10" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#193A22] text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                    3
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1d1b20] mb-4">You Enjoy the Benefits</h3>
                <p className="text-[#494551] text-sm leading-relaxed max-w-sm">
                  Enjoy a beautiful weekend retreat, fresh farm yields, and long-term land appreciation without lifting a finger.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Why JD Homes Section */}
      <section className="w-full bg-[#193A22] py-20 md:py-32 relative overflow-hidden" id="why-jd-homes-section">
        {/* Subtle glowing elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4B47C]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FAF7F0]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              The Developer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-headline leading-tight">
              Why JD Homes?
            </h2>
            <div className="w-16 h-1 bg-[#D4B47C] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Pillar 1 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#D4B47C]/20 flex items-center justify-center mb-8 border border-[#D4B47C]/30">
                <Award size={28} className="text-[#D4B47C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A legacy of creating premium, high-value farm communities. We deliver on our promises, transforming barren lands into lush, thriving estates that consistently appreciate.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#D4B47C]/20 flex items-center justify-center mb-8 border border-[#D4B47C]/30">
                <Landmark size={28} className="text-[#D4B47C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Absolute Transparency</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Invest with complete peace of mind. We ensure 100% clear legal titles, strict regulatory compliance, and absolutely zero hidden costs throughout your ownership journey.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#D4B47C]/20 flex items-center justify-center mb-8 border border-[#D4B47C]/30">
                <CheckCircle size={28} className="text-[#D4B47C]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">End-to-End Excellence</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                From meticulous land acquisition and infrastructure development to lifelong, hassle-free estate management, we handle every detail so you don't have to.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Pricing & Plot Sizes Section */}
      <section
        className="w-full bg-[#FAF7F0] py-20 md:py-32"
        id="pricing-section"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          
          <div className="bg-[#193A22] rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden text-center border border-[#D4B47C]/20">
            {/* Decorative subtle blurs inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4B47C]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4B47C]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Limited-Period Opportunity
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16 font-headline tracking-tight">
                Pricing & Plot Sizes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16 divide-y md:divide-y-0 md:divide-x divide-[#D4B47C]/20">
                <div className="flex flex-col items-center pt-8 md:pt-0 first:pt-0">
                  <div className="text-3xl md:text-5xl text-[#D4B47C] mb-2 flex items-start justify-center font-bold">
                    <span className="text-xl md:text-2xl mt-1 md:mt-2 mr-1">₹</span>
                    <span>799</span>
                  </div>
                  <span className="text-white/80 text-sm">
                    Special Price per sq. ft.*
                  </span>
                </div>
                <div className="flex flex-col items-center pt-8 md:pt-0">
                  <div className="text-3xl md:text-5xl text-[#D4B47C] mb-2 flex items-start justify-center font-bold">
                    <span className="text-xl md:text-2xl mt-1 md:mt-2 mr-1">₹</span>
                    <span>56</span>
                    <span className="text-2xl md:text-3xl mt-auto mb-1 ml-1">L</span>
                  </div>
                  <span className="text-white/80 text-sm">
                    Investment Starts From*
                    <br />
                    <span className="text-[#D4B47C] inline-block mt-1 text-xs">
                      Limited-Period Opportunity
                    </span>
                  </span>
                </div>
                <div className="flex flex-col items-center pt-8 md:pt-0">
                  <div className="text-3xl md:text-4xl text-[#D4B47C] mb-3 flex items-start justify-center font-bold mt-1">
                    <span>6,000–15,000</span>
                  </div>
                  <span className="text-white/80 text-sm">
                    Available Plot Sizes (sq. ft.)
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 mt-8">
                <button
                  onClick={scrollToForm}
                  className="bg-[#D4B47C] text-[#193A22] px-10 py-4 rounded-full font-bold text-base hover:bg-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  Check Plot Availability
                </button>
                <p className="text-white/40 text-[10px] md:text-xs max-w-md mx-auto">
                  *Prices and availability are subject to change. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

{/* FAQ Section */}
      <section className="w-full bg-[#EEE3D3] py-16 md:py-24" id="faq-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#193A22] font-headline">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border-t border-[#cbc4d2]/30 last:border-b"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-sm md:text-base font-bold text-[#1d1b20] group-hover:text-[#193A22] transition-colors pr-8">
                    {faq.question}
                  </span>
                  <span className="text-[#D4B47C] text-xl font-light shrink-0">
                    {activeFaq === idx ? "×" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === idx
                      ? "max-h-48 opacity-100 pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs md:text-sm text-[#494551] leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Schedule Site Visit Section */}
      <section
        className="w-full bg-[#193A22] py-16 md:py-24"
        id="schedule-visit-section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column: Text & Stats */}
          <div className="flex flex-col text-white">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Take the next step
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-headline leading-tight">
              Schedule Your Private Site Visit
            </h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-10 max-w-lg font-light">
              Share your details and our farmland advisor will contact you
              shortly to plan your visit to Prashantha Vana.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              {[
                "No-obligation, personally guided site visit",
                "Dedicated farmland advisor for your queries",
                "Free project brochure with plot layout & pricing",
                "Flexible scheduling, 7 days a week",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#D4B47C] flex items-center justify-center shrink-0">
                    <Check
                      className="w-3.5 h-3.5 text-[#193A22]"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm md:text-base text-white/90 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="bg-[#FAF7F0] rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#193A22]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#193A22]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#193A22]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#193A22]">
                  What is your planned investment range?
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm appearance-none">
                  <option value="">Select range</option>
                  <option value="56L-80L">₹56L – ₹80L</option>
                  <option value="80L-1Cr">₹80L – ₹1 Cr</option>
                  <option value="1Cr+">₹1 Cr+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-[#193A22]">
                  Purchase Purpose
                </label>
                <select className="w-full px-4 py-3.5 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm appearance-none">
                  <option value="">Select purpose</option>
                  <option value="Self Use / Weekend Home">Self Use / Weekend Home</option>
                  <option value="Investment">Investment</option>
                  <option value="Both">Both</option>
                  <option value="Exploring Options">Exploring Options</option>
                </select>
              </div>

              <button className="w-full bg-[#D4B47C] hover:bg-[#D4B47C]/90 text-[#193A22] font-bold py-4 rounded-xl shadow-md transition-all mt-4">
                Request Site Visit
              </button>

              <p className="text-[10px] text-[#494551] text-center mt-2 leading-relaxed">
                By submitting this form, you agree to receive calls, WhatsApp
                messages and project updates from JD Homes.
              </p>
            </div>
          </div>
        </div>
      </section>

          </div>
  );
}

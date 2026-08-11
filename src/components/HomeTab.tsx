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
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-[#1d1b20]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent mix-blend-multiply" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-16">
          <div className="max-w-3xl flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-black/40 border border-white/10 rounded-md backdrop-blur-sm">
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#D4B47C] uppercase">
                Premium Farmlands
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] tracking-tight mb-6 font-semibold">
              More Than <span className="text-[#F2D792]">Farmland</span>.{" "}
              <br className="hidden md:block" />
              A Life Surrounded <br className="hidden md:block" />
              by <span className="text-[#F2D792]">Nature</span>.
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mb-10 max-w-2xl font-normal leading-relaxed">
              Wake up to birdsong, breathe cleaner air, and spend your weekends
              amidst thriving plantations and thoughtfully curated experiences.
              A professionally managed farmland community crafted for families,
              investors, and nature lovers alike.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2 bg-[#D1A75B] text-black px-8 py-4 text-sm font-bold rounded-md hover:bg-[#b88c42] transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
              >
                Schedule Your Visit
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 text-sm font-bold rounded-md hover:bg-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer group active:scale-95"
              >
                View Our Campus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="w-full bg-[#FAF7F0]" id="philosophy-section">
        <div className="py-16 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div
            className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl h-80 md:h-[450px] bg-cover bg-center"
            style={{ backgroundImage: `url('/foundation.jpg')` }}
          ></div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#D4B47C] font-bold tracking-widest uppercase text-xs mb-2 block">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1b20] mb-6 font-headline leading-tight">
              Designed for Ownership. Managed for Peace of Mind.
            </h2>
            <div className="w-12 h-1 bg-[#D4B47C] mb-6 rounded-full" />
            <p className="text-sm md:text-base text-[#494551] leading-relaxed mb-4">
              Owning farmland should be about enjoying nature—not managing it.
              At Prashantha Vana, every aspect of the community is thoughtfully
              planned and professionally maintained, allowing you to experience
              the rewards of farmland ownership with complete peace of mind.
            </p>
            <p className="text-sm md:text-base text-[#494551] leading-relaxed mb-6">
              Whether you're looking for a weekend retreat, a long-term
              investment, or a green legacy for your family, Prashantha Vana
              offers the perfect balance of natural beauty, modern
              infrastructure, and effortless management.
            </p>
            <button
              onClick={scrollToForm}
              className="flex items-center gap-1.5 text-sm font-bold text-[#D4B47C] hover:underline"
              id="read-philosophy-btn"
            >
              Explore Our Infrastructure <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section
        className="w-full bg-[#193A22] relative overflow-hidden border-y border-[#D4B47C]/20"
        id="investment-opportunity"
      >
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4B47C]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4B47C]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="py-16 md:py-20 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Limited-Period Opportunity
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16 font-headline tracking-tight">
            Own a Piece of the Forest
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16 divide-y md:divide-y-0 md:divide-x divide-[#D4B47C]/20">
            <div className="flex flex-col items-center pt-8 md:pt-0 first:pt-0">
              <div className="text-3xl md:text-4xl text-[#D4B47C] mb-2 flex items-start justify-center font-bold">
                <span className="text-xl md:text-2xl mt-0.5 md:mt-1 mr-0.5">
                  ₹
                </span>
                <span>799</span>
              </div>
              <span className="text-white/80 text-xs text-center">
                Special Price per sq. ft.*
              </span>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <div className="text-3xl md:text-4xl text-[#D4B47C] mb-1 flex items-start justify-center font-bold">
                <span className="text-xl md:text-2xl mt-0.5 md:mt-1 mr-0.5">
                  ₹
                </span>
                <span>56</span>
                <span className="text-xl md:text-2xl mt-auto mb-0.5 ml-1">
                  L
                </span>
              </div>
              <span className="text-white/80 text-xs text-center">
                Investment Starts From*
                <br />
                <span className="text-[#D4B47C] inline-block mt-1">
                  Limited-Period Opportunity
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <div className="text-3xl md:text-4xl text-[#D4B47C] mb-2 flex items-start justify-center font-bold">
                <span>6,000–15,000</span>
              </div>
              <span className="text-white/80 text-xs text-center">
                Available Plot Sizes (sq. ft.)
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <button
              onClick={scrollToForm}
              className="bg-[#D4B47C] text-[#193A22] px-8 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Check Plot Availability
            </button>
            <p className="text-white/50 text-[10px] max-w-md mx-auto">
              *Prices and availability are subject to change. Terms and
              conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* Lifestyle Experience Section */}
      <section
        className="w-full bg-[#FAF7F0] py-16 md:py-24"
        id="lifestyle-experience"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column: Image & Text */}
          <div className="flex flex-col gap-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-[450px] w-full">
              <img
                src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Prashantha Vana Lifestyle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: List & CTA */}
          <div className="flex flex-col justify-center lg:pl-8">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1b20] mb-12 font-headline leading-tight">
              More Than Farmland.
              <br />A Place to Slow Down.
            </h2>

            <div className="flex flex-col mb-12">
              {[
                "Morning walks through green plantations",
                "Open spaces to relax and unwind",
                "Family-friendly recreational areas",
                "Landscaped gardens and gathering spaces",
                "Fresh air and serene natural surroundings",
                "Peaceful weekend escapes from city life",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 py-4 border-b border-[#cbc4d2]/30 last:border-0"
                >
                  <Check
                    className="w-4 h-4 text-[#193A22] shrink-0"
                    strokeWidth={3}
                  />
                  <span className="text-sm md:text-base text-[#494551] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="w-max bg-[#193A22] text-white px-10 py-4 rounded-full font-bold text-sm md:text-base hover:bg-[#193A22]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Experience the Lifestyle
            </button>
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
            More Than Farmland.
            <br />A Countryside Lifestyle.
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
                src="/landscaped.jpg"
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

      {/* Why Us Section */}
      <section
        className="w-full bg-[#FAF7F0] py-16 md:py-24"
        id="why-us-section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            Why Prashantha Vana
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1b20] mb-16 font-headline leading-tight">
            Designed for Peace. Managed
            <br />
            for Convenience.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-left border-t-4 border-[#D4B47C] flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <span className="text-2xl font-serif font-bold text-[#193A22] mb-4">
                I
              </span>
              <h3 className="text-sm font-bold text-[#1d1b20] mb-3">
                Individual Ownership
              </h3>
              <p className="text-xs md:text-sm text-[#494551] leading-relaxed">
                Own a clearly identified private farmland plot within a secure,
                planned community.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-left border-t-4 border-[#D4B47C] flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <span className="text-2xl font-serif font-bold text-[#193A22] mb-4">
                II
              </span>
              <h3 className="text-sm font-bold text-[#1d1b20] mb-3">
                Professionally Managed
              </h3>
              <p className="text-xs md:text-sm text-[#494551] leading-relaxed">
                Enjoy farmland ownership without the daily responsibility of
                maintaining the plantation and common infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-left border-t-4 border-[#D4B47C] flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <span className="text-2xl font-serif font-bold text-[#193A22] mb-4">
                III
              </span>
              <h3 className="text-sm font-bold text-[#1d1b20] mb-3">
                Connected Yet Peaceful
              </h3>
              <p className="text-xs md:text-sm text-[#494551] leading-relaxed">
                Experience peaceful countryside living with convenient main-road
                connectivity near Gauribidanur.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-left border-t-4 border-[#D4B47C] flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <span className="text-2xl font-serif font-bold text-[#193A22] mb-4">
                IV
              </span>
              <h3 className="text-sm font-bold text-[#1d1b20] mb-3">
                Lifestyle and Investment
              </h3>
              <p className="text-xs md:text-sm text-[#494551] leading-relaxed">
                Use your farmland as a weekend retreat, family escape or
                long-term land investment.
              </p>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="border border-[#193A22] text-[#193A22] px-10 py-3 rounded-full font-bold text-sm hover:bg-[#193A22] hover:text-white transition-colors duration-300"
          >
            Schedule a Site Visit
          </button>
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

            <div className="w-full h-px bg-white/20 mb-10" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#D4B47C]">
                  10
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                  Acres
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#D4B47C]">
                  47
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                  Plots
                </span>
              </div>
              <div className="flex flex-col">
                <div className="text-3xl font-bold text-[#D4B47C] flex items-start">
                  <span className="text-xl mt-1 mr-0.5">₹</span>
                  <span>56</span>
                  <span className="text-xl mt-auto mb-0.5 ml-1">L</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                  Starting From
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#D4B47C] flex items-end">
                  <span>75</span>
                  <span className="text-xl mb-0.5 ml-1">min</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/60 mt-1">
                  From Bengaluru
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed">
              Main-Road Connected &nbsp;|&nbsp; Individual Plot Ownership
              &nbsp;|&nbsp; Water & Electricity &nbsp;|&nbsp; 24×7 Security
            </p>
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

      {/* Location Advantage Section */}
      <section
        className="w-full bg-[#EEE3D3] py-16 md:py-24"
        id="location-advantage-section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column: Text */}
          <div className="flex flex-col text-left">
            <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Location Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#193A22] mb-6 font-headline leading-tight">
              Peaceful Countryside with
              <br />
              Convenient Connectivity
            </h2>
            <p className="text-sm md:text-base text-[#494551] font-medium mb-10">
              Near Gauribidanur, Karnataka
            </p>

            <div className="flex flex-col gap-5 mb-12">
              {[
                "Located near State Highway 94",
                "Main-road-connected project",
                "Approximately 75 minutes from Bengaluru via Airport Road, depending on traffic",
                "Convenient access from North Bengaluru",
                "Surrounded by open countryside and plantations",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm bg-[#D4B47C] mt-2 shrink-0 transform rotate-45" />
                  <span className="text-sm md:text-base text-[#494551] font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                window.open(
                  "https://maps.google.com/maps?ll=13.643381,77.543675&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9940362746835670606",
                  "_blank",
                )
              }
              className="w-max border border-[#193A22] text-[#193A22] px-10 py-3 rounded-full font-bold text-sm hover:bg-[#193A22] hover:text-white transition-colors duration-300"
            >
              Get Directions
            </button>
          </div>

          {/* Right Column: Map Embed */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-[450px] w-full bg-white relative p-4 border border-[#cbc4d2]/30">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?ll=13.643381,77.543675&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9940362746835670606&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prashantha Vana Location"
                className="w-full h-full"
              ></iframe>
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
                src="/gallery/2.jpg"
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
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-2 md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[200px]">
              <img
                src="/gallery/4.jpg"
                alt="Entrance Gate"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Row 3 */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[240px]">
              <img
                src="/gallery/5.jpg"
                alt="Courtyard House"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-1 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1000&q=80"
                alt="Swimming Pool"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-1 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[240px]">
              <img
                src="/cottages.png"
                alt="Cottages"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Row 4 */}
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-1 md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[300px]">
              <img
                src="/gallery/6.jpg"
                alt="Plantation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="shrink-0 snap-center w-[85vw] md:w-auto col-span-1 md:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[60vw] md:h-[300px]">
              <img
                src="/gallery/7.jpg"
                alt="Container Home"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
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
    </div>
  );
}

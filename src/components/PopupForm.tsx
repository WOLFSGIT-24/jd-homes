import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the popup 3 seconds after the page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md bg-[#FAF7F0] rounded-[2rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-300"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm text-[#193A22] hover:bg-gray-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="text-[#D4B47C] font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">
            Limited Opportunity
          </span>
          <h3 className="text-2xl font-bold text-[#193A22] font-headline">
            Enquire Now
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-[#193A22]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-[#193A22]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-[#193A22]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-[#193A22]">
              What is your planned investment range?
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm appearance-none">
              <option value="">Select range</option>
              <option value="56L-80L">₹56L – ₹80L</option>
              <option value="80L-1Cr">₹80L – ₹1 Cr</option>
              <option value="1Cr+">₹1 Cr+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-[#193A22]">
              Purchase Purpose
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-[#cbc4d2]/50 bg-white text-sm focus:outline-none focus:border-[#193A22] transition-colors shadow-sm appearance-none">
              <option value="">Select purpose</option>
              <option value="Self Use / Weekend Home">Self Use / Weekend Home</option>
              <option value="Investment">Investment</option>
              <option value="Both">Both</option>
              <option value="Exploring Options">Exploring Options</option>
            </select>
          </div>

          <button className="w-full bg-[#D4B47C] hover:bg-[#D4B47C]/90 text-[#193A22] font-bold py-3.5 rounded-xl shadow-md transition-all mt-2">
            Submit Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}

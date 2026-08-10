import React, { useState, useEffect } from 'react';
import { Tab, BookingInquiry } from '../types';
import { COTTAGES, RETREAT_PACKAGES, TREATMENTS } from '../data';
import { 
  Calendar, Check, User, Phone, Mail, Sparkles, Clock, MapPin, 
  Trash2, ShieldCheck, ChevronRight, Calculator, AlertCircle, RefreshCw 
} from 'lucide-react';

interface BookingTabProps {
  setActiveTab: (tab: Tab) => void;
  preFilledSetup: { cottageId: string; nights: number; treatmentIds: string[] } | null;
  onClearPrefilledSetup: () => void;
}

export default function BookingTab({ setActiveTab, preFilledSetup, onClearPrefilledSetup }: BookingTabProps) {
  const [bookings, setBookings] = useState<BookingInquiry[]>([]);
  const [formInquiry, setFormInquiry] = useState({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    cottageId: COTTAGES[0].id,
    packageId: RETREAT_PACKAGES[0].id,
    startDate: '',
    nights: 7,
    guestsCount: 1,
    additionalNotes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Load existing bookings from local storage
  useEffect(() => {
    const saved = localStorage.getItem('prashanthavana_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (err) {
        console.error('Error parsing bookings', err);
      }
    }
  }, []);

  // Handle prefilled options from treatment calculator
  useEffect(() => {
    if (preFilledSetup) {
      setFormInquiry(prev => ({
        ...prev,
        cottageId: preFilledSetup.cottageId,
        nights: preFilledSetup.nights,
        additionalNotes: `Requested pre-selected therapies: ${preFilledSetup.treatmentIds.map(tid => {
          const t = TREATMENTS.find(treat => treat.id === tid);
          return t ? t.name : tid;
        }).join(', ')}`
      }));
      onClearPrefilledSetup(); // Reset prefill once applied
    }
  }, [preFilledSetup]);

  const saveBookings = (updated: BookingInquiry[]) => {
    setBookings(updated);
    localStorage.setItem('prashanthavana_bookings', JSON.stringify(updated));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormInquiry({
      ...formInquiry,
      [name]: name === 'nights' || name === 'guestsCount' ? parseInt(value) || 1 : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formInquiry.guestName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formInquiry.guestEmail.trim()) {
      setErrorMsg('Please enter your email.');
      return;
    }
    if (!formInquiry.startDate) {
      setErrorMsg('Please choose your arrival date.');
      return;
    }

    const selectedCottage = COTTAGES.find(c => c.id === formInquiry.cottageId) || COTTAGES[0];
    const selectedPkg = RETREAT_PACKAGES.find(p => p.id === formInquiry.packageId) || RETREAT_PACKAGES[0];
    
    // Calculate estimated total price
    const cottageCost = selectedCottage.ratePerNight * formInquiry.nights;
    const packageAddonCost = selectedPkg.pricePerDay * formInquiry.nights;
    const totalEst = cottageCost + packageAddonCost;

    const newBooking: BookingInquiry = {
      id: 'bk_' + Date.now(),
      guestName: formInquiry.guestName,
      guestEmail: formInquiry.guestEmail,
      guestPhone: formInquiry.guestPhone,
      cottageId: formInquiry.cottageId,
      packageId: formInquiry.packageId,
      startDate: formInquiry.startDate,
      nights: formInquiry.nights,
      guestsCount: formInquiry.guestsCount,
      totalEstimate: totalEst,
      status: 'Awaiting Physician Review',
      createdAt: new Date().toLocaleDateString()
    };

    const updated = [newBooking, ...bookings];
    saveBookings(updated);
    setFormSubmitted(true);

    // Reset some form inputs
    setFormInquiry({
      guestName: '',
      guestEmail: '',
      guestPhone: '',
      cottageId: COTTAGES[0].id,
      packageId: RETREAT_PACKAGES[0].id,
      startDate: '',
      nights: 7,
      guestsCount: 1,
      additionalNotes: ''
    });
  };

  const handleCancelBooking = (id: string) => {
    if (window.confirm('Are you sure you want to cancel this retreat inquiry?')) {
      const updated = bookings.filter(b => b.id !== id);
      saveBookings(updated);
    }
  };

  // Live bill calculations
  const selectedCottage = COTTAGES.find(c => c.id === formInquiry.cottageId) || COTTAGES[0];
  const selectedPkg = RETREAT_PACKAGES.find(p => p.id === formInquiry.packageId) || RETREAT_PACKAGES[0];
  const cottageTotal = selectedCottage.ratePerNight * formInquiry.nights;
  const packageTotal = selectedPkg.pricePerDay * formInquiry.nights;
  const totalInquiryEstimate = cottageTotal + packageTotal;

  return (
    <div className="flex flex-col w-full font-body bg-[#FAF7F0]" id="booking-tab-container">
      
      {/* Header Banner */}
      <section className="py-16 bg-[#FAF7F0]/30 border-b border-[#cbc4d2]/20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">Sanctuary Stays</span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d1b20] mb-4 font-headline">Reserve Your Healing Journey</h1>
          <p className="text-sm md:text-base text-[#494551] font-light max-w-xl mx-auto leading-relaxed">
            Inquire about our limited-capacity rooms. Every stay includes three organic Sattvic meals daily, morning yoga sessions, and detailed physician evaluations.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Booking Form - 7 Cols */}
        <div className="lg:col-span-7 space-y-8">
          
          {formSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-left animate-fadeIn" id="booking-success-banner">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-green-900 font-headline">Retreat Inquiry Submitted Successfully!</h3>
              <p className="text-xs md:text-sm text-green-800 mt-2 leading-relaxed">
                Thank you. Your request is now listed below under "Your Stay Inquiries" in your browser local state. Our senior physician team will evaluate your inputs to coordinate room placement and custom herbal oils prior to your check-in.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-5 py-2 bg-green-700 text-white text-xs font-bold rounded-xl hover:bg-green-800 transition-colors cursor-pointer"
              >
                Inquire Another Stay
              </button>
            </div>
          )}

          {!formSubmitted && (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 border border-[#cbc4d2]/30 shadow-md space-y-6" id="booking-inquiry-form">
              <div className="flex items-center gap-2 mb-4 border-b border-[#cbc4d2]/20 pb-4">
                <Calendar className="w-5.5 h-5.5 text-[#4f378a]" />
                <h3 className="text-base font-bold text-[#1d1b20] uppercase tracking-wider">Stay Inquiry Details</h3>
              </div>

              {errorMsg && (
                <div className="bg-red-50 text-red-700 text-xs p-4 rounded-xl border border-red-100 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-[#7a7582]" />
                    <input 
                      type="text"
                      name="guestName"
                      value={formInquiry.guestName}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl pl-9 pr-4 py-3 text-[#1d1b20]"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Contact Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#7a7582]" />
                    <input 
                      type="tel"
                      name="guestPhone"
                      value={formInquiry.guestPhone}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl pl-9 pr-4 py-3 text-[#1d1b20]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-[#7a7582]" />
                    <input 
                      type="email"
                      name="guestEmail"
                      value={formInquiry.guestEmail}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl pl-9 pr-4 py-3 text-[#1d1b20]"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Retreat Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#cbc4d2]/20 pt-6">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Cottage Selection</label>
                  <select
                    name="cottageId"
                    value={formInquiry.cottageId}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-3 py-3 text-[#1d1b20]"
                  >
                    {COTTAGES.map(c => (
                      <option key={c.id} value={c.id}>{c.name} (${c.ratePerNight}/night)</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Retreat Protocol Program</label>
                  <select
                    name="packageId"
                    value={formInquiry.packageId}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-3 py-3 text-[#1d1b20]"
                  >
                    {RETREAT_PACKAGES.map(pkg => (
                      <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Arrival Date</label>
                  <input 
                    type="date"
                    name="startDate"
                    value={formInquiry.startDate}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-3 py-3 text-[#1d1b20]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Duration</label>
                    <select
                      name="nights"
                      value={formInquiry.nights}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-2 py-3 text-[#1d1b20]"
                    >
                      <option value={3}>3 Nights</option>
                      <option value={5}>5 Nights</option>
                      <option value={7}>7 Nights (Rec)</option>
                      <option value={14}>14 Nights</option>
                      <option value={21}>21 Nights</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Guests</label>
                    <select
                      name="guestsCount"
                      value={formInquiry.guestsCount}
                      onChange={handleInputChange}
                      className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-2 py-3 text-[#1d1b20]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#1d1b20] uppercase mb-1.5">Additional Health concerns or Special requests</label>
                  <textarea
                    name="additionalNotes"
                    value={formInquiry.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-3 py-3 text-[#1d1b20] outline-none"
                    placeholder="E.g., high blood pressure, back muscle stiffness, or gluten sensitivity..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#4f378a] hover:bg-[#4f378a]/90 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                id="submit-booking-inquiry-btn"
              >
                Submit Sanctuary Inquiry
              </button>
            </form>
          )}

          {/* Booking History List */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#cbc4d2]/30 shadow-md">
            <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#4f378a]" />
              Your Stay Inquiries ({bookings.length})
            </h3>

            {bookings.length === 0 ? (
              <div className="p-8 text-center text-sm text-[#7a7582] bg-[#FAF7F0] rounded-2xl border border-dashed border-[#cbc4d2]" id="no-bookings-view">
                No active inquiries found. Submit the form above to record your first stay.
              </div>
            ) : (
              <div className="space-y-4" id="bookings-history-list">
                {bookings.map((bk) => {
                  const cot = COTTAGES.find(c => c.id === bk.cottageId);
                  const pkg = RETREAT_PACKAGES.find(p => p.id === bk.packageId);
                  return (
                    <div 
                      key={bk.id} 
                      className="p-5 bg-[#FAF7F0] border border-[#cbc4d2]/40 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      id={`booking-history-item-${bk.id}`}
                    >
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-[#1d1b20]">{bk.guestName}</span>
                          <span className="px-2 py-0.5 text-[9px] font-bold rounded bg-[#ffdf93] text-[#503d00] uppercase tracking-wider">
                            {bk.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#494551]">
                          <strong>Accommodation:</strong> {cot ? cot.name : bk.cottageId} ({bk.nights} nights starting {bk.startDate})
                        </p>
                        <p className="text-xs text-[#494551]">
                          <strong>Wellness Protocol:</strong> {pkg ? pkg.name : bk.packageId} ({bk.guestsCount} {bk.guestsCount === 1 ? 'Adult' : 'Adults'})
                        </p>
                        <span className="text-[10px] text-[#7a7582] block">Submitted on {bk.createdAt}</span>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0">
                        <div className="text-left sm:text-right">
                          <span className="text-[10px] text-[#7a7582] uppercase font-bold block">Est. Bill</span>
                          <span className="text-sm font-extrabold text-[#4f378a]">${bk.totalEstimate}</span>
                        </div>
                        <button
                          onClick={() => handleCancelBooking(bk.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Cancel stay inquiry"
                          id={`cancel-booking-btn-${bk.id}`}
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Live Bill breakdown sidebar - 5 Cols */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#e1d4fd]/30 rounded-3xl p-6 border border-[#e1d4fd]/50">
            <h4 className="text-xs font-bold text-[#4f378a] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Prashanthavana Pure Water Promise
            </h4>
            <p className="text-xs text-[#4b4263] leading-relaxed">
              We contain zero processed plumbing lines. Our pure spring water is sourced directly from deep mountain aquifers, filtered through native vetiver root systems, and kept in heavy copper pitchers inside each room to ensure premium hydration.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-[#cbc4d2]/30 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffdf93]/10 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-2 border-b border-[#cbc4d2]/20 pb-4">
              <Calculator className="w-5 h-5 text-[#4f378a]" />
              <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider">Inquiry Budget Estimate</h3>
            </div>

            <div className="space-y-4 text-xs md:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-[#1d1b20] block">{selectedCottage.name}</span>
                  <span className="text-[#7a7582] text-[11px] font-medium">${selectedCottage.ratePerNight} x {formInquiry.nights} nights</span>
                </div>
                <span className="font-extrabold text-[#1d1b20]">${cottageTotal}</span>
              </div>

              <div className="flex justify-between items-start border-b border-[#cbc4d2]/20 pb-4">
                <div>
                  <span className="font-bold text-[#1d1b20] block">{selectedPkg.name}</span>
                  <span className="text-[#7a7582] text-[11px] font-medium">${selectedPkg.pricePerDay} /day medical program fee</span>
                </div>
                <span className="font-extrabold text-[#1d1b20]">${packageTotal}</span>
              </div>

              <div className="flex justify-between items-center text-sm pt-2">
                <span className="font-bold text-[#1d1b20] uppercase tracking-wider">Estimated Total</span>
                <span className="text-2xl font-black text-[#4f378a]">${totalInquiryEstimate}</span>
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F0] border border-[#cbc4d2]/30 rounded-xl space-y-2 text-xs text-[#494551]">
              <div className="flex items-center gap-2 text-green-700 font-bold uppercase text-[10px]">
                <Check className="w-3.5 h-3.5" /> Inclusive Highlights
              </div>
              <ul className="space-y-1 text-[11px] list-disc list-inside">
                <li>Three organic Sattvic meals served daily</li>
                <li>Comprehensive initial physician consult</li>
                <li>Unlimited yoga & forest walks</li>
                <li>Complimentary airport shuttle transition</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

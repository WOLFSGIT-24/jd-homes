import React, { useState } from 'react';
import { Tab, Treatment } from '../types';
import { TREATMENTS, COTTAGES } from '../data';
import { 
  Sparkles, Clock, ShieldAlert, Heart, RefreshCw, 
  ChevronDown, ChevronUp, DollarSign, Calculator, ChevronRight, Check
} from 'lucide-react';

interface TreatmentsTabProps {
  setActiveTab: (tab: Tab) => void;
  onPreFillBookingSetup?: (setup: { cottageId: string; nights: number; treatmentIds: string[] }) => void;
}

export default function TreatmentsTab({ setActiveTab, onPreFillBookingSetup }: TreatmentsTabProps) {
  const [filter, setFilter] = useState<'all' | 'detox' | 'rejuvenation' | 'stress' | 'pain'>('all');
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);

  // Calculator state
  const [selectedCottageId, setSelectedCottageId] = useState(COTTAGES[0].id);
  const [calcNights, setCalcNights] = useState(7);
  const [selectedTreatmentIds, setSelectedTreatmentIds] = useState<string[]>(['abhyanga']);

  const filteredTreatments = filter === 'all' 
    ? TREATMENTS 
    : TREATMENTS.filter(t => t.category === filter);

  const toggleExpandTreatment = (id: string) => {
    setExpandedTreatment(expandedTreatment === id ? null : id);
  };

  const handleTreatmentCheck = (id: string) => {
    if (selectedTreatmentIds.includes(id)) {
      setSelectedTreatmentIds(selectedTreatmentIds.filter(tid => tid !== id));
    } else {
      setSelectedTreatmentIds([...selectedTreatmentIds, id]);
    }
  };

  // Calculate costs
  const selectedCottage = COTTAGES.find(c => c.id === selectedCottageId) || COTTAGES[0];
  const roomCost = selectedCottage.ratePerNight * calcNights;
  
  const treatmentCost = selectedTreatmentIds.reduce((acc, tid) => {
    const treat = TREATMENTS.find(t => t.id === tid);
    return acc + (treat ? treat.cost : 0);
  }, 0);

  const mealCostPerDay = 30; // Sattvic meal surcharge if not package included
  const totalMealCost = mealCostPerDay * calcNights;

  const totalCost = roomCost + treatmentCost + totalMealCost;

  const handleApplyToBooking = () => {
    if (onPreFillBookingSetup) {
      onPreFillBookingSetup({
        cottageId: selectedCottageId,
        nights: calcNights,
        treatmentIds: selectedTreatmentIds
      });
    }
    setActiveTab('booking');
  };

  return (
    <div className="flex flex-col w-full font-body bg-[#FAF7F0]" id="treatments-tab-container">
      
      {/* Banner */}
      <section className="py-16 bg-[#FAF7F0]/30 border-b border-[#cbc4d2]/20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">Our Therapies</span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d1b20] mb-4 font-headline">Physician-Administered Healing</h1>
          <p className="text-sm md:text-base text-[#494551] font-light max-w-xl mx-auto leading-relaxed">
            All treatments are prescribed by our resident doctors after evaluating your current vikriti (imbalance), and are prepared on-site using organic wild-harvested herbs.
          </p>
        </div>
      </section>

      {/* Treatments Directory with Category Filters */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['all', 'detox', 'rejuvenation', 'stress', 'pain'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-[#4f378a] border-[#4f378a] text-white shadow-md' 
                  : 'bg-white border-[#cbc4d2] text-[#494551] hover:bg-[#cbc4d2]/10'
              }`}
              id={`treatment-filter-btn-${cat}`}
            >
              {cat === 'all' ? 'All Therapies' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredTreatments.map((treatment) => {
            const isExpanded = expandedTreatment === treatment.id;
            return (
              <div 
                key={treatment.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#cbc4d2]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                id={`treatment-card-${treatment.id}`}
              >
                <div>
                  {treatment.image && (
                    <div className="h-52 w-full overflow-hidden relative">
                      <img 
                        src={treatment.image} 
                        alt={treatment.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#4f378a] shadow-sm">
                        ${treatment.cost} • {treatment.duration}
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <span className="text-[10px] font-bold text-[#765b00] uppercase tracking-wider block mb-1">
                      {treatment.category} therapy
                    </span>
                    <h3 className="text-lg font-bold text-[#1d1b20] mb-3 font-headline">{treatment.name}</h3>
                    <p className="text-xs md:text-sm text-[#494551] leading-relaxed line-clamp-3">
                      {treatment.description}
                    </p>

                    {isExpanded && (
                      <div className="mt-6 pt-5 border-t border-[#cbc4d2]/20 space-y-4 animate-fadeIn">
                        <div>
                          <h4 className="text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-1">Primary Benefits</h4>
                          <p className="text-xs text-[#494551] leading-relaxed">{treatment.benefits}</p>
                        </div>
                        <div className="p-3 bg-[#e1d4fd]/20 rounded-xl border border-[#e1d4fd]/40">
                          <span className="text-[10px] font-bold text-[#4f378a] uppercase tracking-wider block mb-0.5">Therapy Method</span>
                          <p className="text-[11px] text-[#4b4263] leading-relaxed">
                            Includes organic cold-pressed oils cooked with root extracts for 48 hours. Performed in deep quiet with ambient forest soundscapes.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-between items-center border-t border-[#cbc4d2]/10 mt-4">
                  <span className="text-xs text-[#7a7582] font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#4f378a]" /> {treatment.duration}
                  </span>
                  <button
                    onClick={() => toggleExpandTreatment(treatment.id)}
                    className="flex items-center gap-1 text-xs font-bold text-[#4f378a] hover:underline cursor-pointer"
                    id={`treatment-expand-btn-${treatment.id}`}
                  >
                    {isExpanded ? (
                      <>Hide Details <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>View Full Details <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Stay & Treatment Budget Calculator */}
      <section className="py-24 bg-[#ece6ee]/50 border-t border-b border-[#cbc4d2]/30 w-full" id="budget-calculator-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">Personal Planner</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1b20] font-headline">Budget Estimator & Custom Stay Planner</h2>
            <p className="text-sm md:text-base text-[#494551] font-light leading-relaxed">
              Plan your retreat financials in real-time. Select your preferred accommodation, duration, and supplementary therapies to view your estimated statement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Input Selectors */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 shadow-md border border-[#cbc4d2]/30 space-y-8">
              
              {/* Cottage Selector */}
              <div>
                <h4 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4f378a]" />
                  1. Choose Your Vastu Cottage
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {COTTAGES.map(cottage => (
                    <button
                      key={cottage.id}
                      onClick={() => setSelectedCottageId(cottage.id)}
                      className={`text-left p-4 rounded-2xl border transition-all relative ${
                        selectedCottageId === cottage.id
                          ? 'border-[#4f378a] bg-[#4f378a]/5 shadow-sm ring-1 ring-[#4f378a]'
                          : 'border-[#cbc4d2]/60 hover:bg-[#cbc4d2]/10'
                      }`}
                      id={`calc-cottage-btn-${cottage.id}`}
                    >
                      <span className="text-xs font-bold text-[#1d1b20] block">{cottage.name}</span>
                      <span className="text-sm font-extrabold text-[#4f378a] mt-1.5 block">${cottage.ratePerNight}<span className="text-[10px] font-normal text-[#7a7582]">/night</span></span>
                      {selectedCottageId === cottage.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#4f378a] flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nights / Length of stay */}
              <div>
                <h4 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4f378a]" />
                  2. Duration of Sanctuary Stay
                </h4>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={calcNights}
                    onChange={(e) => setCalcNights(parseInt(e.target.value))}
                    className="w-full accent-[#4f378a]"
                    id="calc-nights-range"
                  />
                  <div className="px-5 py-2 bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl text-sm font-extrabold text-[#4f378a] shrink-0 min-w-[90px] text-center shadow-inner">
                    {calcNights} Nights
                  </div>
                </div>
                <span className="text-[11px] text-[#7a7582] mt-1 block font-medium">Ayurvedic detox cycles operate optimally in lengths of 7, 14, or 21 days.</span>
              </div>

              {/* Treatment Checkboxes */}
              <div>
                <h4 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4f378a]" />
                  3. Select Therapies to Add
                </h4>
                <div className="space-y-3">
                  {TREATMENTS.map(treat => {
                    const isChecked = selectedTreatmentIds.includes(treat.id);
                    return (
                      <div 
                        key={treat.id}
                        onClick={() => handleTreatmentCheck(treat.id)}
                        className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                          isChecked 
                            ? 'border-[#4f378a]/60 bg-[#e1d4fd]/20' 
                            : 'border-[#cbc4d2]/40 hover:bg-[#cbc4d2]/5 bg-[#FAF7F0]/40'
                        }`}
                        id={`calc-treatment-row-${treat.id}`}
                      >
                        <div className="flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => {}} // handled by row click
                            className="accent-[#4f378a] mt-1 shrink-0 cursor-pointer"
                          />
                          <div>
                            <span className="text-xs md:text-sm font-bold text-[#1d1b20] block leading-snug">{treat.name}</span>
                            <span className="text-[10px] text-[#7a7582] block mt-0.5 font-medium">{treat.duration} • {treat.category} therapeutic</span>
                          </div>
                        </div>
                        <span className="text-xs md:text-sm font-extrabold text-[#4f378a] shrink-0">${treat.cost}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bill Statement Output */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-[#cbc4d2]/40 relative overflow-hidden min-h-[450px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffdf93]/10 rounded-bl-full pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-[#cbc4d2]/20 pb-4">
                  <Calculator className="w-5.5 h-5.5 text-[#4f378a]" />
                  <h3 className="text-base font-bold text-[#1d1b20] uppercase tracking-wider">Estimated Statement</h3>
                </div>

                <div className="space-y-4">
                  {/* Cottage breakdown */}
                  <div className="flex justify-between items-start text-xs md:text-sm">
                    <div>
                      <span className="font-bold text-[#1d1b20] block">{selectedCottage.name}</span>
                      <span className="text-[#7a7582] text-[11px] font-medium">${selectedCottage.ratePerNight} x {calcNights} Nights</span>
                    </div>
                    <span className="font-extrabold text-[#1d1b20]">${roomCost}</span>
                  </div>

                  {/* Treatments Breakdown */}
                  <div className="flex justify-between items-start text-xs md:text-sm">
                    <div>
                      <span className="font-bold text-[#1d1b20] block">Ayurvedic Treatments Fee</span>
                      <span className="text-[#7a7582] text-[11px] font-medium">{selectedTreatmentIds.length} sessions selected</span>
                    </div>
                    <span className="font-extrabold text-[#1d1b20]">${treatmentCost}</span>
                  </div>

                  {/* Meals Breakdown */}
                  <div className="flex justify-between items-start text-xs md:text-sm border-b border-[#cbc4d2]/20 pb-4">
                    <div>
                      <span className="font-bold text-[#1d1b20] block">Complimentary Sattvic Cuisine</span>
                      <span className="text-[#7a7582] text-[11px] font-medium">Three personalized organic meals daily</span>
                    </div>
                    <span className="font-extrabold text-[#765b00]">Included</span>
                  </div>
                </div>
              </div>

              {/* Total Summary */}
              <div className="mt-8 pt-6 border-t border-[#cbc4d2]/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider">Estimated Statement Total</span>
                  <span className="text-3xl font-black text-[#4f378a]">${totalCost}</span>
                </div>

                <button
                  onClick={handleApplyToBooking}
                  className="w-full py-4 bg-[#4f378a] hover:bg-[#4f378a]/90 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                  id="apply-calculator-to-booking-btn"
                >
                  Apply Details to Stay Inquiry
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
                <span className="text-[10px] text-center text-[#7a7582] mt-3.5 block font-medium">All financial calculations are estimations. Official rates are customized during direct physician counseling.</span>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

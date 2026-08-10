import React, { useState } from 'react';
import { Tab } from '../types';
import { 
  Compass, Award, ShieldAlert, CheckCircle, ChevronDown, ChevronUp, 
  MapPin, Clock, Leaf, Info, Star 
} from 'lucide-react';

interface AboutUsTabProps {
  setActiveTab: (tab: Tab) => void;
}

export default function AboutUsTab({ setActiveTab }: AboutUsTabProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const doctors = [
    {
      name: 'Dr. Madhavan Pillai, BAMS',
      role: 'Chief Medical Acharya (35+ Years Experience)',
      bio: 'An expert in Panchakarma pulse reading (Nadi Pariksha) and toxic pathology removal. Dr. Pillai supervises all clinical formulations and reviews custom treatment streams daily.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmmNvza8cK8ues6m_M-tESnY65ltz9soOkbo4RDTlWBsr0sde9BqtHxPJklPxNNX1baOcSUSHfXHfWchK-nLcxh8nMMRDjBalSf57dCPIabneE9QIcXQpnnaVFzaxTHQ00bGK_oDyJuOBuoqhMDuPyJ-I-WzV_PfhCGRwubFtLDteftVjGFec7Fv1BtAJUPDZ4xvsQbK9Pg1-HTwOI7sjfuoFk-kkly1iYWQ-X-8GdzRWeKzrVoytJ'
    },
    {
      name: 'Dr. Arundhathi Sathyaprasad, MD',
      role: 'Senior Dravya Guna Botanist',
      bio: 'Specialist in clinical herbology and botanical extract preservation. She leads our dravya guna vana forest restoration and guarantees the purity of raw roots used for steam and oils.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSW7hoE6xPY6K3W__6pOhqhwU7cglkjWTURSGqd5lIW-TEGEHg8UMwd8skMWYfipsQZhoKNC5tvdPLuduvmO5l4Im3g3Kx8yO7yn_wUPD4d8YvbJkvvcmNqcCKMOczCj5mTPQUWyH-wyYgXtrYc9lDfPFKR9H-_LmdY5hKwf0mciQi2AMQ2XVyBpcgOPGUflzUd3HF6XvKjNgSMQ8E8CJNc5TC5knu1VuZCvV3k4LVT_PoHeuAaKvD'
    }
  ];

  const faqs = [
    {
      q: "What is your strict Wi-Fi and cell phone usage policy?",
      a: "To foster deep neural reset, Wi-Fi is strictly restricted. We have zero client Wi-Fi in cottages or treatment rooms. Cellular signals are naturally weak due to our remote mountain location. We request that guests keep devices inside their room safes during their stay to cultivate mental silence (Mauna)."
    },
    {
      q: "Are alcohol, caffeine, or tobacco allowed on-site?",
      a: "No. Tobacco, alcohol, recreational substances, non-prescribed external drugs, and highly caffeinated products are strictly prohibited on our campus. These substances disrupt the body's subtle energy channels (nadis) and actively interfere with our therapeutic herbs and detox protocols."
    },
    {
      q: "What clothing should I wear during my stay?",
      a: "We recommend light, loose-fitting organic cotton clothes. Due to the high-potency oils (such as sesame and neem) used during daily therapies, we provide complimentary organic therapeutic robes for treatment transitions. Loose whites and light creams are traditional and align with the Sattvic state."
    },
    {
      q: "Is it possible to receive a customized diet if I have celiac or nut allergies?",
      a: "Yes. Our doctors conduct a detailed allergen review during your initial physical check-in. Our master chef prepares completely separate allergen-safe clay pots for wheat-free (gluten-free) or nut-free Sattvic diets."
    },
    {
      q: "What are your check-in dates and recommended stay lengths?",
      a: "You can arrive on any day of the week, but we highly recommend checking in on Sundays to align with our weekly sunrise intro cycles. Due to the biological timescales required for deep cellular cleanse (Panchakarma), our minimum recommended length of stay is 7 days."
    }
  ];

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full font-body bg-[#FAF7F0]" id="about-us-tab-container">
      
      {/* Header Banner */}
      <section className="py-16 bg-[#FAF7F0]/30 border-b border-[#cbc4d2]/20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">Our Lineage</span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d1b20] mb-4 font-headline">Three Decades of Pure Devotion</h1>
          <p className="text-sm md:text-base text-[#494551] font-light max-w-xl mx-auto leading-relaxed">
            Founded in 1994, Prashanthavana is a globally recognized sanctuary committed to preserving classical, uncompromised Ayurvedic protocols.
          </p>
        </div>
      </section>

      {/* Main Philosophy / Vastu Architecture */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-[#4f378a] text-xs font-bold uppercase tracking-wider mb-2 block">Our Sanctum Layout</span>
          <h2 className="text-3xl font-bold text-[#1d1b20] mb-6 font-headline">Built with Vastu Shastra Wisdom</h2>
          <div className="w-12 h-1 bg-[#4f378a] mb-6 rounded-full" />
          
          <div className="space-y-4 text-sm md:text-base text-[#494551] leading-relaxed">
            <p>
              Vastu Shastra is the Vedic science of architecture. Every cottage, courtyard, and stream at Prashanthavana is mathematically aligned to support biological healing.
            </p>
            <p className="font-light">
              By positioning our treatment chambers directly facing the east, we capture the morning solar rays which contain high concentrations of therapeutic prana. This solar energy activates the medicated oils applied during Abhyanga, promoting cellular absorption.
            </p>
            <p className="font-light">
              To guarantee zero electromagnetic pollution, our sanctuary structures utilize hand-carved local laterite stone instead of steel girders, providing natural thermal insulation and complete earth connection.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3.5 p-4.5 bg-[#ffdf93]/20 rounded-2xl border border-[#ffdf93]/50">
            <Info className="w-5.5 h-5.5 text-[#765b00] shrink-0" />
            <p className="text-xs text-[#503d00] leading-relaxed">
              <strong>Please Note:</strong> Our campus maintains strict spiritual boundaries. Smoking, alcohol, and devices are prohibited within the courtyard boundaries to preserve pure healing energies.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-lg h-80 md:h-[450px] bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXYiV1k7eXi9EZs2msvU2ihC6BTvVQCB-HsFGvtHdWWeiORjI7M7TaZ0HzzzTmlTGPVW_3iKavdPm1AKV6G1ckkr5xhENM2vmZhtNdhyChJMLYdwyxhIPSHxuhjE3PlhjjNV9Uy6Nziacf4UoXJ1jBL8uNdU_QcLg_SA6XfgOmfjQLGPyg_ELl19PBR58xpF_EpWah8Y5Vcj_j-P_zWVTGsshYY2Q2P-2rdkyryFocFIrNXMxTI-hX')` }} />
      </section>

      {/* Resident Physicians Lineage Section */}
      <section className="py-24 bg-[#FAF7F0]/40 w-full" id="physicians-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">Our Guides</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1b20] font-headline">Meet Our Senior Physicians</h2>
            <p className="text-sm md:text-base text-[#494551] font-light leading-relaxed">
              Our clinical and botanical operations are supervised daily by certified, multi-generational Ayurvedic masters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {doctors.map((doc, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 md:p-8 border border-[#cbc4d2]/30 shadow-md flex flex-col md:flex-row gap-6 items-start"
                id={`doctor-card-${idx}`}
              >
                <img 
                  src={doc.image} 
                  alt={doc.name}
                  className="w-24 h-24 rounded-full object-cover shrink-0 border-2 border-[#4f378a]/20 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-3 text-left">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#1d1b20] leading-snug">{doc.name}</h3>
                    <span className="text-xs font-bold text-[#4f378a] uppercase tracking-wider block mt-0.5">{doc.role}</span>
                  </div>
                  <p className="text-xs md:text-sm text-[#494551] leading-relaxed font-light">
                    {doc.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Accordion FAQs */}
      <section className="py-24 max-w-4xl mx-auto w-full px-6" id="faq-section">
        <div className="text-center mb-16">
          <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">Common Questions</span>
          <h2 className="text-3xl font-bold text-[#1d1b20] font-headline">Sanctuary Rules & General FAQ</h2>
        </div>

        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#cbc4d2]/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="text-sm md:text-base font-bold text-[#1d1b20] leading-snug">
                    {faq.q}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-[#4f378a] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#7a7582] shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-[#494551] leading-relaxed font-light border-t border-[#cbc4d2]/15 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-[#7a7582] mb-4">Have other specific health inquiries or travel questions?</p>
          <button
            onClick={() => setActiveTab('booking')}
            className="px-6 py-2.5 bg-[#4f378a] hover:bg-[#4f378a]/90 text-white text-xs font-bold uppercase rounded-xl transition-all shadow-sm cursor-pointer"
            id="faq-booking-redirect-btn"
          >
            Ask a Doctor / Stay Inquiry
          </button>
        </div>
      </section>

    </div>
  );
}

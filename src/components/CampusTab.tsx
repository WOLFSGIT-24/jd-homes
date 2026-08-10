import React, { useState } from 'react';
import { Tab } from '../types';
import { 
  Compass, Sprout, ArrowRight, Calendar, Map, Check, X, 
  WifiOff, Apple, Info, ShieldAlert, Plane, Clock, Landmark
} from 'lucide-react';

interface CampusTabProps {
  setActiveTab: (tab: Tab) => void;
  onOpenBookingWithPackage?: (packageId: string) => void;
}

export default function CampusTab({ setActiveTab, onOpenBookingWithPackage }: CampusTabProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [shuttleAirport, setShuttleAirport] = useState<'kochi' | 'trivandrum'>('kochi');
  const [shuttleTime, setShuttleTime] = useState('14:00');
  const [shuttleCalculated, setShuttleCalculated] = useState(false);

  // Modal details
  const modalData: Record<string, { title: string; subtitle: string; content: string[]; image?: string }> = {
    forests: {
      title: "The Dravya Guna Vana (Medicinal Herb Forests)",
      subtitle: "Over 300 species of rare healing botanical flora",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1lIxNP0j6PV-jLNf2-ghRZZGctFk4r4RUJS3H6Xi2G3hj5h53y3KBjPBoUtMvVKH_Uj5bVt8eR6Bn3oAZGfrkHjNqX7mbAXmBoH_ZhNccvDN8CzODefbpgoUQPh4n_qqav2LHyr_OeQzT2FhVrqN2yAJHzPidIm0l3kpeHZijtMG1sumGtEgA1wV36oIuTzAIVlJCZou520NgTTBuh9mylEyd5V7hnOa6MciJTPfCSXvk8O48d7J",
      content: [
        "**Uncompromised Potency**: By harvesting fresh leaves, bark, and roots directly from our organic forest just minutes before treatments, our medicinal formulations retain 100% of their therapeutic volatile oils and active prana.",
        "**Key Botanical Species**: Explore dedicated groves of Ashwagandha (vigor), Brahmi (mental clarity), Tulsi (immunity), Neem (purification), and Amalaki (rejuvenation).",
        "**Guided Botanical Walks**: Every morning, our resident herbalist leads a silent walk explaining the botanical properties and traditional preparations of the forest flora."
      ]
    },
    sattvic: {
      title: "Sattvic Lifestyle & Principles",
      subtitle: "Aligning daily life with natural solar rhythms",
      content: [
        "**Circadian Harmony**: Guests wake with the Brahma Muhurta (the peaceful hour before sunrise, around 5:15 AM) to practice morning prayers and meditation, maximizing metabolic reset.",
        "**Mindful Silences (Mauna)**: Designated quiet hours, especially during meal times and from 9 PM onwards, allow the nervous system to rest and fully integrate therapeutic treatments.",
        "**Organic Sattvic Nutrition**: All meals are cooked using fresh farm ingredients, hand-pressed virgin oils, and raw forest honey. No garlic, onions, or refined sugars are used, ensuring a light, digestible, and mentally clarifying diet."
      ]
    },
    diet: {
      title: "Ayurvedic Culinary Therapy",
      subtitle: "Food as your first medicine (Ahara)",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOtxe3AJVWg-mLSV7Ezw1zKuY-aQjZ3sFWOUKpgXFDMSM-QFE1rpa8I0CMYuxRagH06_xDBboEpi9PuhCm0pJVwYlv1maZ-75BQfnmN2tYCy2pVsBoznmbyAaE7YLkWV3gbkjMa4CNQfMtdEQqVzg7aedRumuCCfUzOsAwa7brjRWAFuSo3UJGsB6q_Qju4cz9QgZy3Mp1ox32YFKBlm5b8TIxCImfwgtESOGwukhc0qVLAMnjPPBe",
      content: [
        "**Dosha-Specific Menus**: Our master chef collaborates daily with doctors to craft specific combinations of the six Ayurvedic tastes (sweet, sour, salty, bitter, pungent, astringent) to balance your current vikriti.",
        "**Fresh Clay-Pot Cooking**: Meals are prepared in traditional local earthenware and copper vessels, which balance food pH levels naturally and preserve bio-nutrients.",
        "**Sacred Eating Spaces**: We dine in open-sided pavilions facing nature, encouraging slow, tech-free eating that stimulates salivary secretions and peaceful digestion."
      ]
    },
    massage: {
      title: "Traditional Treatment Chambers",
      subtitle: "Sacred spaces constructed for deep physical release",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmmNvza8cK8ues6m_M-tESnY65ltz9soOkbo4RDTlWBsr0sde9BqtHxPJklPxNNX1baOcSUSHfXHfWchK-nLcxh8nMMRDjBalSf57dCPIabneE9QIcXQpnnaVFzaxTHQ00bGK_oDyJuOBuoqhMDuPyJ-I-WzV_PfhCGRwubFtLDteftVjGFec7Fv1BtAJUPDZ4xvsQbK9Pg1-HTwOI7sjfuoFk-kkly1iYWQ-X-8GdzRWeKzrVoytJ",
      content: [
        "**The Sacred Wood (Droni)**: Our massage tables are hand-carved from a single block of therapeutic Strychnos nux-vomica (Kanjiram) wood, known for absorbing and amplifying herbal oils.",
        "**Pure Laterite & Timber**: To prevent electromagnetic interference, our chambers contain zero steel reinforcement, utilizing native laterite stone and seasoned teak wood to insulate guests in absolute earth connection.",
        "**Controlled Temperature**: The temperature and gentle ventilation of our chambers are managed naturally to ensure open pores stay receptive to medicated steam and heavy oils."
      ]
    },
    distraction: {
      title: "Distraction-Free Boundaries & Wi-Fi Policy",
      subtitle: "An intentional digital sanctuary for mental restoration",
      content: [
        "**No Client Wi-Fi**: To guarantee a successful digital detox, internet access is strictly confined to the reception office for travel check-ins. No cellular routers or Wi-Fi networks operate in guest rooms.",
        "**Device Policy**: We kindly ask guests to leave phones, laptops, and tablets inside their room safes. Reading physical books, writing journals, and silent contemplation are deeply encouraged.",
        "**Nervous System Impact**: Removing blue light and notifications dramatically reduces cortisol production, allowing the brain's pineal gland to recover and restoring natural melatonin levels."
      ]
    },
    travel: {
      title: "Prashanthavana Travel & Arrival Guide",
      subtitle: "Seamless transport planning for your mental transition",
      content: [
        "**Airport Selection**: We recommend flying into Kochi International Airport (COK), which is 2.5 hours away, or Trivandrum International Airport (TRV), which is 4 hours away.",
        "**Complimentary Shuttle Service**: To isolate you from the local traffic stress, we provide private climate-controlled shuttles with a professional driver. Warm herbal tea and cold damp towels are provided on-board.",
        "**What to Bring**: Pack comfortable light cotton clothing, slip-on sandals, and basic toiletries. We provide organic cotton robes, copper water bottles, and all essential Ayurvedic hygiene herbal pastes."
      ]
    }
  };

  const handleOpenModal = (key: string) => {
    setActiveModal(key);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setShuttleCalculated(false);
  };

  return (
    <div className="flex flex-col w-full font-body bg-[#FAF7F0] text-[#1d1b20]">
      
      {/* Hero Section */}
      <section 
        className="relative w-full h-[640px] md:h-[750px] flex items-end pb-16 px-6 lg:px-12 -mt-20 pt-20 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6iiZ49xjmcUjk_jM4XOVkQi8f8SXAAUrI3Hz1bZIINsvt5AEyMYxuPoTcDT9BOQZI4Bd72NuSd8PZlFfJALfPWXV3v6MJog2ti70-__uOY3AWoV_N-_SutjxZV9tFtIaSdD14E4nugKVOaA5AQaTIVeUgnO2gvsb-tNbRUdB2VKHr8c4LI1MQTZOfqDqmkciCR5QE_Vr6NANl3XaRCfahrHHpjnc86A6nZhIzqBak8y0LnsI7QPpO')` }}
        id="campus-hero-section"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        
        <div className="relative z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase rounded-full bg-[#e0d2ff]/80 text-[#22005d] backdrop-blur-md">
            Prashanthavana Campus
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-lg font-headline">
            Sanctuary in the <br />
            <span className="italic font-light text-purple-100 opacity-95 font-serif">Peaceful Forest</span>
          </h1>
          <p className="text-base md:text-lg text-[#e6e0e9] max-w-2xl font-light leading-relaxed">
            Step out of the modern world and into an environment designed entirely for profound healing. Discover our distraction-free campus where traditional architecture meets untouched nature.
          </p>
        </div>
      </section>

      {/* Intro Text & Environment Core */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16" id="campus-intro-section">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1b20] mb-6 leading-tight font-headline">
            Healing begins with your surroundings.
          </h2>
          <div className="w-16 h-1 bg-[#765b00] mb-8 rounded-full" />
          <p className="text-[#494551] leading-relaxed mb-6 text-sm md:text-base">
            At Prashanthavana, we believe that environmental therapy is the crucial first step to recovery. Our campus is intentionally remote, situated amidst ancient medicinal forests to isolate you from daily stressors and digital fatigue.
          </p>
          <p className="text-[#494551] leading-relaxed text-sm md:text-base">
            Every structure is built according to Vastu Shastra principles using native laterite stone and seasoned timber, ensuring natural cooling and a profound energetic harmony with the earth beneath it.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div 
            className="col-span-1 rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-cover bg-center hover:scale-102 transition-transform duration-300"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXYiV1k7eXi9EZs2msvU2ihC6BTvVQCB-HsFGvtHdWWeiORjI7M7TaZ0HzzzTmlTGPVW_3iKavdPm1AKV6G1ckkr5xhENM2vmZhtNdhyChJMLYdwyxhIPSHxuhjE3PlhjjNV9Uy6Nziacf4UoXJ1jBL8uNdU_QcLg_SA6XfgOmfjQLGPyg_ELl19PBR58xpF_EpWah8Y5Vcj_j-P_zWVTGsshYY2Q2P-2rdkyryFocFIrNXMxTI-hX')` }}
            title="Kerala-style wood carving on laterite stone wall"
          />
          <div 
            className="col-span-1 rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-cover bg-center mt-12 hover:scale-102 transition-transform duration-300"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSW7hoE6xPY6K3W__6pOhqhwU7cglkjWTURSGqd5lIW-TEGEHg8UMwd8skMWYfipsQZhoKNC5tvdPLuduvmO5l4Im3g3Kx8yO7yn_wUPD4d8YvbJkvvcmNqcCKMOczCj5mTPQUWyH-wyYgXtrYc9lDfPFKR9H-_LmdY5hKwf0mciQi2AMQ2XVyBpcgOPGUflzUd3HF6XvKjNgSMQ8E8CJNc5TC5knu1VuZCvV3k4LVT_PoHeuAaKvD')` }}
            title="Tranquil courtyard with a central oil lamp and marigold decorations"
          />
        </div>
      </section>

      {/* The Gardens & Architecture Bento Grid */}
      <section className="py-24 bg-[#FAF7F0]/60 w-full relative overflow-hidden" id="campus-bento-section">
        <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-[#e1d4fd]/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-[600px] h-[600px] bg-[#ffdf93]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">The Grounds</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1b20] font-headline">Spaces Crafted for Calm</h2>
            </div>
            <p className="text-[#494551] max-w-md text-sm md:text-base leading-relaxed">
              Explore our sprawling medicinal plant gardens, dedicated yoga pavilions, and the traditional cottages where true healing unfolds. <strong className="text-[#4f378a]">Click any card to read deep-dive guidelines.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            
            {/* Large Feature Card: Medicinal Forests */}
            <div 
              onClick={() => handleOpenModal('forests')}
              className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-[#cbc4d2]/30"
              id="bento-medicinal-forests"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1lIxNP0j6PV-jLNf2-ghRZZGctFk4r4RUJS3H6Xi2G3hj5h53y3KBjPBoUtMvVKH_Uj5bVt8eR6Bn3oAZGfrkHjNqX7mbAXmBoH_ZhNccvDN8CzODefbpgoUQPh4n_qqav2LHyr_OeQzT2FhVrqN2yAJHzPidIm0l3kpeHZijtMG1sumGtEgA1wV36oIuTzAIVlJCZou520NgTTBuh9mylEyd5V7hnOa6MciJTPfCSXvk8O48d7J')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-[#ffdf93] text-xl">local_florist</span>
                  <span className="text-[#ffdf93] font-semibold text-xs tracking-wider uppercase">Dravya Guna Vana</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-headline">The Medicinal Forests</h3>
                <p className="text-[#e6e0e9] text-xs md:text-sm line-clamp-2 max-w-md">Over 300 species of rare indigenous herbs are cultivated on-site, ensuring the highest potency for our fresh preparations.</p>
              </div>
            </div>

            {/* Small Card 1: Sattvic Lifestyle */}
            <div 
              onClick={() => handleOpenModal('sattvic')}
              className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-[#e1d4fd] p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group cursor-pointer border border-[#cbc4d2]/30"
              id="bento-sattvic-lifestyle"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4f378a]/5 rounded-bl-full transition-transform group-hover:scale-130 duration-500" />
              <div>
                <span className="material-symbols-outlined text-[#4f378a] text-3xl mb-4">self_improvement</span>
                <h4 className="text-lg font-bold text-[#1f1635] leading-tight">Sattvic Lifestyle</h4>
              </div>
              <p className="text-xs md:text-sm text-[#4b4263] mt-4 leading-relaxed">Daily routines aligned with solar rhythms, mindful eating, and digital detoxification protocols.</p>
            </div>

            {/* Image Card 1: Banana Leaf Food */}
            <div 
              onClick={() => handleOpenModal('diet')}
              className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl overflow-hidden relative shadow-sm border border-[#cbc4d2]/20 cursor-pointer group"
              id="bento-banana-leaf-diet"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOtxe3AJVWg-mLSV7Ezw1zKuY-aQjZ3sFWOUKpgXFDMSM-QFE1rpa8I0CMYuxRagH06_xDBboEpi9PuhCm0pJVwYlv1maZ-75BQfnmN2tYCy2pVsBoznmbyAaE7YLkWV3gbkjMa4CNQfMtdEQqVzg7aedRumuCCfUzOsAwa7brjRWAFuSo3UJGsB6q_Qju4cz9QgZy3Mp1ox32YFKBlm5b8TIxCImfwgtESOGwukhc0qVLAMnjPPBe')` }}
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-white/90 rounded-full text-xs font-bold text-[#1d1b20]">Ahara Philosophy</span>
              </div>
            </div>

            {/* Image Card 2: Treatment Room */}
            <div 
              onClick={() => handleOpenModal('massage')}
              className="md:col-span-1 lg:col-span-1 row-span-1 rounded-3xl overflow-hidden relative shadow-sm border border-[#cbc4d2]/20 cursor-pointer group"
              id="bento-massage-room"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-750 group-hover:scale-105" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmmNvza8cK8ues6m_M-tESnY65ltz9soOkbo4RDTlWBsr0sde9BqtHxPJklPxNNX1baOcSUSHfXHfWchK-nLcxh8nMMRDjBalSf57dCPIabneE9QIcXQpnnaVFzaxTHQ00bGK_oDyJuOBuoqhMDuPyJ-I-WzV_PfhCGRwubFtLDteftVjGFec7Fv1BtAJUPDZ4xvsQbK9Pg1-HTwOI7sjfuoFk-kkly1iYWQ-X-8GdzRWeKzrVoytJ')` }}
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-white/90 rounded-full text-xs font-bold text-[#1d1b20]">The Healing Chamber</span>
              </div>
            </div>

            {/* Text Card 2: Wi-Fi Restriction */}
            <div 
              onClick={() => handleOpenModal('distraction')}
              className="md:col-span-2 lg:col-span-1 row-span-1 rounded-3xl bg-[#4f378a] text-white p-6 flex flex-col justify-between shadow-md relative overflow-hidden cursor-pointer"
              id="bento-wifi-restriction"
            >
              <div className="z-10 relative">
                <div className="flex items-center gap-2 mb-2">
                  <WifiOff className="w-4 h-4 text-[#ffdf93]" />
                  <span className="text-xs text-[#ffdf93] uppercase tracking-wider font-semibold">Sanctuary Rules</span>
                </div>
                <h4 className="text-lg font-bold mb-2 font-headline">Distraction-Free Environment</h4>
                <p className="text-purple-100 text-xs md:text-sm leading-relaxed mb-4">To facilitate deep nervous system reset, our campus intentionally limits Wi-Fi access to designated administrative areas only.</p>
              </div>
              <div className="flex items-center gap-2 text-[#ffdf93] text-xs font-bold z-10 relative hover:underline">
                Learn about our rules <ArrowRight className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Travel & Advance Booking Callout */}
      <section className="py-24 px-6 lg:px-12 w-full max-w-5xl mx-auto" id="campus-travel-section">
        <div className="bg-[#ece6ee] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-[#cbc4d2]/30 relative overflow-hidden">
          
          {/* Circular Animating Plane Graphic */}
          <div className="w-full md:w-1/3 flex justify-center relative">
            <div className="absolute inset-0 bg-[#4f378a]/10 rounded-full blur-2xl animate-pulse" />
            <div className="w-48 h-48 rounded-full border-4 border-dashed border-[#cbc4d2] flex items-center justify-center relative z-10">
              <div className="w-36 h-36 rounded-full bg-[#FAF7F0] shadow-inner flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <Plane className="w-12 h-12 text-[#4f378a]" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF7F0] rounded-full text-xs font-bold text-[#494551] uppercase tracking-widest w-max mb-6 shadow-sm border border-[#cbc4d2]/20">
              <span className="w-2 h-2 rounded-full bg-[#765b00] animate-ping" />
              Plan Your Journey
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#1d1b20] mb-4 font-headline">Remote, Yet Accessible.</h3>
            
            <p className="text-[#494551] leading-relaxed mb-8 text-sm md:text-base font-light">
              Due to the highly personalized nature of our long-term healing protocols, our campus operates at a strictly limited capacity. We recommend booking your stay at least 3-6 months in advance. We provide dedicated shuttle services from the nearest international airport to ensure a seamless transition into tranquility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActiveTab('booking')}
                className="px-8 py-4 bg-[#4f378a] hover:bg-[#4f378a]/90 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="inquire-availability-btn"
              >
                Inquire Availability
                <Calendar className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => handleOpenModal('travel')}
                className="px-8 py-4 bg-transparent border border-[#7a7582] text-[#1d1b20] hover:bg-[#e6e0e9] font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="view-travel-guide-btn"
              >
                View Travel Guide
                <Map className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bento Details Modal */}
      {activeModal && modalData[activeModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn" id="campus-detail-modal">
          <div className="bg-[#FAF7F0] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#cbc4d2]/40 relative">
            
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/15 text-white md:bg-[#cbc4d2]/20 md:text-[#1d1b20] hover:bg-black/25 md:hover:bg-[#cbc4d2]/40 transition-colors"
              id="close-campus-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {modalData[activeModal].image && (
              <div className="h-64 w-full overflow-hidden relative">
                <img 
                  src={modalData[activeModal].image} 
                  alt={modalData[activeModal].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F0] via-[#FAF7F0]/10 to-transparent" />
              </div>
            )}

            <div className="p-8">
              <span className="text-[#4f378a] text-xs font-bold uppercase tracking-wider block mb-2">
                {modalData[activeModal].subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1d1b20] mb-6 font-headline">
                {modalData[activeModal].title}
              </h3>

              <div className="space-y-4">
                {modalData[activeModal].content.map((paragraph, index) => {
                  // Format simple bold text markdown e.g. **Title**: Content
                  const isBold = paragraph.startsWith('**');
                  let title = '';
                  let body = paragraph;
                  
                  if (isBold) {
                    const match = paragraph.match(/^\*\*(.*?)\*\*(.*)/);
                    if (match) {
                      title = match[1];
                      body = match[2];
                    }
                  }

                  return (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-[#e1d4fd] flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-3 h-3 text-[#4f378a]" />
                      </div>
                      <p className="text-sm md:text-base text-[#494551] leading-relaxed">
                        {title ? <strong className="text-[#1d1b20]">{title}</strong> : null}
                        {body}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Special Addition: Interactive Shuttle Calculator in the Travel Guide modal */}
              {activeModal === 'travel' && (
                <div className="mt-8 pt-6 border-t border-[#cbc4d2]/30 bg-[#e1d4fd]/20 p-5 rounded-2xl">
                  <h4 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Plane className="w-4.5 h-4.5 text-[#4f378a]" />
                    Interactive Airport Shuttle Selector
                  </h4>
                  <p className="text-xs text-[#494551] mb-4">
                    Input your flight info to calculate matching complimentary shuttle schedules directly from our team.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold text-[#7a7582] uppercase mb-1">Arrival Airport</label>
                      <select 
                        value={shuttleAirport}
                        onChange={(e) => setShuttleAirport(e.target.value as any)}
                        className="w-full text-sm bg-white border border-[#cbc4d2] rounded-xl px-3 py-2 text-[#1d1b20]"
                      >
                        <option value="kochi">Kochi International (COK) - 2.5h</option>
                        <option value="trivandrum">Trivandrum International (TRV) - 4h</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#7a7582] uppercase mb-1">Estimated Flight Arrival Time</label>
                      <input 
                        type="time" 
                        value={shuttleTime}
                        onChange={(e) => setShuttleTime(e.target.value)}
                        className="w-full text-sm bg-white border border-[#cbc4d2] rounded-xl px-3 py-2 text-[#1d1b20]"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={() => setShuttleCalculated(true)}
                    className="w-full py-2 bg-[#4f378a] text-white text-xs font-bold uppercase rounded-xl hover:bg-[#4f378a]/90 transition-all cursor-pointer"
                  >
                    Calculate Shuttle Alignment
                  </button>

                  {shuttleCalculated && (
                    <div className="mt-4 p-4.5 bg-white border border-[#cbc4d2]/50 rounded-xl animate-fadeIn">
                      <div className="flex items-center gap-2 text-[#765b00] font-bold text-xs uppercase mb-1">
                        <Clock className="w-4 h-4 shrink-0" />
                        Shuttle Recommendation Found!
                      </div>
                      <p className="text-xs text-[#494551] leading-relaxed">
                        Based on your {shuttleTime} arrival at {shuttleAirport === 'kochi' ? 'Kochi' : 'Trivandrum'}, we recommend our **{shuttleAirport === 'kochi' ? '15:15' : '15:30'} Express Botanical Shuttle**. 
                        It will deliver you to Prashanthavana around **{shuttleAirport === 'kochi' ? '17:45' : '19:30'}**, just in time for your introductory wellness tea and evening relaxation walk.
                      </p>
                      <button 
                        onClick={() => {
                          handleCloseModal();
                          setActiveTab('booking');
                        }}
                        className="mt-3.5 w-full py-2 bg-[#765b00] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#765b00]/90 transition-all cursor-pointer"
                      >
                        Inquire Stay with Shuttle <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-[#cbc4d2]/30 flex justify-end">
                <button 
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 bg-[#4f378a] hover:bg-[#4f378a]/90 text-white text-sm font-bold rounded-full transition-colors cursor-pointer"
                >
                  Understood
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

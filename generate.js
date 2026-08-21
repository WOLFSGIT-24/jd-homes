const fs = require('fs');

const content = fs.readFileSync('src/components/HomeTab.tsx', 'utf8');

const sHero = content.indexOf('{/* Banner / Welcome */}');
const sMarquee = content.indexOf('{/* 4-Point USP Strip (Marquee) */}');
const sPhilosophy = content.indexOf('{/* Philosophy Callout */}');
const sInvestment = content.indexOf('{/* Investment Opportunity Section */}');
const sLifestyle = content.indexOf('{/* Lifestyle Experience Section */}');
const sAmenities = content.indexOf('{/* Amenities Section */}');
const sWhyUs = content.indexOf('{/* Why Us Section */}');
const sSchedule = content.indexOf('{/* Schedule Site Visit Section */}');
const sLocation = content.indexOf('{/* Location Advantage Section */}');
const sGallery = content.indexOf('{/* Gallery Section */}');
const sFAQ = content.indexOf('{/* FAQ Section */}');
const sEnd = content.indexOf('    </div>\n  );\n}');

const blocks = {
  imports: content.substring(0, sHero),
  hero: content.substring(sHero, sMarquee),
  marquee: content.substring(sMarquee, sPhilosophy),
  philosophy: content.substring(sPhilosophy, sInvestment),
  investment: content.substring(sInvestment, sLifestyle),
  lifestyle: content.substring(sLifestyle, sAmenities),
  amenities: content.substring(sAmenities, sWhyUs),
  whyUs: content.substring(sWhyUs, sSchedule),
  schedule: content.substring(sSchedule, sLocation),
  location: content.substring(sLocation, sGallery),
  gallery: content.substring(sGallery, sFAQ),
  faq: content.substring(sFAQ, sEnd),
  footer: content.substring(sEnd)
};

const formCard = `
          {/* Right Column: Form Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 shadow-2xl flex flex-col border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6">Schedule Your Visit</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-white/80">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-white/80">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-white/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-white/80">
                  Investment Range
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-white/20 bg-transparent text-white text-sm focus:outline-none focus:border-white transition-colors appearance-none [&>option]:text-black">
                  <option value="">Select range</option>
                  <option value="₹56L – ₹80L">₹56L – ₹80L</option>
                  <option value="₹80L – ₹1 Cr">₹80L – ₹1 Cr</option>
                  <option value="₹1 Cr+">₹1 Cr+</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-white/80">
                  Purchase Purpose
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-white/20 bg-transparent text-white text-sm focus:outline-none focus:border-white transition-colors appearance-none [&>option]:text-black">
                  <option value="">Select purpose</option>
                  <option value="Self Use / Weekend Home">Self Use / Weekend Home</option>
                  <option value="Investment">Investment</option>
                  <option value="Both">Both</option>
                  <option value="Exploring Options">Exploring Options</option>
                </select>
              </div>

              <button className="w-full bg-[#D4B47C] hover:bg-[#D4B47C]/90 text-black font-bold py-3.5 rounded-xl shadow-md transition-all mt-2">
                Request Details
              </button>
            </div>
          </div>
`;

let newHero = `
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left">
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

              <div className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Starting from <span className="text-[#D4B47C]">₹56 Lakhs*</span>
              </div>
            </div>
            
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0">
${formCard}
            </div>
          </div>
        </div>
      </section>
`;

const ctaBlock = \`
      {/* Standalone CTA */}
      <section className="w-full bg-[#FAF7F0] py-16 border-t border-[#cbc4d2]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#193A22] font-headline mb-4">Ready to Own a Piece of the Forest?</h2>
          <p className="text-[#494551] text-base md:text-lg mb-8">Experience Prashantha Vana firsthand. Schedule a no-obligation, personally guided site visit.</p>
          <button onClick={scrollToForm} className="bg-[#D4B47C] text-[#193A22] px-10 py-4 rounded-full font-bold text-sm hover:bg-[#b88c42] transition-colors shadow-lg">
            Schedule Your Visit
          </button>
        </div>
      </section>
\`;

const newContent = [
  blocks.imports,
  newHero,
  blocks.marquee,
  blocks.philosophy,
  blocks.lifestyle,
  blocks.gallery,
  blocks.location,
  blocks.amenities,
  blocks.whyUs,
  blocks.investment,
  ctaBlock,
  blocks.faq,
  blocks.schedule,
  blocks.footer
].join('');

fs.writeFileSync('src/components/HomeTab.tsx', newContent);
console.log("Rewrite successful");

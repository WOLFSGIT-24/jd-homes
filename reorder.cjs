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

// 1. Hero + Lead Form
// We need to inject the Form Card into the hero.
// First extract the Form Card from schedule block.
const formStart = blocks.schedule.indexOf('{/* Right Column: Form Card */}');
const formEnd = blocks.schedule.indexOf('</div>\n        </div>\n      </section>');
let formCard = blocks.schedule.substring(formStart, formEnd);
// The formCard currently has `bg-[#FAF7F0] rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col`. We might want it semi-transparent for the hero:
// Replace the background to match hero style or keep it as is.
formCard = formCard.replace('bg-[#FAF7F0]', 'bg-white/10 backdrop-blur-md border border-white/20');
formCard = formCard.replace(/text-xs font-bold text-\[\#193A22\]/g, 'text-xs font-bold text-white');
formCard = formCard.replace(/bg-white text-sm/g, 'bg-white/20 text-white placeholder-white/50 text-sm');
formCard = formCard.replace(/border-\[\#cbc4d2\]\/50/g, 'border-white/30');

// Modify Hero to be a two-column grid
let newHero = blocks.hero;
// Find where `<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-16">` is.
newHero = newHero.replace(
  '<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-16">',
  '<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-24 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">'
);
newHero = newHero.replace('</section>', '  ' + formCard + '\n          </div>\n        </div>\n      </section>');
// Remove the extra closing div that we appended because we changed the wrapper
newHero = newHero.replace('</div>\n        </div>\n        </div>\n      </section>', '</div>\n      </section>');

// Create standalone CTA block
const ctaBlock = `
      {/* Standalone CTA */}
      <section className="w-full bg-[#D4B47C] py-12 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#193A22] font-headline mb-2">Ready to Own a Piece of the Forest?</h2>
            <p className="text-[#193A22]/80 text-sm md:text-base">Experience Prashantha Vana firsthand. Schedule a no-obligation, personally guided site visit.</p>
          </div>
          <button onClick={scrollToForm} className="bg-[#193A22] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#0E2516] transition-colors shadow-lg whitespace-nowrap">
            Schedule Your Visit
          </button>
        </div>
      </section>
`;

// Reorder everything
// 1. Hero + Lead Form -> newHero
// 2. Project USP strip -> blocks.marquee
// 3. Why Prashantha Vana? -> blocks.philosophy + blocks.lifestyle
// 4. Project Gallery / Video -> blocks.gallery
// 5. Location & Connectivity -> blocks.location
// 6. Amenities -> blocks.amenities
// 7. Managed Farmland – How It Works -> blocks.whyUs
// 8. Why JD Homes? -> (part of whyUs, it already has JD homes sections)
// 9. Price + Plot Sizes -> blocks.investment
// 10. Site Visit CTA -> ctaBlock
// 11. FAQs -> blocks.faq
// 12. Final Lead Form + Contact Details -> blocks.schedule (the original untouched)

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
  blocks.schedule, // Schedule Site Visit Section
  blocks.footer
].join('');

fs.writeFileSync('src/components/newHomeTab.tsx', newContent);
console.log("Done");

import React, { useEffect } from 'react';
import { Tab } from '../types';

interface TermsTabProps {
  setActiveTab: (tab: Tab) => void;
}

export default function TermsTab({ setActiveTab }: TermsTabProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF7F0] min-h-screen pb-24">
      {/* Header Spacer */}
      <div className="pt-32 pb-16 bg-[#193A22] text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-headline">Terms & Conditions</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-16 text-[#494551] leading-relaxed space-y-8">
        <p>
          By accessing and using this website, you agree to be bound by these Terms and Conditions. This website is operated by the JD Homes Sales Team, an authorised marketing partner for JD Homes.
        </p>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">1. Website Purpose</h2>
          <p>
            This website has been created for the sole purpose of providing information and generating enquiries for Prashantha Vana, a premium managed farmland project near Gauribidanur, Karnataka. This is an authorised marketing website and operates in accordance with developer guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">2. Disclaimer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>This website is managed by an authorised sales/marketing partner.</li>
            <li>All images, renders, floor plans, and layouts shown are artistic impressions and may not represent the final product exactly.</li>
            <li>Prices, specifications, amenities, and availability are subject to change without prior notice.</li>
            <li>The developer reserves the right to make changes to the project as they deem fit in the interest of the development.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">3. Information Accuracy</h2>
          <p>
            While we strive to keep the information on this website accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information presented. Any reliance you place on such information is strictly at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">4. Enquiry & Communication</h2>
          <p>
            By submitting your contact details through any form on this website, you consent to being contacted by our team and/or the authorised Prashantha Vana sales team via phone, email, SMS, or WhatsApp regarding the project.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">5. Intellectual Property</h2>
          <p>
            All content on this website including text, images, logos, and design is either owned by or licensed to JD Homes and their respective marketing partners. Unauthorised reproduction, distribution, or modification of any material on this site is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">6. RERA Compliance</h2>
          <p className="mb-4">
            The project is registered under the Real Estate (Regulation and Development) Act, 2016 (RERA) applicable for projects in Karnataka.
          </p>
          <p className="mb-4">
            <strong>Karnataka RERA Registration No:</strong> Applicable as per Karnataka RERA regulations.
          </p>
          <p>
            Details are available on the official website: <a href="https://rera.karnataka.gov.in" target="_blank" rel="noreferrer" className="text-[#193A22] hover:underline font-bold">rera.karnataka.gov.in</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall JD Homes or their authorised marketing partners be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in relation to this website shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">9. Contact</h2>
          <p className="mb-4">For any queries regarding these terms, please contact the authorised sales team:</p>
          <ul className="space-y-2 text-[#1d1b20]">
            <li><strong>Project:</strong> Prashantha Vana | JD Homes</li>
            <li><strong>Phone:</strong> +91 9523879894</li>
            <li><strong>Email:</strong> mihirsantosh830@gmail.com</li>
            <li><strong>Location:</strong> 123 Wellness Way, Nature Valley</li>
          </ul>
        </section>

        <div className="pt-8">
          <button
            onClick={() => {
              setActiveTab('home');
              window.scrollTo(0, 0);
            }}
            className="text-[#193A22] font-bold hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { Tab } from '../types';

interface PrivacyPolicyTabProps {
  setActiveTab: (tab: Tab) => void;
}

export default function PrivacyPolicyTab({ setActiveTab }: PrivacyPolicyTabProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAF7F0] min-h-screen pb-24">
      {/* Header Spacer */}
      <div className="pt-32 pb-16 bg-[#193A22] text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-headline">Privacy Policy</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-16 text-[#494551] leading-relaxed space-y-8">
        <p>
          This website is operated by JD Homes Sales Team, the authorised marketing channel for Prashantha Vana | JD Homes, a premium managed farmland project near Gauribidanur, Karnataka. We are committed to protecting the privacy of every visitor to this website and handling your personal information with care, transparency, and respect.
        </p>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">1. Information We Collect</h2>
          <p className="mb-4">When you submit an enquiry form on this website, we collect the following personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>City / Location (if provided)</li>
            <li>Any message or query you submit</li>
          </ul>
          <p>
            We may also automatically collect non-personal technical data such as browser type, IP address, device type, and pages visited, solely for analytics and performance optimisation purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">Your personal information is used solely for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to your enquiry about Prashantha Vana</li>
            <li>Sharing digital brochures, floor plans, and project details</li>
            <li>Connecting you with the authorised Prashantha Vana sales team</li>
            <li>Sending relevant updates about the project, pricing, and launch events</li>
            <li>Personalising your experience on this website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">3. Data Sharing</h2>
          <p className="mb-4">
            We may share your information with JD Homes and their authorised sales representatives for the sole purpose of fulfilling your enquiry and following up on your interest in this project.
          </p>
          <p>
            We do not sell, rent, or trade your personal data to any third parties for marketing purposes unrelated to Prashantha Vana or JD Homes projects.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">4. Cookies & Tracking Technologies</h2>
          <p className="mb-4">
            This website uses cookies and tracking technologies — including Meta Pixel, Google Analytics, and Google Ads — for the purpose of:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Measuring advertising performance across platforms</li>
            <li>Understanding visitor behaviour and engagement on the website</li>
            <li>Optimising our marketing campaigns</li>
            <li>Providing relevant remarketing to interested audiences</li>
          </ul>
          <p>
            You may disable cookies through your browser settings; however, some features of this website may not function optimally as a result.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">5. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, or as required under applicable Indian law. Once the data is no longer needed, it is securely deleted or anonymised.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">6. Data Security</h2>
          <p>
            We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">7. Your Rights</h2>
          <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction of any inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Withdraw consent to marketing communications at any time</li>
            <li>Opt out of remarketing or targeted advertising</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the details provided below.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">8. Children's Privacy</h2>
          <p>
            This website is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a child has submitted personal information via this website, please contact us immediately so we may take appropriate action.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">9. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or applicable law. Updated versions will be posted on this page with a revised effective date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#1d1b20] mb-4">10. Contact Us</h2>
          <p className="mb-4">For any privacy-related queries, please reach out to the Prashantha Vana sales team:</p>
          <ul className="space-y-2 text-[#1d1b20]">
            <li><strong>Project:</strong> Prashantha Vana | JD Homes</li>
            <li><strong>Phone:</strong> +91 9523879894</li>
            <li><strong>Email:</strong> mihirsantosh830@gmail.com</li>
            <li><strong>Location:</strong> 123 Wellness Way, Nature Valley</li>
            <li><strong>RERA Reg. No.:</strong> Applicable as per Karnataka RERA regulations. Please verify on the official RERA Karnataka website.</li>
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

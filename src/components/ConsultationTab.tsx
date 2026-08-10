import React, { useState, useEffect } from 'react';
import { Tab, ConsultationInput, ConsultationResult } from '../types';
import { 
  Sparkles, ShieldAlert, Check, X, Clipboard, ArrowRight, Printer, 
  RefreshCw, Smile, Leaf, Moon, Flame, Brain, Dumbbell, Coffee, ClipboardCheck
} from 'lucide-react';

interface ConsultationTabProps {
  setActiveTab: (tab: Tab) => void;
  prefillDosha: 'vata' | 'pitta' | 'kapha' | null;
  onClearPrefillDosha: () => void;
}

export default function ConsultationTab({ setActiveTab, prefillDosha, onClearPrefillDosha }: ConsultationTabProps) {
  const [formInputs, setFormInputs] = useState<ConsultationInput>({
    name: '',
    age: '',
    primaryGoal: 'General Balance & Detox',
    sleepPattern: 'Normal / Sound',
    digestionQuality: 'Balanced / Regular',
    energyLevels: 'Balanced / Stable',
    stressLevel: 'Moderate',
    bodyFrame: 'Medium / Athletic',
    skinType: 'Normal'
  });

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ConsultationResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Apply prefill from home quiz
  useEffect(() => {
    if (prefillDosha) {
      if (prefillDosha === 'vata') {
        setFormInputs(prev => ({
          ...prev,
          bodyFrame: 'Thin / Slender / Small bone frame',
          skinType: 'Dry / Cold / Thin',
          sleepPattern: 'Light / Shallow / Interrupted',
          digestionQuality: 'Bloated / Bloat-prone / Irregular',
          energyLevels: 'Variable / Fluctuating / Quick bursts',
          primaryGoal: 'Stress Relief & Grounding'
        }));
      } else if (prefillDosha === 'pitta') {
        setFormInputs(prev => ({
          ...prev,
          bodyFrame: 'Medium / Athletic',
          skinType: 'Sensitive / Reddish / Acne-prone',
          sleepPattern: 'Moderate / Sleeps hot',
          digestionQuality: 'Sharp hunger / Prone to heartburn',
          energyLevels: 'Highly Focused / Prone to sudden burnout',
          primaryGoal: 'Mental Peace & Cooling'
        }));
      } else if (prefillDosha === 'kapha') {
        setFormInputs(prev => ({
          ...prev,
          bodyFrame: 'Heavy / Sturdy / Large bone frame',
          skinType: 'Oily / Soft / Thick',
          sleepPattern: 'Deep / Heavy / Hard to wake up',
          digestionQuality: 'Sluggish / Heavy after eating',
          energyLevels: 'Steady / Slow-paced / Patient',
          primaryGoal: 'Deep Detox & Vitality Resets'
        }));
      }
      onClearPrefillDosha(); // Clear prefill once applied
    }
  }, [prefillDosha]);

  // Loading animation sequence
  const loadingPhrases = [
    "Evaluating bodily elements (Panchamahabhutas)...",
    "Calculating probable dominant Dosha (Vata, Pitta, Kapha)...",
    "Sourcing dynamic diet recommendations (Sattvic Ahara)...",
    "Designing custom daily schedule (Dinacharya flow)...",
    "Tailoring botanical treatments and herbal extracts...",
    "Finalizing custom spiritual wellness guidance..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep(prev => (prev + 1) % loadingPhrases.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoadingStep(0);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInputs)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Server responded with an error');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Failed to complete consultation. Please verify that your GEMINI_API_KEY is configured.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyReport = () => {
    if (!result) return;
    const reportText = `
AYURVEDIC WELLNESS PLAN - PRASHANTHAVANA
Prepared for: ${formInputs.name || "Seeker"} (Age: ${formInputs.age || "N/A"})

DOMINANT DOSHA ANALYSIS:
${result.doshaAnalysis}

DIET PLAN:
Summary: ${result.dietPlan.summary}
Foods to Favor: ${result.dietPlan.foodsToFavor.join(', ')}
Foods to Avoid: ${result.dietPlan.foodsToAvoid.join(', ')}

DINACHARYA DAILY ROUTINE:
${result.dinacharya.map(d => `- [${d.timeOfDay}] ${d.practiceName}: ${d.description}`).join('\n')}

RECOMMENDED PRASHANTHAVANA TREATMENTS:
${result.treatments.map(t => `- ${t.name}: ${t.benefits}`).join('\n')}

HERBAL RECOMMENDATIONS:
${result.herbalRecommendations.map(h => `- ${h.herbName}: ${h.useInstructions}`).join('\n')}

LIFESTYLE ADVICE:
${result.lifestyleAdvice}
    `;

    navigator.clipboard.writeText(reportText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full font-body bg-[#FAF7F0]" id="consultation-tab-container">
      
      {/* Header Banner */}
      <section className="py-16 bg-[#FAF7F0]/30 border-b border-[#cbc4d2]/20 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#4f378a] font-bold tracking-widest uppercase text-xs mb-2 block">Physician AI Counseling</span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d1b20] mb-4 font-headline">Personalized Ayurvedic Consultant</h1>
          <p className="text-sm md:text-base text-[#494551] font-light max-w-xl mx-auto leading-relaxed">
            Harness our expert knowledge system powered by Gemini. Input your mental and physical qualities below to generate a highly detailed, custom Ayurvedic health analysis and retreat plan.
          </p>
        </div>
      </section>

      {/* Main consultation panel */}
      <section className="py-16 px-6 lg:px-12 max-w-5xl mx-auto w-full">
        
        {/* Loading Immersive State */}
        {loading && (
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#cbc4d2]/40 text-center min-h-[450px] flex flex-col items-center justify-center animate-pulse" id="consultation-loading-panel">
            <div className="w-20 h-20 rounded-full bg-[#4f378a]/10 flex items-center justify-center mb-8 border border-[#4f378a]/20 animate-spin">
              <Leaf className="w-10 h-10 text-[#4f378a]" />
            </div>
            <span className="text-xs font-bold text-[#7a7582] uppercase tracking-wider mb-2">Ayurvedic Master Analysis In Progress</span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1d1b20] font-headline mb-4 transition-all duration-500">
              {loadingPhrases[loadingStep]}
            </h3>
            <p className="text-xs text-[#494551] max-w-sm font-light leading-relaxed">
              Our AI system is cross-referencing your characteristics with ancient classical texts (Caraka Samhita & Ashtanga Hridaya) to synthesize an authentic daily routine.
            </p>
          </div>
        )}

        {/* Error panel */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 text-left flex items-start gap-4 animate-fadeIn" id="consultation-error-panel">
            <ShieldAlert className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-red-800">Failed to generate wellness consultation</h4>
              <p className="text-xs text-red-700 mt-1 leading-relaxed">
                {error}
              </p>
              <button 
                onClick={() => setError(null)}
                className="mt-3 px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
              >
                Dismiss & Retry
              </button>
            </div>
          </div>
        )}

        {/* Input Form Panel */}
        {!loading && !result && (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-[#cbc4d2]/30" id="consultation-form">
            <div className="flex items-center gap-2 mb-8 border-b border-[#cbc4d2]/20 pb-4">
              <Brain className="w-6 h-6 text-[#4f378a]" />
              <h3 className="text-base font-bold text-[#1d1b20] uppercase tracking-wider">Your Body-Mind Character Questionnaire</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Guest Name</label>
                <input 
                  type="text" 
                  value={formInputs.name}
                  onChange={(e) => setFormInputs({...formInputs, name: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Your Age</label>
                <input 
                  type="number" 
                  value={formInputs.age}
                  onChange={(e) => setFormInputs({...formInputs, age: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                  placeholder="Enter your age"
                  required
                />
              </div>

              {/* Primary Goal */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Primary Wellness Goal</label>
                <select 
                  value={formInputs.primaryGoal}
                  onChange={(e) => setFormInputs({...formInputs, primaryGoal: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                >
                  <option>General Balance & Detox</option>
                  <option>Stress Relief & Grounding</option>
                  <option>Pain Relief & Joint Mobility</option>
                  <option>Digestive Reset & Metabolic Kindle</option>
                  <option>Mental Peace & Cooling</option>
                </select>
              </div>

              {/* Sleep Pattern */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Sleep Patterns</label>
                <select 
                  value={formInputs.sleepPattern}
                  onChange={(e) => setFormInputs({...formInputs, sleepPattern: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                >
                  <option>Normal / Sound</option>
                  <option>Light / Shallow / Interrupted</option>
                  <option>Deep / Heavy / Hard to wake up</option>
                  <option>Irregular / Restless thoughts at night</option>
                </select>
              </div>

              {/* Digestion Quality */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Digestion Quality</label>
                <select 
                  value={formInputs.digestionQuality}
                  onChange={(e) => setFormInputs({...formInputs, digestionQuality: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                >
                  <option>Balanced / Regular</option>
                  <option>Bloated / Bloat-prone / Irregular</option>
                  <option>Sharp hunger / Prone to heartburn</option>
                  <option>Sluggish / Heavy after eating</option>
                </select>
              </div>

              {/* Energy Levels */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Energy & Focus Style</label>
                <select 
                  value={formInputs.energyLevels}
                  onChange={(e) => setFormInputs({...formInputs, energyLevels: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                >
                  <option>Balanced / Stable</option>
                  <option>Variable / Fluctuating / Quick bursts</option>
                  <option>Highly Focused / Prone to sudden burnout</option>
                  <option>Steady / Slow-paced / Patient</option>
                </select>
              </div>

              {/* Stress Level */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Current Stress Level</label>
                <select 
                  value={formInputs.stressLevel}
                  onChange={(e) => setFormInputs({...formInputs, stressLevel: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                >
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High / Burnout State</option>
                </select>
              </div>

              {/* Body Frame */}
              <div>
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Body Frame & Build</label>
                <select 
                  value={formInputs.bodyFrame}
                  onChange={(e) => setFormInputs({...formInputs, bodyFrame: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                >
                  <option>Medium / Athletic</option>
                  <option>Thin / Slender / Small bone frame</option>
                  <option>Heavy / Sturdy / Large bone frame</option>
                </select>
              </div>

              {/* Skin Type */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#1d1b20] uppercase tracking-wider mb-2">Natural Skin Qualities</label>
                <select 
                  value={formInputs.skinType}
                  onChange={(e) => setFormInputs({...formInputs, skinType: e.target.value})}
                  className="w-full text-sm bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl px-4 py-3 text-[#1d1b20] focus:ring-1 focus:ring-[#4f378a] outline-none"
                >
                  <option>Normal</option>
                  <option>Dry / Cold / Thin</option>
                  <option>Sensitive / Reddish / Acne-prone</option>
                  <option>Oily / Soft / Thick</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4.5 bg-[#4f378a] hover:bg-[#4f378a]/90 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              id="submit-consultation-form-btn"
            >
              Analyze & Generate Custom Wellness Plan
              <Sparkles className="w-5 h-5 text-[#ffdf93]" />
            </button>
          </form>
        )}

        {/* Dynamic Report Results screen */}
        {result && (
          <div className="space-y-8 animate-fadeIn" id="consultation-result-panel">
            
            {/* Header / Meta card */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#cbc4d2]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4f378a]/5 rounded-bl-full pointer-events-none" />
              <div>
                <span className="text-[#4f378a] text-xs font-bold uppercase tracking-wider block mb-1">Confidential Wellness Analysis</span>
                <h2 className="text-2xl font-bold text-[#1d1b20] font-headline">Personalized Plan for {formInputs.name || "Seeker"}</h2>
                <p className="text-xs text-[#7a7582] mt-1 font-medium">Prepared by Prashanthavana Acharya Master System • Est. {new Date().getFullYear()}</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={handleCopyReport}
                  className="p-3 bg-[#FAF7F0] border border-[#cbc4d2] rounded-xl hover:bg-[#4f378a]/5 text-[#4f378a] transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                  title="Copy Report to Clipboard"
                >
                  <Clipboard className="w-4 h-4" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button 
                  onClick={() => window.print()}
                  className="p-3 bg-white border border-[#cbc4d2] rounded-xl hover:bg-[#cbc4d2]/15 text-[#1d1b20] transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer animate-none"
                  title="Print Report"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>
              </div>
            </div>

            {/* Prakriti Dosha card */}
            <div className="bg-white rounded-3xl p-8 border border-[#cbc4d2]/30 shadow-md">
              <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#4f378a]" />
                1. Dominant Elements & Dosha Profile
              </h3>
              <p className="text-sm md:text-base text-[#494551] leading-relaxed font-light">
                {result.doshaAnalysis}
              </p>
              <div className="mt-4 p-4.5 bg-[#e1d4fd]/20 rounded-2xl border border-[#e1d4fd]/40 text-xs md:text-sm text-[#4b4263] leading-relaxed">
                <strong>Goal Relevance:</strong> {result.primaryGoalRelevance}
              </div>
            </div>

            {/* Diet plan card (Foods to favor / avoid) */}
            <div className="bg-white rounded-3xl p-8 border border-[#cbc4d2]/30 shadow-md">
              <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Coffee className="w-5 h-5 text-[#4f378a]" />
                2. Custom Sattvic Ahara Diet Plan
              </h3>
              <p className="text-sm text-[#494551] leading-relaxed mb-6 font-light">
                {result.dietPlan.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Favor */}
                <div className="bg-[#FAF7F0] border border-green-200 rounded-2xl p-6">
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest block mb-3 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Foods to Favor
                  </span>
                  <ul className="space-y-2.5">
                    {result.dietPlan.foodsToFavor.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-[#494551] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Avoid */}
                <div className="bg-[#FAF7F0] border border-red-200 rounded-2xl p-6">
                  <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest block mb-3 flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5" /> Foods to Minimize / Avoid
                  </span>
                  <ul className="space-y-2.5">
                    {result.dietPlan.foodsToAvoid.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-[#494551] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Dinacharya Daily timeline */}
            <div className="bg-white rounded-3xl p-8 border border-[#cbc4d2]/30 shadow-md">
              <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-6 flex items-center gap-2">
                <Moon className="w-5 h-5 text-[#4f378a]" />
                3. Dinacharya (Your Harmonizing Daily Schedule)
              </h3>

              <div className="space-y-6 relative border-l border-[#cbc4d2]/40 pl-6 ml-3">
                {result.dinacharya.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle marker */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#4f378a] border-4 border-white shadow-sm shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-[#765b00] uppercase tracking-wider block mb-0.5">
                        {item.timeOfDay} practice
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-[#1d1b20] font-headline">{item.practiceName}</h4>
                      <p className="text-xs md:text-sm text-[#494551] mt-1.5 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Treatments & Herbs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Treatments */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#cbc4d2]/30 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-[#4f378a]" />
                    Recommended Sanctuary Treatments
                  </h3>
                  <div className="space-y-4">
                    {result.treatments.map((t, idx) => (
                      <div key={idx} className="p-4 bg-[#e1d4fd]/10 rounded-2xl border border-[#e1d4fd]/35">
                        <span className="text-xs font-bold text-[#4f378a] block mb-1">{t.name}</span>
                        <p className="text-xs text-[#494551] leading-relaxed font-light">{t.benefits}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setActiveTab('treatments')}
                  className="mt-6 w-full py-3 bg-[#4f378a] text-white text-xs font-bold uppercase rounded-xl flex items-center justify-center gap-1 hover:bg-[#4f378a]/90 transition-all cursor-pointer"
                >
                  Explore Pricing & Schedules <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Herbs */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#cbc4d2]/30 shadow-md">
                <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#4f378a]" />
                  Custom Botanical Herb Therapy
                </h3>
                <div className="space-y-4">
                  {result.herbalRecommendations.map((h, idx) => (
                    <div key={idx} className="p-4 bg-[#ffdf93]/10 rounded-2xl border border-[#ffdf93]/35">
                      <span className="text-xs font-bold text-[#765b00] block mb-1">{h.herbName}</span>
                      <p className="text-xs text-[#494551] leading-relaxed font-light">{h.useInstructions}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Lifestyle and Yoga Advice */}
            <div className="bg-white rounded-3xl p-8 border border-[#cbc4d2]/30 shadow-md">
              <h3 className="text-sm font-bold text-[#1d1b20] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#4f378a]" />
                4. Mental Clarity, Yoga, & Forest Bathing Guidelines
              </h3>
              <p className="text-sm md:text-base text-[#494551] leading-relaxed font-light">
                {result.lifestyleAdvice}
              </p>
            </div>

            {/* Restart Consultation btn */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => {
                  setResult(null);
                }}
                className="px-8 py-4 bg-white border border-[#cbc4d2] text-[#4f378a] hover:bg-[#4f378a]/5 font-bold rounded-xl shadow-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                id="redo-consultation-btn"
              >
                Start New Consultation
                <RefreshCw className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className="px-8 py-4 bg-[#4f378a] hover:bg-[#4f378a]/90 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                id="consultation-to-booking-btn"
              >
                Inquire Stay With These Therapies
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}

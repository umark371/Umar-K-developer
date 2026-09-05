import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/siteConfig';
import { 
  Calculator, 
  HelpCircle, 
  Check, 
  MessageCircle, 
  Mail, 
  ArrowRight, 
  Sparkles,
  Layers,
  Clock,
  Code2
} from 'lucide-react';

interface PricingSectionProps {
  onApplyEstimatedScope: (scopeDetails: {
    type: string;
    pages: string;
    features: string[];
    timeline: string;
  }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onApplyEstimatedScope }) => {
  const [selectedType, setSelectedType] = useState('Business Website');
  const [selectedPages, setSelectedPages] = useState('3-5 Pages');
  const [selectedTimeline, setSelectedTimeline] = useState('Standard (7-10 Days)');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Mobile-First Design',
    'WhatsApp Direct Inquiry Routing',
    'Semantic SEO & Core Web Vitals'
  ]);

  const availableFeatures = [
    'Responsive Mobile-First Design',
    'WhatsApp Direct Inquiry Routing',
    'Semantic SEO & Core Web Vitals',
    'Custom Blogger XML Theme',
    'Interactive Quote / Calculator Logic',
    'Product Catalog & WhatsApp Ordering',
    'Custom Lead Intake Validation'
  ];

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleApplyToForm = () => {
    onApplyEstimatedScope({
      type: selectedType,
      pages: selectedPages,
      features: selectedFeatures,
      timeline: selectedTimeline,
    });
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getWhatsAppScopeMessage = () => {
    return `Hello Digital Developer, I used your scope configurator on your website:
• Project Type: ${selectedType}
• Estimated Pages: ${selectedPages}
• Timeline: ${selectedTimeline}
• Selected Features: ${selectedFeatures.join(', ')}

Please provide a custom proposal and quote.`;
  };

  return (
    <section id="pricing" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-800/50 px-3 py-1 rounded-full inline-block mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Custom Proposals Based on Your Exact Scope
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every business has distinct needs. Instead of inflexible generic packages or inflated retainers, we price fairly according to your exact page count, technical complexity, custom features, and delivery timeline.
          </p>
        </div>

        {/* 4 Cost Factor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5">Page Volume</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              From a single high-impact conversion landing page to a 15-page corporate site with dedicated service silos.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5">Custom Functionality</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Interactive calculators, custom Blogger XML modules, product filtering, or multi-field intake validations.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-3">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5">Delivery Timeline</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard steady milestones (7–14 days) or prioritized turnaround for urgent business product launches.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400 mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5">Design &amp; Assets</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Whether you provide full branding assets &amp; copy or need assistance structuring messaging and layout styling.
            </p>
          </div>
        </div>

        {/* Interactive Scope & Quote Configurator */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Interactive Scope Estimator</h3>
                <p className="text-xs text-slate-400">Select your preferences to outline your project requirements.</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-full self-start sm:self-auto">
              Fast Response Guaranteed
            </span>
          </div>

          <div className="space-y-6">
            {/* 1. Website Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                1. Select Website Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Landing Page', 'Business Website', 'E-Commerce Store', 'Blogger Website'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left transition-all cursor-pointer ${
                      selectedType === type
                        ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Number of Pages */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                2. Approximate Page Count
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Single Page', '2 to 4 Pages', '5 to 8 Pages', '9+ Pages'].map((pages) => (
                  <button
                    key={pages}
                    type="button"
                    onClick={() => setSelectedPages(pages)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      selectedPages === pages
                        ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {pages}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Key Feature Checkboxes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                3. Desired Features &amp; Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-2.5 rounded-lg border text-left text-xs font-medium flex items-center gap-2.5 transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-blue-950/40 text-blue-200 border-blue-700/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                        isChecked ? 'bg-blue-600 text-white' : 'border border-slate-700 bg-slate-900'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{feat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Timeline */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                4. Target Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'Urgent (3–5 Days)',
                  'Standard (7–10 Days)',
                  'Flexible (2–3 Weeks)'
                ].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTimeline(time)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      selectedTimeline === time
                        ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary Box & CTAs */}
            <div className="pt-6 border-t border-slate-800 bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Configured Scope:
                </span>
                <div className="text-sm font-bold text-white">
                  {selectedType} • {selectedPages} • {selectedTimeline.split(' ')[0]}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {selectedFeatures.length} features selected
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  id="pricing-apply-to-form-btn"
                  className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Apply to Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getWhatsAppUrl(getWhatsAppScopeMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pricing-whatsapp-quote-btn"
                  className="px-4 py-2.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-800 text-emerald-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
                  <span>Get Custom Quote on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

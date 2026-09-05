import React, { useState } from 'react';
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/siteConfig';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Clock,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
  initialPages?: string;
  initialFeatures?: string[];
  initialTimeline?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = 'Business Website',
  initialPages = '2 to 4 Pages',
  initialFeatures = [],
  initialTimeline = 'Standard (7–10 Days)'
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialProjectType);
  const [pageCount, setPageCount] = useState(initialPages);
  const [budgetRange, setBudgetRange] = useState('Standard Scope');
  const [timeline, setTimeline] = useState(initialTimeline);
  const [details, setDetails] = useState('');

  // Form errors state
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Update states if props change from scope estimator
  React.useEffect(() => {
    if (initialProjectType) setProjectType(initialProjectType);
    if (initialPages) setPageCount(initialPages);
    if (initialTimeline) setTimeline(initialTimeline);
  }, [initialProjectType, initialPages, initialTimeline]);

  const validate = (): boolean => {
    let isValid = true;

    // Validate Name
    if (!fullName.trim()) {
      setNameError('Please provide your name or business name.');
      isValid = false;
    } else if (fullName.trim().length < 2) {
      setNameError('Name must be at least 2 characters.');
      isValid = false;
    } else {
      setNameError('');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Please provide your email address so we can reply.');
      isValid = false;
    } else if (!emailRegex.test(email.trim())) {
      setEmailError('Please enter a valid email address (e.g. name@domain.com).');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const constructProjectSummary = (): string => {
    return `*Project Inquiry — ${SITE_CONFIG.brandName}*
Client Name: ${fullName.trim()}
Client Email: ${email.trim()}
Website Type: ${projectType}
Estimated Pages: ${pageCount}
Target Timeline: ${timeline}
Budget / Scope Preference: ${budgetRange}
${details.trim() ? `Project Notes / Requirements: ${details.trim()}` : ''}`;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructProjectSummary();
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank');
    setSubmittedMessage('Opening WhatsApp with your project specifications. We look forward to connecting!');
  };

  const handleSendViaEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructProjectSummary();
    const subject = `Website Project Inquiry: ${projectType} — ${fullName.trim()}`;
    const url = getMailtoUrl(subject, message);
    window.location.href = url;
    setSubmittedMessage('Opening your email client with your project specifications.');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Start Your Website Project
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Submit your requirements below to instantly launch a formatted project brief via WhatsApp or Email. We reply promptly within standard business hours.
          </p>

          {/* Standalone Quick Contact Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-standalone-whatsapp-btn"
              className="px-4 py-2.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-800/80 text-emerald-300 hover:text-emerald-200 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/20 text-emerald-400" />
              <span>WhatsApp Us Directly</span>
            </a>

            <a
              href={getMailtoUrl()}
              id="contact-standalone-email-btn"
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>

        {/* Single Scrollable Form Card */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          {submittedMessage && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/70 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
              <div>
                <p className="font-semibold">{submittedMessage}</p>
                <p className="text-xs text-emerald-400/80 mt-1">
                  You can also click the quick action buttons above anytime if your browser blocked popups.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSendToWhatsApp} noValidate className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label htmlFor="contact-full-name" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Your Name or Company <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="contact-full-name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (nameError) setNameError('');
                  }}
                  placeholder="e.g. Alex Henderson"
                  className={`w-full px-4 py-3 rounded-lg bg-slate-950 text-slate-100 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    nameError ? 'border-rose-500 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-500'
                  }`}
                />
                {nameError && (
                  <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{nameError}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Your Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  placeholder="e.g. alex@business.com"
                  className={`w-full px-4 py-3 rounded-lg bg-slate-950 text-slate-100 text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                    emailError ? 'border-rose-500 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-500'
                  }`}
                />
                {emailError && (
                  <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{emailError}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Website Type and Page Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Website Type
                </label>
                <select
                  id="contact-project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 text-slate-200 text-sm border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <option value="Business Website">Business Website</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="E-Commerce Store">E-Commerce Store</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                  <option value="Blogger Website">Blogger Website / Custom Template</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Custom Web Solution">Custom Web Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-page-count" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Estimated Pages
                </label>
                <select
                  id="contact-page-count"
                  value={pageCount}
                  onChange={(e) => setPageCount(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 text-slate-200 text-sm border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <option value="Single Page">Single Page (Landing Page)</option>
                  <option value="2 to 4 Pages">2 to 4 Pages</option>
                  <option value="5 to 8 Pages">5 to 8 Pages</option>
                  <option value="9+ Pages">9+ Pages</option>
                </select>
              </div>
            </div>

            {/* Row 3: Target Timeline & Budget Tier */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-timeline" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Target Timeline
                </label>
                <select
                  id="contact-timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 text-slate-200 text-sm border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <option value="Urgent (3–5 Days)">Urgent (3–5 Days)</option>
                  <option value="Standard (7–10 Days)">Standard (7–10 Days)</option>
                  <option value="Flexible (2–4 Weeks)">Flexible (2–4 Weeks)</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Scope / Budget Preference
                </label>
                <select
                  id="contact-budget"
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 text-slate-200 text-sm border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                >
                  <option value="Standard Scope">Standard Scope (Best Value)</option>
                  <option value="Essential Scope">Essential Scope (Lean &amp; Fast)</option>
                  <option value="Comprehensive Scope">Comprehensive Scope (Advanced Custom Work)</option>
                </select>
              </div>
            </div>

            {/* Row 4: Project Details */}
            <div>
              <label htmlFor="contact-details" className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                Project Details &amp; Specific Goals (Optional)
              </label>
              <textarea
                id="contact-details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Tell us about your business, reference websites you like, or any specific integrations needed..."
                className="w-full px-4 py-3 rounded-lg bg-slate-950 text-slate-100 text-sm border border-slate-800 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-y"
              />
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="submit"
                id="contact-submit-whatsapp-btn"
                className="flex-1 py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Send Inquiry to WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleSendViaEmail}
                id="contact-submit-email-btn"
                className="flex-1 py-3.5 px-6 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Send via Email Client</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No spam, no cold calls. We respect your privacy and only reply regarding your project.</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

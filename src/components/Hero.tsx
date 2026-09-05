import React from 'react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { ArrowRight, MessageCircle, Eye, ShieldCheck, Zap, Smartphone, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients - strictly restrained to avoid purple/blue clichés */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-950/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-blue-950/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quality Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for New Projects &amp; Custom Builds</span>
        </div>

        {/* Primary H1 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Custom Website Development{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            Engineered for Performance
          </span>
        </h1>

        {/* Supporting Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We design and build bespoke business websites, high-converting landing pages, e-commerce stores, and custom Blogger templates tailored precisely to your requirements.
        </p>

        {/* 3 CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 max-w-md sm:max-w-none mx-auto mb-16">
          {/* 1. Start a Project */}
          <button
            onClick={() => scrollTo('#contact')}
            id="hero-cta-start-project"
            className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* 2. View Our Work */}
          <button
            onClick={() => scrollTo('#portfolio')}
            id="hero-cta-view-work"
            className="px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>View Our Work</span>
          </button>

          {/* 3. WhatsApp Us */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-whatsapp"
            className="px-6 py-3.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/70 text-emerald-300 hover:text-emerald-200 font-semibold text-sm sm:text-base border border-emerald-800/80 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-400/20 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Core Pillars / Value Standards (No fake awards, real technical standards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-slate-800/80 text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Code className="w-3.5 h-3.5" />
              <span>Handcrafted Code</span>
            </div>
            <p className="text-xs text-slate-400">Clean, semantic HTML5 &amp; vanilla logic with zero bloated templates.</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile-First UX</span>
            </div>
            <p className="text-xs text-slate-400">Rigorously tested on phones and tablets with fluid thumb ergonomics.</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Speed &amp; SEO Ready</span>
            </div>
            <p className="text-xs text-slate-400">Sub-second load times and structured schema for top search visibility.</p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/60">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Developer</span>
            </div>
            <p className="text-xs text-slate-400">Direct technical communication with zero middleman misinterpretations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

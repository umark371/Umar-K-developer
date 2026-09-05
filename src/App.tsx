/**
 * Digital Developer — Professional Website Development Agency
 * 
 * Clean, responsive, high-performance web agency site featuring:
 * 1. Header with mobile navigation & quick actions
 * 2. Hero with value pillars and 3 direct CTAs
 * 3. 9 Core Services with feature breakdowns & direct WhatsApp/Quote triggers
 * 4. Case Studies Portfolio with category filters & deep-dive modal
 * 5. 8-Step Transparent Process ("How We Work")
 * 6. Pricing factors & Interactive Scope Estimator
 * 7. FAQ Accordion for common client inquiries
 * 8. Contact section with validated form, pre-filled WhatsApp/Email routing (private credentials)
 * 9. Footer, Floating WhatsApp button, Cookie notice, and complete Blogger XML / HTML exporter
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { BloggerCodeModal } from './components/BloggerCodeModal';

export default function App() {
  const [bloggerModalOpen, setBloggerModalOpen] = useState(false);

  // Form pre-fill state from services or scope estimator
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Business Website');
  const [selectedPageCount, setSelectedPageCount] = useState<string>('2 to 4 Pages');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Standard (7–10 Days)');

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    // Map service title to project type
    if (serviceTitle.includes('Landing')) {
      setSelectedProjectType('Landing Page');
      setSelectedPageCount('Single Page');
    } else if (serviceTitle.includes('Commerce')) {
      setSelectedProjectType('E-Commerce Store');
      setSelectedPageCount('5 to 8 Pages');
    } else if (serviceTitle.includes('Blogger')) {
      setSelectedProjectType('Blogger Website');
      setSelectedPageCount('2 to 4 Pages');
    } else if (serviceTitle.includes('Portfolio')) {
      setSelectedProjectType('Portfolio Website');
      setSelectedPageCount('2 to 4 Pages');
    } else if (serviceTitle.includes('Redesign')) {
      setSelectedProjectType('Website Redesign');
    } else if (serviceTitle.includes('Custom')) {
      setSelectedProjectType('Custom Web Solution');
    } else {
      setSelectedProjectType('Business Website');
    }

    // Smooth scroll to contact
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimatedScope = (scopeDetails: {
    type: string;
    pages: string;
    features: string[];
    timeline: string;
  }) => {
    setSelectedProjectType(scopeDetails.type);
    setSelectedPageCount(scopeDetails.pages);
    setSelectedFeatures(scopeDetails.features);
    setSelectedTimeline(scopeDetails.timeline);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* 1. Header */}
      <Header onOpenBloggerModal={() => setBloggerModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Services (9 Cards) */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 4. Portfolio Showcase */}
        <PortfolioSection />

        {/* 5. About / How We Work (8 Steps) */}
        <ProcessSection />

        {/* 6. Pricing & Scope Estimator */}
        <PricingSection onApplyEstimatedScope={handleApplyEstimatedScope} />

        {/* 7. FAQ Accordion */}
        <FaqSection />

        {/* 8. Contact Form (WhatsApp / Email pre-filled) */}
        <ContactSection
          initialProjectType={selectedProjectType}
          initialPages={selectedPageCount}
          initialFeatures={selectedFeatures}
          initialTimeline={selectedTimeline}
        />
      </main>

      {/* 9. Footer */}
      <Footer onOpenBloggerModal={() => setBloggerModalOpen(true)} />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Cookie Consent Notice */}
      <CookieBanner />

      {/* Blogger XML & Standalone HTML Template Exporter */}
      <BloggerCodeModal
        isOpen={bloggerModalOpen}
        onClose={() => setBloggerModalOpen(false)}
      />
    </div>
  );
}

import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/siteConfig';
import { Code2, MessageCircle, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="site-footer" className="bg-black border-t border-neutral-900 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Column 1: Brand & Blurb */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-black shadow-md shadow-emerald-500/20">
                <Code2 className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-extrabold tracking-tight">{SITE_CONFIG.brandName}</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
              {SITE_CONFIG.shortBio}
            </p>

            {/* Direct Action Buttons (No raw contact text shown) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-neutral-900 hover:bg-neutral-850 border border-emerald-900/60 hover:border-emerald-700 rounded-lg flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getMailtoUrl()}
                id="footer-email-btn"
                className="px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.navigation.map((nav) => (
                <li key={nav.name}>
                  <a
                    href={nav.href}
                    onClick={(e) => scrollToSection(e, nav.href)}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-emerald-400 transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-emerald-400 transition-colors">
                  High-Converting Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-emerald-400 transition-colors">
                  E-Commerce &amp; Product Catalogs
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-emerald-400 transition-colors">
                  Editorial &amp; CMS Platforms
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-emerald-400 transition-colors">
                  Website Redesign &amp; Optimization
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-emerald-400 transition-colors">
                  Semantic SEO &amp; Core Web Vitals
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-neutral-500">
            &copy; 2026 {SITE_CONFIG.brandName}. All rights reserved. Handcrafted with modern web standards.
          </p>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-emerald-400 transition-colors cursor-pointer py-1 px-2.5 rounded-md hover:bg-neutral-900 border border-transparent hover:border-neutral-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

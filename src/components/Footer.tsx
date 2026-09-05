import React from 'react';
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from '../config/siteConfig';
import { Code2, MessageCircle, Mail, ArrowUp, FileCode } from 'lucide-react';

interface FooterProps {
  onOpenBloggerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBloggerModal }) => {
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
    <footer id="site-footer" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Blurb */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Code2 className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-extrabold tracking-tight">{SITE_CONFIG.brandName}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {SITE_CONFIG.shortBio}
            </p>

            {/* Direct Action Buttons (No raw contact text shown) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="px-3.5 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-800/80 rounded-lg flex items-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getMailtoUrl()}
                id="footer-email-btn"
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Email Us</span>
              </a>

              <button
                onClick={onOpenBloggerModal}
                id="footer-blogger-template-btn"
                className="px-3.5 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Blogger XML Code</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SITE_CONFIG.navigation.map((nav) => (
                <li key={nav.name}>
                  <a
                    href={nav.href}
                    onClick={(e) => scrollToSection(e, nav.href)}
                    className="hover:text-white transition-colors"
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  High-Converting Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  E-Commerce &amp; Product Catalogs
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  Blogger XML Themes &amp; Widgets
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  Website Redesign &amp; Optimization
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors">
                  Semantic SEO &amp; Core Web Vitals
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            &copy; 2026 {SITE_CONFIG.brandName}. All rights reserved. Handcrafted with modern web standards.
          </p>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-slate-900"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

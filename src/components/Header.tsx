import React, { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { Menu, X, Code2, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-neutral-900 py-3 shadow-xl shadow-black/80'
          : 'bg-black/80 backdrop-blur-sm border-b border-neutral-900/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="header-brand-logo"
            className="flex items-center gap-2.5 text-neutral-100 font-bold text-lg sm:text-xl tracking-tight group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-black font-extrabold shadow-md shadow-emerald-500/30 group-hover:scale-105 group-hover:bg-emerald-400 transition-all duration-200">
              <Code2 className="w-5 h-5 stroke-[2.75]" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold tracking-tight text-white flex items-center gap-1.5">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-400/90">
                Web Development Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-neutral-300 hover:text-white rounded-md hover:bg-neutral-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-neutral-950 hover:bg-neutral-900 border border-emerald-900/70 hover:border-emerald-700/80 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              id="header-start-project-btn"
              className="px-4 py-2 text-xs sm:text-sm font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-lg shadow-md shadow-emerald-500/25 transition-all flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-400 bg-neutral-900 border border-emerald-900/60 rounded-lg"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-neutral-950/98 border-b border-neutral-900 px-4 pt-3 pb-6 mt-3 space-y-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {SITE_CONFIG.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block px-3 py-2.5 text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-lg transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm font-semibold text-emerald-400 bg-neutral-900 border border-emerald-900/70 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full py-2.5 text-sm font-bold text-black bg-emerald-500 hover:bg-emerald-400 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

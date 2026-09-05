import React from 'react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-slate-900/90 text-slate-200 text-xs font-semibold border border-slate-800 shadow-lg shadow-black/40 backdrop-blur-sm pointer-events-none">
        Chat with a Developer
      </span>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Digital Developer on WhatsApp"
        id="floating-whatsapp-btn"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all group relative cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-slate-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950" />
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};

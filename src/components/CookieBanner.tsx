import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isAccepted = localStorage.getItem('digital_dev_cookie_consent');
    if (!isAccepted) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('digital_dev_cookie_consent', 'accepted');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div
      id="cookie-consent-banner"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-40 p-4 rounded-xl bg-slate-900/95 border border-slate-800 text-slate-300 text-xs shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 text-slate-100 font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Privacy &amp; Site Cookies</span>
        </div>
        <button
          onClick={handleAccept}
          aria-label="Dismiss cookie notice"
          className="text-slate-400 hover:text-white p-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-slate-400 mb-3 leading-relaxed">
        We use essential local session storage to remember your project preferences and provide a fast, secure browsing experience with zero third-party tracking scripts.
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={handleAccept}
          id="cookie-accept-btn"
          className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { SITE_CONFIG, getGmailComposeUrl, getOutlookComposeUrl, getMailtoUrl } from '../config/siteConfig';
import { 
  X, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiryData?: {
    subject?: string;
    body?: string;
    clientName?: string;
    clientEmail?: string;
  };
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  inquiryData
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  if (!isOpen) return null;

  const subject = inquiryData?.subject || SITE_CONFIG.contact.emailSubject;
  const body = inquiryData?.body || '';

  const gmailUrl = getGmailComposeUrl(subject, body);
  const outlookUrl = getOutlookComposeUrl(subject, body);
  const mailtoUrl = getMailtoUrl(subject, body);

  const fallbackCopy = (text: string): boolean => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      textArea.remove();
      return success;
    } catch {
      return false;
    }
  };

  const handleCopyEmail = async () => {
    const textToCopy = SITE_CONFIG.contact.emailAddress;
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        ok = true;
      }
    } catch {
      ok = fallbackCopy(textToCopy);
    }
    if (!ok) ok = fallbackCopy(textToCopy);

    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyAll = async () => {
    const fullText = `To: ${SITE_CONFIG.contact.emailAddress}\nSubject: ${subject}\n\n${body || 'Hello Digital Developer, I would like to inquire about a web development project.'}`;
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(fullText);
        ok = true;
      }
    } catch {
      ok = fallbackCopy(fullText);
    }
    if (!ok) ok = fallbackCopy(fullText);

    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 3000);
  };

  const handleOpenMailto = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div
      id="email-dispatch-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="email-dispatch-modal"
        className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-black relative text-left animate-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="email-modal-close-btn"
          aria-label="Close email dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Direct Email Dispatch
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {inquiryData?.body ? 'Send Your Project Inquiry' : 'Email Digital Developer'}
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed">
          Select your preferred email provider below to open your composer with pre-filled project specifications, or copy the details directly:
        </p>

        {/* Feedback Alert if Copied */}
        {(copiedEmail || copiedAll) && (
          <div className="mb-5 p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              {copiedAll
                ? 'Full inquiry text and recipient address copied to clipboard!'
                : 'Agency email address copied to clipboard!'}
            </span>
          </div>
        )}

        {/* Options List */}
        <div className="space-y-3 mb-6">
          {/* 1. Gmail Web (Most reliable web mailer) */}
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="email-modal-gmail-btn"
            className="w-full p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-emerald-500/50 flex items-center justify-between transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-950/40 border border-red-800/50 flex items-center justify-center text-red-400 font-bold text-xs">
                G
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>Open in Gmail (Web)</span>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                </p>
                <p className="text-xs text-neutral-400">Opens browser Gmail in a new tab with draft ready</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
          </a>

          {/* 2. Outlook Web */}
          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="email-modal-outlook-btn"
            className="w-full p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-emerald-500/50 flex items-center justify-between transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-950/40 border border-blue-800/50 flex items-center justify-center text-blue-400 font-bold text-xs">
                O
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  Open in Outlook / Live (Web)
                </p>
                <p className="text-xs text-neutral-400">Opens Outlook.com composer in a new tab</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
          </a>

          {/* 3. System Default Email App */}
          <button
            type="button"
            onClick={handleOpenMailto}
            id="email-modal-system-btn"
            className="w-full p-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-emerald-500/50 flex items-center justify-between transition-all group cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  Open Default Desktop Mail App
                </p>
                <p className="text-xs text-neutral-400">Apple Mail, Outlook Desktop, or Windows Mail (mailto:)</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Divider */}
        <div className="pt-2 pb-4 border-t border-neutral-800/80 flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-400">Quick Copy Options:</span>
        </div>

        {/* Copy Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={handleCopyEmail}
            id="email-modal-copy-email-btn"
            className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-emerald-500/40 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>

          {body ? (
            <button
              type="button"
              onClick={handleCopyAll}
              id="email-modal-copy-inquiry-btn"
              className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-emerald-500/40 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedAll ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Inquiry Copied!</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy Full Inquiry Text</span>
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              Done
            </button>
          )}
        </div>

        {/* Collapsible Inquiry Preview (if inquiryData body is available) */}
        {body && (
          <div className="mt-4 pt-3 border-t border-neutral-800/60">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="w-full text-xs text-neutral-400 hover:text-neutral-200 flex items-center justify-between py-1 cursor-pointer"
            >
              <span>View Formatted Inquiry Preview</span>
              {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showDetails && (
              <pre className="mt-2 p-3 rounded-lg bg-black border border-neutral-850 text-[11px] text-neutral-300 whitespace-pre-wrap font-mono leading-relaxed max-h-40 overflow-y-auto">
                {body}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

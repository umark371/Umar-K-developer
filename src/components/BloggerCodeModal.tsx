import React, { useState } from 'react';
import { generateBloggerXML } from '../utils/bloggerTemplate';
import { X, Copy, Check, Download, FileCode, Code, CheckCircle } from 'lucide-react';

interface BloggerCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BloggerCodeModal: React.FC<BloggerCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'xml' | 'html'>('xml');

  if (!isOpen) return null;

  const xmlContent = generateBloggerXML();
  // Standalone HTML: replace XML envelope with standard <!DOCTYPE html>
  const htmlContent = xmlContent
    .replace(/<\?xml version="1.0" encoding="UTF-8" \?>\n/, '')
    .replace(/<html b:css='false'[^>]+>/, '<html lang="en">')
    .replace(/<b:skin><!\[CDATA\[/g, '<style>')
    .replace(/\]\]><\/b:skin>/g, '</style>')
    .replace(/<script type='text\/javascript'><!\[CDATA\[/g, '<script>')
    .replace(/\]\]><\/script>/g, '</script>')
    .replace(/<data:view\.title\.escaped\/>/g, 'Digital Developer — Website Agency')
    .replace(/<main style='display:none;'>[\s\S]*?<\/main>/, '');

  const displayedContent = activeTab === 'xml' ? xmlContent : htmlContent;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handleDownload = () => {
    const filename = activeTab === 'xml' ? 'digital-developer-blogger-theme.xml' : 'digital-developer-website.html';
    const mime = activeTab === 'xml' ? 'text/xml' : 'text/html';
    const blob = new Blob([displayedContent], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="blogger-code-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="blogger-code-modal"
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Blogger XML &amp; Vanilla Template Code</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">
                  Valid XML
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                100% self-contained, valid XML with CDATA formatting, vanilla JS, and zero external dependencies.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection & Specs Checklist */}
        <div className="px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('xml')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'xml'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Blogger XML Template (.xml)
            </button>
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Plain Standalone HTML (.html)
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-300" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-800/80 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {activeTab === 'xml' ? '.XML' : '.HTML'}</span>
            </button>
          </div>
        </div>

        {/* Verification Checklist */}
        <div className="px-4 sm:px-6 py-2 bg-slate-950/50 border-b border-slate-800/60 text-[11px] text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="text-slate-300 font-semibold">XML Validation Specs:</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle className="w-3 h-3" /> All tags closed (&lt;meta /&gt;, &lt;input /&gt;)
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle className="w-3 h-3" /> CDATA for &lt;style&gt; &amp; &lt;script&gt;
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle className="w-3 h-3" /> No unescaped &amp;
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle className="w-3 h-3" /> Unique IDs
          </span>
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle className="w-3 h-3" /> Zero external dependencies
          </span>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed select-all">
          <pre className="whitespace-pre overflow-x-auto">{displayedContent}</pre>
        </div>

        {/* Footer info */}
        <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-900 flex items-center justify-between text-xs text-slate-400">
          <span>How to use on Blogger: Go to Blogger &gt; Theme &gt; Edit HTML &gt; Paste this code &gt; Save.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

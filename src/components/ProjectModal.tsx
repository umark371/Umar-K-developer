import React, { useEffect } from 'react';
import { PortfolioProject } from '../types';
import { getWhatsAppUrl } from '../config/siteConfig';
import { X, Check, MessageCircle, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const inquiryMsg = `Hello Digital Developer, I reviewed your "${project.title}" (${project.category}) project in your portfolio and would like to discuss building a similar website.`;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal"
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black overflow-y-auto max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category, Location & Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-300">
            {project.category}
          </span>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-black border border-neutral-800 text-neutral-300">
            {project.clientLocation}
          </span>
          <span className="text-xs text-neutral-400">Case Study &amp; Technical Breakdown</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
          {project.summary}
        </p>

        {/* Challenge & Solution Grid */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-black border border-neutral-800/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400/90 mb-1.5">
              The Client Challenge:
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black border border-emerald-900/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5">
              Our Engineering Solution:
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features Implemented */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
            Key Features Implemented:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feat, i) => (
              <li key={i} className="text-xs text-neutral-300 flex items-start gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/60">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Technologies &amp; Architecture:</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-neutral-400">
            Want something similar for your company?
          </div>
          <a
            href={getWhatsAppUrl(inquiryMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4 fill-black/20" />
            <span>Inquire About Similar Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

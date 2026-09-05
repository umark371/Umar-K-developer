import React from 'react';
import { PROCESS_STEPS } from '../data/processData';
import { 
  FileText, 
  MessagesSquare, 
  Layout, 
  Code, 
  CheckSquare, 
  Sliders, 
  Send, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-4 h-4 text-emerald-400" />;
      case 'MessagesSquare': return <MessagesSquare className="w-4 h-4 text-emerald-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-emerald-400" />;
      case 'Code': return <Code className="w-4 h-4 text-emerald-400" />;
      case 'CheckSquare': return <CheckSquare className="w-4 h-4 text-emerald-400" />;
      case 'Sliders': return <Sliders className="w-4 h-4 text-emerald-400" />;
      case 'Send': return <Send className="w-4 h-4 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      default: return <Code className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 border-t border-neutral-900 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-3.5 py-1 rounded-full inline-block mb-3">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            A Structured, Transparent Development Process
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            No guesswork, hidden delays, or confusing jargon. We follow an orderly 8-step methodology ensuring your site is completed on schedule and matches your exact functional goals.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              id={`process-step-${step.stepNumber}`}
              className="rounded-xl bg-neutral-900/60 border border-neutral-800 p-5 flex flex-col justify-between hover:border-emerald-500/40 transition-colors group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-neutral-950 text-neutral-300 border border-neutral-800">
                    PHASE 0{step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {step.shortDescription}
                </p>
              </div>

              {/* Concrete Outcome */}
              <div className="pt-3 border-t border-neutral-800">
                <div className="flex items-start gap-1.5 text-[11px] text-neutral-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { 
  Briefcase, 
  Rocket, 
  ShoppingBag, 
  Palette, 
  Code2, 
  Layers, 
  RefreshCw, 
  Smartphone, 
  Search, 
  Check, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-rose-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-teal-400" />;
      case 'Search': return <Search className="w-5 h-5 text-yellow-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-1 rounded-full inline-block mb-3">
            Core Agency Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Bespoke Web Development Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every business has distinct demands. We build custom websites from scratch, engineered for speed, clean aesthetics, and seamless user experiences on any device.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700/80 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
            >
              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                    {getIconComponent(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {service.features.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons: WhatsApp Us & Request Quote */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-slate-600 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <a
                  href={getWhatsAppUrl(SITE_CONFIG.contact.serviceInquiryWhatsAppMessage(service.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Inquire about ${service.title} on WhatsApp`}
                  className="py-2 px-3 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-800/70 text-emerald-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/20" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { Eye, ArrowUpRight, Filter, Globe2 } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Business', 'Landing Pages', 'E-Commerce', 'Editorial', 'Portfolio', 'Custom Solutions'];
  const countries = [
    { label: 'All Regions', value: 'All', flag: '🌍' },
    { label: 'Pakistan', value: 'Pakistan', flag: '🇵🇰' },
    { label: 'India', value: 'India', flag: '🇮🇳' },
    { label: 'USA', value: 'USA', flag: '🇺🇸' },
    { label: 'UK', value: 'UK', flag: '🇬🇧' },
    { label: 'Russia', value: 'Russia', flag: '🇷🇺' },
  ];

  const filteredProjects = PORTFOLIO_DATA.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesCountry = selectedCountry === 'All' || p.clientCountry === selectedCountry;
    return matchesCategory && matchesCountry;
  });

  return (
    <section id="portfolio" className="py-20 sm:py-28 border-t border-neutral-900 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-3.5 py-1 rounded-full inline-block">
                International Client Work
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                PK • IN • US • UK • RU
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Global Client Projects &amp; Case Studies
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
              Proven digital solutions delivered for enterprise and business clients across Pakistan, India, the United States, the United Kingdom, and Russia.
            </p>
          </div>

          {/* Country Quick Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-neutral-400 font-semibold mr-1 flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                Region:
              </span>
              {countries.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setSelectedCountry(c.value)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCountry === c.value
                      ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Category Filter */}
        <div className="flex items-center gap-2 flex-wrap mb-10 pb-4 border-b border-neutral-900">
          <span className="text-xs text-neutral-400 font-semibold mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs rounded-md transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-neutral-800 text-emerald-300 font-bold border border-emerald-500/40'
                  : 'bg-black text-neutral-400 hover:text-neutral-200 border border-neutral-850'
              }`}
            >
              {cat}
            </button>
          ))}

          <span className="ml-auto text-xs text-neutral-400 font-mono">
            Showing {filteredProjects.length} of {PORTFOLIO_DATA.length} projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/50 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70 group"
            >
              {/* Visual Card Header / Mockup Preview */}
              <div className={`h-44 bg-gradient-to-br ${project.imagePlaceholderColor} border-b border-neutral-800/80 p-5 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 border border-neutral-800 text-emerald-400 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700/60" />
                  </div>
                </div>

                {/* Decorative wireframe lines */}
                <div className="space-y-2 opacity-25 group-hover:opacity-40 transition-opacity">
                  <div className="h-2 w-3/4 bg-white/70 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-white/50 rounded-full" />
                  <div className="h-1.5 w-5/6 bg-white/40 rounded-full" />
                </div>

                {/* Bottom preview info with Client Location */}
                <div className="flex items-center justify-between text-[11px] text-neutral-300 font-mono z-10">
                  <span className="truncate max-w-[190px] text-neutral-300">
                    {project.clientLocation}
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold shrink-0">
                    Case Study <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 font-semibold font-mono">
                      {project.clientCountry}
                    </span>
                    <span className="text-xs text-neutral-400 truncate">
                      {project.clientLocation}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 mb-4 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-750 text-neutral-200 hover:text-white text-xs font-semibold border border-neutral-700 hover:border-emerald-500/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Project Case Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

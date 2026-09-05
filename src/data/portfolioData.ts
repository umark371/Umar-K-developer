import { PortfolioProject } from '../types';

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'apex-logistics',
    title: 'Apex Global Logistics',
    category: 'Business',
    summary: 'Corporate web presence and freight inquiry portal for an international freight forwarding enterprise.',
    challenge: 'The client had an outdated 2014 site that loaded in 6.4 seconds, was unusable on mobile, and failed to capture corporate enterprise quote requests.',
    solution: 'Designed and engineered a modular business website with dynamic route calculators, clear service silos, and instant WhatsApp inquiry routing.',
    keyFeatures: [
      'Interactive route & container inquiry form',
      'Corporate service directories and compliance documentation',
      'Sub-800ms load time with pure semantic markup',
      'Integrated direct WhatsApp & email quote routing'
    ],
    techStack: ['HTML5 / Tailwind', 'Vanilla JavaScript', 'SEO Schema', 'WhatsApp API Integration'],
    imagePlaceholderColor: 'from-blue-900/40 to-slate-900/80',
    accentColor: '#3b82f6'
  },
  {
    id: 'nordic-living',
    title: 'Nordic Craft Furniture',
    category: 'E-Commerce',
    summary: 'Minimalist product catalog and direct-to-consumer artisanal home goods storefront.',
    challenge: 'High cart abandonment and confusing checkout hurdles caused by heavy off-the-shelf platform plugins and slow image rendering.',
    solution: 'Engineered a lightweight, fluid product gallery with instant variant previews and a streamlined direct WhatsApp checkout workflow.',
    keyFeatures: [
      'Dynamic product filters (material, room, price range)',
      'High-resolution optimized image gallery with zoom previews',
      'Direct WhatsApp order pre-filling with SKU & selected options',
      'Zero external tracking bloat for maximum page speed'
    ],
    techStack: ['Responsive Grid', 'Vanilla State Engine', 'WebP Asset Pipeline', 'Instant Order Routing'],
    imagePlaceholderColor: 'from-emerald-950/40 to-slate-900/80',
    accentColor: '#10b981'
  },
  {
    id: 'saas-convert',
    title: 'PulseAnalytics SaaS Launch',
    category: 'Landing Pages',
    summary: 'High-conversion B2B software product landing page with interactive ROI calculator.',
    challenge: 'The founders needed an impactful landing page before their product launch that could convert cold Google Ad traffic at above 6%.',
    solution: 'Crafted a single-page conversion powerhouse featuring interactive value metric calculators, clear feature comparisons, and zero distractions.',
    keyFeatures: [
      'Interactive interactive savings / ROI slider calculator',
      'Sticky header with smart progress indicator and direct CTA',
      'Zero-layout-shift (CLS = 0) font and layout orchestration',
      'Achieved a 9.4% lead conversion rate on early traffic'
    ],
    techStack: ['Conversion Architecture', 'Lightweight Micro-Interactions', 'Interactive DOM Sliders'],
    imagePlaceholderColor: 'from-cyan-950/40 to-slate-900/80',
    accentColor: '#06b6d4'
  },
  {
    id: 'tech-chronicle-blogger',
    title: 'The Tech Chronicle',
    category: 'Blogger',
    summary: 'Bespoke, magazine-grade Blogger XML template with responsive dark mode and AdSense slots.',
    challenge: 'A prominent tech publication wanted to remain on Google Blogger for zero-cost hosting and infinite traffic resilience, but needed a premium editorial look that did not resemble a default template.',
    solution: 'Authored an XML-valid, clean custom Blogger theme with modern typography, sticky reading progress, automated related posts, and responsive ad containers.',
    keyFeatures: [
      '100% compliant Blogger XML syntax with clean CDATA tags',
      'Custom categorized widget loops and trending article cards',
      'Built-in reading time estimator and social share triggers',
      '99/100 Google PageSpeed Insights score on mobile'
    ],
    techStack: ['Blogger XML Engine', 'CSS3 Variables', 'Vanilla JavaScript', 'Google AdSense Ready'],
    imagePlaceholderColor: 'from-amber-950/40 to-slate-900/80',
    accentColor: '#f59e0b'
  },
  {
    id: 'elena-architect',
    title: 'Elena Vance Architecture Studio',
    category: 'Portfolio',
    summary: 'Visual-first portfolio showcasing high-end residential architectural projects with editorial elegance.',
    challenge: 'Client needed to display large photography of luxury real estate without causing sluggish mobile page scrolling or layout jank.',
    solution: 'Built an editorial portfolio with responsive aspect-ratio wrappers, lazy loading, and deep-dive case study drawers that highlight architectural drawings.',
    keyFeatures: [
      'Full-bleed responsive image showcases with blur-up placeholders',
      'Curated architectural drawing and blueprint modal viewer',
      'Minimalist monochrome typography paired with high-contrast imagery',
      'Direct project consultation booking interface'
    ],
    techStack: ['Modern CSS Grid', 'IntersectionObserver Lazy Loading', 'Accessible Dialog UX'],
    imagePlaceholderColor: 'from-stone-900/40 to-slate-900/80',
    accentColor: '#a8a29e'
  },
  {
    id: 'solar-quote-calc',
    title: 'Helios Solar Estimator',
    category: 'Custom Solutions',
    summary: 'Interactive residential solar savings calculator and project intake tool.',
    challenge: 'Homeowners were confused by complex kilowatt formulas and hesitated to fill out standard dry contact forms.',
    solution: 'Developed an engaging multi-input step-by-step interactive calculator that models rooftop solar savings and routes qualified leads directly to the engineering team.',
    keyFeatures: [
      'Visual roof orientation and average monthly electric bill selector',
      'Instant real-time estimated annual savings computation',
      'Automated summary compilation sent via WhatsApp or Email',
      'Lightweight vanilla JavaScript with no bloated external dependencies'
    ],
    techStack: ['Vanilla JavaScript', 'Custom Math Engine', 'Inline Form Validation', 'Instant WhatsApp Payload'],
    imagePlaceholderColor: 'from-indigo-950/40 to-slate-900/80',
    accentColor: '#6366f1'
  }
];

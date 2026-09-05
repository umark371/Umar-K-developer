import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortDesc: 'Credible, high-converting corporate websites tailored to establish authority and generate qualified client inquiries.',
    fullDesc: 'We architect bespoke multi-page business websites designed specifically around your customer journey. From clean service presentations to corporate lead funnels, our builds focus on trust, clear messaging, and measurable business growth.',
    features: [
      'Multi-page architecture with strategic information hierarchy',
      'High-conversion lead capture and inquiry workflows',
      'Company profiles, team directories, and service portfolios',
      'Ultra-fast load times optimized for professional credibility'
    ],
    deliverables: ['Custom Brand Layout', 'Mobile Responsive Views', 'Lead Funnel Forms', 'Analytics & Meta Setup'],
    icon: 'Briefcase',
    badge: 'Popular'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    shortDesc: 'Laser-focused, single-page promotional and product launch funnels built for maximum conversion rates.',
    fullDesc: 'Distraction-free landing pages crafted to turn visitors into buyers or leads. Whether you are running paid ad campaigns, launching a digital product, or driving event registrations, our pages are engineered with conversion psychology and zero bloat.',
    features: [
      'Focused single-goal layout with zero cognitive friction',
      'Above-the-fold value proposition and compelling call-to-actions',
      'Integrated social proof, feature breakdowns, and FAQs',
      'Sub-second first contentful paint (FCP) for high ad ROI'
    ],
    deliverables: ['Direct Response Layout', 'A/B Testing Readiness', 'Direct WhatsApp/Email CTA', 'Speed Optimization'],
    icon: 'Rocket',
    badge: 'High Conversion'
  },
  {
    id: 'ecommerce-websites',
    title: 'E-Commerce Websites',
    shortDesc: 'Seamless online stores and catalog sites with frictionless product browsing and checkout processes.',
    fullDesc: 'Modern shopping experiences that present your products with crisp imagery, intuitive filtering, and seamless cart or direct-order capabilities. Built to keep checkout abandonment low and customer confidence high.',
    features: [
      'Structured product catalogs with category filtering and search',
      'Responsive product detail pages with variant selections',
      'Direct WhatsApp order integration or payment gateways',
      'Inventory-ready layout structure and order notification setup'
    ],
    deliverables: ['Catalog & Product Views', 'Shopping Cart / Direct Order', 'Secure Checkout Flow', 'Mobile Payment UX'],
    icon: 'ShoppingBag'
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    shortDesc: 'Distinctive personal and agency portfolios designed to showcase your creative and technical work with impact.',
    fullDesc: 'Tailored for architects, consultants, creative agencies, photographers, and independent professionals. We emphasize visual storytelling, case studies, and effortless contact channels that book high-value clients.',
    features: [
      'Interactive project galleries with filterable categories',
      'Deep-dive case study layouts with problem-solution storytelling',
      'Resume/CV integration and verified credentials presentation',
      'Discreet direct contact triggers and calendar booking links'
    ],
    deliverables: ['Custom Gallery Showcase', 'Project Detail Modals', 'Interactive Media Embeds', 'Contact Triggers'],
    icon: 'Palette'
  },
  {
    id: 'blogger-websites',
    title: 'Blogger Websites',
    shortDesc: 'Custom Blogger XML templates, responsive theme engineering, widget integrations, and speed optimization.',
    fullDesc: 'Blogger is a powerhouse of free, reliable Google hosting with zero server maintenance. We handcraft clean, modern Blogger XML themes that break free of generic templates—offering lightning-fast loading, full responsive flexibility, and clean schema markup.',
    features: [
      '100% compliant Blogger XML markup (closed tags, CDATA safe, error-free)',
      'Modern, magazine, editorial, or portfolio layout paradigms',
      'Custom widget integration (recent posts, featured slider, newsletter)',
      'AdSense-ready placements without degrading user experience'
    ],
    deliverables: ['Complete Blogger XML File', 'Installation & Setup Guide', 'Custom Widget Styling', 'AdSense Optimization'],
    icon: 'Code2',
    badge: 'Specialized'
  },
  {
    id: 'custom-web-solutions',
    title: 'Custom Web Solutions',
    shortDesc: 'Tailored calculators, quote generators, client portals, and bespoke web tools built strictly to your logic.',
    fullDesc: 'When off-the-shelf templates and plugins fall short, we build custom interactive front-ends and web utilities. We translate your specific operational logic into fast, lightweight, and dependable web applications.',
    features: [
      'Interactive cost estimators, calculators, and intake tools',
      'Dynamic filtering, search engines, and data viewers',
      'Third-party API integration and custom webhook triggers',
      'Vanilla JavaScript architecture with zero heavy library weight'
    ],
    deliverables: ['Custom Logic Engine', 'Form Validation & Handlers', 'Clean Documented Code', 'Cross-Browser Verification'],
    icon: 'Layers'
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDesc: 'Transform outdated, sluggish, or underperforming websites into sleek, modern, high-speed digital assets.',
    fullDesc: 'Give your existing web presence a complete architectural and aesthetic overhaul. We analyze your current pain points, preserve your hard-earned SEO rankings, modernize your visual branding, and drastically improve speed and mobile usability.',
    features: [
      'Complete visual modernization aligned with modern design standards',
      'URL structure mapping and 301 redirect retention for SEO safety',
      'Code refactoring to eliminate legacy bloat and slow scripts',
      'Enhanced mobile touch ergonomics and accessibility'
    ],
    deliverables: ['Before/After Audit', 'Design System Modernization', 'SEO Migration Preservation', 'Performance Boost'],
    icon: 'RefreshCw'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    shortDesc: 'Flawless visual presentation and effortless ergonomics across all smartphones, tablets, and desktop screens.',
    fullDesc: 'Over 65% of web traffic originates on mobile devices. Every build we deliver is tested rigorously across real iOS and Android viewport sizes, ensuring fluid typography, comfortable touch targets, and zero horizontal scroll anomalies.',
    features: [
      'Mobile-first responsive fluid grids and dynamic layouts',
      'Ergonomic thumb-zone friendly navigation and buttons (44px+ touch targets)',
      'Adaptive image scaling and bandwidth-aware asset delivery',
      'Cross-platform testing on Chrome, Safari, Firefox, and Edge'
    ],
    deliverables: ['Device Breakpoint Audits', 'Touch Ergonomics Tuning', 'Fluid Typography Scales', 'Cross-Device QA'],
    icon: 'Smartphone'
  },
  {
    id: 'seo-friendly-development',
    title: 'SEO-Friendly Development',
    shortDesc: 'Semantic HTML5 structure, Open Graph tags, Core Web Vitals excellence, and fast crawlability built right in.',
    fullDesc: 'Great design is meaningless if search engines cannot index your content. We write clean semantic markup, strict heading hierarchies, rich metadata, fast-loading assets, and schema structures that help your site rank higher from day one.',
    features: [
      'Strict semantic HTML5 heading hierarchy (H1, H2, H3)',
      'Comprehensive Open Graph & Twitter card social preview cards',
      'Core Web Vitals tuning (LCP, FID/INP, and CLS minimization)',
      'XML sitemap and robots.txt configuration guidance'
    ],
    deliverables: ['Semantic Markup Audit', 'Open Graph Metadata', 'Core Web Vitals Pass', 'Search Console Ready'],
    icon: 'Search'
  }
];

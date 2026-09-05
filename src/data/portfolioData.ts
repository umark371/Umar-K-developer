import { PortfolioProject } from '../types';

export const PORTFOLIO_DATA: PortfolioProject[] = [
  // --- PAKISTAN CLIENTS ---
  {
    id: 'al-buraq-logistics-pk',
    title: 'Al-Buraq Global Logistics & Cargo',
    category: 'Business',
    clientCountry: 'Pakistan',
    clientLocation: 'Karachi & Lahore, Pakistan 🇵🇰',
    summary: 'Corporate enterprise freight, customs clearance, and container tracking web portal for one of Pakistan’s premier supply chain operators.',
    challenge: 'Legacy portal had slow 5-second mobile load times, broken quotation inquiries, and poor international client conversions.',
    solution: 'Engineered a modern, responsive enterprise platform featuring real-time container inquiry forms, bilingual Urdu/English service guides, and instant direct WhatsApp cargo team routing.',
    keyFeatures: [
      'Interactive seaport/airport shipment quote calculator',
      'Instant direct WhatsApp dispatch to Karachi port clearing agents',
      'Lightweight bilingual performance under 650ms on 4G networks',
      'Corporate compliance, NTN & chamber certification showcase'
    ],
    techStack: ['Tailwind CSS', 'Vanilla JavaScript', 'Local Storage State', 'WhatsApp Multi-Agent Routing'],
    imagePlaceholderColor: 'from-emerald-950/70 to-neutral-950',
    accentColor: '#10b981'
  },
  {
    id: 'desicraft-apparel-pk',
    title: 'Rung-e-Noor Artisanal Couture',
    category: 'E-Commerce',
    clientCountry: 'Pakistan',
    clientLocation: 'Islamabad & Faisalabad, Pakistan 🇵🇰',
    summary: 'Luxury festive pret and hand-embroidered bridal wear digital catalog with bespoke WhatsApp order routing.',
    challenge: 'High cart abandonment on generic e-commerce platforms and difficult size customization handling for overseas Pakistani diaspora customers.',
    solution: 'Designed a high-speed editorial showcase with instant fabric zoom, currency converter (PKR, USD, GBP), and 1-click WhatsApp size consultation checkout.',
    keyFeatures: [
      'High-resolution zero-jank image zoom with WebP optimization',
      'Multi-currency price toggle (PKR, USD, AED, GBP)',
      'Direct WhatsApp order pre-filling with size, fabric SKU & address',
      'Bespoke bridal consultation scheduling calendar'
    ],
    techStack: ['Responsive Grid', 'WebP Media Pipeline', 'Instant Order Routing', 'Accessible Modal UX'],
    imagePlaceholderColor: 'from-emerald-950/80 to-neutral-950',
    accentColor: '#10b981'
  },

  // --- INDIA CLIENTS ---
  {
    id: 'kalyan-fintech-in',
    title: 'Kalyan Wealth & Equity Advisors',
    category: 'Custom Solutions',
    clientCountry: 'India',
    clientLocation: 'Bengaluru & Mumbai, India 🇮🇳',
    summary: 'Interactive financial portal with dynamic SIP compound interest calculators and SEBI-compliant risk assessment intake forms.',
    challenge: 'Potential investors bounced from static text pages without understanding mutual fund growth and tax-saving yields under Indian brackets.',
    solution: 'Created an engaging multi-tier portfolio modeling calculator with real-time graph visualizations and instant lead capture to SEBI-certified advisors.',
    keyFeatures: [
      'Interactive SIP, Lumpsum & Step-up ROI calculator sliders',
      'Instant financial summary download and WhatsApp advisory booking',
      'Sub-second page load times compliant with Indian telecom speeds',
      'Zero-cookie tracking for financial privacy'
    ],
    techStack: ['Dynamic SVG Math Engine', 'Vanilla JavaScript', 'Tailwind CSS', 'Lead Intake Engine'],
    imagePlaceholderColor: 'from-emerald-950/60 to-neutral-950',
    accentColor: '#34d399'
  },
  {
    id: 'indus-ayurveda-in',
    title: 'VedaHerbals Wellness & Botanicals',
    category: 'E-Commerce',
    clientCountry: 'India',
    clientLocation: 'Kochi & New Delhi, India 🇮🇳',
    summary: 'Direct-to-consumer organic wellness marketplace with dosha assessment quiz and localized payment routing.',
    challenge: 'Complex herbal catalog had low repeat purchases and confused users trying to select the right herbal formulations.',
    solution: 'Built an interactive 60-second Ayurvedic body-type diagnostic quiz that maps recommendations directly to product bundles.',
    keyFeatures: [
      'Interactive Dosha & skin-type diagnostic assessment tool',
      'Curated herbal combo builder with instant volume discounts',
      'Streamlined UPI & WhatsApp quick-order options',
      '100/100 Core Web Vitals score on mobile devices'
    ],
    techStack: ['Micro-Interactions', 'Quiz State Engine', 'Fast CSS Grid', 'Direct Order API'],
    imagePlaceholderColor: 'from-emerald-950/50 to-neutral-950',
    accentColor: '#10b981'
  },

  // --- USA CLIENTS ---
  {
    id: 'pulse-analytics-us',
    title: 'PulseAnalytics B2B SaaS Launch',
    category: 'Landing Pages',
    clientCountry: 'USA',
    clientLocation: 'San Francisco, California, USA 🇺🇸',
    summary: 'High-conversion B2B software product landing page with interactive ROI calculator and SOC-2 compliance showcase.',
    challenge: 'Founders needed an ultra-sharp conversion engine before their Silicon Valley funding round to achieve >7% visitor-to-demo conversion.',
    solution: 'Engineered a conversion powerhouse with interactive cloud cost savings calculator, verified customer testimonials, and instant calendar booking.',
    keyFeatures: [
      'Interactive interactive savings / ROI slider calculator',
      'Sticky header with progress indicator and instant demo booking',
      'Zero-layout-shift (CLS = 0) typography and layout orchestration',
      'Achieved a verified 9.4% demo request conversion rate'
    ],
    techStack: ['Conversion Architecture', 'Lightweight Micro-Interactions', 'Interactive DOM Sliders', 'Cal Booking Integration'],
    imagePlaceholderColor: 'from-emerald-950/60 to-neutral-950',
    accentColor: '#34d399'
  },
  {
    id: 'apex-horizon-us',
    title: 'Apex Horizon Cold-Chain Logistics',
    category: 'Business',
    clientCountry: 'USA',
    clientLocation: 'Austin & Houston, Texas, USA 🇺🇸',
    summary: 'Enterprise temperature-controlled freight logistics portal for pharmaceutical and perishable supply chains across North America.',
    challenge: 'Corporate pharmaceutical shippers required verifiable DOT compliance documents and 24/7 emergency dispatch lines.',
    solution: 'Designed an industrial-grade web presence with refrigerated reefers fleet directory, automated RFQ form, and nationwide dispatch links.',
    keyFeatures: [
      'Instant temperature-spec RFQ generator and dispatch routing',
      'Federal DOT and FDA safety compliance verification center',
      'Sub-800ms load time with pure semantic markup',
      '24/7 hotline integration with multi-channel dispatch'
    ],
    techStack: ['Semantic HTML5', 'Tailwind Grid', 'SEO Schema Structured Data', 'Instant RFQ Routing'],
    imagePlaceholderColor: 'from-emerald-950/70 to-neutral-950',
    accentColor: '#10b981'
  },

  // --- UK CLIENTS ---
  {
    id: 'british-tech-chronicle-uk',
    title: 'The Tech Chronicle Magazine UK',
    category: 'Editorial',
    clientCountry: 'UK',
    clientLocation: 'London & Manchester, UK 🇬🇧',
    summary: 'High-traffic technology and venture capital editorial magazine platform with responsive dark mode and instant article search.',
    challenge: 'A growing London publication suffered from WordPress database lag during breaking news spikes and needed an uncompromisingly fast site.',
    solution: 'Engineered a modern, lightweight editorial platform with clean typography, reading time estimators, and instant category filters.',
    keyFeatures: [
      'Custom categorized article loops and trending stories feed',
      'Built-in reading time estimator and social share triggers',
      'Distraction-free reading view with sticky header progress',
      '99/100 Google PageSpeed Insights mobile score'
    ],
    techStack: ['Modern Semantic Web', 'CSS Variables', 'Vanilla JavaScript', 'SEO Article Schema'],
    imagePlaceholderColor: 'from-emerald-950/80 to-neutral-950',
    accentColor: '#10b981'
  },
  {
    id: 'kensington-interiors-uk',
    title: 'Kensington & Mayfair Living',
    category: 'Portfolio',
    clientCountry: 'UK',
    clientLocation: 'London & Edinburgh, UK 🇬🇧',
    summary: 'Editorial architectural portfolio showcasing luxury prime London residential conversions and bespoke interior estates.',
    challenge: 'Client needed to display large uncompressed photography of luxury real estate without causing sluggish mobile page scrolling.',
    solution: 'Built an editorial portfolio with responsive aspect-ratio wrappers, lazy loading, and deep-dive case study drawers highlighting floor plans.',
    keyFeatures: [
      'Full-bleed responsive image showcases with blur-up placeholders',
      'Curated architectural drawing and blueprint modal viewer',
      'Minimalist monochrome typography paired with high-contrast imagery',
      'Direct project consultation booking interface'
    ],
    techStack: ['Modern CSS Grid', 'IntersectionObserver Lazy Loading', 'Accessible Dialog UX'],
    imagePlaceholderColor: 'from-neutral-900 to-neutral-950',
    accentColor: '#34d399'
  },

  // --- RUSSIA CLIENTS ---
  {
    id: 'vektor-architects-ru',
    title: 'Vektor Architectural Bureau',
    category: 'Portfolio',
    clientCountry: 'Russia',
    clientLocation: 'Moscow & Saint Petersburg, Russia 🇷🇺',
    summary: 'Minimalist industrial portfolio for a renowned architectural bureau specializing in sustainable commercial towers and cultural pavilions.',
    challenge: 'Previous heavy flash-derivative site was unusable on modern mobile browsers and failed to showcase complex 3D CAD renders.',
    solution: 'Engineered an ultra-clean, brutalist-inspired architectural showcase with full-bleed project drawers, high-DPI blueprint zoom, and project inquiry routing.',
    keyFeatures: [
      'Full-bleed editorial photography gallery with fluid transitions',
      'Interactive project blueprint & masterplan modal explorer',
      'Bilingual Russian/English project specifications',
      'Direct architect inquiry and RFP submission intake'
    ],
    techStack: ['High-Performance CSS Grid', 'Touch-Optimized Gallery', 'Semantic Markup', 'Fast Modal Pipeline'],
    imagePlaceholderColor: 'from-emerald-950/70 to-neutral-950',
    accentColor: '#10b981'
  },
  {
    id: 'sever-industrial-iot-ru',
    title: 'Severstal Automation & IoT Monitoring',
    category: 'Custom Solutions',
    clientCountry: 'Russia',
    clientLocation: 'Novosibirsk & Yekaterinburg, Russia 🇷🇺',
    summary: 'Interactive equipment telemetry dashboard and engineering service quotation portal for heavy manufacturing and mining plants.',
    challenge: 'Industrial procurement engineers required exact technical specifications and custom SCADA system pricing estimates without days of phone tag.',
    solution: 'Developed an interactive multi-parameter hardware requirement calculator that computes estimated integration timelines and compiles engineering specifications.',
    keyFeatures: [
      'Interactive multi-sensor input and PLC controller estimator',
      'Instant downloadable hardware architecture summary',
      'Sub-500ms client-side calculation engine with zero external libraries',
      'Direct technical consultation routing'
    ],
    techStack: ['Vanilla JavaScript', 'Custom Math Engine', 'Inline Validation', 'Export Engine'],
    imagePlaceholderColor: 'from-emerald-950/60 to-neutral-950',
    accentColor: '#34d399'
  }
];

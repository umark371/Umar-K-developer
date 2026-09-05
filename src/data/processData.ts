import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Requirements',
    shortDescription: 'You share your website goals, target audience, page count, and key functionality needs.',
    details: 'We begin with an in-depth intake of what your website needs to achieve. Whether you have an existing site or are starting from scratch, we gather your brand assets, inspirations, and must-have features.',
    outcome: 'Clear project scope document & feature list',
    icon: 'FileText'
  },
  {
    stepNumber: 2,
    title: 'Discussion',
    shortDescription: 'Direct consultation via WhatsApp or email to clarify technical preferences and timeline.',
    details: 'We discuss technical trade-offs honestly—recommending the right technical architecture and defining exact milestones so there are never any surprises.',
    outcome: 'Agreed timeline, fixed milestones & verified specs',
    icon: 'MessagesSquare'
  },
  {
    stepNumber: 3,
    title: 'Design',
    shortDescription: 'Structuring visual hierarchy, typography, color palette, and mobile-first layouts.',
    details: 'We design clear wireframes and page layouts focused on your brand identity, user readability, and conversion paths before diving deep into production code.',
    outcome: 'Approved visual mockups & layout design system',
    icon: 'Layout'
  },
  {
    stepNumber: 4,
    title: 'Development',
    shortDescription: 'Handcrafting clean, modular, semantic code with lightning-fast load times.',
    details: 'We write robust, lightweight HTML, modern CSS/Tailwind, and vanilla JavaScript. No unnecessary plugin dependencies or heavy frameworks that slow down your pages.',
    outcome: 'Production-grade functional website code',
    icon: 'Code'
  },
  {
    stepNumber: 5,
    title: 'Review',
    shortDescription: 'Interactive staging preview where you test all links, forms, and pages thoroughly.',
    details: 'You receive a live private staging link to interact with the site across your own phone, tablet, and computer to verify that every detail functions as expected.',
    outcome: 'Staging feedback notes & functional validation',
    icon: 'CheckSquare'
  },
  {
    stepNumber: 6,
    title: 'Revisions',
    shortDescription: 'Fine-tuning spacing, copy adjustments, color balances, and responsive refinements.',
    details: 'We implement your feedback with prompt attention to detail. Every project includes structured revision rounds so the final output matches your vision.',
    outcome: 'Polished, approved final build ready for launch',
    icon: 'Sliders'
  },
  {
    stepNumber: 7,
    title: 'Delivery',
    shortDescription: 'Deployment to your live domain, web server, or clean code handover.',
    details: 'We handle live domain connection, SSL verification, production hosting setup, Google Search Console sitemap submission, and provide all organized source files.',
    outcome: 'Live published website & organized asset handover',
    icon: 'Send'
  },
  {
    stepNumber: 8,
    title: 'Support',
    shortDescription: 'Post-launch assistance, minor adjustments, and guidance for keeping your site running smoothly.',
    details: 'We stand firmly behind our work. After launch, we provide dedicated support to address questions, ensure form deliverables work seamlessly, and assist with any initial tweaks.',
    outcome: 'Peace of mind & dependable technical support',
    icon: 'ShieldCheck'
  }
];

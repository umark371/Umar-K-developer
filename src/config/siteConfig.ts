/**
 * Central Configuration for Digital Developer
 * 
 * IMPORTANT: Contact information is kept strictly private and NEVER rendered
 * as raw visible text in the UI. Action buttons dynamically construct
 * wa.me and mailto links using these variables.
 */

export interface SiteConfig {
  brandName: string;
  tagline: string;
  shortBio: string;
  contact: {
    whatsappNumber: string; // international format without plus or spaces for wa.me
    emailAddress: string;
    defaultWhatsAppMessage: string;
    quoteWhatsAppMessage: string;
    serviceInquiryWhatsAppMessage: (serviceName: string) => string;
    emailSubject: string;
  };
  navigation: Array<{ name: string; href: string }>;
}

export const SITE_CONFIG: SiteConfig = {
  brandName: 'Digital Developer',
  tagline: 'Custom Website Development Engineered for Growth & Performance',
  shortBio: 'Professional website development agency delivering high-performance, handcrafted web solutions, landing pages, e-commerce stores, and custom web applications built strictly to your specifications.',
  contact: {
    whatsappNumber: '923467237420',
    emailAddress: 'umarkwork.pk@gmail.com',
    defaultWhatsAppMessage: 'Hello Digital Developer, I am interested in discussing a website development project for my business.',
    quoteWhatsAppMessage: 'Hello Digital Developer, I would like to get a custom quote for a web development project.',
    serviceInquiryWhatsAppMessage: (serviceName: string) => 
      `Hello Digital Developer, I am inquiring about your "${serviceName}" service and would like to discuss my project requirements.`,
    emailSubject: 'New Website Development Inquiry — Digital Developer',
  },
  navigation: [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'How We Work', href: '#process' },
    { name: 'Pricing & Scope', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ],
};

/**
 * Helper to build sanitized WhatsApp URLs
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.contact.defaultWhatsAppMessage;
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper to build sanitized Mailto URLs
 */
export function getMailtoUrl(subject?: string, body?: string): string {
  const mailSubject = subject || SITE_CONFIG.contact.emailSubject;
  const mailBody = body ? `&body=${encodeURIComponent(body)}` : '';
  return `mailto:${SITE_CONFIG.contact.emailAddress}?subject=${encodeURIComponent(mailSubject)}${mailBody}`;
}

/**
 * Helper to build Gmail Web compose URLs (works reliably in any browser)
 */
export function getGmailComposeUrl(subject?: string, body?: string): string {
  const mailSubject = subject || SITE_CONFIG.contact.emailSubject;
  const mailBody = body || '';
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE_CONFIG.contact.emailAddress)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
}

/**
 * Helper to build Outlook Web compose URLs
 */
export function getOutlookComposeUrl(subject?: string, body?: string): string {
  const mailSubject = subject || SITE_CONFIG.contact.emailSubject;
  const mailBody = body || '';
  return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(SITE_CONFIG.contact.emailAddress)}&subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
}

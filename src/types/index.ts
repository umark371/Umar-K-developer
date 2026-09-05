export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  icon: string;
  badge?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Business' | 'Landing Pages' | 'E-Commerce' | 'Editorial' | 'Custom Solutions' | 'Portfolio';
  summary: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  imagePlaceholderColor: string;
  mockupUrl?: string;
  accentColor: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  details: string;
  outcome: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ProjectIntakeForm {
  fullName: string;
  email: string;
  projectType: string;
  pageCount: string;
  features: string[];
  budgetRange: string;
  timeline: string;
  projectDescription: string;
}

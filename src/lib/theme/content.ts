export type FeatureIconName = string;

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  icon?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export interface ProcessItem {
  title: string;
  description: string;
}

export interface ThemeContent {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  services: ServiceItem[];
  stats: StatItem[];
  testimonials: TestimonialItem[];
  faq: FaqItem[];
  logos: string[];
  whatWeDo: FeatureItem[];
  whyChooseUs: FeatureItem[];
  process: ProcessItem[];
}

export type SectionName =
  | 'HeroSection'
  | 'LogosSection'
  | 'ServicesSection'
  | 'WhatWeDoSection'
  | 'StatsSection'
  | 'WhyChooseUsSection'
  | 'TestimonialsSection'
  | 'ProcessSection'
  | 'FaqSection'
  | 'CtaSection'
  | 'ContactSection';

export interface PageSchemaDefinition {
  /** Las secciones que deben estar presentes en la página sí o sí */
  mandatorySections: SectionName[];
  /** Las secciones que pueden o no estar en la página */
  optionalSections: SectionName[];
  /** El orden sugerido de arriba hacia abajo para las secciones */
  recommendedOrder: SectionName[];
  /** Claves de ThemeConfig.content que esta página consume de forma obligatoria */
  requiredContentKeys: string[];
}

export const PageSchema: Record<string, PageSchemaDefinition> = {
  Home: {
    mandatorySections: ['HeroSection', 'ServicesSection', 'CtaSection'],
    optionalSections: ['LogosSection', 'StatsSection', 'TestimonialsSection', 'WhyChooseUsSection'],
    recommendedOrder: [
      'HeroSection',
      'LogosSection',
      'ServicesSection',
      'StatsSection',
      'WhyChooseUsSection',
      'TestimonialsSection',
      'CtaSection',
    ],
    requiredContentKeys: ['heroTitle', 'heroDescription', 'services', 'heroPrimaryCta'],
  },
  Services: {
    mandatorySections: ['HeroSection', 'WhatWeDoSection', 'ProcessSection', 'CtaSection'],
    optionalSections: ['FaqSection', 'TestimonialsSection'],
    recommendedOrder: [
      'HeroSection',
      'WhatWeDoSection',
      'ProcessSection',
      'TestimonialsSection',
      'FaqSection',
      'CtaSection',
    ],
    requiredContentKeys: ['whatWeDo', 'process', 'faq'],
  },
  About: {
    mandatorySections: ['HeroSection', 'StatsSection', 'WhyChooseUsSection'],
    optionalSections: ['LogosSection', 'TestimonialsSection'],
    recommendedOrder: [
      'HeroSection',
      'StatsSection',
      'WhyChooseUsSection',
      'LogosSection',
      'TestimonialsSection',
    ],
    requiredContentKeys: ['heroTitle', 'stats', 'whyChooseUs'],
  },
  Contact: {
    mandatorySections: ['ContactSection'],
    optionalSections: ['FaqSection'],
    recommendedOrder: ['ContactSection', 'FaqSection'],
    requiredContentKeys: ['faq'],
  },
};

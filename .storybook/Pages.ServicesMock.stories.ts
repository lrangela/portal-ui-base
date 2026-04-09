import type { Meta, StoryObj } from '@storybook/vue3';
import SiteHeader from '../src/components/organisms/SiteHeader.vue';
import HeroSection from '../src/components/sections/HeroSection.vue';
import ServicesSection from '../src/components/sections/ServicesSection.vue';
import WhyChooseUsSection from '../src/components/sections/WhyChooseUsSection.vue';
import TestimonialsSection from '../src/components/sections/TestimonialsSection.vue';
import CtaSection from '../src/components/sections/CtaSection.vue';
import ContactSection from '../src/components/sections/ContactSection.vue';
import SiteFooter from '../src/components/organisms/SiteFooter.vue';
import { globalsToTheme } from '../src/lib/theme';

const meta: Meta = {
  title: 'Pages/Services Mock',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (_args, context) => ({
    components: { SiteHeader, HeroSection, ServicesSection, WhyChooseUsSection, TestimonialsSection, CtaSection, ContactSection, SiteFooter },
    setup() {
      const theme = globalsToTheme(context.globals);
      return { globals: context.globals, theme };
    },
    template: `
      <div>
        <SiteHeader />
        <HeroSection :eyebrow="globals.heroEyebrow" :title="globals.heroTitle" :description="globals.heroDescription" :primaryCta="globals.heroPrimaryCta" :secondaryCta="globals.heroSecondaryCta" />
        <ServicesSection :services="theme.content.services" />
        <WhyChooseUsSection :items="theme.content.whyChooseUs" />
        <TestimonialsSection :items="theme.content.testimonials" />
        <CtaSection />
        <ContactSection />
        <SiteFooter />
      </div>
    `,
  }),
};

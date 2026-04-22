import type { Meta, StoryObj } from '@storybook/vue3';
import SiteHeader from '../src/components/organisms/SiteHeader.vue';
import HeroSection from '../src/components/sections/HeroSection.vue';
import WhatWeDoSection from '../src/components/sections/WhatWeDoSection.vue';
import StatsSection from '../src/components/sections/StatsSection.vue';
import ClientesSection from '../src/components/sections/ClientesSection.vue';
import ProcessSection from '../src/components/sections/ProcessSection.vue';
import TestimonialsSection from '../src/components/sections/TestimonialsSection.vue';
import SiteFooter from '../src/components/organisms/SiteFooter.vue';
import { globalsToTheme } from '../src/lib/theme';

const meta: Meta = {
  title: '📐 Plantillas Completas/Página Nosotros',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (_args, context) => ({
    components: { SiteHeader, HeroSection, WhatWeDoSection, StatsSection, ClientesSection, ProcessSection, TestimonialsSection, SiteFooter },
    setup() {
      const theme = globalsToTheme(context.globals);
      return { globals: context.globals, theme };
    },
    template: `
      <div>
        <SiteHeader />
        <HeroSection :eyebrow="'Nosotros'" :title="globals.heroTitle" :description="'Una pagina pensada para contar enfoque, confianza, proceso y resultados con el mismo sistema visual.'" :primaryCta="'Conocer equipo'" :secondaryCta="'Ver casos'" />
        <WhatWeDoSection :items="theme.content.whatWeDo" />
        <StatsSection :items="theme.content.stats" />
        <ClientesSection :items="theme.content.logos" />
        <ProcessSection :items="theme.content.process" />
        <TestimonialsSection :items="theme.content.testimonials" />
        <SiteFooter />
      </div>
    `,
  }),
};

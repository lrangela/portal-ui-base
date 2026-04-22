import type { Meta, StoryObj } from '@storybook/vue3';
import SiteHeader from '../src/components/organisms/SiteHeader.vue';
import HeroSection from '../src/components/sections/HeroSection.vue';
import ContactSection from '../src/components/sections/ContactSection.vue';
import FaqSection from '../src/components/sections/FaqSection.vue';
import CtaSection from '../src/components/sections/CtaSection.vue';
import SiteFooter from '../src/components/organisms/SiteFooter.vue';
import { globalsToTheme } from '../src/lib/theme';

const meta: Meta = {
  title: '📐 Plantillas Completas/Página Contacto',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (_args, context) => ({
    components: { SiteHeader, HeroSection, ContactSection, FaqSection, CtaSection, SiteFooter },
    setup() {
      const theme = globalsToTheme(context.globals);
      return { theme };
    },
    template: `
      <div>
        <SiteHeader />
        <HeroSection eyebrow="Contacto" title="Cuentanos que portal quieres construir" description="Una pagina de contacto tambien debe heredar el mismo theme, spacing y fondo global del sistema." primaryCta="Enviar brief" secondaryCta="Agendar llamada" />
        <ContactSection />
        <FaqSection :items="theme.content.faq" />
        <CtaSection />
        <SiteFooter />
      </div>
    `,
  }),
};

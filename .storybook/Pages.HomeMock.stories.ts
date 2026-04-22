import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from '../src/components/atoms/BaseButton.vue';
import HeroSection from '../src/components/sections/HeroSection.vue';
import TestimonialsSection from '../src/components/sections/TestimonialsSection.vue';
import StatsSection from '../src/components/sections/StatsSection.vue';
import { globalsToTheme } from '../src/lib/theme';

const meta: Meta = {
  title: '📐 Plantillas Completas/Página de Inicio',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (_args, context) => ({
    components: { HeroSection, BaseButton, TestimonialsSection, StatsSection },
    setup() {
      const theme = globalsToTheme(context.globals);
      return { globals: context.globals, theme };
    },
    template: `
      <div style="min-height: 100vh;">
        <HeroSection
          :eyebrow="globals.heroEyebrow"
          :title="globals.heroTitle"
          :description="globals.heroDescription"
          :primaryCta="globals.heroPrimaryCta"
          :secondaryCta="globals.heroSecondaryCta"
        />

        <section style="width:min(100%, var(--layout-content-max)); margin:0 auto; padding:0 var(--space-section-x) var(--space-section-y);">
          <div style="display:grid; gap:var(--space-stack); grid-template-columns:repeat(auto-fit, minmax(var(--layout-card-min), 1fr));">
            <div v-for="(service, index) in theme.content.services" :key="index" style="background:color-mix(in srgb, var(--color-surface) 92%, transparent 8%); border:1px solid var(--color-border); border-radius:var(--radius-md); padding:var(--space-card-padding); box-shadow:var(--shadow-card); backdrop-filter: blur(8px);">
              <h3 style="margin:0 0 12px; font-family:var(--font-heading); font-size:var(--font-size-h3); color:var(--color-text);">{{ service.title }}</h3>
              <p style="margin:0; color:var(--color-text-muted); line-height:var(--line-height-base);">{{ service.description }}</p>
            </div>
          </div>

          <div style="margin-top:var(--space-section-y);">
            <StatsSection :items="theme.content.stats" />
          </div>

          <div style="margin-top:calc(var(--space-section-y) * 0.3);">
            <TestimonialsSection :items="theme.content.testimonials" />
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; gap:16px; margin-top:var(--space-section-y); padding:var(--space-card-padding); border:1px solid var(--color-border); border-radius:var(--radius-lg); background:linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 14%, white), color-mix(in srgb, var(--color-surface) 90%, transparent 10%)); box-shadow:var(--shadow-card); flex-wrap:wrap; backdrop-filter: blur(8px);">
            <div>
              <p style="margin:0 0 8px; font-size:14px; text-transform:uppercase; letter-spacing:0.08em; color:var(--color-text-muted);">Aprobacion de tema</p>
              <h3 style="margin:0; font-family:var(--font-heading); font-size:var(--font-size-h2); color:var(--color-text);">Valida branding, layout y copy desde un solo story</h3>
            </div>
            <BaseButton variant="primary" label="Aprobar direccion visual" />
          </div>
        </section>
      </div>
    `,
  }),
};

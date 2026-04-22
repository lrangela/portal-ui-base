import type { Meta, StoryObj } from '@storybook/vue3';
import BaseIcon from '../src/components/atoms/BaseIcon.vue';
import MotionSlider from '../src/components/organisms/MotionSlider.vue';
import LogoCarousel from '../src/components/organisms/LogoCarousel.vue';
import SiteHeader from '../src/components/organisms/SiteHeader.vue';
import SiteFooter from '../src/components/organisms/SiteFooter.vue';
import BaseCard from '../src/components/atoms/BaseCard.vue';
import BaseSpinner from '../src/components/atoms/BaseSpinner.vue';

const meta: Meta = {
  title: '🧩 Piezas del Sitio/Iconos y Movimiento/Iconos',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const LucideSystem: Story = {
  render: () => ({
    components: { BaseIcon },
    template: `
      <div style="padding:32px; display:grid; gap:24px; color:var(--color-text);">
        <div>
          <h1 style="margin:0 0 8px; font-family:var(--font-heading); font-size:var(--font-size-h2);">Iconografia</h1>
          <p style="margin:0; color:var(--color-text-muted);">BaseIcon envuelve Lucide para mantener una API estable del design system.</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:18px;">
          <div v-for="name in ['Mail','Phone','Search','PenLine','Palette','Sparkles','Shield','BarChart3','ArrowRight','Quote','Check','LoaderCircle']" :key="name" style="display:grid; gap:12px; justify-items:start; padding:18px; border:1px solid color-mix(in srgb, var(--color-primary) 12%, var(--color-border)); border-radius:var(--radius-md); background:linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 92%, transparent), color-mix(in srgb, var(--color-primary) 4%, var(--color-surface))); box-shadow:var(--shadow-card);">
            <BaseIcon :name="name" :size="22" tone="primary" rounded />
            <div style="display:grid; gap:4px;">
              <strong style="font-size:14px; color:var(--color-text);">{{ name }}</strong>
              <span style="font-size:12px; color:var(--color-text-muted);">Disponible para formularios, cards, contacto y navegacion.</span>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const MotionExamples: Story = {
  render: () => ({
    components: { MotionSlider, LogoCarousel, SiteHeader, SiteFooter, BaseCard, BaseSpinner },
    template: `
      <div style="display:grid; gap:32px;">
        <SiteHeader />
        <div style="padding:0 32px; display:grid; gap:24px;">
          <BaseCard interactive>
            <h2 style="margin:0; font-family:var(--font-heading); font-size:var(--font-size-h3);">Micro motion sobrio</h2>
            <p style="margin:0; color:var(--color-text-muted);">Hover, sticky header, reveal y sliders deben acompanar la UX, no distraer.</p>
            <BaseSpinner :size="30" tone="primary" />
          </BaseCard>
          <MotionSlider />
          <LogoCarousel />
        </div>
        <SiteFooter />
      </div>
    `,
  }),
};

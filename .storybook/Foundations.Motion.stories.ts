import type { Meta, StoryObj } from '@storybook/vue3';
import BaseSpinner from '../src/components/atoms/BaseSpinner.vue';
import BaseProgressBar from '../src/components/atoms/BaseProgressBar.vue';
import BaseButton from '../src/components/atoms/BaseButton.vue';
import MotionSlider from '../src/components/organisms/MotionSlider.vue';
import LogoCarousel from '../src/components/organisms/LogoCarousel.vue';

const meta: Meta = {
  title: '🧩 Piezas del Sitio/Iconos y Movimiento/Movimiento',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Basics: Story = {
  render: () => ({
    components: { BaseSpinner, BaseProgressBar, BaseButton, MotionSlider, LogoCarousel },
    template: `
      <div style="padding:32px; display:grid; gap:32px; color:var(--color-text);">
        <div>
          <h1 style="margin:0 0 12px; font-family:var(--font-heading); font-size:var(--font-size-h2);">Motion base</h1>
          <p style="margin:0; color:var(--color-text-muted);">Hover, scroll reactions, loading, slider y carrusel se usan aqui con un tono sobrio y corporativo.</p>
        </div>
        <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
          <BaseButton label="Hover me" />
          <BaseButton variant="outline" label="Focus target" />
          <BaseSpinner :size="28" tone="primary" :thickness="3" />
          <BaseSpinner :size="34" tone="muted" speed="1.4" :thickness="4" />
          <BaseSpinner :size="34" color="#0E2A47" speed="0.7" :thickness="3" />
        </div>
        <div style="display:grid; gap:16px; max-width:520px;">
          <BaseProgressBar :value="32" label="Descargando identidad visual" />
          <BaseProgressBar :value="67" tone="secondary" label="Sincronizando tokens" />
          <BaseProgressBar :value="91" tone="accent" label="Generando preview" />
        </div>
        <MotionSlider />
        <LogoCarousel />
      </div>
    `,
  }),
};

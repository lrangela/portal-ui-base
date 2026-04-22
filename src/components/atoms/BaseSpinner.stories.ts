import type { Meta, StoryObj } from '@storybook/vue3';
import BaseSpinner from './BaseSpinner.vue';

const meta: Meta<typeof BaseSpinner> = {
  title: '🧩 Piezas del Sitio/Iconos y Movimiento/Carga',
  component: BaseSpinner,
  tags: ['autodocs'],
  args: { size: 24, tone: 'primary', speed: '0.9s', thickness: 2, label: 'Loading' },
};
export default meta;
type Story = StoryObj<typeof BaseSpinner>;

export const Playground: Story = {};
export const Tones: Story = {
  render: () => ({
    components: { BaseSpinner },
    template: `
      <div style="display:flex; gap:16px; align-items:center;">
        <BaseSpinner tone="primary" :size="24" :thickness="2" />
        <BaseSpinner tone="muted" :size="30" :thickness="3" speed="1.2" />
        <BaseSpinner color="#0E2A47" :size="36" :thickness="4" speed="0.75" />
        <BaseSpinner tone="inverse" :size="30" :thickness="3" style="padding:12px; border-radius:999px; background:var(--color-secondary);" />
      </div>
    `,
  }),
};

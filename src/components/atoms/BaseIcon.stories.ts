import type { Meta, StoryObj } from '@storybook/vue3';
import BaseIcon from './BaseIcon.vue';
import { CURATED_LUCIDE_ICONS } from '../../lib/icons';

const meta: Meta<typeof BaseIcon> = {
  title: '🧩 Piezas del Sitio/Iconos y Movimiento/Iconos Base',
  component: BaseIcon,
  tags: ['autodocs'],
  args: { name: 'Sparkles', size: 24, strokeWidth: 1.8, tone: 'primary', rounded: false },
  parameters: {
    docs: {
      description: {
        component: 'Wrapper del sistema para `lucide-vue-next`. La referencia oficial de iconos esta en https://lucide.dev/icons/.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof BaseIcon>;

export const Playground: Story = {};
export const Library: Story = {
  render: () => ({
    components: { BaseIcon },
    setup() {
      return { icons: CURATED_LUCIDE_ICONS };
    },
    template: `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:16px;">
        <div v-for="name in icons" :key="name" style="display:grid; gap:8px; justify-items:center; padding:16px; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">
          <BaseIcon :name="name" :size="24" tone="primary" rounded />
          <span style="font-size:12px; color:var(--color-text-muted);">{{ name }}</span>
        </div>
      </div>
    `,
  }),
};

import type { Meta, StoryObj } from '@storybook/vue3';
import SiteFooter from './SiteFooter.vue';

const meta: Meta<typeof SiteFooter> = {
  title: '🧩 Piezas del Sitio/Navegación/Footer',
  component: SiteFooter,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SiteFooter>;

export const Default: Story = {};

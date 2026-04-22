import type { Meta, StoryObj } from '@storybook/vue3';
import LogoCarousel from './LogoCarousel.vue';

const meta: Meta<typeof LogoCarousel> = {
  title: '🧩 Piezas del Sitio/Navegación/Logos',
  component: LogoCarousel,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LogoCarousel>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/vue3';
import MotionSlider from './MotionSlider.vue';

const meta: Meta<typeof MotionSlider> = {
  title: '🧩 Piezas del Sitio/Iconos y Movimiento/Slider',
  component: MotionSlider,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MotionSlider>;

export const Default: Story = {};

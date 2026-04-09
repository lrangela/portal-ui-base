import type { Meta, StoryObj } from '@storybook/vue3';
import LogoCarousel from './LogoCarousel.vue';

const meta: Meta<typeof LogoCarousel> = {
  title: 'Organisms/LogoCarousel',
  component: LogoCarousel,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LogoCarousel>;

export const Default: Story = {};

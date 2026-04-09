import type { Meta, StoryObj } from '@storybook/vue3';
import TestimonialsSection from './TestimonialsSection.vue';

const meta: Meta<typeof TestimonialsSection> = {
  title: 'Sections/TestimonialsSection',
  component: TestimonialsSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TestimonialsSection>;
export const Default: Story = {};

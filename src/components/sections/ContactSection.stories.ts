import type { Meta, StoryObj } from '@storybook/vue3';
import ContactSection from './ContactSection.vue';

const meta: Meta<typeof ContactSection> = {
  title: 'Sections/ContactSection',
  component: ContactSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ContactSection>;
export const Default: Story = {};

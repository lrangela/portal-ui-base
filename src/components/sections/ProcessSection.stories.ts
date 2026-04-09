import type { Meta, StoryObj } from '@storybook/vue3';
import ProcessSection from './ProcessSection.vue';

const meta: Meta<typeof ProcessSection> = {
  title: 'Sections/ProcessSection',
  component: ProcessSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ProcessSection>;
export const Default: Story = {};

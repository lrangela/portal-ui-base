import type { Meta, StoryObj } from '@storybook/vue3';
import StatsSection from './StatsSection.vue';

const meta: Meta<typeof StatsSection> = {
  title: 'Sections/StatsSection',
  component: StatsSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof StatsSection>;
export const Default: Story = {};

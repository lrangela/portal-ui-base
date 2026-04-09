import type { Meta, StoryObj } from '@storybook/vue3';
import WhyChooseUsSection from './WhyChooseUsSection.vue';

const meta: Meta<typeof WhyChooseUsSection> = {
  title: 'Sections/WhyChooseUsSection',
  component: WhyChooseUsSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof WhyChooseUsSection>;
export const Default: Story = {};

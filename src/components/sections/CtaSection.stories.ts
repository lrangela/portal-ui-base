import type { Meta, StoryObj } from '@storybook/vue3';
import CtaSection from './CtaSection.vue';

const meta: Meta<typeof CtaSection> = {
  title: 'Sections/CtaSection',
  component: CtaSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CtaSection>;
export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/vue3';
import SiteHeader from './SiteHeader.vue';

const meta: Meta<typeof SiteHeader> = {
  title: 'Organisms/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {};

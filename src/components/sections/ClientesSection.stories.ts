import type { Meta, StoryObj } from '@storybook/vue3';
import ClientesSection from './ClientesSection.vue';

const meta: Meta<typeof ClientesSection> = {
  title: 'Sections/ClientesSection',
  component: ClientesSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ClientesSection>;
export const Default: Story = {};

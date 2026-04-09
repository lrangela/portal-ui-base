import type { Meta, StoryObj } from '@storybook/vue3';
import ContactForm from './ContactForm.vue';

const meta: Meta<typeof ContactForm> = {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  args: { loading: false },
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
export const Loading: Story = { args: { loading: true } };

import type { Meta, StoryObj } from '@storybook/vue3';
import ContactInfoItem from './ContactInfoItem.vue';

const meta: Meta<typeof ContactInfoItem> = {
  title: 'Molecules/ContactInfoItem',
  component: ContactInfoItem,
  tags: ['autodocs'],
  args: {
    icon: 'Mail',
    variant: 'lift',
    label: 'Correo',
    value: 'hola@portaltech.co',
  },
};
export default meta;
type Story = StoryObj<typeof ContactInfoItem>;

export const Playground: Story = {};
export const InlineAccent: Story = {
  args: {
    icon: 'Phone',
    variant: 'inline-accent',
    label: 'Telefono',
    value: '+51 999 999 999',
  },
};

import type { Meta, StoryObj } from '@storybook/vue3';
import BaseLink from './BaseLink.vue';

const meta: Meta<typeof BaseLink> = {
  title: 'Atoms/BaseLink',
  component: BaseLink,
  tags: ['autodocs'],
  args: { label: 'Leer mas', href: '#', tone: 'primary', underline: false },
};
export default meta;
type Story = StoryObj<typeof BaseLink>;

export const Playground: Story = {};
export const Variants: Story = {
  render: () => ({
    components: { BaseLink },
    template: `
      <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
        <BaseLink label="Default" tone="default" />
        <BaseLink label="Primary" tone="primary" icon-right="ArrowRight" />
        <BaseLink label="Inverse" tone="inverse" style="padding:12px 16px; background:var(--color-secondary); border-radius:var(--radius-pill);" icon-right="ArrowRight" />
        <BaseLink label="Disabled" disabled />
      </div>
    `,
  }),
};

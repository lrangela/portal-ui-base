import type { Meta, StoryObj } from '@storybook/vue3';
import BaseCard from './BaseCard.vue';

const meta: Meta<typeof BaseCard> = {
  title: 'Atoms/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  args: {
    tone: 'surface',
    padding: 'md',
    radius: 'md',
    shadow: 'card',
    bordered: true,
    interactive: false,
  },
};
export default meta;
type Story = StoryObj<typeof BaseCard>;

export const Playground: Story = {
  render: (args) => ({
    components: { BaseCard },
    setup: () => ({ args }),
    template: `<BaseCard v-bind="args">Contenido tokenizado dentro de la card.</BaseCard>`,
  }),
};

export const Tones: Story = {
  render: () => ({
    components: { BaseCard },
    template: `
      <div style="display:grid; gap:16px; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));">
        <BaseCard tone="surface">Surface</BaseCard>
        <BaseCard tone="primary">Primary</BaseCard>
        <BaseCard tone="secondary">Secondary</BaseCard>
        <BaseCard tone="transparent" bordered>Transparent</BaseCard>
      </div>
    `,
  }),
};

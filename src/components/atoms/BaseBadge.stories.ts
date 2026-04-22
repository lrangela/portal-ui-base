import type { Meta, StoryObj } from '@storybook/vue3';
import BaseBadge from './BaseBadge.vue';

const meta: Meta<typeof BaseBadge> = {
  title: '🧩 Piezas del Sitio/Tarjetas/Badges',
  component: BaseBadge,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BaseBadge>;

export const Variants: Story = {
  render: () => ({
    components: { BaseBadge },
    template: `
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <BaseBadge label="Default" tone="default" />
        <BaseBadge label="Success" tone="success" />
        <BaseBadge label="Warning" tone="warning" />
        <BaseBadge label="Danger" tone="danger" />
        <BaseBadge label="Neutral" tone="neutral" />
      </div>
    `,
  }),
};

import type { Meta, StoryObj } from '@storybook/vue3';
import BaseHeading from './BaseHeading.vue';

const meta: Meta<typeof BaseHeading> = {
  title: 'Atoms/BaseHeading',
  component: BaseHeading,
  tags: ['autodocs'],
  args: {
    text: 'Section title',
    level: 2,
    align: 'left',
    weight: 'bold',
    tone: 'default',
  },
};
export default meta;
type Story = StoryObj<typeof BaseHeading>;

export const Playground: Story = {};
export const Scale: Story = {
  render: () => ({
    components: { BaseHeading },
    template: `
      <div style="display:grid; gap:12px;">
        <BaseHeading :level="1" text="Hero title level 1" />
        <BaseHeading :level="2" text="Section title level 2" />
        <BaseHeading :level="3" text="Card title level 3" />
        <BaseHeading :level="4" text="Small heading level 4" tone="muted" />
      </div>
    `,
  }),
};

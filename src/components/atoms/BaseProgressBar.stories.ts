import type { Meta, StoryObj } from '@storybook/vue3';
import BaseProgressBar from './BaseProgressBar.vue';

const meta: Meta<typeof BaseProgressBar> = {
  title: 'Atoms/BaseProgressBar',
  component: BaseProgressBar,
  tags: ['autodocs'],
  args: { value: 68, label: 'Cargando recursos', tone: 'primary', animated: true, showValue: true },
};
export default meta;
type Story = StoryObj<typeof BaseProgressBar>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => ({
    components: { BaseProgressBar },
    template: `
      <div style="display:grid; gap:16px; max-width:520px;">
        <BaseProgressBar :value="42" tone="primary" label="Assets UI" />
        <BaseProgressBar :value="68" tone="secondary" label="Datos CRM" />
        <BaseProgressBar :value="89" tone="accent" label="Documentacion" />
      </div>
    `,
  }),
};

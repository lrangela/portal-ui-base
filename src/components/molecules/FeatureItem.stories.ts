import type { Meta, StoryObj } from '@storybook/vue3';
import FeatureItem from './FeatureItem.vue';

const meta: Meta<typeof FeatureItem> = {
  title: '🧩 Piezas del Sitio/Tarjetas/Beneficio',
  component: FeatureItem,
  tags: ['autodocs'],
  args: {
    icon: 'Shield',
    variant: 'line',
    title: 'Consistencia tokenizada',
    description: 'Todo depende de variables compartidas y no de clases hardcodeadas.',
  },
};
export default meta;
type Story = StoryObj<typeof FeatureItem>;

export const Playground: Story = {};
export const Spot: Story = {
  args: {
    variant: 'spot',
    icon: 'Sparkles',
    title: 'Experiencia visual',
    description: 'Una variante con glow sutil para destacar capacidades mas aspiracionales.',
  },
};

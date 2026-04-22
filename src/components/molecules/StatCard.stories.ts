import type { Meta, StoryObj } from '@storybook/vue3';
import StatCard from './StatCard.vue';

const meta: Meta<typeof StatCard> = {
  title: '🧩 Piezas del Sitio/Tarjetas/Métrica',
  component: StatCard,
  tags: ['autodocs'],
  args: {
    icon: 'BriefcaseBusiness',
    variant: 'glow',
    label: 'Proyectos',
    value: '48+',
    description: 'Entregas internacionales',
  },
};
export default meta;
type Story = StoryObj<typeof StatCard>;

export const Playground: Story = {};
export const Accent: Story = {
  args: {
    icon: 'Gauge',
    variant: 'accent',
    label: 'Tiempo de validacion',
    value: '-32%',
    description: 'Menos iteraciones visuales',
  },
};

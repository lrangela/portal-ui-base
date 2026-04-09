import type { Meta, StoryObj } from '@storybook/vue3';
import ServiceCard from './ServiceCard.vue';

const meta: Meta<typeof ServiceCard> = {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
  args: {
    icon: 'Layers3',
    variant: 'default',
    title: 'Desarrollo web',
    description: 'Aplicaciones modernas, rapidas y escalables para portales y productos internos.',
  },
};
export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Playground: Story = {};
export const Spotlight: Story = {
  args: {
    variant: 'spotlight',
    icon: 'Sparkles',
    title: 'Consultoria UX',
    description: 'Una variante con hover mas expresivo para destacar servicios clave sin perder tono corporativo.',
  },
};
export const LongCopy: Story = {
  args: {
    title: 'Arquitectura y evolucion de plataforma',
    description: 'Definimos una base tecnica mantenible para que el portal crezca por secciones, lineas de negocio y geografias sin perder consistencia ni velocidad de iteracion.',
  },
};

import type { Meta, StoryObj } from '@storybook/vue3';
import ServicesGrid from './ServicesGrid.vue';

const meta: Meta<typeof ServicesGrid> = {
  title: 'Organisms/ServicesGrid',
  component: ServicesGrid,
  tags: ['autodocs'],
  args: {
    services: [
      { title: 'Desarrollo web', description: 'Portales y productos escalables.' },
      { title: 'Arquitectura', description: 'Base tecnica para crecer sin friccion.' },
      { title: 'Consultoria UX', description: 'Aprobacion visual antes de construir.' },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof ServicesGrid>;

export const Playground: Story = {};

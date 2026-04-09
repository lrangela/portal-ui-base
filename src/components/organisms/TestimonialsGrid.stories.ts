import type { Meta, StoryObj } from '@storybook/vue3';
import TestimonialsGrid from './TestimonialsGrid.vue';

const meta: Meta<typeof TestimonialsGrid> = {
  title: 'Organisms/TestimonialsGrid',
  component: TestimonialsGrid,
  tags: ['autodocs'],
  args: {
    items: [
      { quote: 'Alineamos negocio y diseno mas rapido.', name: 'Ana Torres', role: 'CMO', avatar: 'AT', rating: 5 },
      { quote: 'El sistema nos dio consistencia en todas las paginas.', name: 'Luis Vega', role: 'Founder', avatar: 'LV', rating: 5 },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof TestimonialsGrid>;

export const Playground: Story = {};

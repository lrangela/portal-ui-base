import type { Meta, StoryObj } from '@storybook/vue3';
import TestimonialsCard from './TestimonialsCard.vue';

const meta: Meta<typeof TestimonialsCard> = {
  title: '🧩 Piezas del Sitio/Tarjetas/Testimonio',
  component: TestimonialsCard,
  tags: ['autodocs'],
  args: {
    quote: 'La claridad del sistema redujo mucho el retrabajo entre diseno y desarrollo.',
    name: 'Ana Torres',
    role: 'CMO, Globex',
    avatar: 'AT',
    rating: 5,
  },
};
export default meta;
type Story = StoryObj<typeof TestimonialsCard>;

export const Playground: Story = {};

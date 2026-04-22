import type { Meta, StoryObj } from '@storybook/vue3';
import FaqSection from './FaqSection.vue';

const meta: Meta<typeof FaqSection> = {
  title: '🧩 Piezas del Sitio/Secciones de Página/Preguntas Frecuentes',
  component: FaqSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof FaqSection>;
export const Default: Story = {};

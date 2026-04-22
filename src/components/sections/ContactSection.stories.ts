import type { Meta, StoryObj } from '@storybook/vue3';
import ContactSection from './ContactSection.vue';

const meta: Meta<typeof ContactSection> = {
  title: '🧩 Piezas del Sitio/Secciones de Página/Contacto',
  component: ContactSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ContactSection>;
export const Default: Story = {};

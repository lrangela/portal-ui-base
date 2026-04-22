import type { Meta, StoryObj } from '@storybook/vue3';
import ProcessSection from './ProcessSection.vue';

const meta: Meta<typeof ProcessSection> = {
  title: '🧩 Piezas del Sitio/Secciones de Página/Proceso',
  component: ProcessSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ProcessSection>;
export const Default: Story = {};

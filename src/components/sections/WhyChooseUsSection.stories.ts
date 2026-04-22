import type { Meta, StoryObj } from '@storybook/vue3';
import WhyChooseUsSection from './WhyChooseUsSection.vue';

const meta: Meta<typeof WhyChooseUsSection> = {
  title: '🧩 Piezas del Sitio/Secciones de Página/Por Qué Elegirnos',
  component: WhyChooseUsSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof WhyChooseUsSection>;
export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/vue3';
import ServicesSection from './ServicesSection.vue';

const meta: Meta<typeof ServicesSection> = {
  title: 'Sections/ServicesSection',
  component: ServicesSection,
  tags: ['autodocs'],
  args: {
    services: [
      { title: 'Desarrollo web', description: 'Portales y aplicaciones modernas.' },
      { title: 'Arquitectura', description: 'Base tecnica escalable para crecimiento sostenido.' },
      { title: 'Consultoria UX', description: 'Jerarquia y conversion antes de desarrollo final.' },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof ServicesSection>;

export const Default: Story = {};

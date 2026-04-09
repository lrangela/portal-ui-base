import type { Meta, StoryObj } from '@storybook/vue3';
import SectionHeader from './SectionHeader.vue';

const meta: Meta<typeof SectionHeader> = {
  title: 'Molecules/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  args: {
    badge: 'Servicios',
    title: 'Un encabezado consistente para cada bloque',
    description: 'Sirve para ordenar jerarquia visual entre badge, titulo y subtitulo.',
    align: 'left',
    headingLevel: 2,
  },
};
export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Playground: Story = {};
export const Centered: Story = { args: { align: 'center', badge: 'Proceso' } };

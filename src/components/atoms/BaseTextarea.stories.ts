import type { Meta, StoryObj } from '@storybook/vue3';
import BaseTextarea from './BaseTextarea.vue';

const meta: Meta<typeof BaseTextarea> = {
  title: 'Atoms/BaseTextarea',
  component: BaseTextarea,
  tags: ['autodocs'],
  args: {
    label: 'Necesidad',
    placeholder: 'Describe tu proyecto',
    helpText: 'Comparte objetivos, alcance y tiempos.',
    modelValue: '',
    iconLeft: 'MessageSquareText',
  },
};
export default meta;
type Story = StoryObj<typeof BaseTextarea>;

export const Playground: Story = {};
export const LongState: Story = {
  args: {
    modelValue: 'Necesitamos un portal corporativo con secciones de servicios, testimonios, formulario de contacto y capacidad de validar multiples temas visuales antes de pasar a implementacion final.',
  },
};

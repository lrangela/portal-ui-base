import type { Meta, StoryObj } from '@storybook/vue3';
import BaseText from './BaseText.vue';

const meta: Meta<typeof BaseText> = {
  title: 'Atoms/BaseText',
  component: BaseText,
  tags: ['autodocs'],
  args: {
    text: 'Texto base para validar tono, ritmo de lectura y contraste.',
    size: 'md',
    tone: 'default',
  },
};
export default meta;
type Story = StoryObj<typeof BaseText>;

export const Playground: Story = {};
export const LongState: Story = {
  args: {
    text: 'Este es un estado largo pensado para revisar legibilidad, line-height, tracking y ancho de lectura cuando el contenido editorial crece mas de lo normal dentro de una card o una seccion.',
    size: 'lg',
    tone: 'muted',
    maxWidth: '44rem',
  },
};

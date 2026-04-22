import type { Meta, StoryObj } from '@storybook/vue3';
import WhatWeDoSection from './WhatWeDoSection.vue';

const meta: Meta<typeof WhatWeDoSection> = {
  title: '🧩 Piezas del Sitio/Secciones de Página/Qué Hacemos',
  component: WhatWeDoSection,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof WhatWeDoSection>;
export const Default: Story = {};

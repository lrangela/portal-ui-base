import type { Meta, StoryObj } from '@storybook/vue3';
import BaseInput from './BaseInput.vue';

const meta: Meta<typeof BaseInput> = {
  title: '🧩 Piezas del Sitio/Formularios/Campo de Texto',
  component: BaseInput,
  tags: ['autodocs'],
  args: {
    label: 'Correo',
    placeholder: 'tu@empresa.com',
    name: 'email',
    helpText: 'Usamos este campo para responder a tu solicitud.',
    modelValue: '',
  },
};
export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Playground: Story = {};
export const States: Story = {
  render: () => ({
    components: { BaseInput },
    template: `
      <div style="display:grid; gap:16px; max-width:520px;">
        <BaseInput label="Nombre" placeholder="Tu nombre" icon-left="PenLine" />
        <BaseInput label="Correo" placeholder="tu@empresa.com" icon-left="Mail" />
        <BaseInput label="Telefono" placeholder="+51 999 999 999" icon-left="Phone" error="Campo obligatorio" />
        <BaseInput label="Busqueda" placeholder="Buscar referencia" icon-left="Search" icon-right="ArrowRight" />
        <BaseInput label="Deshabilitado" placeholder="No editable" disabled model-value="Bloqueado" />
      </div>
    `,
  }),
};

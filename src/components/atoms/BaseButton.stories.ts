import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from './BaseButton.vue';

const meta: Meta<typeof BaseButton> = {
    title: '🧩 Piezas del Sitio/Botones y Enlaces/Botones',
    component: BaseButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Boton base del design system. Usa tokens globales para color, padding, radio, sombra y tipografia. Sirve como equivalente a un button atomico reusable en Angular, pero expresado como componente Vue controlado por CSS variables.'
            }
        }
    },
    args: {
        variant: 'primary',
        size: 'md',
        label: 'Solicitar evaluación',
        disabled: false,
        fullWidth: false
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'ghost'],
            description: 'Define la intención visual del botón.'
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Controla densidad visual y prominencia.'
        },
        label: {
            control: 'text',
            description: 'Texto visible del botón cuando no envías slot.'
        },
        disabled: {
            control: 'boolean',
            description: 'Desactiva interacción y baja contraste visual.'
        },
        fullWidth: {
            control: 'boolean',
            description: 'Hace que el botón ocupe todo el ancho del contenedor.'
        },
        ariaLabel: {
            control: 'text',
            description: 'Etiqueta accesible opcional para casos sin texto visible.'
        }
    }
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Playground: Story = {
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args };
        },
        template: `
          <div style="max-width: 320px;">
            <BaseButton v-bind="args" />
          </div>
        `
    })
};

export const Variants: Story = {
    render: () => ({
        components: { BaseButton },
        template: `
          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center;">
            <BaseButton variant="primary" label="Primario" />
            <BaseButton variant="secondary" label="Secundario" />
            <BaseButton variant="outline" label="Outline" />
            <BaseButton variant="ghost" label="Ghost" />
          </div>
        `
    })
};

export const Sizes: Story = {
    render: () => ({
        components: { BaseButton },
        template: `
          <div style="display:flex; flex-wrap:wrap; gap:16px; align-items:center;">
            <BaseButton size="sm" label="Small" />
            <BaseButton size="md" label="Medium" />
            <BaseButton size="lg" label="Large" />
          </div>
        `
    })
};

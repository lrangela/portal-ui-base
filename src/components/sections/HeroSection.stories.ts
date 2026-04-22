import type { Meta, StoryObj } from '@storybook/vue3';
import HeroSection from './HeroSection.vue';

const meta: Meta<typeof HeroSection> = {
  title: '🧩 Piezas del Sitio/Secciones de Página/Hero',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Hero principal del sistema. Hereda tipografia, spacing, color, radios y background del Theme Builder, por eso cualquier cambio global debe verse aqui sin wrappers locales que rompan la uniformidad.',
      },
    },
  },
  args: {
    eyebrow: 'Consultoria tecnologica',
    title: 'Disenamos y construimos soluciones digitales escalables',
    description:
      'Ayudamos a empresas a transformar sus productos digitales con desarrollo web, arquitectura moderna y experiencia de usuario.',
    primaryCta: 'Solicitar evaluacion',
    secondaryCta: 'Ver portafolio',
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

export const LongCopy: Story = {
  args: {
    eyebrow: 'Sistema visual aprobable',
    title: 'Una plataforma de aprobacion visual para alinear negocio, diseno y desarrollo antes de construir el portal final',
    description:
      'Esta variante sirve para validar jerarquia, respiracion y legibilidad cuando el contenido editorial es mas extenso. Si el theme cambia, este caso ayuda a detectar si tipografia, spacing o contrastes dejan de sostener la composicion.',
    primaryCta: 'Agendar workshop',
    secondaryCta: 'Explorar proceso',
  },
};

export const Minimal: Story = {
  args: {
    eyebrow: 'Portal Tech',
    title: 'Aprobacion rapida de direccion visual',
    description: 'Una variante mas compacta para equipos que necesitan un mensaje directo.',
    primaryCta: 'Comenzar',
    secondaryCta: 'Mas informacion',
  },
};

import type { ThemeConfig } from './index';

export const DEFAULT_THEME: ThemeConfig = {
  colors: {
    primary: '#016B6B',
    secondary: '#0E2A47',
    accent: '#56D4C9',
    background: '#F5F7F8',
    surface: '#FFFFFF',
    text: '#102A43',
    textMuted: '#486581',
    border: '#D9E2EC',
  },
  typography: {
    fontSans: 'Inter',
    fontHeading: 'Manrope',
    fontSizeBase: 16,
    fontSizeH1: 56,
    fontSizeH2: 40,
    fontSizeH3: 28,
    buttonFontSize: 16,
    letterSpacing: 0,
    lineHeight: 1.6,
  },
  spacing: {
    sectionY: 96,
    sectionX: 24,
    stackGap: 24,
    cardPadding: 24,
    buttonPaddingY: 14,
    buttonPaddingX: 20,
  },
  radius: {
    sm: 12,
    md: 18,
    lg: 28,
    pill: 999,
  },
  shadow: {
    card: '0 18px 48px rgba(15, 23, 42, 0.12)',
    button: '0 10px 30px rgba(1, 107, 107, 0.25)',
  },
  layout: {
    contentMaxWidth: 1200,
    heroMaxWidth: 760,
    cardMinWidth: 260,
  },
  components: {
    button: {
      primaryBg: '#016B6B',
      primaryText: '#FFFFFF',
      secondaryBg: '#0E2A47',
      secondaryText: '#FFFFFF',
      outlineBg: 'rgba(255,255,255,0.92)',
      outlineText: '#102A43',
      ghostText: '#102A43',
    },
    badge: {
      defaultBg: 'rgba(1, 107, 107, 0.12)',
      defaultText: '#016B6B',
      successBg: '#E7F9F1',
      successText: '#0D7A46',
      warningBg: '#FFF4DD',
      warningText: '#9A5A00',
      dangerBg: '#FEECEB',
      dangerText: '#B42318',
      neutralBg: 'rgba(255,255,255,0.92)',
      neutralText: '#486581',
      inverseBg: 'rgba(255,255,255,0.94)',
      inverseText: '#0E2A47',
    },
    card: {
      surfaceBg: 'rgba(255,255,255,0.92)',
      primaryBg: 'linear-gradient(135deg, rgba(1,107,107,0.96), rgba(14,42,71,0.84))',
      secondaryBg: 'rgba(14,42,71,0.88)',
      borderColor: '#D9E2EC',
    },
  },
  background: {
    type: 'solid',
    solid: '#F5F7F8',
    gradientFrom: '#0E2A47',
    gradientTo: '#016B6B',
    imageUrl: '',
    imageOverlay: 'linear-gradient(180deg, rgba(14, 42, 71, 0.58), rgba(1, 107, 107, 0.32))',
    parallax: false,
  },
  content: {
    heroEyebrow: 'Consultoria tecnologica',
    heroTitle: 'Construimos experiencias web para clientes internacionales',
    heroDescription:
      'Usa Storybook como mesa de trabajo visual para aprobar identidad, jerarquia y ritmo de interfaz antes de pasar a desarrollo completo.',
    heroPrimaryCta: 'Solicitar evaluacion',
    heroSecondaryCta: 'Ver portafolio',
    services: [
      {
        title: 'Desarrollo web',
        description: 'Aplicaciones modernas, rapidas y escalables para portales, productos internos y experiencias comerciales.',
        icon: 'Layers3',
      },
      {
        title: 'Arquitectura',
        description: 'Diseno tecnico con foco en mantenibilidad, performance y crecimiento sostenido.',
        icon: 'Blocks',
      },
      {
        title: 'Consultoria UX',
        description: 'Experiencias claras, consistentes y aprobables por negocio antes de entrar a desarrollo final.',
        icon: 'Sparkles',
      },
    ],
    stats: [
      { label: 'Proyectos', value: '48+', description: 'entregas internacionales', icon: 'BriefcaseBusiness' },
      { label: 'Tiempo de validacion', value: '-32%', description: 'menos iteraciones visuales', icon: 'Gauge' },
      { label: 'NPS', value: '72', description: 'satisfaccion post entrega', icon: 'BadgeCheck' },
    ],
    testimonials: [
      { quote: 'El sistema nos permitio decidir branding y layout antes del desarrollo.', name: 'Ana Torres', role: 'CMO, Globex', avatar: 'AT', rating: 5 },
      { quote: 'La claridad del portal mejoro nuestra presentacion comercial en semanas.', name: 'Luis Vega', role: 'Founder, Novatek', avatar: 'LV', rating: 5 },
      { quote: 'Tuvimos una direccion visual aprobada por todo el equipo sin retrabajos.', name: 'Maria Rios', role: 'Product Lead, Aurora', avatar: 'MR', rating: 4 },
    ],
    faq: [
      { question: 'Se puede exportar el tema?', answer: 'Si, el panel permite descargar y volver a importar JSON.' },
      { question: 'Se pueden probar variantes?', answer: 'Si, puedes cambiar tokens, copies y fondo en tiempo real.' },
      { question: 'Esto escala a varias paginas?', answer: 'Ese es precisamente el objetivo del sistema.' },
    ],
    logos: ['Globex', 'Northwind', 'Novatek', 'Lumen', 'Aurora'],
    whatWeDo: [
      { icon: 'BarChart3', title: 'Estrategia digital', description: 'Aterrizamos objetivos de negocio en decisiones de producto y contenido.' },
      { icon: 'Shield', title: 'Arquitectura estable', description: 'Construimos bases tecnicas sostenibles para crecer sin friccion.' },
      { icon: 'Sparkles', title: 'Experiencia visual', description: 'Aprobamos identidad, jerarquia y conversion antes de desarrollar completo.' },
    ],
    whyChooseUs: [
      { icon: 'Check', title: 'Aprobacion rapida', description: 'Storybook funciona como mesa de trabajo para negocio, diseno y desarrollo.' },
      { icon: 'Shield', title: 'Consistencia tokenizada', description: 'Todo se apoya en variables, no en estilos sueltos ni hardcodes.' },
      { icon: 'BarChart3', title: 'Escalabilidad', description: 'La arquitectura permite sumar secciones, temas y variantes sin rehacer todo.' },
    ],
    process: [
      { title: '1. Diagnostico', description: 'Mapeamos objetivos, usuarios y necesidades del portal.' },
      { title: '2. Sistema visual', description: 'Definimos tokens, componentes y variantes aprobables.' },
      { title: '3. Implementacion', description: 'Convertimos el sistema en paginas y flujos reales.' },
    ],
  },
};

export const ENTERPRISE_THEME: ThemeConfig = {
  ...JSON.parse(JSON.stringify(DEFAULT_THEME)),
  colors: {
    primary: '#0052CC',
    secondary: '#172B4D',
    accent: '#00B8D9',
    background: '#FAFBFC',
    surface: '#FFFFFF',
    text: '#172B4D',
    textMuted: '#5E6C84',
    border: '#DFE1E6',
  },
  typography: {
    ...DEFAULT_THEME.typography,
    fontSans: 'Inter',
    fontHeading: 'Inter',
    letterSpacing: -0.5,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    pill: 999,
  },
  shadow: {
    card: '0 4px 8px rgba(9, 30, 66, 0.05), 0 0 1px rgba(9, 30, 66, 0.15)',
    button: '0 2px 4px rgba(9, 30, 66, 0.1), 0 0 1px rgba(9, 30, 66, 0.2)',
  },
};

export const MODERN_CONSULTANCY_THEME: ThemeConfig = {
  ...JSON.parse(JSON.stringify(DEFAULT_THEME)),
  colors: {
    primary: '#FF4500',
    secondary: '#111111',
    accent: '#FF8C00',
    background: '#FAFAFA',
    surface: '#FFFFFF',
    text: '#111111',
    textMuted: '#666666',
    border: '#EAEAEA',
  },
  typography: {
    ...DEFAULT_THEME.typography,
    fontSans: 'Space Grotesk',
    fontHeading: 'Space Grotesk',
    letterSpacing: -1,
  },
  radius: {
    sm: 0,
    md: 0,
    lg: 0,
    pill: 999,
  },
  shadow: {
    card: '6px 6px 0px 0px rgba(17,17,17,1)',
    button: '4px 4px 0px 0px rgba(17,17,17,1)',
  },
};

export const DARK_VARIANT_THEME: ThemeConfig = {
  ...JSON.parse(JSON.stringify(DEFAULT_THEME)),
  colors: {
    primary: '#3B82F6',
    secondary: '#1E293B',
    accent: '#60A5FA',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    textMuted: '#94A3B8',
    border: '#334155',
  },
  components: {
    ...DEFAULT_THEME.components,
    card: {
      surfaceBg: '#1E293B',
      primaryBg: '#1E40AF',
      secondaryBg: '#0F172A',
      borderColor: '#334155',
    },
    button: {
      ...DEFAULT_THEME.components.button,
      outlineText: '#F8FAFC',
      outlineBg: 'transparent',
    }
  },
  background: {
    ...DEFAULT_THEME.background,
    solid: '#0F172A',
  }
};

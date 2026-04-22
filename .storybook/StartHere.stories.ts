import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: '🚀 Empezar Aquí',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

const storyUrl = (id: string) => {
  const storyPath = `/story/${encodeURIComponent(id)}`;

  if (typeof window === 'undefined') {
    return `/?path=${storyPath}`;
  }

  try {
    const topLocation = window.top?.location ?? window.location;
    return `${topLocation.pathname}?path=${storyPath}`;
  } catch {
    return `/?path=${storyPath}`;
  }
};

const pageStyle = `
  min-height:100vh;
  padding:48px 32px;
  color:var(--color-text);
`;

const shellStyle = `
  width:min(100%, 1040px);
  margin:0 auto;
  display:grid;
  gap:28px;
`;

const cardStyle = `
  display:grid;
  gap:12px;
  padding:24px;
  border:1px solid var(--color-border);
  border-radius:var(--radius-lg);
  background:color-mix(in srgb, var(--color-surface) 92%, transparent);
  box-shadow:var(--shadow-card);
  text-decoration:none;
  color:var(--color-text);
`;

export const Introduccion: Story = {
  name: 'Introducción',
  render: () => ({
    setup() {
      return {
        links: {
          design: storyUrl('🎨-diseño-global-vista-general--default'),
          pieces: storyUrl('🧩-piezas-del-sitio-botones-y-enlaces-botones--playground'),
          pages: storyUrl('📐-plantillas-completas-página-de-inicio--default'),
        },
        pageStyle,
        shellStyle,
        cardStyle,
      };
    },
    template: `
      <main :style="pageStyle">
        <section :style="shellStyle">
          <div style="display:grid; gap:16px;">
            <p style="margin:0; color:var(--color-primary); font-weight:800; text-transform:uppercase; letter-spacing:0.08em;">Sistema de decision visual</p>
            <h1 style="margin:0; max-width:860px; font-family:var(--font-heading); font-size:var(--font-size-h1); line-height:1.05;">Bienvenido a tu taller de tema, contenido y validación</h1>
            <p style="margin:0; max-width:760px; color:var(--color-text-muted); font-size:calc(var(--font-size-base) * 1.125); line-height:var(--line-height-base);">
              Este entorno no es un Storybook tradicional. Aquí puedes editar el tema, cambiar contenido compartido, validar piezas reales del portal y exportar el resultado como JSON sin salir del flujo.
            </p>
          </div>

          <div style="display:grid; gap:14px; padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 10%, var(--color-surface)), color-mix(in srgb, var(--color-surface) 94%, transparent)); box-shadow:var(--shadow-card);">
            <div style="display:grid; gap:8px;">
              <strong style="font-size:20px; font-family:var(--font-heading);">Flujo recomendado</strong>
              <p style="margin:0; color:var(--color-text-muted); line-height:var(--line-height-base);">Si vienes por primera vez, sigue este orden para entender rápido qué tocar y dónde validar.</p>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px;">
              <div style="padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:color-mix(in srgb, var(--color-surface) 94%, transparent);">
                <strong>1. Editar</strong>
                <p style="margin:8px 0 0; color:var(--color-text-muted);">Abre Theme Builder y cambia color primario, fondo, tipografía y bordes.</p>
              </div>
              <div style="padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:color-mix(in srgb, var(--color-surface) 94%, transparent);">
                <strong>2. Validar</strong>
                <p style="margin:8px 0 0; color:var(--color-text-muted);">Usa Vista General para confirmar contraste, jerarquía y ritmo del sistema.</p>
              </div>
              <div style="padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:color-mix(in srgb, var(--color-surface) 94%, transparent);">
                <strong>3. Revisar</strong>
                <p style="margin:8px 0 0; color:var(--color-text-muted);">Baja a componentes y páginas para validar detalle y propagación real.</p>
              </div>
              <div style="padding:16px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:color-mix(in srgb, var(--color-surface) 94%, transparent);">
                <strong>4. Exportar</strong>
                <p style="margin:8px 0 0; color:var(--color-text-muted);">Cuando todo cierre, exporta el tema completo como JSON.</p>
              </div>
            </div>
          </div>

          <div style="padding:18px 20px; border:1px dashed var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 96%, transparent);">
            <strong style="display:block; margin-bottom:8px;">Dónde está el editor</strong>
            <span style="color:var(--color-text-muted); line-height:var(--line-height-base);">Busca la pestaña <strong>Theme Builder</strong> en el panel inferior de Storybook. Desde ahí cambias tokens, contenido compartido y JSON del tema.</span>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
            <a :href="links.design" :style="cardStyle">
              <strong style="font-size:20px; font-family:var(--font-heading);">Quiero definir la dirección visual</strong>
              <span style="color:var(--color-text-muted); line-height:var(--line-height-base);">Usa Vista General cuando necesites validar cambios globales de tema en una sola pantalla.</span>
            </a>
            <a :href="links.pieces" :style="cardStyle">
              <strong style="font-size:20px; font-family:var(--font-heading);">Quiero revisar componentes</strong>
              <span style="color:var(--color-text-muted); line-height:var(--line-height-base);">Entra aquí cuando ya tengas una base visual y quieras validar detalle, estados y consistencia.</span>
            </a>
            <a :href="links.pages" :style="cardStyle">
              <strong style="font-size:20px; font-family:var(--font-heading);">Quiero revisar páginas completas</strong>
              <span style="color:var(--color-text-muted); line-height:var(--line-height-base);">Úsalo para confirmar que tema y contenido se propaguen bien en el portal real.</span>
            </a>
          </div>
        </section>
      </main>
    `,
  }),
};

export const ComoFunciona: Story = {
  name: '¿Cómo funciona?',
  render: () => ({
    setup() {
      return {
        links: {
          overview: storyUrl('🎨-diseño-global-vista-general--default'),
        },
        pageStyle,
        shellStyle,
      };
    },
    template: `
      <main :style="pageStyle">
        <section :style="shellStyle">
          <div style="display:grid; gap:14px;">
            <p style="margin:0; color:var(--color-primary); font-weight:800; text-transform:uppercase; letter-spacing:0.08em;">Editar, ver, validar, exportar</p>
            <h1 style="margin:0; font-family:var(--font-heading); font-size:var(--font-size-h1); line-height:1.05;">Un flujo simple para decidir el portal sin tocar la arquitectura</h1>
            <p style="margin:0; max-width:760px; color:var(--color-text-muted); font-size:calc(var(--font-size-base) * 1.125); line-height:var(--line-height-base);">
              Editas el tema y el contenido compartido en Theme Builder. Los cambios se reflejan al instante en Vista General, en las piezas del sitio y en las páginas completas.
            </p>
          </div>

          <ol style="display:grid; gap:14px; padding:0; margin:0; list-style:none; counter-reset:step;">
            <li style="counter-increment:step; padding:20px; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">
              <strong>1. Ir a Vista General</strong>
              <p style="margin:8px 0 0; color:var(--color-text-muted);">Usa una pantalla completa para ver colores, textos, botones, tarjetas y métricas juntos.</p>
            </li>
            <li style="padding:20px; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">
              <strong>2. Abrir Theme Builder</strong>
              <p style="margin:8px 0 0; color:var(--color-text-muted);">El panel está en la zona inferior de Storybook. Desde ahí cambias tema, contenido compartido y JSON del sistema.</p>
            </li>
            <li style="padding:20px; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">
              <strong>3. Editar primero lo de mayor impacto</strong>
              <p style="margin:8px 0 0; color:var(--color-text-muted);">Empieza por primario, fondo, tipografía de títulos y bordes. Son las decisiones que más rápido cambian la percepción del sistema.</p>
            </li>
            <li style="padding:20px; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">
              <strong>4. Validar cambios</strong>
              <p style="margin:8px 0 0; color:var(--color-text-muted);">Valida primero en Vista General, luego revisa piezas y páginas completas. Cuando el resultado esté listo, exporta el tema como JSON.</p>
            </li>
          </ol>

          <a :href="links.overview" style="justify-self:start; padding:var(--space-button-y) var(--space-button-x); border-radius:var(--radius-pill); background:var(--button-primary-bg); color:var(--button-primary-text); text-decoration:none; font-weight:800; box-shadow:var(--shadow-button);">Abrir Vista General</a>
        </section>
      </main>
    `,
  }),
};

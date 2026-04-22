import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: '🚀 Empezar Aquí/Mapa del Taller',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => ({
    template: `
      <div style="padding:32px; display:grid; gap:24px; color:var(--color-text); max-width:980px;">
        <div>
          <h1 style="margin:0 0 12px; font-family:var(--font-heading); font-size:var(--font-size-h1);">Mapa del taller</h1>
          <p style="margin:0; color:var(--color-text-muted); line-height:var(--line-height-base);">Usa esta guía para decidir dónde editar, dónde mirar y cuándo validar una página completa.</p>
        </div>
        <div style="display:grid; gap:16px; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));">
          <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 10px; font-family:var(--font-heading); font-size:var(--font-size-h3);">Editar diseño</h2>
            <p style="margin:0; color:var(--color-text-muted);">Abre Theme Builder para cambiar colores, tipografías, fondo, bordes y contenido compartido.</p>
          </div>
          <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 10px; font-family:var(--font-heading); font-size:var(--font-size-h3);">Ver piezas</h2>
            <p style="margin:0; color:var(--color-text-muted);">Revisa botones, tarjetas, formularios, textos y navegación sin entrar al código.</p>
          </div>
          <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 10px; font-family:var(--font-heading); font-size:var(--font-size-h3);">Validar páginas</h2>
            <p style="margin:0; color:var(--color-text-muted);">Comprueba que Inicio, Servicios, Nosotros y Contacto reaccionen de forma consistente.</p>
          </div>
        </div>
      </div>
    `,
  }),
};

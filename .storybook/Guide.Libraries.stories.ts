import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Guide/Libraries',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const OfficialLinks: Story = {
  render: () => ({
    template: `
      <div style="padding:32px; display:grid; gap:20px; color:var(--color-text); max-width:920px;">
        <h1 style="margin:0; font-family:var(--font-heading); font-size:var(--font-size-h2);">Librerias incorporadas</h1>
        <div style="display:grid; gap:16px;">
          <div style="padding:20px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 8px; font-family:var(--font-heading); font-size:var(--font-size-h3);">Lucide</h2>
            <p style="margin:0 0 8px; color:var(--color-text-muted);">Catalogo de iconos usado a traves de BaseIcon.</p>
            <a href="https://lucide.dev/icons/" target="_blank" rel="noreferrer" style="color:var(--color-primary); font-weight:700;">https://lucide.dev/icons/</a>
          </div>
          <div style="padding:20px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 8px; font-family:var(--font-heading); font-size:var(--font-size-h3);">GSAP</h2>
            <p style="margin:0 0 8px; color:var(--color-text-muted);">Motor de animacion para header sticky, slider, carrusel y reveals.</p>
            <a href="https://gsap.com/docs/" target="_blank" rel="noreferrer" style="color:var(--color-primary); font-weight:700;">https://gsap.com/docs/</a>
          </div>
        </div>
      </div>
    `,
  }),
};

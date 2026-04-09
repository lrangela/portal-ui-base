import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Guide/Editing Model',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => ({
    template: `
      <div style="padding:32px; display:grid; gap:24px; color:var(--color-text); max-width:980px;">
        <div>
          <h1 style="margin:0 0 12px; font-family:var(--font-heading); font-size:var(--font-size-h1);">Como editar el sistema</h1>
          <p style="margin:0; color:var(--color-text-muted); line-height:var(--line-height-base);">Storybook aqui cumple dos roles: editor global del design system y laboratorio de cada componente.</p>
        </div>
        <div style="display:grid; gap:16px; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));">
          <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 10px; font-family:var(--font-heading); font-size:var(--font-size-h3);">Theme Builder</h2>
            <p style="margin:0; color:var(--color-text-muted);">Edita tokens globales y colecciones JSON compartidas: hero, services, stats, testimonials, faq, logos, process y features.</p>
          </div>
          <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 10px; font-family:var(--font-heading); font-size:var(--font-size-h3);">Stories</h2>
            <p style="margin:0; color:var(--color-text-muted);">Prueban variantes, estados, tamanos, hover, disabled, long copy y props locales de atoms, molecules y organisms.</p>
          </div>
          <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">
            <h2 style="margin:0 0 10px; font-family:var(--font-heading); font-size:var(--font-size-h3);">Pages Mock</h2>
            <p style="margin:0; color:var(--color-text-muted);">Verifican propagacion real. Si cambias algo global, Home, Services, About y Contact deben reaccionar igual.</p>
          </div>
        </div>
      </div>
    `,
  }),
};

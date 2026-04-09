import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => ({
    template: `
      <div style="padding:32px; color:var(--color-text); display:grid; gap:24px;">
        <div style="display:grid; gap:12px;">
          <h1 style="margin:0; font-family:var(--font-heading); font-size:var(--font-size-h2);">Spacing</h1>
          <p style="margin:0; color:var(--color-text-muted);">Visualiza ritmo vertical, padding de cards y densidad de botones desde tokens globales.</p>
        </div>
        <div style="display:grid; gap:var(--space-stack);">
          <div style="display:grid; gap:12px;">
            <strong>Section Y</strong>
            <div style="height:var(--space-section-y); background:color-mix(in srgb, var(--color-primary) 18%, transparent); border-radius:var(--radius-md);"></div>
          </div>
          <div style="display:grid; gap:12px;">
            <strong>Card Padding</strong>
            <div style="padding:var(--space-card-padding); background:color-mix(in srgb, var(--color-surface) 90%, transparent); border:1px solid var(--color-border); border-radius:var(--radius-md);">Contenido con padding tokenizado</div>
          </div>
          <div style="display:flex; gap:16px; flex-wrap:wrap;">
            <button style="padding:var(--space-button-y) var(--space-button-x); border-radius:var(--radius-pill); border:none; background:var(--color-primary); color:white;">Boton base</button>
            <button style="padding:calc(var(--space-button-y) * .75) calc(var(--space-button-x) * .82); border-radius:var(--radius-pill); border:1px solid var(--color-border); background:transparent; color:var(--color-text);">Boton denso</button>
          </div>
        </div>
      </div>
    `,
  }),
};

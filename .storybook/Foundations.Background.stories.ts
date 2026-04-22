import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: '🎨 Diseño Global/Fondo',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Canvas: Story = {
  render: () => ({
    template: `
      <div style="padding:32px; min-height:100vh; display:grid; place-items:center;">
        <div style="width:min(100%, 760px); padding:32px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 88%, transparent 12%); backdrop-filter:blur(10px); color:var(--color-text); box-shadow:var(--shadow-card);">
          <h1 style="margin:0 0 12px; font-family:var(--font-heading); font-size:var(--font-size-h2);">Background global</h1>
          <p style="margin:0; color:var(--color-text-muted);">Si cambias solid, gradient o image en el Theme Builder, este story debe reflejarlo igual que Pages, Atoms y Sections.</p>
        </div>
      </div>
    `,
  }),
};

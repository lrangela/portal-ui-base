import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: '🎨 Diseño Global/Bordes Redondeados',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Corners: Story = {
  render: () => ({
    template: `
      <div style="padding:32px; display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; color:var(--color-text);">
        <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-sm); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">Radius SM</div>
        <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">Radius MD</div>
        <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 92%, transparent);">Radius LG</div>
        <div style="padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-pill); background:color-mix(in srgb, var(--color-primary) 12%, white 88%); color:var(--color-primary);">Radius Pill</div>
      </div>
    `,
  }),
};

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' }
};
export default meta;
type Story = StoryObj;

export const Palette: Story = {
  render: () => ({
    template: `
      <div style="padding: 32px; min-height: 100vh;">
        <h1 style="font-family: var(--font-heading); font-size: var(--font-size-h2); margin-bottom: 24px; color: var(--color-text);">Paleta base</h1>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
          <div style="background:var(--color-primary); color:white; padding:24px; border-radius:var(--radius-md);">Primary<br /><span style="opacity:0.72;">var(--color-primary)</span></div>
          <div style="background:var(--color-secondary); color:white; padding:24px; border-radius:var(--radius-md);">Secondary<br /><span style="opacity:0.72;">var(--color-secondary)</span></div>
          <div style="background:var(--color-accent); color:var(--color-text); padding:24px; border-radius:var(--radius-md);">Accent<br /><span style="opacity:0.72;">var(--color-accent)</span></div>
          <div style="background:color-mix(in srgb, var(--color-background) 86%, transparent 14%); color:var(--color-text); padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-md); backdrop-filter: blur(8px);">Background<br /><span style="opacity:0.72;">var(--color-background)</span></div>
          <div style="background:color-mix(in srgb, var(--color-surface) 92%, transparent 8%); color:var(--color-text); padding:24px; border:1px solid var(--color-border); border-radius:var(--radius-md); backdrop-filter: blur(8px);">Surface<br /><span style="opacity:0.72;">var(--color-surface)</span></div>
          <div style="background:var(--color-text); color:white; padding:24px; border-radius:var(--radius-md);">Text<br /><span style="opacity:0.72;">var(--color-text)</span></div>
        </div>
      </div>
    `
  })
};

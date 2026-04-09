import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Foundations/Shadows',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj;

export const Elevation: Story = {
  render: () => ({
    template: `
      <div style="padding:32px; display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:20px; color:var(--color-text);">
        <div style="padding:24px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow:var(--shadow-card);">Shadow Card</div>
        <button style="padding:var(--space-button-y) var(--space-button-x); border:none; border-radius:var(--radius-pill); background:var(--color-primary); color:white; box-shadow:var(--shadow-button);">Shadow Button</button>
      </div>
    `,
  }),
};

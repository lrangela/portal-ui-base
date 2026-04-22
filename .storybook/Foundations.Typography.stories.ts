import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: '🎨 Diseño Global/Colores y Tipografía/Tipografía',
  parameters: { layout: 'fullscreen' }
};
export default meta;
type Story = StoryObj;

export const TypeScale: Story = {
  render: () => ({
    template: `
      <div style="padding: 32px; color: var(--color-text);">
        <div style="background:color-mix(in srgb, var(--color-surface) 88%, transparent 12%); border:1px solid var(--color-border); border-radius:var(--radius-lg); padding:32px; backdrop-filter: blur(10px);">
          <h1 style="font-family: var(--font-heading); font-size: var(--font-size-h1); margin: 0 0 16px;">Heading 1</h1>
          <h2 style="font-family: var(--font-heading); font-size: var(--font-size-h2); margin: 0 0 16px;">Heading 2</h2>
          <h3 style="font-family: var(--font-heading); font-size: var(--font-size-h3); margin: 0 0 16px;">Heading 3</h3>
          <p style="font-family: var(--font-sans); font-size: calc(var(--font-size-base) * 1.125); line-height: var(--line-height-base); max-width: 700px; color: var(--color-text-muted);">
            Este es el texto base para aprobar lectura, jerarquia visual y tono general del portal.
          </p>
        </div>
      </div>
    `
  })
};

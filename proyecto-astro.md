This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
.storybook/Foundations.Colors.stories.ts
.storybook/Foundations.Typography.stories.ts
.storybook/main.ts
.storybook/Pages.HomeMock.stories.ts
.storybook/preview.ts
astro.config.mjs
package.json
public/favicon.ico
public/favicon.svg
README.md
src/components/atoms/BaseButton.stories.ts
src/components/atoms/BaseButton.vue
src/components/atoms/BaseCard.vue
src/components/atoms/BaseHeading.vue
src/components/atoms/BaseSection.astro
src/components/HelloVue.vue
src/components/layouts/MainLayout.astro
src/components/sections/HeroSection.stories.ts
src/components/sections/HeroSection.vue
src/lib/theme-export.ts
src/pages/index.astro
src/stories/assets/accessibility.png
src/stories/assets/accessibility.svg
src/stories/assets/addon-library.png
src/stories/assets/assets.png
src/stories/assets/avif-test-image.avif
src/stories/assets/context.png
src/stories/assets/discord.svg
src/stories/assets/docs.png
src/stories/assets/figma-plugin.png
src/stories/assets/github.svg
src/stories/assets/share.png
src/stories/assets/styling.png
src/stories/assets/testing.png
src/stories/assets/theming.png
src/stories/assets/tutorials.svg
src/stories/assets/youtube.svg
src/stories/button.css
src/stories/Button.stories.ts
src/stories/Button.vue
src/stories/Configure.mdx
src/stories/header.css
src/stories/Header.stories.ts
src/stories/Header.vue
src/stories/page.css
src/stories/Page.stories.ts
src/stories/Page.vue
src/styles/base.css
src/styles/global.css
src/styles/tokens.css
tsconfig.json
vitest.config.ts
vitest.shims.d.ts
```

# Files

## File: .storybook/Foundations.Colors.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
    title: 'Foundations/Colors',
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj;

export const Palette: Story = {
    render: () => ({
        template: `
      <div style="padding: 32px; background: var(--color-background); min-height: 100vh;">
        <h1 style="font-family: var(--font-heading); font-size: 32px; margin-bottom: 24px;">
          Paleta base
        </h1>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
          <div style="background:#016B6B; color:white; padding:24px; border-radius:16px;">Primary<br>#016B6B</div>
          <div style="background:#0E2A47; color:white; padding:24px; border-radius:16px;">Secondary<br>#0E2A47</div>
          <div style="background:#56D4C9; color:#102A43; padding:24px; border-radius:16px;">Accent<br>#56D4C9</div>
          <div style="background:#F5F7F8; color:#102A43; padding:24px; border:1px solid #D9E2EC; border-radius:16px;">Background<br>#F5F7F8</div>
          <div style="background:#FFFFFF; color:#102A43; padding:24px; border:1px solid #D9E2EC; border-radius:16px;">Surface<br>#FFFFFF</div>
          <div style="background:#102A43; color:white; padding:24px; border-radius:16px;">Text<br>#102A43</div>
        </div>
      </div>
    `
    })
};
````

## File: .storybook/Foundations.Typography.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
    title: 'Foundations/Typography',
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj;

export const TypeScale: Story = {
    render: () => ({
        template: `
      <div style="padding: 32px; background: var(--color-background); color: var(--color-text);">
        <h1 style="font-family: var(--font-heading); font-size: 56px; margin: 0 0 16px;">Heading 1</h1>
        <h2 style="font-family: var(--font-heading); font-size: 40px; margin: 0 0 16px;">Heading 2</h2>
        <h3 style="font-family: var(--font-heading); font-size: 28px; margin: 0 0 16px;">Heading 3</h3>
        <p style="font-family: var(--font-sans); font-size: 18px; line-height: 1.7; max-width: 700px;">
          Este es el texto base para aprobar lectura, jerarquía visual y tono general del portal.
        </p>
      </div>
    `
    })
};
````

## File: .storybook/main.ts
````typescript
import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(vue());
    config.plugins.push(tailwindcss());
    return config;
  }
};
export default config;
````

## File: .storybook/Pages.HomeMock.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3';
import HeroSection from '../components/sections/HeroSection.vue';

const meta: Meta = {
    title: 'Pages/Home Mock',
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    render: () => ({
        components: { HeroSection },
        template: `
      <div style="background: var(--color-background); min-height: 100vh;">
        <HeroSection
          eyebrow="Consultoría tecnológica"
          title="Construimos experiencias web para clientes internacionales"
          description="Esta vista ayuda a validar fondo, composición, ritmo visual y jerarquía general antes de avanzar con toda la web."
          primaryCta="Solicitar evaluación"
          secondaryCta="Conocer más"
        />
        <section style="max-width: 1200px; margin: 0 auto; padding: 0 24px 64px;">
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
            <div style="background:white; border:1px solid #D9E2EC; border-radius:16px; padding:24px;">
              <h3 style="margin-top:0;">Desarrollo web</h3>
              <p>Aplicaciones modernas, rápidas y escalables.</p>
            </div>
            <div style="background:white; border:1px solid #D9E2EC; border-radius:16px; padding:24px;">
              <h3 style="margin-top:0;">Arquitectura</h3>
              <p>Diseño técnico para crecimiento sostenible.</p>
            </div>
            <div style="background:white; border:1px solid #D9E2EC; border-radius:16px; padding:24px;">
              <h3 style="margin-top:0;">Consultoría UX</h3>
              <p>Experiencias claras, consistentes y orientadas a negocio.</p>
            </div>
          </div>
        </section>
      </div>
    `
    })
};
````

## File: .storybook/preview.ts
````typescript
import '../src/styles/global.css';
import type { Decorator } from '@storybook/vue3';

export const globalTypes = {
  primaryColor: {
    name: 'Primary Color',
    control: 'color',
    defaultValue: '#016B6B',
  },
  backgroundColor: {
    name: 'Background',
    control: 'color',
    defaultValue: '#F5F7F8',
  },
  fontSize: {
    name: 'Font Size',
    control: { type: 'number', min: 12, max: 80 },
    defaultValue: 16,
  },
  fontSizeH1: {
    name: 'H1 Size',
    control: { type: 'number', min: 20, max: 120 },
    defaultValue: 48,
  },
  fontFamily: {
    name: 'Font',
    control: 'text',
    defaultValue: 'Inter',
  },
  backgroundType: {
    name: 'Background Type',
    control: 'select',
    options: ['solid', 'gradient']
  }
};

export const decorators: Decorator[] = [
  (story: any, context: any) => {
    const { primaryColor, backgroundColor, fontSize, fontFamily, fontSizeH1, backgroundType } = context.globals;

    const root = document.documentElement;

    root.style.setProperty('--color-primary', primaryColor);
    root.style.setProperty('--color-background', backgroundColor);
    root.style.setProperty('--font-size-base', fontSize + 'px');
    root.style.setProperty('--font-family', fontFamily);
    root.style.setProperty('--font-size-h1', fontSizeH1 + 'px');

    if (backgroundType === 'gradient') {
      root.style.setProperty('--background-image', 'linear-gradient(135deg, #0E2A47, #016B6B)');
    } else {
      root.style.setProperty('--background-image', 'none');
    }

    loadGoogleFont(fontFamily);

    return story();
  }
];

export const ExportTheme = {
  render: () => ({
    template: `<button onclick="window.exportTheme()">Export JSON</button>`
  })
};

export function applyTheme(theme: any) {
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value as string);
  });
}

function loadGoogleFont(font: string) {
  const linkId = 'dynamic-font';

  let link = document.getElementById(linkId) as HTMLLinkElement;

  if (!link) {
    link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  link.href = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@400;600;700&display=swap`;
}
````

## File: src/components/atoms/BaseButton.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from './BaseButton.vue';

const meta: Meta<typeof BaseButton> = {
    title: 'Atoms/BaseButton',
    component: BaseButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline']
        }
    }
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
    args: {
        variant: 'primary'
    },
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args };
        },
        template: `<BaseButton v-bind="args">Solicitar evaluación</BaseButton>`
    })
};

export const Secondary: Story = {
    args: {
        variant: 'secondary'
    },
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args };
        },
        template: `<BaseButton v-bind="args">Ver proyecto</BaseButton>`
    })
};

export const Outline: Story = {
    args: {
        variant: 'outline'
    },
    render: (args) => ({
        components: { BaseButton },
        setup() {
            return { args };
        },
        template: `<BaseButton v-bind="args">Conocer más</BaseButton>`
    })
};
````

## File: src/components/atoms/BaseButton.vue
````vue
<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition cursor-pointer',
      variant === 'primary' && 'bg-[var(--color-primary)] text-white hover:opacity-90',
      variant === 'secondary' && 'bg-[var(--color-secondary)] text-white hover:opacity-90',
      variant === 'outline' && 'border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:bg-slate-50',
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "outline";
  }>(),
  {
    variant: "primary",
  },
);
</script>
````

## File: src/components/atoms/BaseCard.vue
````vue

````

## File: src/components/atoms/BaseHeading.vue
````vue

````

## File: src/components/atoms/BaseSection.astro
````astro

````

## File: src/components/HelloVue.vue
````vue
<template>
  <section class="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]">
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
    <p class="mt-3 text-[var(--color-text-muted)]">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  message: string;
}>();
</script>
````

## File: src/components/layouts/MainLayout.astro
````astro
---
import "../../styles/global.css";

interface Props {
  title?: string;
}

const { title = "Portal tecnológico" } = Astro.props;
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
````

## File: src/components/sections/HeroSection.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3';
import HeroSection from './HeroSection.vue';

const meta: Meta<typeof HeroSection> = {
    title: 'Sections/HeroSection',
    component: HeroSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
    args: {
        eyebrow: 'Consultoría tecnológica',
        title: 'Diseñamos y construimos soluciones digitales escalables',
        description:
            'Ayudamos a empresas a transformar sus productos digitales con desarrollo web, arquitectura moderna y experiencia de usuario.',
        primaryCta: 'Solicitar evaluación',
        secondaryCta: 'Ver portafolio'
    }
};

export const DarkerMood: Story = {
    render: (args) => ({
        components: { HeroSection },
        setup() {
            return { args };
        },
        template: `
      <div style="background:#0E2A47; min-height:100vh; padding:0; color:white;">
        <HeroSection v-bind="args" />
      </div>
    `
    }),
    args: {
        eyebrow: 'Soluciones web',
        title: 'Una presencia digital moderna para una consultora global',
        description:
            'Explora una variante visual más intensa para comparar la sensación de marca.',
        primaryCta: 'Agendar reunión',
        secondaryCta: 'Explorar servicios'
    }
};
````

## File: src/components/sections/HeroSection.vue
````vue
<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="space-y-6">
      <span
        class="inline-flex rounded-full border border-[var(--color-border)] bg-white px-4 py-1 text-sm text-[var(--color-text-muted)]"
      >
        {{ eyebrow }}
      </span>

      <h1 class="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
        {{ title }}
      </h1>

      <p class="max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-4">
        <BaseButton variant="primary">{{ primaryCta }}</BaseButton>
        <BaseButton variant="outline">{{ secondaryCta }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import BaseButton from "../atoms/BaseButton.vue";

  withDefaults(
    defineProps<{
      eyebrow?: string;
      title: string;
      description: string;
      primaryCta?: string;
      secondaryCta?: string;
    }>(),
    {
      eyebrow: "Consultoría tecnológica",
      primaryCta: "Solicitar evaluación",
      secondaryCta: "Ver portafolio",
    },
  );
</script>
````

## File: src/lib/theme-export.ts
````typescript
export function exportTheme() {
    const root = getComputedStyle(document.documentElement);

    const theme = {
        primary: root.getPropertyValue('--color-primary'),
        background: root.getPropertyValue('--color-background'),
        fontSize: root.getPropertyValue('--font-size-base'),
        fontFamily: root.getPropertyValue('--font-family'),
    };

    const blob = new Blob([JSON.stringify(theme, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme.json';
    a.click();
}
````

## File: src/stories/assets/accessibility.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><title>Accessibility</title><circle cx="24.334" cy="24" r="24" fill="#A849FF" fill-opacity=".3"/><path fill="#A470D5" fill-rule="evenodd" d="M27.8609 11.585C27.8609 9.59506 26.2497 7.99023 24.2519 7.99023C22.254 7.99023 20.6429 9.65925 20.6429 11.585C20.6429 13.575 22.254 15.1799 24.2519 15.1799C26.2497 15.1799 27.8609 13.575 27.8609 11.585ZM21.8922 22.6473C21.8467 23.9096 21.7901 25.4788 21.5897 26.2771C20.9853 29.0462 17.7348 36.3314 17.3325 37.2275C17.1891 37.4923 17.1077 37.7955 17.1077 38.1178C17.1077 39.1519 17.946 39.9902 18.9802 39.9902C19.6587 39.9902 20.253 39.6293 20.5814 39.0889L20.6429 38.9874L24.2841 31.22C24.2841 31.22 27.5529 37.9214 27.9238 38.6591C28.2948 39.3967 28.8709 39.9902 29.7168 39.9902C30.751 39.9902 31.5893 39.1519 31.5893 38.1178C31.5893 37.7951 31.3639 37.2265 31.3639 37.2265C30.9581 36.3258 27.698 29.0452 27.0938 26.2771C26.8975 25.4948 26.847 23.9722 26.8056 22.7236C26.7927 22.333 26.7806 21.9693 26.7653 21.6634C26.7008 21.214 27.0231 20.8289 27.4097 20.7005L35.3366 18.3253C36.3033 18.0685 36.8834 16.9773 36.6256 16.0144C36.3678 15.0515 35.2722 14.4737 34.3055 14.7305C34.3055 14.7305 26.8619 17.1057 24.2841 17.1057C21.7062 17.1057 14.456 14.7947 14.456 14.7947C13.4893 14.5379 12.3937 14.9873 12.0715 15.9502C11.7493 16.9131 12.3293 18.0044 13.3604 18.3253L21.2873 20.7005C21.674 20.8289 21.9318 21.214 21.9318 21.6634C21.9174 21.9493 21.9053 22.2857 21.8922 22.6473Z" clip-rule="evenodd"/></svg>
````

## File: src/stories/assets/discord.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32"><g clip-path="url(#clip0_10031_177575)"><mask id="mask0_10031_177575" style="mask-type:luminance" width="33" height="25" x="0" y="4" maskUnits="userSpaceOnUse"><path fill="#fff" d="M32.5034 4.00195H0.503906V28.7758H32.5034V4.00195Z"/></mask><g mask="url(#mask0_10031_177575)"><path fill="#5865F2" d="M27.5928 6.20817C25.5533 5.27289 23.3662 4.58382 21.0794 4.18916C21.0378 4.18154 20.9962 4.20057 20.9747 4.23864C20.6935 4.73863 20.3819 5.3909 20.1637 5.90358C17.7042 5.53558 15.2573 5.53558 12.8481 5.90358C12.6299 5.37951 12.307 4.73863 12.0245 4.23864C12.003 4.20184 11.9614 4.18281 11.9198 4.18916C9.63431 4.58255 7.44721 5.27163 5.40641 6.20817C5.38874 6.21578 5.3736 6.22848 5.36355 6.24497C1.21508 12.439 0.078646 18.4809 0.636144 24.4478C0.638667 24.477 0.655064 24.5049 0.677768 24.5227C3.41481 26.5315 6.06609 27.7511 8.66815 28.5594C8.70979 28.5721 8.75392 28.5569 8.78042 28.5226C9.39594 27.6826 9.94461 26.7968 10.4151 25.8653C10.4428 25.8107 10.4163 25.746 10.3596 25.7244C9.48927 25.3945 8.66058 24.9922 7.86343 24.5354C7.80038 24.4986 7.79533 24.4084 7.85333 24.3653C8.02108 24.2397 8.18888 24.109 8.34906 23.977C8.37804 23.9529 8.41842 23.9478 8.45249 23.963C13.6894 26.3526 19.359 26.3526 24.5341 23.963C24.5682 23.9465 24.6086 23.9516 24.6388 23.9757C24.799 24.1077 24.9668 24.2397 25.1358 24.3653C25.1938 24.4084 25.19 24.4986 25.127 24.5354C24.3298 25.0011 23.5011 25.3945 22.6296 25.7232C22.5728 25.7447 22.5476 25.8107 22.5754 25.8653C23.0559 26.7955 23.6046 27.6812 24.2087 28.5213C24.234 28.5569 24.2794 28.5721 24.321 28.5594C26.9357 27.7511 29.5869 26.5315 32.324 24.5227C32.348 24.5049 32.3631 24.4783 32.3656 24.4491C33.0328 17.5506 31.2481 11.5584 27.6344 6.24623C27.6256 6.22848 27.6105 6.21578 27.5928 6.20817ZM11.1971 20.8146C9.62043 20.8146 8.32129 19.3679 8.32129 17.5913C8.32129 15.8146 9.59523 14.368 11.1971 14.368C12.8115 14.368 14.0981 15.8273 14.0729 17.5913C14.0729 19.3679 12.7989 20.8146 11.1971 20.8146ZM21.8299 20.8146C20.2533 20.8146 18.9541 19.3679 18.9541 17.5913C18.9541 15.8146 20.228 14.368 21.8299 14.368C23.4444 14.368 24.7309 15.8273 24.7057 17.5913C24.7057 19.3679 23.4444 20.8146 21.8299 20.8146Z"/></g></g><defs><clipPath id="clip0_10031_177575"><rect width="32" height="32" fill="#fff" transform="translate(0.5)"/></clipPath></defs></svg>
````

## File: src/stories/assets/github.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#161614" d="M16.0001 0C7.16466 0 0 7.17472 0 16.0256C0 23.1061 4.58452 29.1131 10.9419 31.2322C11.7415 31.3805 12.0351 30.8845 12.0351 30.4613C12.0351 30.0791 12.0202 28.8167 12.0133 27.4776C7.56209 28.447 6.62283 25.5868 6.62283 25.5868C5.89499 23.7345 4.8463 23.2419 4.8463 23.2419C3.39461 22.2473 4.95573 22.2678 4.95573 22.2678C6.56242 22.3808 7.40842 23.9192 7.40842 23.9192C8.83547 26.3691 11.1514 25.6609 12.0645 25.2514C12.2081 24.2156 12.6227 23.5087 13.0803 23.1085C9.52648 22.7032 5.7906 21.3291 5.7906 15.1886C5.7906 13.4389 6.41563 12.0094 7.43916 10.8871C7.27303 10.4834 6.72537 8.85349 7.59415 6.64609C7.59415 6.64609 8.93774 6.21539 11.9953 8.28877C13.2716 7.9337 14.6404 7.75563 16.0001 7.74953C17.3599 7.75563 18.7297 7.9337 20.0084 8.28877C23.0623 6.21539 24.404 6.64609 24.404 6.64609C25.2749 8.85349 24.727 10.4834 24.5608 10.8871C25.5868 12.0094 26.2075 13.4389 26.2075 15.1886C26.2075 21.3437 22.4645 22.699 18.9017 23.0957C19.4756 23.593 19.9869 24.5683 19.9869 26.0634C19.9869 28.2077 19.9684 29.9334 19.9684 30.4613C19.9684 30.8877 20.2564 31.3874 21.0674 31.2301C27.4213 29.1086 32 23.1037 32 16.0256C32 7.17472 24.8364 0 16.0001 0ZM5.99257 22.8288C5.95733 22.9084 5.83227 22.9322 5.71834 22.8776C5.60229 22.8253 5.53711 22.7168 5.57474 22.6369C5.60918 22.5549 5.7345 22.5321 5.85029 22.587C5.9666 22.6393 6.03284 22.7489 5.99257 22.8288ZM6.7796 23.5321C6.70329 23.603 6.55412 23.5701 6.45291 23.4581C6.34825 23.3464 6.32864 23.197 6.40601 23.125C6.4847 23.0542 6.62937 23.0874 6.73429 23.1991C6.83895 23.3121 6.85935 23.4605 6.7796 23.5321ZM7.31953 24.4321C7.2215 24.5003 7.0612 24.4363 6.96211 24.2938C6.86407 24.1513 6.86407 23.9804 6.96422 23.9119C7.06358 23.8435 7.2215 23.905 7.32191 24.0465C7.41968 24.1914 7.41968 24.3623 7.31953 24.4321ZM8.23267 25.4743C8.14497 25.5712 7.95818 25.5452 7.82146 25.413C7.68156 25.2838 7.64261 25.1004 7.73058 25.0035C7.81934 24.9064 8.00719 24.9337 8.14497 25.0648C8.28381 25.1938 8.3262 25.3785 8.23267 25.4743ZM9.41281 25.8262C9.37413 25.9517 9.19423 26.0088 9.013 25.9554C8.83203 25.9005 8.7136 25.7535 8.75016 25.6266C8.78778 25.5003 8.96848 25.4408 9.15104 25.4979C9.33174 25.5526 9.45044 25.6985 9.41281 25.8262ZM10.7559 25.9754C10.7604 26.1076 10.6067 26.2172 10.4165 26.2196C10.2252 26.2238 10.0704 26.1169 10.0683 25.9868C10.0683 25.8534 10.2185 25.7448 10.4098 25.7416C10.6001 25.7379 10.7559 25.8441 10.7559 25.9754ZM12.0753 25.9248C12.0981 26.0537 11.9658 26.1862 11.7769 26.2215C11.5912 26.2554 11.4192 26.1758 11.3957 26.0479C11.3726 25.9157 11.5072 25.7833 11.6927 25.7491C11.8819 25.7162 12.0512 25.7937 12.0753 25.9248Z"/></svg>
````

## File: src/stories/assets/tutorials.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32"><g clip-path="url(#clip0_10031_177597)"><path fill="#B7F0EF" fill-rule="evenodd" d="M17 7.87059C17 6.48214 17.9812 5.28722 19.3431 5.01709L29.5249 2.99755C31.3238 2.64076 33 4.01717 33 5.85105V22.1344C33 23.5229 32.0188 24.7178 30.6569 24.9879L20.4751 27.0074C18.6762 27.3642 17 25.9878 17 24.1539L17 7.87059Z" clip-rule="evenodd" opacity=".7"/><path fill="#87E6E5" fill-rule="evenodd" d="M1 5.85245C1 4.01857 2.67623 2.64215 4.47507 2.99895L14.6569 5.01848C16.0188 5.28861 17 6.48354 17 7.87198V24.1553C17 25.9892 15.3238 27.3656 13.5249 27.0088L3.34311 24.9893C1.98119 24.7192 1 23.5242 1 22.1358V5.85245Z" clip-rule="evenodd"/><path fill="#61C1FD" fill-rule="evenodd" d="M15.543 5.71289C15.543 5.71289 16.8157 5.96289 17.4002 6.57653C17.9847 7.19016 18.4521 9.03107 18.4521 9.03107C18.4521 9.03107 18.4521 25.1106 18.4521 26.9629C18.4521 28.8152 19.3775 31.4174 19.3775 31.4174L17.4002 28.8947L16.2575 31.4174C16.2575 31.4174 15.543 29.0765 15.543 27.122C15.543 25.1674 15.543 5.71289 15.543 5.71289Z" clip-rule="evenodd"/></g><defs><clipPath id="clip0_10031_177597"><rect width="32" height="32" fill="#fff" transform="translate(0.5)"/></clipPath></defs></svg>
````

## File: src/stories/assets/youtube.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#ED1D24" d="M31.3313 8.44657C30.9633 7.08998 29.8791 6.02172 28.5022 5.65916C26.0067 5.00026 16 5.00026 16 5.00026C16 5.00026 5.99333 5.00026 3.4978 5.65916C2.12102 6.02172 1.03665 7.08998 0.668678 8.44657C0 10.9053 0 16.0353 0 16.0353C0 16.0353 0 21.1652 0.668678 23.6242C1.03665 24.9806 2.12102 26.0489 3.4978 26.4116C5.99333 27.0703 16 27.0703 16 27.0703C16 27.0703 26.0067 27.0703 28.5022 26.4116C29.8791 26.0489 30.9633 24.9806 31.3313 23.6242C32 21.1652 32 16.0353 32 16.0353C32 16.0353 32 10.9053 31.3313 8.44657Z"/><path fill="#fff" d="M12.7266 20.6934L21.0902 16.036L12.7266 11.3781V20.6934Z"/></svg>
````

## File: src/stories/button.css
````css
.storybook-button {
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.storybook-button--primary {
  background-color: #555ab9;
  color: white;
}
.storybook-button--secondary {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  background-color: transparent;
  color: #333;
}
.storybook-button--small {
  padding: 10px 16px;
  font-size: 12px;
}
.storybook-button--medium {
  padding: 11px 20px;
  font-size: 14px;
}
.storybook-button--large {
  padding: 12px 24px;
  font-size: 16px;
}
````

## File: src/stories/Button.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: {
    primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};
````

## File: src/stories/Button.vue
````vue
<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import './button.css';

const props = withDefaults(
  defineProps<{
    /**
     * The label of the button
     */
    label: string;
    /**
     * primary or secondary button
     */
    primary?: boolean;
    /**
     * size of the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * background color of the button
     */
    backgroundColor?: string;
  }>(),
  { primary: false }
);

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const onClick = () => {
  emit('click', 1);
};
</script>
````

## File: src/stories/Configure.mdx
````markdown
import { Meta } from "@storybook/addon-docs/blocks";

import Github from "./assets/github.svg";
import Discord from "./assets/discord.svg";
import Youtube from "./assets/youtube.svg";
import Tutorials from "./assets/tutorials.svg";
import Styling from "./assets/styling.png";
import Context from "./assets/context.png";
import Assets from "./assets/assets.png";
import Docs from "./assets/docs.png";
import Share from "./assets/share.png";
import FigmaPlugin from "./assets/figma-plugin.png";
import Testing from "./assets/testing.png";
import Accessibility from "./assets/accessibility.png";
import Theming from "./assets/theming.png";
import AddonLibrary from "./assets/addon-library.png";

export const RightArrow = () => <svg 
    viewBox="0 0 14 14" 
    width="8px" 
    height="14px" 
    style={{ 
      marginLeft: '4px',
      display: 'inline-block',
      shapeRendering: 'inherit',
      verticalAlign: 'middle',
      fill: 'currentColor',
      'path fill': 'currentColor'
    }}
>
  <path d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" />
</svg>

<Meta title="Configure your project" />

<div className="sb-container">
  <div className='sb-section-title'>
    # Configure your project

    Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.
  </div>
  <div className="sb-section">
    <div className="sb-section-item">
      <img
        src={Styling}
        alt="A wall of logos representing different styling technologies"
      />
      <h4 className="sb-section-item-heading">Add styling and CSS</h4>
      <p className="sb-section-item-paragraph">Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.</p>
      <a
        className="sb-action-link"
        href="https://storybook.js.org/docs/configure/styling-and-css/?renderer=vue3&ref=configure"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <img
        src={Context}
        alt="An abstraction representing the composition of data for a component"
      />
      <h4 className="sb-section-item-heading">Provide context and mocking</h4>
      <p className="sb-section-item-paragraph">Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.</p>
      <a
        className="sb-action-link"
        href="https://storybook.js.org/docs/writing-stories/decorators/?renderer=vue3&ref=configure#context-for-mocking"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <img src={Assets} alt="A representation of typography and image assets" />
      <div>
        <h4 className="sb-section-item-heading">Load assets and resources</h4>
        <p className="sb-section-item-paragraph">To link static files (like fonts) to your projects and stories, use the
        `staticDirs` configuration option to specify folders to load when
        starting Storybook.</p>
        <a
          className="sb-action-link"
          href="https://storybook.js.org/docs/configure/images-and-assets/?renderer=vue3&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className="sb-container">
  <div className='sb-section-title'>
    # Do more with Storybook

    Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs.
  </div>

  <div className="sb-section">
    <div className="sb-features-grid">
      <div className="sb-grid-item">
        <img src={Docs} alt="A screenshot showing the autodocs tag being set, pointing a docs page being generated" />
        <h4 className="sb-section-item-heading">Autodocs</h4>
        <p className="sb-section-item-paragraph">Auto-generate living,
          interactive reference documentation from your components and stories.</p>
        <a
          className="sb-action-link"
          href="https://storybook.js.org/docs/writing-docs/autodocs/?renderer=vue3&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Share} alt="A browser window showing a Storybook being published to a chromatic.com URL" />
        <h4 className="sb-section-item-heading">Publish to Chromatic</h4>
        <p className="sb-section-item-paragraph">Publish your Storybook to review and collaborate with your entire team.</p>
        <a
          className="sb-action-link"
          href="https://storybook.js.org/docs/sharing/publish-storybook/?renderer=vue3&ref=configure#publish-storybook-with-chromatic"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={FigmaPlugin} alt="Windows showing the Storybook plugin in Figma" />
        <h4 className="sb-section-item-heading">Figma Plugin</h4>
        <p className="sb-section-item-paragraph">Embed your stories into Figma to cross-reference the design and live
          implementation in one place.</p>
        <a
          className="sb-action-link"
          href="https://storybook.js.org/docs/sharing/design-integrations/?renderer=vue3&ref=configure#embed-storybook-in-figma-with-the-plugin"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Testing} alt="Screenshot of tests passing and failing" />
        <h4 className="sb-section-item-heading">Testing</h4>
        <p className="sb-section-item-paragraph">Use stories to test a component in all its variations, no matter how
          complex.</p>
        <a
          className="sb-action-link"
          href="https://storybook.js.org/docs/writing-tests/?renderer=vue3&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Accessibility} alt="Screenshot of accessibility tests passing and failing" />
        <h4 className="sb-section-item-heading">Accessibility</h4>
        <p className="sb-section-item-paragraph">Automatically test your components for a11y issues as you develop.</p>
        <a
          className="sb-action-link"
          href="https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=vue3&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <img src={Theming} alt="Screenshot of Storybook in light and dark mode" />
        <h4 className="sb-section-item-heading">Theming</h4>
        <p className="sb-section-item-paragraph">Theme Storybook's UI to personalize it to your project.</p>
        <a
          className="sb-action-link"
          href="https://storybook.js.org/docs/configure/theming/?renderer=vue3&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className='sb-addon'>
  <div className='sb-addon-text'>
    <h4>Addons</h4>
    <p className="sb-section-item-paragraph">Integrate your tools with Storybook to connect workflows.</p>
    <a
        className="sb-action-link"
        href="https://storybook.js.org/addons/?ref=configure"
        target="_blank"
      >Discover all addons<RightArrow /></a>
  </div>
  <div className='sb-addon-img'>
    <img src={AddonLibrary} alt="Integrate your tools with Storybook to connect workflows." />
  </div>
</div>

<div className="sb-section sb-socials">
    <div className="sb-section-item">
      <img src={Github} alt="Github logo" className="sb-explore-image"/>
      Join our contributors building the future of UI development.

      <a
        className="sb-action-link"
        href="https://github.com/storybookjs/storybook"
        target="_blank"
      >Star on GitHub<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <img src={Discord} alt="Discord logo" className="sb-explore-image"/>
      <div>
        Get support and chat with frontend developers.

        <a
          className="sb-action-link"
          href="https://discord.gg/storybook"
          target="_blank"
        >Join Discord server<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <img src={Youtube} alt="Youtube logo" className="sb-explore-image"/>
      <div>
        Watch tutorials, feature previews and interviews.

        <a
          className="sb-action-link"
          href="https://www.youtube.com/@chromaticui"
          target="_blank"
        >Watch on YouTube<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <img src={Tutorials} alt="A book" className="sb-explore-image"/>
      <p>Follow guided walkthroughs on for key workflows.</p>

      <a
          className="sb-action-link"
          href="https://storybook.js.org/tutorials/?ref=configure"
          target="_blank"
        >Discover tutorials<RightArrow /></a>
    </div>
</div>

<style>
  {`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-action-link {
    text-decoration: none;
  }

  .sb-action-link:hover, .sb-action-link:focus {
    text-decoration: underline;
    text-decoration-thickness: 0.03125rem;
    text-underline-offset: 0.11em;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `}
</style>
````

## File: src/stories/header.css
````css
.storybook-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  display: inline-block;
  vertical-align: top;
  margin: 6px 0 6px 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  margin-right: 10px;
  color: #333;
  font-size: 14px;
}
````

## File: src/stories/Header.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import MyHeader from './Header.vue';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Header',
  component: MyHeader,
  render: (args: any) => ({
    components: { MyHeader },
    setup() {
      return { args };
    },
    template: '<my-header :user="args.user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {
  args: {
    user: null,
  },
};
````

## File: src/stories/Header.vue
````vue
<template>
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        <span class="welcome" v-if="user"
          >Welcome, <b>{{ user.name }}</b
          >!</span
        >
        <my-button size="small" @click="$emit('logout')" label="Log out" v-if="user" />
        <my-button size="small" @click="$emit('login')" label="Log in" v-if="!user" />
        <my-button
          primary
          size="small"
          @click="$emit('createAccount')"
          label="Sign up"
          v-if="!user"
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import MyButton from './Button.vue';
import './header.css';

defineProps<{ user: { name: string } | null }>();

defineEmits<{
  (event: 'createAccount'): void;
  (event: 'login'): void;
  (event: 'logout'): void;
}>();
</script>
````

## File: src/stories/page.css
````css
.storybook-page {
  margin: 0 auto;
  padding: 48px 20px;
  max-width: 600px;
  color: #333;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.storybook-page h2 {
  display: inline-block;
  vertical-align: top;
  margin: 0 0 4px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  color: inherit;
}

.storybook-page ul {
  margin: 1em 0;
  padding-left: 30px;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  border-radius: 1em;
  background: #e7fdd8;
  padding: 4px 12px;
  color: #357a14;
  font-weight: 700;
  font-size: 11px;
  line-height: 12px;
}

.storybook-page .tip-wrapper {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 13px;
  line-height: 20px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  vertical-align: top;
  margin-top: 3px;
  margin-right: 4px;
  width: 12px;
  height: 12px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
}
````

## File: src/stories/Page.stories.ts
````typescript
import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { expect, userEvent, within } from 'storybook/test';

import MyPage from './Page.vue';

const meta = {
  title: 'Example/Page',
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: '<my-page />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export const LoggedOut: Story = {};
````

## File: src/stories/Page.vue
````vue
<template>
  <article>
    <my-header :user="user" @login="onLogin" @logout="onLogout" @create-account="onCreateAccount" />

    <section class="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong>
        </a>
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer"
          >Storybook tutorials</a
        >
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span>
        Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import MyHeader from './Header.vue';
import './page.css';

const user = ref<{ name: string } | null>(null);

const onLogin = () => {
  user.value = { name: 'Jane Doe' };
};
const onLogout = () => {
  user.value = null;
};
const onCreateAccount = () => {
  user.value = { name: 'Jane Doe' };
};
</script>
````

## File: src/styles/base.css
````css
html {
  font-family: var(--font-sans);
  background-color: var(--color-background);
  color: var(--color-text);
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--color-background);
  background-image: var(--background-image);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}
````

## File: src/styles/global.css
````css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@600;700;800&display=swap");
@import "tailwindcss";
@import "./tokens.css";
@import "./base.css";
````

## File: src/styles/tokens.css
````css
:root {
  /* COLORS */
  --color-primary: #016B6B;
  --color-secondary: #0E2A47;
  --color-accent: #56D4C9;
  --color-background: #F5F7F8;
  --color-surface: #FFFFFF;
  --color-text: #102A43;

  /* TYPOGRAPHY */
  --font-family: "Inter", sans-serif;
  --font-size-base: 16px;
  --font-size-h1: 48px;
  --font-size-h2: 36px;
  --font-size-h3: 24px;

  --letter-spacing: 0px;
  --line-height: 1.5;

  /* SPACING */
  --spacing-base: 16px;

  /* BORDER */
  --radius: 12px;

  /* SHADOW */
  --shadow-card: 0 8px 24px rgba(0,0,0,0.08);

  /* BACKGROUND STYLE */
  --background-type: solid;
  --background-image: none;
}
````

## File: vitest.config.ts
````typescript
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
````

## File: vitest.shims.d.ts
````typescript
/// <reference types="@vitest/browser-playwright" />
````

## File: .gitignore
````
# build output
dist/
# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# jetbrains setting folder
.idea/

*storybook.log
storybook-static
````

## File: astro.config.mjs
````javascript
// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()]
  }
});
````

## File: package.json
````json
{
  "name": "portal-tech-company",
  "type": "module",
  "version": "0.0.1",
  "engines": {
    "node": ">=22.12.0"
  },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "@astrojs/vue": "^6.0.1",
    "@tailwindcss/vite": "^4.2.2",
    "astro": "^6.1.4",
    "tailwindcss": "^4.2.2",
    "vue": "^3.5.32"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^5.1.1",
    "@storybook/addon-a11y": "^10.3.5",
    "@storybook/addon-docs": "^10.3.5",
    "@storybook/addon-onboarding": "^10.3.5",
    "@storybook/addon-vitest": "^10.3.5",
    "@storybook/vue3-vite": "^10.3.5",
    "@vitejs/plugin-vue": "^6.0.5",
    "@vitest/browser-playwright": "^4.1.3",
    "@vitest/coverage-v8": "^4.1.3",
    "playwright": "^1.59.1",
    "storybook": "^10.3.5",
    "vitest": "^4.1.3"
  }
}
````

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
    <path d="M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z" />
    <style>
        path { fill: #000; }
        @media (prefers-color-scheme: dark) {
            path { fill: #FFF; }
        }
    </style>
</svg>
````

## File: README.md
````markdown
# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
````

## File: src/pages/index.astro
````astro
---
import MainLayout from "../components/layouts/MainLayout.astro";
import HelloVue from "../components/HelloVue.vue";
import HeroSection from "../components/sections/HeroSection.vue";
---

<MainLayout title="Inicio">
  <HeroSection client:load title="prueba" description="prueba" />

  <main class="mx-auto max-w-6xl px-6 pb-16">
    <HelloVue
      client:load
      title="Primer componente Vue"
      message="Hoy dejamos lista la base visual del proyecto con Tailwind, tokens y componentes reutilizables."
    />
  </main>
</MainLayout>
````

## File: tsconfig.json
````json
{
  "extends": "astro/tsconfigs/strict",
  "include": [
    ".astro/types.d.ts",
    "**/*"
  ],
  "exclude": [
    "dist"
  ],
  "compilerOptions": {
    "jsx": "preserve"
  }
}
````

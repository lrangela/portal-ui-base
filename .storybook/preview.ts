import '../src/styles/global.css';
import type { Preview } from '@storybook/vue3';
import {
  DEFAULT_THEME,
  applyThemeToRoot,
  downloadTheme,
  globalsToTheme,
  loadGoogleFonts,
  themeToGlobals,
} from '../src/lib/theme';

const initialThemeGlobals = themeToGlobals(DEFAULT_THEME);

function createGlobalType(name: string, defaultValue: unknown) {
  return {
    name,
    description: `Theme token: ${name}`,
    defaultValue,
  };
}

const preview: Preview = {
  initialGlobals: initialThemeGlobals,
  parameters: {
    options: {
      storySort: {
        order: [
          '🚀 Empezar Aquí',
          '🎨 Diseño Global',
          '🧩 Piezas del Sitio',
          '📐 Plantillas Completas',
        ],
      },
    },
  },
  globalTypes: Object.fromEntries(
    Object.entries(initialThemeGlobals).map(([key, value]) => [key, createGlobalType(key, value)]),
  ),
  decorators: [
    (story, context) => {
      const theme = globalsToTheme(context.globals);
      const storyResult = story();

      applyThemeToRoot(theme);
      loadGoogleFonts([theme.typography.fontSans, theme.typography.fontHeading]);

      if (typeof window !== 'undefined') {
        (
          window as typeof window & {
            exportTheme?: () => void;
            __PORTAL_THEME__?: ReturnType<typeof themeToGlobals>;
          }
        ).exportTheme = () => downloadTheme(theme);
        (
          window as typeof window & {
            exportTheme?: () => void;
            __PORTAL_THEME__?: ReturnType<typeof themeToGlobals>;
          }
        ).__PORTAL_THEME__ = themeToGlobals(theme);
      }

      return {
        components: { Story: storyResult },
        template: `
          <div
            style="
              min-height: 100vh;
              background-color: var(--background-color-page);
              background-image: var(--background-image);
              background-size: cover;
              background-position: center;
              background-attachment: var(--background-attachment);
            "
          >
            <Story />
          </div>
        `,
      };
    },
  ],
};

export default preview;

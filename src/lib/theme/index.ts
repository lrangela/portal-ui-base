import type { ThemeFoundations } from './foundations';
import type { ThemeSemanticColors } from './semantic';
import type { ThemeComponentTokens } from './components';
import type { ThemeContent } from './content';

export * from './foundations';
export * from './semantic';
export * from './components';
export * from './content';
export * from './schema';

export interface ThemeConfig {
  colors: ThemeFoundations['colors'] & ThemeSemanticColors;
  typography: ThemeFoundations['typography'];
  spacing: ThemeFoundations['spacing'];
  radius: ThemeFoundations['radius'];
  shadow: ThemeFoundations['shadow'];
  layout: ThemeFoundations['layout'];
  background: ThemeFoundations['background'];
  components: ThemeComponentTokens;
  content: ThemeContent;
}

export {
  DEFAULT_THEME,
  ENTERPRISE_THEME,
  MODERN_CONSULTANCY_THEME,
  DARK_VARIANT_THEME
} from './presets';

export {
  themeToGlobals,
  globalsToTheme,
  getBackgroundLayers,
  applyThemeToRoot,
  loadGoogleFonts,
  serializeTheme,
  parseTheme,
  downloadTheme
} from './runtime';

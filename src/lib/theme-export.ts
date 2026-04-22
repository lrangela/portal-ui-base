import type { ThemeConfig } from "./theme";
import { DEFAULT_THEME, downloadTheme, parseTheme, serializeTheme } from "./theme";
export function exportTheme(theme: ThemeConfig = DEFAULT_THEME) {
  downloadTheme(theme);
}

export function exportThemeString(theme: ThemeConfig = DEFAULT_THEME) {
  return serializeTheme(theme);
}

export function importThemeFromString(raw: string) {
  return parseTheme(raw);
}

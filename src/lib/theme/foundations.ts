export const GOOGLE_FONT_OPTIONS = [
  'Inter',
  'Manrope',
  'Space Grotesk',
  'Plus Jakarta Sans',
  'DM Sans',
  'Source Sans 3',
] as const;

export type BackgroundType = 'solid' | 'gradient' | 'image';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
}

export interface ThemeTypography {
  fontSans: string;
  fontHeading: string;
  fontSizeBase: number;
  fontSizeH1: number;
  fontSizeH2: number;
  fontSizeH3: number;
  buttonFontSize: number;
  letterSpacing: number;
  lineHeight: number;
}

export interface ThemeSpacing {
  sectionY: number;
  sectionX: number;
  stackGap: number;
  cardPadding: number;
  buttonPaddingY: number;
  buttonPaddingX: number;
}

export interface ThemeRadius {
  sm: number;
  md: number;
  lg: number;
  pill: number;
}

export interface ThemeShadow {
  card: string;
  button: string;
}

export interface ThemeLayout {
  contentMaxWidth: number;
  heroMaxWidth: number;
  cardMinWidth: number;
}

export interface ThemeBackground {
  type: BackgroundType;
  solid: string;
  gradientFrom: string;
  gradientTo: string;
  imageUrl: string;
  imageOverlay: string;
  parallax: boolean;
}

export interface ThemeFoundations {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  radius: ThemeRadius;
  shadow: ThemeShadow;
  layout: ThemeLayout;
  background: ThemeBackground;
}

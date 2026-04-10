import type { ThemeConfig } from './index';
import type { ServiceItem, StatItem, TestimonialItem, FaqItem, FeatureItem, ProcessItem } from './content';
import type { ThemeBackground } from './foundations';
import { DEFAULT_THEME } from './presets';
function cloneDefaultTheme(): ThemeConfig {
  return JSON.parse(JSON.stringify(DEFAULT_THEME)) as ThemeConfig;
}
function clampNumber(value: unknown, fallback: number) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string') {
    const parsed = Number.parseFloat(value.replace('px', '').trim());
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}
function normalizeString(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}
function normalizeStringArray(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  const normalized = value.map((item) => normalizeString(item, '')).filter(Boolean);
  return normalized.length ? normalized : fallback;
}
function normalizeServices(value: unknown, fallback: ServiceItem[]) {
  if (!Array.isArray(value)) return fallback;
  const normalized = value
    .filter((item) => item && typeof item === 'object')
    .map((item) => ({
      title: normalizeString((item as ServiceItem).title, 'Nuevo servicio'),
      description: normalizeString((item as ServiceItem).description, 'Describe el servicio aqui.'),
      icon: normalizeString((item as ServiceItem).icon, 'Layers3'),
    }));
  return normalized.length ? normalized : fallback;
}
function normalizeStats(value: unknown, fallback: StatItem[]) {
  if (!Array.isArray(value)) return fallback;
  const normalized = value
    .filter((item) => item && typeof item === 'object')
    .map((item) => ({
      label: normalizeString((item as StatItem).label, 'Metrica'),
      value: normalizeString((item as StatItem).value, '0'),
      description: normalizeString((item as StatItem).description, 'Describe esta metrica.'),
      icon: normalizeString((item as StatItem).icon, 'BarChart3'),
    }));
  return normalized.length ? normalized : fallback;
}
function normalizeTestimonials(value: unknown, fallback: TestimonialItem[]) {
  if (!Array.isArray(value)) return fallback;
  const normalized = value
    .filter((item) => item && typeof item === 'object')
    .map((item) => ({
      quote: normalizeString((item as TestimonialItem).quote, 'Escribe un testimonio aqui.'),
      name: normalizeString((item as TestimonialItem).name, 'Cliente'),
      role: normalizeString((item as TestimonialItem).role, 'Cargo'),
      avatar: normalizeString((item as TestimonialItem).avatar, ''),
      rating: clampNumber((item as TestimonialItem).rating, 5),
    }));
  return normalized.length ? normalized : fallback;
}
function normalizeFaq(value: unknown, fallback: FaqItem[]) {
  if (!Array.isArray(value)) return fallback;
  const normalized = value
    .filter((item) => item && typeof item === 'object')
    .map((item) => ({
      question: normalizeString((item as FaqItem).question, 'Pregunta'),
      answer: normalizeString((item as FaqItem).answer, 'Respuesta'),
    }));
  return normalized.length ? normalized : fallback;
}
function normalizeFeatures(value: unknown, fallback: FeatureItem[]) {
  if (!Array.isArray(value)) return fallback;
  const normalized = value
    .filter((item) => item && typeof item === 'object')
    .map((item) => ({
      icon: normalizeString((item as FeatureItem).icon, 'Sparkles'),
      title: normalizeString((item as FeatureItem).title, 'Feature'),
      description: normalizeString((item as FeatureItem).description, 'Describe esta capacidad.'),
    }));
  return normalized.length ? normalized : fallback;
}
function normalizeProcess(value: unknown, fallback: ProcessItem[]) {
  if (!Array.isArray(value)) return fallback;
  const normalized = value
    .filter((item) => item && typeof item === 'object')
    .map((item) => ({
      title: normalizeString((item as ProcessItem).title, 'Paso'),
      description: normalizeString((item as ProcessItem).description, 'Describe el paso.'),
    }));
  return normalized.length ? normalized : fallback;
}
function parseJson<T>(raw: unknown, fallback: T, normalizer: (value: unknown, fallback: T) => T) {
  try {
    return normalizer(JSON.parse(normalizeString(raw, '[]')), fallback);
  } catch {
    return fallback;
  }
}

export function themeToGlobals(theme: ThemeConfig) {
  return {
    colorPrimary: theme.colors.primary,
    colorSecondary: theme.colors.secondary,
    colorAccent: theme.colors.accent,
    colorBackground: theme.colors.background,
    colorSurface: theme.colors.surface,
    colorText: theme.colors.text,
    colorTextMuted: theme.colors.textMuted,
    colorBorder: theme.colors.border,
    fontSans: theme.typography.fontSans,
    fontHeading: theme.typography.fontHeading,
    fontSizeBase: theme.typography.fontSizeBase,
    fontSizeH1: theme.typography.fontSizeH1,
    fontSizeH2: theme.typography.fontSizeH2,
    fontSizeH3: theme.typography.fontSizeH3,
    buttonFontSize: theme.typography.buttonFontSize,
    letterSpacing: theme.typography.letterSpacing,
    lineHeight: theme.typography.lineHeight,
    sectionY: theme.spacing.sectionY,
    sectionX: theme.spacing.sectionX,
    stackGap: theme.spacing.stackGap,
    cardPadding: theme.spacing.cardPadding,
    buttonPaddingY: theme.spacing.buttonPaddingY,
    buttonPaddingX: theme.spacing.buttonPaddingX,
    radiusSm: theme.radius.sm,
    radiusMd: theme.radius.md,
    radiusLg: theme.radius.lg,
    radiusPill: theme.radius.pill,
    shadowCard: theme.shadow.card,
    shadowButton: theme.shadow.button,
    contentMaxWidth: theme.layout.contentMaxWidth,
    heroMaxWidth: theme.layout.heroMaxWidth,
    cardMinWidth: theme.layout.cardMinWidth,
    buttonPrimaryBg: theme.components.button.primaryBg,
    buttonPrimaryText: theme.components.button.primaryText,
    buttonSecondaryBg: theme.components.button.secondaryBg,
    buttonSecondaryText: theme.components.button.secondaryText,
    buttonOutlineBg: theme.components.button.outlineBg,
    buttonOutlineText: theme.components.button.outlineText,
    buttonGhostText: theme.components.button.ghostText,
    badgeDefaultBg: theme.components.badge.defaultBg,
    badgeDefaultText: theme.components.badge.defaultText,
    badgeSuccessBg: theme.components.badge.successBg,
    badgeSuccessText: theme.components.badge.successText,
    badgeWarningBg: theme.components.badge.warningBg,
    badgeWarningText: theme.components.badge.warningText,
    badgeDangerBg: theme.components.badge.dangerBg,
    badgeDangerText: theme.components.badge.dangerText,
    badgeNeutralBg: theme.components.badge.neutralBg,
    badgeNeutralText: theme.components.badge.neutralText,
    badgeInverseBg: theme.components.badge.inverseBg,
    badgeInverseText: theme.components.badge.inverseText,
    cardSurfaceBg: theme.components.card.surfaceBg,
    cardPrimaryBg: theme.components.card.primaryBg,
    cardSecondaryBg: theme.components.card.secondaryBg,
    cardBorderColor: theme.components.card.borderColor,
    backgroundType: theme.background.type,
    backgroundSolid: theme.background.solid,
    backgroundGradientFrom: theme.background.gradientFrom,
    backgroundGradientTo: theme.background.gradientTo,
    backgroundImageUrl: theme.background.imageUrl,
    backgroundImageOverlay: theme.background.imageOverlay,
    backgroundParallax: theme.background.parallax,
    heroEyebrow: theme.content.heroEyebrow,
    heroTitle: theme.content.heroTitle,
    heroDescription: theme.content.heroDescription,
    heroPrimaryCta: theme.content.heroPrimaryCta,
    heroSecondaryCta: theme.content.heroSecondaryCta,
    servicesJson: JSON.stringify(theme.content.services, null, 2),
    statsJson: JSON.stringify(theme.content.stats, null, 2),
    testimonialsJson: JSON.stringify(theme.content.testimonials, null, 2),
    faqJson: JSON.stringify(theme.content.faq, null, 2),
    logosJson: JSON.stringify(theme.content.logos, null, 2),
    whatWeDoJson: JSON.stringify(theme.content.whatWeDo, null, 2),
    whyChooseUsJson: JSON.stringify(theme.content.whyChooseUs, null, 2),
    processJson: JSON.stringify(theme.content.process, null, 2),
  };
}

export function globalsToTheme(globals: Record<string, unknown> = {}): ThemeConfig {
  const theme = cloneDefaultTheme();
  theme.colors.primary = normalizeString(globals.colorPrimary, theme.colors.primary);
  theme.colors.secondary = normalizeString(globals.colorSecondary, theme.colors.secondary);
  theme.colors.accent = normalizeString(globals.colorAccent, theme.colors.accent);
  theme.colors.background = normalizeString(globals.colorBackground, theme.colors.background);
  theme.colors.surface = normalizeString(globals.colorSurface, theme.colors.surface);
  theme.colors.text = normalizeString(globals.colorText, theme.colors.text);
  theme.colors.textMuted = normalizeString(globals.colorTextMuted, theme.colors.textMuted);
  theme.colors.border = normalizeString(globals.colorBorder, theme.colors.border);
  theme.typography.fontSans = normalizeString(globals.fontSans, theme.typography.fontSans);
  theme.typography.fontHeading = normalizeString(globals.fontHeading, theme.typography.fontHeading);
  theme.typography.fontSizeBase = clampNumber(globals.fontSizeBase, theme.typography.fontSizeBase);
  theme.typography.fontSizeH1 = clampNumber(globals.fontSizeH1, theme.typography.fontSizeH1);
  theme.typography.fontSizeH2 = clampNumber(globals.fontSizeH2, theme.typography.fontSizeH2);
  theme.typography.fontSizeH3 = clampNumber(globals.fontSizeH3, theme.typography.fontSizeH3);
  theme.typography.buttonFontSize = clampNumber(globals.buttonFontSize, theme.typography.buttonFontSize);
  theme.typography.letterSpacing = clampNumber(globals.letterSpacing, theme.typography.letterSpacing);
  theme.typography.lineHeight = clampNumber(globals.lineHeight, theme.typography.lineHeight);
  theme.spacing.sectionY = clampNumber(globals.sectionY, theme.spacing.sectionY);
  theme.spacing.sectionX = clampNumber(globals.sectionX, theme.spacing.sectionX);
  theme.spacing.stackGap = clampNumber(globals.stackGap, theme.spacing.stackGap);
  theme.spacing.cardPadding = clampNumber(globals.cardPadding, theme.spacing.cardPadding);
  theme.spacing.buttonPaddingY = clampNumber(globals.buttonPaddingY, theme.spacing.buttonPaddingY);
  theme.spacing.buttonPaddingX = clampNumber(globals.buttonPaddingX, theme.spacing.buttonPaddingX);
  theme.radius.sm = clampNumber(globals.radiusSm, theme.radius.sm);
  theme.radius.md = clampNumber(globals.radiusMd, theme.radius.md);
  theme.radius.lg = clampNumber(globals.radiusLg, theme.radius.lg);
  theme.radius.pill = clampNumber(globals.radiusPill, theme.radius.pill);
  theme.shadow.card = normalizeString(globals.shadowCard, theme.shadow.card);
  theme.shadow.button = normalizeString(globals.shadowButton, theme.shadow.button);
  theme.layout.contentMaxWidth = clampNumber(globals.contentMaxWidth, theme.layout.contentMaxWidth);
  theme.layout.heroMaxWidth = clampNumber(globals.heroMaxWidth, theme.layout.heroMaxWidth);
  theme.layout.cardMinWidth = clampNumber(globals.cardMinWidth, theme.layout.cardMinWidth);
  theme.components.button.primaryBg = normalizeString(globals.buttonPrimaryBg, theme.components.button.primaryBg);
  theme.components.button.primaryText = normalizeString(globals.buttonPrimaryText, theme.components.button.primaryText);
  theme.components.button.secondaryBg = normalizeString(globals.buttonSecondaryBg, theme.components.button.secondaryBg);
  theme.components.button.secondaryText = normalizeString(globals.buttonSecondaryText, theme.components.button.secondaryText);
  theme.components.button.outlineBg = normalizeString(globals.buttonOutlineBg, theme.components.button.outlineBg);
  theme.components.button.outlineText = normalizeString(globals.buttonOutlineText, theme.components.button.outlineText);
  theme.components.button.ghostText = normalizeString(globals.buttonGhostText, theme.components.button.ghostText);
  theme.components.badge.defaultBg = normalizeString(globals.badgeDefaultBg, theme.components.badge.defaultBg);
  theme.components.badge.defaultText = normalizeString(globals.badgeDefaultText, theme.components.badge.defaultText);
  theme.components.badge.successBg = normalizeString(globals.badgeSuccessBg, theme.components.badge.successBg);
  theme.components.badge.successText = normalizeString(globals.badgeSuccessText, theme.components.badge.successText);
  theme.components.badge.warningBg = normalizeString(globals.badgeWarningBg, theme.components.badge.warningBg);
  theme.components.badge.warningText = normalizeString(globals.badgeWarningText, theme.components.badge.warningText);
  theme.components.badge.dangerBg = normalizeString(globals.badgeDangerBg, theme.components.badge.dangerBg);
  theme.components.badge.dangerText = normalizeString(globals.badgeDangerText, theme.components.badge.dangerText);
  theme.components.badge.neutralBg = normalizeString(globals.badgeNeutralBg, theme.components.badge.neutralBg);
  theme.components.badge.neutralText = normalizeString(globals.badgeNeutralText, theme.components.badge.neutralText);
  theme.components.badge.inverseBg = normalizeString(globals.badgeInverseBg, theme.components.badge.inverseBg);
  theme.components.badge.inverseText = normalizeString(globals.badgeInverseText, theme.components.badge.inverseText);
  theme.components.card.surfaceBg = normalizeString(globals.cardSurfaceBg, theme.components.card.surfaceBg);
  theme.components.card.primaryBg = normalizeString(globals.cardPrimaryBg, theme.components.card.primaryBg);
  theme.components.card.secondaryBg = normalizeString(globals.cardSecondaryBg, theme.components.card.secondaryBg);
  theme.components.card.borderColor = normalizeString(globals.cardBorderColor, theme.components.card.borderColor);
  const backgroundType = normalizeString(globals.backgroundType, theme.background.type) as ThemeBackground['type'];
  theme.background.type = ['solid', 'gradient', 'image'].includes(backgroundType) ? backgroundType : theme.background.type;
  theme.background.solid = normalizeString(globals.backgroundSolid, theme.background.solid);
  theme.background.gradientFrom = normalizeString(globals.backgroundGradientFrom, theme.background.gradientFrom);
  theme.background.gradientTo = normalizeString(globals.backgroundGradientTo, theme.background.gradientTo);
  theme.background.imageUrl = normalizeString(globals.backgroundImageUrl, theme.background.imageUrl);
  theme.background.imageOverlay = normalizeString(globals.backgroundImageOverlay, theme.background.imageOverlay);
  theme.background.parallax = typeof globals.backgroundParallax === 'boolean' ? globals.backgroundParallax : theme.background.parallax;
  theme.content.heroEyebrow = normalizeString(globals.heroEyebrow, theme.content.heroEyebrow);
  theme.content.heroTitle = normalizeString(globals.heroTitle, theme.content.heroTitle);
  theme.content.heroDescription = normalizeString(globals.heroDescription, theme.content.heroDescription);
  theme.content.heroPrimaryCta = normalizeString(globals.heroPrimaryCta, theme.content.heroPrimaryCta);
  theme.content.heroSecondaryCta = normalizeString(globals.heroSecondaryCta, theme.content.heroSecondaryCta);
  theme.content.services = parseJson(globals.servicesJson, theme.content.services, normalizeServices);
  theme.content.stats = parseJson(globals.statsJson, theme.content.stats, normalizeStats);
  theme.content.testimonials = parseJson(globals.testimonialsJson, theme.content.testimonials, normalizeTestimonials);
  theme.content.faq = parseJson(globals.faqJson, theme.content.faq, normalizeFaq);
  theme.content.logos = parseJson(globals.logosJson, theme.content.logos, normalizeStringArray);
  theme.content.whatWeDo = parseJson(globals.whatWeDoJson, theme.content.whatWeDo, normalizeFeatures);
  theme.content.whyChooseUs = parseJson(globals.whyChooseUsJson, theme.content.whyChooseUs, normalizeFeatures);
  theme.content.process = parseJson(globals.processJson, theme.content.process, normalizeProcess);
  theme.colors.background = theme.background.solid;
  return theme;
}

export function getBackgroundLayers(theme: ThemeConfig) {
  if (theme.background.type === 'gradient') return `linear-gradient(135deg, ${theme.background.gradientFrom}, ${theme.background.gradientTo})`;
  if (theme.background.type === 'image' && theme.background.imageUrl.trim()) return `${theme.background.imageOverlay}, url("${theme.background.imageUrl}")`;
  return 'none';
}

export function applyThemeToRoot(theme: ThemeConfig, root: HTMLElement = document.documentElement) {
  const backgroundLayers = getBackgroundLayers(theme);
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-background', theme.colors.background);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-muted', theme.colors.textMuted);
  root.style.setProperty('--color-border', theme.colors.border);
  root.style.setProperty('--font-sans', `"${theme.typography.fontSans}", sans-serif`);
  root.style.setProperty('--font-heading', `"${theme.typography.fontHeading}", sans-serif`);
  root.style.setProperty('--font-size-base', `${theme.typography.fontSizeBase}px`);
  root.style.setProperty('--font-size-h1', `${theme.typography.fontSizeH1}px`);
  root.style.setProperty('--font-size-h2', `${theme.typography.fontSizeH2}px`);
  root.style.setProperty('--font-size-h3', `${theme.typography.fontSizeH3}px`);
  root.style.setProperty('--font-size-button', `${theme.typography.buttonFontSize}px`);
  root.style.setProperty('--letter-spacing', `${theme.typography.letterSpacing}px`);
  root.style.setProperty('--line-height-base', String(theme.typography.lineHeight));
  root.style.setProperty('--space-section-y', `${theme.spacing.sectionY}px`);
  root.style.setProperty('--space-section-x', `${theme.spacing.sectionX}px`);
  root.style.setProperty('--space-stack', `${theme.spacing.stackGap}px`);
  root.style.setProperty('--space-card-padding', `${theme.spacing.cardPadding}px`);
  root.style.setProperty('--space-button-y', `${theme.spacing.buttonPaddingY}px`);
  root.style.setProperty('--space-button-x', `${theme.spacing.buttonPaddingX}px`);
  root.style.setProperty('--radius-sm', `${theme.radius.sm}px`);
  root.style.setProperty('--radius-md', `${theme.radius.md}px`);
  root.style.setProperty('--radius-lg', `${theme.radius.lg}px`);
  root.style.setProperty('--radius-pill', `${theme.radius.pill}px`);
  root.style.setProperty('--shadow-card', theme.shadow.card);
  root.style.setProperty('--shadow-button', theme.shadow.button);
  root.style.setProperty('--layout-content-max', `${theme.layout.contentMaxWidth}px`);
  root.style.setProperty('--layout-hero-max', `${theme.layout.heroMaxWidth}px`);
  root.style.setProperty('--layout-card-min', `${theme.layout.cardMinWidth}px`);
  root.style.setProperty('--button-primary-bg', theme.components.button.primaryBg);
  root.style.setProperty('--button-primary-text', theme.components.button.primaryText);
  root.style.setProperty('--button-secondary-bg', theme.components.button.secondaryBg);
  root.style.setProperty('--button-secondary-text', theme.components.button.secondaryText);
  root.style.setProperty('--button-outline-bg', theme.components.button.outlineBg);
  root.style.setProperty('--button-outline-text', theme.components.button.outlineText);
  root.style.setProperty('--button-ghost-text', theme.components.button.ghostText);
  root.style.setProperty('--badge-default-bg', theme.components.badge.defaultBg);
  root.style.setProperty('--badge-default-text', theme.components.badge.defaultText);
  root.style.setProperty('--badge-success-bg', theme.components.badge.successBg);
  root.style.setProperty('--badge-success-text', theme.components.badge.successText);
  root.style.setProperty('--badge-warning-bg', theme.components.badge.warningBg);
  root.style.setProperty('--badge-warning-text', theme.components.badge.warningText);
  root.style.setProperty('--badge-danger-bg', theme.components.badge.dangerBg);
  root.style.setProperty('--badge-danger-text', theme.components.badge.dangerText);
  root.style.setProperty('--badge-neutral-bg', theme.components.badge.neutralBg);
  root.style.setProperty('--badge-neutral-text', theme.components.badge.neutralText);
  root.style.setProperty('--badge-inverse-bg', theme.components.badge.inverseBg);
  root.style.setProperty('--badge-inverse-text', theme.components.badge.inverseText);
  root.style.setProperty('--card-surface-bg', theme.components.card.surfaceBg);
  root.style.setProperty('--card-primary-bg', theme.components.card.primaryBg);
  root.style.setProperty('--card-secondary-bg', theme.components.card.secondaryBg);
  root.style.setProperty('--card-border-color', theme.components.card.borderColor);
  root.style.setProperty('--background-type', theme.background.type);
  root.style.setProperty('--background-solid', theme.background.solid);
  root.style.setProperty('--background-gradient-from', theme.background.gradientFrom);
  root.style.setProperty('--background-gradient-to', theme.background.gradientTo);
  root.style.setProperty('--background-image-url', theme.background.imageUrl);
  root.style.setProperty('--background-image-overlay', theme.background.imageOverlay);
  root.style.setProperty('--background-image', backgroundLayers);
  root.style.setProperty('--background-color-page', theme.background.solid);
  root.style.setProperty('--background-attachment', theme.background.parallax && theme.background.type === 'image' ? 'fixed' : 'scroll');
}

export function loadGoogleFonts(fonts: string[]) {
  const families = [...new Set(fonts.filter(Boolean))];
  const linkId = 'portal-theme-fonts';
  if (!families.length || typeof document === 'undefined') return;
  let link = document.getElementById(linkId) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  const familyQuery = families.map((font) => `family=${font.replace(/\s+/g, '+')}:wght@400;500;600;700;800`).join('&');
  link.href = `https://fonts.googleapis.com/css2?${familyQuery}&display=swap`;
}

export function serializeTheme(theme: ThemeConfig) { return JSON.stringify(theme, null, 2); }
export function parseTheme(raw: string) { return globalsToTheme(themeToGlobals(JSON.parse(raw) as ThemeConfig)); }
export function downloadTheme(theme: ThemeConfig, filename = 'theme.json') {
  const blob = new Blob([serializeTheme(theme)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

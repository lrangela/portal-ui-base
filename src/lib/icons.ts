import * as LucideIcons from 'lucide-vue-next';

export type LucideIconName = keyof typeof LucideIcons;

export const CURATED_LUCIDE_ICONS = [
  'ArrowRight',
  'BarChart3',
  'Building2',
  'Check',
  'ChevronLeft',
  'ChevronRight',
  'CircleHelp',
  'LoaderCircle',
  'Mail',
  'MousePointer2',
  'Palette',
  'PenLine',
  'Phone',
  'Quote',
  'Search',
  'Send',
  'Shield',
  'Sparkles',
  'Star',
] as const satisfies LucideIconName[];

export const ALL_LUCIDE_ICON_NAMES = Object.keys(LucideIcons)
  .filter((name) => /^[A-Z]/.test(name) && !name.endsWith('Icon'))
  .sort() as LucideIconName[];

export function resolveLucideIcon(name?: string) {
  if (!name) return LucideIcons.Sparkles;
  const direct = LucideIcons[name as LucideIconName];
  if (direct) return direct;
  const normalized = name
    .replace(/[-_\s]+(.)?/g, (_match, group) => (group ? group.toUpperCase() : ''))
    .replace(/^(.)/, (match) => match.toUpperCase());
  return LucideIcons[normalized as LucideIconName] ?? LucideIcons.Sparkles;
}

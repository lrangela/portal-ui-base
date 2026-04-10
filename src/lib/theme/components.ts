export interface ButtonComponentTokens {
  primaryBg: string;
  primaryText: string;
  secondaryBg: string;
  secondaryText: string;
  outlineBg: string;
  outlineText: string;
  ghostText: string;
}

export interface BadgeComponentTokens {
  defaultBg: string;
  defaultText: string;
  successBg: string;
  successText: string;
  warningBg: string;
  warningText: string;
  dangerBg: string;
  dangerText: string;
  neutralBg: string;
  neutralText: string;
  inverseBg: string;
  inverseText: string;
}

export interface CardComponentTokens {
  surfaceBg: string;
  primaryBg: string;
  secondaryBg: string;
  borderColor: string;
}

export interface ThemeComponentTokens {
  button: ButtonComponentTokens;
  badge: BadgeComponentTokens;
  card: CardComponentTokens;
}

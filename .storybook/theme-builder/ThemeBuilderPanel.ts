import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useGlobals } from 'storybook/manager-api';
import {
  DEFAULT_THEME,
  GOOGLE_FONT_OPTIONS,
  ThemeConfig,
  globalsToTheme,
  parseTheme,
  serializeTheme,
  themeToGlobals,
} from '../../src/lib/theme';

const FONT_OPTIONS = Array.isArray(GOOGLE_FONT_OPTIONS) ? [...GOOGLE_FONT_OPTIONS] : [];
const BACKGROUND_OPTIONS = ['solid', 'gradient', 'image'];

const panelStyle: React.CSSProperties = {
  padding: '16px',
  display: 'grid',
  gap: '16px',
  background: 'radial-gradient(circle at top, rgba(1, 107, 107, 0.08), transparent 32%), #f7fafc',
  minHeight: '100%',
  color: '#102A43',
};
const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #d9e2ec',
  borderRadius: '18px',
  padding: '16px',
  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.07)',
  display: 'grid',
  gap: '12px',
};
const labelStyle: React.CSSProperties = {
  display: 'grid',
  gap: '6px',
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#486581',
};
const inputStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '12px',
  border: '1px solid #bcccdc',
  padding: '10px 12px',
  fontSize: '14px',
  background: '#fff',
  color: '#102A43',
};
const gridStyle: React.CSSProperties = {
  display: 'grid',
  gap: '12px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
};

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return React.createElement(
    'section',
    { style: cardStyle },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { style: { margin: 0, fontSize: '16px', fontWeight: 800 } }, title),
      React.createElement('p', { style: { margin: '6px 0 0', fontSize: '13px', color: '#486581', lineHeight: 1.5 } }, subtitle),
    ),
    children,
  );
}
function LabeledField({ label, children }: { label: string; children: React.ReactNode }) {
  return React.createElement('label', { style: labelStyle }, label, children);
}
function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return React.createElement(
    LabeledField,
    { label },
    React.createElement(
      'div',
      { style: { display: 'grid', gridTemplateColumns: '56px 1fr', gap: '10px' } },
      React.createElement('input', { type: 'color', value: value || '#000000', onChange: (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value), style: { ...inputStyle, padding: '4px', height: '44px' } }),
      React.createElement('input', { type: 'text', value: value || '', onChange: (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value), style: inputStyle }),
    ),
  );
}
function RangeField({ label, value, min, max, step = 1, unit = 'px', onChange }: { label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (value: number) => void }) {
  const safeValue = Number.isFinite(value) ? value : min;
  return React.createElement(
    LabeledField,
    { label: `${label} (${safeValue}${unit})` },
    React.createElement(
      'div',
      { style: { display: 'grid', gap: '8px' } },
      React.createElement('input', { type: 'range', min, max, step, value: safeValue, onChange: (event: ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value)) }),
      React.createElement('input', { type: 'number', min, max, step, value: safeValue, onChange: (event: ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value)), style: inputStyle }),
    ),
  );
}
function TextField({ label, value, onChange, multiline = false, placeholder }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean; placeholder?: string }) {
  const safeValue = value ?? '';
  return React.createElement(
    LabeledField,
    { label },
    multiline
      ? React.createElement('textarea', { value: safeValue, placeholder, onChange: (event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value), rows: 4, style: { ...inputStyle, resize: 'vertical', minHeight: '112px' } })
      : React.createElement('input', { type: 'text', value: safeValue, placeholder, onChange: (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value), style: inputStyle }),
  );
}
function SelectField({ label, value, options = [], onChange }: { label: string; value: string; options?: string[]; onChange: (value: string) => void }) {
  const safeOptions = Array.isArray(options) ? options : [];
  const safeValue = safeOptions.includes(value) ? value : safeOptions[0] || '';
  return React.createElement(
    LabeledField,
    { label },
    React.createElement('select', { value: safeValue, onChange: (event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value), style: inputStyle }, safeOptions.map((option) => React.createElement('option', { key: option, value: option }, option))),
  );
}
function ToggleField({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return React.createElement(
    LabeledField,
    { label },
    React.createElement(
      'label',
      { style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '12px', border: '1px solid #bcccdc', background: '#fff', textTransform: 'none', letterSpacing: 'normal', color: '#102A43' } },
      React.createElement('input', { type: 'checkbox', checked: Boolean(checked), onChange: (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.checked) }),
      checked ? 'Activado' : 'Desactivado',
    ),
  );
}
function JsonEditor({ label, value, buttonLabel, onChange, onApply, rows = 8, helpText }: { label: string; value: string; buttonLabel: string; onChange: (value: string) => void; onApply: () => void; rows?: number; helpText?: string }) {
  return React.createElement(
    LabeledField,
    { label },
    React.createElement('button', { type: 'button', onClick: onApply, style: { ...inputStyle, cursor: 'pointer', width: 'auto', fontWeight: 700, background: '#102A43', borderColor: '#102A43', color: '#fff', marginBottom: '10px' } }, buttonLabel),
    React.createElement('textarea', { value, onChange: (event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value), rows, style: { ...inputStyle, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', resize: 'vertical', minHeight: `${rows * 20}px` } }),
    helpText ? React.createElement('p', { style: { margin: 0, color: '#486581', fontSize: '13px', lineHeight: 1.5 } }, helpText) : null,
  );
}
function updateTheme(theme: ThemeConfig, updater: (draft: ThemeConfig) => void) {
  const draft = structuredClone(theme);
  updater(draft);
  return draft;
}
function previewBackground(theme: ThemeConfig) {
  if (theme.background.type === 'gradient') return `linear-gradient(135deg, ${theme.background.gradientFrom}, ${theme.background.gradientTo})`;
  if (theme.background.type === 'image' && theme.background.imageUrl) return `${theme.background.imageOverlay}, url(${theme.background.imageUrl})`;
  return 'none';
}

export function ThemeBuilderPanel() {
  const globalsHook = useGlobals();
  const globals = globalsHook?.[0] ?? {};
  const updateGlobals = globalsHook?.[1] ?? (() => undefined);
  const [jsonDraft, setJsonDraft] = useState('');
  const [servicesJsonDraft, setServicesJsonDraft] = useState('');
  const [statsJsonDraft, setStatsJsonDraft] = useState('');
  const [testimonialsJsonDraft, setTestimonialsJsonDraft] = useState('');
  const [faqJsonDraft, setFaqJsonDraft] = useState('');
  const [logosJsonDraft, setLogosJsonDraft] = useState('');
  const [whatWeDoJsonDraft, setWhatWeDoJsonDraft] = useState('');
  const [whyChooseUsJsonDraft, setWhyChooseUsJsonDraft] = useState('');
  const [processJsonDraft, setProcessJsonDraft] = useState('');
  const [status, setStatus] = useState('Panel listo. Cambia tokens, contenido y fondo desde aqui.');
  const theme = useMemo(() => globalsToTheme(globals), [globals]);
  const previewJson = useMemo(() => serializeTheme(theme), [theme]);
  const servicesDraft = useMemo(() => JSON.stringify(theme.content.services, null, 2), [theme]);
  const statsDraft = useMemo(() => JSON.stringify(theme.content.stats, null, 2), [theme]);
  const testimonialsDraft = useMemo(() => JSON.stringify(theme.content.testimonials, null, 2), [theme]);
  const faqDraft = useMemo(() => JSON.stringify(theme.content.faq, null, 2), [theme]);
  const logosDraft = useMemo(() => JSON.stringify(theme.content.logos, null, 2), [theme]);
  const whatWeDoDraft = useMemo(() => JSON.stringify(theme.content.whatWeDo, null, 2), [theme]);
  const whyChooseUsDraft = useMemo(() => JSON.stringify(theme.content.whyChooseUs, null, 2), [theme]);
  const processDraft = useMemo(() => JSON.stringify(theme.content.process, null, 2), [theme]);

  useEffect(() => { setServicesJsonDraft(servicesDraft); }, [servicesDraft]);
  useEffect(() => { setStatsJsonDraft(statsDraft); }, [statsDraft]);
  useEffect(() => { setTestimonialsJsonDraft(testimonialsDraft); }, [testimonialsDraft]);
  useEffect(() => { setFaqJsonDraft(faqDraft); }, [faqDraft]);
  useEffect(() => { setLogosJsonDraft(logosDraft); }, [logosDraft]);
  useEffect(() => { setWhatWeDoJsonDraft(whatWeDoDraft); }, [whatWeDoDraft]);
  useEffect(() => { setWhyChooseUsJsonDraft(whyChooseUsDraft); }, [whyChooseUsDraft]);
  useEffect(() => { setProcessJsonDraft(processDraft); }, [processDraft]);

  const applyTheme = (nextTheme: ThemeConfig) => updateGlobals(themeToGlobals(nextTheme));
  const handleReset = () => {
    applyTheme(DEFAULT_THEME);
    setJsonDraft('');
    setStatus('Se restauro el tema base.');
  };
  const handleCopyJson = async () => {
    await navigator.clipboard.writeText(previewJson);
    setStatus('JSON copiado.');
  };
  const handleDownload = () => {
    const blob = new Blob([previewJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portal-theme.json';
    link.click();
    URL.revokeObjectURL(url);
    setStatus('Archivo descargado.');
  };
  const handleFileImport = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      applyTheme(parseTheme(text));
      setJsonDraft(text);
      setStatus(`Tema importado desde ${file.name}.`);
    } catch (error) {
      setStatus(`No pude importar el JSON: ${(error as Error).message}`);
    }
    event.target.value = '';
  };
  const handleJsonApply = () => {
    try {
      applyTheme(parseTheme(jsonDraft || previewJson));
      setStatus('Tema aplicado desde JSON.');
    } catch (error) {
      setStatus(`El JSON no es valido: ${(error as Error).message}`);
    }
  };
  const handleCollectionApply = <K extends keyof ThemeConfig['content']>(key: K, value: string, successMessage: string) => {
    try {
      const parsed = JSON.parse(value) as ThemeConfig['content'][K];
      applyTheme(updateTheme(theme, (draft) => {
        draft.content[key] = parsed;
      }));
      setStatus(successMessage);
    } catch (error) {
      setStatus(`El JSON de ${String(key)} no es valido: ${(error as Error).message}`);
    }
  };

  return React.createElement(
    'div',
    { style: panelStyle },
    React.createElement(
      'section',
      { style: { ...cardStyle, background: 'linear-gradient(135deg, rgba(14,42,71,0.96), rgba(1,107,107,0.96))', color: 'white' } },
      React.createElement('div', null,
        React.createElement('div', { style: { display: 'inline-flex', padding: '6px 10px', borderRadius: '999px', background: 'rgba(255,255,255,0.12)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' } }, 'Theme Builder'),
        React.createElement('h2', { style: { margin: '12px 0 8px', fontSize: '22px', lineHeight: 1.2 } }, 'Editor visual del design system'),
        React.createElement('p', { style: { margin: 0, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 } }, 'Tokens globales se editan aqui. Variantes se revisan en stories. Pages Mock validan que todo reaccione de forma uniforme.'),
      ),
      React.createElement('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
        React.createElement('button', { type: 'button', onClick: () => void handleCopyJson(), style: { ...inputStyle, cursor: 'pointer', background: 'white', border: 'none', width: 'auto', fontWeight: 700 } }, 'Copiar JSON'),
        React.createElement('button', { type: 'button', onClick: handleDownload, style: { ...inputStyle, cursor: 'pointer', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.24)', color: 'white', width: 'auto', fontWeight: 700 } }, 'Descargar JSON'),
        React.createElement('button', { type: 'button', onClick: handleReset, style: { ...inputStyle, cursor: 'pointer', background: 'transparent', border: '1px solid rgba(255,255,255,0.24)', color: 'white', width: 'auto', fontWeight: 700 } }, 'Reset'),
      ),
    ),
    React.createElement('div', { style: { ...cardStyle, padding: '12px 14px', fontSize: '13px', color: '#486581' } }, status),

    React.createElement(Section, { title: 'Modelo De Edicion', subtitle: 'Guia rapida para saber que editar aqui y que revisar por story.' },
      React.createElement('div', { style: { display: 'grid', gap: '10px', color: '#486581', fontSize: '13px', lineHeight: 1.6 } },
        React.createElement('p', { style: { margin: 0 } }, '1. Theme Builder: colores, tipografia, spacing, radius, shadows y colecciones JSON compartidas.'),
        React.createElement('p', { style: { margin: 0 } }, '2. Stories de Atoms/Molecules: variantes, estados, tamanos, disabled, long copy, focus, etc.'),
        React.createElement('p', { style: { margin: 0 } }, '3. Pages Mock: verifican que todos esos cambios se propaguen al portal completo.'),
      ),
    ),

    React.createElement(Section, { title: 'Tipografia', subtitle: 'Tienes presets y tambien inputs libres para cualquier Google Font.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(SelectField, { label: 'Preset Fuente Base', value: theme.typography.fontSans, options: FONT_OPTIONS, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontSans = value; })) }),
        React.createElement(SelectField, { label: 'Preset Fuente Headings', value: theme.typography.fontHeading, options: FONT_OPTIONS, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontHeading = value; })) }),
        React.createElement(TextField, { label: 'Input Google Font Base', value: theme.typography.fontSans, placeholder: 'Ej: Poppins', onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontSans = value; })) }),
        React.createElement(TextField, { label: 'Input Google Font Headings', value: theme.typography.fontHeading, placeholder: 'Ej: Archivo Black', onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontHeading = value; })) }),
        React.createElement(RangeField, { label: 'Base', value: theme.typography.fontSizeBase, min: 14, max: 22, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontSizeBase = value; })) }),
        React.createElement(RangeField, { label: 'H1', value: theme.typography.fontSizeH1, min: 32, max: 88, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontSizeH1 = value; })) }),
        React.createElement(RangeField, { label: 'H2', value: theme.typography.fontSizeH2, min: 24, max: 64, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontSizeH2 = value; })) }),
        React.createElement(RangeField, { label: 'H3', value: theme.typography.fontSizeH3, min: 18, max: 40, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontSizeH3 = value; })) }),
        React.createElement(RangeField, { label: 'Button', value: theme.typography.buttonFontSize, min: 12, max: 24, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.buttonFontSize = value; })) }),
        React.createElement(RangeField, { label: 'Tracking', value: theme.typography.letterSpacing, min: -2, max: 8, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.letterSpacing = value; })) }),
        React.createElement(RangeField, { label: 'Line Height', value: theme.typography.lineHeight, min: 1.1, max: 2, step: 0.1, unit: '', onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.lineHeight = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Background', subtitle: 'Ahora el canvas global respeta este fondo. Si una story se ve distinta, esa story esta sobrescribiendo el sistema.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(SelectField, { label: 'Tipo', value: theme.background.type, options: BACKGROUND_OPTIONS, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.background.type = value as ThemeConfig['background']['type']; })) }),
        React.createElement(ColorField, { label: 'Solid', value: theme.background.solid, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.background.solid = value; draft.colors.background = value; })) }),
        React.createElement(ColorField, { label: 'Gradient From', value: theme.background.gradientFrom, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.background.gradientFrom = value; draft.background.type = 'gradient'; })) }),
        React.createElement(ColorField, { label: 'Gradient To', value: theme.background.gradientTo, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.background.gradientTo = value; draft.background.type = 'gradient'; })) }),
      ),
      React.createElement(TextField, { label: 'Image URL', value: theme.background.imageUrl, placeholder: 'https://.../hero.jpg', onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.background.imageUrl = value; draft.background.type = value ? 'image' : draft.background.type; })) }),
      React.createElement(TextField, { label: 'Overlay CSS', value: theme.background.imageOverlay, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.background.imageOverlay = value; })) }),
      React.createElement(ToggleField, { label: 'Parallax', checked: theme.background.parallax, onChange: (checked) => applyTheme(updateTheme(theme, (draft) => { draft.background.parallax = checked; })) }),
      React.createElement('div', { style: { borderRadius: '14px', border: '1px solid #d9e2ec', minHeight: '140px', backgroundColor: theme.background.solid, backgroundImage: previewBackground(theme), backgroundSize: 'cover', backgroundPosition: 'center' } }),
    ),

    React.createElement(Section, { title: 'Spacing y Layout', subtitle: 'Ritmo, padding y dimensiones generales.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(RangeField, { label: 'Section Y', value: theme.spacing.sectionY, min: 48, max: 160, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.spacing.sectionY = value; })) }),
        React.createElement(RangeField, { label: 'Section X', value: theme.spacing.sectionX, min: 12, max: 64, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.spacing.sectionX = value; })) }),
        React.createElement(RangeField, { label: 'Stack Gap', value: theme.spacing.stackGap, min: 8, max: 48, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.spacing.stackGap = value; })) }),
        React.createElement(RangeField, { label: 'Card Padding', value: theme.spacing.cardPadding, min: 12, max: 48, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.spacing.cardPadding = value; })) }),
        React.createElement(RangeField, { label: 'Button Y', value: theme.spacing.buttonPaddingY, min: 8, max: 24, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.spacing.buttonPaddingY = value; })) }),
        React.createElement(RangeField, { label: 'Button X', value: theme.spacing.buttonPaddingX, min: 12, max: 36, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.spacing.buttonPaddingX = value; })) }),
        React.createElement(RangeField, { label: 'Content Max', value: theme.layout.contentMaxWidth, min: 960, max: 1440, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.layout.contentMaxWidth = value; })) }),
        React.createElement(RangeField, { label: 'Hero Max', value: theme.layout.heroMaxWidth, min: 520, max: 960, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.layout.heroMaxWidth = value; })) }),
        React.createElement(RangeField, { label: 'Card Min', value: theme.layout.cardMinWidth, min: 220, max: 360, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.layout.cardMinWidth = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Radius y Border', subtitle: 'Controla bordes del sistema y color de borde.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(RangeField, { label: 'Radius SM', value: theme.radius.sm, min: 0, max: 24, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.sm = value; })) }),
        React.createElement(RangeField, { label: 'Radius MD', value: theme.radius.md, min: 4, max: 32, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.md = value; })) }),
        React.createElement(RangeField, { label: 'Radius LG', value: theme.radius.lg, min: 8, max: 48, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.lg = value; })) }),
        React.createElement(RangeField, { label: 'Radius Pill', value: theme.radius.pill, min: 40, max: 999, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.pill = value; })) }),
        React.createElement(ColorField, { label: 'Border Color', value: theme.colors.border, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.colors.border = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Shadows', subtitle: 'Sombras para cards y botones.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(TextField, { label: 'Shadow Card', value: theme.shadow.card, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.shadow.card = value; })) }),
        React.createElement(TextField, { label: 'Shadow Button', value: theme.shadow.button, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.shadow.button = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Component Tokens', subtitle: 'Sub-tokens editables para Button, Badge y Card. Sirven para dar personalidad a atomos sin romper el tema global.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(ColorField, { label: 'Button Primary BG', value: theme.components.button.primaryBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.button.primaryBg = value; })) }),
        React.createElement(ColorField, { label: 'Button Primary Text', value: theme.components.button.primaryText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.button.primaryText = value; })) }),
        React.createElement(ColorField, { label: 'Button Secondary BG', value: theme.components.button.secondaryBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.button.secondaryBg = value; })) }),
        React.createElement(ColorField, { label: 'Button Secondary Text', value: theme.components.button.secondaryText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.button.secondaryText = value; })) }),
        React.createElement(ColorField, { label: 'Button Outline BG', value: theme.components.button.outlineBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.button.outlineBg = value; })) }),
        React.createElement(ColorField, { label: 'Button Outline Text', value: theme.components.button.outlineText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.button.outlineText = value; })) }),
        React.createElement(ColorField, { label: 'Button Ghost Text', value: theme.components.button.ghostText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.button.ghostText = value; })) }),
        React.createElement(ColorField, { label: 'Badge Default BG', value: theme.components.badge.defaultBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.defaultBg = value; })) }),
        React.createElement(ColorField, { label: 'Badge Default Text', value: theme.components.badge.defaultText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.defaultText = value; })) }),
        React.createElement(ColorField, { label: 'Badge Success BG', value: theme.components.badge.successBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.successBg = value; })) }),
        React.createElement(ColorField, { label: 'Badge Success Text', value: theme.components.badge.successText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.successText = value; })) }),
        React.createElement(ColorField, { label: 'Badge Warning BG', value: theme.components.badge.warningBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.warningBg = value; })) }),
        React.createElement(ColorField, { label: 'Badge Warning Text', value: theme.components.badge.warningText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.warningText = value; })) }),
        React.createElement(ColorField, { label: 'Badge Danger BG', value: theme.components.badge.dangerBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.dangerBg = value; })) }),
        React.createElement(ColorField, { label: 'Badge Danger Text', value: theme.components.badge.dangerText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.dangerText = value; })) }),
        React.createElement(ColorField, { label: 'Badge Neutral BG', value: theme.components.badge.neutralBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.neutralBg = value; })) }),
        React.createElement(ColorField, { label: 'Badge Neutral Text', value: theme.components.badge.neutralText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.neutralText = value; })) }),
        React.createElement(ColorField, { label: 'Badge Inverse BG', value: theme.components.badge.inverseBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.inverseBg = value; })) }),
        React.createElement(ColorField, { label: 'Badge Inverse Text', value: theme.components.badge.inverseText, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.badge.inverseText = value; })) }),
        React.createElement(TextField, { label: 'Card Surface BG', value: theme.components.card.surfaceBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.card.surfaceBg = value; })) }),
        React.createElement(TextField, { label: 'Card Primary BG', value: theme.components.card.primaryBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.card.primaryBg = value; })) }),
        React.createElement(TextField, { label: 'Card Secondary BG', value: theme.components.card.secondaryBg, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.card.secondaryBg = value; })) }),
        React.createElement(ColorField, { label: 'Card Border Color', value: theme.components.card.borderColor, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.components.card.borderColor = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Hero Content', subtitle: 'Edita textos del hero y exportalos en JSON.' },
      React.createElement(TextField, { label: 'Eyebrow', value: theme.content.heroEyebrow, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroEyebrow = value; })) }),
      React.createElement(TextField, { label: 'Title', value: theme.content.heroTitle, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroTitle = value; })) }),
      React.createElement(TextField, { label: 'Description', value: theme.content.heroDescription, multiline: true, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroDescription = value; })) }),
      React.createElement('div', { style: gridStyle },
        React.createElement(TextField, { label: 'Primary CTA', value: theme.content.heroPrimaryCta, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroPrimaryCta = value; })) }),
        React.createElement(TextField, { label: 'Secondary CTA', value: theme.content.heroSecondaryCta, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroSecondaryCta = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Colecciones Editables', subtitle: 'Estas colecciones se reflejan en sections y pages mock. Si las cambias aqui, se propagan al portal completo.' },
      React.createElement(JsonEditor, { label: 'Services JSON', value: servicesJsonDraft, buttonLabel: 'Aplicar servicios', onChange: setServicesJsonDraft, onApply: () => handleCollectionApply('services', servicesJsonDraft, 'Servicios actualizados.'), rows: 10, helpText: 'Ejemplo: [{ "icon": "Layers3", "title": "Servicio", "description": "Detalle" }]' }),
      React.createElement(JsonEditor, { label: 'Stats JSON', value: statsJsonDraft, buttonLabel: 'Aplicar stats', onChange: setStatsJsonDraft, onApply: () => handleCollectionApply('stats', statsJsonDraft, 'Stats actualizados.'), rows: 8, helpText: 'Ejemplo: [{ "icon": "Gauge", "label": "Metricas", "value": "68%", "description": "Detalle" }]' }),
      React.createElement(JsonEditor, { label: 'Testimonials JSON', value: testimonialsJsonDraft, buttonLabel: 'Aplicar testimonios', onChange: setTestimonialsJsonDraft, onApply: () => handleCollectionApply('testimonials', testimonialsJsonDraft, 'Testimonios actualizados.'), rows: 10 }),
      React.createElement(JsonEditor, { label: 'FAQ JSON', value: faqJsonDraft, buttonLabel: 'Aplicar FAQ', onChange: setFaqJsonDraft, onApply: () => handleCollectionApply('faq', faqJsonDraft, 'FAQ actualizado.'), rows: 8 }),
      React.createElement(JsonEditor, { label: 'Logos JSON', value: logosJsonDraft, buttonLabel: 'Aplicar logos', onChange: setLogosJsonDraft, onApply: () => handleCollectionApply('logos', logosJsonDraft, 'Logos actualizados.'), rows: 6 }),
      React.createElement(JsonEditor, { label: 'What We Do JSON', value: whatWeDoJsonDraft, buttonLabel: 'Aplicar what we do', onChange: setWhatWeDoJsonDraft, onApply: () => handleCollectionApply('whatWeDo', whatWeDoJsonDraft, 'What We Do actualizado.'), rows: 8 }),
      React.createElement(JsonEditor, { label: 'Why Choose Us JSON', value: whyChooseUsJsonDraft, buttonLabel: 'Aplicar why choose us', onChange: setWhyChooseUsJsonDraft, onApply: () => handleCollectionApply('whyChooseUs', whyChooseUsJsonDraft, 'Why Choose Us actualizado.'), rows: 8 }),
      React.createElement(JsonEditor, { label: 'Process JSON', value: processJsonDraft, buttonLabel: 'Aplicar proceso', onChange: setProcessJsonDraft, onApply: () => handleCollectionApply('process', processJsonDraft, 'Proceso actualizado.'), rows: 8 }),
    ),

    React.createElement(Section, { title: 'JSON', subtitle: 'Exporta e importa el estado completo del theme builder, incluyendo tokens y colecciones.' },
      React.createElement('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
        React.createElement('input', { type: 'file', accept: 'application/json', onChange: handleFileImport, style: { ...inputStyle, padding: '9px', maxWidth: '100%' } }),
        React.createElement('button', { type: 'button', onClick: handleJsonApply, style: { ...inputStyle, cursor: 'pointer', width: 'auto', fontWeight: 700, background: '#102A43', borderColor: '#102A43', color: '#fff' } }, 'Aplicar JSON'),
      ),
      React.createElement('textarea', { value: jsonDraft || previewJson, onChange: (event: ChangeEvent<HTMLTextAreaElement>) => setJsonDraft(event.target.value), rows: 12, style: { ...inputStyle, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', resize: 'vertical', minHeight: '240px' } }),
    ),
  );
}

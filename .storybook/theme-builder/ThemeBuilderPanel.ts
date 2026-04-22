import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useGlobals, useStorybookApi, useStorybookState } from 'storybook/manager-api';
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
const groupHeaderStyle: React.CSSProperties = {
  display: 'grid',
  gap: '6px',
  padding: '4px 2px 0',
};
const groupEyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '11px',
  fontWeight: 800,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#016B6B',
};
const helperTextStyle: React.CSSProperties = {
  margin: 0,
  color: '#486581',
  fontSize: '13px',
  lineHeight: 1.5,
};
const badgeStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '6px 10px',
  borderRadius: '999px',
  border: '1px solid #d9e2ec',
  background: '#fff',
  fontSize: '12px',
  fontWeight: 700,
  color: '#102A43',
};
const subtlePanelStyle: React.CSSProperties = {
  borderRadius: '16px',
  border: '1px dashed #bcccdc',
  background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(244,247,250,0.95))',
  padding: '14px 16px',
  display: 'grid',
  gap: '10px',
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
function GroupHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return React.createElement(
    'div',
    { style: groupHeaderStyle },
    React.createElement('p', { style: groupEyebrowStyle }, eyebrow),
    React.createElement('h3', { style: { margin: 0, fontSize: '18px', lineHeight: 1.2, fontWeight: 800, color: '#102A43' } }, title),
    React.createElement('p', { style: helperTextStyle }, subtitle),
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
function getJsonStatus(value: string) {
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return { tone: 'ok', label: `JSON valido · ${parsed.length} items` };
    return { tone: 'ok', label: 'JSON valido · objeto listo' };
  } catch (error) {
    return { tone: 'error', label: `JSON invalido · ${(error as Error).message}` };
  }
}

export function ThemeBuilderPanel() {
  const api = useStorybookApi();
  const state = useStorybookState();
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
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [status, setStatus] = useState('Panel listo. Empieza con colores, tipografias y bordes.');
  const theme = useMemo(() => globalsToTheme(globals), [globals]);
  const currentStory = useMemo(() => {
    try {
      return api.getCurrentStoryData?.() ?? (state.storyId ? api.getData(state.storyId) : undefined);
    } catch {
      return undefined;
    }
  }, [api, state.storyId]);
  const previewJson = useMemo(() => serializeTheme(theme), [theme]);
  const servicesDraft = useMemo(() => JSON.stringify(theme.content.services, null, 2), [theme]);
  const statsDraft = useMemo(() => JSON.stringify(theme.content.stats, null, 2), [theme]);
  const testimonialsDraft = useMemo(() => JSON.stringify(theme.content.testimonials, null, 2), [theme]);
  const faqDraft = useMemo(() => JSON.stringify(theme.content.faq, null, 2), [theme]);
  const logosDraft = useMemo(() => JSON.stringify(theme.content.logos, null, 2), [theme]);
  const whatWeDoDraft = useMemo(() => JSON.stringify(theme.content.whatWeDo, null, 2), [theme]);
  const whyChooseUsDraft = useMemo(() => JSON.stringify(theme.content.whyChooseUs, null, 2), [theme]);
  const processDraft = useMemo(() => JSON.stringify(theme.content.process, null, 2), [theme]);
  const currentStoryName = currentStory?.title ? `${currentStory.title} / ${currentStory.name}` : 'Vista no detectada';
  const currentStoryHint = currentStory?.title?.includes('🎨 Diseño Global')
    ? 'Estas en la mejor vista para validar cambios globales y direccion visual.'
    : currentStory?.title?.includes('📐 Plantillas Completas')
      ? 'Aqui confirmas si el tema y el contenido se propagan bien en una pagina real.'
      : currentStory?.title?.includes('🧩 Piezas del Sitio')
        ? 'Aqui revisas detalle, estados, legibilidad y consistencia por componente.'
        : 'Usa Vista General para validar impacto global y luego baja al detalle.';
  const servicesStatus = getJsonStatus(servicesJsonDraft);
  const statsStatus = getJsonStatus(statsJsonDraft);
  const testimonialsStatus = getJsonStatus(testimonialsJsonDraft);
  const faqStatus = getJsonStatus(faqJsonDraft);
  const logosStatus = getJsonStatus(logosJsonDraft);
  const whatWeDoStatus = getJsonStatus(whatWeDoJsonDraft);
  const whyChooseUsStatus = getJsonStatus(whyChooseUsJsonDraft);
  const processStatus = getJsonStatus(processJsonDraft);

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
  const openOverview = () => {
    api.selectStory?.('🎨-diseño-global-vista-general--default');
  };

  return React.createElement(
    'div',
    { style: panelStyle },
    React.createElement(
      'section',
      { style: { ...cardStyle, background: 'linear-gradient(135deg, rgba(14,42,71,0.96), rgba(1,107,107,0.96))', color: 'white' } },
      React.createElement('div', null,
        React.createElement('div', { style: { display: 'inline-flex', padding: '6px 10px', borderRadius: '999px', background: 'rgba(255,255,255,0.12)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' } }, 'Theme Builder'),
        React.createElement('h2', { style: { margin: '12px 0 8px', fontSize: '22px', lineHeight: 1.2 } }, 'Editor visual del portal'),
        React.createElement('p', { style: { margin: 0, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6 } }, 'Edita aqui el sistema visual y el contenido compartido. Valida primero en Vista General, luego en piezas del sitio y finalmente en plantillas completas.'),
      ),
      React.createElement('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
        React.createElement('button', { type: 'button', onClick: openOverview, style: { ...inputStyle, cursor: 'pointer', background: '#ffffff', border: 'none', width: 'auto', fontWeight: 700 } }, 'Abrir Vista General'),
        React.createElement('button', { type: 'button', onClick: () => void handleCopyJson(), style: { ...inputStyle, cursor: 'pointer', background: 'white', border: 'none', width: 'auto', fontWeight: 700 } }, 'Copiar JSON'),
        React.createElement('button', { type: 'button', onClick: handleDownload, style: { ...inputStyle, cursor: 'pointer', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.24)', color: 'white', width: 'auto', fontWeight: 700 } }, 'Exportar tema'),
        React.createElement('button', { type: 'button', onClick: handleReset, style: { ...inputStyle, cursor: 'pointer', background: 'transparent', border: '1px solid rgba(255,255,255,0.24)', color: 'white', width: 'auto', fontWeight: 700 } }, 'Reset'),
        React.createElement('input', { type: 'file', accept: 'application/json', onChange: handleFileImport, style: { ...inputStyle, padding: '9px', maxWidth: '240px', background: 'rgba(255,255,255,0.92)' } }),
      ),
    ),
    React.createElement(Section, { title: 'Como usar este panel', subtitle: 'Un flujo breve para no perderte entre controles tecnicos.' },
      React.createElement('div', { style: { display: 'grid', gap: '10px' } },
        React.createElement('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
          React.createElement('span', { style: badgeStyle }, '1. Empieza por impacto alto'),
          React.createElement('span', { style: badgeStyle }, '2. Valida en Vista General'),
          React.createElement('span', { style: badgeStyle }, '3. Revisa piezas y plantillas'),
          React.createElement('span', { style: badgeStyle }, '4. Exporta cuando todo cierre'),
        ),
        React.createElement('p', { style: helperTextStyle }, 'Si solo vas a hacer un ajuste rapido, toca primero color primario, fondo, tipografia de titulos y bordes. Las opciones avanzadas sirven para afinar el sistema, no para arrancar.'),
      ),
    ),
    React.createElement(Section, { title: 'Que hay dentro del Theme Builder', subtitle: 'Mapa rapido para entender el panel antes de abrir todo.' },
      React.createElement('div', { style: { display: 'grid', gap: '12px' } },
        React.createElement('div', { style: subtlePanelStyle },
          React.createElement('strong', null, 'Impacto alto'),
          React.createElement('p', { style: helperTextStyle }, 'Colores principales, fondo, tipografias base y bordes. Este bloque responde que tocar primero.'),
        ),
        React.createElement('div', { style: subtlePanelStyle },
          React.createElement('strong', null, 'Sistema visual'),
          React.createElement('p', { style: helperTextStyle }, 'Tipografia avanzada, background, spacing, layout, radios, sombras y ajustes por pieza para afinar el sistema cuando la base ya funciona.'),
        ),
        React.createElement('div', { style: subtlePanelStyle },
          React.createElement('strong', null, 'Contenido'),
          React.createElement('p', { style: helperTextStyle }, 'Textos del hero y colecciones JSON compartidas como servicios, stats, FAQ, logos y proceso.'),
        ),
        React.createElement('div', { style: subtlePanelStyle },
          React.createElement('strong', null, 'JSON / Importar / Exportar'),
          React.createElement('p', { style: helperTextStyle }, 'Estado completo del tema para copiar, descargar, importar o reaplicar desde un JSON unico.'),
        ),
      ),
    ),
    React.createElement(Section, { title: 'Contexto de validacion', subtitle: 'El panel te recuerda donde estas mirando y que tipo de revision conviene hacer.' },
      React.createElement('div', { style: { display: 'grid', gap: '8px' } },
        React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: '#f8fbfc' } }, `Vista activa: ${currentStoryName}`),
        React.createElement('p', { style: helperTextStyle }, currentStoryHint),
        React.createElement('button', { type: 'button', onClick: openOverview, style: { ...inputStyle, cursor: 'pointer', width: 'fit-content', fontWeight: 700, background: '#102A43', borderColor: '#102A43', color: '#fff' } }, 'Ir a Vista General'),
      ),
    ),
    React.createElement('div', { style: { ...cardStyle, padding: '12px 14px', fontSize: '13px', color: '#486581' } }, status),

    React.createElement(GroupHeader, { eyebrow: 'Impacto alto', title: 'Direccion visual inicial', subtitle: 'Empieza aqui cuando quieras definir rapidamente el tono visual del portal.' }),
    React.createElement(Section, { title: 'Direccion visual inicial', subtitle: 'Estos controles suelen responder la pregunta: que toco primero.' },
      React.createElement('div', { style: gridStyle },
        React.createElement('div', { style: { display: 'grid', gap: '8px' } },
          React.createElement(ColorField, { label: 'Color primario', value: theme.colors.primary, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.colors.primary = value; draft.components.button.primaryBg = value; })) }),
          React.createElement('p', { style: helperTextStyle }, 'Afecta botones principales, acentos y llamados de mayor prioridad.'),
        ),
        React.createElement('div', { style: { display: 'grid', gap: '8px' } },
          React.createElement(ColorField, { label: 'Color secundario', value: theme.colors.secondary, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.colors.secondary = value; draft.components.button.secondaryBg = value; })) }),
          React.createElement('p', { style: helperTextStyle }, 'Suele impactar contrastes de apoyo, bloques secundarios y variaciones del CTA.'),
        ),
        React.createElement('div', { style: { display: 'grid', gap: '8px' } },
          React.createElement(ColorField, { label: 'Fondo', value: theme.background.solid, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.background.solid = value; draft.colors.background = value; })) }),
          React.createElement('p', { style: helperTextStyle }, 'Define la base visual del portal y cambia la percepcion general de todo el canvas.'),
        ),
        React.createElement('div', { style: { display: 'grid', gap: '8px' } },
          React.createElement(ColorField, { label: 'Texto', value: theme.colors.text, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.colors.text = value; })) }),
          React.createElement('p', { style: helperTextStyle }, 'Te ayuda a validar legibilidad general en Vista General, tarjetas y secciones.'),
        ),
        React.createElement('div', { style: { display: 'grid', gap: '8px' } },
          React.createElement(SelectField, { label: 'Tipografia base', value: theme.typography.fontSans, options: FONT_OPTIONS, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontSans = value; })) }),
          React.createElement('p', { style: helperTextStyle }, 'Cambia la lectura del cuerpo del sitio y formularios.'),
        ),
        React.createElement('div', { style: { display: 'grid', gap: '8px' } },
          React.createElement(SelectField, { label: 'Tipografia titulos', value: theme.typography.fontHeading, options: FONT_OPTIONS, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.typography.fontHeading = value; })) }),
          React.createElement('p', { style: helperTextStyle }, 'Cambia la voz visual del portal en hero, headings y bloques protagonistas.'),
        ),
        React.createElement('div', { style: { display: 'grid', gap: '8px' } },
          React.createElement(RangeField, { label: 'Bordes', value: theme.radius.md, min: 0, max: 40, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.md = value; draft.radius.lg = Math.max(value, value + 8); })) }),
          React.createElement('p', { style: helperTextStyle }, 'Modifica rapidamente el caracter del sistema: mas corporativo, mas suave o mas agresivo.'),
        ),
      ),
    ),

    React.createElement(
      'button',
      {
        type: 'button',
        onClick: () => setShowAdvanced((current) => !current),
        style: { ...inputStyle, cursor: 'pointer', width: 'fit-content', fontWeight: 800, background: showAdvanced ? '#102A43' : '#ffffff', color: showAdvanced ? '#ffffff' : '#102A43' },
      },
      showAdvanced ? 'Ocultar sistema visual, contenido y JSON avanzado' : 'Abrir sistema visual, contenido y JSON avanzado',
    ),
    React.createElement('div', { style: { ...subtlePanelStyle, padding: '12px 14px' } },
      React.createElement('strong', null, showAdvanced ? 'Ahora tienes visible el panel avanzado.' : 'Ahora estas viendo solo la capa esencial.'),
      React.createElement('p', { style: helperTextStyle }, showAdvanced
        ? 'Veras ajuste fino del sistema, contenido compartido y el bloque de JSON completo para importar o exportar todo el tema.'
        : 'Esta vista reducida sirve para decisiones rapidas. Si necesitas spacing, overrides, colecciones JSON o import/export completo, abre el bloque avanzado.'),
      React.createElement('p', { style: helperTextStyle }, 'El JSON completo no desaparece del sistema: solo se oculta para reducir ruido visual mientras trabajas en cambios de alto impacto.'),
    ),

    showAdvanced ? React.createElement(React.Fragment, null,
    React.createElement(GroupHeader, { eyebrow: 'Sistema visual', title: 'Ajuste fino del sistema', subtitle: 'Usa estos bloques cuando la direccion general ya este definida y quieras afinar consistencia visual.' }),
    React.createElement(Section, { title: 'Mapa de trabajo', subtitle: 'Guia rapida para saber que editar y donde validar despues.' },
      React.createElement('div', { style: { display: 'grid', gap: '10px', color: '#486581', fontSize: '13px', lineHeight: 1.6 } },
        React.createElement('p', { style: { margin: 0 } }, '1. Ajusta tokens y fondo cuando el cambio deba sentirse en todo el portal.'),
        React.createElement('p', { style: { margin: 0 } }, '2. Usa ajustes por pieza cuando el sistema ya esta bien, pero un componente necesita afinacion puntual.'),
        React.createElement('p', { style: { margin: 0 } }, '3. Revisa piezas del sitio para estados y detalles; revisa plantillas completas para propagacion real.'),
      ),
    ),

    React.createElement(Section, { title: 'Tipografia', subtitle: 'Ajusta la voz visual y la legibilidad del portal. Usa presets para rapidez; los inputs libres quedan disponibles si necesitas una fuente puntual.' },
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

    React.createElement(Section, { title: 'Background', subtitle: 'Controla el canvas global del portal. Si una story se viera distinta, esa story estaria saliendo del sistema esperado.' },
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

    React.createElement(Section, { title: 'Spacing y Layout', subtitle: 'Ajusta ritmo, densidad y ancho util. Valida estos cambios primero en Vista General y luego en paginas completas.' },
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

    React.createElement(Section, { title: 'Radius y Border', subtitle: 'Afina el caracter del sistema y el nivel de separacion visual entre bloques.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(RangeField, { label: 'Radius SM', value: theme.radius.sm, min: 0, max: 24, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.sm = value; })) }),
        React.createElement(RangeField, { label: 'Radius MD', value: theme.radius.md, min: 4, max: 32, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.md = value; })) }),
        React.createElement(RangeField, { label: 'Radius LG', value: theme.radius.lg, min: 8, max: 48, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.lg = value; })) }),
        React.createElement(RangeField, { label: 'Radius Pill', value: theme.radius.pill, min: 40, max: 999, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.radius.pill = value; })) }),
        React.createElement(ColorField, { label: 'Border Color', value: theme.colors.border, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.colors.border = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Shadows', subtitle: 'Usalas para modular profundidad sin romper la claridad del sistema.' },
      React.createElement('div', { style: gridStyle },
        React.createElement(TextField, { label: 'Shadow Card', value: theme.shadow.card, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.shadow.card = value; })) }),
        React.createElement(TextField, { label: 'Shadow Button', value: theme.shadow.button, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.shadow.button = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Ajustes por pieza', subtitle: 'Haz ajustes puntuales cuando el sistema global ya funcione, pero una pieza necesite correccion o mas contraste.' },
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

    React.createElement(GroupHeader, { eyebrow: 'Contenido', title: 'Contenido compartido del portal', subtitle: 'Usa este bloque para cambiar copy visible y colecciones JSON sin salir del flujo de validacion.' }),
    React.createElement(Section, { title: 'Hero content', subtitle: 'Afecta la portada visual del sistema. Revisa Vista General y Home despues de editarlo.' },
      React.createElement(TextField, { label: 'Eyebrow', value: theme.content.heroEyebrow, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroEyebrow = value; })) }),
      React.createElement(TextField, { label: 'Title', value: theme.content.heroTitle, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroTitle = value; })) }),
      React.createElement(TextField, { label: 'Description', value: theme.content.heroDescription, multiline: true, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroDescription = value; })) }),
      React.createElement('div', { style: gridStyle },
        React.createElement(TextField, { label: 'Primary CTA', value: theme.content.heroPrimaryCta, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroPrimaryCta = value; })) }),
        React.createElement(TextField, { label: 'Secondary CTA', value: theme.content.heroSecondaryCta, onChange: (value) => applyTheme(updateTheme(theme, (draft) => { draft.content.heroSecondaryCta = value; })) }),
      ),
    ),

    React.createElement(Section, { title: 'Colecciones editables', subtitle: 'Estas colecciones se propagan a sections y plantillas. Aqui no cambias estilo: cambias contenido estructurado del portal.' },
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: servicesStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: servicesStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: servicesStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, servicesStatus.label),
      React.createElement(JsonEditor, { label: 'Services JSON', value: servicesJsonDraft, buttonLabel: 'Aplicar servicios', onChange: setServicesJsonDraft, onApply: () => handleCollectionApply('services', servicesJsonDraft, 'Servicios actualizados.'), rows: 10, helpText: 'Afecta cards y secciones de servicios. Revisa Vista General, Página de Inicio y Página Servicios. Ejemplo: [{ "icon": "Layers3", "title": "Servicio", "description": "Detalle" }]' }),
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: statsStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: statsStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: statsStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, statsStatus.label),
      React.createElement(JsonEditor, { label: 'Stats JSON', value: statsJsonDraft, buttonLabel: 'Aplicar stats', onChange: setStatsJsonDraft, onApply: () => handleCollectionApply('stats', statsJsonDraft, 'Stats actualizados.'), rows: 8, helpText: 'Afecta bloques de metricas. Revisa Vista General, Página de Inicio y Página Nosotros. Ejemplo: [{ "icon": "Gauge", "label": "Metricas", "value": "68%", "description": "Detalle" }]' }),
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: testimonialsStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: testimonialsStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: testimonialsStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, testimonialsStatus.label),
      React.createElement(JsonEditor, { label: 'Testimonials JSON', value: testimonialsJsonDraft, buttonLabel: 'Aplicar testimonios', onChange: setTestimonialsJsonDraft, onApply: () => handleCollectionApply('testimonials', testimonialsJsonDraft, 'Testimonios actualizados.'), rows: 10, helpText: 'Afecta testimonios y prueba de confianza. Revisa Página de Inicio, Página Servicios y la pieza de Testimonios.' }),
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: faqStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: faqStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: faqStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, faqStatus.label),
      React.createElement(JsonEditor, { label: 'FAQ JSON', value: faqJsonDraft, buttonLabel: 'Aplicar FAQ', onChange: setFaqJsonDraft, onApply: () => handleCollectionApply('faq', faqJsonDraft, 'FAQ actualizado.'), rows: 8, helpText: 'Afecta preguntas frecuentes y pantallas de soporte comercial. Revisa Página Contacto, Página Servicios y la sección FAQ.' }),
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: logosStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: logosStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: logosStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, logosStatus.label),
      React.createElement(JsonEditor, { label: 'Logos JSON', value: logosJsonDraft, buttonLabel: 'Aplicar logos', onChange: setLogosJsonDraft, onApply: () => handleCollectionApply('logos', logosJsonDraft, 'Logos actualizados.'), rows: 6, helpText: 'Afecta prueba social y franja de clientes. Revisa Página Nosotros y la sección Clientes.' }),
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: whatWeDoStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: whatWeDoStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: whatWeDoStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, whatWeDoStatus.label),
      React.createElement(JsonEditor, { label: 'What We Do JSON', value: whatWeDoJsonDraft, buttonLabel: 'Aplicar what we do', onChange: setWhatWeDoJsonDraft, onApply: () => handleCollectionApply('whatWeDo', whatWeDoJsonDraft, 'What We Do actualizado.'), rows: 8, helpText: 'Afecta el relato de capacidades. Revisa Página Nosotros, Página Servicios y la seccion Qué Hacemos.' }),
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: whyChooseUsStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: whyChooseUsStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: whyChooseUsStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, whyChooseUsStatus.label),
      React.createElement(JsonEditor, { label: 'Why Choose Us JSON', value: whyChooseUsJsonDraft, buttonLabel: 'Aplicar why choose us', onChange: setWhyChooseUsJsonDraft, onApply: () => handleCollectionApply('whyChooseUs', whyChooseUsJsonDraft, 'Why Choose Us actualizado.'), rows: 8, helpText: 'Afecta argumentos de valor. Revisa Página Nosotros y la seccion Por Qué Elegirnos.' }),
      React.createElement('div', { style: { ...badgeStyle, width: 'fit-content', background: processStatus.tone === 'ok' ? '#ecfdf3' : '#fff4f4', color: processStatus.tone === 'ok' ? '#0D7A46' : '#B42318', borderColor: processStatus.tone === 'ok' ? '#b7ebc6' : '#f3b7b7' } }, processStatus.label),
      React.createElement(JsonEditor, { label: 'Process JSON', value: processJsonDraft, buttonLabel: 'Aplicar proceso', onChange: setProcessJsonDraft, onApply: () => handleCollectionApply('process', processJsonDraft, 'Proceso actualizado.'), rows: 8, helpText: 'Afecta la narrativa del proceso comercial o de trabajo. Revisa Página Servicios y la seccion Proceso.' }),
    ),

    React.createElement(GroupHeader, { eyebrow: 'JSON / Importar / Exportar', title: 'Estado completo del sistema', subtitle: 'Usa este bloque cuando necesites mover, respaldar o aplicar un tema entero.' }),
    React.createElement(Section, { title: 'JSON completo', subtitle: 'Exporta o importa el estado completo del Theme Builder, incluyendo tokens y colecciones.' },
      React.createElement('div', { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
        React.createElement('input', { type: 'file', accept: 'application/json', onChange: handleFileImport, style: { ...inputStyle, padding: '9px', maxWidth: '100%' } }),
        React.createElement('button', { type: 'button', onClick: handleJsonApply, style: { ...inputStyle, cursor: 'pointer', width: 'auto', fontWeight: 700, background: '#102A43', borderColor: '#102A43', color: '#fff' } }, 'Aplicar JSON'),
      ),
      React.createElement('textarea', { value: jsonDraft || previewJson, onChange: (event: ChangeEvent<HTMLTextAreaElement>) => setJsonDraft(event.target.value), rows: 12, style: { ...inputStyle, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', resize: 'vertical', minHeight: '240px' } }),
    ),
    ) : null,
  );
}

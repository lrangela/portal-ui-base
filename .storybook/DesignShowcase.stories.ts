import type { Meta, StoryObj } from '@storybook/vue3';
import BaseBadge from '../src/components/atoms/BaseBadge.vue';
import BaseButton from '../src/components/atoms/BaseButton.vue';
import BaseCard from '../src/components/atoms/BaseCard.vue';
import SiteFooter from '../src/components/organisms/SiteFooter.vue';
import SiteHeader from '../src/components/organisms/SiteHeader.vue';
import StatsSection from '../src/components/sections/StatsSection.vue';
import { globalsToTheme } from '../src/lib/theme';
import { PageSchema } from '../src/lib/theme/schema';

const meta: Meta = {
  title: '🎨 Diseño Global/Vista General',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

const storyUrl = (id: string) => {
  const storyPath = `/story/${encodeURIComponent(id)}`;

  if (typeof window === 'undefined') {
    return `/?path=${storyPath}`;
  }

  try {
    const topLocation = window.top?.location ?? window.location;
    return `${topLocation.pathname}?path=${storyPath}`;
  } catch {
    return `/?path=${storyPath}`;
  }
};

export const Default: Story = {
  render: (_args, context) => ({
    components: { BaseBadge, BaseButton, BaseCard, SiteFooter, SiteHeader, StatsSection },
    setup() {
      const theme = globalsToTheme(context.globals);
      const validationPaths = {
        pieces: storyUrl('🧩-piezas-del-sitio-botones-y-enlaces-botones--playground'),
        pages: storyUrl('📐-plantillas-completas-página-de-inicio--default'),
      };
      const exportTheme = () => {
        if (typeof window !== 'undefined') {
          (
            window as typeof window & {
              exportTheme?: () => void;
            }
          ).exportTheme?.();
        }
      };
      const pageChecks = Object.entries(PageSchema).map(([page, schema]) => ({
        page,
        sections: schema.mandatorySections.length,
        content: schema.requiredContentKeys.length,
      }));
      const jumpToChecklist = () => {
        if (typeof document === 'undefined') return;
        document.getElementById('theme-validation-checklist')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      return { globals: context.globals, theme, exportTheme, validationPaths, pageChecks, jumpToChecklist };
    },
    template: `
    <div style="
  position:sticky;
  top:0;
  z-index:10;
  padding:12px 16px;
  background:color-mix(in srgb, var(--color-primary) 10%, var(--color-surface));
  border-bottom:1px solid var(--color-border);
  color:var(--color-text);
">
  <div style="width:min(100%, var(--layout-content-max)); margin:0 auto; display:grid; gap:6px;">
    <strong style="font-size:14px;">Vista General es tu centro de validación global.</strong>
    <span style="font-size:13px; color:var(--color-text-muted); line-height:1.5;">
      Cualquier cambio en el panel <strong>Theme Builder</strong> se refleja aquí al instante. Usa esta pantalla para validar branding, contraste, jerarquía y ritmo antes de revisar piezas o páginas completas.
    </span>
  </div>
</div>

      <div style="min-height:100vh; color:var(--color-text);">
        <SiteHeader />

        <main>
          <section style="width:min(100%, var(--layout-content-max)); margin:0 auto; padding:calc(var(--space-section-y) * 1.1) var(--space-section-x) calc(var(--space-section-y) * 0.7); display:grid; gap:var(--space-stack);">
            <BaseBadge label="Vista general del tema" tone="default" />
            <div style="display:grid; gap:18px; max-width:var(--layout-hero-max);">
              <h1 style="margin:0; font-family:var(--font-heading); font-size:var(--font-size-h1); line-height:1.05; letter-spacing:var(--letter-spacing);">{{ globals.heroTitle }}</h1>
              <p style="margin:0; color:var(--color-text-muted); font-size:calc(var(--font-size-base) * 1.125); line-height:var(--line-height-base);">{{ globals.heroDescription }}</p>
            </div>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              <BaseButton variant="primary" :label="globals.heroPrimaryCta" />
              <BaseButton variant="outline" :label="globals.heroSecondaryCta" />
            </div>
          </section>

          <section style="width:min(100%, var(--layout-content-max)); margin:0 auto; padding:0 var(--space-section-x) var(--space-section-y); display:grid; gap:var(--space-stack);">
            <div style="display:grid; gap:var(--space-stack); grid-template-columns:repeat(auto-fit, minmax(var(--layout-card-min), 1fr));">
              <BaseCard v-for="(service, index) in theme.content.services.slice(0, 3)" :key="index" variant="surface" padding="lg" radius="lg" shadow="card">
                <div style="display:grid; gap:12px;">
                  <BaseBadge :label="service.icon" tone="neutral" />
                  <h2 style="margin:0; font-family:var(--font-heading); font-size:var(--font-size-h3);">{{ service.title }}</h2>
                  <p style="margin:0; color:var(--color-text-muted); line-height:var(--line-height-base);">{{ service.description }}</p>
                </div>
              </BaseCard>
            </div>
          </section>

          <StatsSection :items="theme.content.stats" />

          <section style="width:min(100%, var(--layout-content-max)); margin:0 auto; padding:0 var(--space-section-x) var(--space-section-y);">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap; padding:var(--space-card-padding); border:1px solid var(--color-border); border-radius:var(--radius-lg); background:linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 14%, var(--color-surface)), color-mix(in srgb, var(--color-surface) 92%, transparent)); box-shadow:var(--shadow-card);">
              <div style="display:grid; gap:6px;">
                <strong style="font-family:var(--font-heading); font-size:var(--font-size-h3);">¿Listo para decidir si el sistema ya cierra?</strong>
                <span style="color:var(--color-text-muted);">Usa esta franja para pasar de mirar el preview a tomar acción: revisar checklist, validar componentes o exportar el tema.</span>
              </div>
              <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <BaseButton variant="primary" label="Revisar checklist" @click="jumpToChecklist" />
                <BaseButton variant="outline" label="Exportar tema" @click="exportTheme" />
              </div>
            </div>
          </section>

          <section id="theme-validation-checklist" style="width:min(100%, var(--layout-content-max)); margin:0 auto; padding:0 var(--space-section-x) calc(var(--space-section-y) * 0.7); display:grid; gap:16px;">
            <div style="display:grid; gap:16px; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));">
              <div style="padding:var(--space-card-padding); border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 94%, transparent); box-shadow:var(--shadow-card); display:grid; gap:12px;">
                <strong style="font-family:var(--font-heading); font-size:var(--font-size-h3);">Checklist de validación rápida</strong>
                <div style="display:grid; gap:10px;">
                  <div style="display:flex; gap:10px; align-items:flex-start;"><span>□</span><span>El contraste principal se mantiene legible en hero, cards y CTA.</span></div>
                  <div style="display:flex; gap:10px; align-items:flex-start;"><span>□</span><span>La jerarquía tipográfica guía la lectura sin competir entre títulos y textos.</span></div>
                  <div style="display:flex; gap:10px; align-items:flex-start;"><span>□</span><span>El espaciado conserva ritmo entre bloques, cards y botones.</span></div>
                  <div style="display:flex; gap:10px; align-items:flex-start;"><span>□</span><span>Los llamados a la acción siguen siendo visibles y consistentes.</span></div>
                </div>
              </div>

              <div style="padding:var(--space-card-padding); border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 94%, transparent); box-shadow:var(--shadow-card); display:grid; gap:12px;">
                <strong style="font-family:var(--font-heading); font-size:var(--font-size-h3);">Siguiente validación sugerida</strong>
                <p style="margin:0; color:var(--color-text-muted); line-height:var(--line-height-base);">Usa estas rutas cuando la dirección general ya se vea bien aquí.</p>
                <div style="display:grid; gap:10px;">
                  <a :href="validationPaths.pieces" style="padding:14px 16px; border-radius:var(--radius-md); border:1px solid var(--color-border); text-decoration:none; color:var(--color-text); background:color-mix(in srgb, var(--color-primary) 8%, var(--color-surface));">
                    <strong style="display:block;">Revisar componentes</strong>
                    <span style="display:block; margin-top:4px; color:var(--color-text-muted);">Valida estados, detalle visual y piezas reutilizables.</span>
                  </a>
                  <a :href="validationPaths.pages" style="padding:14px 16px; border-radius:var(--radius-md); border:1px solid var(--color-border); text-decoration:none; color:var(--color-text); background:color-mix(in srgb, var(--color-secondary) 6%, var(--color-surface));">
                    <strong style="display:block;">Revisar plantillas completas</strong>
                    <span style="display:block; margin-top:4px; color:var(--color-text-muted);">Confirma que el tema y el contenido se propaguen bien en páginas reales.</span>
                  </a>
                </div>
              </div>
            </div>

            <div style="padding:var(--space-card-padding); border:1px solid var(--color-border); border-radius:var(--radius-lg); background:color-mix(in srgb, var(--color-surface) 94%, transparent); box-shadow:var(--shadow-card); display:grid; gap:12px;">
              <div>
                <strong style="font-family:var(--font-heading); font-size:var(--font-size-h3);">Cobertura mínima antes de exportar</strong>
                <p style="margin:8px 0 0; color:var(--color-text-muted); line-height:var(--line-height-base);">Referencia visual basada en el PageSchema actual: no bloquea la exportación, pero te recuerda qué páginas conviene revisar.</p>
              </div>
              <div style="display:grid; gap:10px; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));">
                <div v-for="check in pageChecks" :key="check.page" style="padding:14px 16px; border-radius:var(--radius-md); border:1px solid var(--color-border); background:color-mix(in srgb, var(--color-surface) 96%, transparent); display:grid; gap:4px;">
                  <strong>{{ check.page }}</strong>
                  <span style="color:var(--color-text-muted); font-size:13px;">Secciones base: {{ check.sections }}</span>
                  <span style="color:var(--color-text-muted); font-size:13px;">Claves de contenido: {{ check.content }}</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    `,
  }),
};

<template>
  <section class="section-shell two-col">
    <SectionHeader badge="Por que elegirnos" title="Un sistema que une marca, contenido y ejecucion" description="Pensado para equipos que quieren aprobar visualmente antes de invertir en implementacion final." />
    <FeaturesList :items="items" />
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../molecules/SectionHeader.vue';
import FeaturesList from '../organisms/FeaturesList.vue';
withDefaults(defineProps<{ items?: Array<{ icon: string; title: string; description: string }> }>(), {
  items: () => [
    { icon: 'Check', title: 'Aprobacion rapida', description: 'Storybook funciona como mesa de trabajo para negocio, diseno y desarrollo.' },
    { icon: 'Shield', title: 'Consistencia tokenizada', description: 'Todo se apoya en variables, no en estilos sueltos ni hardcodes.' },
    { icon: 'BarChart3', title: 'Escalabilidad', description: 'La arquitectura permite sumar secciones, temas y variantes sin rehacer todo.' },
  ],
});
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
</style>

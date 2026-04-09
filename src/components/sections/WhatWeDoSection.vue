<template>
  <section class="section-shell">
    <SectionHeader badge="Que hacemos" title="Resolvemos experiencia, producto y arquitectura" description="Una lectura ejecutiva de las capacidades clave del equipo." />
    <FeaturesList :items="items" />
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../molecules/SectionHeader.vue';
import FeaturesList from '../organisms/FeaturesList.vue';
withDefaults(defineProps<{ items?: Array<{ icon: string; title: string; description: string }> }>(), {
  items: () => [
    { icon: 'BarChart3', title: 'Estrategia digital', description: 'Aterrizamos objetivos de negocio en decisiones de producto y contenido.' },
    { icon: 'Shield', title: 'Arquitectura estable', description: 'Construimos bases tecnicas sostenibles para crecer sin friccion.' },
    { icon: 'Sparkles', title: 'Experiencia visual', description: 'Aprobamos identidad, jerarquia y conversion antes de desarrollar completo.' },
  ],
});
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
</style>

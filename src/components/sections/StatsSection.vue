<template>
  <section class="section-shell">
    <SectionHeader badge="Impacto" title="Metricas que comunican confianza" description="Cards de dato rapido para reforzar capacidad, escala y velocidad." />
    <div class="stats-grid">
      <StatCard
        v-for="(item, index) in items"
        :key="index"
        :label="item.label"
        :value="item.value"
        :description="item.description"
        :icon="item.icon"
        :variant="index % 2 === 0 ? 'glow' : 'accent'"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../molecules/SectionHeader.vue';
import StatCard from '../molecules/StatCard.vue';
withDefaults(defineProps<{ items?: Array<{ label: string; value: string; description: string; icon?: string }> }>(), {
  items: () => [
    { label: 'Proyectos', value: '48+', description: 'entregas internacionales', icon: 'BriefcaseBusiness' },
    { label: 'Tiempo de validacion', value: '-32%', description: 'menos iteraciones visuales', icon: 'Gauge' },
    { label: 'NPS', value: '72', description: 'satisfaccion post entrega', icon: 'BadgeCheck' },
  ],
});
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
.stats-grid { display:grid; gap:var(--space-stack); grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); }
</style>

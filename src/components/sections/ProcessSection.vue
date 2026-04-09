<template>
  <section class="section-shell">
    <SectionHeader badge="Proceso" title="Como trabajamos" description="Bloque pensado para explicar la secuencia de aprobacion y ejecucion." />
    <div class="process-grid">
      <ServiceCard v-for="(item, index) in items" :key="index" :title="item.title" :description="item.description" />
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../molecules/SectionHeader.vue';
import ServiceCard from '../molecules/ServiceCard.vue';
withDefaults(defineProps<{ items?: Array<{ title: string; description: string }> }>(), {
  items: () => [
    { title: '1. Diagnostico', description: 'Mapeamos objetivos, usuarios y necesidades del portal.' },
    { title: '2. Sistema visual', description: 'Definimos tokens, componentes y variantes aprobables.' },
    { title: '3. Implementacion', description: 'Convertimos el sistema en paginas y flujos reales.' },
  ],
});
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
.process-grid { display:grid; gap:var(--space-stack); grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); }
</style>

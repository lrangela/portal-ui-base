<template>
  <section class="section-shell">
    <SectionHeader badge="Testimonios" title="Lo que perciben los clientes" description="Prueba social con soporte para rating, avatar y quote." />
    <TestimonialsGrid :items="items" />
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../molecules/SectionHeader.vue';
import TestimonialsGrid from '../organisms/TestimonialsGrid.vue';
withDefaults(defineProps<{ items?: Array<{ quote: string; name: string; role: string; avatar?: string; rating?: number }> }>(), {
  items: () => [
    { quote: 'El sistema nos permitio decidir branding y layout antes del desarrollo.', name: 'Ana Torres', role: 'CMO, Globex', avatar: 'AT', rating: 5 },
    { quote: 'La claridad del portal mejoro nuestra presentacion comercial en semanas.', name: 'Luis Vega', role: 'Founder, Novatek', avatar: 'LV', rating: 5 },
    { quote: 'Tuvimos una direccion visual aprobada por todo el equipo sin retrabajos.', name: 'Maria Rios', role: 'Product Lead, Aurora', avatar: 'MR', rating: 4 },
  ],
});
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
</style>

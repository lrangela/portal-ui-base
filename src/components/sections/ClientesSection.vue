<template>
  <section class="section-shell">
    <SectionHeader badge="Clientes" title="Marcas que confian en el proceso" description="Carrusel sobrio de logos para soporte visual de confianza." />
    <LogoCarousel :items="items" />
  </section>
</template>
<script setup lang="ts">
import SectionHeader from '../molecules/SectionHeader.vue';
import LogoCarousel from '../organisms/LogoCarousel.vue';
withDefaults(defineProps<{ items?: string[] }>(), { items: () => ['Globex', 'Northwind', 'Novatek', 'Lumen', 'Aurora'] });
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
</style>

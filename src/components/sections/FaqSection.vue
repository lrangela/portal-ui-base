<template>
  <section class="section-shell">
    <SectionHeader badge="FAQ" title="Preguntas frecuentes" description="Bloque base para resolver dudas comunes del proceso." />
    <div class="faq-list">
      <BaseCard v-for="(item, index) in items" :key="index">
        <BaseHeading :level="4" :text="item.question" />
        <BaseText :text="item.answer" tone="muted" />
      </BaseCard>
    </div>
  </section>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import BaseHeading from '../atoms/BaseHeading.vue';
import BaseText from '../atoms/BaseText.vue';
import SectionHeader from '../molecules/SectionHeader.vue';
withDefaults(defineProps<{ items?: Array<{ question: string; answer: string }> }>(), {
  items: () => [
    { question: 'Se puede exportar el tema?', answer: 'Si, el panel permite descargar y volver a importar JSON.' },
    { question: 'Se pueden probar variantes?', answer: 'Si, puedes cambiar tokens, copies y fondo en tiempo real.' },
    { question: 'Esto escala a varias paginas?', answer: 'Ese es precisamente el objetivo del sistema.' },
  ],
});
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
.faq-list { display:grid; gap:1rem; }
</style>

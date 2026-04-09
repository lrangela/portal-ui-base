<template>
  <section class="section-shell">
    <BaseCard tone="primary" radius="lg" padding="lg">
      <SectionHeader
        badge="CTA"
        badge-tone="inverse"
        heading-tone="inverse"
        description-tone="inverse"
        title="Listo para convertir el sistema en un portal real"
        description="Un llamado a la accion central con tokens consistentes."
      />
      <CtaGroup primary-label="Agendar workshop" secondary-label="Ver demo" />
    </BaseCard>
  </section>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import CtaGroup from '../molecules/CtaGroup.vue';
import SectionHeader from '../molecules/SectionHeader.vue';
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); }
</style>

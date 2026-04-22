<template>
  <div class="grid-shell">
    <ServiceCard
      v-for="(service, index) in services"
      :key="index"
      :title="service.title"
      :description="service.description"
      :icon="service.icon"
      :variant="index % 2 === 1 ? 'spotlight' : 'default'"
    />
  </div>
</template>
<script setup lang="ts">
import ServiceCard from '../molecules/ServiceCard.vue';
defineProps<{ services: Array<{ title: string; description: string; icon?: string }> }>();
</script>
<style scoped>
.grid-shell { display:grid; gap:var(--space-stack); grid-template-columns:repeat(auto-fit, minmax(var(--layout-card-min), 1fr)); }
</style>

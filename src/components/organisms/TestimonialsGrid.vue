<template>
  <div class="grid-shell">
    <TestimonialsCard v-for="(item, index) in items" :key="index" v-bind="item" />
  </div>
</template>
<script setup lang="ts">
import TestimonialsCard from '../molecules/TestimonialsCard.vue';
defineProps<{ items: Array<{ quote: string; name: string; role: string; avatar?: string; rating?: number }> }>();
</script>
<style scoped>
.grid-shell { display:grid; gap:var(--space-stack); grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); }
</style>

<template>
  <nav class="site-header-nav">
    <BaseLink :href="href" :label="label" tone="default" class="nav-link" />
  </nav>
</template>
<script setup lang="ts">
import BaseLink from '../atoms/BaseLink.vue';
defineProps<{ label: string; href?: string }>();
</script>
<style scoped>
.site-header-nav { display:inline-flex; }
.nav-link {
  padding: 0.7rem 1rem;
  color: var(--color-text);
}
.nav-link:hover,
.nav-link:focus-visible {
  background: color-mix(in srgb, var(--color-primary) 10%, white);
  color: var(--color-primary);
}
</style>

<template>
  <section class="hello-card">
    <h2 class="hello-title">{{ title }}</h2>
    <p class="hello-message">{{ message }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  message: string;
}>();
</script>

<style scoped>
.hello-card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  padding: var(--space-card-padding);
  box-shadow: var(--shadow-card);
}

.hello-title {
  margin: 0;
  font-family: var(--font-heading);
  font-size: var(--font-size-h2);
  line-height: 1.05;
}

.hello-message {
  margin: 0.75rem 0 0;
  color: var(--color-text-muted);
  line-height: var(--line-height-base);
}
</style>

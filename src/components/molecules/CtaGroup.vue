<template>
  <div class="cta-group" :class="[`align-${align}`]">
    <BaseButton v-if="primaryLabel" :label="primaryLabel" :variant="primaryVariant" :size="size" />
    <BaseButton v-if="secondaryLabel" :label="secondaryLabel" variant="outline" :size="size" />
  </div>
</template>
<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue';
withDefaults(defineProps<{ primaryLabel?: string; secondaryLabel?: string; primaryVariant?: 'primary' | 'secondary' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg'; align?: 'left' | 'center'; }>(), { primaryLabel: '', secondaryLabel: '', primaryVariant: 'primary', size: 'md', align: 'left' });
</script>
<style scoped>
.cta-group { display:flex; flex-wrap:wrap; gap:calc(var(--space-stack) * 0.5); }
.align-center { justify-content:center; }
.align-left { justify-content:flex-start; }
</style>

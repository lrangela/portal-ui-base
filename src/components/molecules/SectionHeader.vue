<template>
  <div class="section-header" :class="[`align-${align}`]">
    <BaseBadge v-if="badge" :label="badge" :tone="badgeTone" />
    <BaseHeading :level="headingLevel" :text="title" :align="align" :max-width="maxWidth" :tone="headingTone" />
    <BaseText v-if="description" :text="description" size="lg" :tone="descriptionTone" :align="align" :max-width="maxWidth" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import BaseBadge from '../atoms/BaseBadge.vue';
import BaseHeading from '../atoms/BaseHeading.vue';
import BaseText from '../atoms/BaseText.vue';
withDefaults(defineProps<{
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  headingLevel?: 1 | 2 | 3;
  maxWidth?: string;
  badgeTone?: 'default' | 'success' | 'warning' | 'danger' | 'neutral' | 'inverse';
  headingTone?: 'default' | 'muted' | 'inverse';
  descriptionTone?: 'default' | 'muted' | 'inverse';
}>(), {
  badge: '',
  description: '',
  align: 'left',
  headingLevel: 2,
  maxWidth: '42rem',
  badgeTone: 'neutral',
  headingTone: 'default',
  descriptionTone: 'muted',
});
</script>

<style scoped>
.section-header { display:grid; gap:1rem; }
.align-center { justify-items:center; text-align:center; }
.align-left { justify-items:start; text-align:left; }
</style>

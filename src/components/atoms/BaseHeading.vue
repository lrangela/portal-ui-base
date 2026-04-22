<template>
  <component :is="tag" :class="headingClasses" :style="headingStyle">
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
    level?: 1 | 2 | 3 | 4;
    text?: string;
    align?: 'left' | 'center' | 'right';
    weight?: 'regular' | 'medium' | 'bold';
    maxWidth?: string;
    lineHeight?: string;
    tracking?: string;
    tone?: 'default' | 'muted' | 'inverse';
  }>(),
  {
    tag: 'h2',
    level: 2,
    text: '',
    align: 'left',
    weight: 'bold',
    maxWidth: 'none',
    lineHeight: '1.05',
    tracking: 'var(--letter-spacing)',
    tone: 'default',
  },
);

const headingClasses = computed(() => [
  'base-heading',
  `level-${props.level}`,
  `align-${props.align}`,
  `weight-${props.weight}`,
  `tone-${props.tone}`,
]);

const headingStyle = computed(() => ({
  maxWidth: props.maxWidth,
  lineHeight: props.lineHeight,
  letterSpacing: props.tracking,
}));
</script>

<style scoped>
.base-heading {
  margin: 0;
  font-family: var(--font-heading);
}
.level-1 { font-size: var(--font-size-h1); }
.level-2 { font-size: var(--font-size-h2); }
.level-3 { font-size: var(--font-size-h3); }
.level-4 { font-size: calc(var(--font-size-base) * 1.25); }
.align-left { text-align: left; }
.align-center { text-align: center; }
.align-right { text-align: right; }
.weight-regular { font-weight: 500; }
.weight-medium { font-weight: 600; }
.weight-bold { font-weight: 800; }
.tone-default { color: var(--color-text); }
.tone-muted { color: var(--color-text-muted); }
.tone-inverse { color: white; }
</style>

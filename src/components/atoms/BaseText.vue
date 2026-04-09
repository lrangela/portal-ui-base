<template>
  <component :is="tag" :class="textClasses" :style="textStyle">
    <slot>{{ text }}</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = withDefaults(defineProps<{
  tag?: 'p' | 'span' | 'div' | 'label';
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'default' | 'muted' | 'inverse';
  weight?: 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  lineHeight?: string;
  tracking?: string;
  maxWidth?: string;
}>(), {
  tag: 'p', text: '', size: 'md', tone: 'default', weight: 'regular', align: 'left', lineHeight: 'var(--line-height-base)', tracking: '0px', maxWidth: 'none'
});
const textClasses = computed(() => ['base-text', `size-${props.size}`, `tone-${props.tone}`, `weight-${props.weight}`, `align-${props.align}`]);
const textStyle = computed(() => ({ lineHeight: props.lineHeight, letterSpacing: props.tracking, maxWidth: props.maxWidth }));
</script>

<style scoped>
.base-text { margin: 0; font-family: var(--font-sans); }
.size-sm { font-size: calc(var(--font-size-base) * 0.88); }
.size-md { font-size: var(--font-size-base); }
.size-lg { font-size: calc(var(--font-size-base) * 1.125); }
.tone-default { color: var(--color-text); }
.tone-muted { color: var(--color-text-muted); }
.tone-inverse { color: white; }
.weight-regular { font-weight: 400; }
.weight-medium { font-weight: 500; }
.weight-bold { font-weight: 700; }
.align-left { text-align: left; }
.align-center { text-align: center; }
.align-right { text-align: right; }
</style>

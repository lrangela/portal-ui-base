<template>
  <span :class="['base-icon', `tone-${tone}`, rounded && 'is-rounded']" :style="iconStyle" aria-hidden="true">
    <component :is="iconComponent" :size="size" :stroke-width="strokeWidth" />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { resolveLucideIcon } from '../../lib/icons';

const props = withDefaults(defineProps<{
  name?: string;
  size?: number;
  strokeWidth?: number;
  tone?: 'default' | 'primary' | 'muted' | 'inverse';
  rounded?: boolean;
}>(), {
  name: 'Sparkles',
  size: 20,
  strokeWidth: 1.8,
  tone: 'default',
  rounded: false,
});

const iconComponent = computed(() => resolveLucideIcon(props.name));
const iconStyle = computed(() => ({
  '--icon-size': `${props.size}px`,
  '--icon-box-size': `${props.rounded ? props.size + 26 : props.size}px`,
}));
</script>

<style scoped>
.base-icon {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--icon-box-size);
  height:var(--icon-box-size);
  color: var(--color-text);
  transition: transform 180ms ease, background-color 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}
.base-icon :deep(svg) {
  width:var(--icon-size);
  height:var(--icon-size);
  stroke-linecap:round;
  stroke-linejoin:round;
}
.is-rounded {
  border-radius: calc(var(--radius-pill) - 2px);
  background: linear-gradient(135deg, color-mix(in srgb, var(--color-surface) 85%, white), color-mix(in srgb, var(--color-primary) 8%, var(--color-surface)));
  border:1px solid color-mix(in srgb, var(--color-primary) 16%, var(--color-border));
  box-shadow: 0 10px 18px rgba(15, 23, 42, 0.08);
}
.tone-default { color: var(--color-text); }
.tone-primary { color: var(--color-primary); }
.tone-muted { color: var(--color-text-muted); }
.tone-inverse {
  color: white;
  background: color-mix(in srgb, var(--color-secondary) 82%, black);
  border-color: rgba(255, 255, 255, 0.18);
}
</style>

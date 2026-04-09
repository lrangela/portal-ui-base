<template>
  <span class="spinner-wrap" :class="[`tone-${tone}`, centered && 'is-centered']" :style="spinnerStyle" role="status" :aria-label="label">
    <span class="spinner-ring"></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = withDefaults(defineProps<{ size?: number; tone?: 'primary' | 'muted' | 'inverse'; speed?: string | number; centered?: boolean; label?: string; thickness?: number; color?: string; }>(), { size: 22, tone: 'primary', speed: '0.9s', centered: false, label: 'Loading', thickness: 2, color: '' });
const spinnerStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  '--spinner-speed': typeof props.speed === 'number' ? `${props.speed}s` : props.speed,
  '--spinner-thickness': `${props.thickness}px`,
  color: props.color || undefined,
}));
</script>

<style scoped>
.spinner-wrap { display:inline-flex; }
.is-centered { margin-inline:auto; }
.spinner-ring {
  width:100%;
  height:100%;
  border-radius:999px;
  border:var(--spinner-thickness) solid color-mix(in srgb, currentColor 18%, transparent);
  border-top-color: currentColor;
  border-right-color: currentColor;
  animation: spin var(--spinner-speed) linear infinite;
  filter: drop-shadow(0 6px 14px color-mix(in srgb, currentColor 20%, transparent));
}
.tone-primary { color: var(--color-primary); }
.tone-muted { color: var(--color-text-muted); }
.tone-inverse { color: white; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>

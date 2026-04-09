<template>
  <span :class="badgeClasses">
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = withDefaults(defineProps<{
  label?: string;
  tone?: 'default' | 'success' | 'warning' | 'danger' | 'neutral' | 'inverse';
  size?: 'sm' | 'md';
  rounded?: boolean;
}>(), { label: 'Badge', tone: 'default', size: 'md', rounded: true });
const badgeClasses = computed(() => ['base-badge', `tone-${props.tone}`, `size-${props.size}`, props.rounded && 'is-rounded']);
</script>

<style scoped>
.base-badge { display:inline-flex; align-items:center; justify-content:center; gap:0.35rem; border:1px solid transparent; font-family:var(--font-sans); font-weight:700; letter-spacing:0.05em; text-transform:uppercase; }
.is-rounded { border-radius: var(--radius-pill); }
.size-sm { padding: 0.35rem 0.65rem; font-size: 0.72rem; }
.size-md { padding: 0.5rem 0.85rem; font-size: 0.78rem; }
.tone-default { background: var(--badge-default-bg); color: var(--badge-default-text); border-color: color-mix(in srgb, var(--badge-default-text) 20%, transparent); }
.tone-success { background: var(--badge-success-bg); color: var(--badge-success-text); border-color: color-mix(in srgb, var(--badge-success-text) 18%, transparent); }
.tone-warning { background: var(--badge-warning-bg); color: var(--badge-warning-text); border-color: color-mix(in srgb, var(--badge-warning-text) 18%, transparent); }
.tone-danger { background: var(--badge-danger-bg); color: var(--badge-danger-text); border-color: color-mix(in srgb, var(--badge-danger-text) 18%, transparent); }
.tone-neutral { background: var(--badge-neutral-bg); color: var(--badge-neutral-text); border-color: var(--color-border); }
.tone-inverse { background: var(--badge-inverse-bg); color: var(--badge-inverse-text); border-color: rgba(255, 255, 255, 0.7); }
</style>

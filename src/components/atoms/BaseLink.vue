<template>
  <a :href="href" class="base-link" :class="[`tone-${tone}`, underline && 'is-underlined', disabled && 'is-disabled']" :aria-disabled="disabled" @click="handleClick">
    <BaseIcon v-if="iconLeft" :name="iconLeft" :tone="iconTone" />
    <span><slot>{{ label }}</slot></span>
    <BaseIcon v-if="iconRight" :name="iconRight" :tone="iconTone" />
  </a>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
const props = withDefaults(defineProps<{
  href?: string;
  label?: string;
  tone?: 'default' | 'primary' | 'inverse';
  underline?: boolean;
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
}>(), { href: '#', label: 'Leer mas', tone: 'primary', underline: false, disabled: false, iconLeft: undefined, iconRight: undefined });
const iconTone = props.tone === 'inverse' ? 'inverse' : props.tone === 'primary' ? 'primary' : 'default';
function handleClick(event: Event) { if (props.disabled) event.preventDefault(); }
</script>

<style scoped>
.base-link {
  display:inline-flex;
  align-items:center;
  gap:0.45rem;
  font-family:var(--font-sans);
  font-weight:700;
  text-decoration:none;
  cursor:pointer;
  border-radius: var(--radius-pill);
  transition:opacity 180ms ease, color 180ms ease, transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
}
.base-link:hover { transform: translateY(-1px); }
.base-link:active { transform: translateY(0) scale(0.985); }
.base-link:focus-visible {
  outline:none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 16%, transparent);
}
.base-link.is-underlined { text-decoration:underline; text-underline-offset:0.2em; }
.base-link.is-disabled { opacity:0.45; pointer-events:none; }
.tone-default { color:var(--color-text); }
.tone-primary { color:var(--color-primary); }
.tone-inverse { color:white; }
</style>

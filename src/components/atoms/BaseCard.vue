<template>
  <component :is="tag" :class="cardClasses" :style="cardStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    tag?: string;
    tone?: 'surface' | 'primary' | 'secondary' | 'transparent';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    radius?: 'sm' | 'md' | 'lg';
    shadow?: 'none' | 'card';
    bordered?: boolean;
    interactive?: boolean;
    maxWidth?: string;
  }>(),
  {
    tag: 'article',
    tone: 'surface',
    padding: 'md',
    radius: 'md',
    shadow: 'card',
    bordered: true,
    interactive: false,
    maxWidth: 'none',
  },
);

const cardClasses = computed(() => [
  'base-card',
  `tone-${props.tone}`,
  `padding-${props.padding}`,
  `radius-${props.radius}`,
  `shadow-${props.shadow}`,
  props.bordered && 'is-bordered',
  props.interactive && 'is-interactive',
]);

const cardStyle = computed(() => ({
  maxWidth: props.maxWidth,
}));
</script>

<style scoped>
.base-card {
  display: grid;
  gap: var(--space-stack);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}
.base-card.is-bordered {
  border: 1px solid var(--card-border-color);
}
.base-card.is-interactive:hover {
  transform: translateY(-2px);
}
.base-card.is-interactive:focus-within {
  outline: 2px solid color-mix(in srgb, var(--color-primary) 40%, transparent);
  outline-offset: 2px;
}
.tone-surface {
  background: var(--card-surface-bg);
  color: var(--color-text);
  backdrop-filter: blur(8px);
}
.tone-primary {
  background: var(--card-primary-bg);
  color: white;
}
.tone-secondary {
  background: var(--card-secondary-bg);
  color: white;
}
.tone-transparent {
  background: transparent;
  color: inherit;
}
.padding-none { padding: 0; }
.padding-sm { padding: calc(var(--space-card-padding) * 0.65); }
.padding-md { padding: var(--space-card-padding); }
.padding-lg { padding: calc(var(--space-card-padding) * 1.35); }
.radius-sm { border-radius: var(--radius-sm); }
.radius-md { border-radius: var(--radius-md); }
.radius-lg { border-radius: var(--radius-lg); }
.shadow-none { box-shadow: none; }
.shadow-card { box-shadow: var(--shadow-card); }
</style>

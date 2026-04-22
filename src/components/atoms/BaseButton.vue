<template>
  <button
    :class="[
      'button-base',
      `button-${variant}`,
      `button-${size}`,
      fullWidth && 'button-full-width'
    ]"
    :disabled="disabled"
    :aria-label="ariaLabel"
    type="button"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    ariaLabel?: string;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    disabled: false,
    fullWidth: false,
    ariaLabel: undefined,
  },
);
</script>

<style scoped>
.button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  padding: var(--space-button-y) var(--space-button-x);
  font-family: var(--font-sans);
  font-size: var(--font-size-button);
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition:
    transform 180ms ease,
    opacity 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    box-shadow 180ms ease,
    filter 180ms ease;
}

.button-base:hover:not(:disabled) {
  transform: translateY(-2px);
  filter: saturate(1.05);
}

.button-base:active:not(:disabled) {
  transform: translateY(0) scale(0.985);
}

.button-base:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 4px color-mix(in srgb, var(--color-primary) 18%, transparent),
    var(--shadow-button);
}

.button-base:disabled {
  opacity: 0.56;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.button-full-width {
  width: 100%;
}

.button-sm {
  padding: calc(var(--space-button-y) * 0.75) calc(var(--space-button-x) * 0.82);
  font-size: calc(var(--font-size-button) * 0.9);
}

.button-md {
  padding: var(--space-button-y) var(--space-button-x);
  font-size: var(--font-size-button);
}

.button-lg {
  padding: calc(var(--space-button-y) * 1.15) calc(var(--space-button-x) * 1.2);
  font-size: calc(var(--font-size-button) * 1.08);
}

.button-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  box-shadow: var(--shadow-button);
}

.button-secondary {
  background: var(--button-secondary-bg);
  color: var(--button-secondary-text);
  box-shadow: 0 10px 26px rgba(14, 42, 71, 0.2);
}

.button-outline {
  background: var(--button-outline-bg);
  color: var(--button-outline-text);
  border-color: var(--color-border);
}

.button-ghost {
  background: transparent;
  color: var(--button-ghost-text);
  border-color: transparent;
}
</style>

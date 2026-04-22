<template>
  <div class="field-wrap">
    <label v-if="label" class="field-label" :for="name">{{ label }}</label>
    <div class="control-shell" :class="[`size-${size}`, error && 'is-error', disabled && 'is-disabled', fullWidth && 'is-full']">
      <BaseIcon v-if="iconLeft" :name="iconLeft" tone="primary" rounded :size="18" />
      <input
        :id="name"
        class="base-input"
        :type="type"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-invalid="Boolean(error)"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <BaseIcon v-if="iconRight" :name="iconRight" tone="muted" rounded :size="18" />
    </div>
    <p v-if="error" class="field-error">{{ error }}</p>
    <p v-else-if="helpText" class="field-help">{{ helpText }}</p>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './BaseIcon.vue';
defineEmits<{ 'update:modelValue': [value: string] }>();
withDefaults(defineProps<{
  label?: string;
  placeholder?: string;
  modelValue?: string;
  error?: string;
  helpText?: string;
  disabled?: boolean;
  name?: string;
  type?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  iconLeft?: string;
  iconRight?: string;
}>(), { label: '', placeholder: '', modelValue: '', error: '', helpText: '', disabled: false, name: 'input', type: 'text', size: 'md', fullWidth: true, iconLeft: undefined, iconRight: undefined });
</script>

<style scoped>
.field-wrap { display:grid; gap:0.5rem; }
.field-label { font-size:0.8rem; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:var(--color-text-muted); }
.control-shell { display:flex; align-items:center; gap:0.6rem; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 94%, transparent); transition:border-color 180ms ease, box-shadow 180ms ease; }
.control-shell:focus-within { border-color:var(--color-primary); box-shadow:0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent); }
.control-shell.is-error { border-color:#e25d52; }
.control-shell.is-disabled { opacity:0.6; }
.control-shell.is-full { width:100%; }
.size-sm { padding:0.55rem 0.8rem; }
.size-md { padding:0.8rem 1rem; }
.size-lg { padding:1rem 1.1rem; }
.base-input { width:100%; border:none; outline:none; background:transparent; color:var(--color-text); caret-color: var(--color-primary); }
.field-error { margin:0; color:#c5342b; font-size:0.85rem; }
.field-help { margin:0; color:var(--color-text-muted); font-size:0.85rem; }
</style>

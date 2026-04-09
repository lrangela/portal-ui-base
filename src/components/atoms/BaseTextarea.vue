<template>
  <div class="field-wrap">
    <label v-if="label" class="field-label" :for="name">{{ label }}</label>
    <div class="control-shell" :class="[error && 'is-error', disabled && 'is-disabled']">
      <BaseIcon v-if="iconLeft" :name="iconLeft" tone="primary" rounded :size="18" class="textarea-icon" />
      <textarea
        :id="name"
        class="base-textarea"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :rows="rows"
        :aria-invalid="Boolean(error)"
        @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      />
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
  rows?: number;
  iconLeft?: string;
}>(), { label: '', placeholder: '', modelValue: '', error: '', helpText: '', disabled: false, name: 'textarea', rows: 5, iconLeft: undefined });
</script>

<style scoped>
.field-wrap { display:grid; gap:0.5rem; }
.field-label { font-size:0.8rem; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:var(--color-text-muted); }
.control-shell { display:flex; align-items:flex-start; gap:0.7rem; border:1px solid var(--color-border); border-radius:var(--radius-md); background:color-mix(in srgb, var(--color-surface) 94%, transparent); transition:border-color 180ms ease, box-shadow 180ms ease; padding:1rem; }
.control-shell:focus-within { border-color:var(--color-primary); box-shadow:0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent); }
.control-shell.is-error { border-color:#e25d52; }
.control-shell.is-disabled { opacity:0.6; }
.textarea-icon { margin-top: 0.05rem; flex-shrink: 0; }
.base-textarea { width:100%; min-height:140px; border:none; outline:none; resize:vertical; background:transparent; color:var(--color-text); caret-color: var(--color-primary); }
.field-error { margin:0; color:#c5342b; font-size:0.85rem; }
.field-help { margin:0; color:var(--color-text-muted); font-size:0.85rem; }
</style>

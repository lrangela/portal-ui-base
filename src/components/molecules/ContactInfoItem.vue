<template>
  <div :class="['contact-info-item', `variant-${variant}`]">
    <BaseIcon :name="icon" rounded tone="primary" :size="18" />
    <div class="contact-copy">
      <BaseText :text="label" size="sm" tone="muted" class="contact-label" />
      <BaseText :text="value" weight="bold" class="contact-value" />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseIcon from '../atoms/BaseIcon.vue';
import BaseText from '../atoms/BaseText.vue';
withDefaults(defineProps<{ icon: string; label: string; value: string; variant?: 'lift' | 'inline-accent' }>(), {
  variant: 'lift',
});
</script>
<style scoped>
.contact-info-item {
  display:flex;
  align-items:flex-start;
  gap:0.85rem;
  padding: 0.9rem 1rem;
  border: 1px solid color-mix(in srgb, var(--color-primary) 10%, var(--color-border));
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-surface) 92%, transparent);
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  position: relative;
  overflow: hidden;
}
.contact-info-item:hover {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--color-primary) 24%, var(--color-border));
  box-shadow: 0 14px 26px rgba(15, 23, 42, 0.08);
}
.contact-copy { display:grid; gap:0.2rem; }
.contact-label { text-transform: uppercase; letter-spacing: 0.06em; }
.contact-value { font-size: calc(var(--font-size-base) * 1.06); }
.contact-info-item :deep(.base-icon) {
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.contact-info-item :deep(.base-text) {
  transition: color 180ms ease, transform 180ms ease;
}
.variant-lift:hover :deep(.base-icon.is-rounded) {
  transform: translateY(-2px);
  box-shadow: 0 14px 24px rgba(1, 107, 107, 0.12);
}
.variant-inline-accent::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(180deg, var(--color-primary), var(--color-accent));
  opacity: 0;
  transition: opacity 180ms ease;
}
.variant-inline-accent:hover::before {
  opacity: 1;
}
.variant-inline-accent:hover :deep(.contact-value),
.variant-inline-accent:hover :deep(.base-text.weight-bold) {
  color: var(--color-primary);
}
</style>

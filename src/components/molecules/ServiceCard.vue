<template>
  <BaseCard interactive :class="['service-card', `variant-${variant}`]">
    <div class="service-card__head">
      <BaseIcon v-if="icon" :name="icon" rounded tone="primary" :size="18" />
      <BaseHeading :level="3" :text="title" />
    </div>
    <BaseText :text="description" tone="muted" />
    <div class="service-card__meta">
      <BaseText text="Explorar servicio" size="sm" weight="bold" />
      <BaseIcon name="ArrowRight" tone="primary" :size="16" />
    </div>
    <slot />
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import BaseHeading from '../atoms/BaseHeading.vue';
import BaseIcon from '../atoms/BaseIcon.vue';
import BaseText from '../atoms/BaseText.vue';
withDefaults(defineProps<{ title: string; description: string; icon?: string; variant?: 'default' | 'spotlight' }>(), {
  variant: 'default',
});
</script>
<style scoped>
.service-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 4%, transparent), transparent 58%);
  opacity: 0;
  transition: opacity 220ms ease, transform 220ms ease;
  z-index: 0;
}
.service-card:hover::before {
  opacity: 1;
  transform: scale(1.02);
}
.service-card__head {
  display:flex;
  align-items:center;
  gap:0.85rem;
  position: relative;
  z-index: 1;
}
.service-card__meta {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-top: 0.2rem;
  position: relative;
  z-index: 1;
  margin-top: auto;
  border-top: 1px solid color-mix(in srgb, var(--color-primary) 10%, var(--color-border));
  padding-top: 1rem;
  transition: transform 180ms ease, border-color 180ms ease;
}
.service-card :deep(.base-text),
.service-card :deep(.base-heading) {
  position: relative;
  z-index: 1;
}
.service-card :deep(.base-icon) {
  position: relative;
  z-index: 1;
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.service-card:hover :deep(.base-icon.is-rounded) {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 14px 28px rgba(1, 107, 107, 0.14);
}
.service-card:hover .service-card__meta {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--color-primary) 24%, var(--color-border));
}
.service-card__meta :deep(.base-text) {
  transition: color 180ms ease, transform 180ms ease;
}
.service-card__meta :deep(.base-icon) {
  transition: transform 180ms ease, color 180ms ease;
}
.service-card:hover .service-card__meta :deep(.base-text) {
  color: var(--color-primary);
  transform: translateX(2px);
}
.service-card:hover .service-card__meta :deep(.base-icon) {
  color: var(--color-primary);
  transform: translateX(6px);
}
.variant-default:hover {
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.12);
}
.variant-spotlight::after {
  content: '';
  position: absolute;
  inset: auto -20% -35% auto;
  width: 180px;
  height: 180px;
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-accent) 28%, transparent), transparent 70%);
  opacity: 0;
  transform: translate3d(16px, 16px, 0);
  transition: opacity 240ms ease, transform 240ms ease;
  pointer-events: none;
}
.variant-spotlight:hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.variant-spotlight:hover {
  box-shadow:
    0 26px 52px rgba(14, 42, 71, 0.14),
    0 0 0 1px color-mix(in srgb, var(--color-primary) 18%, transparent);
}
</style>

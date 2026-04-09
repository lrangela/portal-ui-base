<template>
  <BaseCard :class="['stat-card', `variant-${variant}`]" interactive>
    <div class="stat-card__head">
      <BaseIcon v-if="icon" :name="icon" rounded tone="primary" :size="18" />
      <BaseText :text="label" size="sm" tone="muted" />
    </div>
    <BaseHeading :level="3" :text="value" />
    <BaseText v-if="description" :text="description" tone="muted" />
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import BaseHeading from '../atoms/BaseHeading.vue';
import BaseIcon from '../atoms/BaseIcon.vue';
import BaseText from '../atoms/BaseText.vue';
withDefaults(defineProps<{ label: string; value: string; description?: string; icon?: string; variant?: 'glow' | 'accent' }>(), {
  variant: 'glow',
});
</script>
<style scoped>
.stat-card {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--color-surface) 96%, transparent), color-mix(in srgb, var(--color-primary) 3%, var(--color-surface))),
    var(--card-surface-bg);
}
.stat-card__head {
  display:flex;
  align-items:center;
  gap:0.75rem;
}
.stat-card :deep(.base-heading) {
  transition: transform 180ms ease, color 180ms ease, text-shadow 180ms ease;
}
.stat-card :deep(.base-icon) {
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.variant-glow::before,
.variant-accent::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  opacity: 0.8;
}
.variant-glow::after {
  content: '';
  position: absolute;
  inset: -24% -10% auto auto;
  width: 170px;
  height: 170px;
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-primary) 18%, transparent), transparent 70%);
  opacity: 0;
  transition: opacity 220ms ease, transform 220ms ease;
  transform: translate3d(10px, -10px, 0);
}
.variant-glow:hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
.variant-glow:hover :deep(.base-heading) {
  color: var(--color-primary);
  transform: translateY(-1px);
  text-shadow: 0 10px 22px rgba(1, 107, 107, 0.14);
}
.variant-accent {
  border-color: color-mix(in srgb, var(--color-primary) 12%, var(--card-border-color));
}
.variant-accent:hover {
  box-shadow: 0 22px 44px rgba(14, 42, 71, 0.12);
}
.variant-accent:hover :deep(.base-icon.is-rounded) {
  transform: scale(1.05);
  box-shadow: 0 14px 28px rgba(14, 42, 71, 0.14);
}
</style>

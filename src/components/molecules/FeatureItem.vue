<template>
  <BaseCard interactive :class="['feature-item-card', `variant-${variant}`]">
    <div class="feature-head">
      <BaseIcon :name="icon" rounded tone="primary" :size="18" />
      <div class="feature-copy">
        <BaseHeading :level="4" :text="title" />
        <BaseText text="Capacidad del sistema" size="sm" tone="muted" />
      </div>
    </div>
    <BaseText :text="description" tone="muted" />
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import BaseHeading from '../atoms/BaseHeading.vue';
import BaseIcon from '../atoms/BaseIcon.vue';
import BaseText from '../atoms/BaseText.vue';
withDefaults(defineProps<{ icon: string; title: string; description: string; variant?: 'line' | 'spot' }>(), {
  variant: 'line',
});
</script>
<style scoped>
.feature-item-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.feature-item-card::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  opacity: 0;
  transition: opacity 180ms ease, transform 180ms ease;
}
.feature-item-card:hover::after {
  opacity: 1;
  transform: scaleX(1.02);
}
.feature-head { display:flex; gap:0.85rem; align-items:center; }
.feature-copy { display:grid; gap:0.15rem; }
.feature-item-card :deep(.base-icon) {
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.feature-item-card :deep(.base-heading),
.feature-item-card :deep(.base-text) {
  transition: transform 180ms ease, color 180ms ease;
}
.feature-item-card:hover :deep(.base-icon.is-rounded) {
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(1, 107, 107, 0.14);
}
.variant-line:hover :deep(.base-heading) {
  transform: translateX(2px);
  color: var(--color-primary);
}
.variant-spot::before {
  content: '';
  position: absolute;
  inset: -30% auto auto -12%;
  width: 150px;
  height: 150px;
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 72%);
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 220ms ease, transform 220ms ease;
  z-index: 0;
}
.variant-spot:hover::before {
  opacity: 1;
  transform: scale(1);
}
.variant-spot:hover {
  box-shadow: 0 22px 46px rgba(15, 23, 42, 0.11);
}
</style>

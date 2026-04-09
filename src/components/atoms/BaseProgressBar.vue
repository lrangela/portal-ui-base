<template>
  <div class="progress-shell" :class="centered && 'is-centered'" role="progressbar" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="displayValue" :aria-label="label">
    <div class="progress-meta">
      <span class="progress-label">{{ label }}</span>
      <span v-if="showValue" class="progress-value">{{ displayValue }}%</span>
    </div>
    <div class="progress-track">
      <div ref="barRef" class="progress-fill" :class="`tone-${tone}`" :style="{ width: `${displayValue}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { ensureGsap } from '../../lib/motion';

const props = withDefaults(defineProps<{
  value?: number;
  label?: string;
  tone?: 'primary' | 'secondary' | 'accent';
  animated?: boolean;
  showValue?: boolean;
  centered?: boolean;
}>(), {
  value: 68,
  label: 'Cargando recursos',
  tone: 'primary',
  animated: true,
  showValue: true,
  centered: false,
});

const displayValue = ref(0);
const barRef = ref<HTMLElement | null>(null);

watch(
  () => props.value,
  (next) => {
    const clamped = Math.max(0, Math.min(100, Number(next) || 0));
    if (!props.animated || !barRef.value) {
      displayValue.value = clamped;
      return;
    }
    const { gsap } = ensureGsap();
    gsap.to(displayValue, {
      value: clamped,
      duration: 0.7,
      ease: 'power2.out',
      roundProps: 'value',
      onUpdate: () => {
        displayValue.value = Math.round(displayValue.value);
      },
    });
  },
  { immediate: true },
);
</script>

<style scoped>
.progress-shell {
  display:grid;
  gap:0.55rem;
  width: min(100%, 420px);
}
.is-centered { margin-inline:auto; }
.progress-meta {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
  font-family:var(--font-sans);
  font-size:0.85rem;
  font-weight:700;
  color:var(--color-text);
}
.progress-label {
  color:var(--color-text-muted);
  text-transform:uppercase;
  letter-spacing:0.06em;
}
.progress-value { color:var(--color-primary); }
.progress-track {
  height: 12px;
  border-radius: var(--radius-pill);
  overflow:hidden;
  background: color-mix(in srgb, var(--color-border) 62%, white);
  box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.06);
}
.progress-fill {
  height:100%;
  border-radius: inherit;
  transition: width 220ms ease;
}
.tone-primary {
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  box-shadow: 0 8px 20px rgba(1, 107, 107, 0.24);
}
.tone-secondary {
  background: linear-gradient(90deg, var(--color-secondary), color-mix(in srgb, var(--color-secondary) 60%, white));
}
.tone-accent {
  background: linear-gradient(90deg, var(--color-accent), color-mix(in srgb, var(--color-primary) 40%, var(--color-accent)));
}
</style>

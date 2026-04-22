<template>
  <section class="hero-shell">
    <div class="hero-stack">
      <span class="hero-eyebrow">
        {{ eyebrow }}
      </span>

      <h1 class="hero-title">
        {{ title }}
      </h1>

      <p class="hero-description">
        {{ description }}
      </p>

      <div class="hero-actions">
        <BaseButton variant="primary">{{ primaryCta }}</BaseButton>
        <BaseButton variant="outline">{{ secondaryCta }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue';

withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    description: string;
    primaryCta?: string;
    secondaryCta?: string;
  }>(),
  {
    eyebrow: 'Consultoria tecnologica',
    primaryCta: 'Solicitar evaluacion',
    secondaryCta: 'Ver portafolio',
  },
);
</script>

<style scoped>
.hero-shell {
  width: min(100%, var(--layout-content-max));
  margin: 0 auto;
  padding:
    var(--space-section-y)
    var(--space-section-x)
    calc(var(--space-section-y) * 0.85);
}

.hero-stack {
  display: grid;
  gap: var(--space-stack);
  max-width: var(--layout-hero-max);
}

.hero-eyebrow {
  display: inline-flex;
  width: fit-content;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 88%, white 12%);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.hero-title {
  margin: 0;
  max-width: calc(var(--layout-hero-max) - 48px);
  font-family: var(--font-heading);
  font-size: var(--font-size-h1);
  line-height: 0.95;
  letter-spacing: var(--letter-spacing);
  color: var(--color-text);
}

.hero-description {
  margin: 0;
  max-width: 42rem;
  font-family: var(--font-sans);
  font-size: calc(var(--font-size-base) * 1.125);
  line-height: var(--line-height-base);
  color: var(--color-text-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--space-stack) * 0.5);
}

@media (max-width: 768px) {
  .hero-shell {
    padding-top: calc(var(--space-section-y) * 0.75);
  }

  .hero-title {
    max-width: 100%;
    font-size: calc(var(--font-size-h1) * 0.78);
  }
}
</style>

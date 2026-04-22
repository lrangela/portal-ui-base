<template>
  <section class="motion-slider">
    <div ref="slideRef" class="motion-slider__viewport">
      <BaseCard interactive>
        <BaseBadge v-if="activeSlide.eyebrow" :label="activeSlide.eyebrow" tone="default" />
        <BaseHeading :level="3" :text="activeSlide.title" />
        <BaseText :text="activeSlide.description" tone="muted" />
      </BaseCard>
    </div>
    <div class="motion-slider__actions">
      <BaseButton variant="outline" label="Anterior" @click="goPrev" />
      <BaseButton label="Siguiente" @click="goNext" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseBadge from '../atoms/BaseBadge.vue';
import BaseButton from '../atoms/BaseButton.vue';
import BaseCard from '../atoms/BaseCard.vue';
import BaseHeading from '../atoms/BaseHeading.vue';
import BaseText from '../atoms/BaseText.vue';
import { ensureGsap } from '../../lib/motion';

const props = withDefaults(defineProps<{ slides?: Array<{ eyebrow?: string; title: string; description: string }> }>(), {
  slides: () => [
    { eyebrow: 'Slide 1', title: 'Sistema de componentes consistente', description: 'Cada slide puede usarse para mostrar una idea clave con transicion controlada por GSAP.' },
    { eyebrow: 'Slide 2', title: 'Validacion visual con ritmo serio', description: 'No buscamos efectos por efecto: el movimiento apoya jerarquia, continuidad y lectura.' },
    { eyebrow: 'Slide 3', title: 'Contenido editable y aprobable', description: 'El slider tambien puede ser una pieza reusable dentro de una landing corporativa.' },
  ],
});

const index = ref(0);
const slideRef = ref<HTMLElement | null>(null);
const activeSlide = computed(() => props.slides[index.value] ?? props.slides[0]);

function animateChange() {
  if (!slideRef.value) return;
  const { gsap } = ensureGsap();
  gsap.fromTo(slideRef.value, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' });
}
function goNext() {
  index.value = (index.value + 1) % props.slides.length;
  animateChange();
}
function goPrev() {
  index.value = (index.value - 1 + props.slides.length) % props.slides.length;
  animateChange();
}
</script>
<style scoped>
.motion-slider { display:grid; gap:1rem; }
.motion-slider__viewport { min-height:220px; }
.motion-slider__actions { display:flex; gap:0.75rem; flex-wrap:wrap; }
</style>

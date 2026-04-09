<template>
  <footer ref="footerRef" class="site-footer">
    <BaseText text="Portal Tech Company" weight="bold" />
    <BaseText text="Sistema visual escalable construido con Astro, Vue y Storybook." tone="muted" />
    <div class="links">
      <BaseLink label="Privacidad" href="#" icon-right="ArrowRight" />
      <BaseLink label="Contacto" href="#" icon-right="ArrowRight" />
    </div>
  </footer>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BaseLink from '../atoms/BaseLink.vue';
import BaseText from '../atoms/BaseText.vue';
import { ensureGsap } from '../../lib/motion';

const footerRef = ref<HTMLElement | null>(null);
onMounted(() => {
  if (!footerRef.value) return;
  const { gsap, ScrollTrigger } = ensureGsap();
  gsap.from(footerRef.value, {
    y: 24,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top bottom-=40',
      once: true,
    },
  });
});
</script>
<style scoped>
.site-footer { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:1rem; }
.links { display:flex; gap:1rem; flex-wrap:wrap; }
</style>

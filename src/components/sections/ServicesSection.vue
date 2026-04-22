<template>
  <section ref="sectionRef" class="section-shell">
    <SectionHeader badge="Servicios" title="Lo que hacemos" description="Seccion modular para exponer servicios principales." />
    <ServicesGrid :services="services" />
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import SectionHeader from '../molecules/SectionHeader.vue';
import ServicesGrid from '../organisms/ServicesGrid.vue';
import { ensureGsap } from '../../lib/motion';

defineProps<{ services: Array<{ title: string; description: string; icon?: string }> }>();

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!sectionRef.value) return;
  const cards = sectionRef.value.querySelectorAll('article');
  if (!cards.length) return;
  const { gsap, ScrollTrigger } = ensureGsap();
  gsap.fromTo(
    cards,
    { y: 28, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: ScrollTrigger ? { trigger: sectionRef.value, start: 'top 82%' } : undefined,
    },
  );
});
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
</style>

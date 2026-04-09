<template>
  <header ref="headerRef" class="site-header">
    <BaseHeading tag="div" :level="4" text="Portal Tech Company" class="brand-mark" />
    <div class="links">
      <NavItem v-for="item in items" :key="item.label" :label="item.label" :href="item.href" />
    </div>
    <BaseButton label="Agendar llamada" size="sm" class="cta-button" />
  </header>
</template>
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import BaseButton from '../atoms/BaseButton.vue';
import BaseHeading from '../atoms/BaseHeading.vue';
import NavItem from '../molecules/NavItem.vue';
import { ensureGsap } from '../../lib/motion';

withDefaults(defineProps<{ items?: Array<{ label: string; href: string }> }>(), { items: () => [{ label: 'Servicios', href: '#' }, { label: 'Proceso', href: '#' }, { label: 'Contacto', href: '#' }] });

const headerRef = ref<HTMLElement | null>(null);
let onScroll: (() => void) | null = null;

onMounted(() => {
  if (!headerRef.value || typeof window === 'undefined') return;
  const { gsap } = ensureGsap();
  const element = headerRef.value;
  onScroll = () => {
    const scrolled = window.scrollY > 24;
    gsap.to(element, {
      duration: 0.28,
      backgroundColor: scrolled ? 'color-mix(in srgb, var(--color-surface) 88%, transparent)' : 'transparent',
      borderColor: scrolled ? 'var(--color-border)' : 'transparent',
      boxShadow: scrolled ? '0 12px 28px rgba(15, 23, 42, 0.08)' : '0 0 0 rgba(0,0,0,0)',
      backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
      paddingTop: scrolled ? '0.85rem' : '1rem',
      paddingBottom: scrolled ? '0.85rem' : '1rem',
      ease: 'power2.out',
    });
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (onScroll && typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll);
  }
});
</script>
<style scoped>
.site-header {
  position:sticky;
  top:0;
  z-index:30;
  width:min(calc(100% - 24px), var(--layout-content-max));
  margin:0 auto;
  padding:1rem var(--space-section-x);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:1rem;
  border:1px solid transparent;
  border-radius:calc(var(--radius-lg) + 4px);
}
.links { display:flex; flex-wrap:wrap; gap:1rem; }
.brand-mark {
  transition: transform 180ms ease, color 180ms ease;
}
.brand-mark:hover {
  color: var(--color-primary);
  transform: translateY(-1px);
}
.cta-button:hover {
  box-shadow: 0 16px 36px rgba(1, 107, 107, 0.22);
}
</style>

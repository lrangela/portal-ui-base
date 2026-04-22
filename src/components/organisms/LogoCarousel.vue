<template>
  <div ref="trackRef" class="logo-carousel">
    <div class="logo-carousel__track">
      <LogoItem v-for="(item, index) in doubledItems" :key="`${item}-${index}`" :label="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import LogoItem from '../molecules/LogoItem.vue';
import { ensureGsap } from '../../lib/motion';

const props = withDefaults(defineProps<{ items?: string[]; speed?: number }>(), { items: () => ['Globex', 'Northwind', 'Novatek', 'Lumen', 'Aurora'], speed: 24 });
const doubledItems = computed(() => [...props.items, ...props.items]);
const trackRef = ref<HTMLElement | null>(null);
let tween: any = null;

onMounted(() => {
  if (!trackRef.value) return;
  const { gsap } = ensureGsap();
  const track = trackRef.value.querySelector('.logo-carousel__track');
  if (!(track instanceof HTMLElement)) return;
  tween = gsap.to(track, {
    xPercent: -50,
    ease: 'none',
    duration: props.speed,
    repeat: -1,
  });
});

onBeforeUnmount(() => {
  tween?.kill?.();
});
</script>
<style scoped>
.logo-carousel { overflow:hidden; width:100%; }
.logo-carousel__track { display:flex; gap:1rem; width:max-content; will-change:transform; }
.logo-carousel__track > * { min-width:180px; }
</style>

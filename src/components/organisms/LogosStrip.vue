<template>
  <div class="strip">
    <LogoItem v-for="(item, index) in items" :key="index" :label="item" />
  </div>
</template>
<script setup lang="ts">
import LogoItem from '../molecules/LogoItem.vue';
withDefaults(defineProps<{ items?: string[] }>(), { items: () => ['Globex', 'Northwind', 'Novatek', 'Lumen', 'Aurora'] });
</script>
<style scoped>
.strip { display:grid; gap:1rem; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); }
</style>

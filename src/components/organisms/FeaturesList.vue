<template>
  <div class="feature-list">
    <FeatureItem v-for="(item, index) in items" :key="index" v-bind="item" />
  </div>
</template>
<script setup lang="ts">
import FeatureItem from '../molecules/FeatureItem.vue';
defineProps<{ items: Array<{ icon: string; title: string; description: string }> }>();
</script>
<style scoped>
.feature-list { display:grid; gap:1rem; }
</style>

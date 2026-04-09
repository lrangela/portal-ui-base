<template>
  <BaseCard tag="div" padding="sm" radius="sm" shadow="none" class="logo-item">
    <BaseText :text="label" weight="bold" />
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import BaseText from '../atoms/BaseText.vue';
defineProps<{ label: string }>();
</script>
<style scoped>
.logo-item { min-height: 72px; place-items:center; }
</style>

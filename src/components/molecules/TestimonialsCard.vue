<template>
  <BaseCard>
    <div class="quote-head">
      <BaseIcon name="Quote" tone="primary" />
      <div v-if="rating" class="rating">{{ '★'.repeat(rating) }}</div>
    </div>
    <BaseText :text="quote" size="lg" />
    <div class="meta">
      <div v-if="avatar" class="avatar">{{ avatar }}</div>
      <div>
        <BaseText :text="name" weight="bold" />
        <BaseText :text="role" size="sm" tone="muted" />
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import BaseIcon from '../atoms/BaseIcon.vue';
import BaseText from '../atoms/BaseText.vue';
withDefaults(defineProps<{ quote: string; name: string; role: string; avatar?: string; rating?: number }>(), { avatar: '', rating: 0 });
</script>
<style scoped>
.quote-head { display:flex; justify-content:space-between; align-items:center; }
.rating { color:#f59e0b; letter-spacing:0.12em; }
.meta { display:flex; align-items:center; gap:0.8rem; }
.avatar { width:44px; height:44px; display:grid; place-items:center; border-radius:50%; background:color-mix(in srgb, var(--color-primary) 16%, white 84%); color:var(--color-primary); font-weight:800; }
</style>

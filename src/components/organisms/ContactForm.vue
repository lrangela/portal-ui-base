<template>
  <form class="contact-form" @submit.prevent>
    <FormFieldGroup>
      <BaseInput label="Nombre" placeholder="Tu nombre" icon-left="PenLine" />
      <BaseInput label="Correo" placeholder="tu@empresa.com" type="email" icon-left="Mail" />
    </FormFieldGroup>
    <BaseTextarea label="Necesidad" placeholder="Describe tu proyecto" help-text="Cuanto mas contexto, mejor la propuesta." icon-left="MessageSquareText" />
    <BaseButton :label="loading ? 'Enviando...' : 'Enviar consulta'" :disabled="loading" />
  </form>
</template>
<script setup lang="ts">
import BaseButton from '../atoms/BaseButton.vue';
import BaseInput from '../atoms/BaseInput.vue';
import BaseTextarea from '../atoms/BaseTextarea.vue';
import FormFieldGroup from '../molecules/FormFieldGroup.vue';
withDefaults(defineProps<{ loading?: boolean }>(), { loading: false });
</script>
<style scoped>
.contact-form { display:grid; gap:1rem; }
</style>

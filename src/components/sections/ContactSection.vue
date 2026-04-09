<template>
  <section class="section-shell contact-layout">
    <div>
      <SectionHeader badge="Contacto" title="Hablemos de tu portal" description="Formulario y datos de contacto en una misma seccion." />
      <div class="info-list">
        <ContactInfoItem icon="Mail" label="Correo" value="hola@portaltech.co" variant="lift" />
        <ContactInfoItem icon="Phone" label="Telefono" value="+51 999 999 999" variant="inline-accent" />
      </div>
    </div>
    <BaseCard>
      <ContactForm />
    </BaseCard>
  </section>
</template>
<script setup lang="ts">
import BaseCard from '../atoms/BaseCard.vue';
import ContactInfoItem from '../molecules/ContactInfoItem.vue';
import SectionHeader from '../molecules/SectionHeader.vue';
import ContactForm from '../organisms/ContactForm.vue';
</script>
<style scoped>
.section-shell { width:min(100%, var(--layout-content-max)); margin:0 auto; padding:var(--space-section-y) var(--space-section-x); display:grid; gap:var(--space-stack); }
.contact-layout { grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); }
.info-list { display:grid; gap:1rem; }
</style>

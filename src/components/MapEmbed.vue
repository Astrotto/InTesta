<script setup lang="ts">
import { salon } from '@/data/salon'
</script>

<template>
  <div class="group relative border border-primary/25">
    <iframe
      :src="salon.mapsEmbedUrl"
      class="block h-full min-h-[320px] w-full grayscale-[45%] transition-all duration-500 group-hover:grayscale-0"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Mappa di In Testa Hair Salon a Pratola Peligna"
      allowfullscreen
    />
    <a
      :href="salon.mapsUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute right-0 bottom-0 inline-flex items-center gap-2.5 bg-primary px-5 py-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-background transition-colors duration-200 hover:bg-accent hover:text-primary"
    >
      <FontAwesomeIcon icon="location-dot" />
      Apri in Google Maps
      <FontAwesomeIcon icon="arrow-up-right-from-square" class="text-[0.85em]" />
    </a>
  </div>
</template>

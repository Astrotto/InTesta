<script setup lang="ts">
import { salon } from '@/data/salon'
</script>

<template>
  <div
    class="group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]"
  >
    <iframe
      :src="salon.mapsEmbedUrl"
      class="h-full min-h-[320px] w-full grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
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
      class="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-surface/95 px-4 py-2 text-xs font-medium text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition-colors hover:text-accent"
    >
      <FontAwesomeIcon icon="location-dot" class="text-accent" />
      Apri in Google Maps
      <FontAwesomeIcon icon="arrow-up-right-from-square" class="text-[0.7em]" />
    </a>
  </div>
</template>

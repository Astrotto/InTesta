<script setup lang="ts">
import type { Service } from '@/data/salon'

defineProps<{
  service: Service
}>()
</script>

<template>
  <article
    class="edge-card group relative flex h-full flex-col border border-border bg-surface p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-hard-sm)]"
  >
    <!-- tratteggio d'angolo al posto dell'alone sfocato -->
    <div
      class="hatch-accent absolute top-0 right-0 h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-60"
      aria-hidden="true"
    />

    <span
      class="mb-6 inline-flex h-14 w-14 items-center justify-center border border-primary/20 bg-surface-alt text-2xl text-primary transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-primary"
    >
      <FontAwesomeIcon :icon="service.icon" />
    </span>

    <h3 class="font-display text-2xl font-medium leading-tight text-foreground">
      {{ service.title }}
    </h3>
    <p class="mt-3 flex-1 text-sm leading-relaxed text-muted">
      {{ service.description }}
    </p>

    <ul class="mt-6 space-y-2.5 border-t border-border pt-5">
      <li
        v-for="feature in service.features"
        :key="feature"
        class="flex items-center gap-3 text-sm text-foreground"
      >
        <span class="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
        {{ feature }}
      </li>
    </ul>
  </article>
</template>

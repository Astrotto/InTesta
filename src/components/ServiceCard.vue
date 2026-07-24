<script setup lang="ts">
import type { Service } from '@/data/salon'

defineProps<{
  service: Service
}>()
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[var(--shadow-soft)]"
  >
    <!-- alone decorativo -->
    <div
      class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
    />

    <span
      class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt text-2xl text-primary transition-colors duration-500 group-hover:bg-accent group-hover:text-surface"
    >
      <FontAwesomeIcon :icon="service.icon" />
    </span>

    <h3 class="font-display text-2xl font-medium text-foreground">
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
        <FontAwesomeIcon icon="circle-check" class="text-accent" />
        {{ feature }}
      </li>
    </ul>
  </article>
</template>

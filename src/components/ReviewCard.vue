<script setup lang="ts">
import type { Review } from '@/data/salon'
import StarRating from './ui/StarRating.vue'

const props = defineProps<{
  review: Review
}>()

const initials = props.review.author
  .split(' ')
  .map((part) => part.charAt(0))
  .slice(0, 2)
  .join('')
  .toUpperCase()
</script>

<template>
  <article
    class="edge-card flex h-full flex-col border border-border bg-surface p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-hard-sm)]"
  >
    <FontAwesomeIcon icon="quote-left" class="text-3xl text-accent/40" />

    <p class="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
      {{ review.text }}
    </p>

    <div class="mt-6 flex items-center gap-4 border-t border-border pt-6">
      <span
        class="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-sm font-semibold tracking-wider text-background"
      >
        {{ initials }}
      </span>
      <div class="min-w-0">
        <p class="truncate text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
          {{ review.author }}
        </p>
        <div class="mt-1 flex items-center gap-2">
          <StarRating :rating="5" />
          <span class="text-xs text-muted">· {{ review.when }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

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
    v-tilt="5"
    class="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-8 hover:border-accent/40"
  >
    <FontAwesomeIcon icon="quote-left" class="text-3xl text-accent/40" />

    <p class="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
      {{ review.text }}
    </p>

    <div class="mt-6 flex items-center gap-4 border-t border-border pt-6">
      <span
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-surface"
      >
        {{ initials }}
      </span>
      <div class="min-w-0">
        <p class="truncate font-medium text-foreground">{{ review.author }}</p>
        <div class="mt-0.5 flex items-center gap-2">
          <StarRating :rating="5" />
          <span class="text-xs text-muted">· {{ review.when }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

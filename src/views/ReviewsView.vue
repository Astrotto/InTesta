<script setup lang="ts">
import { salon, reviews, shortQuotes } from '@/data/salon'
import PageHero from '@/components/layout/PageHero.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import StarRating from '@/components/ui/StarRating.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

interface Tag {
  label: string
  count: number
}

const tags: Tag[] = [
  { label: 'Garanzia', count: 2 },
  { label: 'Passione', count: 2 },
  { label: 'Simpatia', count: 2 },
  { label: 'Ambiente', count: 2 },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Recensioni"
      title="La voce delle nostre clienti"
      subtitle="Un rating perfetto costruito con cura, sorrisi e capelli sempre al top."
    />

    <!-- RIEPILOGO RATING -->
    <section class="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
      <div
        v-reveal
        class="grid gap-8 rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--shadow-soft)] sm:grid-cols-[auto_1fr] sm:items-center sm:p-10"
      >
        <div class="text-center sm:border-r sm:border-border sm:pr-10">
          <p class="font-display text-6xl font-semibold text-foreground">
            {{ salon.rating.toFixed(1) }}
          </p>
          <div class="mt-2 flex justify-center">
            <StarRating :rating="salon.rating" />
          </div>
          <p class="mt-2 text-sm text-muted">{{ salon.reviewsCount }} recensioni Google</p>
        </div>
        <div>
          <p class="mb-4 text-sm text-muted">Le clienti parlano soprattutto di:</p>
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="tag in tags"
              :key="tag.label"
              class="inline-flex items-center gap-2 rounded-full bg-surface-alt px-4 py-2 text-sm text-foreground"
            >
              {{ tag.label }}
              <span class="text-xs text-muted">{{ tag.count }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- RECENSIONI COMPLETE -->
    <section class="mx-auto max-w-6xl px-5 py-14 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(review, i) in reviews" :key="review.author" v-reveal="i * 100">
          <ReviewCard :review="review" />
        </div>
      </div>

      <!-- Citazioni brevi -->
      <div class="mt-10 grid gap-4 sm:grid-cols-3">
        <blockquote
          v-for="(quote, i) in shortQuotes"
          :key="quote"
          v-reveal="i * 90"
          class="rounded-3xl border border-border bg-surface-alt p-6 text-center"
        >
          <FontAwesomeIcon icon="quote-left" class="text-2xl text-accent/40" />
          <p class="mt-3 text-sm font-medium italic leading-relaxed text-foreground">
            {{ quote }}
          </p>
        </blockquote>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
      <div
        v-reveal
        class="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-border bg-surface px-8 py-12 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:text-left"
      >
        <div>
          <h2 class="font-display text-2xl font-medium text-foreground sm:text-3xl">
            Sei stata da noi? Raccontalo!
          </h2>
          <p class="mt-2 text-muted">La tua opinione aiuta altre clienti a scegliere In Testa.</p>
        </div>
        <BaseButton
          :href="salon.reviewUrl"
          variant="accent"
          icon="star"
          class="shrink-0"
        >
          Lascia una recensione
        </BaseButton>
      </div>
    </section>
  </div>
</template>

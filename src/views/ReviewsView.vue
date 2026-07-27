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
  { label: 'Subito', count: 2 },
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
    <section class="mx-auto max-w-6xl px-5 pt-16 pb-8 lg:px-8">
      <div v-reveal class="relative">
        <div
          class="absolute inset-0 translate-x-2.5 translate-y-2.5 border border-accent"
          aria-hidden="true"
        />
        <div
          class="relative grid gap-8 border border-primary bg-surface p-8 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10"
        >
          <div class="text-center sm:border-r sm:border-border sm:pr-10">
            <p class="font-display text-7xl font-semibold leading-none text-foreground">
              {{ salon.rating.toFixed(1) }}
            </p>
            <div class="mt-3 flex justify-center">
              <StarRating :rating="salon.rating" />
            </div>
            <p class="mt-3 text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              {{ salon.reviewsCount }} recensioni Google
            </p>
          </div>
          <div>
            <p class="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Le clienti parlano soprattutto di
            </p>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tag in tags"
                :key="tag.label"
                class="inline-flex items-center gap-2.5 border border-primary/25 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-foreground"
              >
                {{ tag.label }}
                <span class="bg-accent px-1.5 py-0.5 text-[0.6rem] text-primary">
                  {{ tag.count }}
                </span>
              </li>
            </ul>
          </div>
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

      <!-- Citazioni brevi: card indipendenti a scacchiera -->
      <div class="stagger-grid mt-6 grid gap-6 sm:grid-cols-3">
        <blockquote
          v-for="(quote, i) in shortQuotes"
          :key="quote"
          v-reveal="i * 90"
          class="border border-border border-t-2 border-t-accent bg-surface-alt p-7 text-center"
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
        class="relative flex flex-col items-center justify-between gap-6 border-y-2 border-primary bg-surface px-8 py-12 text-center sm:flex-row sm:text-left"
      >
        <div class="hatch absolute inset-y-0 right-0 w-24 opacity-60" aria-hidden="true" />
        <div class="relative">
          <h2 class="font-display text-2xl font-medium text-foreground sm:text-3xl">
            Sei stata da noi? Raccontalo!
          </h2>
          <p class="mt-2 text-muted">La tua opinione aiuta altre clienti a scegliere In Testa.</p>
        </div>
        <BaseButton
          :href="salon.reviewUrl"
          variant="accent"
          icon="star"
          class="relative shrink-0"
        >
          Lascia una recensione
        </BaseButton>
      </div>
    </section>
  </div>
</template>

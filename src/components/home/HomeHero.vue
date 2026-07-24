<script setup lang="ts">
import { salon } from '@/data/salon'
import BaseButton from '@/components/ui/BaseButton.vue'
import StarRating from '@/components/ui/StarRating.vue'
</script>

<template>
  <section class="relative flex min-h-screen items-center overflow-hidden">
    <!-- sfondo: gradienti caldi ispirati al legno e alla crema del salone -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,var(--color-surface-alt)_0%,var(--color-background)_55%)]"
      />
      <div class="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div class="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-blush/15 blur-3xl" />
    </div>

    <div class="mx-auto grid w-full max-w-6xl gap-14 px-5 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
      <!-- Testo -->
      <div>
        <div
          v-reveal
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur"
        >
          <FontAwesomeIcon icon="location-dot" class="text-accent" />
          Pratola Peligna · Provincia dell'Aquila
        </div>

        <h1
          v-reveal="80"
          class="font-display text-5xl font-medium leading-[1.02] text-foreground sm:text-6xl md:text-7xl"
        >
          Il tuo biondo,<br />
          la nostra
          <span class="relative italic text-accent">
            firma
            <span class="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-accent/40" />
          </span>
        </h1>

        <p v-reveal="160" class="mt-7 max-w-xl text-lg leading-relaxed text-muted">
          {{ salon.claim }}. Un salone dove colore, cura e benessere si incontrano
          per farti uscire luminosa e sicura di te.
        </p>

        <div v-reveal="240" class="mt-9 flex flex-wrap items-center gap-3">
          <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
            Prenota un appuntamento
          </BaseButton>
          <BaseButton to="/servizi" variant="outline" icon="arrow-right" icon-right>
            Scopri i servizi
          </BaseButton>
        </div>

        <!-- Rating -->
        <div v-reveal="320" class="mt-10 flex items-center gap-4">
          <StarRating :rating="salon.rating" />
          <p class="text-sm text-muted">
            <span class="font-semibold text-foreground">{{ salon.rating.toFixed(1) }}</span>
            su Google · {{ salon.reviewsCount }} recensioni
          </p>
        </div>
      </div>

      <!-- Card decorativa -->
      <div v-reveal="200" class="relative">
        <div
          class="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-8 shadow-[var(--shadow-soft)]"
        >
          <div class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
          <div class="flex flex-col items-center text-center">
            <span
              class="flex h-20 w-20 items-center justify-center rounded-full bg-surface-alt text-3xl text-accent"
            >
              <FontAwesomeIcon icon="palette" />
            </span>
            <p class="mt-5 font-display text-2xl font-medium text-foreground">
              Blonde Color Specialist
            </p>
            <p class="mt-2 text-sm text-muted">
              Biondi su misura, dal freddo tendente al grigio ai riflessi più caldi.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6 text-center">
            <div>
              <p class="font-display text-2xl font-semibold text-foreground">5.0</p>
              <p class="text-[0.65rem] uppercase tracking-wider text-muted">Rating</p>
            </div>
            <div>
              <p class="font-display text-2xl font-semibold text-foreground">22+</p>
              <p class="text-[0.65rem] uppercase tracking-wider text-muted">Recensioni</p>
            </div>
            <div>
              <p class="font-display text-2xl font-semibold text-foreground">100%</p>
              <p class="text-[0.65rem] uppercase tracking-wider text-muted">Passione</p>
            </div>
          </div>
        </div>

        <!-- badge fluttuante -->
        <div
          class="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)] sm:-left-6"
        >
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blush/20 text-blush">
            <FontAwesomeIcon icon="spa" />
          </span>
          <div class="text-left">
            <p class="text-sm font-medium text-foreground">Spa &amp; Wellness</p>
            <p class="text-xs text-muted">per i tuoi capelli</p>
          </div>
        </div>
      </div>
    </div>

    <!-- indicatore scroll -->
    <div class="absolute inset-x-0 bottom-6 hidden justify-center lg:flex">
      <span class="flex flex-col items-center gap-2 text-muted">
        <span class="text-[0.65rem] uppercase tracking-[0.3em]">Scorri</span>
        <span class="h-10 w-[1px] animate-pulse bg-border" />
      </span>
    </div>
  </section>
</template>

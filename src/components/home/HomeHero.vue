<script setup lang="ts">
import { salon } from '@/data/salon'
import BaseButton from '@/components/ui/BaseButton.vue'
import StarRating from '@/components/ui/StarRating.vue'
import HandUnderline from '@/components/ui/HandUnderline.vue'
</script>

<template>
  <section class="relative flex min-h-screen items-center overflow-hidden border-b border-border">
    <!-- sfondo: campiture piatte e linee, nessun alone sfocato -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div
        class="absolute inset-0 bg-[linear-gradient(115deg,var(--color-surface-alt)_0%,var(--color-surface-alt)_38%,var(--color-background)_38%,var(--color-background)_100%)]"
      />
      <div class="hatch-accent absolute top-0 right-0 h-72 w-72 opacity-40" />
      <div class="absolute bottom-16 left-8 hidden h-48 w-48 rotate-45 border border-primary/15 lg:block" />
      <div class="absolute inset-x-0 bottom-24 h-px bg-border" />
    </div>

    <div class="mx-auto grid w-full max-w-6xl gap-14 px-5 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
      <!-- Testo -->
      <div>
        <div
          v-reveal
          class="mb-7 inline-flex items-center gap-2.5 border border-primary/25 bg-surface/70 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted backdrop-blur"
        >
          <FontAwesomeIcon icon="location-dot" class="text-accent" />
          Pratola Peligna · Provincia dell'Aquila
        </div>

        <h1
          v-reveal="80"
          class="font-display text-5xl font-medium leading-[0.98] text-foreground sm:text-6xl md:text-7xl"
        >
          Il tuo biondo,<br />
          la nostra
          <span class="relative font-hand text-accent">
            firma
            <HandUnderline tone="accent" width="100%" class="absolute inset-x-0 -bottom-1" />
          </span>
        </h1>

        <p
          v-reveal="160"
          class="mt-8 max-w-xl border-l-2 border-primary pl-5 text-lg leading-relaxed text-muted"
        >
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
        <div v-reveal="320" class="mt-10 flex items-center gap-4 border-t border-border pt-6">
          <StarRating :rating="salon.rating" />
          <p class="text-sm text-muted">
            <span class="font-semibold text-foreground">{{ salon.rating.toFixed(1) }}</span>
            su Google · {{ salon.reviewsCount }} recensioni
          </p>
        </div>
      </div>

      <!-- Blocco decorativo: rettangolo netto con ombra piena e angolo tagliato.
           L'ombra è un secondo blocco sfalsato: il clip-path taglierebbe una
           box-shadow, quindi la disegniamo con la stessa sagoma. -->
      <div v-reveal="200" class="relative">
        <div
          class="cut-tr absolute inset-0 translate-x-2.5 translate-y-2.5 bg-primary"
          aria-hidden="true"
        />
        <div
          class="cut-tr relative bg-surface p-8 sm:p-10"
        >
          <div class="hatch absolute top-0 left-0 h-24 w-24 opacity-70" aria-hidden="true" />
          <div class="relative flex flex-col items-start text-left">
            <span
              class="flex h-16 w-16 items-center justify-center bg-primary text-2xl text-accent"
            >
              <FontAwesomeIcon icon="palette" />
            </span>
            <p class="mt-6 font-display text-3xl font-medium leading-tight text-foreground">
              Blonde Color Specialist
            </p>
            <p class="mt-3 text-sm leading-relaxed text-muted">
              Biondi su misura, dal freddo tendente al grigio ai riflessi più caldi.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-3 divide-x divide-border border-t border-border pt-6">
            <div class="pr-3">
              <p class="font-display text-3xl font-semibold text-foreground">5.0</p>
              <p class="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-muted">Rating</p>
            </div>
            <div class="px-3">
              <p class="font-display text-3xl font-semibold text-foreground">22+</p>
              <p class="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-muted">Recensioni</p>
            </div>
            <div class="pl-3">
              <p class="font-display text-3xl font-semibold text-foreground">100%</p>
              <p class="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-muted">Passione</p>
            </div>
          </div>
        </div>

        <!-- targhetta sporgente, agganciata allo spigolo -->
        <div
          class="absolute -bottom-6 -left-3 flex items-center gap-3 border border-primary/20 bg-background px-5 py-3.5 shadow-[var(--shadow-hard-sm)] sm:-left-6"
        >
          <span class="flex h-10 w-10 items-center justify-center bg-blush/15 text-blush">
            <FontAwesomeIcon icon="spa" />
          </span>
          <div class="text-left">
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-foreground">
              Spa &amp; Wellness
            </p>
            <p class="text-xs text-muted">per i tuoi capelli</p>
          </div>
        </div>
      </div>
    </div>

    <!-- indicatore scroll -->
    <div class="absolute inset-x-0 bottom-6 hidden justify-center lg:flex">
      <span class="flex flex-col items-center gap-2 text-muted">
        <span class="text-[0.6rem] uppercase tracking-[0.3em]">Scorri</span>
        <span class="h-10 w-[2px] animate-pulse bg-primary/40" />
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { salon } from '@/data/salon'
import PageHero from '@/components/layout/PageHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'

interface Highlight {
  icon: string
  title: string
  text: string
}

const highlights: Highlight[] = [
  { icon: 'palette', title: 'Blonde Specialist', text: 'Il biondo è la nostra specialità: freddo, caldo o naturale, sempre luminoso.' },
  { icon: 'droplet', title: 'Prodotti di qualità', text: 'Selezioniamo linee professionali che rispettano e nutrono il capello.' },
  { icon: 'heart', title: 'Rapporto di fiducia', text: 'Tante clienti si affidano a Pina da anni, con piena fiducia.' },
  { icon: 'spa', title: 'Benessere', text: 'Non solo capelli: un momento di relax e cura tutto per te.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Chi Siamo"
      title="In Testa: passione, colore e benessere"
      subtitle="Un salone nato dall’amore per il mestiere, dove ogni cliente è accolta come a casa."
    />

    <!-- STORIA -->
    <section class="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <div v-reveal class="order-2 lg:order-1">
          <p class="text-xs font-medium uppercase tracking-[0.3em] text-accent">La titolare</p>
          <h2 class="mt-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Pina e il suo team
          </h2>
          <p class="mt-5 leading-relaxed text-muted">
            Alla guida di In Testa c’è Pina, professionista solare e appassionata,
            insieme al suo team. Da anni accompagna le sue clienti nella cura del capello,
            distinguendosi per competenza tecnica, gentilezza e una simpatia contagiosa.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            La specializzazione è il colore, con una particolare dedizione al biondo in
            tutte le sue sfumature. Ma In Testa è anche taglio, piega, trattamenti di
            ricostruzione e momenti di benessere: una cura completa, dalla testa al cuore.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BaseButton to="/servizi" variant="primary" icon="arrow-right" icon-right>
              Scopri i servizi
            </BaseButton>
            <SocialLinks size="sm" />
          </div>
        </div>

        <div v-reveal="120" class="order-1 lg:order-2">
          <div
            class="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(120%_120%_at_80%_0%,var(--color-surface-alt)_0%,var(--color-primary)_150%)] p-10 shadow-[var(--shadow-soft)]"
          >
            <div class="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            <span
              class="flex h-20 w-20 items-center justify-center rounded-full bg-surface/15 text-3xl text-surface backdrop-blur"
            >
              <FontAwesomeIcon icon="scissors" />
            </span>
            <p class="mt-6 font-display text-3xl font-medium leading-tight text-surface">
              “Ti fa sentire a casa.”
            </p>
            <p class="mt-4 text-sm leading-relaxed text-surface/80">
              È così che le clienti descrivono l’esperienza da In Testa: un ambiente
              accogliente, un ottimo caffè e tanta cura in ogni dettaglio.
            </p>
            <div class="mt-8 flex items-center gap-3 border-t border-surface/20 pt-6">
              <FontAwesomeIcon icon="location-dot" class="text-accent" />
              <span class="text-sm text-surface/90">{{ salon.city }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SPAZI: SALONE & POSTAZIONI -->
    <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="I nostri spazi"
        title="Il Salone e le postazioni"
        subtitle="Un ambiente curato nei dettagli, pensato per farti sentire coccolata dal primo momento."
      />

      <div class="mt-14">
        <p v-reveal class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Il Salone
        </p>
        <div v-reveal="80" class="grid grid-cols-2 gap-4">
          <img
            src="/salone/IMG_5679.JPG.jpeg"
            alt="Interno del salone In Testa, postazioni con specchi e parete verde"
            class="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
          <img
            src="/salone/IMG_5702.JPG.jpeg"
            alt="Angolo coffee bar del salone In Testa"
            class="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
        </div>
      </div>

      <div class="mt-14">
        <p v-reveal class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Le postazioni
        </p>
        <div v-reveal="80" class="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <img
            src="/salone/postazione/IMG_5680.JPG.jpeg"
            alt="Postazione di lavoro con specchio e spazzola"
            class="aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
          <img
            src="/salone/postazione/IMG_5682.JPG.jpeg"
            alt="Comandi della poltrona massaggiante"
            class="aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
          <img
            src="/salone/postazione/IMG_5683.JPG.jpeg"
            alt="Prodotti professionali Framesi Morphosis sulla mensola"
            class="aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
          <img
            src="/salone/postazione/WhatsApp Image 2026-07-29 at 20.51.11.jpeg"
            alt="Postazione lavaggio con doccetta"
            class="aspect-[3/4] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <!-- HIGHLIGHTS -->
    <section class="mx-auto max-w-6xl px-5 pb-20 lg:px-8 lg:pb-28">
      <SectionHeading
        eyebrow="I nostri valori"
        title="Cosa ci rende In Testa"
      />
      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, i) in highlights"
          :key="item.title"
          v-reveal="i * 90"
          class="rounded-3xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
        >
          <span
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt text-lg text-accent"
          >
            <FontAwesomeIcon :icon="item.icon" />
          </span>
          <h3 class="font-display text-lg font-medium text-foreground">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
      <div
        v-reveal
        class="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center shadow-[var(--shadow-soft)] sm:px-16"
      >
        <div class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div class="relative">
          <h2 class="font-display text-3xl font-medium text-surface sm:text-4xl">
            Ti aspettiamo da In Testa
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-surface/80">
            Prenota il tuo momento di bellezza e benessere: saremo felici di accoglierti.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
              Prenota ora
            </BaseButton>
            <BaseButton to="/contatti" variant="outline" icon="location-dot">
              Come raggiungerci
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

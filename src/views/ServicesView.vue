<script setup lang="ts">
import { salon, services } from '@/data/salon'
import PageHero from '@/components/layout/PageHero.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

interface Step {
  icon: string
  title: string
  text: string
}

const steps: Step[] = [
  { icon: 'hand-sparkles', title: 'Ascolto', text: 'Parliamo dei tuoi desideri e analizziamo capello e colore di partenza.' },
  { icon: 'palette', title: 'Studio del look', text: 'Progettiamo insieme il colore e il taglio più adatti a te.' },
  { icon: 'wand-magic-sparkles', title: 'Realizzazione', text: 'Diamo vita al tuo nuovo look con tecnica e prodotti di qualità.' },
  { icon: 'leaf', title: 'Mantenimento', text: 'Ti diamo i consigli giusti per far durare il risultato nel tempo.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Servizi"
      title="Tutto ciò di cui i tuoi capelli hanno bisogno"
      subtitle="Dal colore firmato In Testa ai rituali di benessere: ogni servizio è pensato per valorizzarti."
    />

    <!-- GRID SERVIZI -->
    <section class="mx-auto max-w-6xl px-5 pt-16 pb-8 lg:px-8">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(service, i) in services" :key="service.title" v-reveal="i * 80">
          <ServiceCard :service="service" />
        </div>
      </div>
    </section>

    <!-- PROCESSO -->
    <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Come lavoriamo"
        title="Un percorso pensato per te"
        subtitle="Quattro passi semplici per arrivare al risultato che sogni."
      />
      <!-- percorso a step: filetto superiore marcato e numerazione fuori scala -->
      <div class="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          v-reveal="i * 90"
          class="group relative border-t-2 border-transparent bg-surface p-8 transition-colors duration-200 hover:border-accent hover:bg-surface-alt"
        >
          <span
            class="absolute top-5 right-6 font-display text-5xl font-semibold leading-none text-surface-alt transition-colors duration-200 group-hover:text-accent/30"
          >
            {{ i + 1 }}
          </span>
          <span
            class="mb-5 flex h-12 w-12 items-center justify-center border border-primary/20 text-lg text-accent"
          >
            <FontAwesomeIcon :icon="step.icon" />
          </span>
          <h3 class="font-display text-xl font-medium text-foreground">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ step.text }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
      <div
        v-reveal
        class="relative flex flex-col items-center justify-between gap-6 border-y-2 border-primary bg-surface-alt px-8 py-12 text-center sm:flex-row sm:text-left"
      >
        <div class="hatch absolute inset-y-0 right-0 w-24 opacity-60" aria-hidden="true" />
        <div class="relative">
          <h2 class="font-display text-2xl font-medium text-foreground sm:text-3xl">
            Non sai quale servizio scegliere?
          </h2>
          <p class="mt-2 text-muted">Scrivici: ti consigliamo il trattamento perfetto per te.</p>
        </div>
        <BaseButton
          :href="salon.whatsapp"
          variant="accent"
          :icon="['fab', 'whatsapp']"
          class="relative shrink-0"
        >
          Chiedi un consiglio
        </BaseButton>
      </div>
    </section>
  </div>
</template>

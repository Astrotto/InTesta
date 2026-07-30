<script setup lang="ts">
import { salon, services } from '@/data/salon'
import HomeHero from '@/components/home/HomeHero.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import WorkGallery from '@/components/WorkGallery.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

interface Value {
  icon: string
  title: string
  text: string
}

const values: Value[] = [
  { icon: 'heart', title: 'Passione', text: 'Ogni testa è un progetto curato con dedizione, dal primo consiglio all’ultimo dettaglio.' },
  { icon: 'gem', title: 'Garanzia', text: 'Professionalità e prodotti di qualità: “Intesta è una garanzia”, dicono le nostre clienti.' },
  { icon: 'hand-sparkles', title: 'Ascolto', text: 'I tuoi desideri vengono capiti al volo e realizzati esattamente come li immagini.' },
  { icon: 'spa', title: 'Ambiente', text: 'Un salone accogliente dove sentirti a casa, magari con un buon caffè.' },
]

const featuredServices = services.slice(0, 3)
</script>

<template>
  <div>
    <HomeHero />

    <!-- VALORI -->
    <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Perché In Testa"
        title="Un salone che mette te al centro"
        subtitle="Colore, taglio e benessere con la cura di chi ama davvero il proprio lavoro."
      />
      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(value, i) in values"
          :key="value.title"
          v-reveal="i * 90"
          class="rounded-3xl border border-border bg-surface p-7 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
        >
          <span
            class="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt text-xl text-accent"
          >
            <FontAwesomeIcon :icon="value.icon" />
          </span>
          <h3 class="font-display text-xl font-medium text-foreground">{{ value.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ value.text }}</p>
        </div>
      </div>
    </section>

    <!-- SERVIZI (teaser) -->
    <section class="bg-surface-alt/60 py-20 lg:py-28">
      <div class="mx-auto max-w-6xl px-5 lg:px-8">
        <div class="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="I nostri servizi"
            title="Cura completa, dal colore al benessere"
          />
          <BaseButton to="/servizi" variant="ghost" icon="arrow-right" icon-right class="shrink-0">
            Tutti i servizi
          </BaseButton>
        </div>
        <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(service, i) in featuredServices" :key="service.title" v-reveal="i * 100">
            <ServiceCard :service="service" />
          </div>
        </div>
      </div>
    </section>

    <!-- GALLERIA LAVORI (teaser) -->
    <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="I nostri lavori"
        title="Il risultato, in foto e video"
        subtitle="Biondi luminosi, tagli su misura e pieghe curate: guarda cosa esce dalle nostre mani."
      />
      <WorkGallery :limit="4" :show-filters="false" />
      <div class="mt-10 text-center">
        <BaseButton to="/servizi#lavori" variant="outline" icon="arrow-right" icon-right>
          Guarda tutti i lavori
        </BaseButton>
      </div>
    </section>

    <!-- STORY -->
    <section class="mx-auto max-w-6xl px-5 pb-20 lg:px-8 lg:pb-28">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <div v-reveal class="relative">
          <div
            class="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(120%_120%_at_20%_10%,var(--color-surface-alt)_0%,var(--color-primary)_140%)] p-10 shadow-[var(--shadow-soft)]"
          >
            <FontAwesomeIcon icon="quote-left" class="text-4xl text-accent" />
            <p class="mt-5 font-display text-2xl font-medium leading-snug text-surface">
              Da Pina esci sempre soddisfatta: solare, simpatica e sempre pronta a
              farti fare una risata.
            </p>
            <p class="mt-6 text-sm text-surface/80">— dalle recensioni delle nostre clienti</p>
          </div>
        </div>
        <div v-reveal="120">
          <p class="text-xs font-medium uppercase tracking-[0.3em] text-accent">La nostra storia</p>
          <h2 class="mt-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Passione per il colore, attenzione per le persone
          </h2>
          <p class="mt-5 leading-relaxed text-muted">
            In Testa nasce dalla passione di Pina e del suo team per il mondo del colore
            e del benessere. Specializzate nel biondo in tutte le sue sfumature, uniamo
            competenza tecnica e ascolto per creare look naturali e su misura.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            In un ambiente elegante e accogliente ti prendiamo per mano dal primo
            consiglio fino al risultato finale, perché tu possa sentirti a casa.
          </p>
          <div class="mt-8">
            <BaseButton to="/chi-siamo" variant="primary" icon="arrow-right" icon-right>
              Conosci il salone
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- RECENSIONI -->
    <section class="bg-surface-alt/60 py-20 lg:py-28">
      <div class="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Dicono di noi"
          :title="`5.0 su Google · ${salon.reviewsCount} recensioni`"
          subtitle="La soddisfazione delle nostre clienti è il nostro biglietto da visita."
        />

        <div class="mt-10 text-center">
          <BaseButton to="/recensioni" variant="outline" icon="star">
            Leggi tutte le recensioni
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- CTA FINALE -->
    <section class="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
      <div
        v-reveal
        class="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center shadow-[var(--shadow-soft)] sm:px-16"
      >
        <div class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div class="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blush/20 blur-3xl" />
        <div class="relative">
          <h2 class="font-display text-3xl font-medium text-surface sm:text-4xl md:text-5xl">
            Pronta per il tuo nuovo look?
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-surface/80">
            Scrivici su WhatsApp o chiamaci: prenotare da In Testa è semplice e veloce.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
              Prenota su WhatsApp
            </BaseButton>
            <BaseButton :href="`tel:${salon.phoneRaw}`" variant="surface" icon="phone">
              {{ salon.phoneDisplay }}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

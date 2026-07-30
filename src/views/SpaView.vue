<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { salon, services } from '@/data/salon'
import PageHero from '@/components/layout/PageHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const spaService = services.find((service) => service.title === 'Spa & Wellness')

const videoOne = ref<HTMLVideoElement | null>(null)
const videoTwo = ref<HTMLVideoElement | null>(null)

// Alcuni browser bloccano l'autoplay finché il muted non è impostato via JS
onMounted(() => {
  for (const el of [videoOne.value, videoTwo.value]) {
    if (!el) continue
    el.muted = true
    void el.play().catch(() => {})
  }
})

interface Ritual {
  icon: string
  title: string
  text: string
}

const rituals: Ritual[] = [
  {
    icon: 'hand-sparkles',
    title: 'Massaggio del cuoio capelluto',
    text: 'Un rituale rilassante che stimola la circolazione e scioglie le tensioni prima del trattamento.',
  },
  {
    icon: 'droplet',
    title: 'Trattamenti idratanti',
    text: 'Prodotti professionali selezionati per nutrire in profondità capello e cute.',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Spa & Wellness"
      title="Un momento di benessere, tutto per te"
      subtitle="Non solo capelli: da In Testa la cura si prende il suo tempo, tra rituali rilassanti e attenzione per il corpo e la mente."
    />

    <!-- VIDEO SHOWCASE -->
    <section class="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-2">
        <div
          v-reveal
          class="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] sm:aspect-video lg:aspect-[9/16]"
        >
          <video
            ref="videoOne"
            class="h-full w-full object-cover"
            src="/spa/IMG_5694.MP4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            aria-hidden="true"
            tabindex="-1"
          />
        </div>
        <div
          v-reveal="120"
          class="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)] sm:aspect-video lg:aspect-[9/16]"
        >
          <video
            ref="videoTwo"
            class="h-full w-full object-cover"
            src="/spa/IMG_5695.MP4"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            aria-hidden="true"
            tabindex="-1"
          />
        </div>
      </div>
    </section>

    <!-- RITUALI -->
    <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="I nostri rituali"
        title="Benessere dalla testa ai capelli"
        subtitle="Ogni trattamento diventa un'occasione per rilassarti, in un ambiente pensato per il tuo relax."
      />
      <div class="mt-14 grid gap-6 sm:grid-cols-2">
        <div
          v-for="(ritual, i) in rituals"
          :key="ritual.title"
          v-reveal="i * 90"
          class="rounded-3xl border border-border bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
        >
          <span
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt text-lg text-accent"
          >
            <FontAwesomeIcon :icon="ritual.icon" />
          </span>
          <h3 class="font-display text-lg font-medium text-foreground">{{ ritual.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ ritual.text }}</p>
        </div>
      </div>

      <div
        v-if="spaService"
        v-reveal="270"
        class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-3xl border border-border bg-surface-alt px-7 py-6"
      >
        <span
          v-for="feature in spaService.features"
          :key="feature"
          class="inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <FontAwesomeIcon icon="circle-check" class="text-accent" />
          {{ feature }}
        </span>
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
            Regalati un momento di relax
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-surface/80">
            Prenota il tuo trattamento Spa & Wellness: ti aspettiamo per prenderci cura di te.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
              Prenota ora
            </BaseButton>
            <BaseButton to="/servizi" variant="surface" icon="arrow-right" icon-right>
              Scopri tutti i servizi
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { salon } from '@/data/salon'
import BaseButton from '@/components/ui/BaseButton.vue'
import StarRating from '@/components/ui/StarRating.vue'

const videoEl = ref<HTMLVideoElement | null>(null)

// Alcuni browser bloccano l'autoplay finché il muted non è impostato via JS
onMounted(() => {
  const el = videoEl.value
  if (!el) return
  el.muted = true
  void el.play().catch(() => {})
})
</script>

<template>
  <section class="pt-20">
    <div
      class="relative flex w-full items-center overflow-hidden min-h-[30rem] sm:min-h-[32rem] lg:h-[70vh] lg:max-h-[40rem] lg:min-h-[34rem]"
    >
      <!-- Video di sfondo -->
      <video
        ref="videoEl"
        class="absolute inset-0 h-full w-full object-cover"
        src="/bannerHome.mp4"
        poster="/bannerHome-poster.jpg"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        aria-hidden="true"
        tabindex="-1"
      />

      <!-- Vignetta: scurisce i bordi e dà leggibilità al testo -->
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-[#150e07]/35" />
        <div
          class="absolute inset-0 bg-[radial-gradient(115%_100%_at_50%_40%,transparent_20%,rgba(21,14,7,0.5)_70%,rgba(21,14,7,0.9)_100%)]"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#150e07]/80 via-[#150e07]/35 to-transparent"
        />
      </div>

      <div
        class="relative z-10 grid w-full gap-12 px-7 py-12 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-14"
      >
        <!-- Testo -->
        <div>
          <div
            v-reveal
            class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur"
          >
            <FontAwesomeIcon icon="location-dot" class="text-accent-soft" />
            Pratola Peligna · Provincia dell'Aquila
          </div>

          <h1
            v-reveal="80"
            class="font-display text-4xl font-medium leading-[1.05] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl"
          >
            Il tuo biondo,<br />
            la nostra
            <span class="relative italic text-accent-soft">
              firma
              <span class="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-accent-soft/50" />
            </span>
          </h1>

          <p v-reveal="160" class="mt-6 max-w-lg leading-relaxed text-white/80 sm:text-lg">
            {{ salon.claim }}. Colore, cura e benessere per farti uscire
            luminosa e sicura di te.
          </p>

          <div v-reveal="240" class="mt-8 flex flex-wrap items-center gap-3">
            <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
              Prenota un appuntamento
            </BaseButton>
            <BaseButton to="/servizi" variant="surface" icon="arrow-right" icon-right>
              Scopri i servizi
            </BaseButton>
          </div>

          <!-- Rating -->
          <div v-reveal="320" class="mt-8 flex items-center gap-4">
            <StarRating :rating="salon.rating" />
            <p class="text-sm text-white/75">
              <span class="font-semibold text-white">{{ salon.rating.toFixed(1) }}</span>
              su Google · {{ salon.reviewsCount }} recensioni
            </p>
          </div>
        </div>

        <!-- Card decorativa (solo desktop, in vetro sul video) -->
        <div v-reveal="200" class="relative hidden lg:block">
          <div
            class="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur-md"
          >
            <div class="flex flex-col items-center text-center">
              <span
                class="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl text-accent-soft"
              >
                <FontAwesomeIcon icon="palette" />
              </span>
              <p class="mt-5 font-display text-2xl font-medium text-white">
                Blonde Color Specialist
              </p>
              <p class="mt-2 text-sm text-white/75">
                Biondi su misura, dal freddo tendente al grigio ai riflessi più caldi.
              </p>
            </div>

            <div class="mt-8 grid grid-cols-3 gap-3 border-t border-white/20 pt-6 text-center">
              <div>
                <p class="font-display text-2xl font-semibold text-white">5.0</p>
                <p class="text-[0.65rem] uppercase tracking-wider text-white/70">Rating</p>
              </div>
              <div>
                <p class="font-display text-2xl font-semibold text-white">22+</p>
                <p class="text-[0.65rem] uppercase tracking-wider text-white/70">Recensioni</p>
              </div>
              <div>
                <p class="font-display text-2xl font-semibold text-white">100%</p>
                <p class="text-[0.65rem] uppercase tracking-wider text-white/70">Passione</p>
              </div>
            </div>
          </div>

          <!-- badge fluttuante -->
          <div
            class="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md"
          >
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
              <FontAwesomeIcon icon="spa" />
            </span>
            <div class="text-left">
              <p class="text-sm font-medium text-white">Spa &amp; Wellness</p>
              <p class="text-xs text-white/70">per i tuoi capelli</p>
            </div>
          </div>
        </div>
      </div>

      <!-- indicatore scroll -->
      <div class="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center lg:flex">
        <span class="flex flex-col items-center gap-2 text-white/60">
          <span class="text-[0.65rem] uppercase tracking-[0.3em]">Scorri</span>
          <span class="h-8 w-[1px] animate-pulse bg-white/40" />
        </span>
      </div>
    </div>
  </section>
</template>

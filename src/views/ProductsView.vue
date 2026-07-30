<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { salon, productBrand, productLines, productMedia } from '@/data/salon'
import PageHero from '@/components/layout/PageHero.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

/** La prima foto apre la pagina, il resto dei media va nella galleria */
const cover = computed(() => productMedia[0] ?? null)
const gallery = computed(() => productMedia.slice(1))

const galleryVideos = ref<HTMLVideoElement[]>([])

// Alcuni browser bloccano l'autoplay finché il muted non è impostato via JS
onMounted(() => {
  for (const el of galleryVideos.value) {
    el.muted = true
    void el.play().catch(() => {})
  }
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Prodotti"
      title="I prodotti che usiamo su di te"
      :subtitle="productBrand.intro"
    />

    <!-- BRAND -->
    <section class="mx-auto max-w-6xl px-5 pb-8 lg:px-8">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <div v-if="cover" v-reveal class="relative">
          <div
            v-tilt="7"
            class="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-surface-alt shadow-[var(--shadow-soft)] sm:aspect-[4/3] lg:aspect-[3/4]"
          >
            <img
              :src="cover.src"
              :alt="cover.alt"
              class="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#150e07]/85 via-[#150e07]/10 to-transparent p-6 pt-16"
            >
              <p class="font-display text-lg font-medium text-white">{{ productBrand.name }}</p>
              <p class="mt-1 text-xs uppercase tracking-[0.25em] text-white/70">
                {{ productBrand.origin }}
              </p>
            </div>
          </div>
        </div>

        <div v-reveal="120">
          <p class="text-xs font-medium uppercase tracking-[0.3em] text-accent">Il nostro brand</p>
          <h2
            class="mt-4 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl"
          >
            {{ productBrand.name }}, in ogni gesto
          </h2>
          <p
            v-for="paragraph in productBrand.paragraphs"
            :key="paragraph"
            class="mt-5 leading-relaxed text-muted"
          >
            {{ paragraph }}
          </p>
          <ul class="mt-8 space-y-3">
            <li
              v-for="highlight in productBrand.highlights"
              :key="highlight"
              class="flex items-center gap-3 text-sm font-medium text-foreground"
            >
              <FontAwesomeIcon icon="circle-check" class="text-accent" />
              {{ highlight }}
            </li>
          </ul>
          <div class="mt-9">
            <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
              Chiedi quale fa per te
            </BaseButton>
          </div>
        </div>
      </div>
    </section>

    <!-- LINEE -->
    <section class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Cosa trovi in salone"
        title="Dalla cura quotidiana al profumo"
        subtitle="Ogni linea ha un compito preciso: ti consigliamo solo ciò che serve davvero ai tuoi capelli."
      />
      <div class="mt-14 grid gap-6 sm:grid-cols-2">
        <div v-for="(line, i) in productLines" :key="line.title" v-reveal="i * 90" class="h-full">
          <div
            v-tilt="6"
            class="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 hover:border-accent/40"
          >
            <span
              class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-alt text-lg text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-surface"
            >
              <FontAwesomeIcon :icon="line.icon" />
            </span>
            <h3 class="font-display text-xl font-medium text-foreground">{{ line.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ line.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- GALLERIA (foto e video aggiuntivi dalla cartella /prodotti) -->
    <section v-if="gallery.length" class="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="In salone"
        title="I prodotti da vicino"
        subtitle="Qualche scatto e qualche video del nostro angolo dedicato ai prodotti."
      />
      <div class="mt-14 grid gap-6" :class="gallery.length > 1 ? 'sm:grid-cols-2' : ''">
        <figure v-for="(item, i) in gallery" :key="item.src" v-reveal="i * 90">
          <div
            class="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-surface-alt shadow-[var(--shadow-soft)]"
          >
            <video
              v-if="item.type === 'video'"
              ref="galleryVideos"
              class="h-full w-full object-cover"
              :src="item.src"
              :poster="item.poster"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              :aria-label="item.alt"
            />
            <img
              v-else
              :src="item.src"
              :alt="item.alt"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption class="mt-3 text-sm leading-relaxed text-muted">
            {{ item.caption }}
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-6xl px-5 pb-24 lg:px-8" :class="gallery.length ? '' : 'pt-20 lg:pt-28'">
      <div
        v-reveal
        class="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center shadow-[var(--shadow-soft)] sm:px-16"
      >
        <div class="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div class="relative">
          <h2 class="font-display text-3xl font-medium text-surface sm:text-4xl">
            Portali a casa con te
          </h2>
          <p class="mx-auto mt-4 max-w-xl text-surface/80">
            I prodotti che usiamo durante il servizio sono disponibili in salone: scrivici e ti
            diciamo qual è quello giusto per i tuoi capelli.
          </p>
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
              Scrivici su WhatsApp
            </BaseButton>
            <BaseButton to="/servizi" variant="surface" icon="arrow-right" icon-right>
              Scopri i servizi
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

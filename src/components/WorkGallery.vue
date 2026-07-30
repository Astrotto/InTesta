<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { works, type WorkItem } from '@/data/salon'

const props = withDefaults(
  defineProps<{
    /** Mostra solo i primi N lavori (per il teaser in home) */
    limit?: number
    /** Filtri per categoria: disattivabili quando la galleria è ridotta */
    showFilters?: boolean
  }>(),
  {
    showFilters: true,
  },
)

interface Filter {
  id: string
  label: string
  match: (item: WorkItem) => boolean
}

const filters: Filter[] = [
  { id: 'tutti', label: 'Tutti', match: () => true },
  { id: 'colore', label: 'Colore & Biondi', match: (item) => item.category === 'colore' },
  { id: 'taglio', label: 'Taglio & Piega', match: (item) => item.category === 'taglio' },
  { id: 'video', label: 'Video', match: (item) => item.type === 'video' },
]

const activeFilter = ref<string>('tutti')

const items = computed<WorkItem[]>(() => {
  const match = filters.find((filter) => filter.id === activeFilter.value)?.match ?? (() => true)
  const filtered = props.showFilters ? works.filter(match) : works
  return props.limit ? filtered.slice(0, props.limit) : filtered
})

/* --------------------------------------------------------------------------
   Lightbox
   -------------------------------------------------------------------------- */
const openIndex = ref<number | null>(null)
const dialogEl = ref<HTMLElement | null>(null)

const activeItem = computed<WorkItem | null>(() =>
  openIndex.value === null ? null : (items.value[openIndex.value] ?? null),
)

function open(index: number): void {
  openIndex.value = index
}

function close(): void {
  openIndex.value = null
}

function step(delta: number): void {
  if (openIndex.value === null) return
  const total = items.value.length
  openIndex.value = (openIndex.value + delta + total) % total
}

// Cambiando filtro gli indici non sono più validi: chiudiamo la lightbox
watch(activeFilter, close)

// Blocca lo scroll del body e porta il focus nel dialog quando è aperto
watch(openIndex, async (value) => {
  document.body.style.overflow = value === null ? '' : 'hidden'
  if (value === null) return
  await Promise.resolve()
  dialogEl.value?.focus()
})

function onKeydown(event: KeyboardEvent): void {
  if (openIndex.value === null) return
  if (event.key === 'Escape') close()
  else if (event.key === 'ArrowRight') step(1)
  else if (event.key === 'ArrowLeft') step(-1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <!-- FILTRI -->
    <div v-if="showFilters" v-reveal class="mt-10 flex flex-wrap justify-center gap-2.5">
      <button
        v-for="filter in filters"
        :key="filter.id"
        type="button"
        class="rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        :class="
          activeFilter === filter.id
            ? 'border-primary bg-primary text-surface shadow-[var(--shadow-soft)]'
            : 'border-border bg-surface text-muted hover:border-primary/30 hover:text-foreground'
        "
        :aria-pressed="activeFilter === filter.id"
        @click="activeFilter = filter.id"
      >
        {{ filter.label }}
      </button>
    </div>

    <!-- GRIGLIA -->
    <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <button
        v-for="(item, i) in items"
        :key="item.src"
        v-reveal="(i % 4) * 90"
        type="button"
        class="group relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-surface-alt text-left shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        @click="open(i)"
      >
        <img
          :src="item.type === 'video' ? item.poster : item.src"
          :alt="item.alt"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
          decoding="async"
        />

        <!-- velo per la leggibilità della didascalia -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#150e07]/85 via-[#150e07]/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        />

        <!-- badge video -->
        <span
          v-if="item.type === 'video'"
          class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-xs text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110"
        >
          <FontAwesomeIcon icon="play" />
        </span>

        <div class="absolute inset-x-0 bottom-0 p-4">
          <p class="font-display text-base font-medium leading-snug text-white sm:text-lg">
            {{ item.title }}
          </p>
          <p class="mt-1 hidden text-xs leading-relaxed text-white/75 sm:block">
            {{ item.caption }}
          </p>
        </div>
      </button>
    </div>

    <!-- LIGHTBOX -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200"
        leave-to-class="opacity-0"
      >
        <div
          v-if="activeItem"
          ref="dialogEl"
          class="fixed inset-0 z-[60] flex items-center justify-center bg-[#150e07]/90 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          :aria-label="activeItem.title"
          tabindex="-1"
          @click.self="close"
        >
          <!-- chiudi -->
          <button
            type="button"
            class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-6 sm:top-6"
            aria-label="Chiudi"
            @click="close"
          >
            <FontAwesomeIcon icon="xmark" />
          </button>

          <!-- precedente / successivo -->
          <button
            v-if="items.length > 1"
            type="button"
            class="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:left-6"
            aria-label="Lavoro precedente"
            @click="step(-1)"
          >
            <FontAwesomeIcon icon="chevron-left" />
          </button>
          <button
            v-if="items.length > 1"
            type="button"
            class="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors duration-300 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-6"
            aria-label="Lavoro successivo"
            @click="step(1)"
          >
            <FontAwesomeIcon icon="chevron-right" />
          </button>

          <figure class="flex max-h-full w-full max-w-3xl flex-col items-center gap-4">
            <video
              v-if="activeItem.type === 'video'"
              :key="activeItem.src"
              :src="activeItem.src"
              :poster="activeItem.poster"
              class="max-h-[72vh] w-auto max-w-full rounded-[1.5rem] shadow-[var(--shadow-soft)]"
              controls
              autoplay
              muted
              loop
              playsinline
            />
            <img
              v-else
              :key="activeItem.src"
              :src="activeItem.src"
              :alt="activeItem.alt"
              class="max-h-[72vh] w-auto max-w-full rounded-[1.5rem] object-contain shadow-[var(--shadow-soft)]"
            />
            <figcaption class="max-w-xl text-center">
              <p class="font-display text-xl font-medium text-white">{{ activeItem.title }}</p>
              <p class="mt-1 text-sm leading-relaxed text-white/70">{{ activeItem.caption }}</p>
            </figcaption>
          </figure>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

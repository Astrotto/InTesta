<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useNavigation } from '@/composables/useNavigation'
import { salon } from '@/data/salon'
import BaseButton from '@/components/ui/BaseButton.vue'

const { links } = useNavigation()
const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll(): void {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// Chiudi il menu mobile ad ogni cambio pagina
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || menuOpen
        ? 'border-b border-border bg-background/90 backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
      <!-- Logo: blocco pieno + lettering, nessuna curva -->
      <RouterLink
        to="/"
        class="group flex items-center gap-3"
        aria-label="In Testa Hair Salon — Home"
      >
        <span
          class="flex h-10 w-10 items-center justify-center bg-primary font-display text-lg font-semibold text-background transition-colors duration-200 group-hover:bg-accent group-hover:text-primary"
        >
          iT
        </span>
        <span class="flex flex-col leading-none">
          <span class="font-display text-2xl font-semibold tracking-wide text-foreground">
            in Testa
          </span>
          <span class="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-accent">
            Hair Salon
          </span>
        </span>
      </RouterLink>

      <!-- Link desktop: filetto che si estende, niente pillole -->
      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="relative px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted transition-colors duration-200 hover:text-foreground after:absolute after:inset-x-4 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            active-class="!text-foreground after:scale-x-100"
            exact-active-class="!text-foreground after:scale-x-100"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- Azioni -->
      <div class="flex items-center gap-2">
        <BaseButton
          :href="salon.whatsapp"
          variant="accent"
          :icon="['fab', 'whatsapp']"
          class="hidden sm:inline-flex"
        >
          Prenota
        </BaseButton>
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center border border-primary/40 text-foreground transition-colors duration-200 hover:bg-primary hover:text-background lg:hidden"
          :aria-label="menuOpen ? 'Chiudi menu' : 'Apri menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <FontAwesomeIcon :icon="menuOpen ? 'xmark' : 'bars'" />
        </button>
      </div>
    </nav>

    <!-- Menu mobile: righe squadrate separate da filetti -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="overflow-hidden lg:hidden">
        <ul class="mx-auto max-w-6xl border-t border-border px-5 pb-6 lg:px-8">
          <li v-for="link in links" :key="link.to" class="border-b border-border">
            <RouterLink
              :to="link.to"
              class="flex items-center gap-4 border-l-2 border-transparent px-4 py-4 text-sm font-medium uppercase tracking-[0.12em] text-foreground transition-all duration-200 hover:border-accent hover:bg-surface-alt"
              active-class="!border-accent bg-surface-alt !text-accent"
              exact-active-class="!border-accent bg-surface-alt !text-accent"
            >
              <FontAwesomeIcon :icon="link.icon" class="w-5 text-accent" />
              {{ link.label }}
            </RouterLink>
          </li>
          <li class="pt-6">
            <BaseButton
              :href="salon.whatsapp"
              variant="accent"
              :icon="['fab', 'whatsapp']"
              block
            >
              Prenota su WhatsApp
            </BaseButton>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    max-height 0.35s ease,
    opacity 0.25s ease;
  max-height: 32rem;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

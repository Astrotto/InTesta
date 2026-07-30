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
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="
      scrolled || menuOpen
        ? 'border-b border-border bg-background/85 backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <nav class="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center" aria-label="In Testa Hair Salon — Home">
        <img src="/logo.webp" alt="In Testa Hair Salon" class="h-14 w-auto" />
      </RouterLink>

      <!-- Link desktop -->
      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
            active-class="!text-foreground"
            exact-active-class="!text-foreground"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- Azioni -->
      <div class="flex items-center gap-2">
        <span class="hidden sm:inline-flex">
          <BaseButton :href="salon.whatsapp" variant="accent" :icon="['fab', 'whatsapp']">
            Prenota
          </BaseButton>
        </span>
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-alt lg:hidden"
          :aria-label="menuOpen ? 'Chiudi menu' : 'Apri menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <FontAwesomeIcon :icon="menuOpen ? 'xmark' : 'bars'" />
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="overflow-hidden lg:hidden">
        <ul class="mx-auto max-w-6xl space-y-1 px-5 pb-6 pt-2">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="flex items-center gap-4 rounded-2xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-surface-alt"
              active-class="bg-surface-alt !text-accent"
              exact-active-class="bg-surface-alt !text-accent"
            >
              <FontAwesomeIcon :icon="link.icon" class="w-5 text-accent" />
              {{ link.label }}
            </RouterLink>
          </li>
          <li class="pt-3">
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
    max-height 0.4s ease,
    opacity 0.3s ease;
  max-height: 40rem;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

<script setup lang="ts">
import { useNavigation } from '@/composables/useNavigation'
import { salon, openingHours } from '@/data/salon'
import SocialLinks from '@/components/ui/SocialLinks.vue'

const { links } = useNavigation()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border bg-surface-alt">
    <div class="mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <img src="/logo.webp" alt="In Testa Hair Salon" class="h-24 w-auto" />
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {{ salon.tagline }} · Spa &amp; Wellness per capelli a Pratola Peligna.
          </p>
          <div class="mt-6">
            <SocialLinks size="sm" />
          </div>
        </div>

        <!-- Navigazione -->
        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Naviga
          </h3>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <FontAwesomeIcon icon="chevron-right" class="text-[0.6rem]" />
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contatti -->
        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Contatti
          </h3>
          <ul class="space-y-3 text-sm text-muted">
            <li class="flex items-start gap-3">
              <FontAwesomeIcon icon="location-dot" class="mt-1 text-accent" />
              <span>{{ salon.addressLine }}<br />{{ salon.city }}</span>
            </li>
            <li class="flex items-center gap-3">
              <FontAwesomeIcon icon="phone" class="text-accent" />
              <a :href="`tel:${salon.phoneRaw}`" class="transition-colors hover:text-accent">
                {{ salon.phoneDisplay }}
              </a>
            </li>
            <li class="flex items-center gap-3">
              <FontAwesomeIcon :icon="['fab', 'instagram']" class="text-accent" />
              <a
                :href="salon.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors hover:text-accent"
              >
                {{ salon.instagramHandle }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Orari -->
        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Orari
          </h3>
          <ul class="space-y-2 text-sm">
            <li
              v-for="entry in openingHours"
              :key="entry.day"
              class="flex items-center justify-between gap-4"
            >
              <span class="text-muted">{{ entry.day }}</span>
              <span :class="entry.closed ? 'text-muted/60' : 'font-medium text-foreground'">
                {{ entry.hours }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-xs text-muted sm:flex-row sm:text-left"
      >
        <p>© {{ currentYear }} {{ salon.name }}. Tutti i diritti riservati.</p>
        <p class="flex items-center gap-1.5">
          Fatto con <FontAwesomeIcon icon="heart" class="text-blush" /> a Pratola Peligna (AQ)
        </p>
      </div>
    </div>
  </footer>
</template>

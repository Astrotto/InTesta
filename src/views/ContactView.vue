<script setup lang="ts">
import { salon } from '@/data/salon'
import PageHero from '@/components/layout/PageHero.vue'
import OpeningHoursTable from '@/components/OpeningHoursTable.vue'
import MapEmbed from '@/components/MapEmbed.vue'
import SocialLinks from '@/components/ui/SocialLinks.vue'

interface ContactItem {
  icon: string | [string, string]
  label: string
  value: string
  href: string
  external?: boolean
}

const contacts: ContactItem[] = [
  {
    icon: ['fab', 'whatsapp'],
    label: 'WhatsApp',
    value: salon.phoneDisplay,
    href: salon.whatsapp,
    external: true,
  },
  {
    icon: 'phone',
    label: 'Telefono',
    value: salon.phoneDisplay,
    href: `tel:${salon.phoneRaw}`,
  },
  {
    icon: ['fab', 'instagram'],
    label: 'Instagram',
    value: salon.instagramHandle,
    href: salon.instagram,
    external: true,
  },
  {
    icon: 'location-dot',
    label: 'Indirizzo',
    value: `${salon.addressLine}, ${salon.city}`,
    href: salon.mapsUrl,
    external: true,
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contatti"
      title="Prenota o vieni a trovarci"
      subtitle="Siamo a Pratola Peligna, in zona Madonna della Neve. Scrivici su WhatsApp: ti rispondiamo al più presto."
    />

    <!-- CONTATTI + MAPPA -->
    <section class="mx-auto max-w-6xl px-5 pt-16 pb-16 lg:px-8">
      <div class="grid gap-6 lg:grid-cols-2">
        <!-- Colonna contatti: righe squadrate incolonnate -->
        <div v-reveal class="flex flex-col">
          <a
            v-for="contact in contacts"
            :key="contact.label"
            :href="contact.href"
            :target="contact.external ? '_blank' : undefined"
            :rel="contact.external ? 'noopener noreferrer' : undefined"
            class="group flex items-center gap-5 border border-border border-b-0 bg-surface p-6 transition-colors duration-200 last:border-b hover:bg-surface-alt"
          >
            <span
              class="flex h-14 w-14 shrink-0 items-center justify-center border border-primary/20 text-xl text-accent transition-colors duration-200 group-hover:border-primary group-hover:bg-primary"
            >
              <FontAwesomeIcon :icon="contact.icon" />
            </span>
            <div class="min-w-0">
              <p class="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {{ contact.label }}
              </p>
              <p class="mt-1 truncate font-medium text-foreground">{{ contact.value }}</p>
            </div>
            <FontAwesomeIcon
              icon="arrow-right"
              class="ml-auto text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
            />
          </a>

          <div
            class="mt-6 flex flex-wrap items-center justify-between gap-4 border-l-2 border-accent bg-surface-alt px-6 py-5"
          >
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Seguici e resta aggiornata
            </p>
            <SocialLinks size="sm" />
          </div>
        </div>

        <!-- Orari -->
        <div v-reveal="120">
          <OpeningHoursTable />
        </div>
      </div>
    </section>

    <!-- MAPPA FULL -->
    <section class="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
      <div v-reveal class="overflow-hidden">
        <MapEmbed class="min-h-[420px]" />
      </div>
    </section>
  </div>
</template>

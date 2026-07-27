<script setup lang="ts">
import { salon } from '@/data/salon'

withDefaults(
  defineProps<{
    size?: 'sm' | 'md'
  }>(),
  { size: 'md' },
)

interface Social {
  label: string
  href: string
  icon: string | [string, string]
}

const socials: Social[] = [
  { label: 'Instagram', href: salon.instagram, icon: ['fab', 'instagram'] },
  { label: 'WhatsApp', href: salon.whatsapp, icon: ['fab', 'whatsapp'] },
  { label: 'Chiama', href: `tel:${salon.phoneRaw}`, icon: 'phone' },
]
</script>

<template>
  <div class="flex items-center gap-3">
    <a
      v-for="social in socials"
      :key="social.label"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="social.label"
      class="inline-flex items-center justify-center border border-primary/30 text-foreground transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-background hover:shadow-[4px_4px_0_0_var(--color-accent)]"
      :class="size === 'sm' ? 'h-10 w-10 text-sm' : 'h-12 w-12'"
    >
      <FontAwesomeIcon :icon="social.icon" />
    </a>
  </div>
</template>

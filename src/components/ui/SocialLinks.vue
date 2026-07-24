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
      class="inline-flex items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 hover:border-accent hover:bg-accent hover:text-surface"
      :class="size === 'sm' ? 'h-9 w-9 text-sm' : 'h-11 w-11'"
    >
      <FontAwesomeIcon :icon="social.icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import HandUnderline from '@/components/ui/HandUnderline.vue'

defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}>()
</script>

<template>
  <div
    class="max-w-2xl"
    :class="align === 'left' ? 'text-left' : 'mx-auto text-center'"
  >
    <p
      v-if="eyebrow"
      class="eyebrow mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-accent"
    >
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl md:text-5xl">
      {{ title }}
    </h2>
    <!-- tratto a mano libera al posto del filetto squadrato -->
    <HandUnderline width="4rem" :class="align === 'left' ? '' : 'mx-auto'" />
    <p v-if="subtitle" class="mt-5 text-base leading-relaxed text-muted">
      {{ subtitle }}
    </p>
  </div>
</template>

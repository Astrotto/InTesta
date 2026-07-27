<script setup lang="ts">
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
      class="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent"
    >
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-base leading-relaxed text-muted">
      {{ subtitle }}
    </p>
  </div>
</template>

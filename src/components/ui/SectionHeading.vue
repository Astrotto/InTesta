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
      class="eyebrow mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-accent"
    >
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl font-medium leading-[1.05] text-foreground sm:text-4xl md:text-5xl">
      {{ title }}
    </h2>
    <!-- filetto squadrato al posto della sottolineatura morbida -->
    <span
      class="mt-5 block h-[2px] w-16 bg-primary"
      :class="align === 'left' ? '' : 'mx-auto'"
      aria-hidden="true"
    />
    <p v-if="subtitle" class="mt-5 text-base leading-relaxed text-muted">
      {{ subtitle }}
    </p>
  </div>
</template>

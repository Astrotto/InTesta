<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
    <!-- sfondo decorativo -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div class="absolute top-10 left-0 h-64 w-64 rounded-full bg-blush/10 blur-3xl" />
    </div>

    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <p
        v-reveal
        class="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent"
      >
        {{ eyebrow }}
      </p>
      <h1
        v-reveal="80"
        class="max-w-3xl font-display text-4xl font-medium leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        v-reveal="160"
        class="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

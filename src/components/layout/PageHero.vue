<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden border-b border-border pt-32 pb-14 sm:pt-40 sm:pb-20">
    <!-- decorazione geometrica: tratteggio + quadrato ruotato, zero aloni sfocati -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="hatch absolute -top-10 right-0 h-64 w-64 opacity-60" />
      <div class="absolute top-24 right-24 hidden h-40 w-40 rotate-45 border border-accent/30 sm:block" />
      <div class="absolute inset-y-0 left-1/2 hidden w-px bg-border lg:block" />
    </div>

    <div class="mx-auto max-w-6xl px-5 lg:px-8">
      <p
        v-reveal
        class="eyebrow mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-accent"
      >
        {{ eyebrow }}
      </p>
      <h1
        v-reveal="80"
        class="max-w-3xl font-display text-4xl font-medium leading-[1.02] text-foreground sm:text-5xl md:text-6xl"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        v-reveal="160"
        class="mt-7 max-w-2xl border-l-2 border-accent pl-5 text-lg leading-relaxed text-muted"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

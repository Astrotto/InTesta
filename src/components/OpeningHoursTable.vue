<script setup lang="ts">
import { openingHours } from '@/data/salon'
import { useOpeningStatus } from '@/composables/useOpeningStatus'

const { todayIndex, isOpenNow } = useOpeningStatus()
</script>

<template>
  <div class="h-full border border-border bg-surface p-7 sm:p-8">
    <div class="mb-6 flex items-center justify-between gap-3 border-b border-border pb-5">
      <h3 class="flex items-center gap-3 font-display text-xl font-medium text-foreground">
        <FontAwesomeIcon icon="clock" class="text-accent" />
        Orari di apertura
      </h3>
      <span
        class="inline-flex items-center gap-2 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em]"
        :class="isOpenNow ? 'bg-accent text-primary' : 'bg-surface-alt text-muted'"
      >
        <span class="h-1.5 w-1.5" :class="isOpenNow ? 'bg-primary' : 'bg-muted'" />
        {{ isOpenNow ? 'Aperto ora' : 'Chiuso ora' }}
      </span>
    </div>

    <ul class="divide-y divide-border">
      <li
        v-for="(entry, index) in openingHours"
        :key="entry.day"
        class="flex items-center justify-between border-l-2 py-3 pl-3 text-sm transition-colors"
        :class="
          index === todayIndex
            ? 'border-accent bg-surface-alt/50 font-medium text-foreground'
            : 'border-transparent text-muted'
        "
      >
        <span class="flex items-center gap-2 uppercase tracking-[0.08em]">
          {{ entry.day }}
          <span v-if="index === todayIndex" class="text-[0.65rem] tracking-[0.14em] text-accent">
            · oggi
          </span>
        </span>
        <span class="pr-3 tabular-nums" :class="entry.closed ? 'text-muted/70' : ''">
          {{ entry.hours }}
        </span>
      </li>
    </ul>
  </div>
</template>

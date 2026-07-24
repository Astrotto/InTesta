<script setup lang="ts">
import { openingHours } from '@/data/salon'
import { useOpeningStatus } from '@/composables/useOpeningStatus'

const { todayIndex, isOpenNow } = useOpeningStatus()
</script>

<template>
  <div class="rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-soft)]">
    <div class="mb-5 flex items-center justify-between gap-3">
      <h3 class="flex items-center gap-3 font-display text-xl font-medium text-foreground">
        <FontAwesomeIcon icon="clock" class="text-accent" />
        Orari di apertura
      </h3>
      <span
        class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
        :class="isOpenNow ? 'bg-accent/15 text-accent' : 'bg-surface-alt text-muted'"
      >
        <span
          class="h-2 w-2 rounded-full"
          :class="isOpenNow ? 'bg-accent' : 'bg-muted'"
        />
        {{ isOpenNow ? 'Aperto ora' : 'Chiuso ora' }}
      </span>
    </div>

    <ul class="divide-y divide-border">
      <li
        v-for="(entry, index) in openingHours"
        :key="entry.day"
        class="flex items-center justify-between py-2.5 text-sm"
        :class="index === todayIndex ? 'font-medium text-foreground' : 'text-muted'"
      >
        <span class="flex items-center gap-2">
          <span
            v-if="index === todayIndex"
            class="h-1.5 w-1.5 rounded-full bg-accent"
            aria-hidden="true"
          />
          {{ entry.day }}
          <span v-if="index === todayIndex" class="text-xs text-accent">· oggi</span>
        </span>
        <span :class="entry.closed ? 'text-muted/70' : ''">{{ entry.hours }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    rating: number
    max?: number
  }>(),
  { max: 5 },
)

const stars = computed<('full' | 'half' | 'empty')[]>(() => {
  const result: ('full' | 'half' | 'empty')[] = []
  for (let i = 1; i <= props.max; i++) {
    if (props.rating >= i) result.push('full')
    else if (props.rating >= i - 0.5) result.push('half')
    else result.push('empty')
  }
  return result
})
</script>

<template>
  <div class="inline-flex items-center gap-1" :aria-label="`Valutazione ${rating} su ${max}`">
    <FontAwesomeIcon
      v-for="(star, index) in stars"
      :key="index"
      :icon="star === 'half' ? 'star-half-stroke' : 'star'"
      class="text-sm"
      :class="star === 'empty' ? 'text-border' : 'text-accent'"
    />
  </div>
</template>

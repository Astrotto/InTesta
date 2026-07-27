<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string
    tone?: 'primary' | 'accent' | 'background'
  }>(),
  {
    width: '4rem',
    tone: 'primary',
  },
)
</script>

<template>
  <svg
    :style="{ width }"
    viewBox="0 0 120 14"
    preserveAspectRatio="none"
    class="block h-[10px]"
    :class="{
      'text-primary': tone === 'primary',
      'text-accent': tone === 'accent',
      'text-background': tone === 'background',
    }"
    aria-hidden="true"
  >
    <path
      d="M2 9.5C22 4 34 11.5 48 7C62 2.5 76 10.5 90 6C99 3 108 8 118 5"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
</template>

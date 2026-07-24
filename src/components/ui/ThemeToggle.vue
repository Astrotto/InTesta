<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 hover:bg-surface-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    :aria-label="theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro'"
    @click="toggleTheme"
  >
    <Transition name="theme-icon" mode="out-in">
      <FontAwesomeIcon
        v-if="theme === 'dark'"
        key="sun"
        icon="sun"
        class="text-accent"
      />
      <FontAwesomeIcon v-else key="moon" icon="moon" class="text-primary" />
    </Transition>
  </button>
</template>

<style scoped>
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}
.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}
</style>

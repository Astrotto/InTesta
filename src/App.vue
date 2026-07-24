<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background">
    <AppNavbar />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'surface'
type ElementTag = typeof RouterLink | 'a' | 'button'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    to?: string
    href?: string
    icon?: string | [string, string]
    iconRight?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    iconRight: false,
    block: false,
  },
)

const tag = computed<ElementTag>(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return {}
})

const variantClasses = computed<string>(() => {
  const map: Record<Variant, string> = {
    primary: 'bg-primary text-surface hover:bg-primary-soft shadow-[var(--shadow-soft)]',
    accent: 'bg-accent text-surface hover:brightness-105 shadow-[var(--shadow-soft)]',
    outline: 'border border-primary/40 text-foreground hover:bg-surface-alt',
    ghost: 'text-foreground hover:bg-surface-alt',
    surface: 'border border-surface/40 bg-surface/10 text-surface backdrop-blur-sm hover:bg-surface/20',
  }
  return map[props.variant]
})
</script>

<template>
  <component
    :is="tag"
    v-bind="linkProps"
    class="group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    :class="[variantClasses, block ? 'w-full' : '']"
  >
    <FontAwesomeIcon
      v-if="icon && !iconRight"
      :icon="icon"
      class="text-[0.9em] transition-transform duration-300 group-hover:-translate-y-0.5"
    />
    <span><slot /></span>
    <FontAwesomeIcon
      v-if="icon && iconRight"
      :icon="icon"
      class="text-[0.9em] transition-transform duration-300 group-hover:translate-x-1"
    />
  </component>
</template>

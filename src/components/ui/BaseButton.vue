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

// Ogni variante piena si stacca in hover con un'ombra piena e spostata:
// il pulsante sembra un blocco fisico, non una pillola.
const variantClasses = computed<string>(() => {
  const map: Record<Variant, string> = {
    primary:
      'px-7 py-3.5 bg-primary text-background hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hard-accent-sm)]',
    accent:
      'px-7 py-3.5 bg-accent text-primary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hard-sm)]',
    outline:
      'px-7 py-3.5 border border-primary/50 text-foreground hover:border-primary hover:bg-primary hover:text-background',
    ghost: 'py-3.5 text-foreground hover:text-accent',
    surface:
      'px-7 py-3.5 border border-surface/50 text-surface hover:bg-surface hover:text-primary',
  }
  return map[props.variant]
})
</script>

<template>
  <component
    :is="tag"
    v-bind="linkProps"
    class="group inline-flex items-center justify-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    :class="[variantClasses, block ? 'w-full' : '']"
  >
    <FontAwesomeIcon
      v-if="icon && !iconRight"
      :icon="icon"
      class="text-[1em] transition-transform duration-200 group-hover:-translate-y-0.5"
    />
    <span><slot /></span>
    <FontAwesomeIcon
      v-if="icon && iconRight"
      :icon="icon"
      class="text-[1em] transition-transform duration-200 group-hover:translate-x-1"
    />
  </component>
</template>

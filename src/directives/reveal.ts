import type { Directive } from 'vue'

/**
 * Direttiva v-reveal: aggiunge la classe `is-visible` quando l'elemento
 * entra nel viewport, attivando l'animazione di fade-up definita in CSS.
 * Rispetta prefers-reduced-motion mostrando subito il contenuto.
 */
const observers = new WeakMap<HTMLElement, IntersectionObserver>()

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.classList.add('reveal')

    const delay = binding.value ?? 0
    el.style.animationDelay = `${delay}ms`

    if (prefersReduced) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}

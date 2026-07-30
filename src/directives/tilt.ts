import type { Directive } from 'vue'

/**
 * Direttiva v-tilt: dà alle card un effetto 3D che segue il puntatore
 * (inclinazione, sollevamento, ombra profonda e riflesso morbido).
 * Le variabili CSS impostate qui sono consumate da `.tilt-card` in main.css.
 *
 * Il valore del binding è l'inclinazione massima in gradi (default 7).
 * Attiva solo su puntatori di precisione e mai con prefers-reduced-motion.
 */
const DEFAULT_TILT = 7

const cleanups = new WeakMap<HTMLElement, () => void>()

export const vTilt: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('tilt-card')

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || prefersReduced) return

    const maxTilt = binding.value ?? DEFAULT_TILT
    let frame = 0

    function track(event: PointerEvent): void {
      frame = 0
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height

      el.style.setProperty('--tilt-ry', `${(x - 0.5) * 2 * maxTilt}deg`)
      el.style.setProperty('--tilt-rx', `${(0.5 - y) * 2 * maxTilt}deg`)
      el.style.setProperty('--tilt-gx', `${x * 100}%`)
      el.style.setProperty('--tilt-gy', `${y * 100}%`)
    }

    function onEnter(event: PointerEvent): void {
      if (event.pointerType === 'touch') return
      el.classList.add('is-tilting')
      track(event)
    }

    function onMove(event: PointerEvent): void {
      if (event.pointerType === 'touch' || frame) return
      frame = requestAnimationFrame(() => track(event))
    }

    function onLeave(): void {
      if (frame) {
        cancelAnimationFrame(frame)
        frame = 0
      }
      el.classList.remove('is-tilting')
      for (const prop of ['--tilt-rx', '--tilt-ry', '--tilt-gx', '--tilt-gy']) {
        el.style.removeProperty(prop)
      }
    }

    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    cleanups.set(el, () => {
      if (frame) cancelAnimationFrame(frame)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    })
  },
  unmounted(el) {
    cleanups.get(el)?.()
    cleanups.delete(el)
  },
}

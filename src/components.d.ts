import type { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**
 * Dichiarazione dei componenti registrati globalmente,
 * così da renderli type-safe nei template (.vue) per vue-tsc.
 */
declare module 'vue' {
  export interface GlobalComponents {
    FontAwesomeIcon: typeof FontAwesomeIcon
  }
}

export {}

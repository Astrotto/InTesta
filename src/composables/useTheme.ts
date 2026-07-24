import { ref, readonly, type Ref, type DeepReadonly } from 'vue'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'intesta-theme'

/** Stato del tema condiviso a livello di modulo (singleton). */
const theme = ref<ThemeMode>('light')
let initialized = false

function applyToDocument(mode: ThemeMode): void {
  const root = document.documentElement
  root.classList.toggle('dark', mode === 'dark')
  root.style.colorScheme = mode
}

function resolveInitialTheme(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

interface UseThemeReturn {
  theme: DeepReadonly<Ref<ThemeMode>>
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

/**
 * Gestisce il tema chiaro/scuro con persistenza in localStorage.
 * L'inizializzazione dal valore salvato avviene una sola volta.
 */
export function useTheme(): UseThemeReturn {
  if (!initialized) {
    theme.value = resolveInitialTheme()
    applyToDocument(theme.value)
    initialized = true
  }

  function setTheme(mode: ThemeMode): void {
    theme.value = mode
    localStorage.setItem(STORAGE_KEY, mode)
    applyToDocument(mode)
  }

  function toggleTheme(): void {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme,
  }
}

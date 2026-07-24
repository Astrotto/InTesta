import { computed, type ComputedRef } from 'vue'
import { openingHours, type OpeningHour } from '@/data/salon'

/** Mappa l'indice dell'array orari (0 = Lunedì) al giorno JS (0 = Domenica). */
const JS_DAY_BY_INDEX = [1, 2, 3, 4, 5, 6, 0]

interface OpeningStatus {
  todayIndex: ComputedRef<number>
  today: ComputedRef<OpeningHour | undefined>
  isOpenNow: ComputedRef<boolean>
}

/**
 * Calcola quale riga degli orari corrisponde a oggi e se il salone
 * è aperto in questo momento, in base all'ora locale.
 */
export function useOpeningStatus(): OpeningStatus {
  const todayIndex = computed<number>(() => {
    const jsDay = new Date().getDay()
    return JS_DAY_BY_INDEX.indexOf(jsDay)
  })

  const today = computed<OpeningHour | undefined>(() => openingHours[todayIndex.value])

  const isOpenNow = computed<boolean>(() => {
    const entry = today.value
    if (!entry || entry.closed) return false

    const match = entry.hours.match(/(\d{2}):(\d{2})\s*[–-]\s*(\d{2}):(\d{2})/)
    if (!match) return false

    const now = new Date()
    const minutesNow = now.getHours() * 60 + now.getMinutes()
    const start = Number(match[1]) * 60 + Number(match[2])
    const end = Number(match[3]) * 60 + Number(match[4])
    return minutesNow >= start && minutesNow < end
  })

  return { todayIndex, today, isOpenNow }
}

export interface NavLink {
  label: string
  to: string
  icon: string
}

/**
 * Voci di navigazione condivise tra navbar e footer.
 * Unica fonte di verità per i link interni del sito.
 */
export function useNavigation(): { links: NavLink[] } {
  const links: NavLink[] = [
    { label: 'Home', to: '/', icon: 'heart' },
    { label: 'Servizi', to: '/servizi', icon: 'scissors' },
    { label: 'Chi Siamo', to: '/chi-siamo', icon: 'spa' },
    { label: 'Recensioni', to: '/recensioni', icon: 'star' },
    { label: 'Contatti', to: '/contatti', icon: 'location-dot' },
  ]

  return { links }
}

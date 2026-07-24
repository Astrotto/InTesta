import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faXmark,
  faSun,
  faMoon,
  faScissors,
  faPalette,
  faSpa,
  faPhone,
  faLocationDot,
  faClock,
  faStar,
  faStarHalfStroke,
  faQuoteLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faEnvelope,
  faWandMagicSparkles,
  faHeart,
  faGem,
  faLeaf,
  faChevronRight,
  faDroplet,
  faCircleCheck,
  faHandSparkles,
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/**
 * Registra tutte le icone usate nel sito nella library di Font Awesome,
 * così da poterle referenziare per nome nei template.
 */
export function registerIcons(): void {
  library.add(
    faBars,
    faXmark,
    faSun,
    faMoon,
    faScissors,
    faPalette,
    faSpa,
    faPhone,
    faLocationDot,
    faClock,
    faStar,
    faStarHalfStroke,
    faQuoteLeft,
    faArrowRight,
    faArrowUpRightFromSquare,
    faEnvelope,
    faWandMagicSparkles,
    faHeart,
    faGem,
    faLeaf,
    faChevronRight,
    faDroplet,
    faCircleCheck,
    faHandSparkles,
    faInstagram,
    faWhatsapp,
  )
}

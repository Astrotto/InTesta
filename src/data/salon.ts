/**
 * Dati anagrafici e contenuti del salone In Testa.
 * Unica fonte di verità per contatti, orari, servizi e recensioni.
 */

export interface OpeningHour {
  day: string
  hours: string
  closed: boolean
}

export interface Service {
  icon: string
  title: string
  description: string
  features: string[]
}

export interface Review {
  author: string
  meta: string
  when: string
  text: string
}

export interface SalonContact {
  name: string
  shortName: string
  tagline: string
  claim: string
  phoneDisplay: string
  phoneRaw: string
  whatsapp: string
  instagram: string
  instagramHandle: string
  addressLine: string
  city: string
  plusCode: string
  mapsUrl: string
  mapsEmbedUrl: string
  reviewUrl: string
  rating: number
  reviewsCount: number
}

export const salon: SalonContact = {
  name: 'In Testa Hair Salon',
  shortName: 'in Testa',
  tagline: 'Blonde Color Specialist',
  claim: 'Color Specialist · Blonde Expert · Spa & Wellness per capelli',
  phoneDisplay: '345 875 8932',
  phoneRaw: '+393458758932',
  whatsapp: 'https://wa.me/393458758932',
  instagram: 'https://www.instagram.com/intesta_creator_blond/',
  instagramHandle: '@intesta_creator_blond',
  addressLine: 'Via Madonna della Neve, zona Madonna della Neve',
  city: '67035 Pratola Peligna (AQ)',
  plusCode: '3VRG+V5 Pratola Peligna',
  mapsUrl: 'https://maps.app.goo.gl/wkabGTznBWz85pFj8',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Via+Madonna+della+Neve,+67035+Pratola+Peligna+AQ&output=embed',
  reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJGQzGdog_MBMR5emBuhWrR3A',
  rating: 5.0,
  reviewsCount: 22,
}

export const openingHours: OpeningHour[] = [
  { day: 'Lunedì', hours: 'Chiuso', closed: true },
  { day: 'Martedì', hours: '09:00 – 18:00', closed: false },
  { day: 'Mercoledì', hours: '09:00 – 18:00', closed: false },
  { day: 'Giovedì', hours: '09:00 – 18:00', closed: false },
  { day: 'Venerdì', hours: '09:00 – 18:00', closed: false },
  { day: 'Sabato', hours: '09:00 – 14:00', closed: false },
  { day: 'Domenica', hours: 'Chiuso', closed: true },
]

export const services: Service[] = [
  {
    icon: 'palette',
    title: 'Colore & Blonde',
    description:
      'La nostra firma. Biondi luminosi e naturali studiati sulla tua pelle: dal freddo tendente al grigio ai riflessi caldi.',
    features: ['Balayage & Degradé', 'Shatush & Méches', 'Ritorno al naturale'],
  },
  {
    icon: 'scissors',
    title: 'Taglio & Piega',
    description:
      'Tagli su misura che valorizzano il tuo viso e la tua personalità, finiti con una piega curata in ogni dettaglio.',
    features: ['Taglio personalizzato', 'Piega & Styling', 'Consulenza look'],
  },
  {
    icon: 'spa',
    title: 'Spa & Wellness',
    description:
      'Un momento di benessere dedicato al capello e a te: rituali rilassanti in un ambiente accogliente.',
    features: ['Rituali benessere', 'Massaggio del cuoio capelluto', 'Relax dedicato'],
  },
  {
    icon: 'hand-sparkles',
    title: 'Cura & Ricostruzione',
    description:
      'Trattamenti ristrutturanti professionali per riportare forza, elasticità e lucentezza ai capelli sfibrati.',
    features: ['Ricostruzione fibra', 'Idratazione profonda', 'Trattamenti anti-crespo'],
  },
  {
    icon: 'wand-magic-sparkles',
    title: 'Acconciature & Eventi',
    description:
      'Raccolti e styling per le occasioni speciali: matrimoni, cerimonie e serate in cui vuoi sentirti al meglio.',
    features: ['Acconciature sposa', 'Raccolti eleganti', 'Prova look su richiesta'],
  },
  {
    icon: 'gem',
    title: 'Consulenza d’immagine',
    description:
      'Ti guidiamo nella scelta di colore e taglio più adatti, con un ascolto attento dei tuoi desideri.',
    features: ['Analisi del colore', 'Ascolto personalizzato', 'Consigli di mantenimento'],
  },
]

export const reviews: Review[] = [
  {
    author: 'Melania P.',
    meta: '2 recensioni · 4 foto',
    when: '2 anni fa',
    text: 'Ambiente accogliente, professionalità e tanta passione contraddistinguono la titolare e il suo team. Pina Parrucchiera “Intesta” è una garanzia.',
  },
  {
    author: 'Marialaura I.',
    meta: '3 recensioni · 4 foto',
    when: '2 anni fa',
    text: 'Poche parole ed i miei desideri sono stati subito esauditi… e sono tornata al mio colore naturale. Il tutto accompagnato da un ottimo caffè offerto da In Testa!',
  },
  {
    author: 'Roberta A.',
    meta: '3 recensioni',
    when: '2 anni fa',
    text: 'Ho sempre desiderato un biondo tendente al grigio, ed ogni volta che vado da Pina esco soddisfatta e contenta. Solare, simpatica e sempre pronta a farti fare una risata. Servizio ottimo e arredamento fantastico.',
  },
]

export const shortQuotes: string[] = [
  'Oltre ai capelli super top, simpatia e gentilezza assicurate!',
  'Da anni conosco Pina, ho sempre avuto piena fiducia in lei!',
  'Bellissima esperienza: colore e piega esattamente come richiesti.',
]

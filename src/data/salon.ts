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

export type WorkCategory = 'colore' | 'taglio'

export interface WorkItem {
  /** Immagine statica o video verticale girato in salone */
  type: 'image' | 'video'
  src: string
  /** Fotogramma di anteprima: obbligatorio per i video, mostrato nella griglia */
  poster?: string
  title: string
  caption: string
  category: WorkCategory
  alt: string
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

/**
 * Galleria "I nostri lavori": foto e video realizzati in salone.
 * L'ordine alterna immagini e video per dare ritmo alla griglia.
 */
export const works: WorkItem[] = [
  {
    type: 'image',
    src: '/capelli/IMG_5684.JPG.jpeg',
    title: 'Balayage biondo luminoso',
    caption: 'Schiariture su misura e onde morbide su capelli lunghi.',
    category: 'colore',
    alt: 'Capelli lunghi biondi con balayage e onde morbide sulle lunghezze',
  },
  {
    type: 'video',
    src: '/capelli/IMG_5688.MP4',
    poster: '/capelli/IMG_5688-poster.jpg',
    title: 'Biondo cenere su long bob',
    caption: 'Un biondo freddo, compatto e luminoso su un taglio lineare.',
    category: 'colore',
    alt: 'Video di un long bob biondo cenere liscio realizzato in salone',
  },
  {
    type: 'image',
    src: '/capelli/IMG_5686.JPG.jpeg',
    title: 'Biondo caldo, effetto liscio',
    caption: 'Radici morbide e lunghezze dorate, finite con una piega lucida.',
    category: 'colore',
    alt: 'Capelli lunghi biondi lisci con radici scure sfumate',
  },
  {
    type: 'image',
    src: '/capelli/IMG_5699.JPG.jpeg',
    title: 'Long bob mosso',
    caption: 'Taglio medio con onde definite e riflessi ramati.',
    category: 'taglio',
    alt: 'Long bob castano mosso con riflessi ramati',
  },
  {
    type: 'video',
    src: '/capelli/IMG_5696.MP4',
    poster: '/capelli/IMG_5696-poster.jpg',
    title: 'Taglio uomo sfumato',
    caption: 'Sfumatura precisa a macchinetta con disegno sul lato.',
    category: 'taglio',
    alt: 'Video di un taglio uomo con sfumatura laterale e disegno',
  },
  {
    type: 'image',
    src: '/capelli/IMG_5700.JPG.jpeg',
    title: 'Bob biondo miele',
    caption: 'Colpi di sole caldi e onde morbide su taglio medio.',
    category: 'taglio',
    alt: 'Taglio medio mosso con colpi di sole biondo miele',
  },
  {
    type: 'video',
    src: '/capelli/videoCapelli.MP4',
    poster: '/capelli/videoCapelli-poster.jpg',
    title: 'Schiariture su base castana',
    caption: 'Luce sui volumi e movimento naturale, senza stacchi.',
    category: 'colore',
    alt: 'Video di capelli castani con schiariture dorate e onde',
  },
  {
    type: 'image',
    src: '/capelli/IMG_5698.JPG.jpeg',
    title: 'Castano con riflessi dorati',
    caption: 'Méches sottili che accendono la base senza scurirla.',
    category: 'colore',
    alt: 'Capelli castani mossi con méches dorate',
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

# In Testa Hair Salon

Sito web vetrina per **In Testa Hair Salon** — Blonde Color Specialist · Spa & Wellness a Pratola Peligna (AQ).

Stack: **Bun + Vue 3 + TypeScript + Vue Router + Tailwind CSS v4 + Font Awesome**.
Mobile-first, responsive, con tema chiaro/scuro persistente.

## Comandi

```bash
bun install        # installa le dipendenze
bun dev            # avvia il server di sviluppo (http://localhost:5173)
bun run build      # type-check + build di produzione in dist/
bun run preview    # anteprima della build di produzione
bun run type-check # solo controllo dei tipi con vue-tsc
```

## Struttura

- `src/views/` — pagine collegate al router: Home, Servizi, Chi Siamo, Recensioni, Contatti
- `src/components/` — componenti (layout, UI riutilizzabile, card servizi/recensioni, mappa, orari)
- `src/composables/` — logica riutilizzabile (tema, navigazione, stato apertura)
- `src/data/salon.ts` — unica fonte dati: contatti, orari, servizi, recensioni
- `src/assets/main.css` — palette in `@theme` (tema chiaro/scuro), mood "urban jungle atelier": legno noce quasi nero, terracotta bruciata, verde palma

## Personalizzazione

- **Colori**: modifica le variabili in `@theme` e in `.dark` dentro `src/assets/main.css`.
- **Contenuti** (telefono, WhatsApp, Instagram, orari, servizi, recensioni): `src/data/salon.ts`.
- **Voci di menu**: `src/composables/useNavigation.ts`.

## Contatti configurati

- Telefono / WhatsApp: 345 875 8932
- Instagram: [@intesta_creator_blond](https://www.instagram.com/intesta_creator_blond/)
- Mappa: [Google Maps](https://maps.app.goo.gl/wkabGTznBWz85pFj8) — Via Madonna della Neve, 67035 Pratola Peligna (AQ)

## Nota sul toolchain

Il tema chiaro/scuro usa la classe `.dark` sul root (persistita in `localStorage`).
Il file `src/shims-vue.d.ts` è necessario per l'import dei `.vue` dai file `.ts`
(router e `main.ts`) con questa combinazione di versioni di `vue-tsc`.

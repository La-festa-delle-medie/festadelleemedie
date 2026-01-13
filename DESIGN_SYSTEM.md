# LA FESTA DELLE MEDIE - Design System & Organizzazione Progetto

## Obiettivo
Creare un tema Astro in stile **Brutalist Minimal** compatibile con Decap CMS per la gestione di pagine e contenuti.

## Riferimenti
- Sito di riferimento: [Santarcangelo Festival](https://www.santarcangelofestival.com)
- Screen di riferimento: `/reference/` (3 immagini)
- Materiali: logo, immagini, font personalizzato

---

## 1. PALETTE COLORI

### Colori Principali
- **Bianco**: `#FFFFFF` - Background principale
- **Nero**: `#000000` - Testo e bordi

### Colori Secondari (se necessari)
- **Grigio Chiaro**: `#F5F5F5` - Background alternativo
- **Grigio Scuro**: `#1A1A1A` - Testo secondario

---

## 2. TIPOGRAFIA

### ✓ Sistema Multi-Font Artistico (IMPLEMENTATO)

Ispirato da P22 Studio e Namespace Studio, il sistema combina tre font ricercati da Google Fonts per creare una gerarchia visiva forte e memorabile.

#### Font Families
1. **Syne** (Display/Titoli)
   - Geometrico, neo-grotesque, forte personalità
   - Pesi: 400-800 (uso primario: 600-800)
   - Uso: H1-H4, numeri display, CTA

2. **Inter** (Body/Testo)
   - Leggibilità estrema, design neutro ma raffinato
   - Pesi: 100-900 (uso primario: 400-600)
   - Uso: Paragrafi, descrizioni, testo lungo

3. **JetBrains Mono** (Technical/Data)
   - Monospace contemporaneo, alta leggibilità
   - Pesi: 100-800 (uso primario: 500-600)
   - Uso: Date, orari, numeri, `<time>` tags

### Gerarchia Tipografica Implementata
```
H1 (Hero Display):     160px / Syne 800 / -0.03em / line 0.85
H2 (Section Headers):  80px  / Syne 700 / -0.015em / line 0.95
H3 (Sub Headers):      48px  / Syne 600 / -0.015em / line 1.1
H4 (Card Titles):      32px  / Syne 600 / 0em / line 1.1
Body Large:            20px  / Inter 500 / -0.005em / line 1.5
Body Regular:          18px  / Inter 400 / -0.005em / line 1.7
Body Small:            16px  / Inter 400 / 0em / line 1.7
Meta/Date:             14px  / JetBrains Mono 500 / 0.02em / uppercase
```

### Responsive Scale
- **Desktop (>1024px)**: Scale completa
- **Tablet (768-1024px)**: Riduzione 20-30%
- **Mobile (<768px)**: Riduzione 40-50%
  - H1: 160px → 96px → 48px
  - H2: 80px → 64px → 40px
  - Body: 18px → 16px

### Documentazione Completa
Vedi **`TYPOGRAPHY.md`** per:
- Design tokens completi
- Utility classes
- Esempi d'uso
- Best practices
- Performance notes

---

## 3. LAYOUT & SPACING

### Container
- **Max Width**: 1400px
- **Padding Laterale**: 40px desktop, 20px mobile

### Sistema di Spaziatura
```
xs:  8px
sm:  16px
md:  32px
lg:  64px
xl:  96px
2xl: 128px
3xl: 192px
```

### Grid System
- **Card Grid**: 2 colonne su desktop, 1 su mobile
- **Gap**: 32-40px tra card
- **Aspect Ratio Immagini**: 16:9 o 4:3

---

## 4. COMPONENTI DA CREARE

### 4.1 Layout
- [ ] Header con logo e navigazione
- [ ] Footer minimal con contatti
- [ ] Container principale responsive

### 4.2 Sezioni Homepage
- [ ] Hero Section (immagine grande + titolo)
- [ ] Event Cards Grid
- [ ] Newsletter Subscription
- [ ] Info Section

### 4.3 Pagine Interne
- [ ] Pagina Singola Evento
- [ ] Pagina Chi Siamo / Associazione
- [ ] Pagina Contatti
- [ ] Pagina Network/Partner

### 4.4 Elementi UI
- [ ] Card Evento (immagine + titolo + data + descrizione)
- [ ] Button/CTA minimal
- [ ] Form Newsletter
- [ ] Navigation Menu

---

## 5. STRUTTURA FILE ASTRO

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── BaseLayout.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── EventGrid.astro
│   │   └── Newsletter.astro
│   └── ui/
│       ├── EventCard.astro
│       ├── Button.astro
│       └── Container.astro
├── pages/
│   ├── index.astro
│   ├── eventi/
│   │   └── [slug].astro
│   ├── chi-siamo.astro
│   └── contatti.astro
├── styles/
│   ├── global.css
│   └── fonts.css
└── content/
    └── config.ts
```

---

## 6. DECAP CMS CONFIGURATION

### Collections da Configurare
1. **Eventi**: titolo, data, immagine, descrizione, slug
2. **Pagine**: titolo, contenuto rich text, immagini
3. **Impostazioni**: logo, info contatto, social

### File Config
- `/public/admin/config.yml`
- `/public/admin/index.html`

---

## 7. ASSET DISPONIBILI

### Logo
- File: `/materiali/logo.png`
- Stile: Disegno brutalist bianco/nero (dispenser + fazzoletti)

### Immagini (12 totali)
```
/materiali/img/img.jpg
/materiali/img/img 2.jpg
/materiali/img/img 3.jpg
/materiali/img/img 4.jpg
/materiali/img/img 5.jpg
/materiali/img/img 6.jpg
/materiali/img/img 7.jpg
/materiali/img/img 8.jpg
/materiali/img/img 9.jpg
/materiali/img/img2.jpg
/materiali/img/img2 2.jpg
/materiali/img/img2 3.jpg
```

---

## 8. PRINCIPI DESIGN BRUTALIST

### Da Seguire
✓ Massimo contrasto bianco/nero
✓ Tipografia grande e bold
✓ Ampi spazi bianchi
✓ Bordi netti e definiti
✓ Layout minimal senza decorazioni
✓ Funzionalità sopra estetica
✓ Immagini grandi e d'impatto
✓ Navigazione semplice e diretta

### Da Evitare
✗ Colori vivaci o gradienti
✗ Ombre e blur
✗ Animazioni complesse
✗ Elementi decorativi superflui
✗ Bordi arrotondati
✗ Font script o decorativi

---

## 9. ROADMAP IMPLEMENTAZIONE

### Fase 1: Setup Base
1. Configurare font personalizzato
2. Creare file CSS globale con design tokens
3. Configurare Tailwind con palette custom

### Fase 2: Layout Principale
4. Creare BaseLayout, Header, Footer
5. Implementare sistema di container e spacing

### Fase 3: Componenti UI
6. Card Eventi
7. Hero Section
8. Newsletter Form
9. Navigation

### Fase 4: Pagine
10. Homepage con grid eventi
11. Pagina singolo evento
12. Pagine statiche (chi siamo, contatti)

### Fase 5: CMS
13. Configurare Decap CMS
14. Creare collections per eventi e pagine
15. Testare editing e preview

### Fase 6: Content & Polish
16. Popolare con immagini dai materiali
17. Ottimizzare responsive
18. Testing finale

---

## 10. NOTE TECNICHE

### Stack
- **Framework**: Astro 5.16.9
- **Styling**: Tailwind CSS 4.1.18
- **CMS**: Decap CMS 3.10.0

### Performance
- Ottimizzare immagini (WebP)
- Lazy loading per immagini
- CSS minimal

### Accessibilità
- Contrasto sufficiente (già garantito con bianco/nero)
- Alt text per tutte le immagini
- Navigazione da tastiera
- Semantic HTML

---

## PROSSIMI STEP IMMEDIATI
1. ✓ Creare questo documento
2. → Copiare font in `/public/fonts/`
3. → Creare `/src/styles/fonts.css`
4. → Creare `/src/styles/global.css` con design tokens
5. → Configurare Tailwind con colori e font custom

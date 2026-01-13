# Sistema Tipografico Artistico
## La Festa delle Medie

---

## Filosofia

Il sistema tipografico è progettato come **opera d'arte funzionale**, ispirato dai migliori design system contemporanei (P22 Studio, Namespace Studio). Combina tre font ricercati per creare una gerarchia visiva forte e memorabile.

### Principi Guida
- **Contrasto Massimo**: Display ultra-bold vs. Body leggero e leggibile
- **Precisione Tecnica**: Letterspacing e line-height ottimizzati al pixel
- **Scala Ampia**: Da 12px a 160px per massima espressività
- **Leggibilità Assoluta**: Inter per body text garantisce UX ottimale

---

## Font Family

### 1. **Syne** - Display/Titoli
**Google Fonts Variable Font**

- **Uso**: H1, H2, H3, H4, numeri display, CTA
- **Caratteristiche**: Geometrico, neo-grotesque, forte personalità
- **Pesi**: 400-800 (uso primario: 600-800)
- **Perché**: Impatto visivo brutalist, perfetto per titoli uppercase

```css
font-family: 'Syne', system-ui, sans-serif;
font-variation-settings: 'wght' 800;
```

### 2. **Inter** - Body/Testo
**Google Fonts Variable Font**

- **Uso**: Paragrafi, descrizioni, testo lungo
- **Caratteristiche**: Leggibilità estrema, design neutro ma raffinato
- **Pesi**: 100-900 (uso primario: 400-600)
- **Perché**: Considerato uno dei font più leggibili per il web

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
font-optical-sizing: auto;
```

### 3. **JetBrains Mono** - Technical/Data
**Google Fonts Variable Font**

- **Uso**: Date, orari, numeri, codici, elementi `<time>`
- **Caratteristiche**: Monospace contemporaneo, alta leggibilità
- **Pesi**: 100-800 (uso primario: 500-600)
- **Perché**: Contrasto strutturale, ideale per informazioni tecniche

```css
font-family: 'JetBrains Mono', 'Courier New', monospace;
letter-spacing: 0.02em;
```

---

## Gerarchia Tipografica

### Display/Titoli (Syne)

#### H1 - Hero Ultra-Display
```css
font-family: var(--font-display);
font-size: 160px;           /* 10rem */
font-weight: 800;
line-height: 0.85;
letter-spacing: -0.03em;
text-transform: uppercase;
```
**Uso**: Hero sections, landing page titles
**Desktop**: 160px → **Tablet**: 96px → **Mobile**: 48px

#### H2 - Section Headers
```css
font-family: var(--font-display);
font-size: 80px;            /* 5rem */
font-weight: 700;
line-height: 0.95;
letter-spacing: -0.015em;
text-transform: uppercase;
```
**Uso**: Titoli di sezione principali
**Desktop**: 80px → **Tablet**: 64px → **Mobile**: 40px

#### H3 - Sub Headers
```css
font-family: var(--font-display);
font-size: 48px;            /* 3rem */
font-weight: 600;
line-height: 1.1;
letter-spacing: -0.015em;
text-transform: uppercase;
```
**Uso**: Sottotitoli, card headers
**Desktop**: 48px → **Tablet**: 40px → **Mobile**: 32px

#### H4 - Card Titles
```css
font-family: var(--font-display);
font-size: 32px;            /* 2rem */
font-weight: 600;
line-height: 1.1;
letter-spacing: 0;
text-transform: uppercase;
```
**Uso**: Titoli di card, elementi UI
**Desktop**: 32px → **Tablet**: 24px → **Mobile**: 20px

---

### Body Text (Inter)

#### Body Large / Lead
```css
font-family: var(--font-body);
font-size: 20px;            /* 1.25rem */
font-weight: 500;
line-height: 1.5;
letter-spacing: -0.005em;
```
**Uso**: Paragrafi introduttivi, testo enfatizzato

#### Body Regular
```css
font-family: var(--font-body);
font-size: 18px;            /* 1.125rem */
font-weight: 400;
line-height: 1.7;
letter-spacing: -0.005em;
```
**Uso**: Testo standard, descrizioni, articoli
**Desktop**: 18px → **Mobile**: 16px

#### Body Small
```css
font-family: var(--font-body);
font-size: 16px;            /* 1rem */
font-weight: 400;
line-height: 1.7;
```
**Uso**: Note, disclaimer, testo secondario

---

### Technical/Data (JetBrains Mono)

#### Date & Meta Info
```css
font-family: var(--font-mono);
font-size: 14px;            /* 0.875rem */
font-weight: 500;
line-height: 1.5;
letter-spacing: 0.02em;
text-transform: uppercase;
```
**Uso**: Date, orari, tag `<time>`, numeri, codici

---

## Design Tokens

### Font Sizes
```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 2rem;        /* 32px */
--text-4xl: 2.5rem;      /* 40px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 4rem;        /* 64px */
--text-7xl: 5rem;        /* 80px */
--text-8xl: 6rem;        /* 96px */
--text-9xl: 8rem;        /* 128px */
--text-10xl: 10rem;      /* 160px */
```

### Line Heights
```css
--leading-display: 0.85;    /* H1 ultra-grandi */
--leading-tight: 0.95;      /* H2 impattanti */
--leading-snug: 1.1;        /* H3-H4 */
--leading-normal: 1.5;      /* Body large */
--leading-relaxed: 1.7;     /* Body paragrafi */
```

### Letter Spacing
```css
--tracking-tighter: -0.03em;   /* H1, numeri display */
--tracking-tight: -0.015em;    /* H2-H3 */
--tracking-normal: 0;          /* H4, body */
--tracking-wide: 0.02em;       /* Mono, small caps */
--tracking-wider: 0.05em;      /* Date, meta */
--tracking-widest: 0.1em;      /* Uppercase speciali */
```

---

## Utility Classes

### Font Families
```html
<p class="font-display">Syne Display Font</p>
<p class="font-body">Inter Body Font</p>
<p class="font-mono">JetBrains Mono</p>
```

### Pre-composed Styles
```html
<h1 class="text-display">Display Ultra-Bold 160px</h1>
<h2 class="text-hero">Hero Bold 96px</h2>
<h3 class="text-section">Section Bold 64px</h3>
<span class="number-display">01</span>
```

### Font Weights
```html
<p class="font-normal">400</p>
<p class="font-medium">500</p>
<p class="font-semibold">600</p>
<p class="font-bold">700</p>
<p class="font-extrabold">800</p>
```

### Text Transform
```html
<p class="uppercase">UPPERCASE TEXT</p>
<p class="lowercase">lowercase text</p>
<p class="capitalize">Capitalize Text</p>
```

---

## Esempi d'Uso

### Hero Section
```html
<section class="hero">
  <h1>LA FESTA<br>DELLE MEDIE</h1>
  <!-- Syne 800, 160px, -0.03em, line 0.85 -->
</section>
```

### Event Card
```html
<article class="event-card">
  <span class="event-index">01</span>
  <!-- Syne 800, 120px, numero display -->

  <time class="event-date">8 MARZO 2025</time>
  <!-- JetBrains Mono 600, 14px, 0.02em -->

  <h3 class="event-title">IFRATELLICAPRONI</h3>
  <!-- Syne 700, 40px, -0.015em -->

  <p class="event-description">
    Domino del pane e l'omino della mela
  </p>
  <!-- Inter 400, 16px, 1.7 line -->
</article>
```

### About Section
```html
<section class="about">
  <span class="about-number number-display">03</span>
  <!-- Syne 800, 200px -->

  <h2>Chi Siamo</h2>
  <!-- Syne 700, 80px -->

  <p class="lead">
    La Festa delle Medie è un progetto culturale...
  </p>
  <!-- Inter 500, 20px, 1.5 line -->

  <p>
    Un organismo culturale pubblico e visionario...
  </p>
  <!-- Inter 400, 18px, 1.7 line -->
</section>
```

---

## Responsive Behavior

### Breakpoints
- **Desktop**: > 1024px - Scale completa
- **Tablet**: 768px - 1024px - Scale ridotta 20-30%
- **Mobile**: < 768px - Scale ridotta 40-50%

### Strategie
1. **H1-H2**: Riduzioni aggressive (160px → 48px su mobile)
2. **H3-H4**: Riduzioni moderate (48px → 32px su mobile)
3. **Body**: Minimi aggiustamenti (18px → 16px su mobile)
4. **Line-height**: Aumentati leggermente su mobile per leggibilità

---

## Confronto con Design System di Riferimento

### Ispirazione da P22 Studio
✓ **Letterspacing stretto** per titoli display (-0.03em vs -0.01em loro)
✓ **Line-height compatti** per impatto visivo (0.85 vs loro base)
✓ **Scala ampia** con salti significativi (12px → 160px)
✓ **Font variabili** per controllo fine del peso

### Miglioramenti Propri
+ **Tre font distinti** vs. due (aggiunto mono per dati)
+ **Utility classes** pre-composte per uso rapido
+ **Design tokens** completi e documentati
+ **Responsive** ottimizzato per mobile-first

---

## Performance

### Caricamento Ottimizzato
- **Font Google**: `display=swap` per evitare FOIT
- **Variable fonts**: Singolo file per peso range
- **Subset automatico**: Solo caratteri latini
- **Preconnect**: DNS prefetch a fonts.gstatic.com

### Dimensioni
- Syne (400-800): ~15KB
- Inter (100-900): ~120KB (comprehensive)
- JetBrains Mono (100-800): ~35KB
- **Totale**: ~170KB (compressi, cached)

---

## Accessibilità

✓ **Contrasto**: Nero su bianco garantisce WCAG AAA
✓ **Font size**: Minimo 14px, ideale per leggibilità
✓ **Line-height**: 1.5-1.7 per body text (WCAG raccomandato)
✓ **Letterspacing**: Mai troppo stretto su body (-0.005em max)
✓ **Responsive**: Text scaling rispetta preferenze utente

---

## Manutenzione

### Aggiungere Nuovi Stili
1. Definire token in `:root` del global.css
2. Creare utility class se uso frequente
3. Documentare in questo file
4. Testare responsive su tutti i breakpoint

### Best Practices
- Usa sempre **variabili CSS** (`var(--font-display)`)
- Preferisci **utility classes** a stili inline
- Mantieni **gerarchia visiva** coerente
- Testa sempre su **dispositivi reali**

---

**Creato**: 13 Gennaio 2026
**Versione**: 1.0
**Sistema**: Astro + Tailwind CSS + Google Fonts

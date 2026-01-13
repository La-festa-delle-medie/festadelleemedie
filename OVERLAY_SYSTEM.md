# Sistema Overlay Monocromatico
## La Festa delle Medie

---

## Concetto

Il sistema di overlay monocromatico permette di mantenere una palette visiva coerente (Bianco + Nero + Colore Tema) applicando un filtro gradiente colorato su tutte le immagini e video del sito.

**Comportamento**:
- **Default**: Immagini coperte da gradiente monocromatico nel colore tema
- **Hover**: L'overlay scompare rivelando l'immagine originale con leggero zoom

---

## Colore Tema Dinamico

### Controllabile da CMS

Il colore dell'overlay è completamente controllabile dal backend CMS:

1. Vai su `/admin` nel browser
2. Sezione **Impostazioni → Informazioni Sito**
3. Campo **"Colore Tema Overlay"**
4. Seleziona un colore con il color picker
5. Salva le modifiche

Il colore verrà applicato automaticamente a:
- Hero images
- Event card images
- Qualsiasi immagine/video con classe `.media-wrapper`

### Variabili CSS

```css
:root {
  --color-theme: #FF0000;        /* Default: Rosso */
  --color-theme-rgb: 255, 0, 0;  /* RGB per trasparenze */
}
```

Queste variabili vengono caricate dinamicamente da `/src/content/settings/site.json` tramite il componente `ThemeColorLoader.astro`.

---

## Utilizzo

### Markup Base

Avvolgi qualsiasi immagine o video nella classe `.media-wrapper`:

```html
<div class="media-wrapper">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```

**Risultato**:
- Overlay gradiente monocromatico applicato
- Hover: overlay scompare + zoom 102%
- Transizioni smooth

### Esempio con Video

```html
<div class="media-wrapper">
  <video src="/videos/promo.mp4" autoplay loop muted></video>
</div>
```

---

## Varianti Overlay

### Intensità

#### Light (Leggero)
```html
<div class="media-wrapper overlay-light">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```
- Opacità: 40% → 60%
- Uso: Immagini con dettagli importanti

#### Standard (Default)
```html
<div class="media-wrapper">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```
- Opacità: 70% → 85%
- Uso: Generale

#### Heavy (Pesante)
```html
<div class="media-wrapper overlay-heavy">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```
- Opacità: 85% → 95%
- Uso: Background sottili, testo sovrapposto

---

### Direzione Gradiente

#### Verticale (Default)
```html
<div class="media-wrapper">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```
- Da alto (70%) a basso (85%)

#### Orizzontale
```html
<div class="media-wrapper overlay-horizontal">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```
- Da sinistra (70%) a destra (85%)

#### Radiale
```html
<div class="media-wrapper overlay-radial">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```
- Dal centro (50%) verso esterno (90%)

#### Solid (Uniforme)
```html
<div class="media-wrapper overlay-solid">
  <img src="/images/photo.jpg" alt="Foto" />
</div>
```
- Colore uniforme al 75%
- No gradiente

---

## Opzioni Speciali

### Disabilita Overlay
```html
<div class="media-wrapper no-overlay">
  <img src="/images/logo.png" alt="Logo" />
</div>
```
Nessun overlay applicato (es. logo, icone)

### Overlay Permanente
```html
<div class="media-wrapper overlay-permanent">
  <img src="/images/background.jpg" alt="Background" />
</div>
```
- Overlay sempre visibile
- No hover effect
- Uso: Background decorativi

---

## Esempi nei Componenti

### Hero Section
```astro
<section class="hero">
  <div class="media-wrapper hero-media">
    <img src={image} alt="Hero" />
  </div>
</section>
```

### Event Card
```astro
<div class="event-card-image-wrapper media-wrapper">
  <img src={event.image} alt={event.title} />

  <!-- Info overlay (z-index: 2, sopra l'overlay colore) -->
  <div class="event-card-info-overlay">
    <time>{event.date}</time>
    <h3>{event.title}</h3>
  </div>
</div>
```

### Gallery
```html
<div class="gallery">
  <div class="media-wrapper overlay-light">
    <img src="/images/gallery-1.jpg" alt="Gallery 1" />
  </div>
  <div class="media-wrapper overlay-light">
    <img src="/images/gallery-2.jpg" alt="Gallery 2" />
  </div>
</div>
```

---

## CSS Tecnico

### Struttura

```css
.media-wrapper {
  position: relative;
  overflow: hidden;
}

.media-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(var(--color-theme-rgb), 0.7) 0%,
    rgba(var(--color-theme-rgb), 0.85) 100%
  );
  mix-blend-mode: multiply;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 1;
}

.media-wrapper:hover::after {
  opacity: 0;
}

.media-wrapper:hover img,
.media-wrapper:hover video {
  transform: scale(1.02);
}
```

### Mix Blend Mode

`mix-blend-mode: multiply` garantisce che:
- Colori scuri dell'immagine diventino più saturi
- Effetto "poster" artistico
- Bianco rimane relativamente visibile

---

## Z-Index Layers

Quando si sovrappone testo/contenuto alle immagini:

```
z-index: 0  →  Immagine/Video
z-index: 1  →  Overlay monocromatico (::after)
z-index: 2  →  Testo/Contenuto sovrapposto
```

Esempio:
```html
<div class="media-wrapper">
  <img src="photo.jpg" />              <!-- z-index: 0 -->
  <!-- Overlay automatico a z-index: 1 -->
  <div class="content" style="position: absolute; z-index: 2;">
    <h2>Titolo Visibile</h2>
  </div>
</div>
```

---

## Cambiare Colore a Runtime

### Da JavaScript

```javascript
// Cambia colore tema
document.documentElement.style.setProperty('--color-theme', '#00FF00');
document.documentElement.style.setProperty('--color-theme-rgb', '0, 255, 0');
```

### Da Astro Props

```astro
---
const customColor = '#0000FF';
const customColorRgb = '0, 0, 255';
---

<style define:vars={{ customColor, customColorRgb }}>
  .special-section {
    --color-theme: var(--customColor);
    --color-theme-rgb: var(--customColorRgb);
  }
</style>
```

---

## Palette Suggerite

### Rosso (Default)
```
--color-theme: #FF0000;
--color-theme-rgb: 255, 0, 0;
```
**Mood**: Energia, passione, urgenza

### Blu Elettrico
```
--color-theme: #0066FF;
--color-theme-rgb: 0, 102, 255;
```
**Mood**: Tecnologico, professionale, fresco

### Verde Acido
```
--color-theme: #39FF14;
--color-theme-rgb: 57, 255, 20;
```
**Mood**: Punk, underground, vivace

### Viola Deep
```
--color-theme: #6600CC;
--color-theme-rgb: 102, 0, 204;
```
**Mood**: Mistico, artistico, elegante

### Arancione Brutalist
```
--color-theme: #FF6600;
--color-theme-rgb: 255, 102, 0;
```
**Mood**: Caldo, accogliente, vintage

### Fucsia Neon
```
--color-theme: #FF00FF;
--color-theme-rgb: 255, 0, 255;
```
**Mood**: Cyberpunk, moderno, audace

---

## Performance

### Ottimizzazioni Implementate

✓ **Hardware Acceleration**: `transform` e `opacity` per transizioni GPU
✓ **Pseudo-element**: `::after` invece di DOM element
✓ **Pointer Events**: `pointer-events: none` sull'overlay
✓ **CSS Variables**: Cambio colore senza re-render
✓ **Cubic Bezier**: Easing naturale (0.4, 0, 0.2, 1)

### Impatto

- **Overhead CSS**: ~2KB minificato
- **Runtime**: 0ms (nativo CSS)
- **Transizioni**: 60fps garantiti
- **Compatibilità**: Tutti i browser moderni

---

## Accessibilità

### Considerazioni

✓ **Hover non necessario**: Overlay estetico, non funzionale
✓ **Alt text**: Immagini mantengono accessibilità
✓ **Keyboard navigation**: Links/buttons funzionano normalmente
✓ **Screen readers**: Non impattati dall'overlay visivo

### Riduzione Movimento

Per utenti con `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .media-wrapper img,
  .media-wrapper video,
  .media-wrapper::after {
    transition: none !important;
  }

  .media-wrapper:hover img,
  .media-wrapper:hover video {
    transform: none !important;
  }
}
```

---

## Testing

### Verifica Funzionamento

1. Apri una pagina con immagini
2. **Stato default**: Vedi overlay colorato
3. **Hover immagine**: Overlay scompare, immagine originale visibile
4. **Hover via**: Overlay ritorna smooth

### Test Colori

1. Vai su `/admin`
2. Cambia colore tema
3. Salva
4. Ricarica sito
5. Verifica nuovo colore su tutte le immagini

### Browser Testing

✓ Chrome/Edge (Chromium)
✓ Firefox
✓ Safari
✓ Mobile Safari iOS
✓ Chrome Android

---

## Troubleshooting

### Overlay non appare

**Problema**: `.media-wrapper` non ha overlay
**Soluzione**: Verifica che l'elemento abbia `position: relative`

### Colore non cambia

**Problema**: Colore CMS non applicato
**Soluzione**:
1. Controlla `/src/content/settings/site.json`
2. Verifica che `ThemeColorLoader.astro` sia in `<head>`
3. Ricarica pagina (hard refresh: Cmd+Shift+R)

### Testo non visibile

**Problema**: Testo sparisce con overlay
**Soluzione**: Assicurati che il contenuto abbia `z-index: 2` o superiore

### Hover non funziona

**Problema**: Hover non rimuove overlay
**Soluzione**: Verifica che `.media-wrapper:hover::after { opacity: 0 }` sia presente

---

## Futuro / Roadmap

Possibili estensioni:

- [ ] Overlay patterns (stripes, dots)
- [ ] Animazioni ingresso overlay
- [ ] Overlay diversi per categoria
- [ ] Dual-tone gradients
- [ ] Filtri fotografici (grayscale + color)

---

**Creato**: 13 Gennaio 2026
**Versione**: 1.0
**Sistema**: Astro + CSS Custom Properties + Decap CMS

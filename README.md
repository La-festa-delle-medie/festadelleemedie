# La Festa delle Medie - Sito Web

Tema Astro in stile **Brutalist Minimal** con integrazione Decap CMS.

## 🎨 Design

Il sito segue i principi del design brutalist con:
- Palette bianco/nero
- Tipografia FontPopulista bold e grande
- Ampi spazi bianchi
- Bordi netti e definiti
- Layout minimal senza decorazioni
- Riferimento: [Santarcangelo Festival](https://www.santarcangelofestival.com)

## 🚀 Avvio Rapido

### Sviluppo
```bash
npm run dev
```
Il sito sarà disponibile su `http://localhost:4321` (o altra porta se occupata)

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📁 Struttura Progetto

```
├── public/
│   ├── admin/           # Decap CMS
│   ├── fonts/           # FontPopulista
│   └── images/          # Immagini del sito
├── src/
│   ├── components/
│   │   ├── layout/      # BaseLayout, Header, Footer
│   │   ├── sections/    # Hero, EventGrid, Newsletter
│   │   └── ui/          # EventCard, Button, Container
│   ├── content/
│   │   ├── eventi/      # Eventi (Markdown)
│   │   ├── pages/       # Pagine statiche
│   │   └── settings/    # Configurazioni sito
│   ├── pages/           # Routes Astro
│   └── styles/          # CSS globali e font
└── DESIGN_SYSTEM.md     # Documentazione design
```

## 🎨 Sistema di Design

### Colori
- Bianco: `#FFFFFF`
- Nero: `#000000`
- Grigio chiaro: `#F5F5F5`
- Grigio scuro: `#1A1A1A`

### Tipografia
Font: **FontPopulista Regular**
- H1: 64px (mobile: 48px)
- H2: 48px (mobile: 32px)
- H3: 40px (mobile: 32px)
- Body: 16px

### Spaziature
- XS: 8px
- SM: 16px
- MD: 32px
- LG: 64px
- XL: 96px
- 2XL: 128px
- 3XL: 192px

## 📝 Decap CMS

### Accesso
L'interfaccia admin è disponibile su: `http://localhost:4321/admin`

### Collections

1. **Eventi**
   - Cartella: `src/content/eventi/`
   - Campi: titolo, data, immagine, descrizione, corpo
   - Slug automatico

2. **Pagine**
   - Chi Siamo: `src/content/pages/chi-siamo.md`
   - Contatti: `src/content/pages/contatti.md`

3. **Impostazioni**
   - Info sito: `src/content/settings/site.json`
   - Email, social media

## 🖼️ Componenti Disponibili

### Layout
- `BaseLayout` - Layout base con header e footer
- `Header` - Navigazione con logo
- `Footer` - Footer con info e contatti

### Sezioni
- `Hero` - Hero section con immagine e titolo grande
- `EventGrid` - Griglia di card eventi
- `Newsletter` - Form iscrizione newsletter

### UI
- `EventCard` - Card singolo evento
- `Button` - Bottone stile brutalist
- `Container` - Container responsive

## 🎯 Materiali Utilizzati

- **Logo**: `/public/images/logo.png`
- **Font**: FontPopulista Regular (`/public/fonts/`)
- **Immagini**: 12 immagini disponibili in `/materiali/img/`

## 📖 Documentazione

Consulta `DESIGN_SYSTEM.md` per la documentazione completa del design system e la roadmap del progetto.

## 🛠️ Stack Tecnologico

- **Framework**: Astro 5.16.9
- **Styling**: Tailwind CSS 4.1.18 + CSS Custom Properties
- **CMS**: Decap CMS 3.10.0
- **Font**: FontPopulista Regular

## 📦 Deployment

Per il deployment su Netlify o simili:
1. Configurare Git Gateway in Decap CMS
2. Collegare il repository
3. Le variabili d'ambiente non sono necessarie per la configurazione base

---

**Design ispirato a**: Santarcangelo Festival
**Stile**: Brutalist Minimal

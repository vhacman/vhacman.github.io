# 42 Portfolio - Viorica Gabriela Hacman

Portfolio personale che presenta i progetti completati durante il percorso alla 42 Roma.

## Struttura del Sito

```
.
├── index.html              # Landing page con biografia
├── portfolio.html          # Pagina portfolio con tutti i progetti
├── style.css              # Stili globali
├── pages/                 # Cartella con tutte le pagine dei progetti
│   ├── c_piscine/        # Progetti della C Piscine
│   ├── milestone_0/      # Progetti Milestone 0
│   ├── milestone_1/      # Progetti Milestone 1
│   ├── milestone_2/      # Progetti Milestone 2
│   ├── milestone_3/      # Progetti Milestone 3
│   └── milestone_4/      # Progetti Milestone 4
└── subjects/             # PDF dei subject dei progetti
```

## Come Aggiungere il CV e Certificati

### Aggiungere il CV

1. **Prepara il tuo CV in formato PDF**
   - Nominalo `CV_Viorica_Gabriela_Hacman.pdf` (o un nome simile)

2. **Aggiungi il file nella root del progetto**
   ```bash
   cp /path/to/your/cv.pdf ./CV_Viorica_Gabriela_Hacman.pdf
   ```

3. **Aggiorna il link nell'index.html**
   - Apri `index.html`
   - Cerca la riga con `id="cv-button"`
   - Cambia l'`href` da `#` al nome del tuo file CV:
   ```html
   <a href="CV_Viorica_Gabriela_Hacman.pdf" class="cta-button secondary" download>Download CV</a>
   ```

### Certificati Coursera

✅ **I certificati sono già configurati e pronti!**

I certificati Coursera sono già nella cartella `certificates/` e collegati nella landing page:
- `introduction_front_end_meta_certificate.pdf` - Introduction to Front-End Development (Meta)
- `c_fundamentals_certificate.pdf` - C for Everyone: Programming Fundamentals (UC Santa Cruz)

Ogni certificato ha un pulsante "View Certificate" che apre il PDF in una nuova scheda.

**Per aggiungere nuovi certificati:**
1. Aggiungi il PDF nella cartella `certificates/`
2. Modifica `index.html` nella sezione "Education & Certifications"
3. Aggiungi un nuovo blocco `certificate-item` con il link al PDF

## Personalizzazione

### Modificare la Biografia
Apri `index.html` e modifica il contenuto nella sezione `.bio-section`

### Aggiornare i Link Social
Nel file `index.html`, trova la sezione `.contact-links` e aggiorna:
- Link GitHub (già presente)
- Link LinkedIn (aggiorna con il tuo profilo)
- Email (sostituisci con la tua email)

### Modificare le Skills
Nella sezione `.skills-grid`, puoi aggiungere o modificare le skill cards

## Test Locale

Per testare il sito localmente:

```bash
cd /home/vhacman/Desktop/vhacman.github.io
python3 -m http.server 8000
```

Poi apri: `http://localhost:8000`

## Deploy su GitHub Pages

1. Commit e push delle modifiche:
   ```bash
   git add .
   git commit -m "Add landing page and update portfolio structure"
   git push origin main
   ```

2. Il sito sarà disponibile su: `https://vhacman.github.io`

## Navigazione del Sito

- **index.html** - Landing page iniziale con biografia
- **portfolio.html** - Vista completa di tutti i progetti organizzati per milestone
- Ogni progetto ha la sua pagina dedicata con:
  - Descrizione dettagliata
  - Skills acquisite
  - Link al subject PDF
  - Link al repository GitHub

## Tecnologie Utilizzate

- HTML5
- CSS3 (design responsive)
- JavaScript vanilla (minimo)
- GitHub Pages per l'hosting

## Colori del Tema

```css
--bg: #f5ebe0         /* Background principale */
--fg: #3d2817         /* Colore testo */
--accent: #d4845b     /* Colore accento */
--accent-dark: #b8674d /* Accento scuro */
--card-bg: #ede0d4    /* Background card */
--border: #d6ad90     /* Colore bordi */
--hover: #e6ccb2      /* Colore hover */
```

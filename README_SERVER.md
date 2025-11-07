# Come Testare il Portfolio Localmente

## Problema
Se apri i file HTML direttamente dal filesystem (doppio click sul file), vedrai una schermata nera con lista di directory quando clicchi sui progetti.

## Soluzione
Devi usare un server web locale. Ecco come:

### Opzione 1: Python (Consigliato)
```bash
cd /home/vhacman/Desktop/vhacman.github.io
python3 -m http.server 8000
```
Poi apri il browser e vai su: `http://localhost:8000`

### Opzione 2: Node.js (se hai npm)
```bash
npx http-server -p 8000
```
Poi apri il browser e vai su: `http://localhost:8000`

### Opzione 3: PHP
```bash
php -S localhost:8000
```
Poi apri il browser e vai su: `http://localhost:8000`

## GitHub Pages
Quando fai push su GitHub, il sito funzionerà automaticamente su:
`https://vhacman.github.io`

GitHub Pages serve automaticamente i file `index.html` quando accedi a una cartella.

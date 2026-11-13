-- ![alt text](assets/img/logo.png) --

# ATELIER - Landing page 

Questa repository contiene il codice sorgente di una landing page sviluppata per **Atelier**, uno studio di architettura. La piattaforma è progettata per presentare lo studio, i servizi offerti e permettere agli utenti di mettersi in contatto per nuovi progetti.

---

> **Stato del progetto:** ultimato. Questo file viene aggiornato a mano a mano che il progetto viene realizzato.

## Indice
- [Funzionalità](#funzionalità)
- [Tecnologie Utilizzate](#tecnologie-utilizzate)
- [Come Eseguire il Progetto Locale](#come-eseguire-il-progetto-locale)
- [Struttura del progetto](#struttura-del-progetto)
- [Architettura, Responsive Design e Media Query](#architettura-responsive-design-e-media-query)
- [Albero del dom](#albero-del-dom)
- [Come funziona](#come-funziona)
- [Convenzioni di codice](#convenzioni-di-codice)
- [Aggiornamenti](#aggiornamenti)
- [Realizzato da](#realizzato-da)

### Funzionalità

L'applicazione offre un'interfaccia elegante e professionale, strutturata per garantire un'esperienza utente fluida su qualsiasi dispositivo. Tra le principali caratteristiche troviamo:

- **Responsive Design Multi-Device**: Layout flessibile e adattivo testato su differenti breakpoint (Mobile a 375px, Tablet a 768px e Desktop a 1280px), garantendo leggibilità e usabilità a ogni risoluzione.
- **Sezione Servizi in Evidenza**: Presentazione chiara e ordinata delle aree di competenza dello studio (Progettazione residenziale, Interior design e Ristrutturazioni) tramite card dedicate con icone esplicative.
 - **Modulo di Contatto Integrato**: Un form di contatto funzionale con campi dedicati per nome, email, tipologia di progetto e messaggio, accompagnato da un pulsante di invio chiaro ed evidente. <!-- Da modificare e aggiornare -->
- **Navigazione e Footer Strutturati**: Header con menu principale (inclusa modalità compatta per mobile) e un footer completo di informazioni sullo studio, link utili e recapiti diretti.

## Tecnologie Utilizzate

- **HTML5**: Strutturazione semantica dell'interfaccia utente.
- **CSS3**: Styling avanzato, gestione dei layout e responsive design via Media Queries.
- **JavaScript (ES6+)**: Gestione delle interazioni dinamiche della pagina.

## Come Eseguire il Progetto Locale

1. **Clona il repository**:
   ```bash
   git clone https://github.com/lisasciacca/progetto-settimana-6
   ```

2. **Apri l'applicazione**:
   Apri il file `index.html` direttamente nel tuo browser preferito oppure utilizza un'estensione come **Live Server** su VS Code.

---

## Struttura del progetto

```text
.
├── assets/
│   ├── css/
│   │   └── style.css      stile
│   ├── img/
│   │   └── logo.png       logo e immagini
│   └── js/
│       └── script.js      logica e funzionalità
├── index.html             pagina unica 
└── README.md
```

---

immagini placehoder prese da picsum.photos

## Base
Boostrap - bootstrap icon
Navbar 3 link + hamburger (a 768)
hero banner con h1 molto grande con contenuti centrati
Servizi - Titolo, sottotitolo, card prodotti in griglia con hover lift
form contatti - non funzionante ( dimensione fissa ?)
inizia progetto porta a contatti e ha un hover
atelier torna alla home
hover su link e button,  tutte le carte hanno il lift
breakpoint md 768
struttura grafica e colori rispettata
spazietto tra le card


## Intermedio
sezione lavori

## Extra 
modale form non in chiaro
6 card
3 breakpoint (card verticali, 2+2, 3+3)
liberi
tema chiaro e tema scuro
js

#### --- JavaScript Naming Conventions ---
let / classes -> camelCase (es. let userName = "Mario";)
const         -> UPPER_CASE (es. const MAX_USERS = 100;)

## Versioning
ver 0.0 Initial commit
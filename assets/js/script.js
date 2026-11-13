// --- JavaScript Naming Conventions ---
// let / classes -> camelCase (es. let userName = "Mario";)
// const         -> UPPER_CASE (es. const MAX_USERS = 100;)

// --- Elementi della pagina ---
const MENU = document.getElementById("menu");
const HAMBURGER = document.querySelector(".navbar-toggler");
const VOCI_MENU = document.querySelectorAll("#menu .nav-link[href]");
const HTML = document.documentElement;
const BTN_TEMA = document.getElementById("btn-tema");
const ICONA_TEMA = document.getElementById("icona-tema");
const FORM_CONTATTI = document.getElementById("form-contatti");
const NOME_MODALE = document.getElementById("nome-modale");
const ELEMENTO_MODALE_FORM = document.getElementById("modale-form");
const MODALE_FORM = bootstrap.Modal.getOrCreateInstance(ELEMENTO_MODALE_FORM);
const MODALE_CONFERMA = new bootstrap.Modal(document.getElementById("modale-conferma"));

// --- Menu mobile: si chiude dopo il click su una voce ---
VOCI_MENU.forEach(function (voce) {
  voce.addEventListener("click", function () {
    if (MENU.classList.contains("show")) {
      HAMBURGER.click(); // "preme" l'hamburger da codice: Bootstrap chiude il menu
    }
  });
});

// Tema attuale, è false all’inizio perché la pagina si apre in tema chiaro
let temaScuro = false;

// --- Tema chiaro / scuro ---
BTN_TEMA.addEventListener("click", function () {
  temaScuro = !temaScuro; //cambia il tema al click

  if (temaScuro) {
    HTML.setAttribute("data-bs-theme", "dark");
    ICONA_TEMA.textContent = "☀️";
  } else {
    HTML.setAttribute("data-bs-theme", "light");
    ICONA_TEMA.textContent = "🌙";
  }
});

// --- Form contatti nella modale (non invia nulla) ---
FORM_CONTATTI.addEventListener("submit", function (evento) {
  evento.preventDefault(); //Blocca l’invio vero

  if (!FORM_CONTATTI.checkValidity()) {
    //checkValidity() restituisce true se tutti i campi con required sono compilati correttamente, per esempio se l’email ha la @.
    FORM_CONTATTI.classList.add("was-validated"); // was-validated, in Bootstrap colora i campi di rosso o verde e mostra i messaggi invalid-feedback.
    return;
  }

  NOME_MODALE.textContent = document.getElementById("nome").value;

  // Quando la modale del form è chiusa, apre quella di conferma
  // hidden.bs.modal è un evento di Bootstrap che parte quando una modale ha finito di chiudersi,
  ELEMENTO_MODALE_FORM.addEventListener("hidden.bs.modal", function () {
    MODALE_CONFERMA.show();
  }, { once: true });
  //{ once: true } fa scattare l’ascoltatore una volta sola e poi lo rimuove. Senza, a ogni invio se ne aggiungerebbe uno nuovo. Al terzo invio, per esempio, la conferma verrebbe aperta tre volte.

  MODALE_FORM.hide(); //hide() chiude la modale del form.
});

// --- Svuota il form ogni volta che la modale si chiude (X, Esc, click fuori o dopo l'invio) ---
ELEMENTO_MODALE_FORM.addEventListener("hidden.bs.modal", function () {
  FORM_CONTATTI.reset(); //reset() svuota tutti i campi.
  FORM_CONTATTI.classList.remove("was-validated"); //togliamo la classe per completare il reset
});

// --- Sezione lavori: dati delle card ---
const LAVORI = [
  {
    titolo: "Casa sul lago", categoria: "Residenziale", anno: 2025, immagine: "https://images.pexels.com/photos/18573914/pexels-photo-18573914.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    descrizione: "Villa unifamiliare affacciata sul lago, con grandi vetrate per portare la luce in ogni stanza e materiali naturali come legno e pietra locale."
  },
  {
    titolo: "Loft sui Navigli", categoria: "Interior design", anno: 2024, immagine: "https://images.pexels.com/photos/7587827/pexels-photo-7587827.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    descrizione: "Ex laboratorio trasformato in abitazione open space: soppalco in acciaio, cucina su misura e mattoni originali lasciati a vista."
  },
  {
    titolo: "Uffici Studio Verdi", categoria: "Interior design", anno: 2024, immagine: "https://images.pexels.com/photos/19893586/pexels-photo-19893586.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    descrizione: "Nuovi uffici per uno studio professionale, con postazioni flessibili, sale riunioni insonorizzate e arredi progettati su misura."
  },
  {
    titolo: "Villa in collina", categoria: "Residenziale", anno: 2023, immagine: "https://images.pexels.com/photos/32647226/pexels-photo-32647226.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    descrizione: "Casa immersa nel verde, progettata per seguire il pendio del terreno, con terrazze panoramiche e ampio uso del legno."
  },
  {
    titolo: "Caffè Brera", categoria: "Ristrutturazione", anno: 2023, immagine: "https://images.pexels.com/photos/2530586/pexels-photo-2530586.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    descrizione: "Ristrutturazione di un caffè storico: recupero dei pavimenti originali, nuovo bancone e illuminazione calda e soffusa."
  },
  {
    titolo: "Libreria di quartiere", categoria: "Ristrutturazione", anno: 2022, immagine: "https://images.pexels.com/photos/3952095/pexels-photo-3952095.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=600",
    descrizione: "Riqualificazione di un vecchio negozio in libreria, con scaffalature a tutta altezza e un angolo lettura affacciato sulla strada."
  }
];

const GRIGLIA_LAVORI = document.querySelector("#griglia-lavori");
const FILTRI_LAVORI = document.querySelector("#filtri-lavori");

// Crea le card elemento per elemento e le inserisce nella griglia
function mostraLavori(listaLavori) {
  GRIGLIA_LAVORI.replaceChildren(); // svuota la griglia

  listaLavori.forEach(function (lavoro) {
    // Colonna della griglia
    const COLONNA = document.createElement("div");
    COLONNA.className = "col-12 col-md-6 col-lg-4";

    // Card
    const CARD = document.createElement("div");
    CARD.className = "card h-100 border-0 card-lavoro";
    CARD.dataset.indice = LAVORI.indexOf(lavoro); // posizione del lavoro nell'array, serve per la modale
    CARD.dataset.bsToggle = "modal"; // diventa data-bs-toggle="modal": al click Bootstrap apre la modale
    CARD.dataset.bsTarget = "#modale-lavoro"; // diventa data-bs-target="#modale-lavoro": quale modale aprire

    // Immagine del lavoro
    const IMMAGINE = document.createElement("img");
    IMMAGINE.className = "card-img-top immagine-lavoro";
    IMMAGINE.src = lavoro.immagine;
    IMMAGINE.alt = lavoro.titolo; // testo alternativo per accessibilità

    // Corpo della card
    const CORPO = document.createElement("div");
    CORPO.className = "card-body";

    const TITOLO = document.createElement("h3");
    TITOLO.className = "card-title h5 fw-bold";
    TITOLO.textContent = lavoro.titolo;

    const TESTO = document.createElement("p");
    TESTO.className = "card-text text-body-secondary small";
    TESTO.textContent = lavoro.categoria + " · " + lavoro.anno;

    // Montaggio: ogni elemento dentro il suo contenitore
    CORPO.appendChild(TITOLO);
    CORPO.appendChild(TESTO);
    CARD.appendChild(IMMAGINE);
    CARD.appendChild(CORPO);
    COLONNA.appendChild(CARD);
    GRIGLIA_LAVORI.appendChild(COLONNA);
  });
}

// Filtri: un solo ascoltatore sul contenitore dei bottoni (event delegation)
FILTRI_LAVORI.addEventListener("click", function (evento) {
  const BOTTONE = evento.target.closest("button[data-categoria]");
  if (!BOTTONE) return; // click fuori dai bottoni

  const CATEGORIA = BOTTONE.dataset.categoria;

  // Evidenzia il bottone cliccato
  FILTRI_LAVORI.querySelectorAll("button").forEach(function (bottone) {
    bottone.classList.remove("active");
  });
  BOTTONE.classList.add("active");

  // Filtra l'array e ridisegna le card
  if (CATEGORIA === "tutti") {
    mostraLavori(LAVORI);
  } else {
    const LAVORI_FILTRATI = LAVORI.filter(function (lavoro) {
      return lavoro.categoria === CATEGORIA;
    });
    mostraLavori(LAVORI_FILTRATI);
  }
});

// --- Modale dettaglio lavoro ---
const MODALE_LAVORO = document.querySelector("#modale-lavoro");
const TITOLO_DETTAGLIO = document.querySelector("#titolo-lavoro");
const IMMAGINE_DETTAGLIO = document.querySelector("#immagine-dettaglio");
const INFO_DETTAGLIO = document.querySelector("#info-lavoro");
const DESCRIZIONE_DETTAGLIO = document.querySelector("#descrizione-lavoro");

// Prima che la modale si apra, la riempie con i dati della card cliccata
// show.bs.modal è un evento di Bootstrap che parte quando una modale sta per aprirsi
MODALE_LAVORO.addEventListener("show.bs.modal", function (evento) {
  const CARD = evento.relatedTarget; // relatedTarget è l'elemento che ha aperto la modale (la card cliccata)
  const LAVORO = LAVORI[CARD.dataset.indice]; // recupera il lavoro cliccato dall'array

  // Riempie la modale con i dati del lavoro
  TITOLO_DETTAGLIO.textContent = LAVORO.titolo;
  IMMAGINE_DETTAGLIO.src = LAVORO.immagine;
  IMMAGINE_DETTAGLIO.alt = LAVORO.titolo;
  INFO_DETTAGLIO.textContent = LAVORO.categoria + " · " + LAVORO.anno;
  DESCRIZIONE_DETTAGLIO.textContent = LAVORO.descrizione;
});

// Al caricamento della pagina mostra tutti i lavori
mostraLavori(LAVORI);
// --- JavaScript Naming Conventions ---
// let / classes -> camelCase (es. let userName = "Mario";)
// const         -> UPPER_CASE (es. const MAX_USERS = 100;)

// --- Elementi della pagina ---
const MENU = document.getElementById("menu");
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
      bootstrap.Collapse.getOrCreateInstance(MENU).hide();
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
  FORM_CONTATTI.reset(); //reset() svuota tutti i campi.
  FORM_CONTATTI.classList.remove("was-validated"); //togliamo la classe per completare il reset
});
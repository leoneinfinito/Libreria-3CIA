
// ==========================================
// AVVIO
// ==========================================
document.addEventListener("DOMContentLoaded", inizializza);

// ==========================================
// INIZIALIZZA PAGINA
// ==========================================
async function inizializza() {

    const contenitore = document.getElementById("esempi");
    if (!contenitore) return;

    try {

        const res = await fetch("../esercizi.json");
        if (!res.ok) throw new Error("Errore JSON");

        const dati = await res.json();

        contenitore.innerHTML = "";

        dati.forEach(es => {

            const card = document.createElement("div");
            card.className = "card";

            // CLICK → APRE MODAL
            card.addEventListener("click", () => {
                apriModalDaEsercizio(es);
            });

            card.innerHTML = `
                <h3>${es.titolo}</h3>
                <pre id="${es.id}">Caricamento codice...</pre>
                <div class="descrizione-esercizio">
                    ${es.descrizione}
                </div>
            `;

            contenitore.appendChild(card);

            // CARICA FILE C
            caricaFileC(es.fileC, es.id);
        });

    } catch (err) {
        console.error(err);
        contenitore.innerHTML = "<p>Errore caricamento dati.</p>";
    }
}

// ==========================================
// CARICA FILE .C
// ==========================================
async function caricaFileC(path, id) {

    try {

        const res = await fetch(path);
        if (!res.ok) throw new Error("File C non trovato");

        let text = await res.text();

        text = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        const el = document.getElementById(id);
        if (el) el.innerHTML = text;

    } catch (err) {
        console.error(err);
        const el = document.getElementById(id);
        if (el) el.innerText = "Errore caricamento codice.";
    }
}

// ==========================================
// APERTURA MODAL
// ==========================================
async function apriModalDaEsercizio(es) {

    // titolo
    document.getElementById("modal-titolo").innerText = es.titolo;

    // descrizione (da JSON)
    document.getElementById("modal-desc").innerText = es.descrizione;

    // codice (prende file C)
    let codice = "";

    try {
        const res = await fetch(es.fileC);
        codice = await res.text();

        codice = codice
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    } catch {
        codice = "Errore caricamento codice.";
    }

    document.getElementById("modal-code").innerHTML = codice;

    // mostra modal
    document.getElementById("modal").classList.remove("hidden");
}

// ==========================================
// CHIUSURA MODAL
// ==========================================
function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}

// clic fuori per chiudere
document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        chiudiModal();
    }
});

// ESC per chiudere
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        chiudiModal();
    }
});
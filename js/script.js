
document.addEventListener("DOMContentLoaded", init);

async function init() {

    const container = document.getElementById("esempi");

    if (!container) {
        console.error("Container #esempi non trovato");
        return;
    }

    try {
        const res = await fetch("../esercizi.json");

        if (!res.ok) {
            throw new Error("Errore caricamento JSON");
        }

        const dati = await res.json();

        container.innerHTML = "";

        dati.forEach(es => {

            const card = document.createElement("div");
            card.className = "card";

            // 🟦 CARD PULITA (NO <code>)
            card.innerHTML = `
                <h3>${es.titolo}</h3>
                <div class="funzione">${es.nome}</div>
                <p>${es.descrizioneBreve}</p>
            `;

            // CLICK → MODAL
            card.addEventListener("click", async () => {
                apriModal(es);
            });

            container.appendChild(card);
        });

    } catch (err) {
        console.error("Errore:", err);
        container.innerHTML = "<p>Errore nel caricamento dei dati.</p>";
    }
}

/* ==========================================
   MODAL OPEN
========================================== */
async function apriModal(es) {

    const modal = document.getElementById("modal");

    document.getElementById("modal-titolo").innerText = es.titolo;

    document.getElementById("modal-desc").innerText = es.descrizione;

    try {
        const res = await fetch(es.fileC);

        if (!res.ok) {
            throw new Error("File C non trovato");
        }

        let codice = await res.text();

        // escape HTML
        codice = codice
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        document.getElementById("modal-code").innerHTML = codice;

    } catch (err) {
        document.getElementById("modal-code").innerText =
            "Errore caricamento codice.";
        console.error(err);
    }

    modal.classList.remove("hidden");
}

/* ==========================================
   CHIUDI MODAL
========================================== */
function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}

/* click fuori modal */
document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");

    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

/* ESC per chiudere */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        chiudiModal();
    }
});
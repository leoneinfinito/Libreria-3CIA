
document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("esempi");

    const res = await fetch("../esercizi.json");
    const dati = await res.json();

    container.innerHTML = "";

    dati.forEach(es => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${es.titolo}</h3>
            <code>${es.nome}</code>
            <p>${es.descrizioneBreve}</p>
        `;

        card.addEventListener("click", () => {
            openModal(es);
        });

        container.appendChild(card);
    });
});

/* =========================
   APERTURA MODAL
========================= */
async function openModal(es) {

    const modal = document.getElementById("modal");

    document.getElementById("modal-titolo").innerText = es.titolo;
    document.getElementById("modal-desc").innerText = es.descrizione;

    try {
        const res = await fetch(es.fileC);
        let codice = await res.text();

        codice = codice
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        document.getElementById("modal-code").innerHTML = codice;

    } catch (e) {
        document.getElementById("modal-code").innerText =
            "Errore caricamento codice";
    }

    // 
    modal.classList.remove("hidden");
}

/* =========================
   CHIUSURA MODAL
========================= */
function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}

/* ESC */
document.addEventListener("keydown", e => {
    if (e.key === "Escape") chiudiModal();
});

/* click fuori */
document.addEventListener("click", e => {
    const modal = document.getElementById("modal");
    if (e.target === modal) chiudiModal();
});
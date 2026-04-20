
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

        card.addEventListener("click", async () => {
            openModal(es);
        });

        container.appendChild(card);
    });
});

/* =========================
   MODAL OPEN
========================= */
async function openModal(es) {

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

    document.getElementById("modal").classList.remove("hidden");

    // reset scroll
    window.scrollTo(0, 0);
}

/* =========================
   CLOSE MODAL
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
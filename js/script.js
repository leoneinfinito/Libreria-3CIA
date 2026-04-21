
document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("esempi");

    const res = await fetch("../esercizi.json");
    const dati = await res.json();

    dati.forEach(es => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${es.titolo}</h3>
            <code>${es.nome}</code>
            <p>${es.descrizioneBreve}</p>
        `;

        card.addEventListener("click", () => openModal(es));

        container.appendChild(card);
    });
});


async function openModal(es) {

    document.getElementById("modal-titolo").innerText = es.titolo;

    /* =========================
       DESCRIZIONE DA .TXT
    ========================= */
    try {
        const desc = await fetch(es.fileTxt);
        const testo = await desc.text();
        document.getElementById("modal-desc").innerHTML = testo;
    } catch {
        document.getElementById("modal-desc").innerText = "Descrizione non trovata";
    }

    /* =========================
       CODICE DA .C
    ========================= */
    try {
        const code = await fetch(es.fileC);
        let testo = await code.text();

        testo = testo
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        document.getElementById("modal-code").innerHTML = testo;

    } catch {
        document.getElementById("modal-code").innerText = "Codice non trovato";
    }

    document.getElementById("modal").classList.remove("hidden");
}


function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}
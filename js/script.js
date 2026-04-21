
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

/* OPEN MODAL */
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

    } catch {
        document.getElementById("modal-code").innerText = "Errore file";
    }

    document.getElementById("modal").classList.remove("hidden");
}

/* CLOSE */
function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}

document.addEventListener("keydown", e => {
    if (e.key === "Escape") chiudiModal();
});

document.getElementById("modal").addEventListener("click", e => {
    if (e.target.id === "modal") chiudiModal();
});
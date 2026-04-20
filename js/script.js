
document.addEventListener("DOMContentLoaded", init);

async function init() {

    const container = document.getElementById("esempi");

    const res = await fetch("../esercizi.json");
    const dati = await res.json();

    container.innerHTML = "";

    dati.forEach(es => {

        const card = document.createElement("div");
        card.className = "card";

        // 🔥 SOLO FUNZIONE + MINI DESCRIZIONE
        card.innerHTML = `
            <h3>${es.nome}</h3>
            <p>${es.descrizioneBreve}</p>
        `;

        card.onclick = async () => {

            document.getElementById("modal-titolo").innerText = es.nome;

            document.getElementById("modal-desc").innerText = es.descrizione;

            let codice = await fetch(es.fileC).then(r => r.text());

            codice = codice
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

            document.getElementById("modal-code").innerHTML = codice;

            document.getElementById("modal").classList.remove("hidden");
        };

        container.appendChild(card);
    });
}

// CHIUDI MODAL
function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}

document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) modal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") chiudiModal();
});
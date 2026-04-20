
document.addEventListener("DOMContentLoaded", init);

async function init() {

    const container = document.getElementById("esempi");

    try {
        const res = await fetch("../esercizi.json");
        const dati = await res.json();

        container.innerHTML = "";

        dati.forEach(es => {

            const card = document.createElement("div");
            card.className = "card";

            // 🟦 CARD PERFETTA
            card.innerHTML = `
                <h3>${es.titolo}</h3>
                <div class="funzione">${es.nome}</div>
                <p>${es.descrizioneBreve}</p>
            `;

            // CLICK → MODAL
            card.addEventListener("click", async () => {

                document.getElementById("modal-titolo").innerText = es.titolo;
                document.getElementById("modal-desc").innerText = es.descrizione;

                try {
                    const resC = await fetch(es.fileC);
                    let codice = await resC.text();

                    codice = codice
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;");

                    document.getElementById("modal-code").innerHTML = codice;

                } catch {
                    document.getElementById("modal-code").innerText =
                        "Errore caricamento codice";
                }

                document.getElementById("modal").classList.remove("hidden");
            });

            container.appendChild(card);
        });

    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Errore caricamento dati</p>";
    }
}

/* =========================
   CHIUDI MODAL
========================= */
function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}

/* click fuori modal */
document.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) modal.classList.add("hidden");
});

/* ESC */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") chiudiModal();
});
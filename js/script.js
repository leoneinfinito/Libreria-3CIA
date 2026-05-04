document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("esempi");

    const res = await fetch("../esercizi.json");
    const dati = await res.json();

    const categorie = {};

    dati.forEach(es => {

        const nomeCategoria = es.categoria || "Altro";

        if (!categorie[nomeCategoria]) {

            const bloccoCategoria = document.createElement("div");

            bloccoCategoria.className = "categoria-blocco";

            bloccoCategoria.innerHTML = `
                <h2 class="categoria-titolo">
                    ${nomeCategoria}
                </h2>
                <div class="categoria-grid"></div>
            `;

            container.appendChild(bloccoCategoria);

            categorie[nomeCategoria] =
                bloccoCategoria.querySelector(".categoria-grid");
        }

        const card = document.createElement("div");

        card.className = "card";

        card.dataset.search = `
            ${es.titolo}
            ${es.nome}
            ${es.descrizioneBreve}
            ${nomeCategoria}
        `.toLowerCase();

        card.innerHTML = `
            <h3>${es.titolo}</h3>
            <code>${es.nome}</code>
            <p>${es.descrizioneBreve}</p>
        `;

        card.addEventListener("click", () => openModal(es));

        categorie[nomeCategoria].appendChild(card);

    });


    const barraRicerca = document.getElementById("barra-ricerca");

    barraRicerca.addEventListener("input", () => {

        const testo = barraRicerca.value.toLowerCase();

        const categorieDOM =
            document.querySelectorAll(".categoria-blocco");

        categorieDOM.forEach(cat => {

            const cards = cat.querySelectorAll(".card");

            let visibili = 0;

            cards.forEach(card => {

                const contenuto = card.dataset.search;

                if (contenuto.includes(testo)) {
                    card.style.display = "flex";
                    visibili++;
                } else {
                    card.style.display = "none";
                }

            });

            // NASCONDE CATEGORIA SE VUOTA
            if (visibili === 0) {
                cat.style.display = "none";
            } else {
                cat.style.display = "block";
            }

        });

    });

});



async function openModal(es) {

    document.getElementById("modal-titolo").innerText = es.titolo;

    try {
        const desc = await fetch(es.fileTxt);
        const testo = await desc.text();
        document.getElementById("modal-desc").innerHTML = testo;
    } catch {
        document.getElementById("modal-desc").innerText =
            "Descrizione non trovata";
    }

    try {
        const code = await fetch(es.fileC);
        let testo = await code.text();

        testo = testo
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        document.getElementById("modal-code").innerHTML = testo;

    } catch {
        document.getElementById("modal-code").innerText =
            "Codice non trovato";
    }

    document.getElementById("modal").classList.remove("hidden");
}


function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}
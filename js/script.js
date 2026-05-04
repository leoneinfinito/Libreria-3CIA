document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("esempi");

    // Carica JSON
    const res = await fetch("../esercizi.json");
    const dati = await res.json();

    // Oggetto che tiene memoria delle categorie create
    const categorie = {};

    // Creo tutte le card
    dati.forEach(es => {

        const nomeCategoria = es.categoria || "Altro";

        // Se la categoria non esiste, la creo
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

        // Creo la card
        const card = document.createElement("div");

        card.className = "card";

        // Per la ricerca
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

        // Click card
        card.addEventListener("click", () => {
            openModal(es);
        });

        // Inserisco nella categoria giusta
        categorie[nomeCategoria].appendChild(card);

    });


    const barraRicerca =
        document.getElementById("barra-ricerca");

    barraRicerca.addEventListener("input", () => {

        const testoRicerca =
            barraRicerca.value.toLowerCase();

        const tutteLeCard =
            document.querySelectorAll(".card");

        tutteLeCard.forEach(card => {

            const contenuto =
                card.dataset.search;

            if (contenuto.includes(testoRicerca)) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});



async function openModal(es) {

    document.getElementById("modal-titolo").innerText =
        es.titolo;

    // DESCRIZIONE DA TXT
    try {

        const desc = await fetch(es.fileTxt);

        const testo = await desc.text();

        document.getElementById("modal-desc").innerHTML =
            testo;

    } catch {

        document.getElementById("modal-desc").innerText =
            "Descrizione non trovata";

    }


    // CODICE DA C
    try {

        const code = await fetch(es.fileC);

        let testo = await code.text();

        testo = testo
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        document.getElementById("modal-code").innerHTML =
            testo;

    } catch {

        document.getElementById("modal-code").innerText =
            "Codice non trovato";

    }

    document.getElementById("modal")
        .classList
        .remove("hidden");

}

function chiudiModal() {

    document.getElementById("modal")
        .classList
        .add("hidden");

}
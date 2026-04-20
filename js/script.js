
document.addEventListener("DOMContentLoaded", init);

async function init() {

    const container = document.getElementById("esempi-container");

    const res = await fetch("../esercizi.json");
    const dati = await res.json();

    container.innerHTML = "";

    for (const es of dati) {

        const box = document.createElement("div");
        box.className = "esempio";

        // struttura base
        box.innerHTML = `
            <pre id="code-${es.id}">Caricamento codice...</pre>
            <div class="desc" id="desc-${es.id}">Caricamento descrizione...</div>
        `;

        container.appendChild(box);

        // carica file C
        caricaFile(es.fileC, `code-${es.id}`, true);

        // carica descrizione TXT
        caricaFile(es.fileTxt, `desc-${es.id}`, false);
    }
}

async function caricaFile(path, id, isCode) {

    try {
        const res = await fetch(path);
        let text = await res.text();

        if (isCode) {
            text = text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }

        document.getElementById(id).innerHTML = text;

    } catch {
        document.getElementById(id).innerText = "Errore caricamento file";
    }
}
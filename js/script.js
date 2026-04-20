// ==========================================
// INIZIALIZZAZIONE PRINCIPALE
// ==========================================
async function inizializzaEsempi() {
    const contenitore = document.getElementById('esempi');
    if (!contenitore) return;

    try {
        const response = await fetch('../esercizi.json');
        if (!response.ok) throw new Error("Impossibile caricare esercizi.json");

        const dati = await response.json();

        contenitore.innerHTML = "";

        for (const es of dati) {

            const card = document.createElement('div');
            card.className = 'card';

            // CLICK PER APRIRE / CHIUDERE
            card.addEventListener("click", () => {
                card.classList.toggle("active");
            });

            card.innerHTML = `
                <h3>${es.titolo}</h3>

                <!-- CODICE C -->
                <pre id="${es.id}">Caricamento codice...</pre>

                <!-- DESCRIZIONE BREVE (TXT) -->
                <div id="desc-${es.id}" class="descrizione-esercizio">
                    Caricamento spiegazione...
                </div>

                <!-- DETTAGLIO ESPANDIBILE -->
                <div class="dettagli">
                    <div class="dettagli-grid">

                        <div class="esempio">
                            <h3>Esempio</h3>
                            <pre id="ex-${es.id}">Caricamento esempio...</pre>
                        </div>

                        <div class="info">
                            <h3>Descrizione completa</h3>
                            <p id="info-${es.id}">Caricamento info...</p>
                        </div>

                    </div>
                </div>
            `;

            contenitore.appendChild(card);

            // CARICAMENTO FILE C
            caricaContenutoC(es.fileC, es.id);

            // CARICAMENTO TXT
            caricaSpiegazioneTxt(es.fileTxt, `desc-${es.id}`);

            // CARICAMENTO EXTRA (esempio + info JSON)
            caricaExtra(es);
        }

    } catch (error) {
        console.error("Errore generale:", error);
        contenitore.innerHTML = "<p>Errore nel caricamento degli esercizi.</p>";
    }
}

// ==========================================
// CARICAMENTO FILE C
// ==========================================
async function caricaContenutoC(percorso, idElemento) {
    try {
        const res = await fetch(percorso);
        if (!res.ok) throw new Error("File C non trovato");

        let testo = await res.text();

        const pulito = testo
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.innerHTML = pulito;
        }

    } catch (err) {
        console.error("Errore file C:", percorso, err);

        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.innerText = "Errore nel caricamento del codice.";
        }
    }
}

// ==========================================
// CARICAMENTO FILE TXT
// ==========================================
async function caricaSpiegazioneTxt(percorso, idElemento) {
    try {
        const res = await fetch(percorso);
        if (!res.ok) throw new Error("File TXT non trovato");

        let testo = await res.text();

        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.innerHTML = testo;
        }

    } catch (err) {
        console.error("Errore file TXT:", percorso, err);

        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.innerText = "Spiegazione non trovata.";
        }
    }
}

// ==========================================
// CARICAMENTO EXTRA (JSON: esempio + info)
// ==========================================
function caricaExtra(es) {
    const ex = document.getElementById(`ex-${es.id}`);
    const info = document.getElementById(`info-${es.id}`);

    if (ex) {
        ex.textContent = es.esempio || "Nessun esempio disponibile";
    }

    if (info) {
        info.textContent = es.spiegazione || "Nessuna descrizione completa disponibile";
    }
}

// ==========================================
// AVVIO
// ==========================================
document.addEventListener("DOMContentLoaded", inizializzaEsempi);
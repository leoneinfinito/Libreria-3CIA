// Funzione principale che viene eseguita all'avvio
async function inizializzaEsempi() {
    const contenitore = document.getElementById('esempi');
    if (!contenitore) return;

    try {
        // 1. Carica la lista degli esercizi dal file JSON (usiamo ../ perché l'HTML è in una cartella)
        const response = await fetch('../esercizi.json');
        if (!response.ok) throw new Error("Impossibile caricare esercizi.json");
        const dati = await response.json();

        contenitore.innerHTML = ""; // Pulisce il contenitore (toglie eventuali messaggi di errore)

        for (const es of dati) {
            // 2. Crea la struttura della Card (il box bianco)
            const card = document.createElement('div');
            card.className = 'card';
            
            // Creiamo il titolo, lo spazio per il codice e lo spazio per la descrizione
            card.innerHTML = `
                <h3>${es.titolo}</h3>
                <pre id="${es.id}">Caricamento codice...</pre>
                <div id="desc-${es.id}" class="descrizione-esercizio">Caricamento spiegazione...</div>
            `;
            contenitore.appendChild(card);

            // 3. Avvia il caricamento del file C
            caricaContenutoC(es.fileC, es.id);
            
            // 4. Avvia il caricamento del file di spiegazione TXT
            caricaSpiegazioneTxt(es.fileTxt, `desc-${es.id}`);
        }
    } catch (error) {
        console.error("Errore generale:", error);
        contenitore.innerHTML = "<p>Errore nel caricamento della lista esercizi.</p>";
    }
}

// Funzione specifica per caricare il codice C
async function caricaContenutoC(percorso, idElemento) {
    try {
        const res = await fetch(percorso);
        if (!res.ok) throw new Error("File C non trovato");
        let testo = await res.text();

        // TRUCCO: Sostituiamo i simboli < e > altrimenti il browser pensa sia HTML
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
            elemento.innerText = "Errore nel caricamento del codice sorgente.";
        }
    }
}

// Funzione specifica per caricare la spiegazione TXT
async function caricaSpiegazioneTxt(percorso, idElemento) {
    try {
        const res = await fetch(percorso);
        if (!res.ok) throw new Error("File TXT non trovato");
        let testo = await res.text();

        // Qui usiamo innerHTML così se nel TXT scrivi <br> o <b> funzionano!
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

// Dice al browser di far partire la funzione quando la pagina è pronta
document.addEventListener("DOMContentLoaded", inizializzaEsempi);
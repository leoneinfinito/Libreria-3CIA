async function inizializzaEsempi() {
    const contenitore = document.getElementById('esempi');
    if (!contenitore) return;

    try {
        const response = await fetch('../esercizi.json');
        const dati = await response.json();

        contenitore.innerHTML = ""; 

        for (const es of dati) {
            const card = document.createElement('div');
            card.className = 'card';
            
            // AGGIUNTO: Un div con un ID specifico per la descrizione (es: desc-es1)
            card.innerHTML = `
                <h3>${es.titolo}</h3>
                <pre id="${es.id}">Caricamento codice...</pre>
                <div id="desc-${es.id}">Caricamento spiegazione...</div>
            `;
            contenitore.appendChild(card);

            // 1. Carica il codice .c
            caricaContenutoC(es.fileC, es.id);
            
            // 2. NOVITÀ: Carica la spiegazione .txt
            // Passiamo il percorso del file txt e l'id del div dove metterlo
            caricaSpiegazioneTxt(es.fileTxt, `desc-${es.id}`);
        }
    } catch (error) {
        console.error("Errore:", error);
    }
}

// Funzione aggiuntiva per il file TXT
async function caricaSpiegazioneTxt(percorso, idElemento) {
    try {
        const res = await fetch(percorso);
        if (!res.ok) throw new Error();
        let testo = await res.text();
        // Usiamo innerHTML così se metti <b> o <br> nel txt funzionano!
        document.getElementById(idElemento).innerHTML = testo;
    } catch (err) {
        document.getElementById(idElemento).innerText = "Spiegazione non trovata.";
    }
}
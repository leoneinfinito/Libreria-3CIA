/* --- Funzione per caricare il codice dai file .c --- */
function caricaEsempio(file, elementId) {
    // Fetch esegue una richiesta per leggere il contenuto del file
    fetch(file)
        .then(response => {
            // Se il file non viene trovato, lancia un errore
            if (!response.ok) throw new Error('File non trovato');
            return response.text();
        })
        .then(data => {
            /* TRASFORMAZIONE CARATTERI:
               Dobbiamo sostituire < e > perché altrimenti il browser 
               pensa che #include <stdio.h> sia un tag HTML e lo nasconde.
            */
            const cleanedCode = data
                .replace(/&/g, "&amp;") // Protegge le &
                .replace(/</g, "&lt;")  // Trasforma < in testo
                .replace(/>/g, "&gt;"); // Trasforma > in testo

            // Inserisce il codice pulito nel tag <pre> corrispondente
            document.getElementById(elementId).innerHTML = cleanedCode;
        })
        .catch(error => {
            // Messaggio mostrato se qualcosa va storto
            document.getElementById(elementId).innerText = "Errore: impossibile caricare " + file;
            console.error(error);
        });
}

/* Esecuzione: carichiamo i file negli ID definiti nell'HTML.
   Assicurati che i nomi dei file Es1.c, ecc. siano corretti.
*/
document.addEventListener("DOMContentLoaded", () => {
    caricaEsempio('FILE_C/prezzo.c', 'code-es1');
    caricaEsempio('FILE_C/Diferenza.c', 'code-es2');
    caricaEsempio('FILE_C/Palindroma.c', 'code-es3');
    caricaEsempio('FILE_C/somma_fatoriale.c', 'code-es4');
});
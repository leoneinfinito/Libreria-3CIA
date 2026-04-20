
// APRI MODAL
function apriModal(titolo, descrizione, codice) {

    document.getElementById("modal-titolo").innerText = titolo;
    document.getElementById("modal-desc").innerText = descrizione;
    document.getElementById("modal-code").innerText = codice;

    document.getElementById("modal").classList.remove("hidden");
}

// CHIUDI MODAL
function chiudiModal() {
    document.getElementById("modal").classList.add("hidden");
}

// chiusura cliccando fuori
document.addEventListener("click", function(e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        chiudiModal();
    }
});

// ESC per chiudere
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        chiudiModal();
    }
});
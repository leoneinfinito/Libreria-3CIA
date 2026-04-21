#include <stdio.h>
#include "3cia.h"

int main() {

    char stringa[100];

    printf("Inserisci una stringa: ");
    LeggiStringa(stringa, 100);	// chiama la funzione LeggiStringa per leggere una stringa da input
 

    printf("La stringa inserita e': %s\n", stringa);	// stampa la stringa inserita

    return 0;
}
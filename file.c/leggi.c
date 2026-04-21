#include <stdio.h>
#include "3cia.h"

int main() {

    char stringa[100];

    printf("Inserisci una stringa: ");

    /* chiama la funzione LeggiStringa per 
    leggere una stringa da input*/
    
    LeggiStringa(stringa, 100);	
 
    // stampa la stringa inserita
    printf("La stringa inserita e': %s\n", stringa);	

    return 0;
}
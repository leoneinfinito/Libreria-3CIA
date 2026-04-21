#include <stdio.h>
#include "3cia.h"

int main() {
 
    int numeri[5];
    int i , risultato;

    for ( i = 0; i < 5; i++) {
        printf("Inserisci il %d numero: ", i + 1);
        scanf("%d", &numeri[i]);
    }
        
    /* chiama la funzione ContaSopraMedia per calcolare 
    il numero di elementi sopra la media */

    risultato = contaSopraMedia(numeri, 5);

    printf("Elementi sopra la media: %d\n", risultato);

    return 0;
}
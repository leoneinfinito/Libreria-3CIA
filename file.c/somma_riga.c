#include <stdio.h>
#include "3cia.h"

int main() {
    int matrice[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int risultato;

    /* chiama la funzione sommaRiga per calcolare 
    la somma della riga scelta */
    risultato = sommaRiga(1, 3, matrice);

    printf("La somma della riga scelta e': %d\n", risultato);

    return 0;
}
#include <stdio.h>

int main() {
    int matrice[3][3] = {
        {1, 5, 3},
        {4, 9, 2},
        {7, 6, 8}
    };

    int risultato;

    /* chiama la funzione maxRiga per calcolare 
    il massimo della riga scelta */
    risultato = maxRiga(1, 3, matrice);

    printf("Il valore massimo della riga scelta e': %d\n", risultato);

    return 0;
}
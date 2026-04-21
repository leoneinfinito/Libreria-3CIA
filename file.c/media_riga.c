#include <stdio.h>

int main() {
    int matrice[3][3] = {
        {3, 6, 9},
        {4, 8, 12},
        {5, 10, 15}
    };

    float risultato;

    /* chiama la funzione mediaRiga per calcolare 
    la media della riga scelta */
    risultato = mediaRiga(0, 3, matrice);

    printf("La media della riga scelta e': %.2f\n", risultato);

    return 0;
}
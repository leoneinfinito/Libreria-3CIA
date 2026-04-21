#include <stdio.h>

int main() {
    int matrice[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int risultato;

    /* chiama la funzione sommaDiagonale per calcolare
    la somma degli elementi sulla diagonale della matrice */
    
    risultato = sommaDiagonale(3, 3, matrice);

    printf("La somma della diagonale e': %d\n", risultato);

    return 0;
}
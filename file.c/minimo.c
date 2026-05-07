#include <stdio.h>
#include "3cia.h"

int main() {
    int vettore[5] = {8, 3, 12, 1, 6};
    int risultato;

    risultato = minimo(vettore, 5);

    printf("Il valore minimo e': %d\n", risultato);

    return 0;
}
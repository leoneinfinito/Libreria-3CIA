#include <stdio.h>

int main() {
    int numeri[5];
    int i;

    for ( i = 0; i < 5; i++) {
        printf("Inserisci il %d numero: ", i + 1);
        scanf("%d", &numeri[i]);
    }
    
     /* chiama la funzione Massimo per calcolare
      il massimo dei numeri inseriti */
    int risultato = massimo(numeri, 5);

    printf("Il valore massimo è: %d\n", risultato);

    return 0;
}
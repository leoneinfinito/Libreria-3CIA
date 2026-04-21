#include <stdio.h>
#include "3cia.h"

int main() {

    int num[5];
    int i;

    for ( i = 0; i < 5; i++) {
        printf("Inserisci il %d numero: ", i + 1);
        scanf("%d", &num[i]);
    }
      
    /* chiama la funzione TrasformaAssoluto per
     trasformare i numeri in valori assoluti */
    TrasformaAssoluto(num, 5);

    for(i = 0; i < 5; i++) {
        printf("%d ", num[i]);
    }

    return 0;
}
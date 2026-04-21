#include <stdio.h>
#include "3cia.h"

int main() {
   
    int numeri[5];
    int i;

    for ( i = 0; i < 5; i++) {
        printf("Inserisci il %d numero: ", i + 1);
        scanf("%d", &numeri[i]);
    }
        
     // chiama la funzione Media per calcolare la media dei numeri inseriti
    printf("La media dei numeri inseriti e' : %.2f\n", media(numeri, 5));


    return 0;
}
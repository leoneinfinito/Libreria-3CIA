#include <stdio.h>
#include "3cia.h"

int main() {
 
    int numero;

    printf("Inserisci un numero: ");
    scanf("%d", &numero);
    
    /* chiama la funzione SommaDa per calcolare
    la somma da 1 a numero e la stampa*/
    
    printf("La somma da 1 a %d e' : %d\n", 
        numero, SommaDa(numero));

    return 0;
}
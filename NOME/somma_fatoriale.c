#include <stdio.h>
#include "3cia.h"

int main() {
 
    int numero;

        printf("Inserisci un numero: ");
        scanf("%d", &numero);
    
       printf("La somma da 1 a %d e' : %d\n", numero, SommaDa(numero));
       printf("Il fattoriale di %d e' : %d\n", numero, Fattoriale(numero));
       
    return 0;
}



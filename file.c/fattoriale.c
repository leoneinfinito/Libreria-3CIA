#include <stdio.h>
#include "3cia.h"

int main() {
 
    int numero;

    printf("Inserisci un numero: ");
    scanf("%d", &numero);
    
    /* chiama la funzione Fattoriale per calcolare
     il fattoriale del numero inserito e lo stampa*/
     
    printf("Il fattoriale di %d e' : %d\n", numero, Fattoriale(numero));
       
    return 0;
}



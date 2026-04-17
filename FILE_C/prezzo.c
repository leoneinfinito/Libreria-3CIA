#include <stdio.h>
#include "3cia.h"

int main() {
 
    float prezzo,prezzo_scontato;
    int sconto;

    printf("Dammi il prezzo del prodotto\n > ");
    scanf("%f", &prezzo);

    printf("Dammi lo sconto in percentuale\n > ");
    scanf("%d", &sconto);

    prezzo_scontato = PrezzoScontato(prezzo, sconto);

    printf("Il prezzo scontato e' : %.2f\n", prezzo_scontato);

    return 0;
}
#include <stdio.h>
#include <string.h>
#include "3cia.h"

int main(){

    char stringa[100];

    printf("Inserisci una stringa: ");
    scanf("%[^\n]", stringa); 

    /* chiama la funzione Palindroma per verificare
     se la stringa inserita è palindroma */
     
    if (Palindroma(stringa)) {
        printf("La stringa e' palindroma.\n");
    } else {
        printf("La stringa non e' palindroma.\n");
    }

    return 0;
}
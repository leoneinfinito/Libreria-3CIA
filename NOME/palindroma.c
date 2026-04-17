#include <stdio.h>
#include <string.h>
#include "3cia.h"

int main(){

    char stringa[100];

    printf("Inserisci una stringa: ");
    LeggiStringa(stringa, 100);

    if (Palindroma(stringa)) {
        printf("La stringa e' palindroma.\n");
    } else {
        printf("La stringa non e' palindroma.\n");
    }

    return 0;
}
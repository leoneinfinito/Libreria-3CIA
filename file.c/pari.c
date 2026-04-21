#include <stdio.h>

int main() {
    int risultato;

    /* chiama la funzione pari per verificare
    se il numero è pari o dispari */
    risultato = pari(8);

    if(risultato) {
        printf("Il numero e' pari\n");
    } else {
        printf("Il numero e' dispari\n");
    }

    return 0;
}
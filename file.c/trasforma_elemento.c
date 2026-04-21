#include <stdio.h>
#include <math.h>

int main() {
    int numero;
    int risultato;

    printf("Inserisci un numero: ");
    scanf("%d", &numero);

    /* chiama la funzione trasformaElemento per trasformare
    il numero in base alla sua parità */
    risultato = trasformaElemento(numero);

    printf("Il risultato della trasformazione e': %d\n", risultato);

    return 0;
}
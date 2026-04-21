#include  <stdio.h>
#include  "3cia.h"


 int main(){

    int num1, num2;

    printf("dammi il primo numero: ");
    scanf("%d", &num1);

    printf("dammi il secondo numero: ");
    scanf("%d", &num2);

    /* chiama la funzione DifferenzaAssoluta per calcolare
     la differenza assoluta tra num1 e num2 e la stampa*/

    printf("la differenza assoluta tra %d e %d e' : %d\n"
        , num1, num2, DifferenzaAssoluta(num1, num2));

    return 0;
}



#include <stdio.h>
#include "3cia.h"

int main() {
    int matrice[2][2];

    printf("Inserisci valori interi per la matrice:\n");

    input(matrice, 2, 2, 'd');

    printf("Matrice inserita:\n");

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            printf("%d ", matrice[i][j]);
        }
        printf("\n");
    }

    return 0;
}
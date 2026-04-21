#include <stdio.h>

int main() {
    
    int matrice[2][2] = {
        {2, 3},
        {4, 5}
    };

    int i, j;

    /* chiama la funzione trasformaMatrice per trasformare
    gli elementi della matrice in base alla loro parità */
    trasformaMatrice(2, 2, matrice);

    printf("Matrice trasformata:\n");

    for(i = 0; i < 2; i++) {
        for(j = 0; j < 2; j++) {
            printf("%d ", matrice[i][j]);
        }
        printf("\n");
    }

    return 0;
}
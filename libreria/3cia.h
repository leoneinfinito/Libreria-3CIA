#ifndef PELELLA_H
#define PELELLA_H

#include <stdio.h>
#include <string.h>

//--------------------------Prezzo Scontato---------------------------------

static float PrezzoScontato( float prezzo , int sconto ){
    return prezzo - (prezzo * sconto / 100);
}

//--------------------------Leggi stringa----------------------------------- (non avevo voglia di memorizzare "scanf("%[^\n]",..)" )

static void LeggiStringa(char frase[], int dimensione) {
    int i = 0;
    fgets(frase, dimensione, stdin);

    while (frase[i] != '\0') {
        if (frase[i] == '\n') {
            frase[i] = '\0';
        }
        i++;
    }
}

//-------------------------------Differenza Assoluta---------------------------

static int DifferenzaAssoluta (int a , int b ){
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

//----------------------------------Somma----------------------------------------
static int SommaDa(int n) {
    int somma = 0;
    int i;
    for (i = 1; i <= n; i++) {
        somma = somma + i;
    }
    return somma;
}
//---------------------------------Fattoriale-------------------------------------

static int Fattoriale ( int n){
    if (n == 0) {
        return 1;
    } else {
        return n * Fattoriale(n - 1);
    }
}


//-----------------------------------Palindroma--------------------------------------

static int Palindroma(char stringa[]) {
    int lunghezzaDellaStringa = 0;
    int indiceInizio = 0;
    int indiceFine;

    while (stringa[lunghezzaDellaStringa] != '\0') {
        lunghezzaDellaStringa = lunghezzaDellaStringa + 1;
    }

    indiceFine = lunghezzaDellaStringa - 1;

    while (indiceInizio < indiceFine) {

        // salta spazi a sinistra
        if (stringa[indiceInizio] == ' ') {
            indiceInizio = indiceInizio + 1;
        }
        // salta spazi a destra
        else if (stringa[indiceFine] == ' ') {
            indiceFine = indiceFine - 1;
        }
        else {
            if (stringa[indiceInizio] != stringa[indiceFine]) {
                return 0;
            }
            indiceInizio = indiceInizio + 1;
            indiceFine = indiceFine - 1;
        }
    }

    return 1;
}

//--------------------------------------------------------------------------


#endif

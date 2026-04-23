//definizione instruzioni per la cpu e dichiarazione di funzioni che possono essere utilizzate in altri file .c
#ifndef CIA_H
#define CIA_H

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

//--------------------------Prezzo Scontato---------------------------------

static float PrezzoScontato( float prezzo , int sconto ){
    return prezzo - (prezzo * sconto / 100);      // calcolo del prezzo scontato
}

//--------------------------Leggi stringa-----------------------------------

static void LeggiStringa(char frase[], int dimensione) {
    int i = 0;
    fgets(frase, dimensione, stdin);	// legge una stringa da input e la memorizza in frase

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
        return a - b;		// se a è maggiore di b, la differenza assoluta è a - b
    } else {
        return b - a;		// altrimenti, la differenza assoluta è b - a
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
static int Fattoriale(int n) {
    int risultato = 1;
    int i;
    
    for ( i = 1; i <= n; i++) {
        risultato = risultato * i;
    }
    
    return risultato;
}


//-----------------------------------Palindroma--------------------------------------

static int Palindroma(char stringa[]) {
    int lunghezzaDellaStringa = 0;
    int indiceInizio = 0;
    int indiceFine;

    while (stringa[lunghezzaDellaStringa] != '\0') {
        lunghezzaDellaStringa = lunghezzaDellaStringa + 1;			// calcolo della lunghezza della stringa
    }

    indiceFine = lunghezzaDellaStringa - 1;			// indiceFine è l'indice dell'ultimo carattere della stringa

    while (indiceInizio < indiceFine) {

        // salta spazi a sinistra
        if (stringa[indiceInizio] == ' ') {		// se il carattere in posizione indiceInizio è uno spazio, incremento indiceInizio per saltare lo spazio
            indiceInizio = indiceInizio + 1;
        }
        // salta spazi a destra
        else if (stringa[indiceFine] == ' ') { // se il carattere in posizione indiceFine è uno spazio, decremento indiceFine per saltare lo spazio
            indiceFine = indiceFine - 1;
        }
        else {
            if (stringa[indiceInizio] != stringa[indiceFine]) {  // se i caratteri in posizione indiceInizio e indiceFine sono diversi, la stringa non è palindroma
                return 0;
            }
            indiceInizio = indiceInizio + 1;
            indiceFine = indiceFine - 1;
        }
    }

    return 1;
}

//----------------Media Dentro Un Vettore-------------------------
static float media(int numeri[], int dimensione){
    float somma = 0;
    int i;

    for(i = 0; i < dimensione; i++){
        somma += numeri[i];
    }

    return somma / dimensione;
}

//-------------------------Conta Numeri Sopra La Media-----------------------------------------

static int contaSopraMedia(int numeri[], int dimensione) {
    int i;
    float Media;
    int somma = 0;
    int conta = 0;

    // calcolo della somma
    for(i = 0; i < dimensione; i++) {
        somma = somma + numeri[i];
    }

    Media = somma / dimensione;

    // conto i numeri sopra la media
    for(i = 0; i < dimensione; i++) {
        if(numeri[i] > Media) {
            conta++;
        }
    }

    return conta;
}

//----------------Numero Massimo In Un Vettore-----------------

static int massimo(int vettore[], int dimensione){
    int i;
    int max = vettore[0];

    for(i = 1; i < dimensione; i++){
        if(vettore[i] > max){
            max = vettore[i];
        }
    }

    return max;
}

//-------------------------Trasforma In Numero Assoluto------------------------------------

static void TrasformaAssoluto(int num[], int dimensione){
    int i;

    for(i = 0; i < dimensione; i++){
        num[i] = abs(num[i]);
    }
}

//-----------------------Somma Riga Matrice--------------------------------

static int sommaRiga(int rigaScelta, int colonne, int matrice[][colonne]){
    int i;
    int somma = 0;

    for(i = 0; i < colonne; i++){
        somma = somma + matrice[rigaScelta][i];
    }

    return somma;
}

//-------------------------Media Dentro Riga--------------------------------
static float mediaRiga(int rigaScelta, int colonne, int matrice[][colonne]){
    int somma;
    float media;
    int i;

    somma = 0;

    for(i = 0; i < colonne; i++) {
        somma = somma + matrice[rigaScelta][i];
    }

    media = somma / colonne;

    return media;
}

//-------------------------Numero Massimo Dentro Riga--------------------------------

static int maxRiga(int rigaScelta, int colonne, int matrice[][colonne]){
    int i;
    int max = matrice[rigaScelta][0];

    for(i = 1; i < colonne; i++){
        if(matrice[rigaScelta][i] > max){
            max = matrice[rigaScelta][i];
        }
    }

    return max;
}

//----------------Verifica Pari o Dispari--------------------

static int pari(int num){
    return num % 2 == 0;
}

//-------------------Trasforma Elemento------------------------------

static float trasformaElemento(int numero){
   float risultato;

    if(numero % 2 == 0){
        risultato = numero * numero;  // se è pari -> quadrato
    }else{
    
        risultato = numero * numero * numero;  // se è dispari -> cubo
    }
    return risultato;
}

//-------------------Trasforma Matrice------------------------------

static void trasformaMatrice(int righe, int colonne, int matrice[][colonne]) {
    int i , j;

    for(i = 0; i < righe; i++) {
        for(j = 0; j < colonne; j++) {

            if(matrice[i][j] % 2 == 0) {
                matrice[i][j] = matrice[i][j] * 2;
            } else {
                matrice[i][j] = matrice[i][j] + 1;
            }
        }
    }
}

//-------------------Somma Diagonale Matrice-------------------------------

static int sommaDiagonale(int righe, int colonne, int matrice[righe][colonne]){
    int i;
    int somma = 0;
    int min;

    if(righe < colonne){
        min = righe;
    }else{
        min = colonne;
    }

    for(i = 0; i < min; i++){
        somma = somma + matrice[i][i];
    }

    return somma;
}

#endif
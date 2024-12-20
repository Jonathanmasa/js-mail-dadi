// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero random da 1 a 6 per il giocatore
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;

// Genero un numero random da 1 a 6 per il computer
let numeroComputer = Math.floor(Math.random() * 6) + 1;

// lancio dado computer e giocatore 
console.log("lancio del computer:" + numeroComputer);
console.log("lancio del giocatore:" + numeroGiocatore);

// SE il lancio del giocatore è maggiore del lancio computer
if (numeroGiocatore > numeroComputer) {
    // vince il giocatore
    console.log("Complimenti il giocatore ha vinto");

    // SE il lancio del computer è maggiore del lancio del giocatore
    } else if (numeroGiocatore < numeroComputer) {
        // hai perso vince il computer
        console.log("Mi dispiace hai perso ha vinto il computer");

        // SE il risultato dei lanci sono pari
     } else {
            // è un pareggio
            console.log("Pareggio");
            
        }
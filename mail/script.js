// Mail
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

// Creo una lista di email di invitati ad una festa.
let mailInvitati = ["luca.rondi@gmail.com", "martina.russo@gmail.com", "giada.invernizzi@gmail.com", "mauro.locatelli@gmail.com", "valerio.moreschi@gmail.com", "emanuele.filardi@gmail.com", "sara.esposito@gmail.com", "enrico.rossi@gmail.com", "francesco.bianchi@gmail.com", "giacomo.alberici@gmail.com"];

// Chiedo all'utente la sua mail
let mailUtente = prompt("inserisci la tua mail");
console.log(mailInvitati, mailUtente);

// Controlla presenza mail nella lista presenti
let presenzaMail = false;

// Ciclo di controllo lista invitati
for (let i = 0; i < mailInvitati.length; i++) {
    if (mailInvitati[i] === mailUtente) {
        presenzaMail = true;
        
    }
}

// Messaggio appropriato
if (presenzaMail) {
    console.log("Benvenuto! sei nella lista degli invitati"); 
}   else {
    console.log("Purtroppo non sei nella lista degli invitati");
    
}
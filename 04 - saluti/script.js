/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const myName = 'Mario';


// Dichiara la funzione qui.

function logMessage(str){
    console.log(`Ciao ${str}`);
}

const msg = str => `Ciao ${str}`

// Invoca la funzione qui e stampa il risultato in console
logMessage(myName)
console.log(msg(myName));



//Risultato atteso se si passa 'Mario': // ciao Mario
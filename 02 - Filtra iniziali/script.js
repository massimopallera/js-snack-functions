/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// const userInput = 'A'
const userInput = prompt('Inserisci carattere:')

function startWithChar(char, array){
    let new_array = []

    for (let i = 0; i < array.length; i++){
        if (array[i][0] === char){
            new_array.push(array[i])
        }
    }

    return new_array
}


const namesStartWithChar = (char, array) => {
    let new_array = []
    for (let i = 0; i < array.length; i++){
        if (array[i].charAt(0) === char){
            new_array.push(array[i])
        }
    }
    return new_array
}

// Invoca la funzione qui e stampa il risultato in console
console.log(namesStartWithChar(userInput, names));
console.log(startWithChar(userInput, names));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
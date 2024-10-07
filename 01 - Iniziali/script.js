/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/**
 * 
 * @param {array} array 
 */
function takeFirst(array){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i].charAt(0))
    }
    return newArray
}

const takeFirstArrow = array => {
    let firsts = []
    
    for (let i = 0; i < array.length; i++){
        firsts.push(array[i][0])
    }

    return firsts
}

// Invoca la funzione qui e stampa il risultato in console
const firstChars = takeFirst(names)
console.log(firstChars)

console.log(takeFirstArrow(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
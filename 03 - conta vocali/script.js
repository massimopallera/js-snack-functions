/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVocals(str){
    const vocals = ['a','e','i','o','u']
    let count = 0

    for (let i =0; i < str.length; i++){
        for (let j = 0; j < vocals.length; j++){
            if (str[i] === vocals[j]){
                count++;
            }
        }
    }

    return count
}

// Invoca la funzione qui e stampa il risultato in console
const count = countVocals(word)
console.log(count);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
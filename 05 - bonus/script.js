/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const myName = 'Mario';


// Dichiara la funzione qui.
const saluto = my_name => {
    const time = new Date().getHours()
    
    if (time <= 13){
        return `Buongiorno ${my_name}`
    } else if(time <= 17){
        return `Buon Pomeriggio ${my_name}`
    } else {
        return `Buonasera ${my_name}`
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(myName));



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
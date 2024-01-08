const fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

console.table(fruits);

fruits.push('pesca')

console.table(fruits);

let isFound = false;

for (let i = 0; i < fruits.length && !isFound; i++) {
    const currentFruit = fruits[i];
    
    let message = "Oh no, devo uscire a comprare il cocomero!"
    
    if (currentFruit === 'cocomero') {
        message = "Trovato! Devo solo preparare il cocktail."
        isFound = true; 
    } 

    console.log(message)

   
}

// come ha fatto marco, il messaggio l'ha scritto dopo così che spuntasse solo un messaggio

// let message;

// if(hasWatermelon) {
//     message = "Trovato! Devo solo preparare il cocktail.";
// } else {
//     message = "Oh no, devo uscire a comprare il cocomero!";
// }

// console.log(message);

//oppure con l'operatore ternario

// const message = hasWatermelon ? "Trovato! Devo solo preparare il cocktail." :"Oh no, devo uscire a comprare il cocomero!";

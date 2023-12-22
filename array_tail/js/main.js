const btn = document.getElementById('btn');
const questionElement = document.getElementById('question'); 
const errorBox = document.getElementById('error-box');
const numbers = []


btn.addEventListener('click', function () {
    const number = parseInt(questionElement.value);
    const numberStamp = number - 4
    // ! Validazione
    let message = ''

    
    if (isNaN(number) || number <= 5) {
        message = 'Inserisci un numero maggiore di 5';
        
    }
    
    errorBox.innerText = message;
    

    // * Riempimento dell'array

    // numbers.length = number

    for (let i = 0; i <= number; i++) {
        const randomNumbers = Math.floor(Math.random() * 100) + 1;
        
        numbers.push(randomNumbers)
    }

    for (let i = numberStamp; i < numbers.length; i++) {
        console.log(numbers[i])
    }
    
    // console.log(numbers[numbers.length - 5])
    console.table(numbers)

    //il mio number è la lunghezza del mio array mentre gli elementi dentro devono essere
    //numeri random
});
const btn = document.getElementById('btn');
const questionTotalNumbersElement = document.getElementById('question'); 
const questionlastNumbersElement = document.getElementById('question-numbers-to-show')
const errorBoxTotalNumbers = document.getElementById('error-box');
const errorBoxLastNumbers = document.getElementById('error-box-numbers')
const result = document.getElementById('result');
const numbers = []


btn.addEventListener('click', function () {
    const number = parseInt(questionTotalNumbersElement.value);
    const numberToShow = parseInt(questionlastNumbersElement.value)
    const numberStamp = number - numberToShow 
    let message = ''

    // ! Validazione
    let isValid = true; 
    let isValidSecond = true;
    
    if (isNaN(number) || number <= 5) {
        isValid = false;
    }   else if (isNaN(numberToShow) || numberToShow < 0 || numberToShow > number) {
        isValidSecond = false;
    }

    if (!isValid) {
        message = 'Inserisci un numero maggiore di 5';
        errorBoxTotalNumbers.innerText = message;
        questionTotalNumbersElement.classList.add('is-invalid');
        return;
    } 
    if (!isValidSecond) {
        message = 'Il valore deve essere maggiore di zero ma non superiore al massimo numero di elementi della tua lista';
        errorBoxLastNumbers.innerText = message;
        questionlastNumbersElement.classList.add('is-invalid');
        return;
    }

    
    errorBoxTotalNumbers.innerText = '';
    questionTotalNumbersElement.classList.remove('is-invalid');
    questionTotalNumbersElement.classList.add('is-valid');
    errorBoxLastNumbers.innerText = '';
    questionlastNumbersElement.classList.remove('is-invalid');
    questionlastNumbersElement.classList.add('is-valid');


    

    // * Riempimento dell'array

    
    //inserisco tanti numeri random nell'array quanto è il valore dell'input dell'utente
    for (let i = 1; i <= number; i++) {
        const randomNumbers = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumbers);
    }

    message = `Gli ultimi ${numberToShow} numeri della tua lista sono: <ul>`

    //stampo i numeri finchè ho elementi ma partendo dal numero che mi è stato dato - 4, stampando così gli ultimi 5
    for (let i = numberStamp; i < numbers.length; i++) {
        message += `<li>${numbers[i]}</li>`;
        console.log(i);
    };

    message += '</ul>';
    result.innerHTML = message;
    console.table(numbers);

    
});
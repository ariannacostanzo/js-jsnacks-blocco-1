console.log('js ok');

//creo due array

const colors = ['black', 'red', 'white', 'orange', 'blue', 'green', 'violet', 'purple'];
const numbers = [2, 42, 18]

// partendo da 3 perchè ci sono già 3 elementi in numbers, fino a raggiungere la lunghezza di colors,
//che è 8 aggiungo numeri random a numbers
for (let i = 3; i < colors.length; i++) {
    const randomNumber = Math.floor(Math.random() * (50 + 1 - 1)) + 1;

    numbers.push(randomNumber);
}
console.table(colors);
console.table(numbers);
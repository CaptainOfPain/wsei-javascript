//zadanie 0
function distFromAvarage(array) {
    let avg = 0;
    let sum = 0;
    array.forEach(number => {
        sum += number;
    })
    avg = sum/array.length;

    let avgArray = [];
    array.forEach(number => {
        avgArray.push(number - avg);
    })
    return avgArray;
}

//zadanie 1
const fruits = ['peach', 'pear', 'oragne', 'banana', 'apple']
console.log('first fruit -', fruits[0]);
console.log('last fruit - ', fruits[fruits.length-1]);
console.log('foreach fruits:');
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



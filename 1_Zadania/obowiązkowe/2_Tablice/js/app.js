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

//zadanie 3
function printTable(array) {
    array.forEach(element => console.log(element));
}

//zadania 4
function multiply(array) {
    let score = 1;
    array.forEach(element => score = score * element);
    return score;
}

//zadania 5
function getEvenAvarage(array) {
    let avg = null;
    let counter = 0;
    let sum = 0;
    array.forEach(element => {
        if (element % 2 == 0) {
            sum += element;
            counter++;
        }
    });
    if(counter > 0){
        avg = sum / counter;
    }

    return avg;
}

//zadanie 6
function sortArray(array) {
    return array.sort(function(a, b){return a-b});
}

//zadanie 7 
function addArrays(first, second){
    let returnArray = [];
    if (first.length < second.length) {
        let tmp = second;
        second = first;
        first = tmp;
    }

    first.forEach((element, index) => {
        let valueOfSecond = second[index] === undefined ? 0 : second[index];
        returnArray.push(element+valueOfSecond);
    });

    return returnArray;
}



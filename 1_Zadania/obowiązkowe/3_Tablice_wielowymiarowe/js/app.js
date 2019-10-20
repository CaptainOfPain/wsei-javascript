
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//zadanie 0
function checkArray(array) {
    let checkedArray = [];
    array.forEach(element => {
        checkedArray.push(!element.some(el => el % 2 != 0));
    });
    return checkedArray;
}

//zadanie 1
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

//zadanie 2
task2Array.forEach(el => console.log(el));
task2Array.forEach(el => console.log(el.length));
task2Array.forEach(el => {
    el.forEach(nestedEl => console.log(nestedEl));
});

//zadanie 3 
function print2DArray(array) {
    array.forEach(el => {
        el.forEach(nestedEl => console.log(nestedEl));
    });
}

//zadanie 4
let array2D = [[1,2,3], [1,4,3], [15, 2354, 1212512,222,32], [1,2]];
print2DArray(array2D);

//zadanie 5
function create2DArray(columns, rows) {
    let counter = 1;
    let array = [];
    for(let columnIndex = 0; columnIndex < columns; columnIndex++) {
        let tmpArray = [];
        for(rowIndex = 0; rowIndex < rows; rowIndex++) {
            tmpArray.push((columnIndex * rows) + rowIndex+1)
        }
        array.push(tmpArray);
    }

    return array;
}
//zadanie 0a
let city = {
    capital: 'Warszawa',
    population: 2300000,
    president: 'Duduś',
    primeMinisters: ['Antek', 'Wojtek']
};
console.log(city);

//zadanie 0b
let timeMachine = {shape: 'string', model: 'model', run(date, place) {}};
console.log(timeMachine);

//zadanie 1
let book = {title: 'title', author: 'author', numberOfPages: 234};
console.log(book);

//zadanie 2
let person = {name: 'name', age: 23, sayHello() {
    console.log('hello');
}};
console.log(person);
person.sayHello();

//zadanie 3
let recipe = {
    title: 'szarlotka',
    servings: 4,
    ingredients: []
}
recipe.ingredients = ['japka', 'monka', 'mleko', 'jojka'];
console.log(recipe);

//zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

if(fork.isExist){
    console.log('istnieje');
}

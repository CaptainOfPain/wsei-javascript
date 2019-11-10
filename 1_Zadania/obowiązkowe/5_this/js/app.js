//Zadanie 0

let car = {
    brand: 'Mercedes', 
    color: "Czarny", 
    numberOfKilometers: 0, 
    printCarInfo() {
        return `${this.color} ${this.brand}, ${this.numberOfKilometers}`;
    }, 
    drive(km) {
        this.numberOfKilometers += km;
    }
};

car.printCarInfo();
car.drive(20);
car.printCarInfo();

//Zadanie 1
car.dates = ['10.10.2011', '10.10.2012', '9.10.2013',
 '10.10.2014', '10.10.2015', '10.10.2016', '10.10.2017',
  '10.10.2018', '10.10.2019']

car.addDates = function(date) {
    this.dates.push(date);
}
car.getDates = function() {
    return this.dates;
}

//zadanie 3
let stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        return this.step;
    }
}
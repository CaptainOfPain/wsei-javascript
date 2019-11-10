function Calculator() {
    this.calculationResults = [];
}

Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    this.calculationResults.push(`added ${num1} to ${num2} got ${result}`);
    return result;
}
Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    this.calculationResults.push(`multiplied ${num1} to ${num2} got ${result}`);
    return result;
}
Calculator.prototype.substract = function(num1, num2) {
    let result = num1 - num2;
    this.calculationResults.push(`substracted ${num1} to ${num2} got ${result}`);
    return result;
}
Calculator.prototype.divide = function(num1, num2) {
    let result = num2 > 0 ? num1 / num2 : null;
    this.calculationResults.push(`divided ${num1} to ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function() {
    this.calculationResults.forEach(c => console.log(c));
}

Calculator.prototype.clearOperations = function() {
    this.calculationResults = [];
}
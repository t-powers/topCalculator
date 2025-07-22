// #1 added operand functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// #2 setup variables for numbers and operator
let firstInput = '';
let operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
let secondInput = '';

// snagged digit button elements
const clickDigits = document.querySelectorAll('.digits');

// got calculator's screen
const viewCalculation = document.getElementById('viewCalculation');

// #3, used add function to test
const operate = () => {
    return `${firstInput} ${operatorBtn.add} ${secondInput} = ` + add(firstInput, secondInput);
};




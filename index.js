// #1 added operand functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// #2 variables for numbers and operator
let firstInput = '';
let operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
let secondInput = '';

// snagged digit button elements
const clickDigits = document.querySelectorAll('.digits');
// grabbed calculator functions
const clickFunctions = document.querySelectorAll('.functions');
// got calculator's screen
const viewCalculation = document.getElementById('viewCalculation');

// #3

clickDigits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        const targetValue = e.target.textContent;
        viewCalculation.textContent += targetValue;

    });
});

clickFunctions.forEach(symbols => {
    symbols.addEventListener('click', (e) => {
        const targetValue = e.target.textContent;
        viewCalculation.textContent += targetValue;

    });
});








// #1 added operand functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
// {add: '+', subtract: '-', multiply: '*', divide: '/'};


// #2 variables for numbers and operator
let firstInput = '';
let operatorBtn = '';
let secondInput = '';

// snagged digit button elements
const clickDigits = document.querySelectorAll('.digits');
// grabbed calculator functions

const viewCalculation = document.getElementById('viewCalculation');

// #3
const operate = (e) => {
    const targetValue = e.target.textContent;
    viewCalculation.textContent += targetValue;
};

clickDigits.forEach(clickDigit => {
    clickDigit.addEventListener('click', (e) => {
        operate(e);
    });
});
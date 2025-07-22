// #1 added operand functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// #2 variables for numbers and operator
let firstInput = 0;
let operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
let secondInput = 0;

// snagged digit button elements
const clickDigits = document.querySelectorAll('.digits');
// grabbed calculator functions
const clickFunctions = document.querySelectorAll('.function');
// got calculator's screen
const viewCalculation = document.getElementById('viewCalculation');








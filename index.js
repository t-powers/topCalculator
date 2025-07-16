const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let firstInput = '';
let operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
let secondInput = '';

const clickDigits = document.getElementById('[digits]');
const output = document.getElementById('viewCalculation');


const calculateInputs = (firstInput, secondInput) => {
    return add(firstInput, secondInput);

};
const operate = (firstInput, secondInput) => {
    return `${firstInput} ${operatorBtn.add} ${secondInput} = `;
};

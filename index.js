const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let firstInput = 55;
let operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
let secondInput = 5;

const clickDigits = document.getElementsByClassName('digits');
const output = document.getElementById('viewCalculation');
output.textContent = 43243;

const calculateInputs = (firstInput, secondInput) => {
    return add(firstInput, secondInput);
};
const operate = () => {
    return `${firstInput} ${operatorBtn.add} ${secondInput} = ` + add(firstInput, secondInput);
};


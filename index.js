const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const firstInput = '';
const operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
const secondInput = '';


const calculateInputs = (firstInput, secondInput) => {
    return add(firstInput, secondInput);

};

const displayResults = document.getElementById('viewCalculation');
displayResults.textContent = calculateInputs(2, 3);


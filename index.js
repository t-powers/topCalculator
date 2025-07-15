const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const firstInput = 5;
const operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
const secondInput = 50;


const calculateInputs = (firstInput, secondInput) => {
    return add(firstInput, secondInput);

};
const operate = (firstInput, secondInput) => {
    return `${firstInput} ${operatorBtn.add} ${secondInput} = `;
};

const displayResults = document.getElementById('viewCalculation');
displayResults.textContent = operate(firstInput, secondInput) + calculateInputs(firstInput, secondInput);



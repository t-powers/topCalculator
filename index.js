let firstOperand = null;
let secondOperand = null;
let inputOperator = null;
const viewDisplay = document.getElementById('viewCalculation');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');

const operatorFunctions = {
    '+': (firstInput, secondInput) => {
        return firstInput + secondInput;
    },
    '-': (firstInput, secondInput) => {
        return firstInput - secondInput;
    },
    '*': (firstInput, secondInput) => {
        return firstInput * secondInput;
    },
    '/': (firstInput, secondInput) => {
        return firstInput / secondInput;
    }
};

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        const operatorTarget = e.target.textContent;
        viewDisplay.textContent = operatorTarget;

    });
});
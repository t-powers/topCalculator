let firstOperand = 0;
let secondOperand = null;
let inputOperator = null;
const viewDisplay = document.getElementById('viewCalculation');
const digits = document.querySelectorAll('.digits');
const operators = document.querySelectorAll('.operators');

const initialValue = () => {
    viewDisplay.textContent = firstOperand;
};

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



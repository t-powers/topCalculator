let firstOperand = '';
let secondOperand = '';
let inputOperator = '';
const viewDisplay = document.getElementById('viewCalculation');


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




let firstOperand = '';
let secondOperand = '';
let inputOperator = '';
const viewDisplay = document.getElementById('viewCalculation');
const digits = document.querySelectorAll('.digits');

digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    });
});


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


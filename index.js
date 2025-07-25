let firstOperand = '';
let secondOperand = '';
let inputOperator = '';
const viewDisplay = document.getElementById('viewCalculation');
const digits = document.querySelectorAll('.digits');

digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        const firstOperand = e.target.textContent;
        viewDisplay.textContent = firstOperand;
        console.log(firstOperand);

    });
});

digits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        const firstOperand = e.target.textContent;
        viewDisplay.textContent = firstOperand;
        console.log(firstOperand);

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




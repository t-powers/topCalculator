const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let firstInput = 55;
let operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
let secondInput = 5;

const clickDigits = document.querySelectorAll('.digits');
const viewCalculation = document.getElementById('viewCalculation');


clickDigits.forEach(button => {
    button.addEventListener('click', e => {
        viewCalculation.textContent = e.target.textContent;
    });
});


const calculateInputs = (firstInput, secondInput) => {
    return add(firstInput, secondInput);
};
const operate = () => {
    return `${firstInput} ${operatorBtn.add} ${secondInput} = ` + add(firstInput, secondInput);
};




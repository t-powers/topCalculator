const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let firstInput = '';
let operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
let secondInput = '';

// snagged digit button elements
const clickDigits = document.querySelectorAll('.digits');

// got calculator's screen
const viewCalculation = document.getElementById('viewCalculation');

clickDigits.forEach(digit => {
    digit.addEventListener('click', (e) => {
        const buttonPress = e.target.textContent;
        viewCalculation.textContent = buttonPress;
    });
});
// added adding function to test addition :+)
const calculateInputs = (firstInput, secondInput) => {
    return add(firstInput, secondInput);
};

// formatted calculation input/outputs onto viewCalculation
const operate = () => {
    return `${firstInput} ${operatorBtn.add} ${secondInput} = ` + add(firstInput, secondInput);
};




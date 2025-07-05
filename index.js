const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const firstInput = '';
const operatorBtn = {add: '+', subtract: '-', multiply: '*', divide: '/'};
const secondInput = '';

const calculateInputs = (firstInput, secondInput) => {
    const operation = add(firstInput, secondInput);
    return (`${firstInput} ${operatorBtn.add} ${secondInput} = ${operation}`);
};
console.log(calculateInputs(99, 2));
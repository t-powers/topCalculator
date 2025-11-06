const buttonValues = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
];
const rightSymbols = ['÷', '×', '-', '+', '='];
const topSymbols = ['AC', '+/-', '%'];

const display = document.getElementById('display');

let a = 0;
let operator = null;
let b = null;

for (let i = 0; i < buttonValues.length; i++) {
    const button = document.createElement('button');
    const value = buttonValues[i];
    button.innerText = value;


    if (value == 0) {
        button.style.width = '200px';
        button.style.gridColumn = 'span 2';
    }

    button.addEventListener('click', () => {
        if (rightSymbols.includes(value)) {

        } else if (topSymbols.includes(value)) {
            if (value == 'AC') {
                clearAll();
                display.value = '';

            } else if (value == '+/-') {
                if (display.value != '' && display.value != '0') {
                    if (display.value[0] == '-') {
                        display.value = display.value.slice(1);
                    } else {
                        display.value = '-' + display.value;
                    }
                }


            } else if (value == '%') {
                display.value = Number(display.value) / 100;
            }

        } else {
            if (value == '.') {
                if (display.value != '' && !display.value.includes(value)) {
                    display.value += value;
                }

            } else if (display.value == '0') {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });

    function clearAll() {
        let a = 0;
        let operator = null;
        let b = null;

    }

    document.getElementById('buttons').appendChild(button);

}
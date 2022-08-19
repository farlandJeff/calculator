const display = document.querySelector('.display');
let dNum = '0';
display.textContent = dNum;

let num1 = 0;
let num2 = 0;
let operator = '';
let switchNum = false;

const numBtns = document.querySelectorAll('button');
numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.getAttribute('class') == 'operator') {
            if (e.target.textContent == '=') {
                num1 = operate(num1, num2, operator);
                num2 = 0;
                display.textContent = num1;
                
            } else {
                if (num1 > 0 && num2 > 0) {
                    num1 = operate(num1, num2, operator);
                    num2 = 0;
                    display.textContent = num1;
                }
                operator = e.target.textContent;
            }
        } else if (num1 == 0) {
            if (num1 == 0) {
                num1 = +e.target.textContent;
                display.textContent = num1;
            } else {
                num1 = num1 + e.target.textContent;
                display.textContent = num1;
            }
        } else {
            if (num2 == 0) {
                num2 = +e.target.textContent;
                display.textContent = num2;
            } else {
                num2 = num2 + e.target.textContent;
                display.textContent = num2;
            }
        }

    });
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    if (op == '+') return add(a, b);
    if (op == '-') return subtract(a, b);
    if (op == '*') return multiply(a, b);
    if (op == '/') return divide(a, b);
}


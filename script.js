const display = document.querySelector('.display');
let dNum = '0';
let num1 = null;
let num2 = null;
let operator1 = null;
let operator2 = null;
let result = null
const numBtns = document.querySelectorAll('button');



function displayNumber() {
    display.textContent = dNum;
}

displayNumber();


numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        
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

function percent(a) {
    return a / 100;
}

function operate(a, b, op) {
    if (op == '+') return add(a, b);
    if (op == '-') return subtract(a, b);
    if (op == '*') return multiply(a, b);
    if (op == '/') return divide(a, b);
    if (op == '%') return percent(a);
}


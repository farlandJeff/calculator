let dNum = '0';
let num1 = null;
let num2 = null;
let operator1 = null;
let operator2 = null;
let result = null
const numBtns = document.querySelectorAll('button');

function displayNumber() {
    const display = document.querySelector('.display');
    display.textContent = dNum;
}

displayNumber();


numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.classList.contains('num')) {
            numInput(btn.value);
            displayNumber();
        }
        if (btn.classList.contains('operator')) {
            opInput(btn.textContent);
        }
        if (btn.classList.contains('equals')) {
            equalInput();
            displayNumber();
        }
    });
});

function numInput(num) {
    if (dNum == '0') {
        dNum = num;
    } else {
        dNum = dNum + num;
    }
}

function opInput(op) {
    if (operator1 == null) {
        operator1 = op;
        num1 = +dNum;
        dNum = '0';
    } else if (operator1 != null) {
        operator2 = op;
        num2 = +dNum;
        num1 = operate(num1, num2, operator1);
        operator1 = operator2;
        operator2 = null;
        num2 = null;
        dNum = num1;
        displayNumber();
        dNum = '0';
    }
}

function equalInput() {
    num2 = +dNum;
    num1 = operate(num1, num2, operator1);
    dNum = num1;
    num1 = null;
    num2 = null;
}



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

